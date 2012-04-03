Ext.define("App.view.blog.List", {
    extend: "Ext.dataview.List",
    xtype: "bloglist",

    config: {
        xtype: "list",

        store: "blogstore",

        styleHtmlContent: true,

        itemTpl: [
            "<h2>{title}</h2>",
            "<em>{author} .. {publishedDate:date}</em>",
            "<br />{contentSnippet}"
        ].join("")
    }
});
