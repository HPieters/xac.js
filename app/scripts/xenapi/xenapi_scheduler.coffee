"use strict"

# Do a loop on EventsToken
# Get data from host
# do a request to the host
# If any new events send to ProcessEvents
# Update host token value

App.Scheduler = () ->
    interval = '5000'

    start = () ->
        Ember.debug("[Scheduler] Started scheduling");
        interval = setInterval(poll, interval)

    poll = () ->
        App.Server.find({}).then( (obj) ->
            Ember.debug("[Scheduler] Polling")

            hostObject = obj.get('content')[0].record

            App.EventsCheck(hostObject.get('hostUrl'), hostObject.get('hostName'), hostObject.get('hostPassword'), hostObject.get('hostToken'), hostObject.get('id'), (err, res) ->
                if err
                    Ember.debug(err)
                else
                    Ember.debug("[Scheduler] Polling Successfull")
            )
        )

    stop = () ->
        clearInterval this.interval

    start()