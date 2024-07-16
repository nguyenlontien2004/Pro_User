window.dkController = function ($scope, $http, $location) {
  $scope.cb = "Đăng Ký";
  let apiPro = "http://localhost:3000/user";
  $scope.checkDL = {
    name: false,
    password: false,
    email: false,
  };
  $scope.dangky = function () {
    console.log($scope.inputValue);
    let flag = false;

    if (flag == false) {
      let items = {
        ...$scope.inputValue,
      };
      $http.post(apiPro, items).then((res) => {
        if (res.status == 201) {
          alert("Đăng ký thành công thành công");
          $location.path("/dn");
        }
      });
    }
  };
};
