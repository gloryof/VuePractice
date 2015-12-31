var weponApp = Vue.extend({});

var router = new VueRouter();
router.map({
    "/list": {
        component: ListComponent
    },
    "/detail/:id": {
        component: DetailComponent,
        name: "detail"
    }
});

router.start(weponApp, "#wepon-app");
