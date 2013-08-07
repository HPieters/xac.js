"use strict"

# Do a loop on EventsToken
# Get data from host
# do a request to the host
# If any new events send to ProcessEvents
# Update host token value
App.Scheduler =
    start:( () ->
        if App.Global.hosts > 0
            Ember.debug("[Scheduler] Started scheduling");
            this.interval = setInterval(this.poll, 10000)
    ).observes("App.Global.hosts")
    poll: () ->
        App.Server.find()

        App.Server.find({}).then( (obj) ->
            Ember.debug("[Scheduler] Polling")
            #Build polling update stuff
        )

    stop: () ->
        clearInterval this.interval
