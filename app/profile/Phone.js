Ext.define("App.profile.Phone", {
    extend: "Ext.app.Profile",

    config: {
        views: [
            "App.view.Container",
            "App.view.blog.phone.Explorer",
            "App.view.blog.Posts",
            "App.view.blog.Post"
        ],

        controllers: [
            "App.controller.phone.Explorer"
        ]
    },

    isActive: function() {
        // return !Ext.os.is.Phone;
        return false; // TODO
    },

    launch: function() {
        console.log("App.profile.Phone::launch()");
        Ext.create("App.view.Container");
    }
});
