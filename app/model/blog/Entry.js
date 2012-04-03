Ext.define("App.model.blog.Entry", {
    extend: "Ext.data.Model",

    config: {
        fields: [
            "title",
            "author",
            "publishedDate",
            "contentSnippet",
            "content"
        ]
    }
});
