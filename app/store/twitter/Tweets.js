Ext.define("App.store.twitter.Tweets", {
    extend: "Ext.data.Store",

    requires: [
        "Ext.data.proxy.JsonP"
    ],

    config: {
        storeId: "twitterstore",
        model: "App.model.twitter.Tweet",

        autoLoad: true,

        proxy: {
            type: "jsonp",
            url: "http://search.twitter.com/search.json?q=%40@zeninternet",

            reader: {
                type: "json",
                rootProperty: "results"
            }
        }
    }
});
