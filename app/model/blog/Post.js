Ext.define("App.model.blog.Post", {
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
