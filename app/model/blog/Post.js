Ext.define("App.model.blog.Post", {
    extend: "Ext.data.Model",

    config: {
        fields: [
            "title",
            "author",
            "publishedDate",
            "contentSnippet",
            "content",

            {
                name: "monthYear",
                convert: function(value, record) {
                    var date = record.get("publishedDate");
                    var mm = date.substr(8, 8);

                    return mm;
                }
            }
        ]
    }
});
