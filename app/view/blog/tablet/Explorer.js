Ext.define("App.view.blog.table.Explorer", (function() {

    var _postsButton = Ext.create("Ext.Button", {
        id: "postsButton",
        text: "Posts",
        align: "left"
    });

    var _titleBar = Ext.create("Ext.TitleBar", {
        id: "titleBar",

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
            layout: {
                type: "hbox"
            },

            items: [
                _titleBar,
                {
                    xtype: "blogposts",
                    id: "blogPosts"
                },
                {
                    xtype: "spacer",
                    width: "1px",
                    style: "background-color: #000000"
                },
                {
                    xtype: "blogpost",
                    id: "blogPost"
                }
            ]
        }
    };
}()));
