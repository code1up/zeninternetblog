Ext.define("App.view.twitter.Explorer", {
    extend: "Ext.Panel",
    xtype: "twitterexplorer",

    config: {
        fullscreen: true,
        layout: "fit",

        items: [
            {
                xtype: "titlebar",
                itemId: "titleBar",

                docked: "top",
                title: "Tweets",

                items: [
                    {
                        xtype: "button",
                        itemId: "refreshButton",
                        iconCls: "refresh",
                        iconMask: true,
                        ui: "plain",
                        align: "right"
                    }
                ]
            },
            {
                xtype: "twittertweets",
                itemId: "tweets"
            }
        ]
    }
});
