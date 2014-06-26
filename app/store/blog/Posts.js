Ext.define("App.store.blog.Posts", {
    extend: "Ext.data.Store",

    requires: [
        "Ext.data.proxy.JsonP"
    ],

    config: {
        storeId: "blogstore",

        model: "App.model.blog.Post",
        groupField: "monthYear",

        /*
        grouper: {
            groupFn: function(record) {
                var isStatic = record.get('isStatic');
                if(isStatic){
                    return 'General';
                } else {
                    return 'Dynamic Topics';
                }
            },
            sortProperty: 'filterId',
        },
        */
        
        autoLoad: true,

        //// error
        /// not useful

        proxy: {
            type: "jsonp",
            // url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/zeninternet&num=-1",
            //// url: "https://ajax.googleapis.com/ajax/services/feed/find?v=1.0&q=Zen%20Internet",
            url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://status.zensupport.co.uk/rss/active.hosting.rss2.xml&num=-1",
            // url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://status.zensupport.co.uk/rss/active.network.rss2.xml&num=-1",
            // url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://status.zen.co.uk/rss/broadband-faults-rss.ashx&num=-1",
            // url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://status.zen.co.uk/rss/broadband-maintenance-rss.ashx&num=-1",
            //// url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://forum.zensupport.co.uk&num=-1",
            /// url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.zen.co.uk/rss/rss.xml&num=-1",
            /// url: "https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://www.zen.co.uk/rss/podcasts/rss.xml&num=-1",

            reader: {
                type: "json",
                rootProperty: "responseData.feed.entries"
            }
        }
    }
});
