const dataStore = {
    districts: [
        'Muratpaşa', 'Kepez', 'Konyaaltı', 'Aksu', 'Döşemealtı', 'Kemer', 'Kumluca', 'Finike', 'Kaş', 'Demre', 'Serik', 'Manavgat', 'Alanya', 'Gazipaşa', 'İbradı', 'Elmalı', 'Korkuteli', 'Gündoğmuş', 'Akseki'
    ],
    devices: [
        {
            name: 'Buzdolabı',
            icon: 'fa-solid fa-snowflake',
            image: 'assets/img/fridge.svg',
            accent: '#00b7c2',
            tags: ['Gaz Dolumu', 'No-Frost', 'Enerji Tasarrufu'],
            price: '1.450 TL',
            response: 'Aynı Gün',
            warranty: '12 Ay',
            description: 'Sıcak Antalya günlerinde gıdalarınızı koruyan buzdolapları için hızlı soğutma testleri ve gaz kaçak kontrolleri.'
        },
        {
            name: 'Çamaşır Makinesi',
            icon: 'fa-solid fa-shirt',
            image: 'assets/img/washer.svg',
            accent: '#1428a0',
            tags: ['Dengeleme', 'Motor Bakımı', 'Pompa'],
            price: '1.250 TL',
            response: '4 Saat',
            warranty: '12 Ay',
            description: 'Titreşim, su tahliye ve elektronik kart sorunları için kalibre edilmiş test ekipmanlarımızla çözüm sunuyoruz.'
        },
        {
            name: 'Bulaşık Makinesi',
            icon: 'fa-solid fa-bowl-food',
            image: 'assets/img/dishwasher.svg',
            accent: '#f58220',
            tags: ['Rezistans', 'Su Alma', 'Parlatma'],
            price: '1.150 TL',
            response: '6 Saat',
            warranty: '12 Ay',
            description: 'Su alma, kurutma ve deterjan dozaj problemleri için kapsamlı kontrol listemizle hijyeninizi garanti ediyoruz.'
        },
        {
            name: 'Klima',
            icon: 'fa-solid fa-fan',
            image: 'assets/img/air-conditioner.svg',
            accent: '#1d428a',
            tags: ['Gaz Dolumu', 'İç/Dış Ünite', 'Temizlik'],
            price: '950 TL',
            response: '2 Saat',
            warranty: '6 Ay',
            description: 'Split ve multisplit klimalarda ozon temizliği, gaz dolumu ve elektronik kart onarımlarıyla yaz-kış konfor sağlıyoruz.'
        },
        {
            name: 'Kombi',
            icon: 'fa-solid fa-fire',
            image: 'assets/img/boiler.svg',
            accent: '#f04652',
            tags: ['Eşanjör', 'Tesisat', 'Baca'],
            price: '1.380 TL',
            response: 'Aynı Gün',
            warranty: '24 Ay',
            description: 'Gaz kaçak testleri, eşanjör temizlikleri ve sistem basınç ayarlarıyla kış konforunuzu güvenceye alıyoruz.'
        },
        {
            name: 'Televizyon',
            icon: 'fa-solid fa-tv',
            image: 'assets/img/tv.svg',
            accent: '#0f2a45',
            tags: ['Panel', 'Ses', 'Yazılım'],
            price: '1.100 TL',
            response: 'Ertesi Gün',
            warranty: '12 Ay',
            description: 'LED, OLED ve QLED panellerde piksel, ses ve yazılım sorunlarına yönelik profesyonel laboratuvar çözümleri.'
        },
        {
            name: 'Kurutma Makinesi',
            icon: 'fa-solid fa-wind',
            image: 'assets/img/dryer.svg',
            accent: '#e31837',
            tags: ['Filtre', 'Isı Pompası', 'Sensör'],
            price: '1.200 TL',
            response: '6 Saat',
            warranty: '12 Ay',
            description: 'Filtre temizliği, ısı pompası ve sensör kalibrasyonları ile çamaşırlarınızı ilk günkü gibi kurutuyoruz.'
        },
        {
            name: 'Ankastre Set',
            icon: 'fa-solid fa-kitchen-set',
            image: 'assets/img/ankastre.svg',
            accent: '#7a1f3d',
            tags: ['Fırın', 'Ocak', 'Davlumbaz'],
            price: '1.550 TL',
            response: 'Aynı Gün',
            warranty: '12 Ay',
            description: 'Ankastre fırın, ocak ve davlumbazlarda senkronize bakım ve performans testleri uyguluyoruz.'
        }
    ],
    brandCatalog: [
        'Arçelik', 'Beko', 'Vestel', 'Profilo', 'Altus', 'Regal', 'Bosch', 'Siemens', 'Grundig', 'Samsung',
        'LG', 'Sony', 'Philips', 'Panasonic', 'Miele', 'AEG', 'Electrolux', 'Hotpoint', 'Indesit', 'Whirlpool',
        'Buderus', 'Viessmann', 'Baymak', 'Demirdöküm', 'Vaillant', 'Alarko', 'E.C.A.', 'Daikin', 'Mitsubishi Electric',
        'Gree', 'Ferroli', 'Immergas', 'Ariston', 'Protherm', 'Hoover', 'Candy', 'Uğur', 'Sharp', 'Teka', 'Smeg', 'Liebherr',
        'Simfer', 'Silverline', 'Arnica', 'Arzum', 'Rowenta', 'Vestfrost', 'Zanussi', 'Gaggenau', 'Hisense', 'Bosch Termoteknik'
    ],
    brandProfiles: {
        'Arçelik': {
            tagline: 'Türkiye’nin lider markasında yetkin servis prosedürleri',
            features: ['Akıllı panel yazılım güncellemeleri', 'Orijinal Arçelik yedek parça stoğu', 'Enerji verim raporları'],
            accent: '#e31837',
            deviceInsights: {
                'Buzdolabı': {
                    issues: ['No-Frost fan gürültüsü', 'Gaz basıncı düşüklüğü', 'Kapı fitil deformasyonu'],
                    solutions: ['Termostat ve sensör kalibrasyonu', 'Vakum + R600a gaz dolumu', 'Mıknatıslı fitil ve menteşe ayarı'],
                    whyUs: ['Arçelik prosedürlerine hakim uzman kadro', 'Sahadan veri toplanan arıza kütüphanesi', '48 saatlik performans takibi'],
                    review: '"Arçelik No-Frost buzdolabım bir saat içinde ilk günkü gibi soğutmaya başladı." – Mehmet K.',
                    testimonials: [
                        { name: 'Mehmet K.', district: 'Lara / Muratpaşa', comment: 'Gaz basınç testi ve fitil değişimi sonrası cihaz sessizleşti.' },
                        { name: 'Seçil A.', district: 'Fener Mahallesi', comment: 'Servis sonrası rapor ve fotoğraflar detaylıydı, enerji tüketimi düştü.' }
                    ]
                },
                'Çamaşır Makinesi': {
                    issues: ['Tambur dengesizliği', 'Motor inverter arızası', 'Su tahliye sorunları'],
                    solutions: ['Akıllı balans ayarı', 'Inverter kart bileşen onarımı', 'Pompa ve filtre temizliği'],
                    whyUs: ['Yetkili eğitimli teknisyen', 'Titreşim ölçüm cihazları', 'Yedek makine desteği'],
                    review: '"Ruhsatlı servis olmaları içimi rahatlattı, çamaşır makinem sessiz çalışıyor." – Aslı T.',
                    testimonials: [
                        { name: 'Aslı T.', district: 'Çağlayan', comment: 'Titreşim sorununu data ile göstererek çözdüler, randevuya sadık kaldılar.' },
                        { name: 'Ömer F.', district: 'Güzeloba', comment: 'Yedek makine getirip süreç bitene kadar mağdur etmediler.' }
                    ]
                }
            }
        },
        'Beko': {
            tagline: 'Prosmart inverter teknolojisinde uzman ekip',
            features: ['Prosmart motor kalibrasyonu', 'Yetkili servis yazılım entegrasyonu', 'Hızlı yedek cihaz desteği'],
            accent: '#1d428a',
            deviceInsights: {
                'Kurutma Makinesi': {
                    issues: ['Isı pompası verimsizliği', 'Sensör hataları', 'Yoğuşma tıkanıklığı'],
                    solutions: ['Isı pompası basınç temizliği', 'Nem sensörü kalibrasyonu', 'Yoğuşma haznesi sterilizasyonu'],
                    whyUs: ['Beko eğitimli teknik ekip', 'Orijinal filtre ve sensör stoğu', 'Enerji tüketimi optimizasyon raporu'],
                    review: '"Beko kurutucumuz ertesi gün teslim edildi, enerji tüketimi düştü." – Tamer D.',
                    testimonials: [
                        { name: 'Tamer D.', district: 'Konyaaltı Liman', comment: 'Isı pompası temizliği sonrası kurutma süresi yarıya indi.' },
                        { name: 'Meltem Y.', district: 'Altınkum', comment: 'Sensör kalibrasyonunu canlı grafiklerle anlattılar, güven verdi.' }
                    ]
                }
            }
        },
        'Bosch': {
            tagline: 'Alman mühendisliği hassasiyetinde çözümler',
            features: ['Home Connect entegrasyonu', 'A+++ enerji optimizasyonu', 'Orijinal Bosch parça temini'],
            accent: '#005691',
            deviceInsights: {
                'Buzdolabı': {
                    issues: ['MultiAirFlow sensör hatası', 'Kompresör gürültüsü', 'Su kanalı buzlanması'],
                    solutions: ['Sensör kalibrasyonu ve yazılım güncellemesi', 'Kompresör amortisör değişimi', 'Defrost rezistans testi'],
                    whyUs: ['Bosch E-Akademi sertifikalı teknisyen', 'Orijinal test cihazı kullanımı', 'Çift aşamalı kalite kontrol'],
                    review: '"Bosch buzdolabımız için yapılan raporlamayı başka yerde görmedim." – Gökhan L.',
                    testimonials: [
                        { name: 'Gökhan L.', district: 'Muratpaşa Şirinyalı', comment: 'Vibrasyon analiz raporunu PDF olarak paylaştılar, çok profesyoneller.' },
                        { name: 'İpek Ç.', district: 'Konyaaltı Hurma', comment: 'No-Frost buzlanması tamamen bitti, dolap sessiz çalışıyor.' }
                    ]
                },
                'Ankastre Set': {
                    issues: ['Fırın rezistans arızası', 'Ocak gaz ayarı', 'Davlumbaz emiş düşüklüğü'],
                    solutions: ['Rezistans ve fan kalibrasyonu', 'Gaz basınç ayarı', 'Karbon filtre yenileme'],
                    whyUs: ['Ankastre alanında uzman ekip', 'Hijyen standartlarına uygun çalışma', 'Aynı gün montaj garantisi'],
                    review: '"Bosch ankastre setim showroom parlaklığına döndü." – Ece Y.',
                    testimonials: [
                        { name: 'Ece Y.', district: 'Belek', comment: 'Davlumbazın performansı raporlandı, karbon filtre stokları hazırdı.' },
                        { name: 'Samet B.', district: 'Kepez Altınova', comment: 'Gaz ayarı sonrası ocak alevleri dengelendi, güvenli kullanım sağlandı.' }
                    ]
                }
            }
        },
        'Siemens': {
            tagline: 'IQdrive motor teknolojisinde yetkinlik',
            features: ['Akıllı ev entegrasyonu', 'Sızdırmazlık testleri', 'Yüksek teknoloji arıza analizi'],
            accent: '#009999',
            deviceInsights: {
                'Çamaşır Makinesi': {
                    issues: ['IQdrive hata kodları', 'Su seviye sensörü arızası', 'Titreşim artışı'],
                    solutions: ['Dijital arıza kodu analizi', 'Sensör değişimi ve kalibrasyon', 'Titreşim sönümleyici yenileme'],
                    whyUs: ['Siemens veri tabanlı teşhis', 'Ses seviyesi ölçümü', 'Bakım sonrası performans raporu'],
                    review: '"Sessiz çalışması için yaptıkları kalibrasyon mucize gibi." – Nihan S.',
                    testimonials: [
                        { name: 'Nihan S.', district: 'Konyaaltı Siteler', comment: 'Titreşim kayıtlarını ölçüp raporladılar, cihaz taş gibi oldu.' },
                        { name: 'Serkan İ.', district: 'Muratpaşa Meydan', comment: 'IQdrive hatasını uzaktan teşhis edip hazırlıklı geldiler.' }
                    ]
                }
            }
        },
        'Vestel': {
            tagline: 'Servisnet entegrasyonlu hızlı çözümler',
            features: ['Smart TV yazılım güncellemeleri', 'Geniş yedek parça stoğu', 'Mobil uygulama bildirimleri'],
            accent: '#c8102e',
            deviceInsights: {
                'Televizyon': {
                    issues: ['Panel aydınlatma arızası', 'Yazılım güncelleme hataları', 'Ses kartı problemleri'],
                    solutions: ['Panel backlight değişimi', 'Smart TV yazılım onarımı', 'Ses sürücüsü kalibrasyonu'],
                    whyUs: ['ESD korumalı laboratuvar', 'Orijinal panel ve LED şeritler', 'Görüntü kalitesi raporu'],
                    review: '"Vestel TV için yaptıkları kalibrasyon sonrası renkler yeniden canlandı." – Funda Ö.',
                    testimonials: [
                        { name: 'Funda Ö.', district: 'Kepez Sütçüler', comment: 'Panel ışık testi sonrası fotoğraf gönderdiler, renkler şahane.' },
                        { name: 'Metin L.', district: 'Alanya Oba', comment: 'Smart TV güncellemesini uzaktan takip edip kullanım eğitimi verdiler.' }
                    ]
                }
            }
        },
        'Samsung': {
            tagline: 'Digital Inverter destekli premium servis',
            features: ['SmartThings entegrasyonu', 'Panel laboratuvarı', 'R-32 gaz yetkinliği'],
            accent: '#1428a0',
            deviceInsights: {
                'Klima': {
                    issues: ['Digital inverter hata kodu', 'İç ünite fan gürültüsü', 'Drenaj tıkanması'],
                    solutions: ['Inverter kart onarımı', 'Fan balans ayarı', 'Drenaj hattı kimyasal temizliği'],
                    whyUs: ['Samsung HVAC eğitimli teknisyen', 'Termal kamera analizi', 'Enerji tasarruf raporu'],
                    review: '"Samsung klimamız ilk defa bu kadar sessiz çalışıyor." – Deniz A.',
                    testimonials: [
                        { name: 'Deniz A.', district: 'Konyaaltı Beach Park', comment: 'Fan balansını lazerle ölçüp rapor verdiler, gürültü yok oldu.' },
                        { name: 'Kerem P.', district: 'Serik Kadriye', comment: 'Drenaj hattını kamera ile açtılar, aynı gün teslim edildi.' }
                    ]
                }
            }
        },
        'LG': {
            tagline: 'ThinQ ekosistemine entegre servis deneyimi',
            features: ['Dual inverter klima uzmanlığı', 'OLED panel laboratuvarı', 'ThinQ uzaktan teşhis'],
            accent: '#a50034',
            deviceInsights: {
                'Televizyon': {
                    issues: ['OLED piksel yanması', 'WebOS yazılım kilitlenmesi', 'Ses senkronizasyon hatası'],
                    solutions: ['OLED panel piksel rejenerasyonu', 'Yazılım temiz kurulum', 'Ses işlemci kalibrasyonu'],
                    whyUs: ['ESD korumalı ortam', 'LG Premium servis standartları', 'Panel koruma eğitimleri'],
                    review: '"LG OLED TV görüntüsü tekrar showroom kalitesine geldi." – Murat B.',
                    testimonials: [
                        { name: 'Murat B.', district: 'Alanya Mahmutlar', comment: 'OLED panel için koruyucu film ve garanti raporu paylaştılar.' },
                        { name: 'Elif Z.', district: 'Muratpaşa Bahçelievler', comment: 'Ses senkron sorununu uzaktan analiz edip aynı gün çözdüler.' }
                    ]
                }
            }
        },
        'Electrolux': {
            tagline: 'İskandinav tasarımına özel premium bakım',
            features: ['TasteGuard koku filtre bakımı', 'ChefLux program optimizasyonu', 'Ankastre yüzey koruma'],
            accent: '#0f2a45',
            deviceInsights: {
                'Bulaşık Makinesi': {
                    issues: ['AirDry sistem arızası', 'Su alma gecikmesi', 'Parlatıcı dozaj hatası'],
                    solutions: ['AirDry motor revizyonu', 'Giriş filtresi ve valf bakımı', 'Akıllı dozaj kalibrasyonu'],
                    whyUs: ['Electrolux premium parça stoğu', 'İskandinav yüzey koruma protokolü', 'Hijyen raporlaması'],
                    review: '"Electrolux bulaşık makinem showroom parlaklığına kavuştu." – Eylül Ç.',
                    testimonials: [
                        { name: 'Eylül Ç.', district: 'Konyaaltı Altınkum', comment: 'Hijyen raporunu PDF olarak aldım, AirDry tekrar aktif.' },
                        { name: 'Yasemin V.', district: 'Serik Belek', comment: 'Parlatıcı dozajını kalibre edip bulaşıklar ışıl ışıl oldu.' }
                    ]
                }
            }
        },
        'Hotpoint': {
            tagline: 'ActiveCare teknolojisinde uzman servis',
            features: ['ActiveCare program analizi', 'İtalyan standart montaj', 'Hızlı parça tedariği'],
            accent: '#c0392b',
            deviceInsights: {
                'Çamaşır Makinesi': {
                    issues: ['ActiveCare deterjan sensörü', 'Tambur balansı', 'Isıtıcı rezistans hatası'],
                    solutions: ['Sensör temizliği ve kalibrasyonu', 'Tambur amortisör değişimi', 'Rezistans testi ve değişimi'],
                    whyUs: ['İtalyan standart prosedür', 'Acil parça depomuz', 'Performans takibi'],
                    review: '"Hotpoint makinem sessizleşti ve ActiveCare yeniden çalışıyor." – Selin V.',
                    testimonials: [
                        { name: 'Selin V.', district: 'Muratpaşa Güzeloba', comment: 'ActiveCare sensörü için stokları vardı, aynı gün çözüm.' },
                        { name: 'Hüseyin R.', district: 'Manavgat Evrenseki', comment: 'Tambur balansını yerinde düzelttiler, tekrar randevu gerekmedi.' }
                    ]
                }
            }
        },
        'Buderus': {
            tagline: 'Yoğuşmalı kazan ve kombide uzman ekip',
            features: ['Baca gaz analiz raporu', 'Yoğuşma eşanjör bakımı', 'Uzaktan izleme kurulumu'],
            accent: '#00365f',
            deviceInsights: {
                'Kombi': {
                    issues: ['Yoğuşma drenaj tıkanması', 'Genleşme tankı basıncı', 'Plaka eşanjör kireçlenmesi'],
                    solutions: ['Drenaj hattı temizliği', 'Azot ile genleşme tankı dolumu', 'Kimyasal eşanjör yıkaması'],
                    whyUs: ['Buderus Logamatic yazılım güncellemesi', '24 ay işçilik garantisi', 'Termal kamera ile sızıntı kontrolü'],
                    review: '"Buderus kombimdeki sıcak su sorunu kalıcı çözüldü." – Alihan R.',
                    testimonials: [
                        { name: 'Alihan R.', district: 'Döşemealtı Yeşilbayır', comment: 'Logamatic güncellemesi sonrası tüketim azaldı, rapor detaylıydı.' },
                        { name: 'Selda H.', district: 'Kepez Varsak', comment: 'Genleşme tankını azotla doldurup kaçak testini paylaştılar.' }
                    ]
                }
            }
        },
        'Viessmann': {
            tagline: 'Vitodens ve Vitocal sistemlerinde derin uzmanlık',
            features: ['Isı kaybı analiz raporu', 'Akıllı termostat entegrasyonu', 'Yedek cihaz temini'],
            accent: '#f58220',
            deviceInsights: {
                'Kombi': {
                    issues: ['Vitodens hata kodları', 'Modülasyon problemi', 'Sirkülasyon pompası sesi'],
                    solutions: ['Dijital teşhis ve yazılım güncelleme', 'Gaz valf kalibrasyonu', 'Sessiz pompa montajı'],
                    whyUs: ['Viessmann Akademi sertifikalı ekip', 'Yedek cihaz garantisi', '24 saat içinde geri dönüş'],
                    review: '"Viessmann kombim sessiz ve tasarruflu hale geldi." – Asuman P.',
                    testimonials: [
                        { name: 'Asuman P.', district: 'Konyaaltı Uncalı', comment: 'Modülasyon ayarlarını grafikle açıkladılar, faturamız düştü.' },
                        { name: 'Burak N.', district: 'Manavgat Side', comment: 'Yedek kombi temini sayesinde otel müşterileri etkilenmedi.' }
                    ]
                }
            }
        },
        'Baymak': {
            tagline: 'İklimlendirme ve kombide güvenilir destek',
            features: ['Hydro Plus tesisat yıkama', 'VRF klima desteği', 'Enerji verim raporu'],
            accent: '#009ca6',
            deviceInsights: {
                'Kombi': {
                    issues: ['Sıcak su dalgalanması', 'Pompa sıkışması', 'E09 hata kodu'],
                    solutions: ['Plaka eşanjör temizliği', 'Sirkülasyon pompası revizyonu', 'Sensör kalibrasyonu'],
                    whyUs: ['Baymak merkez onaylı parçalar', 'Mobil su arıtma ekipmanı', 'Aynı gün çözüm garantisi'],
                    review: '"Baymak kombimizdeki dalgalanma problemi kalmadı." – Kaan Ç.',
                    testimonials: [
                        { name: 'Kaan Ç.', district: 'Serik Kadriye', comment: 'Dalgalanmayı veri kaydıyla gösterip eşanjörü temizlediler.' },
                        { name: 'İlknur E.', district: 'Gazipaşa Merkez', comment: 'Pompa revizyonu sonrası kombi sessiz, rapor çok açıklayıcıydı.' }
                    ]
                }
            }
        },
        'Mitsubishi Electric': {
            tagline: 'VRF ve City Multi sistemlerinde ileri teknoloji',
            features: ['VRF sistem kurulumu', 'Inverter kart onarımı', 'Enerji verimliliği optimizasyonu'],
            accent: '#d81921',
            deviceInsights: {
                'Klima': {
                    issues: ['City Multi hata kodları', 'Gaz dengesizliği', 'Dış ünite fan arızası'],
                    solutions: ['Advanced Service Tool ile teşhis', 'R410A basınç dengelemesi', 'Fan motoru revizyonu'],
                    whyUs: ['Mitsubishi Electric yetkili eğitimleri', 'VRF saha deneyimi', 'Kurumsal bakım sözleşmesi'],
                    review: '"VRF sistemimizdeki arıza hızlıca giderildi, raporlama eksiksizdi." – Melis U.',
                    testimonials: [
                        { name: 'Melis U.', district: 'Kemer Göynük', comment: 'City Multi arızasını aynı gün çözdüler, VRF raporu detaylıydı.' },
                        { name: 'Onur C.', district: 'Alanya Avsallar', comment: 'Gaz dengesini ölçümlerle anlattılar, VRF performansı arttı.' }
                    ]
                }
            }
        },
        'Daikin': {
            tagline: 'Split ve VRV klimalarda dünya standartları',
            features: ['R32 gaz yönetimi', 'Akıllı kumanda entegrasyonu', 'Enerji ölçümü'],
            accent: '#0067b7',
            deviceInsights: {
                'Klima': {
                    issues: ['VRV sistem basınç hatası', 'Inverter kart arızası', 'İç ünite koku şikayeti'],
                    solutions: ['Daikin Servis Checker ile teşhis', 'Kart bileşen onarımı', 'Anti-bakteriyel kimyasal uygulama'],
                    whyUs: ['Yetkili gaz dolum sertifikası', 'Sızdırmazlık test setleri', 'Kurumsal bakım planları'],
                    review: '"Daikin klima bakımında ilk defa bu kadar detaylı rapor aldım." – Haluk İ.',
                    testimonials: [
                        { name: 'Haluk İ.', district: 'Muratpaşa Lara', comment: 'Servis Checker raporu mail olarak geldi, VRV sistemi nefes aldı.' },
                        { name: 'Asena R.', district: 'Aksu Kundu', comment: 'Koku problemi için kimyasal uygulama sonrası misafir şikayeti kalmadı.' }
                    ]
                }
            }
        }
    },
    genericBrandProfile: {
        tagline: 'Tüm beyaz eşya ve iklimlendirme gruplarında uzman servis',
        features: ['Orijinal parça garantisi', 'Marka bazlı arıza veri bankası', '7/24 müşteri iletişimi'],
        accent: '#00b7c2'
    },
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
        { district: 'Muratpaşa', arrival: '60 dk', resolution: 'Aynı gün', crew: '3 mobil ekip', note: 'Lara ve Fener hattında nöbetçi ekip ve yedek cihaz stoğu' },
        { district: 'Kepez', arrival: '90 dk', resolution: 'Aynı gün', crew: '3 mobil ekip', note: 'Organize sanayi tipi cihazlara özel test ekipmanı' },
        { district: 'Konyaaltı', arrival: '70 dk', resolution: 'Aynı gün', crew: '2 mobil ekip', note: 'Sahil bandı klima bakımı ve marin tesis desteği' },
        { district: 'Aksu', arrival: '80 dk', resolution: 'Aynı gün', crew: '1 mobil ekip', note: 'Havalimanı ve Kundu otellerine gece vardiyası' },
        { district: 'Döşemealtı', arrival: '110 dk', resolution: 'Ertesi gün', crew: '1 mobil ekip', note: 'Villa bölgeleri için kombi ve havuz ısıtma bakımı' },
        { district: 'Kemer', arrival: '120 dk', resolution: 'Aynı gün', crew: '2 mobil ekip', note: 'Turizm sezonu VRF klima saha ofisi' },
        { district: 'Kumluca', arrival: '130 dk', resolution: 'Aynı gün', crew: '1 mobil ekip', note: 'Seracılık bölgelerine özel iklimlendirme çözümleri' },
        { district: 'Finike', arrival: '140 dk', resolution: 'Ertesi gün', crew: '1 mobil ekip', note: 'Narenciye depolarına sıcaklık izleme ve gece nöbeti' },
        { district: 'Kaş', arrival: '240 dk', resolution: 'Ertesi gün', crew: '1 mobil ekip', note: 'Uzun mesafe için yedek parça ön yüklemesi' },
        { district: 'Demre', arrival: '210 dk', resolution: 'Ertesi gün', crew: '1 mobil ekip', note: 'Yat ve sera müşterilerine haftalık tur programı' },
        { district: 'Serik', arrival: '100 dk', resolution: 'Aynı gün', crew: '2 mobil ekip', note: 'Belek golf otellerine sabit servis planı' },
        { district: 'Manavgat', arrival: '140 dk', resolution: 'Ertesi gün', crew: '2 mobil ekip', note: 'Side bölgesine haftalık rotasyon' },
        { district: 'Alanya', arrival: '180 dk', resolution: 'Ertesi gün', crew: '2 mobil ekip', note: 'Turizm sezonunda 24 saat nöbetçi ekip' },
        { district: 'Gazipaşa', arrival: '200 dk', resolution: 'Ertesi gün', crew: '1 mobil ekip', note: 'Havalimanı ve sahil hattına uzun menzilli servis' },
        { district: 'İbradı', arrival: '220 dk', resolution: 'Ertesi gün', crew: '1 mobil ekip', note: 'Dağ köylerine planlı ziyaretler ve UPS danışmanlığı' },
        { district: 'Elmalı', arrival: '180 dk', resolution: 'Ertesi gün', crew: '1 mobil ekip', note: 'Yayla iklimine özel kombi bakımı ve ısıtma kontrolü' },
        { district: 'Korkuteli', arrival: '170 dk', resolution: 'Ertesi gün', crew: '1 mobil ekip', note: 'Soğuk iklimde antifriz ve baca kontrolü' },
        { district: 'Gündoğmuş', arrival: '230 dk', resolution: 'Ertesi gün', crew: '1 mobil ekip', note: '4x4 araçlı mobil ekip ile haftalık planlı rota' },
        { district: 'Akseki', arrival: '210 dk', resolution: 'Ertesi gün', crew: '1 mobil ekip', note: 'Akseki merkezde yedek parça stoğu ve kış nöbeti' }
    ],
    regionDetails: {
        'Muratpaşa': {
            summary: 'Şehir merkezinde ekspres servis ve ankastre montaj uzmanlığı.',
            highlights: ['Lara ve Şirinyalı bölgelerinde 60 dk müdahale', 'Plaza ve rezidanslarda sözleşmeli bakım', 'Akşam vardiyası ile acil kombi onarımı'],
            services: ['Ankastre set montajı', 'Kombi bakım paketleri', 'Kurumsal cihaz yönetimi'],
            arrival: '60 dk',
            resolution: 'Aynı gün',
            crew: '3 mobil ekip',
            note: 'Lara ve Fener hattında nöbetçi ekip ve yedek cihaz stoğu'
        },
        'Konyaaltı': {
            summary: 'Sahil bandı ve liman bölgesinde klima ve beyaz eşya çözümleri.',
            highlights: ['Marine klimalarda pas önleyici bakım', 'Migros AVM ve çevresine günlük tur planı', 'Aqualand ve sitelere haftalık kombi servisi'],
            services: ['Split klima kimyasal temizliği', 'Çamaşırhane ekipman bakımı', 'Ankastre fırın kalibrasyonu'],
            arrival: '70 dk',
            resolution: 'Aynı gün',
            crew: '2 mobil ekip',
            note: 'Sahil bandı klima bakımı ve marin tesis desteği'
        },
        'Kepez': {
            summary: 'Sanayi tipi cihazlar ve yoğun nüfuslu mahallelerde hızlı destek.',
            highlights: ['Organize sanayi bölgesine sanayi tipi bulaşık servisleri', 'Varsak hattında gezici kombi ekibi', 'Enerji analiz raporları'],
            services: ['Endüstriyel bulaşık makinesi tamiri', 'Derin dondurucu gaz dolumu', 'Kombi baca gaz ölçümü'],
            arrival: '90 dk',
            resolution: 'Aynı gün',
            crew: '3 mobil ekip',
            note: 'Organize sanayi tipi cihazlara özel test ekipmanı'
        },
        'Aksu': {
            summary: 'Havalimanı, EXPO ve oteller için 7/24 hazır ekip.',
            highlights: ['Kundu otellerine gece vardiyası', 'EXPO alanında sabit mobil atölye', 'Havalimanı personel lojmanlarına periyodik bakım'],
            services: ['VRF klima bakımı', 'Mini bar ve buz makinesi onarımları', 'Hızlı buz çözme protokolleri'],
            arrival: '80 dk',
            resolution: 'Aynı gün',
            crew: '1 mobil ekip',
            note: 'Havalimanı ve Kundu otellerine gece vardiyası'
        },
        'Döşemealtı': {
            summary: 'Villalar ve üniversite kampüsleri için kombi ve iklimlendirme bakım planı.',
            highlights: ['Villalarda akıllı ev entegrasyonu', 'Antalya OSB çalışanlarına indirimli paketler', 'Akdeniz Üniversitesi kampüsüne rutin servis'],
            services: ['Yoğuşmalı kombi bakımı', 'Isı pompası kurulumu', 'Merkezi sistem kontrolü'],
            arrival: '110 dk',
            resolution: 'Ertesi gün',
            crew: '1 mobil ekip',
            note: 'Villa bölgeleri için kombi ve havuz ısıtma bakımı'
        },
        'Kemer': {
            summary: 'Turizm sezonu boyunca VRF ve split klima uzmanlığı.',
            highlights: ['Ayışığı ve Göynük otellerine sabit saha ofisi', 'Dağ otellerine jeneratör destekli servis', 'Marina işletmelerine acil müdahale'],
            services: ['VRF klima gaz dengelemesi', 'Split klima montajı', 'Hızlı buz makinesi servisi'],
            arrival: '120 dk',
            resolution: 'Aynı gün',
            crew: '2 mobil ekip',
            note: 'Turizm sezonu VRF klima saha ofisi'
        },
        'Serik': {
            summary: 'Belek ve Kadriye resort otelleri için turnus servis.',
            highlights: ['Golf otellerinde merkezi klima bakımı', 'Theme park alanlarına akşam vardiyası', 'Kadriye mahallesinde mobil depo'],
            services: ['Endüstriyel çamaşırhane cihazları', 'Ankastre mutfak setleri', 'Konuk villalarına ekspres servis'],
            arrival: '100 dk',
            resolution: 'Aynı gün',
            crew: '2 mobil ekip',
            note: 'Belek golf otellerine sabit servis planı'
        },
        'Manavgat': {
            summary: 'Side ve Manavgat genelinde yoğun yazlık servis operasyonu.',
            highlights: ['Side otellerinde 24 saat acil hat', 'Yazlık sitelerde periyodik bakım anlaşmaları', 'Şelale çevresinde kombi ve klima kontrolü'],
            services: ['Kombi eşanjör temizliği', 'Multi split klima kurulumu', 'Çamaşır makinesi balans düzeltmesi'],
            arrival: '140 dk',
            resolution: 'Ertesi gün',
            crew: '2 mobil ekip',
            note: 'Side bölgesine haftalık rotasyon'
        },
        'Alanya': {
            summary: 'Doğu ilçelerinde tam donanımlı iki mobil ekip ile hizmet.',
            highlights: ['Mahmutlar ve Oba semtlerine sabah-akşam tur', 'Turizm sezonunda çok dilli müşteri temsilcisi', 'Alanya kalesi çevresine dar sokak ekipleri'],
            services: ['Klima montajı ve bakım sözleşmesi', 'Buzdolabı hızlı soğutma onarımları', 'Elektronik kart tamiri'],
            arrival: '180 dk',
            resolution: 'Ertesi gün',
            crew: '2 mobil ekip',
            note: 'Turizm sezonunda 24 saat nöbetçi ekip'
        },
        'Kaş': {
            summary: 'Kaş ve Kalkan bölgesinde planlı uzun mesafe servis.',
            highlights: ['Yedek parça ön yüklemeli mobil araç', 'Villa ve butik otellere randevulu servis', 'Deniz suyuna dayanıklı klima bakımı'],
            services: ['Ankastre set montajı', 'Kombi devreye alma', 'Buz makinesi bakımı'],
            arrival: '240 dk',
            resolution: 'Ertesi gün',
            crew: '1 mobil ekip',
            note: 'Uzun mesafe için yedek parça ön yüklemesi'
        },
        'Finike': {
            summary: 'Narenciye işletmeleri ve yazlık siteler için periyodik bakım.',
            highlights: ['Soğuk hava depoları için sıcaklık izleme', 'Yazlık sitelere hafta sonu servis', 'Balıkçı barınağına gece nöbeti'],
            services: ['Soğutucu gaz dolumu', 'Kurutma makinesi bakımı', 'Klima temizliği'],
            arrival: '140 dk',
            resolution: 'Ertesi gün',
            crew: '1 mobil ekip',
            note: 'Narenciye depolarına sıcaklık izleme ve gece nöbeti'
        },
        'Kumluca': {
            summary: 'Seracılık bölgelerine özel iklimlendirme çözümleri.',
            highlights: ['Seralara düşük enerji tüketimli klima kurulumu', 'Domates paketleme tesislerine endüstriyel servis', 'Sahil bandına gezici ekip'],
            services: ['Isı pompası kurulumu', 'Endüstriyel bulaşık makinesi onarımı', 'Kombi bakım kampanyası'],
            arrival: '130 dk',
            resolution: 'Aynı gün',
            crew: '1 mobil ekip',
            note: 'Seracılık bölgelerine özel iklimlendirme çözümleri'
        },
        'Gazipaşa': {
            summary: 'Havalimanı ve tarım işletmelerine uzun menzilli servis.',
            highlights: ['Gazipaşa Havalimanı teknik destek', 'Tarımsal soğuk hava depoları için kalibrasyon', 'Kıyı şeridinde yazlık sitelere mobil ekip'],
            services: ['Kombi bakım ve onarım', 'Klima kimyasal temizliği', 'Derin dondurucu servisi'],
            arrival: '200 dk',
            resolution: 'Ertesi gün',
            crew: '1 mobil ekip',
            note: 'Havalimanı ve sahil hattına uzun menzilli servis'
        },
        'Demre': {
            summary: 'Demre ve Kekova hattında sezonluk servis planı.',
            highlights: ['Yat turizmine klima ve jeneratör desteği', 'Seracılara soğutma çözümleri', 'Merkez mahallelere haftalık tur'],
            services: ['Split klima montajı', 'Kombi bakım sözleşmesi', 'Ankastre set bakımı'],
            arrival: '210 dk',
            resolution: 'Ertesi gün',
            crew: '1 mobil ekip',
            note: 'Yat ve sera müşterilerine haftalık tur programı'
        },
        'Elmalı': {
            summary: 'Yayla ikliminde kombi ve ısıtma sistemleri odaklı servis.',
            highlights: ['Yüksek rakımda kombi verim testleri', 'Tarım işletmelerine soğuk oda bakımı', 'Köy yerleşimlerine haftalık rota'],
            services: ['Kombi petek temizliği', 'Derin dondurucu bakımı', 'Çamaşır makinesi balans ayarı'],
            arrival: '180 dk',
            resolution: 'Ertesi gün',
            crew: '1 mobil ekip',
            note: 'Yayla iklimine özel kombi bakımı ve ısıtma kontrolü'
        },
        'Korkuteli': {
            summary: 'Soğuk iklimli bölgede ısıtma ve beyaz eşya çözümleri.',
            highlights: ['Kombi antifriz ve baca kontrolü', 'Korkuteli merkezde rezerv ekip', 'Süt işletmelerine soğutma desteği'],
            services: ['Yoğuşmalı kombi bakımı', 'Buzdolabı gaz dolumu', 'Klima ısıtma modül servisi'],
            arrival: '170 dk',
            resolution: 'Ertesi gün',
            crew: '1 mobil ekip',
            note: 'Soğuk iklimde antifriz ve baca kontrolü'
        },
        'Gündoğmuş': {
            summary: 'Dağ köylerine erişim sağlayan özel rotasyon.',
            highlights: ['4x4 araçlı mobil ekip', 'Haftalık planlı ziyaretler', 'Enerji dalgalanmasına karşı UPS danışmanlığı'],
            services: ['Kombi arıza tespiti', 'Çamaşır makinesi onarımı', 'Klima iç ünite temizliği'],
            arrival: '230 dk',
            resolution: 'Ertesi gün',
            crew: '1 mobil ekip',
            note: '4x4 araçlı mobil ekip ile haftalık planlı rota'
        },
        'Akseki': {
            summary: 'Akseki ve yayla köylerinde kombi ve beyaz eşya bakımı.',
            highlights: ['Kış aylarında nöbetçi ekip', 'Akseki merkezde yedek parça stoğu', 'Anons sistemiyle randevu hatırlatma'],
            services: ['Kombi eşanjör bakımı', 'Buzdolabı kapı fitili değişimi', 'Ankastre fırın servisleri'],
            arrival: '210 dk',
            resolution: 'Ertesi gün',
            crew: '1 mobil ekip',
            note: 'Akseki merkezde yedek parça stoğu ve kış nöbeti'
        },
        'İbradı': {
            summary: 'Küçük yerleşimlerde yerinde bakım ve lojistik planlama.',
            highlights: ['İbradı-Sarıhacılar hattına 3 günde bir servis', 'Doğa pansiyonlarına klima çözümleri', 'Telefonla arıza ön teşhisi'],
            services: ['Split klima bakım kampanyası', 'Çamaşır makinesi balans ayarı', 'Kombi kışa hazırlık paketi'],
            arrival: '220 dk',
            resolution: 'Ertesi gün',
            crew: '1 mobil ekip',
            note: 'Dağ köylerine planlı ziyaretler ve UPS danışmanlığı'
        }
    },
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

const fallbackTestimonialTemplates = [
    { name: 'Gizem L.', district: 'Muratpaşa', comment: '{brand} {device} servisinde süreç şeffaf ilerledi, raporlar e-posta ile ulaştı.' },
    { name: 'Tolga B.', district: 'Konyaaltı', comment: '{brand} {device} için gelen ekip ölçümleri paylaşarak kalıcı çözüm sundu.' },
    { name: 'Derya Ç.', district: 'Kepez', comment: 'Teknisyenler {brand} {device} arızasını aynı gün giderdi, garanti belgesi SMS ile geldi.' },
    { name: 'Selim U.', district: 'Alanya', comment: 'Saha ekibi {brand} {device} için yedek parça stoğunu yanında getirdi, mağdur olmadık.' },
    { name: 'Belgin A.', district: 'Serik', comment: '{brand} {device} bakımında enerji raporunu paylaşmaları güven verdi.' }
];

const selectConfigs = [
    { id: 'districtSelect', source: dataStore.districts },
    { id: 'brandSelect', source: dataStore.brandCatalog },
    { id: 'deviceSelect', source: dataStore.devices.map(device => device.name) },
    { id: 'district', source: dataStore.districts },
    { id: 'brand', source: dataStore.brandCatalog },
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
        <article class="device-card" data-device="${device.name}" style="--accent:${device.accent || 'var(--turquoise)'}">
            <figure>
                <img src="${device.image}" alt="${device.name} servisi görseli" loading="lazy">
            </figure>
            <div class="device-info">
                <div class="device-heading">
                    <i class="${device.icon}" aria-hidden="true"></i>
                    <h3>${device.name}</h3>
                </div>
                <p>${device.description}</p>
                <div class="tags">${device.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
                <ul class="device-meta">
                    <li><i class="fa-solid fa-money-check-dollar"></i> <strong>Servis Ücreti:</strong> ${device.price}</li>
                    <li><i class="fa-solid fa-bolt"></i> <strong>Müdahale Süresi:</strong> ${device.response}</li>
                    <li><i class="fa-solid fa-shield-heart"></i> <strong>Garanti:</strong> ${device.warranty}</li>
                </ul>
            </div>
        </article>
    `).join('');
}

renderDeviceCards('deviceCards');
renderDeviceCards('deviceCardsPage');

function getBrandProfile(name) {
    const profile = dataStore.brandProfiles[name] || {};
    return {
        name,
        tagline: profile.tagline || dataStore.genericBrandProfile.tagline,
        features: profile.features || dataStore.genericBrandProfile.features,
        accent: profile.accent || dataStore.genericBrandProfile.accent,
        deviceInsights: profile.deviceInsights || {}
    };
}

function brandCardTemplate(entry) {
    return `
        <article class="brand-card" data-brand-card data-brand="${entry.name}" role="button" tabindex="0" style="--accent:${entry.accent}">
            <div class="brand-card__header">
                <h3>${entry.name}</h3>
                <span class="brand-chip">${entry.tagline}</span>
            </div>
            <ul>${entry.features.map(feature => `<li><i class="fa-solid fa-circle-check"></i> ${feature}</li>`).join('')}</ul>
            <div class="brand-card__cta"><i class="fa-solid fa-circle-info"></i> Detayları incele</div>
        </article>
    `;
}

const brandGrid = document.getElementById('brandGrid');
if (brandGrid) {
    const highlightOrder = ['Arçelik', 'Bosch', 'Beko', 'Samsung', 'Vestel', 'Electrolux', 'Buderus', 'Daikin'];
    const entries = highlightOrder
        .filter(name => dataStore.brandCatalog.includes(name))
        .map(getBrandProfile);
    brandGrid.innerHTML = entries.slice(0, 8).map(brandCardTemplate).join('');
}

const brandGridPage = document.getElementById('brandGridPage');
if (brandGridPage) {
    const allEntries = dataStore.brandCatalog
        .map(getBrandProfile)
        .sort((a, b) => a.name.localeCompare(b.name, 'tr'));
    brandGridPage.innerHTML = allEntries.map(brandCardTemplate).join('');
}

function buildGenericTestimonials(brandName, deviceName) {
    const seed = [...(brandName || ''), ...(deviceName || '')].reduce((sum, char) => sum + char.charCodeAt(0), 0);
    const extended = [...fallbackTestimonialTemplates, ...fallbackTestimonialTemplates];
    const start = seed % fallbackTestimonialTemplates.length;
    return extended.slice(start, start + 3).map(template => ({
        name: template.name,
        district: template.district,
        comment: template.comment.replace('{brand}', brandName).replace('{device}', deviceName)
    }));
}

function buildBrandDeviceContent(brandName, deviceName) {
    const profile = getBrandProfile(brandName);
    const deviceProfile = profile.deviceInsights[deviceName];
    if (deviceProfile) {
        return {
            ...deviceProfile,
            testimonials: deviceProfile.testimonials || buildGenericTestimonials(brandName, deviceName)
        };
    }
    const deviceData = dataStore.devices.find(device => device.name === deviceName);
    const baseTags = deviceData ? deviceData.tags : ['Performans', 'Enerji', 'Güvenlik'];
    return {
        issues: [
            `${brandName} ${deviceName} cihazlarında görülen genel performans dalgalanmaları`,
            `${deviceName} için sensör ve elektronik kart kalibrasyon ihtiyaçları`,
            `Periyodik bakım yapılmadığında oluşabilecek enerji tüketimi artışı`
        ],
        solutions: [
            `Markaya özel teşhis yazılımları ile kapsamlı arıza taraması`,
            `${baseTags[0]} odaklı orijinal yedek parça değişimleri`,
            `Servis sonrası 30 gün içerisinde yerinde kontrol ve raporlama`
        ],
        whyUs: [
            `Antalya genelinde ${brandName} için sertifikalı ekipler`,
            `7/24 çağrı merkezi ve anlık randevu planlaması`,
            `KVKK uyumlu dijital servis kayıtları ve garanti takibi`
        ],
        review: `"${brandName} ${deviceName} servisinde hızınızı ve şeffaf fiyatınızı çok beğendik." – Beyaz Eşya Servisi Müşterisi`,
        testimonials: buildGenericTestimonials(brandName, deviceName)
    };
}

const brandModal = document.getElementById('brandModal');
if (brandModal) {
    const titleEl = document.getElementById('brandModalTitle');
    const subtitleEl = document.getElementById('brandModalSubtitle');
    const contentEl = document.getElementById('brandModalContent');
    const deviceSelect = document.getElementById('brandDeviceSelect');
    const closeTriggers = brandModal.querySelectorAll('[data-modal-close]');
    let activeBrand = null;

    function updateModal(deviceName) {
        const content = buildBrandDeviceContent(activeBrand, deviceName);
        const reviewBlock = content.review ? `<blockquote class="brand-modal__quote">${content.review}</blockquote>` : '';
        const testimonialsBlock = content.testimonials?.length ? `
            <div class="brand-modal__group brand-modal__reviews">
                <h4>Müşteri Deneyimleri</h4>
                <ul>
                    ${content.testimonials.map(item => `
                        <li>
                            <i class="fa-solid fa-circle-user" aria-hidden="true"></i>
                            <div>
                                <strong>${item.name}</strong>
                                <span>${item.district}</span>
                                <p>${item.comment}</p>
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        ` : '';
        contentEl.innerHTML = `
            <div class="brand-modal__group">
                <h4>Sık Karşılaşılan Problemler</h4>
                <ul>${content.issues.map(item => `<li><i class="fa-solid fa-triangle-exclamation"></i> ${item}</li>`).join('')}</ul>
            </div>
            <div class="brand-modal__group">
                <h4>Teknik Çözüm Adımlarımız</h4>
                <ul>${content.solutions.map(item => `<li><i class="fa-solid fa-screwdriver-wrench"></i> ${item}</li>`).join('')}</ul>
            </div>
            <div class="brand-modal__group">
                <h4>Neden Bizi Tercih Etmelisiniz?</h4>
                <ul>${content.whyUs.map(item => `<li><i class="fa-solid fa-star"></i> ${item}</li>`).join('')}</ul>
            </div>
            ${reviewBlock}
            ${testimonialsBlock}
        `;
    }

    function openBrandModal(brandName) {
        activeBrand = brandName;
        const profile = getBrandProfile(brandName);
        titleEl.textContent = `${brandName} Servis Uzmanlığı`;
        subtitleEl.textContent = profile.tagline;
        brandModal.style.setProperty('--accent', profile.accent || '#00b7c2');
        deviceSelect.innerHTML = dataStore.devices
            .map(device => `<option value="${device.name}">${device.name}</option>`)
            .join('');
        updateModal(deviceSelect.value);
        brandModal.classList.add('is-visible');
        brandModal.setAttribute('aria-hidden', 'false');
        deviceSelect.focus();
    }

    function closeBrandModal() {
        brandModal.classList.remove('is-visible');
        brandModal.setAttribute('aria-hidden', 'true');
        activeBrand = null;
    }

    deviceSelect?.addEventListener('change', () => {
        if (!activeBrand) return;
        updateModal(deviceSelect.value);
    });

    closeTriggers.forEach(trigger => trigger.addEventListener('click', closeBrandModal));
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && brandModal.classList.contains('is-visible')) {
            closeBrandModal();
        }
    });

    document.querySelectorAll('[data-brand-card]').forEach(card => {
        card.addEventListener('click', () => openBrandModal(card.dataset.brand));
        card.addEventListener('keydown', event => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                openBrandModal(card.dataset.brand);
            }
        });
    });
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

function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9çğıöşü\s]/gi, '').trim().replace(/\s+/g, '-');
}

const regionNav = document.getElementById('regionNav');
const regionPanels = document.getElementById('regionPanels');
if (regionNav && regionPanels) {
    const regionData = dataStore.districts.map(name => {
        const details = dataStore.regionDetails[name] || {};
        const tableInfo = dataStore.regionTable.find(entry => entry.district === name) || {};
        return {
            name,
            slug: slugify(name),
            summary: details.summary || `${name} ilçesinde tüm cihaz gruplarında yerinde servis sağlıyoruz.`,
            highlights: details.highlights || ['Mobil servis araçlarımız ile aynı gün müdahale', 'Orijinal yedek parçalarla onarım', 'Servis sonrası performans takibi'],
            services: details.services || ['Kombi bakım kampanyası', 'Klima temizliği', 'Beyaz eşya arıza onarımı'],
            arrival: tableInfo.arrival || '90 dk',
            resolution: tableInfo.resolution || 'Aynı gün',
            crew: tableInfo.crew || '1 mobil ekip',
            note: tableInfo.note || 'Randevu planına göre ekspres servis'
        };
    });

    regionNav.innerHTML = regionData.map(region => `
        <li><a href="#region-${region.slug}" data-region-link>${region.name} <i class="fa-solid fa-arrow-right"></i></a></li>
    `).join('');

    regionPanels.innerHTML = regionData.map(region => `
        <section class="region-panel" id="region-${region.slug}">
            <h3>${region.name}</h3>
            <p>${region.summary}</p>
            <div class="region-meta">
                <span><i class="fa-solid fa-clock"></i> Ulaşım: ${region.arrival}</span>
                <span><i class="fa-solid fa-bolt"></i> Çözüm: ${region.resolution}</span>
                <span><i class="fa-solid fa-people-group"></i> Ekip: ${region.crew}</span>
            </div>
            <ul>${region.highlights.map(item => `<li><i class="fa-solid fa-check-double"></i> ${item}</li>`).join('')}</ul>
            <div class="region-services">
                ${region.services.map(service => `<span class="tag">${service}</span>`).join('')}
            </div>
            <p class="region-note"><i class="fa-solid fa-circle-info"></i> ${region.note}</p>
        </section>
    `).join('');

    regionNav.querySelectorAll('[data-region-link]').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
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
    if (slides.length) {
        const sliderRoot = slider.closest('.hero-slider');
        const nextBtn = sliderRoot?.querySelector('[data-next]');
        const prevBtn = sliderRoot?.querySelector('[data-prev]');
        const dotsContainer = sliderRoot?.querySelector('[data-dots]');
        const progressBar = sliderRoot?.querySelector('[data-progress]');
        let currentIndex = 0;
        let intervalId = null;
        let isManuallyPaused = false;
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const sliderDuration = prefersReducedMotion ? 9000 : 6000;
        progressBar?.style.setProperty('--duration', `${sliderDuration}ms`);

        function restartProgress() {
            if (!progressBar) return;
            progressBar.classList.remove('is-animating');
            // force reflow
            void progressBar.offsetWidth;
            progressBar.classList.add('is-animating');
        }

        function goToSlide(index, { animate = true } = {}) {
            slides.forEach((slide, idx) => {
                slide.classList.toggle('active', idx === index);
            });
            if (dotsContainer) {
                dotsContainer.querySelectorAll('.dot').forEach((dot, idx) => dot.classList.toggle('active', idx === index));
            }
            currentIndex = index;
            if (animate && !isManuallyPaused && !prefersReducedMotion) {
                restartProgress();
            }
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

        function stopInterval() {
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
            progressBar?.classList.remove('is-animating');
        }

        function startInterval() {
            stopInterval();
            if (prefersReducedMotion) return;
            restartProgress();
            intervalId = window.setInterval(() => {
                goToSlide((currentIndex + 1) % slides.length);
            }, sliderDuration);
        }

        function restartInterval() {
            if (isManuallyPaused) return;
            startInterval();
        }

        nextBtn?.addEventListener('click', () => {
            goToSlide((currentIndex + 1) % slides.length);
            isManuallyPaused = false;
            startInterval();
        });

        prevBtn?.addEventListener('click', () => {
            goToSlide((currentIndex - 1 + slides.length) % slides.length);
            isManuallyPaused = false;
            startInterval();
        });

        slider.addEventListener('mouseenter', () => {
            isManuallyPaused = true;
            stopInterval();
        });

        slider.addEventListener('mouseleave', () => {
            isManuallyPaused = false;
            startInterval();
        });

        slider.addEventListener('focusin', () => {
            isManuallyPaused = true;
            stopInterval();
        });

        slider.addEventListener('focusout', () => {
            isManuallyPaused = false;
            startInterval();
        });

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                stopInterval();
            } else {
                restartInterval();
            }
        });

        goToSlide(0, { animate: false });
        sliderRoot?.classList.add('is-ready');
        startInterval();
    }
}

const googleReviewWidget = document.getElementById('googleReviewWidget');
if (googleReviewWidget) {
    const reviews = dataStore.testimonials;
    const dateEl = googleReviewWidget.querySelector('.review-date');
    const textEl = googleReviewWidget.querySelector('.review-text');
    const nameEl = googleReviewWidget.querySelector('.name');
    const districtEl = googleReviewWidget.querySelector('.district');
    const avatarEl = googleReviewWidget.querySelector('.avatar');
    const dotsEl = googleReviewWidget.querySelector('.review-dots');
    const prevBtn = googleReviewWidget.querySelector('[data-review-prev]');
    const nextBtn = googleReviewWidget.querySelector('[data-review-next]');

    dotsEl.innerHTML = reviews.map((_, idx) => `<button type="button" aria-label="${idx + 1}. yorumu göster"></button>`).join('');

    let activeIndex = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const reviewDuration = prefersReducedMotion ? 10000 : 7000;
    let reviewInterval = null;

    function applyReview(review, index) {
        textEl.textContent = `"${review.comment}"`;
        nameEl.textContent = review.name;
        districtEl.textContent = review.district;
        dateEl.textContent = review.date;
        avatarEl.textContent = review.name.split(' ').map(part => part[0]).join('').slice(0, 2).toUpperCase();
        dotsEl.querySelectorAll('button').forEach((dot, dotIndex) => {
            dot.classList.toggle('active', dotIndex === index);
        });
        activeIndex = index;
    }

    function setReview(index, { immediate = false } = {}) {
        const update = () => applyReview(reviews[index], index);
        if (immediate || prefersReducedMotion) {
            update();
            googleReviewWidget.classList.add('is-ready');
            return;
        }
        googleReviewWidget.classList.add('is-transitioning');
        window.setTimeout(() => {
            update();
            googleReviewWidget.classList.remove('is-transitioning');
        }, 180);
    }

    function showNext() {
        const nextIndex = (activeIndex + 1) % reviews.length;
        setReview(nextIndex);
    }

    function showPrev() {
        const prevIndex = (activeIndex - 1 + reviews.length) % reviews.length;
        setReview(prevIndex);
    }

    function stopReviewInterval() {
        if (reviewInterval) {
            clearInterval(reviewInterval);
            reviewInterval = null;
        }
    }

    function startReviewInterval() {
        stopReviewInterval();
        if (prefersReducedMotion) return;
        reviewInterval = window.setInterval(showNext, reviewDuration);
    }

    function restartInterval() {
        startReviewInterval();
    }

    nextBtn?.addEventListener('click', () => {
        showNext();
        restartInterval();
    });

    prevBtn?.addEventListener('click', () => {
        showPrev();
        restartInterval();
    });

    dotsEl.querySelectorAll('button').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            setReview(index);
            restartInterval();
        });
    });

    googleReviewWidget.addEventListener('mouseenter', stopReviewInterval);
    googleReviewWidget.addEventListener('mouseleave', startReviewInterval);
    googleReviewWidget.addEventListener('focusin', stopReviewInterval);
    googleReviewWidget.addEventListener('focusout', startReviewInterval);

    setReview(0, { immediate: true });
    startReviewInterval();
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

const yearEl = document.getElementById('currentYear');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}
