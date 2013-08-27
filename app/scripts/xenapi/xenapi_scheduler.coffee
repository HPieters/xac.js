"use strict"

# Do a loop on EventsToken
# Get data from host
# do a request to the host
# If any new events send to ProcessEvents
# Update host token value

App.Scheduler = () ->
    interval    = '5000'
    polling     = {}

    start = () ->
        Ember.debug("[Scheduler] Started scheduling");
        interval = setInterval(poll, interval)

    poll = () ->
        App.Server.find({}).then( (data) ->
            content = data.get('content')

            content.forEach( (item) ->
                hostObject = item.record
                if polling[hostObject.get('id')] != true
                    polling[hostObject.get('id')] = true
                    Ember.debug("[Scheduler] Polling")
                    App.EventsCheck(hostObject.get('hostUrl'), hostObject.get('hostName'), hostObject.get('hostPassword'), hostObject.get('hostToken'), hostObject.get('id'), (err, res) ->
                        if err
                            Ember.debug(err)
                        else
                            Ember.debug("[Scheduler] Polling Successfull")
                            polling[res] = false

                    )
            )
        )

    stop = () ->
        clearInterval this.interval

    #if App.Global.get('hosts') > 0
    start()