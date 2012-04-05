Ext.define("App.view.blog.phone.Explorer", (function() {

    var _backButton = Ext.create("Ext.Button", {
        id: "backButton",
        ui: "back",
        text: "Back",
        align: "left",
        hidden: true
    });

    var _titleBar = Ext.create("Ext.TitleBar", {
        id: "titleBar",

        docked: "top",
        title: "Zen Blog",

        items: [
            _backButton
        ]
    });

    return {
        extend: "Ext.Panel",
        xtype: "blogexplorer",

        config: {
            layout: {
                type: "card"
            },

            items: [
                _titleBar,
                {
                    xtype: "blogposts",
                    id: "blogPosts"
                },
                {
                    xtype: "blogpost",
                    id: "blogPost"
                }
            ]
        }
    };
}()));
