function validateForm() {
  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const tanggal = document.getElementById('tanggal').value.trim();
  const pesan = document.getElementById('pesan').value.trim();
  const fasilitas = document.querySelectorAll('input[name="fasilitas"]:checked');

  if (nama === '' || email === '' || tanggal === '' || pesan === '') {
    alert('Harap isi semua kolom yang wajib diisi.');
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert('Harap masukkan alamat email yang valid.');
    return false;
  }

  if (fasilitas.length === 0) {
    alert('Harap pilih minimal satu fasilitas.');
    return false;
  }

  alert('Formulir berhasil dikirim. Terima kasih!');
  return true; 
}

document.addEventListener('DOMContentLoaded', function () {
  const mapImage = document.querySelector('.lokasi img');

  const tooltip = document.createElement('div');
  tooltip.style.position = 'absolute';
  tooltip.style.padding = '8px';
  tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  tooltip.style.color = '#fff';
  tooltip.style.borderRadius = '5px';
  tooltip.style.pointerEvents = 'none';
  tooltip.style.opacity = 0;
  tooltip.style.transition = 'opacity 0.3s';
  tooltip.innerText = 'Villa Lake View - Jl. Danau Asri No. 321, Bali';

  document.body.appendChild(tooltip);

  mapImage.addEventListener('mousemove', function (e) {
    tooltip.style.left = e.pageX + 15 + 'px';
    tooltip.style.top = e.pageY + 15 + 'px';
    tooltip.style.opacity = 1;
  });

  mapImage.addEventListener('mouseleave', function () {
    tooltip.style.opacity = 0;
  });
});
