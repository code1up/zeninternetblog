Ext.define("App.store.blog.Posts", {
    extend: "Ext.data.Store",

    requires: [
        "Ext.data.proxy.JsonP"
    ],

    config: {
        storeId: "blogstore",
        model: "App.model.blog.Post",

        autoLoad: true,

        proxy: {
            type: "jsonp",
            url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/zencoukblog",

            reader: {
                type: "json",
                rootProperty: "responseData.feed.entries"
            }
        }
    }
});
