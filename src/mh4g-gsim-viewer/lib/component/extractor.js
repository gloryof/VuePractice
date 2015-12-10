var Extractor = Vue.extend({
    template: "#extractor",
    data: function() {
        return {
            condition: new FilterOption(),
            sort: {
                key: "name",
                order: 1
            }
        };
    },
    computed: {
        items: function() {

            return this.condition.extractFrom(this.results);
        }
    },
    props: {
        results: {
            type: Array,
            required: true
        },
        viewOption: {
            type: ViewOption,
            required: true
        }
    },
    methods: {
        changeOrder: function(key) {
            if (this.sort.key == key) {

                this.sort.order *= -1;
            } else {

                this.sort.key = key;
                this.sort.order = 1;
            }
        }
    },
    filters: {
        convertGender: function(value) {

            if (value === 1) {

                return "男";
            }

            if (value === 2) {

                return "女";
            }

            return "両";
        },
        convertType: function(value) {

            if (value === 1) {

                return "剣士";
            }

            if (value === 2) {

                return "ガンナー";
            }

            return "両方";
        },
        convertTiming: function(value) {
            if (value == 99) {

                return "入手不可";
            }

            return "★" + value;
        }
    }
});
Vue.component("extractor", Extractor);
