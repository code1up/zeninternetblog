Ext.define("App.view.blog.Posts", {
    extend: "Ext.dataview.List",
    xtype: "blogposts",

    config: {
        store: "blogstore",
        grouped: true,
        // indexBar: true,
        pinHeaders: true,
                
        allowSelect: true,
        allowDeselect: false,
        styleHtmlContent: false,

        emptyText: "No blog posts found or an error occurred. Tap the refresh button to retry.",

        // TODO: create a separate template class (fugly)
        itemTpl: [
            "<div class='blog-precis-wrapper'>",
            "   <div class='blog-precis'>",
            "       <div class='blog-precis-title'>{title}</div>",
            "       <div class='blog-precis-who-when'>{author}, {publishedDate:date}</div>",
            "       <div class='blog-precis-snippet'>{contentSnippet}</div>",
            "   </div>",
            "</div>"
        ].join("")
    }
});
