window.EditCBController = function ($scope, $http, $location, $routeParams) {
  $scope.hi = "SỬA SẢN PHẨM";
  let apiEdit = "http://localhost:3000/products";

  $scope.getPro = function (id) {
    $http.get(`${apiEdit}/${id}`).then(function (res) {
      $scope.inputValue = {
        diemxuatphat: res.data.diemxuatphat,
        diemden: res.data.diemden,
        gia: res.data.gia,
        hinhanh: res.data.hinhanh,
        phanloai: res.data.phanloai,
      };
    });
  };
  if ($routeParams.id) {
    $scope.getPro($routeParams.id);
  } else {
    $location.path("/trang-chu");
  }

  $scope.editPro = function () {
    let flag = false;
    if (flag == false) {
      let items = {
        ...$scope.inputValue,
      };
      $http.put(`${apiEdit}/${$routeParams.id}`, items).then((res) => {
        if (res.status == 200) {
          alert("Sửa sản phẩm thành công");
          $location.path("/trang-chu");
        }
      });
    }
  };
};
