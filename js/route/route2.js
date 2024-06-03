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
    })
    .when("/lienhe", {
      //Định nghĩa route
      templateUrl: "./lienhe.html", //view theo
    })
    .otherwise({
      redirectTo: "/index",
    });
});
