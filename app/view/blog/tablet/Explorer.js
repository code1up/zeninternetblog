Ext.define("App.view.blog.tablet.Explorer", (function() {

    var _zoomButton = Ext.create("Ext.Button", {
        itemId: "zoomButton",
        iconCls: "resize",
        iconMask: true
    });

    var _postsButton = Ext.create("Ext.Button", {
        itemId: "postsButton",
        iconCls: "list",
        iconMask: true,
        hidden: true
    });

    var _refreshButton = Ext.create("Ext.Button", {
        itemId: "refreshButton",
        iconCls: "refresh",
        iconMask: true
    });

    var _toolBar = Ext.create("Ext.Toolbar", {
        itemId: "toolBar",

        docked: "top",
        title: "Zen Blog",

        items: [
            _zoomButton,
            _postsButton,
            {
                xtype: "spacer"
            },
            _refreshButton
        ]
    });

    return {
        extend: "Ext.Panel",
        xtype: "blogexplorer2",

        config: {
            fullscreen: true,
            layout: "hbox",

            items: [
                _toolBar,

                {
                    xtype: "blogposts",
                    itemId: "blogPosts",

                    flex: 3
                },
                {
                    xtype: "spacer",
                    itemId: "spacer",

                    width: "20px",
                    style: "background-color: lightgray"
                },
                {
                    xtype: "blogpost",
                    itemId: "blogPost",

                    flex: 5
                },
                {
                    xtype: "blogpostsoverlay",
                    itemId: "blogPostsOverlay",
                    hidden: true
                }
            ]
        }
    };
}()));
