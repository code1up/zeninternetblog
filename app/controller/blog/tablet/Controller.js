Ext.define("App.controller.blog.tablet.Controller", {
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
            explorer: "blogtabletexplorer",
            blogPostsView: "blogtabletexplorer #blogPosts",
            blogPostView: "blogtabletexplorer #blogPost",

            // Primary view buttons
            zoomButton: "blogtabletexplorer #zoomButton",
            postsButton: "blogtabletexplorer #postsButton",

            // Overlay views
            blogPostsOverlayView: "blogtabletexplorer #blogTabletPostsOverlay",
            blogPostsOverlayPostsView: "blogtabletpostsoverlay #blogPosts",

            // Overlay buttons
            doneButton: "blogtabletpostsoverlay #doneButton",
            layoutButton: "blogtabletpostsoverlay #layoutButton"
        },

        control: {
            blogPostsView: {
                itemtap: function(list, index, target, record, event) {
                    this.showPost(record.data);
                }
            },

            blogPostsOverlayPostsView: {
                itemtap: function(list, index, target, record, event) {
                    this.showPost(record.data);
                    this.showHideBlogPostsOverlay(false);
                }
            },

            zoomButton: {
                tap: function() {
                    this.zoom("persistent", true);
                }
            },

            layoutButton: {
                tap: function() {
                    this.unzoom();
                }
            },

            doneButton: {
                tap: function() {
                    this.showHideBlogPostsOverlay(false);
                }
            },

            postsButton: {
                tap: function() {
                    this.showHideBlogPostsOverlay(true);
                }
            }
        },

        zoomMode: "transient" // or persistent if user zoomed in
    },

    zoom: function(mode, zoom) {
        var blogPostsView = this.getBlogPostsView();
        var zoomButton = this.getZoomButton();
        var postsButton = this.getPostsButton();

        if (zoom) {
            blogPostsView.hide();
            zoomButton.hide();
            postsButton.show();

        } else {
            var blogPostsOverlayView = this.getBlogPostsOverlayView();

            if (mode === "transient") {
                if (!blogPostsOverlayView.getHidden()) {
                    blogPostsOverlayView.hide();
                }

                postsButton.hide();
                zoomButton.show();

                blogPostsView.show();
            }
        }

        this.setZoomMode(mode);
    },

    launch: function() {
        console.log("App.controller.blog.tablet.Controller::launch()");
        
        this.callParent(arguments);

        // Handle initial orientation
        var viewport = Ext.Viewport;
        var orientation = viewport.getOrientation();
        var width = viewport.getWindowWidth();
        var height = viewport.getWindowHeight();

        this.orientate(orientation, width, height);

        // Handle ongoing orientation changes
        var onOrientationChangeHandler = function(viewport, orientation, width, height) {
            console.log(orientation);

            this.orientate(orientation, width, height);
        };

        viewport.on("orientationchange", onOrientationChangeHandler, this);

        // Handle store refresh
        var onStoreRefreshHandler = function(store, data, options) {
            var record;

            console.log("onStoreRefreshHandler");

            if (data.length) {
                record = data.items[0];

                console.log(record);
                this.showPost(record.data);
            }
        };

        var store = Ext.getStore("blogstore");

        store.on("refresh", onStoreRefreshHandler, this);
    },

    unzoom: function() {
        this.zoom("transient", false);
    },

    orientate: function(orientation, width, height) {
        var zoom = (orientation === "portrait");
        var portraitWidth = Math.min(width, height);

        var blogPostsOverlayView = this.getBlogPostsOverlayView();

        this.zoom(this.getZoomMode(), zoom);

        width = Math.max(portraitWidth * 0.8, 400);
        height = Math.max(height * 0.8, 400);

        blogPostsOverlayView.setSize(width, height);
    },

    showHideBlogPostsOverlay: function(show) {
        var view = this.getBlogPostsOverlayView();

        if (show) {
            var postsButton = this.getPostsButton();
            var layoutButton = this.getLayoutButton();
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
    },

    showPost: function(post) {
        var view = this.getBlogPostView();

        var scrollable = view.getScrollable();
        var scroller = scrollable.getScroller();

        // Set HTML content
        scroller.scrollTo(0, 0);
        view.setData(post);
    }
});
