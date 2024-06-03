window.TrangchuController = function ($scope, $http, $location) {
  $scope.tester = "Đặt Vé Máy Bay";

  let ApiPro = "http://localhost:3000/products";

  $http.get(ApiPro).then(function (res) {
    if (res.status == 200) {
      $scope.products = res.data;
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
