var ListComponent = Vue.extend({
    template: "#wepon-list",
    data: function() {
        return {
            results: []
        };
    },
    ready: function() {
        this.results = wepons.list();
    }
});
