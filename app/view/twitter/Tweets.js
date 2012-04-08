Ext.define("App.view.twitter.Tweets", (function() {

    function ago(date) {
        try {
            var now = Math.ceil(Number(new Date()) / 1000);
            var dateTime = Math.ceil(Number(new Date(date)) / 1000);
            var diff = now - dateTime;
            var s;

            if (diff < 60) {
                return String(diff) + " seconds ago";

            } else if (diff < 3600) {
                s = String(Math.ceil(diff / (60)));

                return s + (s === "1" ? " minute" : " minutes") + " ago";

            } else if (diff < 86400) {
                s = String(Math.ceil(diff / (3600)));

                return s + (s === "1" ? " hour" : " hours") + " ago";

            } else if (diff < 60 * 60 * 24 * 365) {
                s = String(Math.ceil(diff / (60 * 60 * 24)));

                return s + (s === "1" ? " day" : " days") + " ago";

            } else {
                return Ext.Date.format(new Date(date), "jS M 'y");

            }
        } catch (e) {
            return "Don't know when";
        }
    }

    var _itemTpl = Ext.create("Ext.XTemplate",
        "<div class='tweet-wrapper'>",
        "   <img src='{profile_image_url}' />",
        "   <div class='tweet'>",
        "       <span class='tweet-aside'>{from_user_name}, {[this.ago(values.created_at)]}</span>",
        "       <div class='tweet-user'>@{from_user}</div>",
        "       <div class='tweet-text'>{text}</div>",
        "   </div>",
        "</div>",
        {
            ago: ago
        });

    return {
        extend: "Ext.dataview.List",
        xtype: "twittertweets",

        config: {
            store: "twitterstore",

            allowDeselect: true,
            styleHtmlContent: false,

            itemTpl: _itemTpl
        }
    };
}()));
