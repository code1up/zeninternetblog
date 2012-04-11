Ext.define("App.view.blog.phone.Explorer", {
    extend: "Ext.Panel",
    xtype: "blogphoneexplorer",

    config: {
        layout: {
            type: "card"
        },

        items: [
            {
                xtype: "toolbar",
                itemId: "toolBar",

                docked: "top",
                title: "Zen Blog",

                items: [
                    {
                        xtype: "button",
                        itemId: "backButton",
                        ui: "back",
                        text: "Back",
                        hidden: true
                    },
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
                xtype: "blogposts",
                itemId: "blogPosts"
            },
            {
                xtype: "blogpost",
                itemId: "blogPost",
                hidden: true
            }
        ]
    }
});
