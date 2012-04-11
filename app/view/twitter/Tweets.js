Ext.define("App.view.twitter.Tweets", {
    extend: "Ext.dataview.List",
    xtype: "twittertweets",
        
    config: {
        store: "twitterstore",

        allowSelect: false, // TODO: has no effect
        styleHtmlContent: false,

        emptyText: "No tweets found or an error occurred. Tap the refresh button to retry.",

        // TODO: create a separate template class (fugly)
        itemTpl: Ext.create("Ext.XTemplate",
            "<div class='tweet-wrapper'>",
            "   <img src='{profile_image_url}' />",
            "   <div class='tweet'>",
            "       <span class='tweet-aside'>{from_user_name}, {[this.tweetAgo(values.created_at)]}</span>",
            "       <div class='tweet-user'>{[this.tweetName(values.from_user)]}</div>",
            "       <div class='tweet-text'>{[this.tweetText(values.text)]}</div>",
            "   </div>",
            "</div>",
            {
                tweetAgo: function(date) {
                    try {
                        var now = Math.ceil(Number(new Date()) / 1000);
                        var dateTime = Math.ceil(Number(new Date(date)) / 1000);
                        var diff = now - dateTime;
                        var s;

                        if (diff < 60) {
                            return String(diff) + " seconds";

                        } else if (diff < 3600) {
                            s = String(Math.ceil(diff / (60)));

                            return s + (s === "1" ? " minute" : " minutes");

                        } else if (diff < 86400) {
                            s = String(Math.ceil(diff / (3600)));

                            return s + (s === "1" ? " hour" : " hours");

                        } else if (diff < 60 * 60 * 24 * 365) {
                            s = String(Math.ceil(diff / (60 * 60 * 24)));

                            return s + (s === "1" ? " day" : " days");

                        } else {
                            return Ext.Date.format(new Date(date), "jS M 'y");

                        }
                    } catch (e) {
                        return "Sometime";
                    }
                },

                tweetName: function(name) {
                    return "<a target='_blank' href='https://twitter.com/" + name + "'>@" + name + "</a>";
                },

                tweetText: function(tweet) {
                    // URLs
                    tweet = tweet.replace(
                        /(http:\/\/[^\s]*)/g,
                        "<span class='tweet-text-url'><a target='_blank' href='$1'>$1</a></span>");

                    // User names
                    tweet = tweet.replace(
                        /(^|\s)@(\w+)/g,
                        "$1<span class='tweet-text-user'><a target='_blank' href='https://twitter.com/$2'>@$2</a></span>");

                    // Hashtags
                    tweet = tweet.replace(
                        /(^|\s)#(\w+)/g,
                        "$1<span class='tweet-text-hashtag'>#$2</span>");

                    return tweet;
                }
            }
        )
    }
});
