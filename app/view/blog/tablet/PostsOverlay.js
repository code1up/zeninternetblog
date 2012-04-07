Ext.define("App.view.blog.tablet.PostsOverlay", (function() {

    // TODO: fix up items etc

    return {
        extend: "Ext.Panel",
        xtype: "blogpostsoverlay",

        config: {
            layout: "fit",

            centered: true,

            width: 500, // width: Ext.platform.isPhone ? 260 : 400,
            height: 500, // height: Ext.platform.isPhone ? 220 : 400,
            
            modal: true,
            hideOnMaskTap: true,

            scrollable: {
                direction: "vertical"
            },

            items: [
                {
                    xtype: "toolbar",
                    title: "Posts",
                    docked: "top",
                    ui: "light",

                    items: [
                        {
                            itemId: "layoutButton",
                            iconCls: "layout",
                            iconMask: true
                        },
                        {
                            xtype: "spacer"
                        },
                        {
                            itemId: "doneButton",
                            text: "Done",
                        }
                    ]
                },
                {
                    xtype: "blogposts"                                    
                }
            ]
        }
    }
}()));
