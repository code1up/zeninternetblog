Ext.define("App.view.Container", {
    extend: "Ext.tab.Panel",

    config: {
        tabBarPosition: "bottom",
        fullscreen: true,
        // TODO: packed?

        items: [
            {
                xtype: "blogexplorer",

                title: "Blog",
                iconCls: "chat_black1"
            },
            {
                xtype: "twitterexplorer",

                title: "Tweets",
                iconCls: "twitter2"
            },
            {
                xtype: "panel",

                title: "About",
                iconCls: "help_black"
            }
        ]
    }
});
