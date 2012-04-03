Ext.define("App.view.blog.List", {
    extend: "Ext.dataview.List",
    xtype: "bloglist",

    config: {
        xtype: "list",

        store: "blogstore",

        styleHtmlContent: true,

        itemTpl: [
            "<h3><strong>{title}</strong></h3>",
            "<em>{author} - {publishedDate}</em>",
            "<br />{contentSnippet}"
        ].join("")
    }
});
