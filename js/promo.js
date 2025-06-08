const promoData = [
    {
        title: "Diskon 20% Akhir Pekan",
        detail: "Nikmati diskon 20% untuk pemesanan villa di akhir pekan (Jumat-Minggu).",
        code: "WEEKEND123"
    },
    {
        title: "Paket Keluarga Spesial",
        detail: "Paket liburan keluarga dengan diskon 15% untuk pemesanan villa keluarga. Termasuk sarapan gratis untuk 6 orang. Bonus 1x makan malam di restoran villa.",
        code: "FAMILY123"
    },
    {
        title: "Paket Bulan Madu",
        detail: "Pengalaman romantis khusus untuk pasangan baru menikah. Dekorasi kamar spesial dan bunga segar.",
        code: "HONEY123"
    }
];

function createPromoCards() {
    const promoList = document.querySelector('.promo-list');
    
    promoList.innerHTML = '';
    
    promoData.forEach((promo, index) => {
        const promoCard = document.createElement('div');
        promoCard.className = 'promo-card';
        promoCard.innerHTML = `
            <h3>${promo.title}</h3>
            <button class="promo-btn">Lihat Promo</button>
            <div class="promo-detail">
                <p>${promo.detail}</p>
                <p class="promo-code">Kode Promo: <strong>${promo.code}</strong></p>
            </div>
        `;
        promoList.appendChild(promoCard);
    });
}

function togglePromo(button) {
    const promoDetail = button.nextElementSibling;
    
    if (promoDetail.style.maxHeight) {
        promoDetail.style.maxHeight = null;
        button.textContent = 'Lihat Promo';
    } else {
        promoDetail.style.maxHeight = promoDetail.scrollHeight + 'px';
        button.textContent = 'Tutup';
    }
}

function setupPromoEvents() {
    document.querySelectorAll('.promo-btn').forEach(button => {
        button.addEventListener('click', function() {
            togglePromo(this);
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    createPromoCards();
    setupPromoEvents();
    
    const style = document.createElement('style');
    style.textContent = `
        .promo-detail {
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.3s ease-out;
            margin-top: 0;
        }
        .promo-code {
            margin-top: 0.5rem;
            padding: 0.5rem;
            background-color: #f8f9fa;
            border-left: 3px solid #28a745;
            font-style: italic;
        }
    `;
    document.head.appendChild(style);
});
