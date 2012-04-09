Ext.define("App.view.twitter.Explorer", (function() {

    var _refreshButton = Ext.create("Ext.Button", {
        itemId: "refreshButton",
        iconCls: "refresh",
        iconMask: true
    });

    var _toolBar = Ext.create("Ext.Toolbar", {
        itemId: "toolBar",

        docked: "top",
        title: "Zen Tweets",

        items: [
            {
                xtype: "spacer"
            },
            _refreshButton
        ]
    });

    return {
        extend: "Ext.Panel",
        xtype: "twitterexplorer",

        config: {
            fullscreen: true,
            layout: "fit",

            items: [
                _toolBar,

                {
                    xtype: "twittertweets",
                    itemId: "tweets"
                }
            ]
        }
    };
}()));
