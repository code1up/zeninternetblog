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
                iconCls: "star"
            },
            {
                xtype: "panel",

                title: "Tweets",
                iconCls: "star"
            },
            {
                xtype: "panel",

                title: "About",
                iconCls: "star"
            }
        ]
    }
});
