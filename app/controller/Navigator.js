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
        var view = controller.getBlogEntryView();

        var scrollable = view.getScrollable();
        var scroller = scrollable.getScroller();

        // Set content
        scroller.scrollTo(0, 0);
        view.setData(blogEntry);

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
        launch: function () {
            console.log("App.controller.Navigator::launch()");

            Ext.Viewport.on("orientationchange", function() {
                console.log("App.controller.Navigator::orientationchange()");
            });

            // TODO: this.callParent(arguments);
        }
    };
}()));
