Ext.define("App.controller.tablet.Explorer", (function() {

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
                "App.view.blog.Post"
            ],

            stores: [
                "App.store.blog.Posts"
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
