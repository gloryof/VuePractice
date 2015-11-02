for (var i = 0; i < 4; i++) {

    var playListId = playListData.addTestData(i);

    for (var j = 0; j < 3; j++) {

        musicData.addTestData(playListId);
    }
}

var playMusic = new Vue({
    el: "#play-music",
    data: function() {
        return {
            playLists: []
         };
    },
    methods: {
        changePlayList: function(id) {
            this.$broadcast("openMusicList",  id);
        },
        openNewPlayListModal: function() {
            var openParam = {
                editMode: false
            };
            this.$broadcast("openPlayListModal", openParam);
        },
        openEditPlayListModal: function(paramPlayListId) {

            var openParam = {
                editMode: true,
                id: paramPlayListId
            };
            this.$broadcast("openPlayListModal", openParam);
        },
        deletePlayList: function(paramPlayListId) {
            playListData.delete(paramPlayListId);
        },
        deleteMusic: function(paramMusiId) {
            musicData.delete(paramMusiId);
            this.refleshMusicList();
        },
        openNewMusicListModal: function(playListId) {
            this.$broadcast("openMusicModal",
                            {
                                playListId: playListId
                            }
                           );
        },
        openEditMusicListModal: function(key) {
            this.$broadcast("openMusicModal",
                            {
                                playListId: key.playListId,
                                musicId: key.musicId,
                                editMode: true
                            }
                           );
        },
        refleshMusicList: function() {
            this.$broadcast("refleshMusicList");
        }
    }
});
