let bntDX = document.querySelector("#dxu");

bntDX?.addEventListener("click", () => {
  if (confirm("Bạn có chắc chắn muốn đăng xuất không?")) {
    window.location.href = "dn.html";
  }
});
