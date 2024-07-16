window.AddddController = function ($scope, $http, $location) {
  $scope.cb = "THÊM ĐỊA ĐIỂM HOT";
  let apiPro = "http://localhost:3000/diadiem";
  $scope.checkDL = {
    name: false,
    hinh: false,
  };
  $scope.addSubmit = function () {
    console.log($scope.inputValue);
    let flag = false;

    if (flag == false) {
      let items = {
        ...$scope.inputValue,
      };
      $http.post(apiPro, items).then((res) => {
        if (res.status == 201) {
          alert("Thêm địa điểm thành công");
          $location.path("/list_dd");
        }
      });
    }
  };
};
