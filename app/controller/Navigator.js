Ext.define("App.controller.Navigator", (function() {

    function _setActiveItem(controller, index) {
        var view = controller.getBlogNavigatorView();
        var layout = view.getLayout();

        var direction = index === 0 ? "right" : "left";

        console.log(direction);

        layout.setAnimation({
            type: "slide",
            direction: direction
        });

        view.setActiveItem(index);
    }

    function _showHideBackButton(controller, visible) {
        var backButton = controller.getBackButton();

        /*
        var animation = {
            type: "fade",
            out: !visible,
            duration: 2000,
            autoClear: true
        };
        */

        if (visible) {
            backButton.show();
        } else {
            backButton.hide();
        }
    }

    function _showBlogList(controller) {
        _setActiveItem(controller, 0);
        _showHideBackButton(controller, false);
    }

    function _showBlogEntry(controller, blogEntry) {
        var title = controller.getBlogEntryTitle();
        var credits = controller.getBlogEntryCredits();
        var content = controller.getBlogEntryContent();

        var scrollable = content.getScrollable();
        var scroller = scrollable.getScroller();

        // Set title
        // title.setHtml("<h2>" + blogEntry.title + "</h2>");

        // Set credits
        credits.setHtml([
            "<em>",
            "Posted by ",
            blogEntry.author,
            " - ",
            blogEntry.publishedDate,
            "</em>"
        ].join(""));

        // Set content
        content.setHtml(blogEntry.content);
        scroller.scrollTo(0, 0);

        _setActiveItem(controller, 1);
        _showHideBackButton(controller, true);
    }

    return {
        extend: "Ext.app.Controller",

        config: {
            models: [
                "App.model.blog.Entry"
            ],

            views: [
                "App.view.Container",
                "App.view.blog.Navigator",
                "App.view.blog.List",
                "App.view.blog.Entry"
            ],

            stores: [
                "App.store.blog.Entries"
            ],

            refs: {
                // Blog Navigator
                blogNavigatorView: "blognavigator",

                // Blog list
                blogListView: "bloglist",

                // Blog entry
                blogEntryView: "blogentry",
                blogEntryTitle: "blogentry #title",
                blogEntryCredits: "blogentry #credits",
                blogEntryContent: "blogentry #content",

                // TitleBar
                titleBar: "blognavigator #titleBar",

                // Buttons
                backButton: "blognavigator #backButton"
            },

            control: {
                blogListView: {
                    itemtap: function(list, index, target, record, event) {
                        _showBlogEntry(this, record.data);
                    }
                },

                backButton: {
                    tap: function() {
                        _showBlogList(this);
                    }
                }
            }
        },

        // Move to view?
        initialize: function () {
            Ext.Viewport.on("orientationchange", function() {

            });

            this.callParent(arguments);
        }
    };
}()));
