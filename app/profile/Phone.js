Ext.define("App.profile.Phone", {
    extend: "Ext.app.Profile",

    requires: [
        "Ext.TitleBar"
    ],

    config: {
        views: [
            // Infrastructure
            "App.view.Container",

            // Blog
            "App.view.blog.phone.Explorer",
            "App.view.blog.Posts",
            "App.view.blog.Post",

            // Twitter
            "App.view.twitter.Explorer",
            "App.view.twitter.Tweets"
        ],

        controllers: [
            "App.controller.blog.phone.Controller",
            "App.controller.twitter.Controller"
        ]
    },

    isActive: function() {
        return Ext.os.is.Phone;
    },

    launch: function() {
        console.log("App.profile.Phone::launch()");
        Ext.create("App.view.Container");
    }
});
