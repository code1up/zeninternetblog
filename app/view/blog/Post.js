Ext.define("App.view.blog.Post", {
    extend: "Ext.Panel",
    xtype: "blogpost",

    config: {
        layout: "fit",

        scrollable: {
            direction: "vertical"
        },

        styleHtmlContent: false,
        html: null,
        style: "background-color: white;",

        // TODO: create a separate template class (fugly)
        tpl: [
            "<div class='blog-post-wrapper'>",
            "   <img class='blog-post-logo' src='resources/images/zen-logo-80x80.png' />",
            "   <div class='blog-post'>",
            "       <div class='blog-post-title'>{title}</div>",
            "       <div class='blog-post-who-when'>{author}, {publishedDate:date}</div>",
            "       <div class='blog-post-content'>{content}</div>",
            "   </div>",
            "</div>"
        ].join("")
    }
});
