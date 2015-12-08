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
        village: "",
        rally: ""
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

            case "rare":
            case "slot":
                filters.push(this._createNumericFunc(propKey, value));
                break;

            case "timing":
                if (value.rally != null && value.rally != "") {
                    var searchRally = value.rally;
                    var searchFunc = this._createNumericSearch(searchRally);
                    filters.push(new FilterCommand(function(item) {
                        return searchFunc(item.timing.rally);
                    }));
                }

                if (value.village != null && value.village != "") {
                    var searchVillage = value.village;
                    var searchFunc = this._createNumericSearch(searchVillage);
                    filters.push(new FilterCommand(function(item) {
                        return searchFunc(item.timing.village);
                    }));
                }

                break;

            case "difense":
                if (value.min != null && value.min != "") {
                    var searchMin = value.min;
                    var searchFunc = this._createNumericSearch(searchMin);
                    filters.push(new FilterCommand(function(item) {

                        return searchFunc(item.difense.min);
                    }));
                }

                if (value.max != null && value.max != "") {
                    var searchMax = value.max;
                    var searchFunc = this._createNumericSearch(searchMax);
                    filters.push(new FilterCommand(function(item) {

                        return searchFunc(item.difense.max);
                    }));
                }

                break;

            case "registance":
                if (value.fire != null && value.fire != "") {
                    var searchFire = value.fire;
                    var searchFunc = this._createNumericSearch(searchFire);
                    filters.push(new FilterCommand(function(item) {

                        return searchFunc(item.registance.fire);
                    }));
                }

                if (value.water != null && value.water != "") {
                    var searchWater = value.water;
                    var searchFunc = this._createNumericSearch(searchWater);
                    filters.push(new FilterCommand(function(item) {

                        return searchFunc(item.registance.water);
                    }));
                }

                if (value.thunder != null && value.thunder != "") {
                    var searchThunder = value.thunder;
                    var searchFunc = this._createNumericSearch(searchThunder);
                    filters.push(new FilterCommand(function(item) {

                        return searchFunc(item.registance.thunder);
                    }));
                }

                if (value.ice != null && value.ice != "") {
                    var searchIce = value.ice;
                    var searchFunc = this._createNumericSearch(searchIce);
                    filters.push(new FilterCommand(function(item) {

                        return searchFunc(item.registance.ice);
                    }));
                }

                if (value.dragon != null && value.dragon != "") {
                    var searchDragon = value.dragon;
                    var searchFunc = this._createNumericSearch(searchDragon);
                    filters.push(new FilterCommand(function(item) {

                        return searchFunc(item.registance.dragono);
                    }));
                }

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
    },
    _createNumericFunc: function(key, value) {

        var that = this;
        var data = new FilterCommand(function(item) {
            var itemValue = item[this.key]
            if (itemValue ==  null || itemValue === "") {
                return false
            }

            var searchFunc = that._createNumericSearch(value);
            return searchFunc(itemValue);
        });
        data.key = key;
        data.value = value;

        return data;
    },
    _createNumericSearch: function(value) {

        var filterFunc = null;

        if (-1 < value.search("<=")) {

            return function(itemValue) {

                return itemValue <= Number(value.slice(2));
            };
        }

        if (-1 < value.search(">=")) {

            return function(itemValue) {

                return itemValue >= Number(value.slice(2));
            };
        }

        if (-1 < value.search("<")) {

            return function(itemValue) {

                return itemValue < Number(value.slice(1));
            };
        }

        if (-1 < value.search(">")) {

            return function(itemValue) {

                return itemValue > Number(value.slice(1));
            };
        }

        return function(itemValue) {

            return itemValue == value;
        }
    }
}
