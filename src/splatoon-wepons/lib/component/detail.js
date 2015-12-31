var DetailComponent = Vue.extend({
    template: "#wepon-detail",
    data: function() {
        return {
            wepon: {},
            graph: null
        };
    },
    ready: function() {

        this.wepon = wepons.get(this.$route.params.id);

        var graphData = {
            labels: [ "射程", "火力", "連射" ],
            datasets: [
                {
                    data: [this.wepon.range, this.wepon.fire, this.wepon.rapid ]
                }
            ]
        };
        var context = document.getElementById("wepon-graph").getContext("2d");
        this.graph = new Chart(context).Radar(graphData);
    }
});
