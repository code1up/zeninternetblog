Ext.define("App.view.blog.Posts", (function() {

    var _itemTpl = Ext.create("Ext.XTemplate",
        "<div class='blog-precis-wrapper'>",
        "   <div class='blog-precis'>",
        "       <div class='blog-precis-title'>{title}</div>",
        "       <div class='blog-precis-who-when'>{author}, {publishedDate:date}</div>",
        "       <div class='blog-precis-snippet'>{contentSnippet}</div>",
        "   </div>",
        "</div>");

    return {
        extend: "Ext.dataview.List",
        xtype: "blogposts",

        config: {
            store: "blogstore",
            
            allowDeselect: true,
            styleHtmlContent: false,

            itemTpl: _itemTpl
        }
    };
}()));
