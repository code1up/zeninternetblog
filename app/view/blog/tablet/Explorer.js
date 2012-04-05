Ext.define("App.view.blog.tablet.Explorer", (function() {

    var _postsButton = Ext.create("Ext.Button", {
        id: "postsButton",
        text: "Posts",
        align: "left",
        visible: false // TODO: depends on orientation
    });

    var _titleBar = Ext.create("Ext.TitleBar", {
<<<<<<< HEAD
        id: "titleBar", // TODO: TODOX: did this break anything?
=======
        id: "titleBar", // TODO: why does this collide with "toolBar" in phone?
>>>>>>> wip

        docked: "top",
        title: "Zen Blog",

        items: [
            _postsButton
        ]
    });

    return {
        extend: "Ext.Panel",
        xtype: "blogexplorer",

        config: {
            fullscreen: true,
            layout: {
                type: "hbox"
            },

            items: [
                _titleBar,

                {
                    xtype: "blogposts",
                    id: "blogPosts",

                    flex: 1
                },
                {
                    xtype: "spacer",
                    width: "2px",
                    style: "background-color: #000000"
                },
                {
                    xtype: "blogpost",
                    id: "blogPost",

                    flex: 2
                }
            ]
        }
    };
}()));
