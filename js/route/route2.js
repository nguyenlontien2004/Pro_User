angular.module("myRoute", ["ngRoute"]).config(function ($routeProvider) {
  $routeProvider
    .when("/index", {
      //Định nghĩa route
      templateUrl: "./index.html", //view theo
      controller: ListController,
    })
    .when("/bok", {
      //Định nghĩa route
      templateUrl: "./booking.html", //view theo
      controller: AddBKController,
    })
    .when("/lienhe", {
      //Định nghĩa route
      templateUrl: "./lienhe.html", //view theo
    })
    .when("/dn", {
      //Định nghĩa route
      templateUrl: "./dn.html", //view theo
      controller: loginController,
    })
    .when("/dk", {
      //Định nghĩa route
      templateUrl: "./dk.html", //view theo
      controller: dkController,
    })
    .otherwise({
      redirectTo: "/index",
    });
});
