"use strict"

# Do a loop on EventsToken
# Get data from host
# do a request to the host
# If any new events send to ProcessEvents
# Update host token value

App.Scheduler = () ->
    this.interval = ''

    start = () ->
        Ember.debug("[Scheduler] Started scheduling");
        interval = setInterval(poll, 10000)

    poll = () ->
        App.Server.find()

        App.Server.find({}).then( (obj) ->
            Ember.debug("[Scheduler] Polling")
            App.EventsCheck
        )

    stop = () ->
        clearInterval this.interval

    start()