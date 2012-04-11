Ext.define("App.view.blog.tablet.Explorer", {
    extend: "Ext.Panel",
    xtype: "blogtabletexplorer",

    config: {
        fullscreen: true,
        layout: "hbox",

        items: [
            {
                xtype: "toolbar",
                itemId: "toolBar",

                docked: "top",
                title: "Zen Blog",

                items: [
                    {
                        xtype: "button",
                        itemId: "zoomButton",
                        iconCls: "resize",
                        iconMask: true
                    },
                    {
                        xtype: "button",
                        itemId: "postsButton",
                        iconCls: "list",
                        iconMask: true,
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
