Ext.define("App.profile.Tablet", {
    extend: "Ext.app.Profile",

    config: {
        views: [
        ],

        controllers: [
        ]
    },

    isActive: function() {
        // NOTE: make sure we have a fallback profile
        return Ext.os.is.Tablet || true;
    },

    launch: function() {
        console.log("App.profile.Tablet::launch");
        Ext.create("App.view.tablet.Container");
    }
});
