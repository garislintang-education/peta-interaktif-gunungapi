// Pastikan kode ini dijalankan setelah objek "map" dideklarasikan oleh QGIS2web.
var LogoControl = L.Control.extend({
  options: {
    position: 'topleft' // Posisi di pojok kiri atas, sejajar dengan kontrol lainnya.
  },
  onAdd: function (map) {
    // Buat elemen container dengan kelas yang sesuai agar tampilannya mirip tombol Leaflet.
    var container = L.DomUtil.create('div', 'leaflet-bar leaflet-control my-logo-control');
    
    // Masukkan logo yang merupakan link ke tautan yang diinginkan.
    container.innerHTML = '<a href="https://www.youtube.com/@GarisLintangEdu" target="_blank" title="Lihat channel kami!">' +
                          '<img src="images/mylogo.png" alt="Logo Saya" style="width:30px; height:30px;">' +
                          '</a>';
    
    // Pastikan klik pada kotak tidak mempengaruhi interaksi peta.
    L.DomEvent.disableClickPropagation(container);
    
    return container;
  }
});

// Tambahkan kontrol logo ke peta
map.addControl(new LogoControl());
