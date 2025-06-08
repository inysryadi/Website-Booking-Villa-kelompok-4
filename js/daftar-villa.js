const villas = [
  {
    nama: 'Villa modern dengan Kolam Renang',
    harga: 3500000,
    fasilitas: ['kolam'],
    img: 'media/villamodern.jpg',
    deskripsi: 'Villa mewah dengan kolam renang pribadi.'
  },
  {
    nama: 'Villa keluarga',
    harga: 5000000,
    fasilitas: ['danau', 'kolam'],
    img: 'media/villakeluarga.jpg',
    deskripsi: 'Villa luas berkapasitas lebih dari 10 orang dengan pemandangan danau, kolam pribadi, cocok untuk keluarga besar.'
  },
  {
    nama: 'Villa Hemat ',
    harga: 1800000,
    fasilitas: ['kolam'],
    img: 'media/villahemat.jpg',
    deskripsi: 'Villa harga terjangkau dengan kolam renang.'
  },
  {
    nama: 'Villa Sunset View',
    harga: 2000000,
    fasilitas: ['danau'],
    img: 'media/villasunset.jpg',
    deskripsi: 'Menikmati sunset langsung dari balkon villa dengan pemandangan danau.'
  }
];

const villaList = document.getElementById('villa-list');

function renderVillas(filter = 'all') {
  villaList.innerHTML = '';
  villas.forEach(villa => {
    if (
      filter === 'all' ||
      (filter === 'kolam' && villa.fasilitas.includes('kolam')) ||
      (filter === 'danau' && villa.fasilitas.includes('danau')) ||
      (filter === 'murah' && villa.harga < 3000000) ||
      (filter === 'mahal' && villa.harga >= 3000000)
    ) {
      const card = document.createElement('div');
      card.className = 'villa-card';
      card.innerHTML = `
        <img src="${villa.img}" alt="${villa.nama}">
        <h3>${villa.nama}</h3>
        <p class="harga">Rp ${villa.harga.toLocaleString()}/malam</p>
      `;

      card.addEventListener('click', () => {
        showDetail(villa);
      });

      villaList.appendChild(card);
    }
  });
}

function showDetail(villa) {
  const modal = document.createElement('div');
  modal.className = 'villa-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <img src="${villa.img}" alt="${villa.nama}">
      <h2>${villa.nama}</h2>
      <p>${villa.deskripsi}</p>
      <p class="harga">Rp ${villa.harga.toLocaleString()}/malam</p>
      <button onclick="document.body.removeChild(this.closest('.villa-modal'))">Tutup</button>
    </div>
  `;
  document.body.appendChild(modal);
}

function filterVilla(kategori) {
  renderVillas(kategori);
}

window.onload = () => renderVillas();
