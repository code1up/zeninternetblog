Ext.define("App.view.Container", {
    extend: "Ext.tab.Panel",

    config: {
        fullscreen: true,
        
        tabBarPosition: "bottom",

        items: [
            {
                xtype: "blogphoneexplorer",

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

                title: "Alerts",
                iconCls: "warning_black"
            },
            {
                xtype: "panel",

                title: "About",
                iconCls: "help_black"
            }
        ]
    }
});
