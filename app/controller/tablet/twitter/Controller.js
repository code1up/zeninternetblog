Ext.define("App.controller.tablet.twitter.Controller", (function() {

    function _refresh() {
        console.log("App.controller.tablet.TweetExplorer::refresh()");

        var store = Ext.getStore("twitterstore");

        store.load();
    }

    return {
        extend: "Ext.app.Controller",

        config: {
            models: [
                "App.model.twitter.Tweet"
            ],

            views: [
                "App.view.twitter.tablet.Explorer",
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
                refreshButton: "twitterexplorer #refreshButton",
            },

            control: {
                refreshButton: {
                    tap: _refresh
                }
            }
        }
    };
}()));
