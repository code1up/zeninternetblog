Ext.define("App.view.blog.tablet.Explorer", {
    extend: "Ext.Panel",
    xtype: "blogtabletexplorer",

    config: {
        fullscreen: true,
        layout: "hbox",

        items: [
            {
                xtype: "titlebar",
                itemId: "titleBar",

                docked: "top",
                title: "Blog",

                items: [
                    {
                        xtype: "button",
                        itemId: "zoomButton",
                        iconCls: "expand",
                        iconMask: true,
                        ui: "plain"
                    },
                    {
                        xtype: "button",
                        itemId: "postsButton",
                        iconCls: "list",
                        iconMask: true,
                        ui: "plain",
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
                itemId: "blogPosts",

                flex: 3
            },
            {
                xtype: "spacer",
                itemId: "spacer",

                width: "1px",
                style: "background-color: lightgray"
            },
            {
                xtype: "blogpost",
                itemId: "blogPost",

                flex: 5
            },
            {
                xtype: "blogtabletpostsoverlay",
                itemId: "blogTabletPostsOverlay",
                hidden: true
            }
        ]
    }
});
