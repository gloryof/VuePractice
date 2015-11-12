var ViewOptions = Vue.extend({
    template: "#view-options",
    data: function() {
        return {
            option: new ViewOption()
        }
    },
    methods: {
        reflectParent: function() {
            this.$emit("change-setting", this.option);
        }
    }
});
Vue.component("view-options", ViewOptions);
