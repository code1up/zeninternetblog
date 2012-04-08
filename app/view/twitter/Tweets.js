Ext.define("App.view.twitter.Tweets", (function() {

    function _tweetText(tweet) {
        // URLs
        tweet = tweet.replace(
            /(http:\/\/[^\s]*)/g,
            "<a class='tweet-text-url' target='_blank' href='$1'>$1</a>");

        // User names
        tweet = tweet.replace(
            /(^|\s)@(\w+)/g,
            "$1<a class='tweet-text-user' target='_blank' href='https://twitter.com/$2'>@$2</a>");

        // Hashtags
        tweet = tweet.replace(
            /(^|\s)#(\w+)/g,
            "$1<span class='tweet-text-hashtag'>#$2</span>");

        return tweet;
    }

    function _tweetName(name) {
        return "<a target='_blank' href='https://twitter.com/" + name + "'>@" + name + "</a>";
    }

    function _tweetAgo(date) {
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
            return "Sometime";
        }
    }

    // "$1<a class='tweet-text-user' target='_blank' href='https://twitter.com/$2'>@$2</a>"

    var _itemTpl = Ext.create("Ext.XTemplate",
        "<div class='tweet-wrapper'>",
        "   <img src='{profile_image_url}' />",
        "   <div class='tweet'>",
        "       <span class='tweet-aside'>{from_user_name}, {[this.tweetAgo(values.created_at)]}</span>",
        "       <div class='tweet-user'>{[this.tweetName(values.from_user)]}</div>",
        "       <div class='tweet-text'>{[this.tweetText(values.text)]}</div>",
        "   </div>",
        "</div>",
        {
            tweetAgo: _tweetAgo,
            tweetText: _tweetText,
            tweetName: _tweetName
        });

    return {
        extend: "Ext.dataview.List",
        xtype: "twittertweets",

        config: {
            store: "twitterstore",

            allowDeselect: true,
            styletweetContent: false,

            emptyText: "No tweets found.",

            itemTpl: _itemTpl
        }
    };
}()));
