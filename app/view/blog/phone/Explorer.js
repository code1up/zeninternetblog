Ext.define("App.view.blog.phone.Explorer", (function() {

    var _backButton = Ext.create("Ext.Button", {
        itemId: "backButton",
        ui: "back",
        text: "Back",
        align: "left",
        hidden: true
    });

    var _toolBar = Ext.create("Ext.Toolbar", {
        itemId: "toolBar",

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
                _toolBar,
                {
                    xtype: "blogposts",
                    itemId: "blogPosts"
                },
                {
                    xtype: "blogpost",
                    itemId: "blogPost"
                }
            ]
        }
    };
}()));
