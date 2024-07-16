window.loginController = function ($scope, $http, $window) {
  $scope.hi = "ĐĂNG NHẬP";
  let apiBK = "http://localhost:3000/diadiem";
  $http.get(apiBK).then((res) => {
    if (res.status == 200) {
      $scope.diadiem = res.data;
    }
  });
  
  $scope.login = false; // Biến trạng thái đăng nhập

  $scope.login = function () {
    $http
      .get("http://localhost:3000/user")
      .then(function (response) {
        if (checkLogin(response.data, $scope.user, $scope.pass)) {
          $scope.login = true;
          alert("Đăng nhập thành công");
          $window.location.href = "layout.html";
        } else {
          alert("Tài khoản hoặc mật khẩu không đúng");
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    function checkLogin(data, user, pass) {
      return data.some(function (dt) {
        return dt.user === user && dt.pass === pass;
      });
    }
  };
};
