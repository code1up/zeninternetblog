Ext.define("App.model.twitter.Tweet", {
    extend: "Ext.data.Model",

    config: {
        fields: [
            "created_at",
            "from_user",
            "from_user_name",
            "geo",
            "profile_image_url",
            "text"
        ]
    }
});
