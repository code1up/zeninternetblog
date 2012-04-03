Ext.define("App.view.blog.Entry", (function() {

    var _title = {
        xtype: "panel",
        id: "title",

        docked: "top",
        tpl: "<em><h4>{value}<h4></em>",
        
        data: {
            value: "testing"
        },

        styleHtmlContent: true,
        html: null
    };

    var _credits = {
        xtype: "panel",
        id: "credits",

        docked: "top",

        styleHtmlContent: true,
        html: null
    };

    var _content = {
        xtype: "panel",
        id: "content",

        styleHtmlContent: true,
        html: null,

        scrollable: {
            direction: "vertical"
        }
    };

    return {
        extend: "Ext.Panel",
        xtype: "blogentry",

        config: {
            layout: "fit",

            items: [
                _title,
                _credits,
                _content
            ]
        }
    };
}()));
