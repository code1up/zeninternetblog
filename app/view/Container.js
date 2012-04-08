Ext.define("App.view.Container", {
    extend: "Ext.tab.Panel",

    config: {
        fullscreen: true,
        
        tabBarPosition: "bottom",

        items: [
            {
                xtype: "twitterexplorer",

                title: "Tweets",
                iconCls: "twitter2"
            },
            {
                xtype: "blogexplorer",

                title: "Blog",
                iconCls: "chat_black1"
            },
            {
                xtype: "panel",

                title: "About",
                iconCls: "help_black"
            }
        ]
    }
});
