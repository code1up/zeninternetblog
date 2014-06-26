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
                xtype: "titlebar",
                itemId: "titleBar",

                docked: "top",
                title: "Posts",
                ui: "light",

                items: [
                    {
                        xtype: "button",
                        itemId: "layoutButton",
                        iconCls: "layout",
                        iconMask: true,
                        ui: "plain"
                    },
                    {
                        xtype: "button",
                        itemId: "doneButton",
                        text: "Done",
                        align: "right"
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
