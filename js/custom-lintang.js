// Custom control untuk menampilkan logo GarisLintang di kanan bawah
var LintangControlBR = L.Control.extend({
  options: {
    position: 'bottomright' // Sudut kanan bawah peta
  },

  onAdd: function(map) {
    // Buat elemen div tanpa kelas "leaflet-bar" agar tampil apa adanya
    var container = L.DomUtil.create('div', 'garislintang-control-br');

    // Masukkan logo dengan tautan ke Instagram
    container.innerHTML = `
      <a href="https://www.instagram.com/garislintang.education/" target="_blank" title="Garis Lintang Education">
        <img src="images/garislintang.png" alt="Logo Garis Lintang">
      </a>
    `;

    // Mencegah event klik mempengaruhi peta (misal drag/zoom)
    L.DomEvent.disableClickPropagation(container);

    return container;
  }
});

// Setelah peta dideklarasikan oleh QGIS2web (var map = ...),
// tambahkan kontrol ini ke peta.
map.addControl(new LintangControlBR());
