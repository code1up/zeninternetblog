Ext.define("App.controller.phone.Explorer", (function() {

    function _setActiveItem(controller, index) {
        var view = controller.getExplorer();
        var layout = view.getLayout();

        var direction = index === 0 ? "right" : "left";

        layout.setAnimation({
            type: "slide",
            direction: direction
        });

        view.setActiveItem(index);
    }

    function _showHideBackButton(controller, visible) {
        var backButton = controller.getBackButton();

        if (visible) {
            backButton.show();
        } else {
            backButton.hide();
        }
    }

    function _showPosts(controller) {
        _setActiveItem(controller, 0);
        _showHideBackButton(controller, false);
    }

    function _showPost(controller, post) {
        var view = controller.getBlogPostView();

        var scrollable = view.getScrollable();
        var scroller = scrollable.getScroller();

        // Set content
        scroller.scrollTo(0, 0);
        view.setData(post);

        _setActiveItem(controller, 1);
        _showHideBackButton(controller, true);
    }

    return {
        extend: "Ext.app.Controller",

        config: {
            models: [
                "App.model.blog.Post",
                "App.model.twitter.Tweets"
            ],

            views: [
                "App.view.Container",
                "App.view.blog.phone.Explorer",
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
                },

                backButton: {
                    tap: function() {
                        _showPosts(this);
                    }
                }
            }
        },

        launch: function () {
            console.log("App.controller.phone.Explorer::launch()");

            this.callParent(arguments);

            Ext.Viewport.on("orientationchange", function() {
                console.log("App.controller.phone.Explorer::orientationchange()");
            });
        }
    };
}()));
