window.ListController = function ($scope, $http, $location) {
  $scope.cbhot = "CHUYẾN BAY HOT";
  $scope.d = "ĐỊA ĐIỂM HOT";
  let ApiPro = "http://localhost:3000/products";

  $http.get(ApiPro).then(function (res) {
    if (res.status == 200) {
      $scope.products = res.data;
    }
  });
  $scope.search = function () {
    $http.get("http://localhost:3000/products").then(function (response) {
      $scope.products = response.data;
    });
  };
  
  let apiBK = "http://localhost:3000/diadiem";

  $http.get(apiBK).then((res) => {
    if (res.status == 200) {
      $scope.diadiem = res.data;
    }
  });

  $scope.deletePro = function (idPro) {
    let confim = confirm("Bạn muốn xóa chuyến bay này chứ?");
    if (confim) {
      $http.delete(`${ApiPro}/${idPro}`).then(function (res) {
        if (res.status === 200) {
          alert("Bạn xóa chuyến bay thành công");
        }
      });
    }
  };
};
