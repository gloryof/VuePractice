var MusicList = Vue.extend({
    template: "#music-list-component",
    data: function() {
        return {
            model: {
                musicListData: [],
                playListId: null
            },
            style: {
                view: false
            }
        };
    },
    methods: {
        create: function() {
            this.$emit("request-create", this.model.playListId);
        },
        edit: function(paramId) {
            this.$emit("request-edit", {
                playListId: this.model.playListId,
                musicId: paramId
            });
        },
        remove: function(paramId) {
            this.$emit("request-delete", paramId);
        }
    },
    events: {
        openMusicList: function(paramId) {
            this.$set("model.musicListData", musicData.getByPlayListId(paramId));
            this.style.view = true;
            this.model.playListId = paramId;
        },
        refleshMusicList: function() {
            this.$set("model.musicListData", musicData.getByPlayListId(this.model.playListId));
            return;
        }
    }
});
Vue.component("music-list", MusicList);
