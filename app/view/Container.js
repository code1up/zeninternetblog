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
            }
        ]
    }
});
