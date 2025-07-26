map.on('popupopen', function (e) {
  // Cari semua gambar tombol di dalam popup yang baru terbuka
  var imgs = e.popup._contentNode.querySelectorAll("img[src='images/tombol.png']");
  imgs.forEach(img => {
    // Pasang event klik, kalau sudah ada event klik sebelumnya, bisa di-remove dulu
    img.onclick = function () {
      img.classList.remove("bounce");
      void img.offsetWidth; // reset animasi supaya bisa jalan ulang
      img.classList.add("bounce");
    };
  });
});
