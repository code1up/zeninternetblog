//<debug>
// Ext.Loader.setPath({
// "Ext": "sdk/src"
// });
//</debug>

Ext.application({
    name: "App",

    requires: [
        "Ext.MessageBox"
    ],

    profiles: [
        "Phone",
        "Tablet"
    ],

    icon: {
        57: "resources/icons/Icon.png",
        72: "resources/icons/Icon_ipad.png",
        114: "resources/icons/Icon_2x.png",
        144: "resources/icons/Icon_ipad_2x.png"
    },

    phoneStartupScreen: "resources/loading/Homescreen.jpg",
    // tabletStartupScreen: "resources/loading/Default-Portrait_ipad.png",
    tabletStartupScreen: "resources/loading/Zen-logo-ipad-portrait.png",

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly("appLoadingIndicator").destroy();
    },

    onUpdated: function() {
        var onConfirm = function() {
            window.location.reload();
        };

        var title = "Zen Blog";
        var narrative = "This application has just successfully been updated to the latest version. Reload now?";

        Ext.Msg.confirm(title, narrative, onConfirm);
    }
});
