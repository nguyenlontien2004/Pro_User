window.ListBKController = function ($scope, $http, $location) {
  $scope.hi = "Danh sách vé máy bay";
  let apiBK = "http://localhost:3000/booking";

  $http.get(apiBK).then((res) => {
    if (res.status == 200) {
      $scope.booking = res.data;
    }
  });
  $scope.deletePro = function (id) {
    let conf = confirm("Muốn xóa không");
    if (conf) {
      $http.delete(`${apiBK}/${id}`).then((res) => {
        if (res.status == 200) {
          alert("Xóa thành công");
        }
      });
    }
  };
};
