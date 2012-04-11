Ext.define("App.controller.twitter.Controller", {
    extend: "Ext.app.Controller",

    config: {
        models: [
            "App.model.twitter.Tweet"
        ],

        views: [
            "App.view.twitter.Explorer",
            "App.view.twitter.Tweets"
        ],

        stores: [
            "App.store.twitter.Tweets"
        ],

        refs: {
            // Primary views
            explorer: "twitterexplorer",
            tweetsView: "twitterexplorer #tweets",

            // Buttons
            refreshButton: "twitterexplorer #refreshButton"
        },

        control: {
            refreshButton: {
                tap: function() {
                    this.refresh();
                }
            }
        }
    },

    refresh: function() {
        console.log("App.controller.TweetExplorer::refresh()");

        var store = Ext.getStore("twitterstore");

        store.load();
    }
});
