var ViewOptions = Vue.extend({
    template: "#view-options",
    data: function() {
        return {
            option: new ViewOption(),
            view: true
        }
    },
    methods: {
        reflectParent: function() {
            this.$emit("change-setting", this.option);
        },
        toggle: function() {
            this.view = !this.view;
        }
    }
});
Vue.component("view-options", ViewOptions);
