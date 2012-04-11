Ext.define("App.view.blog.tablet.PostsOverlay", {
    extend: "Ext.Panel",
    xtype: "blogtabletpostsoverlay",

    config: {
        layout: "fit",

        centered: true,

        modal: true,
        hideOnMaskTap: true,

        scrollable: {
            direction: "vertical"
        },

        items: [
            {
                xtype: "toolbar",
                itemId: "toolBar",

                docked: "top",
                title: "Posts",
                ui: "light",

                items: [
                    {
                        xtype: "button",
                        itemId: "layoutButton",
                        iconCls: "layout",
                        iconMask: true
                    },
                    {
                        xtype: "spacer"
                    },
                    {
                        xtype: "button",
                        itemId: "doneButton",
                        text: "Done"
                    }
                ]
            },
            {
                xtype: "blogposts",
                itemId: "blogPosts"
            }
        ]
    }
});
