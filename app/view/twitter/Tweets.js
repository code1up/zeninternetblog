Ext.define("App.view.twitter.Tweets", (function() {

    return {
        extend: "Ext.dataview.List",
        xtype: "twittertweets",

        config: {
            store: "twitterstore",

            styleHtmlContent: true,

            itemTpl: [
                "@{from_user}"
            ].join("")
        }
    }
}()));
