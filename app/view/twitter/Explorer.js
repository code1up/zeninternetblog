Ext.define("App.view.twitter.Explorer", {
    extend: "Ext.Panel",
    xtype: "twitterexplorer",

    config: {
        fullscreen: true,
        layout: "fit",

        items: [
            {
                xtype: "toolbar",
                itemId: "toolBar",

                docked: "top",
                title: "Zen Tweets",

                items: [
                    {
                        xtype: "spacer"
                    },
                    {
                        xtype: "button",
                        itemId: "refreshButton",
                        iconCls: "refresh",
                        iconMask: true
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
