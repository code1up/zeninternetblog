// TODO: could move some of this to a base class and share with phone impl
Ext.define("App.controller.tablet.Explorer", (function() {

    function _showPost(controller, post) {
        var view = controller.getBlogPostView();

        var scrollable = view.getScrollable();
        var scroller = scrollable.getScroller();

        // Set content
        scroller.scrollTo(0, 0);
        view.setData(post);
    }

    return {
        extend: "Ext.app.Controller",

        config: {
            models: [
                "App.model.blog.Post",
                "App.model.twitter.Tweet"
            ],

            views: [
                "App.view.Container",
                "App.view.blog.tablet.Explorer",
                "App.view.blog.Posts",
                "App.view.blog.Post"
            ],

            stores: [
                "App.store.blog.Posts",
                "App.store.twitter.Tweets"
            ],

            refs: {
                // Primary views
                explorer: "blogexplorer",
                blogPostsView: "blogexplorer #blogPosts",
                blogPostView: "blogexplorer #blogPost",

                // TitleBar
                titleBar: "blogexplorer #titleBar",

                // Buttons
                backButton: "blogexplorer #backButton"
            },

            control: {
                blogPostsView: {
                    itemtap: function(list, index, target, record, event) {
                        _showPost(this, record.data);
                    }
                }
            }
        },

        // Move to view?
        launch: function () {
            console.log("App.controller.tablet.Navigator::launch()");

            this.callParent(arguments);

            Ext.Viewport.on("orientationchange", function() {
                console.log("App.controller.tablet.Navigator::orientationchange()");
            });
        }
    };
}()));
