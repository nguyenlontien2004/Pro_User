window.CtCBController = function ($scope, $http, $location, $routeParams) {
  $scope.hi = "CHI TIẾT SẢN PHẨM";

  let DiPro = "http://localhost:3000/products";

  $scope.getPro = function (id) {
    $http.get(`${DiPro}/${id}`).then((res) => {
      if (res.status == 200) {
        $scope.inputValue = res.data;
      }
    });
  };
  if ($routeParams.id) {
    $scope.getPro($routeParams.id);
  } else {
    $location.path("/trang-chu");
  }
};
