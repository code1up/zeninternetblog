Ext.define("App.view.blog.Navigator", (function() {

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
        xtype: "blognavigator",

        config: {
            layout: {
                type: "card"
            },

            // activeItem: 1,

            items: [
                _titleBar,
                {
                    xtype: "bloglist",
                    id: "blogList"
                },
                {
                    xtype: "blogentry",
                    id: "blogEntry"
                }
            ]
        }
    };
}()));
