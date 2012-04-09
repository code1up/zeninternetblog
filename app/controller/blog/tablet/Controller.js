Ext.define("App.controller.blog.tablet.Controller", (function() {

    var _zoomMode = "transient"; // or persistent if user zoomed in

    function _zoom(controller, mode, zoom) {
        var blogPostsView = controller.getBlogPostsView();
        var zoomButton = controller.getZoomButton();
        var postsButton = controller.getPostsButton();

        if (zoom) {
            blogPostsView.hide();
            zoomButton.hide();
            postsButton.show();

        } else {
            var blogPostsOverlayView = controller.getBlogPostsOverlayView();

            if (mode === "transient") {
                if (!blogPostsOverlayView.getHidden()) {
                    blogPostsOverlayView.hide();
                }

                postsButton.hide();
                zoomButton.show();

                blogPostsView.show();
            }
        }

        _zoomMode = mode;
    }

    function _unzoom(controller) {
        _zoom(controller, "transient", false);
    }

    function _orientate(controller, orientation, width, height) {
        var zoom = (orientation === "portrait");
        var portraitWidth = Math.min(width, height);

        var blogPostsOverlayView = controller.getBlogPostsOverlayView();

        _zoom(controller, _zoomMode, zoom);

        width = Math.max(portraitWidth * 0.8, 400);
        height = Math.max(height * 0.8, 400);

        blogPostsOverlayView.setSize(width, height);
    }

    function _showHideBlogPostsOverlay(controller, show) {
        var view = controller.getBlogPostsOverlayView();

        if (show) {
            var postsButton = controller.getPostsButton();
            var layoutButton = controller.getLayoutButton();
            var showLayoutButton = (Ext.Viewport.getOrientation() === "landscape");

            if (showLayoutButton) {
                layoutButton.show();
            } else {
                layoutButton.hide();
            }

            view.showBy(postsButton);
        }
        else {
            view.hide();
        }
    }

    // TODO: belongs in base controller class, shared with phone
    function _showPost(controller, post) {
        var view = controller.getBlogPostView();

        var scrollable = view.getScrollable();
        var scroller = scrollable.getScroller();

        // Set HTML content
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
                    tap: function() {
                        _zoom(this, "persistent", true);
                    }
                },

                layoutButton: {
                    tap: function() {
                        _unzoom(this);
                    }
                },

                doneButton: {
                    tap: function() {
                        _showHideBlogPostsOverlay(this, false);
                    }
                },

                postsButton: {
                    tap: function() {
                        _showHideBlogPostsOverlay(this, true);
                    }
                }
            }
        },

        launch: function () {
            console.log("App.controller.blog.tablet.Controller::launch()");
            
            this.callParent(arguments);

            // Handle initial orientation
            var viewport = Ext.Viewport;
            var orientation = viewport.getOrientation();
            var width = viewport.getWindowWidth();
            var height = viewport.getWindowHeight();

            _orientate(this, orientation, width, height);

            // Handle ongoing orientation changes
            var handler = function(viewport, orientation, width, height) {
                console.log(orientation);
                _orientate(this, orientation, width, height);
            };

            viewport.on("orientationchange", handler, this);
        }
    };
}()));
