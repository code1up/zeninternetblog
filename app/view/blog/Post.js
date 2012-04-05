Ext.define("App.view.blog.Post", (function() {

    return {
        extend: "Ext.Panel",
        xtype: "blogpost",

        config: {
            layout: "fit",

            scrollable: {
                direction: "vertical"
            },

            styleHtmlContent: true,
            html: null,

            tpl: [
                "<h2>{title}</h2>",
                "<em>{author} - {publishedDate:date}</em>",
                "<hr />{content}"
            ].join("")
        }
    };
}()));
