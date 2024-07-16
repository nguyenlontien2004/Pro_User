window.CtBKController = function ($scope, $http, $location, $routeParams) {
  $scope.hi = "Chi tiết vé";
  let apiBK = "http://localhost:3000/booking";

  $scope.getPro = function (id) {
    $http.get(`${apiBK}/${id}`).then(function (res) {
      if (res.status == 200) {
        $scope.booking = res.data;
      }
    });
  };

  if ($routeParams.id) {
    $scope.getPro($routeParams.id);
  } else {
    $location.path("/book");
  }

};

