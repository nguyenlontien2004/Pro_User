window.AddCBController = function ($scope, $http, $location) {
  $scope.cb = "THÊM CHUYẾN BAY";
  let apiPro = "http://localhost:3000/products";
  $scope.checkDL = {
    diemxuatphat: false,
    diemden: false,
  };
  $scope.addSubmit = function () {
    console.log($scope.inputValue);
    let flag = false;
    // if (condition) {
    // }
    if (flag == false) {
      let items = {
        ...$scope.inputValue,
      };
      $http.post(apiPro, items).then((res) => {
        if (res.status == 201) {
          alert("Thêm sản phẩm thành công");
          $location.path("/trang-chu");
        }
      });
    }
  };
};
