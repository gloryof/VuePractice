var playListData = {
    data: [],
    sequence: 1,
    addTestData: function() {
        this.data.push({
            id: this.sequence,
            name: "プレイリスト" + this.sequence,
        });
        var current = this.sequence;
        this.sequence++;

        return current;
    },
    add: function(playListItem) {
        this.data.push({
            id: this.sequence,
            name: playListItem.name
        });
        this.sequence++;
    },

    update: function(updateItem) {
        for (var i = 0; i < this.data.length; i++) {

            var targetData = this.data[i];
            if (targetData.id == updateItem.id) {

                targetData.name = updateItem.name;
            }
        }
    },
    delete: function(paramId) {

        var targetIndex = null
        for (var i = 0; i < this.data.length; i++) {

            if (this.data[i].id == paramId ) {

                targetIndex = i;
                break;
            }
        }

        if (targetIndex != null) {
            this.data.splice(targetIndex, 1);
        }
    },
    getAll: function() {
        return this.data;
    },
    getById: function(paramId) {

        for (var i = 0; i < this.data.length; i++) {

            var targetData = this.data[i];
            if (targetData.id == paramId ) {

                return targetData;
            }
        }

        return null;
    }
};
