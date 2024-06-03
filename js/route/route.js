angular.module("myRoute", ["ngRoute"]).config(function ($routeProvider) {
  $routeProvider
    .when("/trang-chu", {
      //Định nghĩa route
      templateUrl: "../../admin/view/index.html",
      controller: ListController,
    })
    .when("/add", {
      //Định nghĩa route
      templateUrl: "../../admin/view/add.html", //view theo
      controller: AddCBController,
    })
    .when("/sua/:id", {
      //Định nghĩa route
      templateUrl: "../../admin/view/sua.html", //view theo
      controller: EditCBController,
    })
    .when("/chitiet/:id", {
      //Định nghĩa route
      templateUrl: "../../admin/view/chitiet.html", //view theo
      controller: CtCBController,
    })
    .when("/add-bk", {
      //Định nghĩa route
      templateUrl: "../../admin/view/addBK.html", //view theo
      controller: AddBKController,
    })
    .when("/list_booking", {
      templateUrl: "../../admin/view/list_booking.html", //view theo
      controller: ListBKController,
    })
    .when("/dk", {
      //Định nghĩa route
      templateUrl: "../../admin/view/dangky.html", //view theo
    })
    .when("/dn", {
      //Định nghĩa route
      templateUrl: "../../admin/view/dnhap.html", //view theo
    })
    .when("/index", {
      //Định nghĩa route
      templateUrl: "../../index.html", //view theo
    })
    .when("/bok", {
      //Định nghĩa route
      templateUrl: "../../booking.html", //view theo
    })
    .when("/lienhe", {
      //Định nghĩa route
      templateUrl: "../../lienhe.html", //view theo
    })
    .otherwise({
      redirectTo: "/trang-chu",
    });
});
