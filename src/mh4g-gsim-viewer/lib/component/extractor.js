var Extractor = Vue.extend({
    template: "#extractor",
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
});
Vue.component("extractor", Extractor);
