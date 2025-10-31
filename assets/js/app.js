const dataStore = {
    districts: [
        'Muratpaşa', 'Kepez', 'Konyaaltı', 'Aksu', 'Döşemealtı', 'Kemer', 'Kumluca', 'Finike', 'Kaş', 'Demre', 'Serik', 'Manavgat', 'Alanya', 'Gazipaşa', 'İbradı', 'Elmalı', 'Korkuteli', 'Gündoğmuş', 'Akseki'
    ],
    devices: [
        { name: 'Buzdolabı', icon: 'fa-solid fa-snowflake', tags: ['Gaz Dolumu', 'No-Frost', 'Enerji Tasarrufu'], price: '1.450 TL', response: 'Aynı Gün', warranty: '12 Ay', description: 'Sıcak Antalya günlerinde gıdalarınızı koruyan buzdolapları için hızlı soğutma testleri ve gaz kaçak kontrolleri.' },
        { name: 'Çamaşır Makinesi', icon: 'fa-solid fa-shirt', tags: ['Dengeleme', 'Motor Bakımı', 'Pompa'], price: '1.250 TL', response: '4 Saat', warranty: '12 Ay', description: 'Titreşim, su tahliye ve elektronik kart sorunları için kalibre edilmiş test ekipmanlarımızla çözüm sunuyoruz.' },
        { name: 'Bulaşık Makinesi', icon: 'fa-solid fa-bowl-food', tags: ['Rezistans', 'Su Alma', 'Parlatma'], price: '1.150 TL', response: '6 Saat', warranty: '12 Ay', description: 'Su alma, kurutma ve deterjan dozaj problemleri için kapsamlı kontrol listemizle hijyeninizi garanti ediyoruz.' },
        { name: 'Klima', icon: 'fa-solid fa-fan', tags: ['Gaz Dolumu', 'İç/Dış Ünite', 'Temizlik'], price: '950 TL', response: '2 Saat', warranty: '6 Ay', description: 'Split ve multisplit klimalarda ozon temizliği, gaz dolumu ve elektronik kart onarımlarıyla yaz-kış konfor sağlıyoruz.' },
        { name: 'Kombi', icon: 'fa-solid fa-fire', tags: ['Eşanjör', 'Tesisat', 'Baca'], price: '1.380 TL', response: 'Aynı Gün', warranty: '24 Ay', description: 'Gaz kaçak testleri, eşanjör temizlikleri ve sistem basınç ayarlarıyla kış konforunuzu güvenceye alıyoruz.' },
        { name: 'Televizyon', icon: 'fa-solid fa-tv', tags: ['Panel', 'Ses', 'Yazılım'], price: '1.100 TL', response: 'Ertesi Gün', warranty: '12 Ay', description: 'LED, OLED ve QLED panellerde piksel, ses ve yazılım sorunlarına yönelik profesyonel laboratuvar çözümleri.' },
        { name: 'Kurutma Makinesi', icon: 'fa-solid fa-wind', tags: ['Filtre', 'Isı Pompası', 'Sensör'], price: '1.200 TL', response: '6 Saat', warranty: '12 Ay', description: 'Filtre temizliği, ısı pompası ve sensör kalibrasyonları ile çamaşırlarınızı ilk günkü gibi kurutuyoruz.' },
        { name: 'Ankastre Set', icon: 'fa-solid fa-kitchen-set', tags: ['Fırın', 'Ocak', 'Davlumbaz'], price: '1.550 TL', response: 'Aynı Gün', warranty: '12 Ay', description: 'Ankastre fırın, ocak ve davlumbazlarda senkronize bakım ve performans testleri uyguluyoruz.' }
    ],
    brands: [
        'Bosch', 'Vestel', 'Arçelik', 'Siemens', 'Beko', 'LG', 'Samsung', 'Profilo', 'Altus', 'Regal',
        'Viessmann', 'Demirdöküm', 'Vaillant', 'Baymak', 'Electrolux', 'Protherm', 'Hoover', 'Hotpoint', 'Immergas', 'Ferroli', 'Mitsubishi Electric', 'Daikin', 'Gree', 'Grundig'
    ],
    brandHighlights: [
        { name: 'Bosch', motto: 'Alman mühendisliği hassasiyetinde çözümler', features: ['Orijinal yedek parça', 'Gelişmiş test ekipmanları', 'Bosch Home Connect entegrasyonu'] },
        { name: 'Arçelik', motto: 'Türkiye’nin lider markası için yetkin servis', features: ['Yetkili prosedürlerine uygun', 'Enerji verimliliği raporu', 'Elektronik kart tamiri'] },
        { name: 'Buderus', motto: 'Isı sistemlerinde uzman ekibimizle', features: ['Baca gazı analizi', 'Yoğuşma sistemi bakımı', '24 ay işçilik garantisi'] },
        { name: 'Viessmann', motto: 'Kombi ve kazan sistemlerinde yetkinlik', features: ['Isı kaybı analizi', 'Akıllı termostat kurulumu', 'Yedek cihaz temini'] },
        { name: 'Electrolux', motto: 'İskandinav tasarımına özel bakım', features: ['Premium temizlik', 'A+++ performans optimizasyonu', 'Yazılım güncellemeleri'] },
        { name: 'Mitsubishi Electric', motto: 'İleri teknoloji klima çözümleri', features: ['VRF sistem desteği', 'Inverter kontrol testleri', 'Enerji verimliliği raporu'] },
        { name: 'Hotpoint-Ariston', motto: 'Akıllı mutfak teknolojilerinde uzman', features: ['ActiveCare kontrolü', 'İtalyan standartlarında bakım', 'Acil müdahale'] },
        { name: 'Hoover', motto: 'Performansı maksimuma çıkaran servis', features: ['Hızlı parça tedariki', 'Derinlemesine iç temizlik', 'Eco program ayarı'] },
        { name: 'Protherm', motto: 'Kış aylarında kesintisiz ısınma', features: ['Eşanjör onarımı', 'Genleşme tankı bakımı', 'Sistem yıkama hizmeti'] },
        { name: 'Baymak', motto: 'İklimlendirme ve kombide güvenilir destek', features: ['Yetkili merkez bağlantısı', 'Uzaktan takip', 'Yedek cihaz opsiyonu'] }
    ],
    serviceMatrix: [
        { district: 'Muratpaşa', brand: 'Bosch', device: 'Buzdolabı', eta: '90 dakika', team: 'Soğutma Ekibi-1', price: '1.450 TL', notes: 'Gaz kaçak kontrolü, fan kalibrasyonu ve kapı fitil yenileme.' },
        { district: 'Konyaaltı', brand: 'Samsung', device: 'Çamaşır Makinesi', eta: '2 saat', team: 'Elektronik Ekibi-3', price: '1.250 TL', notes: 'Motor sürücü kartı güncellemesi ve tambur dengeleme.' },
        { district: 'Alanya', brand: 'LG', device: 'Klima', eta: '3 saat', team: 'İklimlendirme Ekibi-2', price: '980 TL', notes: 'Gaz dolumu, drenaj hattı temizliği ve sensör testi.' },
        { district: 'Kepez', brand: 'Arçelik', device: 'Bulaşık Makinesi', eta: '110 dakika', team: 'Mutfak Ekibi-4', price: '1.180 TL', notes: 'Rezistans değişimi, su basınç testi ve deterjan sistemi ayarı.' },
        { district: 'Manavgat', brand: 'Bosch', device: 'Kombi', eta: '3 saat', team: 'Isı Sistemleri Ekibi', price: '1.420 TL', notes: 'Yoğuşma eşanjörü temizliği, baca gazı analizi ve tesisat basınç ayarı.' },
        { district: 'Serik', brand: 'Vestel', device: 'Televizyon', eta: '4 saat', team: 'Görüntüleme Ekibi', price: '1.050 TL', notes: 'LED panel testleri, yazılım güncellemesi ve ses kalibrasyonu.' },
        { district: 'Kemer', brand: 'Mitsubishi Electric', device: 'Klima', eta: '2 saat', team: 'VRF Uzmanları', price: '1.350 TL', notes: 'VRF outdoor modül bakımı ve enerji verimliliği raporu.' },
        { district: 'Gazipaşa', brand: 'Baymak', device: 'Kombi', eta: '5 saat', team: 'Isı Sistemleri Ekibi', price: '1.500 TL', notes: 'Genleşme tankı basınç ayarı, pompa kontrolü ve emniyet ventili testi.' },
        { district: 'Finike', brand: 'Beko', device: 'Kurutma Makinesi', eta: '4 saat', team: 'Laundry Pro', price: '1.180 TL', notes: 'Filtre temizliği, sensör kalibrasyonu ve ısı pompası bakımı.' },
        { district: 'Kaş', brand: 'Bosch', device: 'Ankastre Set', eta: '6 saat', team: 'Premium Ankastre Ekibi', price: '1.750 TL', notes: 'Fırın rezistans ölçümü, ocak gaz ayarı ve davlumbaz karbonsuzlaştırma.' }
    ],
    pricing: [
        { device: 'Buzdolabı', tier: 'Standart Bakım', price: '1.450 TL', includes: ['Gaz kaçak testi', 'Termostat kalibrasyonu', 'Kapı fitil yenileme'], highlight: 'Ücretsiz performans raporu' },
        { device: 'Klima', tier: 'Mega Klima Paketi', price: '950 TL', includes: ['Kimyasal iç ünite temizliği', 'Gaz dolumu', 'Drenaj hattı açma'], highlight: 'Enerji tasarruf garantisi' },
        { device: 'Kombi', tier: 'Kışa Hazırlık', price: '1.380 TL', includes: ['Eşanjör temizliği', 'Baca gaz analizi', 'Petek yıkama'], highlight: '24 ay işçilik garantisi' },
        { device: 'Çamaşır Makinesi', tier: 'Pro Laundry', price: '1.250 TL', includes: ['Motor kontrolü', 'Tambur balans ayarı', 'Pompa temizliği'], highlight: 'Yedek makine temini' }
    ],
    faultCodes: [
        { code: 'E01', reason: 'Su Girişi Sorunu', solution: 'Su vanasını ve giriş filtresini kontrol edin. Sorun devam ederse solenoid vana değişimi yapılır.' },
        { code: 'F21', reason: 'Motor Arızası', solution: 'Motor kömürleri ve tacho sensörü ölçülür, gerekirse motor yenilenir.' },
        { code: 'A03', reason: 'Aşırı Isınma', solution: 'Termostat, fan ve hava kanalları temizlenir. Gerekirse sensör değişimi yapılır.' },
        { code: 'H6', reason: 'Kompresör Hatası', solution: 'Basınç testleri yapılır, kompresör rölesi ve kapasitör kontrol edilir.' },
        { code: 'E10', reason: 'Gaz Basıncı Düşük', solution: 'Gaz hattında kaçak testi yapılır, eksik gaz tamamlanır ve sızıntı giderilir.' },
        { code: 'E32', reason: 'Sensör Kalibrasyonu', solution: 'Sensör değerleri kalibre edilir, gerektiğinde sensör değişimi yapılır.' }
    ],
    deviceFaq: [
        { question: 'Buzdolabım yeterince soğutmuyor, neden olabilir?', answer: 'Kompresör çalışma süreleri analiz edilir, kondenser ve evaporatör temizlenir. Gaz kaçak testi yapılarak eksik gaz tamamlanır.' },
        { question: 'Çamaşır makinem yüksek ses yapıyor, çözüm nedir?', answer: 'Amortisör ve rulman kontrolleri yapılır, tambur dengesi sağlanır ve motor yazılımı güncellenir.' },
        { question: 'Ankastre fırın ısıtmıyor, hangi işlemler uygulanır?', answer: 'Rezistans, termostat ve fan modülü ölçülür, arızalı parçalar orijinal muadilleriyle değiştirilir.' }
    ],
    brandTable: [
        { brand: 'Bosch', guarantee: '12 Ay Parça + İşçilik', expertise: 'Home Connect entegrasyonu, A+++ enerji optimizasyonu', benefit: 'Yetkili dokümantasyon ile kayıt' },
        { brand: 'Arçelik', guarantee: '24 Ay İşçilik', expertise: 'Akıllı panel yazılım güncellemesi', benefit: 'Yedek cihaz temini' },
        { brand: 'Buderus', guarantee: '24 Ay Isı Sistemleri', expertise: 'Yoğuşma kazan bakımı ve baca gazı analizi', benefit: 'Gecelik nöbetçi ekip' },
        { brand: 'Electrolux', guarantee: '12 Ay', expertise: 'Gourmet mutfak serisi özel bakımı', benefit: 'Premium müşteri temsilcisi' }
    ],
    deviceTable: [
        { device: 'Buzdolabı', periodic: '6 Ayda 1', checklist: 'Gaz basıncı, termostat, fan motoru', extras: 'Ücretsiz performans raporu' },
        { device: 'Çamaşır Makinesi', periodic: '12 Ayda 1', checklist: 'Tambur dengeleme, motor kömürleri, pompa filtresi', extras: 'Yedek makine desteği' },
        { device: 'Klima', periodic: '6 Ayda 1', checklist: 'İç/dış ünite temizliği, drenaj kontrolü, gaz basıncı', extras: 'Enerji verimlilik raporu' },
        { device: 'Kombi', periodic: 'Yılda 1', checklist: 'Eşanjör, genleşme tankı, baca gazı analizi', extras: '24 ay işçilik garantisi' }
    ],
    regionTable: [
        { district: 'Muratpaşa', arrival: '60 dk', resolution: 'Aynı gün', crew: '3 mobil ekip', note: 'Yoğun merkez bölgelerde ek yedek ekipman stoğu' },
        { district: 'Kepez', arrival: '90 dk', resolution: 'Aynı gün', crew: '2 mobil ekip', note: 'Organize sanayi için sanayi tipi cihaz desteği' },
        { district: 'Alanya', arrival: '180 dk', resolution: 'Ertesi gün', crew: '1 mobil ekip', note: 'Turizm sezonunda 24 saat nöbetçi ekip' },
        { district: 'Kaş', arrival: '240 dk', resolution: 'Ertesi gün', crew: '1 mobil ekip', note: 'Uzun mesafe için yedek parça ön yüklemesi' }
    ],
    testimonials: [
        { name: 'Merve A.', comment: 'Buzdolabımın motoru için aynı gün gelip sorunu çözdüler. WhatsApp üzerinden anlık bilgi verdiler.', rating: 5, date: 'Mart 2024', district: 'Muratpaşa' },
        { name: 'Hakan K.', comment: 'Kombimizdeki sıcak su problemine gecenin bir yarısı müdahale ettiler. Fiyatları da çok şeffaf.', rating: 5, date: 'Şubat 2024', district: 'Kepez' },
        { name: 'Nilay D.', comment: 'Klima bakımında detaylı temizlik yaptılar, cihaz artık ilk günkü gibi serinletiyor.', rating: 5, date: 'Temmuz 2023', district: 'Konyaaltı' },
        { name: 'Erman S.', comment: 'Çamaşır makinem için yedek cihaz getirip mağduriyetimi önlediler. Tavsiye ederim.', rating: 4, date: 'Ocak 2024', district: 'Alanya' },
        { name: 'Seda Y.', comment: 'Google yorumlarına güvenip aradım, ankastre fırınımı bir saatte teslim ettiler.', rating: 5, date: 'Aralık 2023', district: 'Serik' },
        { name: 'Özgür B.', comment: 'Kombi bakımında detaylı rapor sundular. Enerji tüketimim gözle görülür düştü.', rating: 5, date: 'Kasım 2023', district: 'Manavgat' },
        { name: 'Ayşe Z.', comment: 'Müşteri hizmetleri çok ilgili, randevu saatine sadık kaldılar.', rating: 5, date: 'Ağustos 2023', district: 'Finike' },
        { name: 'Yavuz T.', comment: 'Televizyon panel tamirinde uygun fiyat ve orijinal parça kullandılar.', rating: 4, date: 'Eylül 2023', district: 'Serik' },
        { name: 'Büşra L.', comment: 'Klima montajında temiz çalıştılar, çevreyi kirletmediler.', rating: 5, date: 'Haziran 2023', district: 'Aksu' },
        { name: 'Ufuk G.', comment: 'Kurutma makinesi sorunum için ertesi gün çözüme kavuştuk.', rating: 5, date: 'Ekim 2023', district: 'Kumluca' }
    ]
};

const selectConfigs = [
    { id: 'districtSelect', source: dataStore.districts },
    { id: 'brandSelect', source: dataStore.brands },
    { id: 'deviceSelect', source: dataStore.devices.map(device => device.name) },
    { id: 'district', source: dataStore.districts },
    { id: 'brand', source: dataStore.brands },
    { id: 'device', source: dataStore.devices.map(device => device.name) }
];

selectConfigs.forEach(({ id, source }) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.innerHTML = ['<option value="">Seçiniz</option>', ...source.map(item => `<option value="${item}">${item}</option>`)].join('');
});

const searchButton = document.getElementById('searchService');
if (searchButton) {
    searchButton.addEventListener('click', () => {
        const district = document.getElementById('districtSelect').value;
        const brand = document.getElementById('brandSelect').value;
        const device = document.getElementById('deviceSelect').value;
        const resultWrapper = document.getElementById('serviceResults');

        if (!district || !brand || !device) {
            resultWrapper.innerHTML = '<p class="result-warning">Lütfen tüm alanları seçin.</p>';
            return;
        }

        const match = dataStore.serviceMatrix.find(item => item.district === district && item.brand === brand && item.device === device);

        if (!match) {
            resultWrapper.innerHTML = `
                <div class="result-card">
                    <h3>Seçiminize uygun hazır paket bulunamadı</h3>
                    <p>Özel servis planı oluşturmak için <a href="tel:02423220070">0242 322 00 70</a> numaramızı arayabilirsiniz.</p>
                </div>
            `;
            return;
        }

        resultWrapper.innerHTML = `
            <div class="result-card">
                <h3>${match.district} ilçesi için ${match.brand} ${match.device} servisi</h3>
                <ul>
                    <li><strong>Ulaşım Süresi:</strong> ${match.eta}</li>
                    <li><strong>Sorumlu Ekip:</strong> ${match.team}</li>
                    <li><strong>Servis Ücreti:</strong> ${match.price}</li>
                    <li><strong>Detay:</strong> ${match.notes}</li>
                </ul>
                <a class="btn primary" href="tel:02423220070">Acil Servis Talebi</a>
            </div>
        `;
    });
}

const priceTable = document.getElementById('priceTable');
if (priceTable) {
    priceTable.innerHTML = dataStore.pricing.map(item => `
        <article class="price-card" data-device="${item.device}">
            <span class="label">${item.tier}</span>
            <h3>${item.device} Servisi</h3>
            <strong>${item.price}</strong>
            <ul>
                ${item.includes.map(feature => `<li><i class="fa-solid fa-check"></i> ${feature}</li>`).join('')}
            </ul>
            <p class="highlight">${item.highlight}</p>
        </article>
    `).join('');
}

function renderDeviceCards(targetId) {
    const container = document.getElementById(targetId);
    if (!container) return;
    container.innerHTML = dataStore.devices.map(device => `
        <article class="device-card">
            <i class="${device.icon}"></i>
            <h3>${device.name}</h3>
            <p>${device.description}</p>
            <div class="tags">${device.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
            <ul class="device-meta">
                <li><strong>Servis Ücreti:</strong> ${device.price}</li>
                <li><strong>Müdahale Süresi:</strong> ${device.response}</li>
                <li><strong>Garanti:</strong> ${device.warranty}</li>
            </ul>
        </article>
    `).join('');
}

renderDeviceCards('deviceCards');
renderDeviceCards('deviceCardsPage');

const brandGrid = document.getElementById('brandGrid');
if (brandGrid) {
    brandGrid.innerHTML = dataStore.brandHighlights.slice(0, 6).map(brand => `
        <article class="brand-card">
            <h3>${brand.name}</h3>
            <p>${brand.motto}</p>
            <ul>${brand.features.map(feature => `<li><i class="fa-solid fa-circle-check"></i> ${feature}</li>`).join('')}</ul>
        </article>
    `).join('');
}

const brandGridPage = document.getElementById('brandGridPage');
if (brandGridPage) {
    brandGridPage.innerHTML = dataStore.brandHighlights.map(brand => `
        <article class="brand-card">
            <h3>${brand.name}</h3>
            <p>${brand.motto}</p>
            <ul>${brand.features.map(feature => `<li><i class="fa-solid fa-circle-check"></i> ${feature}</li>`).join('')}</ul>
        </article>
    `).join('');
}

function renderTable(targetId, columns, rows) {
    const container = document.getElementById(targetId);
    if (!container) return;
    const headers = Object.values(columns).map(title => `<th>${title}</th>`).join('');
    const body = rows.map(row => `<tr>${Object.keys(columns).map(key => `<td>${row[key]}</td>`).join('')}</tr>`).join('');
    container.innerHTML = `<table><thead><tr>${headers}</tr></thead><tbody>${body}</tbody></table>`;
}

renderTable('deviceTable', { device: 'Cihaz', periodic: 'Periyot', checklist: 'Kontrol Listesi', extras: 'Ekstra Avantaj' }, dataStore.deviceTable);
renderTable('brandTable', { brand: 'Marka', guarantee: 'Garanti', expertise: 'Uzmanlık', benefit: 'Avantaj' }, dataStore.brandTable);
renderTable('regionTable', { district: 'İlçe', arrival: 'Ulaşım', resolution: 'Çözüm Süresi', crew: 'Ekip Sayısı', note: 'Not' }, dataStore.regionTable);

const regionGrid = document.getElementById('regionGrid');
if (regionGrid) {
    regionGrid.innerHTML = dataStore.districts.map(district => `
        <article class="region-card">
            <h3>${district}</h3>
            <p>${district} ilçesinde hızlı müdahale ve mobil servis araçlarımızla aynı gün çözüm.</p>
            <ul>
                <li><strong>Servis Hattı:</strong> 0242 322 00 70</li>
                <li><strong>Randevu Süresi:</strong> ${Math.floor(Math.random() * 3) + 1} gün içinde</li>
            </ul>
        </article>
    `).join('');
}

function buildAccordion(targetId, entries, formatter) {
    const container = document.getElementById(targetId);
    if (!container) return;
    container.innerHTML = entries.map((entry, index) => `
        <article class="accordion-item">
            <button class="accordion-header" data-accordion-index="${index}">
                ${formatter.title(entry)}
                <i class="fa-solid fa-chevron-down"></i>
            </button>
            <div class="accordion-content" id="accordion-${targetId}-${index}">
                ${formatter.content(entry)}
            </div>
        </article>
    `).join('');

    container.querySelectorAll('.accordion-header').forEach((header, idx) => {
        header.addEventListener('click', () => toggleAccordion(container, idx));
    });
}

function toggleAccordion(container, index) {
    const content = container.querySelector(`#accordion-${container.id}-${index}`);
    const currentlyOpen = container.querySelector('.accordion-content.open');
    if (currentlyOpen && currentlyOpen !== content) {
        currentlyOpen.style.maxHeight = 0;
        currentlyOpen.classList.remove('open');
        currentlyOpen.previousElementSibling?.classList.remove('active');
    }
    const isOpen = content.classList.contains('open');
    if (isOpen) {
        content.style.maxHeight = 0;
        content.classList.remove('open');
        content.previousElementSibling?.classList.remove('active');
    } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.classList.add('open');
        content.previousElementSibling?.classList.add('active');
    }
}

buildAccordion('faultAccordion', dataStore.faultCodes, {
    title: entry => `${entry.code} - ${entry.reason}`,
    content: entry => `<p><strong>Neden:</strong> ${entry.reason}</p><p><strong>Çözüm:</strong> ${entry.solution}</p>`
});

buildAccordion('deviceAccordion', dataStore.deviceFaq, {
    title: entry => entry.question,
    content: entry => `<p>${entry.answer}</p>`
});

const slider = document.querySelector('[data-slider]');
if (slider) {
    const slides = Array.from(slider.querySelectorAll('.slide'));
    const nextBtn = document.querySelector('[data-next]');
    const prevBtn = document.querySelector('[data-prev]');
    const dotsContainer = document.querySelector('[data-dots]');
    let currentIndex = 0;
    let intervalId;

    function goToSlide(index) {
        slides.forEach((slide, idx) => {
            slide.classList.toggle('active', idx === index);
        });
        if (dotsContainer) {
            dotsContainer.querySelectorAll('.dot').forEach((dot, idx) => dot.classList.toggle('active', idx === index));
        }
        currentIndex = index;
    }

    if (dotsContainer) {
        dotsContainer.innerHTML = slides.map((_, idx) => `<span class="dot${idx === 0 ? ' active' : ''}" data-index="${idx}"></span>`).join('');
        dotsContainer.querySelectorAll('.dot').forEach(dot => {
            dot.addEventListener('click', () => {
                goToSlide(Number(dot.dataset.index));
                restartInterval();
            });
        });
    }

    nextBtn?.addEventListener('click', () => {
        goToSlide((currentIndex + 1) % slides.length);
        restartInterval();
    });

    prevBtn?.addEventListener('click', () => {
        goToSlide((currentIndex - 1 + slides.length) % slides.length);
        restartInterval();
    });

    function startInterval() {
        intervalId = setInterval(() => {
            goToSlide((currentIndex + 1) % slides.length);
        }, 6000);
    }

    function restartInterval() {
        clearInterval(intervalId);
        startInterval();
    }

    startInterval();
}

const testimonialTrack = document.getElementById('testimonialTrack');
if (testimonialTrack) {
    const list = document.createElement('div');
    list.className = 'testimonial-list';
    list.innerHTML = dataStore.testimonials.map(item => `
        <article class="testimonial-card">
            <div class="testimonial-header">
                <i class="fa-brands fa-google"></i>
                <div>
                    <div class="name">${item.name} · ${item.district}</div>
                    <div class="stars">${'★'.repeat(item.rating)}${'☆'.repeat(5 - item.rating)}</div>
                </div>
            </div>
            <p>"${item.comment}"</p>
            <time>${item.date}</time>
        </article>
    `).join('');
    testimonialTrack.appendChild(list);

    let index = 0;
    const prev = document.querySelector('[data-testimonial-prev]');
    const next = document.querySelector('[data-testimonial-next]');
    const cardCount = dataStore.testimonials.length;

    function updateTestimonials() {
        const cardWidth = list.querySelector('.testimonial-card').offsetWidth + 24;
        list.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    function nextTestimonial() {
        index = (index + 1) % cardCount;
        updateTestimonials();
    }

    function prevTestimonial() {
        index = (index - 1 + cardCount) % cardCount;
        updateTestimonials();
    }

    let testimonialInterval = setInterval(nextTestimonial, 5000);

    next?.addEventListener('click', () => {
        nextTestimonial();
        resetInterval();
    });

    prev?.addEventListener('click', () => {
        prevTestimonial();
        resetInterval();
    });

    function resetInterval() {
        clearInterval(testimonialInterval);
        testimonialInterval = setInterval(nextTestimonial, 5000);
    }

    window.addEventListener('resize', updateTestimonials);
    updateTestimonials();
}

const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 600) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', event => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => nav.classList.remove('open'));
    });
}

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();
        if (!contactForm.reportValidity()) {
            return;
        }
        const feedback = document.getElementById('formFeedback');
        feedback.textContent = 'Teşekkürler! Formunuz başarıyla alındı. Müşteri temsilcimiz en kısa sürede sizi arayacak.';
        contactForm.reset();
        const selects = contactForm.querySelectorAll('select');
        selects.forEach(select => select.selectedIndex = 0);
    });
}

function createModal() {
    const modal = document.createElement('div');
    modal.className = 'form-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="close" aria-label="Kapat"><i class="fa-solid fa-xmark"></i></button>
            <h3>Hızlı Servis Talebi</h3>
            <p>Bilgilerinizi bırakarak aynı gün içerisinde geri dönüş alabilirsiniz.</p>
            <form class="contact-form" id="modalForm">
                <div class="form-group">
                    <label for="modalName">Ad Soyad</label>
                    <input type="text" id="modalName" required placeholder="Adınızı girin">
                </div>
                <div class="form-group">
                    <label for="modalPhone">Telefon</label>
                    <input type="tel" id="modalPhone" required placeholder="0 5xx xxx xx xx">
                </div>
                <div class="form-group">
                    <label for="modalDistrict">İlçe</label>
                    <select id="modalDistrict" required></select>
                </div>
                <div class="form-group">
                    <label for="modalDevice">Cihaz</label>
                    <select id="modalDevice" required></select>
                </div>
                <div class="form-group full">
                    <label for="modalMessage">Notunuz</label>
                    <textarea id="modalMessage" rows="3" placeholder="Kısaca arıza detayını yazın"></textarea>
                </div>
                <button type="submit" class="btn primary">Gönder</button>
                <p class="form-feedback" id="modalFeedback"></p>
            </form>
        </div>
    `;
    document.body.appendChild(modal);

    const modalForm = modal.querySelector('#modalForm');
    const districtSelect = modal.querySelector('#modalDistrict');
    const deviceSelect = modal.querySelector('#modalDevice');

    districtSelect.innerHTML = dataStore.districts.map(district => `<option value="${district}">${district}</option>`).join('');
    deviceSelect.innerHTML = dataStore.devices.map(device => `<option value="${device.name}">${device.name}</option>`).join('');

    modalForm.addEventListener('submit', event => {
        event.preventDefault();
        if (!modalForm.reportValidity()) return;
        modal.querySelector('#modalFeedback').textContent = 'Teşekkürler! Talebiniz kaydedildi. Operatörlerimiz sizi arayacak.';
        modalForm.reset();
    });

    modal.querySelector('.close').addEventListener('click', () => modal.classList.remove('show'));
    modal.addEventListener('click', event => {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });

    return modal;
}

let modalInstance;
document.querySelectorAll('[data-open-form]').forEach(button => {
    button.addEventListener('click', () => {
        if (!modalInstance) {
            modalInstance = createModal();
        }
        modalInstance.classList.add('show');
    });
});

const yearEl = document.getElementById('currentYear');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
