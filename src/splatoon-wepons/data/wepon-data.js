var Wepon = function(param) {
    this.id = null;
    this.name = param.name;
    this.price = param.price;
    this.range = param.range;
    this.attack = param.attack;
    this.rapid = param.rapid;
    this.sub = param.sub;
    this.special = param.special;
    this.note = note;
};

var WeponList = function() {
    this.seq = 1;
    this.data = [];
};

WeponList.prototype = {
    add: function(wepon) {

        wepon.id = this.seq;
        this.seq++;

        this.data.push(wepon);
    },
    list: function() {
        var results = [];
        var that = this;

        this.data.forEach(function(item) {

            results.push(that._createResult(item));
        });

        return results;
    },
    get: function(id) {

        var results = this.data.filter(function(item) {
            return item.id == id;
        });

        return results[0];
    },
    _createResult: function(item) {

        return {
            id: Number(item.id),
            name: String(item.name),
            price: Number(item.price),
            range: Number(item.range),
            fire: Number(item.fire),
            rapid: Number(item.rapid),
            sub: String(item.sub),
            special: String(item.special),
            note: String(item.note)
        };
    }
};

// データについてはhttp://ahbj.game-cmr.com/splatoon/data/wepon/index.htmlから
// 参照させていただきました
var wepons = new WeponList();

wepons.add({ name :"わかばシューター", price: null, range: 6, fire: 6, rapid:15, sub: "スプラッシュボム", special:"バリア", note:"初期" });
wepons.add({ name :"スプラシューター", price: 500, range: 10, fire: 9, rapid:11, sub: "クイックボム", special:"ボムラッシュ", note:"ランク2" });
wepons.add({ name :"プライムシューター", price: 8000, range: 14, fire: 11, rapid:8, sub: "スプラッシュボム", special:"トルネード", note:"ランク10" });
wepons.add({ name :".52ガロン", price: 3000, range: 10, fire: 14, rapid:6, sub: "スプラッシュシールド", special:"メガホンレーザー", note:"ランク5" });
wepons.add({ name :".96ガロン", price: 7600, range: 14, fire: 16, rapid:3, sub: "スプリンクラー", special:"スーパーセンサー", note:"ランク12" });
wepons.add({ name :"プロモデラーMG", price: 4500, range: 6, fire: 4, rapid:20, sub: "チェイスボム", special:"スーパーショット", note:"設計図：ランク7" });
