let bntDX = document.querySelector('#dx');

bntDX?.addEventListener('click', () => {
  if (confirm('Bạn có chắc chắn muốn đăng xuất không?')) {
    window.location.href = 'dnhap.html';
  }
})