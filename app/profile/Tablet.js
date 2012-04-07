Ext.define("App.profile.Tablet", {
    extend: "Ext.app.Profile",

    config: {
        views: [
            // Infrastructure
            "App.view.Container",
            
            // Blog
            "App.view.blog.tablet.Explorer",
            "App.view.blog.Posts",
            "App.view.blog.Post",
            "App.view.blog.tablet.PostsOverlay",

            // Twitter
            "App.view.twitter.tablet.Explorer",
            "App.view.twitter.Tweets",
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
