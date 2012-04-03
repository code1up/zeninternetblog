Ext.define("App.profile.Tablet", {
    extend: "Ext.app.Profile",

    config: {
        views: [
            "App.view.tablet.Container",
            "App.view.Navigator",
            "App.view.blog.List",
            "App.view.blog.Entry",
            "App.view.About"
        ],

        controllers: [
            "Tablet",
            "Navigator"
        ]
    },

    isActive: function() {
        // NOTE: make sure we have a fallback profile
        return Ext.os.is.Tablet || true;
    },

    launch: function() {
        Ext.create("App.view.tablet.Container");
    }
});
