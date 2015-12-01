var FilterCommand = function(exec) {
    this.exec = exec;
};

var FilterOption = function() {
    this.name = null;
    this.gender = "";
    this.type = "";
    this.rare = null;
    this.slot = null;
    this.timing = {
        village: null,
        rally: null
    };
    this.difense = {
        min: null,
        max: null
    };
    this.registance = {
        fire: null,
        water: null,
        thunder: null,
        ice: null,
        dragon: null
    };
    this.skills = null;
    this.materials = null;
};

FilterOption.prototype = {
    extractFrom: function(item) {

        var filterFunc = this._createFilters();

        return item.filter(filterFunc);
    },
    _createFilters: function() {

        var filters = [];

        for (var propKey in this) {

            var value = this[propKey];
            if (typeof value == "function") {
                continue;
            }

            if (value == null || value == "") {
                continue;
            }

            switch(propKey) {

            case "timing":
                if (value.village != null && value.village != "") {
                    filters.push(new FilterCommand(function(item) {
                        return (-1 < String(item.timing.village).indexOf(value.village));
                    }));
                }

                if (value.rally != null && value.rally != "") {
                    filters.push(new FilterCommand(function(item) {
                        return (-1 < String(item.rally.village).indexOf(value.rally));
                    }));
                }

                break;

            case "difense":
                if (value.min != null && value.min != "") {
                    filters.push(new FilterCommand(function(item) {

                        return (-1 < String(item.difense.min).indexOf(value.min));
                    }));
                }

                if (value.max != null && value.max != "") {
                    filters.push(new FilterCommand(function(item) {

                        return (-1 < String(item.difense.max).indexOf(value.max));
                    }));
                }

                break;

            case "registance":
                break;
            default:
                filters.push(this._createBasicFilter(propKey, value));
                break;
            }

        }
        return function(item) {

            for (var i = 0; i < filters.length; i++) {

                if (!filters[i].exec(item)) {

                    return false;
                };
            }

            return true;
        };
    },
    _createBasicFilter: function(key, value) {

        var data = new FilterCommand(function(item) {
            var itemValue = item[this.key]
            if (itemValue ==  null || itemValue === "") {
                return false
            }

            return (-1 < String(itemValue).indexOf(this.value));
        });
        data.key = key;
        data.value = value;

        return data;
    }
}
