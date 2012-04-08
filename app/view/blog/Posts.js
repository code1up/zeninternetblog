Ext.define("App.view.blog.Posts", (function() {

    return {
        extend: "Ext.dataview.List",
        xtype: "blogposts",

        config: {
            store: "blogstore",
            
            allowDeselect: true,

            // TODO: to style or not to style?
            styleHtmlContent: false,

            itemTpl: [
                "<h2>{title}</h2>",
                "<em>{author} - {publishedDate:date}</em>",
                "<br />{contentSnippet}"
            ].join("")
        }
    };
}()));
