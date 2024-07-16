window.ListddController = function ($scope, $http, $location) {
  $scope.hi = "DANH SÁCH ĐỊA ĐIỂM HOT";
  let apiBK = "http://localhost:3000/diadiem";

  $http.get(apiBK).then((res) => {
    if (res.status == 200) {
      $scope.diadiem = res.data;
    }
  });
  $scope.deletePro = function (id) {
    let conf = confirm("Muốn xóa địa điểm này không");
    if (conf) {
      $http.delete(`${apiBK}/${id}`).then((res) => {
        if (res.status == 200) {
          alert("Xóa thành công");
        }
      });
    }
  };
};
