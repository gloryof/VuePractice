var CsvLoader = Vue.extend({
    template: "#csv-loader",
    data: function() {
        return {
            csvValues: ""
        };
    },
    methods: {
        load: function() {

            var result = [];

            if (this.csvValues == null && this.csvValue == "") {

                return result;
            }

            var lines = this.csvValues.split(/\r\n|\r|\n/);
            lines.forEach(function(row) {
                result.push(new Equipment(row.split(",")));
            });

            this.$emit("load-result", result);
        }
    }
});
Vue.component("csv-loader", CsvLoader);
