Ext.define("App.controller.tablet.blog.Controller", (function() {

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
                "App.model.blog.Post"
            ],

            views: [
                "App.view.Container",
                "App.view.blog.tablet.Explorer",
                "App.view.blog.Posts",
                "App.view.blog.Post",
                "App.view.blog.tablet.PostsOverlay"
            ],

            stores: [
                "App.store.blog.Posts"
            ],

            refs: {
                // Primary views
                explorer: "blogexplorer",
                blogPostsView: "blogexplorer #blogPosts",
                blogPostView: "blogexplorer #blogPost",
                blogPostsOverlayView: "blogexplorer #blogPostsOverlay",

                // Buttons
                zoomButton: "blogexplorer #zoomButton",
                postsButton: "blogexplorer #postsButton",

                // Overlay buttons
                doneButton: "blogpostsoverlay #doneButton",
                layoutButton: "blogpostsoverlay #layoutButton"
            },

            control: {
                blogPostsView: {
                    itemtap: function(list, index, target, record, event) {
                        _showPost(this, record.data);
                    }
                },

                zoomButton: {
                    tap: function(list, index, target, record, event) {
                        console.log("zoomButton");

                        this.getBlogPostsView().hide();
                        this.getZoomButton().hide();
                        this.getPostsButton().show();
                    }
                },

                layoutButton: {
                    tap: function(list, index, target, record, event) {
                        console.log("layoutButton");

                        this.getBlogPostsView().show();
                        this.getZoomButton().show();
                        this.getPostsButton().hide();
                        this.getBlogPostsOverlayView().hide();
                    }
                },

                doneButton: {
                    tap: function(list, index, target, record, event) {
                        console.log("doneButton");

                        this.getBlogPostsOverlayView().hide();
                    }
                },

                postsButton: {
                    tap: function(list, index, target, record, event) {
                        console.log("postsButton");

                        var view = this.getBlogPostsOverlayView();
                        var button = this.getPostsButton(); 

                        view.showBy(button);
                    }
                }
            }
        },

        // TODO: Move to view?
        launch: function () {
            console.log("App.controller.tablet.Explorer::launch()");

            this.callParent(arguments);

            Ext.Viewport.on("orientationchange", function() {
                console.log("App.controller.tablet.Explorer::orientationchange()");
            });
        }
    };
}()));
