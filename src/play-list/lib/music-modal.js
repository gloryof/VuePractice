var MusicModal = Vue.extend({
    template: "#music-list-modal",
    data: function() {
        return {
            style: {
                view: false
            },
            model: {
                musicId: null,
                playListId: null,
                name: null
            },
            option: {
                editMode: false
            }
        };
    },
    methods: {
        save: function() {
            if (this.option.editMode == true) {

                musicData.update(
                    {
                        playListId: this.model.playListId,
                        musicId: this.model.musicId,
                        name : this.model.name
                    }
                );
            } else {
                musicData.add(
                    {
                        playListId: this.model.playListId,
                        name : this.model.name
                    }
                );
            }

            this.close();
            this.$emit("finish-save");
        },
        open: function(openParam) {
            this.style.view = true;
            this.model.musicId = openParam.musicId || 0;
            this.model.playListId = openParam.playListId || 0;

            var targetMusic = null;
            if (openParam.musicId != null) {
                targetMusic = musicData.getById(openParam.musicId);
            }
            if (targetMusic != null) {
                this.model.name = targetMusic.name;
            } else {
                this.model.name = null;
            }
            this.option.editMode = openParam.editMode || false;
        },
        close: function() {

            this.model.musicId = null;
            this.model.playListId = null;
            this.model.name = null;
            this.style.view = false;
        }
    },
    events: {
        openMusicModal: function(openParam) {
            this.open(openParam);
            return false;
        }
    }
});
Vue.component("music-modal", MusicModal);
