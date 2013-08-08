"use strict"

# Send message to notifications
# Initiate General roll back if possible

App.ErrorHandler = (err) ->
    console.log err

# Single function to handle events and store them

App.ProcessEvents = (host, events) ->

    host = host
    modifiedClasses = {}
    addedClasses    = {}
    deletedClasses  = {}

    addedClassesHandler = (object) ->
        if object.console
            App.SaveConsoleRecord(host, object.console)
        if object.pool
            App.SavePoolRecord(host, object.pool)
        if object.vm
            App.SaveVMRecord(host, object.vm)


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

    processVM = (host, element) ->
        if element.is_a_template isnt true
            App.Server.find({'id': host}).then( (obj) ->
                vm = App.VM.createRecord

            )

    for key, value of vm
        processVM(host, value)

App.SaveConsoleRecord = (host, consoles) ->
    #console = App.Console.createRecord(
    #   hostUrl: hostUrl
    #);

    for key, value of consoles
        console.log value

App.SaveHostRecord = (hostUrl, hostUser, hostPassword, hostToken) ->
    host = App.Server.createRecord(
        hostUrl: hostUrl,
        hostName: hostUser,
        hostPassword: hostPassword,
        hostToken: hostToken
    );
    App.Global.set('hosts', App.Global.get('hosts')+1)
    host.save()
    host.id


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
                    record = App.SaveHostRecord(hostUrl, hostUser, hostPassword, res.token)
                    App.ProcessEvents(record, res.events)

            )
        )

