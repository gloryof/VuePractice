var PlayList = Vue.extend({
    template: "#play-list-component",
    data:function() {
        return {
            playListData: []
        };
    },
    ready: function() {
        this.playListData = playListData.getAll();
    },
    methods: {
        select: function(paramId) {
            this.$emit("request-select", paramId);
        },
        create: function() {
            this.$emit("request-create");
        },
        edit: function(paramPlayListId) {
            this.$emit("request-edit", paramPlayListId);
        },
        remove: function(paramPlayListId) {
            this.$emit("request-delete", paramPlayListId);
        }
    }
});
Vue.component("play-list", PlayList);
