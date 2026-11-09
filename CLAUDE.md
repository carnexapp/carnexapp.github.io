# Carnex web sitesi — proje kuralları

**Kullanıcıya HER ZAMAN Türkçe yaz:** ara bilgilendirmeler, açıklamalar, son mesajlar dahil. (Kod, dosya adları ve commit mesajları İngilizce kalır.)

Site (planlanan): https://carnexapp.github.io/ — GitHub Pages, depo `carnexapp/carnexapp.github.io` (herkese açık; Pages bunu gerektiriyor). GitHub'da `carnexapp` organizasyonu kullanıcının kişisel hesabına bağlı (2026-11-08). Düz HTML/CSS/JS; build adımı, izleyici, analitik, dış yazı tipi isteği yok. Nerede kaldığımız: [PROGRESS.md](PROGRESS.md).

## Carnex projeleri (birbirine bağlı)
Carnex üç klasörde, üç ayrı Claude oturumunda yürüyor. Amaç: kullanıcı aynı soruya iki kez cevap vermesin.

| Klasör | Ne | Oturum adı (ListAgents'te) | Durum |
|---|---|---|---|
| `D:\carnex` | Uygulama (Expo), gizli depo `kaanbulut22/carnex` | `carnex-…` | `PROGRESS.md`, `SPEC.md` |
| `D:\carnex-site` | Web sitesi (`carnexapp/carnexapp.github.io`) | `carnex-site-…` | `PROGRESS.md` |
| `D:\carnex-sosyal` | Sosyal medya: hesaplar, kapaklar, gönderiler (gizli depo `kaanbulut22/carnex-sosyal`) | `carnex-sosyal-…` | `PROGRESS.md` |

- **Sormadan önce bak:** Kullanıcıya bir şey sormadan önce diğer iki klasörün `CLAUDE.md` ve `PROGRESS.md`'sine bak (yalnızca okuyarak). Cevap oradaysa sorma, oradaki kararı kullan.
- **Haber ver:** Başka bir klasörü ilgilendiren bir karar ya da değişiklikte (yeni özellik, ekran görüntüsü, metin, marka kararı, fiyat, ücretsiz/tam sürüm ayrımı, yayın durumu, gizlilik politikası) `ListAgents` ile açık oturumu bul ve `SendMessage` ile kısa haber gönder: ne değişti, hangi dosya, onun ne yapması gerekiyor. Gelen mesajlara aynı şekilde cevap ver. Açık oturum yoksa kendi `PROGRESS.md`'nde "Diğer klasörler için" başlığı altına yaz; o oturum açılınca okur.
- **Herkes kendi klasörünü düzenler:** Diğer klasörün dosyasını değiştirme, oradaki oturumdan iste (kullanıcı açıkça istemedikçe).
- **Ürün gerçeklerinin kaynağı uygulamadır:** özellikler, ücretsiz/tam sürüm ayrımı ve fiyat `D:\carnex\SPEC.md` ve `PROGRESS.md`'dedir; site ve sosyal medya yalnızca orada "yapıldı" olanı vaat eder.
- **Ortak kurallar her klasörde aynı:** kullanıcıya her zaman Türkçe; sağlık sınırı ve iddia sınırı (aşağıda); yeni tasarımda önce 2–3 seçenek ve önizleme; kod ve içerik dışı dosyaları git'e eklemeden önce sor. `D:\dozly`, `D:\losia`, `D:\losia-site`, `D:\losia-sosyal`, `D:\losia-build` yalnızca okunur (örnek olarak bakılabilir, değiştirilmez, komut çalıştırılmaz).

## Sağlık ve iddia sınırı (zorunlu, üç klasörde aynı)
Carnex bir **araç bakım defteridir**; sağlık özelliği yoktur (Play beyanı: "Uygulamamın sağlık özelliği yok"). Kişisel geliştirici hesabıyla yayınlanır. Metin, görsel, `alt` açıklaması ve ekran görüntülerinin tamamı için:
- Sağlık, tanı, tedavi, ilaç, belirti, vücut ölçümü, uyku, aktivite, beslenme, ruh sağlığı konuları yok (uygulamanın yasaklı kelime listesi: `D:\carnex\src\domain\content-boundary.ts`).
- **Güvenlik vaadi yok:** "kazayı önler", "arızayı önler", "güvenli sürüş sağlar" gibi sonuç garantisi yazılmaz. Uygulama yalnızca hatırlatır ve kayıt tutar ("bakımını unutma", "geçmişin elinde").
- **Yasal/teknik tavsiye yok:** muayene periyodu, sigorta zorunluluğu, MTV tutarı, bakım aralıkları "kural" gibi anlatılmaz; tarihleri ve aralıkları kullanıcı girer, uygulama öneriyi yalnızca düzenlenebilir şablon olarak sunar.
- **Devlet/kurum çağrışımı yok:** "resmi", "e-Devlet", "devlet", "official", "government" gibi sözcükler ve Carnex'in bir kurumla bağlantılı olduğunu düşündüren ifade kullanılmaz (Play yanıltıcı beyan kuralı; kullanıcı kararı 2026-11-08, üç klasörde aynı).
- Gerçek kurum/marka adı ve logosu (TÜVTÜRK, sigorta şirketleri, araç markaları, akaryakıt şirketleri) görsel ve metinde kullanılmaz; örnek verideki araçlar uydurma ya da genel ("Beyaz hatchback") olur. Rakip uygulama adı geçmez.

## Ödeme dili (zorunlu, üç klasörde aynı)
- Model: ücretsiz indirme + tek seferlik "Tam sürüm"; abonelik yok, reklam yok.
- Söylenir: "Abonelik yok, bir kez öde", "1 araç ücretsiz", "Abonelik yok · üyelik yok · verilerin telefonunda". Ücretsiz ve tam sürüm içerikleri açıkça listelenir.
- Söylenmez: "tamamen/her zaman ücretsiz", "hesap yok" ("hesap vermemek" diye okunur), "kayıt yok" (uygulamada "kayıt" bakım kaydı demek); yerine "üyelik yok" (kullanıcı kararı 2026-11-08). İndirim sayacı, "son fırsat" yok.

## Terimler (uygulamayla aynı)
- Muayene, trafik sigortası, kasko, MTV bölümünün adı **"Yenileme takvimi"** (EN "Renewal calendar"; menüde "Yenileme", tanıtımda "Muayene ve sigorta takvimin"). "Resmi işler" ve "son tarihler" denmez (kullanıcı kararı 2026-11-08). Kaynak: `D:\carnex\src\i18n\locales\tr.ts` / `en.ts`.

## Site kuralları
- TR ve EN sayfalar senkron (`index.html` ↔ `en/index.html`, `gizlilik/` ↔ `en/privacy/`).
- Gizlilik politikası `D:\carnex\docs\privacy-policy.md` ile aynı metindir; burada kendiliğinden farklı bir şey yazılmaz. `/gizlilik/` ve `/en/privacy/` yolları kalıcıdır (uygulama ve Play Console bağlar).
- Ekran görüntüleri yalnızca örnek veriyle (uygulama oturumunun örnek yedeği).
- Yerel önizleme: klasör kökünde `python -m http.server 8765`.
- Örnek ve ilham için `D:\losia-site` okunabilir; kod kopyalanabilir, marka (renk, yazı tipi, ses tonu) kopyalanmaz.
- Commit sonrası `git push` (Pages yayını push ile güncellenir).

## Marka
Karar uygulama oturumunda verilir ve buraya işlenir (kaynak: `D:\carnex\PROGRESS.md` › Marka rengi).
- **Renk (2026-11-08):** gece mavisi, açık zeminde `#1E5A8C`, koyu zeminde `#7DB8EA`.
- Uygulamanın yazı tipi Inter (sitede gövde yazısı; `assets/fonts/` altında yerel, dış istek yok).
- **Yazı logosu (2026-11-08):** "CAR" + "NEX", Saira Semi Condensed 700, letter-spacing .02em; koyu zeminde CAR `#E8F0F8`, NEX `#7DB8EA`, zemin `#0B2135`; açık zeminde CAR metin rengi, NEX `#1E5A8C`. Sitede başlıklar da Saira Semi Condensed.
- **Uygulama simgesi (2026-11-08):** "CX", gece mavisi gradyan zemin. Ana dosya `D:\carnex\assets\brand\carnex-icon.svg` (sitede `assets/icon.svg`), 1024 px `D:\carnex\assets\images\icon.png`; sitedeki `favicon.png` ve `apple-touch-icon.png` bundan üretildi. Ses tonu henüz yok.
- **Ek renkler (10a, 2026-11-09):** tam sürümde 6 renk: petrol yeşili, kiremit turuncu, grafit, mürdüm, bronz, gül kurusu (EN petrol green, terracotta, graphite, plum, bronze, dusty rose). Gece mavisi herkese. Gece siyahı listeden çıktı. Ad "Tam sürüm" kalır (Premium/Plus yok).

## İletişim ve hesaplar
- Destek e-postası: `carnex.destek@gmail.com` (gizlilik politikası, iletişim).
- Sosyal: https://www.instagram.com/carnexapp/ · https://www.facebook.com/carnexapp · https://x.com/carnexapp · https://www.tiktok.com/@carnexapp (sitenin altına simge + bağlantı olarak eklenebilir).
