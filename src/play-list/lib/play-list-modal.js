var PlayListModal = Vue.extend({
    template: "#play-list-modal",
    data: function() {
        return {
            style: {
                view: false
            },
            model: {
                id: null,
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
                playListData.update({ id: this.model.id, name: this.model.name });
            } else {
                playListData.add({ name : this.model.name });
            }

            this.close();
        },
        open: function(openParam) {
            this.option.editMode = openParam.editMode || false;
            this.model.id = openParam.id || null;

            var targetPlayList = null;
            if (openParam.id != null) {
                targetPlayList = playListData.getById(openParam.id);
            }
            if (targetPlayList != null) {

                this.model.name = targetPlayList.name;
            } else {

                this.model.name = null;
            }
            
            this.style.view = true;
        },
        close: function() {
            this.style.view = false;
            this.model.name = null;
            this.model.id = null;
        }
    },
    events: {
        openPlayListModal: function(openParam) {
            this.open(openParam);
        }
    }
});
Vue.component("play-modal", PlayListModal);
