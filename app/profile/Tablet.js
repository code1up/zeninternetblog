Ext.define("App.profile.Tablet", {
    extend: "Ext.app.Profile",

    config: {
        views: [
            "App.view.Container",
            "App.view.blog.phone.Explorer",
            "App.view.blog.Posts",
            "App.view.blog.Post"
        ],

        controllers: [
            "App.controller.tablet.Explorer"
        ]
    },

    isActive: function() {
        // NOTE: make sure we have a fallback profile
        return Ext.os.is.Tablet || true;
    },

    launch: function() {
        console.log("App.profile.Tablet::launch");
        Ext.create("App.view.Container");
    }
});
