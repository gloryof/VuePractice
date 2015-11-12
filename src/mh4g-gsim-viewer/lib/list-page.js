var listPage = new Vue({
    el: "div#viewer",
    data: {
        loadData: [],
        viewOptions: new ViewOption()
    },
    methods: {
        setLoadData: function(paramLoadData) {
            this.$set("loadData", paramLoadData);
        },
        setViewOptions: function(paramViewOptions) {
            this.$set("viewOptions", paramViewOptions);
        }
    }
});
