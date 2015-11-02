var musicData = {
    data: [],
    sequence: 1,
    addTestData: function(playListId) {
        this.data.push({
            musicId: this.sequence,
            playListId: playListId,
            name: "音楽" + this.sequence
        });
        var current = this.sequence;
        this.sequence++;

        return current;
    },
    add: function(musicItem) {
        this.data.push({
            musicId: this.sequence,
            playListId: musicItem.playListId,
            name: musicItem.name
        });
        this.sequence++;
    },
    update: function(updateItem) {
        for (var i = 0; i < this.data.length; i++) {

            var targetData = this.data[i];
            if (targetData.musicId == updateItem.musicId) {

                targetData.name = updateItem.name;
            }
        }
    },
    delete: function(paramId) {

        var targetIndex = null
        for (var i = 0; i < this.data.length; i++) {

            if (this.data[i].musicId == paramId ) {

                targetIndex = i;
                break;
            }
        }

        if (targetIndex != null) {
            this.data.splice(targetIndex, 1);
        }
    },

    getById: function(paramId) {

        for (var i = 0; i < this.data.length; i++) {

            var targetData = this.data[i];
            if (targetData.musicId == paramId ) {

                return targetData;
            }
        }

        return null;
    },
    getByPlayListId: function(id) {
        return this.data.filter(function(v) { return v.playListId == id });
    }
};
