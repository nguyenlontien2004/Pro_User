window.AddBKController = function ($scope, $location, $http) {
  $scope.hi = "ĐẶT VÉ MÁY BAY";
  let apiBK = "http://localhost:3000/booking";
  $scope.inputValue = {};
  $scope.inputValue.diemden = "";
  $scope.checkDL = {};
  $scope.booking = function () {
    let flag = false;

    if (flag == false) {
      let items = {
        ...$scope.booking,
      };

      $http.post(apiBK, items).then((res) => {
        if (res.status == 201) {
          alert("Thêm sản phẩm thành công");
          // $location.path("/trang-chu");
        }
      });
    }
  };
};
