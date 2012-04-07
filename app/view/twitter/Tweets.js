Ext.define("App.view.twitter.Tweets", (function() {

    return {
        extend: "Ext.dataview.List",
        xtype: "twittertweets",

        config: {
            store: "twitterstore",

            allowDeselect: true,

            // TODO: to style or not to style?
            styleHtmlContent: false,

            // TODO: rounded corners
            itemTpl: [
                "<div style='float: left;'><img src={profile_image_url} style='margin-right: 8px; margin-bottom: 12px; border-radius: 0px; box-shadow: 4px 4px 2px #000000;'/></div>",
                "@{from_user}",
                "<br />",
                "{text}",
            ].join("")
        }
    }
}()));
