Ext.define("App.view.twitter.tablet.Explorer", (function() {

    var _titleBar = Ext.create("Ext.TitleBar", {
        itemId: "titleBar",

        docked: "top",
        title: "Zen Tweets",
    });

    return {
        extend: "Ext.Panel",
        xtype: "twitterexplorer",

        config: {
            fullscreen: true,
            layout: "fit",

            items: [
                _titleBar,

                {
                    xtype: "twittertweets",
                    itemId: "twitterTweets"
                }
            ]
        }
    };
}()));