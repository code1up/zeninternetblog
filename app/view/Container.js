Ext.define("App.view.Container", {
    extend: "Ext.tab.Panel",

    config: {
        fullscreen: true,
        
        tabBarPosition: "bottom",

        items: [
            {
                xtype: Ext.os.is.Phone ? "blogphoneexplorer" : "blogtabletexplorer",

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
