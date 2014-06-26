Ext.define("App.view.blog.phone.Explorer", {
    extend: "Ext.Panel",
    xtype: "blogphoneexplorer",

    config: {
        layout: {
            type: "card"
        },

        items: [
            {
                xtype: "titlebar",
                itemId: "titleBar",

                docked: "top",
                title: "Blog",

                items: [
                    {
                        xtype: "button",
                        itemId: "backButton",
                        ui: "back",
                        text: "Back",
                        hidden: true
                    },
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
