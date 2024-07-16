window.EditddController = function ($scope, $http, $location, $routeParams) {
  $scope.hi = "SỬA SẢN PHẨM";
  let apiEdit = "http://localhost:3000/diadiem";

  $scope.getPro = function (id) {
    $http.get(`${apiEdit}/${id}`).then(function (res) {
      $scope.inputValue = {
        name: res.data.name,
        hinh: res.data.hinh,
      };
    });
  };
  if ($routeParams.id) {
    $scope.getPro($routeParams.id);
  } else {
    $location.path("/list_dd");
  }

  $scope.addSubmit = function () {
    let flag = false;
    if (flag == false) {
      let items = {
        ...$scope.inputValue,
      };
      $http.put(`${apiEdit}/${$routeParams.id}`, items).then((res) => {
        if (res.status == 200) {
          alert("Sửa địa điểm thành công");
          $location.path("/list_dd");
        }
      });
    }
  };
};
