Ext.define("App.controller.blog.phone.Controller", {
    extend: "Ext.app.Controller",

    config: {
        models: [
            "App.model.blog.Post",
            "App.model.twitter.Tweet"
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
            explorer: "blogphoneexplorer",
            blogPostsView: "blogphoneexplorer #blogPosts",
            blogPostView: "blogphoneexplorer #blogPost",

            // ToolBar
            toolBar: "blogphoneexplorer #toolBar",

            // Buttons
            backButton: "blogphoneexplorer #backButton"
        },

        control: {
            blogPostsView: {
                itemtap: function(list, index, target, record, event) {
                    this.showPost(record.data);
                }
            },

            backButton: {
                tap: function() {
                    this.showPosts();
                }
            }
        }
    },

    launch: function () {
        console.log("App.controller.blog.phone.Controller::launch()");
        
        this.callParent(arguments);

        Ext.Viewport.on("orientationchange", function() {
            // TODO: handle phone orientation change on phone (if any)
        });
    },

    setActiveItem: function(index) {
        var view = this.getExplorer();
        var layout = view.getLayout();

        var direction = index === 0 ? "right" : "left";

        layout.setAnimation({
            type: "slide",
            direction: direction
        });

        view.setActiveItem(index);
    },

    showHideBackButton: function(visible) {
        var backButton = this.getBackButton();

        if (visible) {
            backButton.show();
        } else {
            backButton.hide();
        }
    },

    showPosts: function() {
        this.setActiveItem(0);
        this.showHideBackButton(false);
    },

    showPost: function(post) {
        var view = this.getBlogPostView();

        var scrollable = view.getScrollable();
        var scroller = scrollable.getScroller();

        // Set content
        scroller.scrollTo(0, 0);
        view.setData(post);

        this.setActiveItem(1);
        this.showHideBackButton(true);
    }
});
