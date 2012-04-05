Ext.define("App.view.blog.Posts", (function() {

    return {
        extend: "Ext.dataview.List",
        xtype: "blogposts",

        config: {
            store: "blogstore",

            styleHtmlContent: true,

            itemTpl: [
                "<h2>{title}</h2>",
                "<em>{author} - {publishedDate:date}</em>",
                "<br />{contentSnippet}"
            ].join("")
        }
    }
}()));
