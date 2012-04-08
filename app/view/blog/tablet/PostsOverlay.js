Ext.define("App.view.blog.tablet.PostsOverlay", (function() {

    var _layoutButton = Ext.create("Ext.Button", {
        itemId: "layoutButton",
        iconCls: "layout",
        iconMask: true
    });

    var _doneButton = Ext.create("Ext.Button", {
        itemId: "doneButton",
        text: "Done"
    });

    var _toolBar = Ext.create("Ext.Toolbar", {
        itemId: "toolBar",

        docked: "top",
        title: "Posts",
        ui: "light",

        items: [
            _layoutButton,
            {
                xtype: "spacer"
            },
            _doneButton
        ]
    });

    return {
        extend: "Ext.Panel",
        xtype: "blogpostsoverlay",

        config: {
            layout: "fit",

            centered: true,

            // TODO: move to controller
            width: 500, // width: Ext.platform.isPhone ? 260 : 400,
            height: 500, // height: Ext.platform.isPhone ? 220 : 400,
            
            modal: true,
            hideOnMaskTap: true,

            scrollable: {
                direction: "vertical"
            },

            items: [
                _toolBar,
                {
                    xtype: "blogposts"
                }
            ]
        }
    };
}()));
