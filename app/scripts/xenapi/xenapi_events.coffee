"use strict"

# Send message to notifications
# Initiate General roll back if possible

App.ErrorHandler = (err) ->
    console.log err

# Single function to handle events and store them

App.ProcessEvents = (host, events, callback) ->

    host = host
    modifiedClasses = {}
    addedClasses    = {}
    deletedClasses  = {}

    addedClassesHandler = (object) ->
        console.log object
        if object.console
            App.SaveConsoleRecord(host, object.console)
        if object.vm
            App.SaveVMRecord(host, object.vm)
        if object.pool
            App.SavePoolRecord(host, object.pool)



    modifiedClassesHandler = (object) ->
        #console.log object

    deletedClassesHandler = (object) ->
        #console.log object

    classifyEvent = (eventObject) ->
        eventClassName = eventObject['class']
        eventReference = eventObject['ref']

        switch eventObject.operation
            when "mod"
                if !modifiedClasses[eventClassName]
                    modifiedClasses[eventClassName] = {}
                modifiedClasses[eventClassName][eventReference] = eventObject.snapshot
            when "add"
                if !addedClasses[eventClassName]
                    addedClasses[eventClassName] = {}
                addedClasses[eventClassName][eventReference] = eventObject.snapshot
            when "del"
                if !deletedClasses[eventClassName]
                    deletedClasses[eventClassName] = {}
                deletedClasses[eventClassName][eventReference] = eventObject.snapshot

    classifyEvent eventObject for eventObject in events

    addedClassesHandler addedClasses
    modifiedClassesHandler modifiedClasses
    deletedClassesHandler deletedClasses

    callback(null,true)

App.SavePoolRecord = (host, pool) ->

    # Check if the pool already exsits, if so don't add it again

    checkPool = (uuid, element, host, callback) ->
        App.Pools.find({poolUUID: uuid}).then( (obj) ->
            length = obj.get('content').length
            if length is 0
                callback(null, true, host, element, uuid)
            else
                callback(null, obj, host, element, uuid)
        )

    #

    processPool = (host, element) ->
        checkPool(element.uuid, element, host, (err, res, host, element, uuid) ->
            if err
                errorHandler err
            else
                if res is true
                    App.Global.set('pools', App.Global.get('pools')+1)

                    App.Server.find({'id': host}).then( (obj) ->
                        pool = App.Pools.createRecord(
                            poolUUID: element.uuid
                            poolName: element.name_label
                        );
                        hostRecord = obj.get('content')[0].record
                        pool.get('servers').pushObject(hostRecord)
                        pool.save()
                        hostRecord.set('pool',pool)
                        hostRecord.save()

                    )
                else
                    record = res.get('content')[0].record

                    App.Server.find();

                    App.Server.find({'id': host}).then( (obj) ->
                        hostRecord = obj.get('content')[0].record
                        hostRecord.set('pool', record)
                        record.get('servers').pushObjects(obj)
                        record.save()
                        hostRecord.save()
                    )
        )

    for key, value of pool
        processPool(host, value)

App.SaveVMRecord = (host, vm) ->
    processVM = (host, element, hostRecord) ->
        if element.is_a_template isnt true
            vmRecord = App.VM.createRecord(
                uuid: element.uuid,
                controlDomain: element.is_control_domain,
                power_state: element.power_state,
                name: element.name_label,
                description: element.name_description,
                vcpuStartup: element.VCPUs_at_startup,
                vcpuMax: element.VCPUs_max,
                memory_dynamic_max: element.memory_dynamic_max,
                memory_dynamic_min: element.memory_dynamic_min,
                memory_overhead: element.memory_overhead,
                memory_static_max: element.memory_static_max,
                memory_static_min: element.memory_static_min,
                memory_target: element.memory_target,
                metrics: element.metrics
            );
            vmRecord.set('host',hostRecord)
            vmRecord.save()

    App.Server.find({'id': host}).then( (obj) ->
        hostRecord = obj.get('content')[0].record
        for key, value of vm
            processVM(host, value, hostRecord)
        hostRecord.save()
    )


App.SaveConsoleRecord = (host, consoles) ->
    #console = App.Console.createRecord(
    #   hostUrl: hostUrl
    #);

    #for key, value of consoles
        #console.log value


App.SaveHostRecord = (hostUrl, hostUser, hostPassword, hostToken,callback) ->
    host = App.Server.createRecord(
        uuid: '',
        hostUrl: hostUrl,
        hostName: hostUser,
        hostPassword: hostPassword,
        hostToken: hostToken
    );
    App.Global.set('hosts', App.Global.get('hosts')+1)
    host.save()
    host.one('didCreate', () ->
        callback host.id
    )

# Should build in saving session rather than the host information

App.EventsCheck = (hostUrl, hostUser, hostPassword, hostToken) ->

    client = new XenAPI(hostUser,hostPassword,hostUrl)

    client.init((err,res) ->
        if err
            errorHandler err
        else
            Ember.Debug('Running EventsCheck')
            # Successful connection to server
            client.event.from([["*"],hostToken,30.1],(err, res) ->
                if err
                    App.ErrorHandler err
                else
                    App.ProcessEvents(record, res.events)
            )
        )

App.EventsInit = (hostUrl, hostUser, hostPassword, callback) ->

    client = new XenAPI(hostUser,hostPassword,hostUrl)

    client.init((err,res) ->
        if err
            errorHandler err
        else
            # Successful connection to server
            client.event.from([["*"],"",0.1],(err, res) ->
                if err
                    App.ErrorHandler err
                else
                    App.SaveHostRecord(hostUrl, hostUser, hostPassword, res.token, (record) ->
                        App.ProcessEvents(record, res.events, callback)
                    )


            )
        )

