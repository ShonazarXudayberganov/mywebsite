/* Durbin — i18n content (uz / ru / en) */

const MODULE_ORDER = ['lms', 'crm', 'marketing', 'erp', 'hr', 'sop', 'ai', 'agents', 'mobile', 'telegram', 'students', 'parents'];

const translations = {

    /* ═══════════════════════ O'ZBEKCHA ═══════════════════════ */
    uz: {
        a11y: { skip: "Asosiy kontentga o'tish", prev: "Oldingi modul", next: "Keyingi modul", lang: "Tilni tanlash", theme: "Yorug' va tungi mavzuni almashtirish" },
        cta: { demo: "Demo olish" },
        nav: {
            home: "Bosh sahifa",
            modules: "Modullar",
            automation: "Durbin qanday ishlaydi",
            features: "Imkoniyatlar",
            faq: "FAQ",
            contact: "Bog'lanish"
        },
        hero: {
            eyebrow: "Xususiy maktab va o'quv markazlari uchun",
            title: "Maktabingiz <em>o'zini boshqaradi</em>",
            subtitle: "Durbin ma'lumot saqlab qo'ymaydi. Har bir vazifani egasiga yuboradi, muddatini kuzatadi va bajarilganini o'zi tekshiradi.",
            panel: "Boshqaruv paneli",
            live: "Jonli",
            k1: "O'quvchilar", k2: "Davomat", k3: "Qarzdorlar", k4: "Ochiq vazifa",
            chart: "Haftalik davomat",
            donut: "Qabul voronkasi",
            feed: "Bugungi oqim",
            f1: "9-B sinfda davomat belgilandi",
            f2: "Yangi lid: Instagram",
            f3: "To'lov qabul qilindi",
            f4: "Adaptatsiya vazifasi yopildi"
        },
        modules: {
            eyebrow: "12 ta modul",
            title: "Maktabning har bir jarayoni uchun alohida modul",
            lead: "Chapdan modulni tanlang, o'ngda uning ichida nima ishlashini ko'ring.",
            groups: {
                learning: "O'quv jarayoni",
                growth: "O'sish",
                ops: "Boshqaruv",
                ai: "Aqlli yordam",
                channels: "Kanallar"
            },
            items: {
                lms: {
                    name: "Ta'lim",
                    lead: "Dars jadvalidan imtihongacha butun o'quv jarayoni bitta joyda. Baho qo'yilgan zahoti ota-onaga yetadi.",
                    points: [
                        "Sinf, o'qituvchi, xona va vaqt bo'yicha jadval. To'qnashuvni tizim o'zi ko'rsatadi",
                        "Elektron jurnal: davomat va baho darsda, telefondan belgilanadi",
                        "Baho o'zgarishi rahbar tasdig'idan o'tadi va iz qoldiradi",
                        "Dars rejalari ta'lim direktori nazoratida yuritiladi",
                        "Yakuniy va davlat imtihonlari alohida, natija profilda saqlanadi",
                        "O'quvchilar reytingi va progress hisobotlari"
                    ]
                },
                crm: {
                    name: "Qabul",
                    lead: "Har murojaat tizimga tushadi va yo'qolmaydi. Qo'ng'iroq tizim ichidan qilinadi, suhbat yozib olinadi.",
                    points: [
                        "Lid, tashrif, shartnoma, qabul: har bosqich raqamda ko'rinadi",
                        "Telefoniya ulangan, suhbat yozuvi lidga biriktiriladi",
                        "Rahbar istalgan qo'ng'iroqni tinglab sifatini baholaydi",
                        "Kim qo'ng'iroq qilgani va keyingi qadam nima ekani yozib boriladi",
                        "Referal dastur: mavjud ota-onalar tavsiyasi kuzatiladi",
                        "Rad etish sabablari statistikasi: narx, joylashuv, kutish muddati"
                    ]
                },
                marketing: {
                    name: "Marketing",
                    lead: "Reklama byudjeti taxminga emas, konversiya raqamiga tayanadi.",
                    points: [
                        "Instagram va boshqa kanallar tizimga ulanadi",
                        "Kontent rejasi tuziladi, nashr va natija kuzatiladi",
                        "Har e'lon bo'yicha lid soni va bitta lid narxi hisoblanadi",
                        "Bir o'quvchi jalb qilish qiymati kanallar kesimida",
                        "Kampaniyalar solishtiriladi, samarasizi vaqtida to'xtatiladi",
                        "Natija hisobot moduliga avtomatik tushadi"
                    ]
                },
                erp: {
                    name: "Moliya",
                    lead: "Kirim, chiqim, qarzdorlik va foyda real vaqtda. Qarzdorlar ro'yxatini qo'lda yig'ish kerak emas.",
                    points: [
                        "Har tranzaksiya kategoriya bo'yicha yoziladi",
                        "Naqd, karta, o'tkazma va onlayn to'lov",
                        "Qarzdorlar ro'yxati o'zi shakllanadi, ota-onaga eslatma ketadi",
                        "Foyda va zarar yo'nalishlar kesimida ko'rinadi",
                        "Byudjet rejasi haqiqat bilan solishtiriladi",
                        "Yirik tranzaksiyani o'zgartirish rahbar tasdig'idan o'tadi"
                    ]
                },
                hr: {
                    name: "HR",
                    lead: "Davomat yuz tanish va maktab hududi tekshiruvi bilan tasdiqlanadi. Oylik o'zi hisoblanadi.",
                    points: [
                        "Xodim telefondan belgilanadi, tizim yuzini tanib tekshiradi",
                        "Joylashuv maktab hududida ekani tasdiqlanadi",
                        "Ish grafigi va tabel haqiqiy ish vaqti bilan solishtiriladi",
                        "Oylik: ish vaqti, ta'til, kechikish va bonus hisobga olinadi",
                        "Ta'til arizasi yuboriladi, balans o'zi yuritiladi",
                        "Vakansiya, nomzodlar va tashkiliy tuzilma sxemasi"
                    ]
                },
                sop: {
                    name: "SOP",
                    lead: "Standart qog'ozda emas, tizimda yashaydi. Hodisa sodir bo'lsa, vazifa o'zi tarqaladi.",
                    points: [
                        "Hodisa yuz beradi, tizim vazifalarni yaratib egalariga yuboradi",
                        "Har vazifaning muddati bor va kuzatiladi",
                        "Muddat o'tsa: avval ijrochi, keyin rahbar, keyin bo'lim boshlig'i",
                        "Bajarilgani dalil bilan tasdiqlanadi: foto yoki hujjat",
                        "Sifatga ball qo'yiladi, kechikish ballni kamaytiradi",
                        "Tayyor standartlar: qabul, adaptatsiya, shikoyat, sotuv, moliya"
                    ]
                },
                ai: {
                    name: "AI assistent",
                    lead: "Tizim ichidagi yordamchi. Matn yozadi, rasm yasaydi va ma'lumotingiz bo'yicha savolga javob beradi.",
                    points: [
                        "Ota-onaga xat, e'lon va xabar matnini tayyorlaydi",
                        "Marketing kontenti va post matnlarini yozadi",
                        "Rasm generatsiya qiladi",
                        "“Bu oy qancha qarzdorlik bor?” kabi savolga javob beradi",
                        "Hisobotni oddiy til bilan izohlab beradi",
                        "O'zbek, rus va ingliz tilida ishlaydi"
                    ]
                },
                agents: {
                    name: "AI agentlar",
                    lead: "Fonda ishlaydigan agentlar. Muammoni siz so'ramasdan topadi va kimga kerak bo'lsa aytadi.",
                    points: [
                        "Ma'lumotni doimiy kuzatadi va og'ishni aniqlaydi",
                        "Davomat tushsa yoki qarzdorlik oshsa darhol xabar beradi",
                        "Muammoning tub sababini ko'rsatadi",
                        "Tavsiya beradi va vazifa yaratishni taklif qiladi",
                        "Qabul va moliya bo'yicha prognoz tuzadi",
                        "Rahbarga kunlik va haftalik xulosa yuboradi"
                    ]
                },
                mobile: {
                    name: "Mobil ilova",
                    lead: "iOS va Android. O'qituvchi darsda, ota-ona yo'lda, xodim ish joyida ishlatadi.",
                    points: [
                        "O'qituvchi davomat va bahoni telefondan qo'yadi",
                        "Xodim ish joyida yuz orqali belgilanadi",
                        "Ota-ona baho, davomat va to'lovni ko'radi",
                        "O'quvchi jadval, uy vazifasi va tanga balansini ko'radi",
                        "Push bildirishnomalar",
                        "Interfeys uch tilda"
                    ]
                },
                telegram: {
                    name: "Telegram bot",
                    lead: "Ota-ona alohida ilova o'rnatmasdan, odatiy Telegramida hamma narsani oladi.",
                    points: [
                        "Baho va davomat bot orqali darhol yetadi",
                        "To'lov eslatmasi va qolgan qarz",
                        "Maktab e'lonlari va yangiliklar",
                        "Bola bo'yicha so'rovga bot javob beradi",
                        "Xodimlar uchun vazifa bildirishnomalari",
                        "Sayt va Instagram'dan kelgan murojaat ham botga tushadi"
                    ]
                },
                students: {
                    name: "O'quvchilar",
                    lead: "Lid bo'lgan kundan bitirgunicha butun yo'l bitta profilda.",
                    points: [
                        "Shaxsiy ma'lumot, sinf, baho, davomat va to'lovlar",
                        "Salomatlik, psixolog, logoped va tyutor yozuvlari",
                        "Yo'l: qiziqish, tashrif, shartnoma, qabul, adaptatsiya, o'qish, bitirish",
                        "Chiqib ketganlar va bitiruvchilar alohida yuritiladi",
                        "Yangi o'quv yiliga o'tish avtomatik, sinflar ko'chiriladi",
                        "Tanga to'playdi va Marketda mahsulotga almashtiradi"
                    ]
                },
                parents: {
                    name: "Ota-onalar",
                    lead: "Ota-ona farzandi haqida so'rab yurmasligi kerak. Ma'lumot o'zi yetib borsin.",
                    points: [
                        "Telegram bot, SMS va push bildirishnomalar",
                        "Tizim ichida maktab bilan real vaqtda yozishma",
                        "Bugungi davomat, kechagi baho, qolgan to'lov",
                        "Progress hisoboti va o'qituvchi izohlari",
                        "Ma'lumot faqat o'z farzandi bo'yicha ko'rinadi",
                        "Shikoyat tizim orqali kuzatiladi, javobi nazoratda"
                    ]
                }
            },
            viz: {
                lms_t: "Dars jadvali", lms_note: "To'qnashuv aniqlandi",
                crm_t: "Qabul voronkasi", crm_note: "Suhbat yozuvi",
                marketing_t: "Kanal samaradorligi", marketing_note: "Bitta lid narxi",
                erp_t: "Kirim dinamikasi", erp_note: "Qarzdorlar",
                hr_t: "Davomat tekshiruvi", hr_note: "Maktab hududi tasdiqlandi",
                sop_t: "Vazifa zanjiri", sop_note: "Muddat o'tdi, yuqoriga chiqdi",
                ai_t: "AI assistent", ai_note: "Yozmoqda",
                agents_t: "Agent kuzatuvi", agents_note: "Og'ish aniqlandi",
                mobile_t: "Mobil ilova", mobile_note: "O'qituvchi ko'rinishi",
                telegram_t: "Durbin bot", telegram_note: "Bugungi xabar",
                students_t: "O'quvchi yo'li", students_note: "Hozirgi bosqich",
                parents_t: "Ota-ona bildirishnomalari", parents_note: "Bugun yuborildi",

                days: ["Du", "Se", "Ch", "Pa", "Ju"],
                funnel: [["Lid", 100, 412], ["Tashrif", 64, 264], ["Shartnoma", 38, 157], ["Qabul", 29, 118]],
                rec: "Suhbat yozuvi",
                chan: [["Instagram", 76, 184], ["Telegram", 58, 141], ["Sayt", 41, 97], ["Tavsiya", 27, 64]],
                cpl_suffix: " so'm",
                debtors: [["Karimova N.", "9-A", "1 400 000"], ["Yusupov A.", "7-B", "900 000"], ["Sattorova M.", "5-V", "1 750 000"]],
                hr_pay: "Oylik", hr_time: "08:54", hr_late: "Kechikish yo'q",
                chain: [
                    ["Sinf rahbari", "Ota-ona bilan tanishuv", "ok"],
                    ["Psixolog", "Adaptatsiya kuzatuvi", "ok"],
                    ["Tyutor", "Birinchi hafta nazorati", "late"],
                    ["Direktor", "Nazoratga chiqdi", "esc"]
                ],
                ai_q: "Sentabr uchun ota-onalarga yig'ilish e'lonini yozib ber",
                ai_a_t: "Hurmatli ota-onalar,",
                ai_a_b: "12-sentabr, soat 18:00 da umumiy yig'ilish bo'lib o'tadi. Kun tartibi: adaptatsiya natijalari, dars jadvali va to'lov tartibi.",
                ai_copy: "Nusxa", ai_send: "Yuborish",
                agent_t: "7-B sinfda davomat 3 haftada 12% tushdi",
                agent_d: "Sabab: seshanba 1-soat darslariga kelmaslik",
                agent_act: "Vazifa yaratish",
                phone_head: "9-A · Matematika",
                phone_rows: [["Aliyev Bekzod", 5], ["Karimova Nilufar", 4], ["Rasulov Javohir", 5], ["Yusupova Sevinch", 4], ["To'rayev Aziz", 3]],
                phone_save: "Saqlash",
                mob_list: ["iOS", "Android", "Push", "3 til"],
                tg_msgs: [
                    ["Davomat", "Bugun farzandingiz darsda ishtirok etdi. 4 dars, kechikishsiz."],
                    ["Baho", "Matematika: 5 · Ona tili: 4"],
                    ["To'lov", "Sentabr uchun qoldiq: 450 000 so'm"]
                ],
                tg_btns: ["Jadval", "Baholar", "To'lov"],
                journey: ["Qiziqish", "Tashrif", "Shartnoma", "Qabul", "Adaptatsiya", "O'qish", "Bitirish"],
                st_name: "Karimova Nilufar", st_meta: "9-A", st_stage: "Adaptatsiya",
                toasts: [
                    ["ph-check-circle", "Davomat", "Bugun darsda ishtirok etdi"],
                    ["ph-star", "Baho", "Matematika: 5"],
                    ["ph-wallet", "To'lov", "Qoldiq 450 000 so'm"],
                    ["ph-megaphone-simple", "E'lon", "12-sentabr yig'ilish"]
                ]
            }
        },
        auto: {
            eyebrow: "Durbin qanday ishlaydi",
            title: "Bitta hodisa — <em>butun tizim javob beradi</em>",
            lead: "Durbin o'n ikkita alohida dastur emas. Ma'lumot bir marta kiritiladi, keyin kim nima qilishi va natija qayerga tushishi tizimning o'zida hal bo'ladi.",
            s1_t: "Ma'lumot bir marta kiritiladi",
            s1_d: "O'quvchi, xodim, to'lov yoki baho bir joyda yoziladi va o'n ikkala modulda o'sha yozuv ishlaydi.",
            s2_t: "Hodisa jarayonni ishga tushiradi",
            s2_d: "Qabul, kechikkan to'lov, qo'yilgan baho — tegishli modullar o'z ishini o'zi boshlaydi.",
            s3_t: "Bajarilish nazorat qilinadi",
            s3_d: "Har vazifaning egasi va muddati bor. Kechiksa, tizim uni yuqoriga chiqaradi.",
            s4_t: "Natija hisobotga aylanadi",
            s4_d: "Har amal raqamga aylanadi. Hisobotni yig'ish shart emas, u doim tayyor turadi.",
            ex_label: "Misol",
            ex_trigger: "O'quvchi sinfga qabul qilindi.",
            ex_note: "Bitta amal — beshta modul bir vaqtning o'zida ishga tushadi:",
            ex_t1: "lid yopiladi, shartnoma tuziladi",
            ex_t2: "to'lov jadvali ochiladi",
            ex_t3: "sinf va dars jadvali biriktiriladi",
            ex_t4: "adaptatsiya vazifalari egalariga ketadi",
            ex_t5: "ota-onaga xabar boradi",
            ex_out: "Hech kim hech kimga qo'ng'iroq qilmadi. Hammasi bitta hodisadan keldi.",
            foot: "Modullarni bosqichma-bosqich yoqish mumkin, lekin ular bitta bazada ishlaydi. Shuning uchun nazorat ham, hisobot ham butun maktab bo'yicha yagona bo'ladi."
        },
        roles: {
            eyebrow: "12 ta lavozim",
            title: "Har kim faqat o'zinikini ko'radi",
            lead: "Kirish huquqlari lavozim bo'yicha sozlanadi. Har xodim faqat o'z ishiga kerak modulni va faqat o'ziga tegishli ma'lumotni ko'radi.",
            sees: "{role} nimani ko'radi",
            access: "Modullarga kirish",
            levels: { f: "To'liq", o: "Faqat o'ziniki", n: "Yopiq" },
            items: {
                founder: { name: "Asoschi", points: ["Barcha filial bo'yicha yagona manzara", "Foyda, zarar va byudjet rejasi", "Standartlar bajarilishi bo'yicha ball"] },
                director: { name: "Direktor", points: ["Xodimlar davomati va intizomi", "Muddati o'tgan vazifalar ro'yxati", "Sinflar kesimida o'zlashtirish va kunlik kassa"] },
                academic: { name: "Ta'lim direktori", points: ["Dars jadvali va o'qituvchilar yuklamasi", "Fanlar kesimida o'zlashtirish dinamikasi", "Dars rejalari va imtihon natijalari"] },
                classlead: { name: "Sinf rahbari", points: ["O'z sinfi bo'yicha davomat va baholar", "Ota-onalar bilan yozishma", "O'ziga biriktirilgan vazifalar"] },
                teacher: { name: "O'qituvchi", points: ["Faqat o'z sinfi va fanlari", "Davomat va bahoni telefondan qo'yish", "Dars rejasi va uy vazifalari"] },
                psych: { name: "Psixolog", points: ["O'ziga biriktirilgan o'quvchilar", "Adaptatsiya va kuzatuv yozuvlari", "Ota-ona bilan suhbat rejasi"] },
                admissions: { name: "Qabul menejeri", points: ["Lidlar va qabul voronkasi", "Qo'ng'iroqlar va suhbat yozuvlari", "Shartnoma va birinchi to'lov"] },
                marketer: { name: "Marketolog", points: ["Kanal bo'yicha lid soni va narxi", "Kampaniya samarasi va byudjet", "Kontent rejasi va nashr kalendari"] },
                finance: { name: "Moliyachi", points: ["Kunlik kassa va tranzaksiyalar", "Qarzdorlar ro'yxati va eslatmalar", "Oylik hisoblash va byudjet"] },
                hr: { name: "HR menejeri", points: ["Xodimlar davomati va tabel", "Ta'til, kechikish va bonuslar", "Vakansiya va nomzodlar"] },
                parent: { name: "Ota-ona", points: ["Farzandining davomati va baholari", "Qolgan to'lov va to'lov tarixi", "Maktab bilan to'g'ridan-to'g'ri yozishma"] },
                student: { name: "O'quvchi", points: ["O'z baholari va reytingi", "Dars jadvali va uy vazifalari", "Tanga balansi va Market"] }
            }
        },
        extras: {
            eyebrow: "Imkoniyatlar",
            title: "Yana nimalar ichida",
            lead: "Maktab kunini to'liq qoplaydigan kichik, lekin kerakli jarayonlar.",
            f1_t: "Salomatlik va tarbiya",
            f1_d: "Shifokor, psixolog, logoped va tyutor yozuvlari o'quvchining yagona profilida to'planadi.",
            f2_t: "Tanga va Market",
            f2_d: "O'quvchi yaxshi baho va faollik uchun tanga to'playdi, uni maktab Marketida mahsulotga almashtiradi.",
            f3_t: "Ovqatlanish",
            f3_d: "Menyu tuziladi, ovqatlanadigan o'quvchilar ro'yxati yuritiladi, hisob-kitob avtomatik boradi.",
            f4_t: "Hisobotlar",
            f4_d: "Qabul, ta'lim, moliya, kadrlar va ma'naviyat bo'yicha tayyor tahlil.",
            f5_t: "Yollash va orgstruktura",
            f5_d: "Vakansiya e'lon qilinadi, nomzodlar bosqichma-bosqich kuzatiladi, kim kimga bo'ysunishi sxemada ko'rinadi.",
            f6_t: "Yangi o'quv yili",
            f6_d: "Sinflar ko'chiriladi, ma'lumot saqlanadi. Hech narsa qo'lda ko'chirilmaydi.",
            f7_t: "So'rovnomalar",
            f7_d: "Xodimlar va ota-onalar fikri yig'iladi, natija bo'limlar kesimida ko'rinadi."
        },
        why: {
            eyebrow: "Taqqoslash",
            title: "Nega Durbin",
            lead: "Boshqa tizimlar ma'lumot saqlaydi. Durbin bundan tashqari ishni taqsimlaydi, muddatini kuzatadi va bajarilishini nazorat qiladi.",
            cmp_a_t: "Odatdagi yechim",
            cmp_a_1: "Ma'lumot o'nlab dastur va Excel'da tarqoq",
            cmp_a_2: "Hisobotni odam so'rab yig'adi",
            cmp_a_3: "Bajarilishini rahbar o'zi eslab so'raydi",
            cmp_a_4: "Xato kimdadir qolib ketadi",
            cmp_b_t: "Durbin bilan",
            cmp_b_1: "Ma'lumot bitta bazada va o'zaro bog'langan",
            cmp_b_2: "Hisobot har doim tayyor turadi",
            cmp_b_3: "Muddat o'tsa tizim o'zi yuqoriga chiqaradi",
            cmp_b_4: "Har amal iz qoldiradi va ball oladi",
            w1_t: "Hammasi bitta joyda",
            w1_d: "O'nlab dastur o'rniga bitta tizim. Ma'lumot bir marta kiritiladi va hamma joyda ishlaydi.",
            w2_t: "Jarayon o'zi ishlaydi",
            w2_d: "Vazifa avtomatik taqsimlanadi, muddati kuzatiladi, bajarilmasa yuqoriga chiqadi.",
            w3_t: "Bir necha filial",
            w3_d: "Har filial alohida yuritiladi, markazdan umumiy standart tarqatiladi va umumiy manzara ko'rinadi.",
            w4_t: "Uch tilda",
            w4_d: "O'zbek, rus va ingliz. Xodim ham, ota-ona ham o'ziga qulay tilda ishlaydi.",
            w5_t: "Ma'lumot xavfsiz",
            w5_d: "Har maktab ma'lumoti qat'iy ajratilgan, parollar shifrlangan, har muhim amal iz qoldiradi.",
            w6_t: "Telefondan ham ishlaydi",
            w6_d: "O'qituvchi darsda davomatni telefondan belgilaydi, xodim ish joyida telefondan belgilanadi."
        },
        faq: {
            eyebrow: "FAQ",
            title: "Ko'p beriladigan savollar",
            lead: "Javobini topa olmadingizmi? Telegram yoki telefon orqali yozing, o'zimiz tushuntiramiz.",
            items: [
                { q: "Durbinni joriy qilish qancha vaqt oladi?", a: "Ko'p hollarda 2–4 hafta. Bunga ma'lumotni ko'chirish, tizimni maktabingiz jarayonlariga sozlash va xodimlarni o'qitish kiradi. Modullarni birdaniga emas, bosqichma-bosqich yoqish mumkin." },
                { q: "Hozirgi ma'lumotlarimizni ko'chira olamizmi?", a: "Ha. O'quvchilar, xodimlar, sinflar va to'lov tarixi Excel fayllardan yoki amaldagi tizimdan ko'chiriladi — qo'lda qayta kiritish shart emas." },
                { q: "Xodimlar tizimni o'rganib keta oladimi?", a: "Interfeys lavozim bo'yicha sozlangan: o'qituvchi faqat o'z sinfi va vazifalarini ko'radi, moliyachi to'lovlarni. Har kim faqat o'z ishini ko'rgani uchun o'rganish qisqa bo'ladi." },
                { q: "Bir nechta filial bilan ishlaydimi?", a: "Ha. Har filial o'z ma'lumoti bilan alohida yuritiladi, umumiy standart markazdan tarqatiladi, asoschi esa hamma filialni bitta ekranda ko'radi." },
                { q: "Faqat kerakli modullarni olsak bo'ladimi?", a: "Durbin yaxlit tizim sifatida beriladi — o'n ikkala modul birga keladi. Ular bitta bazada ishlagani uchun ajratib sotilmaydi: qabul moliyaga, moliya ta'limga bog'liq. Boshida faqat kerakli modullarni yoqib ishlatishingiz, qolganini keyin ochishingiz mumkin." },
                { q: "Ma'lumot xavfsizligi qanday ta'minlanadi?", a: "Kirish huquqlari lavozim bo'yicha cheklanadi, har amal iz qoldiradi va kim nima o'zgartirgani ko'rinib turadi. Zaxira nusxa muntazam olinadi." },
                { q: "Telefon va Telegram orqali ishlaydimi?", a: "Ha. Mobil ilova o'qituvchi, ota-ona va o'quvchi uchun alohida ishlaydi, Telegram bot esa baho, davomat va to'lov haqida xabar yuboradi." },
                { q: "Narxi qanday hisoblanadi?", a: "Narx o'quvchilar va filiallar soniga bog'liq. Aniq hisobni demo suhbatida maktabingiz o'lchamiga qarab beramiz." }
            ]
        },
        contact: {
            eyebrow: "Bog'lanish",
            title: "Maktabingizni Durbin bilan ko'ring",
            desc: "Demoda tizimni o'z ma'lumotlaringiz misolida ko'rsatamiz. Raqamingizni qoldiring, o'zimiz bog'lanamiz.",
            name_label: "Ismingiz",
            name_placeholder: "Masalan, Nodira Rasulova",
            school_label: "Maktab nomi",
            school_placeholder: "Masalan, Ilm Ziyo maktabi",
            phone_label: "Telefon raqam",
            submit: "Demo olish",
            sending: "Yuborilmoqda",
            err_name: "Ismingizni kiriting.",
            err_school: "Maktab nomini kiriting.",
            err_phone: "9 xonali raqam kiriting, masalan 90 123 45 67.",
            ok: "Qabul qilindi. Tez orada aloqaga chiqamiz.",
            fail: "Yuborib bo'lmadi. Iltimos, +998 95 799 88 86 raqamiga qo'ng'iroq qiling."
        },
        footer: {
            tagline: "Xususiy maktablar va ta'lim markazlari uchun yagona boshqaruv tizimi.",
            copy: "© 2026 Durbin. Barcha huquqlar himoyalangan.",
            demo_note: "Ekrandagi raqamlar namuna sifatida ko'rsatilgan."
        }
    },

    /* ═══════════════════════ РУССКИЙ ═══════════════════════ */
    ru: {
        a11y: { skip: "Перейти к содержимому", prev: "Предыдущий модуль", next: "Следующий модуль", lang: "Выбрать язык", theme: "Переключить светлую и тёмную тему" },
        cta: { demo: "Получить демо" },
        nav: {
            home: "Главная",
            modules: "Модули",
            automation: "Как работает Durbin",
            features: "Возможности",
            faq: "FAQ",
            contact: "Контакты"
        },
        hero: {
            eyebrow: "Для частных школ и учебных центров",
            title: "Ваша школа <em>работает сама</em>",
            subtitle: "Durbin не просто хранит данные. Он отправляет каждую задачу владельцу, следит за сроком и сам проверяет результат.",
            panel: "Панель управления",
            live: "Онлайн",
            k1: "Учеников", k2: "Посещаемость", k3: "Должников", k4: "Открытых задач",
            chart: "Посещаемость за неделю",
            donut: "Воронка приёма",
            feed: "Поток за сегодня",
            f1: "Отмечена посещаемость 9-Б",
            f2: "Новый лид: Instagram",
            f3: "Принят платёж",
            f4: "Закрыта задача адаптации"
        },
        modules: {
            eyebrow: "12 модулей",
            title: "Отдельный модуль под каждый процесс школы",
            lead: "Выберите модуль слева и посмотрите справа, как он работает.",
            groups: {
                learning: "Учебный процесс",
                growth: "Рост",
                ops: "Управление",
                ai: "Умная помощь",
                channels: "Каналы"
            },
            items: {
                lms: {
                    name: "Обучение",
                    lead: "Весь учебный процесс от расписания до экзамена в одном месте. Оценка сразу доходит до родителя.",
                    points: [
                        "Расписание по классу, учителю, кабинету и времени. Конфликты система показывает сама",
                        "Электронный журнал: посещаемость и оценка ставятся на уроке, с телефона",
                        "Изменение оценки проходит через руководителя и оставляет след",
                        "Планы уроков ведутся под контролем директора по обучению",
                        "Итоговые и государственные экзамены отдельно, результат хранится в профиле",
                        "Рейтинг учеников и отчёты о прогрессе"
                    ]
                },
                crm: {
                    name: "Приём",
                    lead: "Каждое обращение попадает в систему и не теряется. Звонок делается изнутри, разговор записывается.",
                    points: [
                        "Лид, визит, договор, зачисление: каждый этап виден в цифрах",
                        "Подключена телефония, запись разговора прикрепляется к лиду",
                        "Руководитель может прослушать любой звонок и оценить качество",
                        "Фиксируется, кто звонил и какой следующий шаг",
                        "Реферальная программа: отслеживаются рекомендации родителей",
                        "Статистика причин отказа: цена, расположение, срок ожидания"
                    ]
                },
                marketing: {
                    name: "Маркетинг",
                    lead: "Рекламный бюджет опирается на цифру конверсии, а не на догадки.",
                    points: [
                        "Instagram и другие каналы подключаются к системе",
                        "Составляется контент-план, публикации и результат отслеживаются",
                        "По каждому объявлению считается число лидов и цена лида",
                        "Стоимость привлечения одного ученика в разрезе каналов",
                        "Кампании сравниваются, неэффективные останавливаются вовремя",
                        "Результат автоматически попадает в модуль отчётов"
                    ]
                },
                erp: {
                    name: "Финансы",
                    lead: "Приход, расход, задолженность и прибыль в реальном времени. Список должников собирать вручную не нужно.",
                    points: [
                        "Каждая транзакция записывается по категории",
                        "Наличные, карта, перевод и онлайн-оплата",
                        "Список должников формируется сам, родителю уходит напоминание",
                        "Прибыль и убыток видны в разрезе направлений",
                        "План бюджета сверяется с фактом",
                        "Изменение крупной транзакции проходит через руководителя"
                    ]
                },
                hr: {
                    name: "HR",
                    lead: "Посещаемость подтверждается распознаванием лица и проверкой территории школы. Зарплата считается сама.",
                    points: [
                        "Сотрудник отмечается с телефона, система проверяет его по лицу",
                        "Подтверждается, что он находится на территории школы",
                        "График работы и табель сверяются с фактическим временем",
                        "Зарплата: учитываются часы, отпуск, опоздания и бонусы",
                        "Заявка на отпуск отправляется, баланс ведётся сам",
                        "Вакансии, кандидаты и схема организационной структуры"
                    ]
                },
                sop: {
                    name: "SOP",
                    lead: "Стандарт живёт в системе, а не на бумаге. Произошло событие, и задача расходится сама.",
                    points: [
                        "Происходит событие, система создаёт задачи и отправляет их владельцам",
                        "У каждой задачи есть срок, и он отслеживается",
                        "Срок прошёл: сначала исполнитель, затем руководитель, затем начальник отдела",
                        "Выполнение подтверждается доказательством: фото или документ",
                        "За качество ставится балл, опоздание снижает балл",
                        "Готовые стандарты: приём, адаптация, жалобы, продажи, финансы"
                    ]
                },
                ai: {
                    name: "AI ассистент",
                    lead: "Помощник внутри системы. Пишет текст, генерирует изображения и отвечает на вопросы по вашим данным.",
                    points: [
                        "Готовит письма, объявления и сообщения для родителей",
                        "Пишет маркетинговый контент и тексты постов",
                        "Генерирует изображения",
                        "Отвечает на вопросы вроде “Какая задолженность в этом месяце?”",
                        "Объясняет отчёт простым языком",
                        "Работает на узбекском, русском и английском"
                    ]
                },
                agents: {
                    name: "AI агенты",
                    lead: "Агенты, работающие в фоне. Находят проблему до того, как вы спросите, и сообщают тому, кому нужно.",
                    points: [
                        "Постоянно следят за данными и выявляют отклонения",
                        "Сразу сообщают, если упала посещаемость или выросла задолженность",
                        "Показывают первопричину проблемы",
                        "Дают рекомендацию и предлагают создать задачу",
                        "Строят прогноз по приёму и финансам",
                        "Отправляют руководителю дневную и недельную сводку"
                    ]
                },
                mobile: {
                    name: "Мобильное приложение",
                    lead: "iOS и Android. Учитель на уроке, родитель в дороге, сотрудник на рабочем месте.",
                    points: [
                        "Учитель ставит посещаемость и оценки с телефона",
                        "Сотрудник отмечается на рабочем месте по лицу",
                        "Родитель видит оценки, посещаемость и платежи",
                        "Ученик видит расписание, домашние задания и баланс монет",
                        "Push-уведомления",
                        "Интерфейс на трёх языках"
                    ]
                },
                telegram: {
                    name: "Telegram бот",
                    lead: "Родитель получает всё в привычном Telegram, без установки отдельного приложения.",
                    points: [
                        "Оценки и посещаемость приходят через бота сразу",
                        "Напоминание об оплате и остаток долга",
                        "Объявления и новости школы",
                        "Бот отвечает на запрос о ребёнке",
                        "Уведомления о задачах для сотрудников",
                        "Обращения с сайта и Instagram тоже попадают в бота"
                    ]
                },
                students: {
                    name: "Ученики",
                    lead: "Весь путь от заявки до выпуска в одном профиле.",
                    points: [
                        "Личные данные, класс, оценки, посещаемость и платежи",
                        "Записи врача, психолога, логопеда и тьютора",
                        "Путь: интерес, визит, договор, зачисление, адаптация, обучение, выпуск",
                        "Ушедшие и выпускники ведутся отдельно",
                        "Переход в новый учебный год автоматический, классы переводятся",
                        "Копит монеты и меняет их на товар в Маркете"
                    ]
                },
                parents: {
                    name: "Родители",
                    lead: "Родителю не нужно спрашивать о ребёнке. Информация должна доходить сама.",
                    points: [
                        "Telegram бот, SMS и push-уведомления",
                        "Переписка со школой внутри системы в реальном времени",
                        "Сегодняшняя посещаемость, вчерашняя оценка, остаток платежа",
                        "Отчёт о прогрессе и комментарии учителя",
                        "Данные видны только по своему ребёнку",
                        "Жалоба отслеживается через систему, ответ под контролем"
                    ]
                }
            },
            viz: {
                lms_t: "Расписание", lms_note: "Обнаружен конфликт",
                crm_t: "Воронка приёма", crm_note: "Запись разговора",
                marketing_t: "Эффективность каналов", marketing_note: "Цена лида",
                erp_t: "Динамика прихода", erp_note: "Должники",
                hr_t: "Проверка посещаемости", hr_note: "Территория школы подтверждена",
                sop_t: "Цепочка задач", sop_note: "Срок прошёл, ушло наверх",
                ai_t: "AI ассистент", ai_note: "Печатает",
                agents_t: "Наблюдение агента", agents_note: "Обнаружено отклонение",
                mobile_t: "Мобильное приложение", mobile_note: "Вид учителя",
                telegram_t: "Durbin бот", telegram_note: "Сообщение за сегодня",
                students_t: "Путь ученика", students_note: "Текущий этап",
                parents_t: "Уведомления родителям", parents_note: "Отправлено сегодня",

                days: ["Пн", "Вт", "Ср", "Чт", "Пт"],
                funnel: [["Лид", 100, 412], ["Визит", 64, 264], ["Договор", 38, 157], ["Зачисление", 29, 118]],
                rec: "Запись разговора",
                chan: [["Instagram", 76, 184], ["Telegram", 58, 141], ["Сайт", 41, 97], ["Рекомендации", 27, 64]],
                cpl_suffix: " сум",
                debtors: [["Каримова Н.", "9-А", "1 400 000"], ["Юсупов А.", "7-Б", "900 000"], ["Сатторова М.", "5-В", "1 750 000"]],
                hr_pay: "Зарплата", hr_time: "08:54", hr_late: "Без опозданий",
                chain: [
                    ["Классный руководитель", "Знакомство с родителями", "ok"],
                    ["Психолог", "Наблюдение за адаптацией", "ok"],
                    ["Тьютор", "Контроль первой недели", "late"],
                    ["Директор", "Взято на контроль", "esc"]
                ],
                ai_q: "Напиши объявление о родительском собрании на сентябрь",
                ai_a_t: "Уважаемые родители,",
                ai_a_b: "12 сентября в 18:00 состоится общее собрание. Повестка: результаты адаптации, расписание уроков и порядок оплаты.",
                ai_copy: "Копировать", ai_send: "Отправить",
                agent_t: "В 7-Б посещаемость упала на 12% за 3 недели",
                agent_d: "Причина: пропуски первого урока во вторник",
                agent_act: "Создать задачу",
                phone_head: "9-А · Математика",
                phone_rows: [["Алиев Бекзод", 5], ["Каримова Нилуфар", 4], ["Расулов Джавохир", 5], ["Юсупова Севинч", 4], ["Тураев Азиз", 3]],
                phone_save: "Сохранить",
                mob_list: ["iOS", "Android", "Push", "3 языка"],
                tg_msgs: [
                    ["Посещаемость", "Сегодня ваш ребёнок был на уроках. 4 урока, без опозданий."],
                    ["Оценки", "Математика: 5 · Родной язык: 4"],
                    ["Оплата", "Остаток за сентябрь: 450 000 сум"]
                ],
                tg_btns: ["Расписание", "Оценки", "Оплата"],
                journey: ["Интерес", "Визит", "Договор", "Зачисление", "Адаптация", "Обучение", "Выпуск"],
                st_name: "Каримова Нилуфар", st_meta: "9-А", st_stage: "Адаптация",
                toasts: [
                    ["ph-check-circle", "Посещаемость", "Сегодня был на уроках"],
                    ["ph-star", "Оценка", "Математика: 5"],
                    ["ph-wallet", "Оплата", "Остаток 450 000 сум"],
                    ["ph-megaphone-simple", "Объявление", "Собрание 12 сентября"]
                ]
            }
        },
        auto: {
            eyebrow: "Как работает Durbin",
            title: "Одно событие — <em>отвечает вся система</em>",
            lead: "Durbin — это не двенадцать отдельных программ. Данные вводятся один раз, а дальше система сама решает, кто что делает и куда попадает результат.",
            s1_t: "Данные вводятся один раз",
            s1_d: "Ученик, сотрудник, платёж или оценка записываются в одном месте, и эта же запись работает во всех двенадцати модулях.",
            s2_t: "Событие запускает процесс",
            s2_d: "Приём, просроченный платёж, выставленная оценка — нужные модули сами начинают свою работу.",
            s3_t: "Исполнение под контролем",
            s3_d: "У каждой задачи есть владелец и срок. При опоздании система поднимает её наверх.",
            s4_t: "Результат становится отчётом",
            s4_d: "Каждое действие превращается в цифру. Отчёт не нужно собирать — он всегда готов.",
            ex_label: "Пример",
            ex_trigger: "Ученик принят в класс.",
            ex_note: "Одно действие — и пять модулей включаются одновременно:",
            ex_t1: "лид закрывается, оформляется договор",
            ex_t2: "открывается график платежей",
            ex_t3: "закрепляются класс и расписание",
            ex_t4: "задачи адаптации уходят владельцам",
            ex_t5: "родителю уходит уведомление",
            ex_out: "Никто никому не звонил. Всё пришло из одного события.",
            foot: "Модули можно подключать постепенно, но работают они на одной базе. Поэтому и контроль, и отчётность остаются едиными по всей школе."
        },
        roles: {
            eyebrow: "12 должностей",
            title: "Каждый видит только своё",
            lead: "Права доступа настраиваются по должности. Каждый сотрудник видит только нужный ему модуль и только свои данные.",
            sees: "Что видит {role}",
            access: "Доступ к модулям",
            levels: { f: "Полный", o: "Только своё", n: "Закрыт" },
            items: {
                founder: { name: "Основатель", points: ["Единая картина по всем филиалам", "Прибыль, убытки и план бюджета", "Балл за исполнение стандартов"] },
                director: { name: "Директор", points: ["Посещаемость и дисциплина сотрудников", "Список просроченных задач", "Успеваемость по классам и касса за день"] },
                academic: { name: "Директор по учебной части", points: ["Расписание и нагрузка учителей", "Динамика успеваемости по предметам", "Планы уроков и результаты экзаменов"] },
                classlead: { name: "Классный руководитель", points: ["Посещаемость и оценки своего класса", "Переписка с родителями", "Закреплённые за ним задачи"] },
                teacher: { name: "Учитель", points: ["Только свой класс и свои предметы", "Посещаемость и оценки с телефона", "План урока и домашние задания"] },
                psych: { name: "Психолог", points: ["Закреплённые за ним ученики", "Записи об адаптации и наблюдении", "План бесед с родителями"] },
                admissions: { name: "Менеджер приёма", points: ["Лиды и воронка приёма", "Звонки и записи разговоров", "Договор и первый платёж"] },
                marketer: { name: "Маркетолог", points: ["Количество и цена лида по каналам", "Эффективность кампаний и бюджет", "Контент-план и календарь публикаций"] },
                finance: { name: "Финансист", points: ["Касса за день и транзакции", "Список должников и напоминания", "Расчёт зарплаты и бюджет"] },
                hr: { name: "HR-менеджер", points: ["Посещаемость сотрудников и табель", "Отпуска, опоздания и бонусы", "Вакансии и кандидаты"] },
                parent: { name: "Родитель", points: ["Посещаемость и оценки ребёнка", "Остаток и история платежей", "Прямая переписка со школой"] },
                student: { name: "Ученик", points: ["Свои оценки и рейтинг", "Расписание и домашние задания", "Баланс монет и Маркет"] }
            }
        },
        extras: {
            eyebrow: "Возможности",
            title: "Что ещё внутри",
            lead: "Небольшие, но нужные процессы, которые закрывают школьный день целиком.",
            f1_t: "Здоровье и воспитание",
            f1_d: "Записи врача, психолога, логопеда и тьютора собираются в едином профиле ученика.",
            f2_t: "Монеты и Маркет",
            f2_d: "Ученик копит монеты за оценки и активность и меняет их на товар в школьном Маркете.",
            f3_t: "Питание",
            f3_d: "Составляется меню, ведётся список питающихся, расчёт идёт автоматически.",
            f4_t: "Отчёты",
            f4_d: "Готовая аналитика по приёму, обучению, финансам, кадрам и воспитательной работе.",
            f5_t: "Найм и оргструктура",
            f5_d: "Публикуется вакансия, кандидаты отслеживаются по этапам, схема подчинения видна наглядно.",
            f6_t: "Новый учебный год",
            f6_d: "Классы переводятся, данные сохраняются. Ничего не переносится вручную.",
            f7_t: "Опросы",
            f7_d: "Собирается мнение сотрудников и родителей, результат виден в разрезе отделов."
        },
        why: {
            eyebrow: "Сравнение",
            title: "Почему Durbin",
            lead: "Другие системы хранят данные. Durbin вдобавок распределяет работу, следит за сроком и контролирует выполнение.",
            cmp_a_t: "Обычное решение",
            cmp_a_1: "Данные разбросаны по десятку программ и Excel",
            cmp_a_2: "Отчёт собирает человек по запросу",
            cmp_a_3: "Руководитель сам помнит и спрашивает о выполнении",
            cmp_a_4: "Ошибка остаётся у кого-то незамеченной",
            cmp_b_t: "С Durbin",
            cmp_b_1: "Данные в одной базе и связаны между собой",
            cmp_b_2: "Отчёт всегда готов",
            cmp_b_3: "Срок прошёл, и система сама поднимает наверх",
            cmp_b_4: "Каждое действие оставляет след и получает балл",
            w1_t: "Всё в одном месте",
            w1_d: "Одна система вместо десятка программ. Данные вводятся один раз и работают везде.",
            w2_t: "Процесс работает сам",
            w2_d: "Задача распределяется автоматически, срок отслеживается, невыполненное поднимается наверх.",
            w3_t: "Несколько филиалов",
            w3_d: "Каждый филиал ведётся отдельно, из центра раздаётся общий стандарт и видна общая картина.",
            w4_t: "На трёх языках",
            w4_d: "Узбекский, русский и английский. И сотрудник, и родитель работают на удобном языке.",
            w5_t: "Данные защищены",
            w5_d: "Данные каждой школы строго разделены, пароли зашифрованы, каждое важное действие оставляет след.",
            w6_t: "Работает и с телефона",
            w6_d: "Учитель отмечает посещаемость на уроке с телефона, сотрудник отмечается на рабочем месте."
        },
        faq: {
            eyebrow: "FAQ",
            title: "Частые вопросы",
            lead: "Не нашли ответ? Напишите в Telegram или позвоните — объясним лично.",
            items: [
                { q: "Сколько времени занимает внедрение Durbin?", a: "Обычно 2–4 недели. Сюда входит перенос данных, настройка системы под процессы вашей школы и обучение сотрудников. Модули можно включать постепенно, а не все сразу." },
                { q: "Можно ли перенести наши текущие данные?", a: "Да. Ученики, сотрудники, классы и история платежей переносятся из Excel или из действующей системы — вводить заново вручную не нужно." },
                { q: "Смогут ли сотрудники разобраться?", a: "Интерфейс настроен по должности: учитель видит только свой класс и свои задачи, финансист — платежи. Каждый видит только свою работу, поэтому обучение короткое." },
                { q: "Работает ли система с несколькими филиалами?", a: "Да. Каждый филиал ведётся отдельно со своими данными, общий стандарт раздаётся из центра, а основатель видит все филиалы на одном экране." },
                { q: "Можно ли взять только нужные модули?", a: "Durbin поставляется как единая система — все двенадцать модулей идут вместе. Они работают на одной базе, поэтому по отдельности не продаются: приём связан с финансами, финансы с обучением. В начале можно включить только нужные модули, а остальные открыть позже." },
                { q: "Как обеспечивается безопасность данных?", a: "Права доступа ограничены по должности, каждое действие оставляет след, видно кто и что изменил. Резервные копии создаются регулярно." },
                { q: "Работает ли это через телефон и Telegram?", a: "Да. Мобильное приложение работает отдельно для учителя, родителя и ученика, а Telegram-бот присылает оценки, посещаемость и напоминания об оплате." },
                { q: "Как рассчитывается стоимость?", a: "Стоимость зависит от количества учеников и филиалов. Точный расчёт дадим на демо, исходя из размера вашей школы." }
            ]
        },
        contact: {
            eyebrow: "Контакты",
            title: "Посмотрите свою школу в Durbin",
            desc: "На демо покажем систему на примере ваших данных. Оставьте номер, мы свяжемся сами.",
            name_label: "Ваше имя",
            name_placeholder: "Например, Нодира Расулова",
            school_label: "Название школы",
            school_placeholder: "Например, школа Ilm Ziyo",
            phone_label: "Номер телефона",
            submit: "Получить демо",
            sending: "Отправляем",
            err_name: "Введите имя.",
            err_school: "Введите название школы.",
            err_phone: "Введите 9 цифр, например 90 123 45 67.",
            ok: "Принято. Скоро свяжемся с вами.",
            fail: "Отправить не удалось. Позвоните, пожалуйста, на +998 95 799 88 86."
        },
        footer: {
            tagline: "Единая система управления для частных школ и учебных центров.",
            copy: "© 2026 Durbin. Все права защищены.",
            demo_note: "Цифры на экранах показаны как пример."
        }
    },

    /* ═══════════════════════ ENGLISH ═══════════════════════ */
    en: {
        a11y: { skip: "Skip to content", prev: "Previous module", next: "Next module", lang: "Choose language", theme: "Switch between light and dark theme" },
        cta: { demo: "Book a demo" },
        nav: {
            home: "Home",
            modules: "Modules",
            automation: "How Durbin works",
            features: "Capabilities",
            faq: "FAQ",
            contact: "Contact"
        },
        hero: {
            eyebrow: "For private schools and learning centres",
            title: "Your school <em>runs itself</em>",
            subtitle: "Durbin doesn't just store records. It sends every task to its owner, tracks the deadline and checks the result itself.",
            panel: "Control panel",
            live: "Live",
            k1: "Students", k2: "Attendance", k3: "Debtors", k4: "Open tasks",
            chart: "Attendance this week",
            donut: "Admission funnel",
            feed: "Today's activity",
            f1: "Attendance recorded for 9-B",
            f2: "New lead from Instagram",
            f3: "Payment received",
            f4: "Onboarding task closed"
        },
        modules: {
            eyebrow: "12 modules",
            title: "A dedicated module for every school process",
            lead: "Pick a module on the left and watch how it works on the right.",
            groups: {
                learning: "Learning",
                growth: "Growth",
                ops: "Operations",
                ai: "Smart help",
                channels: "Channels"
            },
            items: {
                lms: {
                    name: "Teaching",
                    lead: "The whole academic process from timetable to exam in one place. A grade reaches the parent the moment it is entered.",
                    points: [
                        "Scheduling by class, teacher, room and time. The system surfaces conflicts itself",
                        "Electronic journal: attendance and grades entered in the lesson, from a phone",
                        "Grade changes go through approval and leave a trace",
                        "Lesson plans are tracked by the head of teaching",
                        "Final and state exams tracked separately, results stored in the profile",
                        "Student ranking and progress reports"
                    ]
                },
                crm: {
                    name: "Admissions",
                    lead: "Every enquiry enters the system and is never lost. Calls are placed from inside Durbin and recorded.",
                    points: [
                        "Lead, visit, contract, enrolment: every stage shows up in numbers",
                        "Telephony is connected, the recording attaches to the lead",
                        "A manager can listen back to any call and score its quality",
                        "Who called and what the next step is are both logged",
                        "Referral programme: recommendations from existing parents are tracked",
                        "Rejection reasons: price, location, waiting time"
                    ]
                },
                marketing: {
                    name: "Marketing",
                    lead: "The ad budget rests on a conversion number instead of guesswork.",
                    points: [
                        "Instagram and other channels connect to the system",
                        "A content plan is built, publishing and results are tracked",
                        "Lead count and cost per lead are calculated per ad",
                        "Cost to acquire one student, broken down by channel",
                        "Campaigns are compared, weak ones are stopped in time",
                        "Results flow into the reporting module automatically"
                    ]
                },
                erp: {
                    name: "Finance",
                    lead: "Income, spend, debt and profit in real time. Nobody has to assemble the debtor list by hand.",
                    points: [
                        "Every transaction is filed under a category",
                        "Cash, card, transfer and online payment",
                        "The debtor list builds itself and reminders go out to parents",
                        "Profit and loss broken down by area",
                        "Budget plan is compared against actuals",
                        "Editing a large transaction requires manager approval"
                    ]
                },
                hr: {
                    name: "HR",
                    lead: "Attendance is confirmed by face recognition and a school-grounds check. Payroll calculates itself.",
                    points: [
                        "Staff check in from their phone and the system verifies their face",
                        "Location confirms they are on school grounds",
                        "Work schedule and timesheet are compared against actual hours",
                        "Payroll counts hours, leave, lateness and bonuses",
                        "Leave requests are submitted and the balance runs itself",
                        "Vacancies, candidates and the organisational chart"
                    ]
                },
                sop: {
                    name: "SOP",
                    lead: "The standard lives in the system, not on paper. An event happens and the tasks route themselves.",
                    points: [
                        "An event occurs, the system creates the tasks and sends them to their owners",
                        "Every task has a deadline and the deadline is tracked",
                        "When it passes: assignee first, then manager, then head of department",
                        "Completion is confirmed with proof: a photo or a document",
                        "Quality gets a score, lateness reduces it",
                        "Ready standards: admissions, onboarding, complaints, sales, finance"
                    ]
                },
                ai: {
                    name: "AI assistant",
                    lead: "An assistant inside the system. It drafts text, generates images and answers questions about your data.",
                    points: [
                        "Drafts letters, notices and messages for parents",
                        "Writes marketing content and post copy",
                        "Generates images",
                        "Answers questions like “How much is outstanding this month?”",
                        "Explains a report in plain language",
                        "Works in Uzbek, Russian and English"
                    ]
                },
                agents: {
                    name: "AI agents",
                    lead: "Agents running in the background. They find the problem before you ask and tell whoever needs to know.",
                    points: [
                        "Watch the data continuously and detect deviations",
                        "Flag it immediately when attendance drops or debt rises",
                        "Show the root cause of the problem",
                        "Recommend an action and offer to create the task",
                        "Forecast admissions and finance",
                        "Send the owner a daily and weekly summary"
                    ]
                },
                mobile: {
                    name: "Mobile app",
                    lead: "iOS and Android. Teachers in the lesson, parents on the move, staff at the workplace.",
                    points: [
                        "Teachers record attendance and grades from their phone",
                        "Staff check in at the workplace by face",
                        "Parents see grades, attendance and payments",
                        "Students see the timetable, homework and their coin balance",
                        "Push notifications",
                        "Interface in three languages"
                    ]
                },
                telegram: {
                    name: "Telegram bot",
                    lead: "Parents get everything in the Telegram they already use, with no separate app to install.",
                    points: [
                        "Grades and attendance arrive through the bot immediately",
                        "Payment reminders and the outstanding balance",
                        "School notices and news",
                        "The bot answers questions about the child",
                        "Task notifications for staff",
                        "Enquiries from the website and Instagram land in the bot too"
                    ]
                },
                students: {
                    name: "Students",
                    lead: "The full journey from first enquiry to graduation in one profile.",
                    points: [
                        "Personal details, class, grades, attendance and payments",
                        "Notes from the doctor, psychologist, speech therapist and tutor",
                        "Journey: interest, visit, contract, enrolment, onboarding, study, graduation",
                        "Leavers and alumni are tracked separately",
                        "The new academic year rolls over automatically, classes move up",
                        "Earns coins and trades them for real items in the Market"
                    ]
                },
                parents: {
                    name: "Parents",
                    lead: "Parents should not have to chase information about their child. It should reach them on its own.",
                    points: [
                        "Telegram bot, SMS and push notifications",
                        "Real-time messaging with the school inside the system",
                        "Today's attendance, yesterday's grade, outstanding balance",
                        "Progress reports and teacher comments",
                        "Data limited strictly to their own child",
                        "Complaints are tracked through the system and the reply is monitored"
                    ]
                }
            },
            viz: {
                lms_t: "Timetable", lms_note: "Conflict detected",
                crm_t: "Admission funnel", crm_note: "Call recording",
                marketing_t: "Channel performance", marketing_note: "Cost per lead",
                erp_t: "Income over time", erp_note: "Debtors",
                hr_t: "Attendance check", hr_note: "School grounds confirmed",
                sop_t: "Task chain", sop_note: "Deadline passed, escalated",
                ai_t: "AI assistant", ai_note: "Typing",
                agents_t: "Agent monitoring", agents_note: "Deviation detected",
                mobile_t: "Mobile app", mobile_note: "Teacher view",
                telegram_t: "Durbin bot", telegram_note: "Today's message",
                students_t: "Student journey", students_note: "Current stage",
                parents_t: "Parent notifications", parents_note: "Sent today",

                days: ["Mo", "Tu", "We", "Th", "Fr"],
                funnel: [["Lead", 100, 412], ["Visit", 64, 264], ["Contract", 38, 157], ["Enrolled", 29, 118]],
                rec: "Call recording",
                chan: [["Instagram", 76, 184], ["Telegram", 58, 141], ["Website", 41, 97], ["Referral", 27, 64]],
                cpl_suffix: " UZS",
                debtors: [["Karimova N.", "9-A", "1 400 000"], ["Yusupov A.", "7-B", "900 000"], ["Sattorova M.", "5-V", "1 750 000"]],
                hr_pay: "Payroll", hr_time: "08:54", hr_late: "No lateness",
                chain: [
                    ["Class teacher", "Meet the parents", "ok"],
                    ["Psychologist", "Monitor adaptation", "ok"],
                    ["Tutor", "First week check-in", "late"],
                    ["Director", "Escalated for review", "esc"]
                ],
                ai_q: "Draft the parents' meeting notice for September",
                ai_a_t: "Dear parents,",
                ai_a_b: "The general meeting takes place on 12 September at 18:00. Agenda: onboarding results, the lesson timetable and the payment schedule.",
                ai_copy: "Copy", ai_send: "Send",
                agent_t: "Attendance in 9-B dropped 12% over three weeks",
                agent_d: "Cause: absences from the first Tuesday lesson",
                agent_act: "Create a task",
                phone_head: "9-A · Mathematics",
                phone_rows: [["Aliyev Bekzod", 5], ["Karimova Nilufar", 4], ["Rasulov Javohir", 5], ["Yusupova Sevinch", 4], ["Torayev Aziz", 3]],
                phone_save: "Save",
                mob_list: ["iOS", "Android", "Push", "3 languages"],
                tg_msgs: [
                    ["Attendance", "Your child attended today. 4 lessons, no lateness."],
                    ["Grades", "Mathematics: 5 · Native language: 4"],
                    ["Payment", "Outstanding for September: 450 000 UZS"]
                ],
                tg_btns: ["Timetable", "Grades", "Payment"],
                journey: ["Interest", "Visit", "Contract", "Enrolled", "Onboarding", "Study", "Graduation"],
                st_name: "Karimova Nilufar", st_meta: "9-A", st_stage: "Onboarding",
                toasts: [
                    ["ph-check-circle", "Attendance", "Attended lessons today"],
                    ["ph-star", "Grade", "Mathematics: 5"],
                    ["ph-wallet", "Payment", "450 000 UZS outstanding"],
                    ["ph-megaphone-simple", "Notice", "Meeting on 12 September"]
                ]
            }
        },
        auto: {
            eyebrow: "How Durbin works",
            title: "One event — <em>the whole system answers</em>",
            lead: "Durbin is not twelve separate programs. Data is entered once, and from there the system decides who does what and where the result lands.",
            s1_t: "Data is entered once",
            s1_d: "A student, an employee, a payment or a grade is recorded in one place, and that same record works across all twelve modules.",
            s2_t: "An event starts the process",
            s2_d: "An enrolment, a late payment, a grade posted — the modules that matter start their own work.",
            s3_t: "Execution stays under control",
            s3_d: "Every task has an owner and a deadline. When it slips, the system pushes it upward.",
            s4_t: "The result becomes the report",
            s4_d: "Every action turns into a number. Nothing has to be collected — the report is already there.",
            ex_label: "Example",
            ex_trigger: "A student is enrolled in a class.",
            ex_note: "One action, and five modules start at the same moment:",
            ex_t1: "the lead closes, the contract is drawn up",
            ex_t2: "the payment schedule opens",
            ex_t3: "class and timetable are assigned",
            ex_t4: "onboarding tasks go to their owners",
            ex_t5: "the parent gets a notification",
            ex_out: "Nobody called anybody. All of it came from one event.",
            foot: "Modules can be switched on in stages, but they run on one database. That is why control and reporting stay single across the whole school."
        },
        roles: {
            eyebrow: "12 positions",
            title: "Everyone sees only their own work",
            lead: "Access is configured per position. Each person sees only the modules their job needs, and only their own data.",
            sees: "What {role} sees",
            access: "Module access",
            levels: { f: "Full", o: "Own only", n: "No access" },
            items: {
                founder: { name: "Founder", points: ["One picture across every branch", "Profit, loss and the budget plan", "A score for how standards are kept"] },
                director: { name: "Director", points: ["Staff attendance and discipline", "The list of overdue tasks", "Performance by class and the day's cash"] },
                academic: { name: "Academic director", points: ["Timetable and teacher workload", "Performance trends by subject", "Lesson plans and exam results"] },
                classlead: { name: "Class teacher", points: ["Attendance and grades for their class", "Correspondence with parents", "The tasks assigned to them"] },
                teacher: { name: "Teacher", points: ["Only their own class and subjects", "Attendance and grades from a phone", "Lesson plan and homework"] },
                psych: { name: "Psychologist", points: ["The students assigned to them", "Adaptation and observation notes", "The schedule of parent conversations"] },
                admissions: { name: "Admissions manager", points: ["Leads and the admission funnel", "Calls and call recordings", "Contract and first payment"] },
                marketer: { name: "Marketer", points: ["Lead volume and cost per channel", "Campaign performance and budget", "Content plan and publishing calendar"] },
                finance: { name: "Finance", points: ["The day's cash and transactions", "Debtor list and reminders", "Payroll and budget"] },
                hr: { name: "HR manager", points: ["Staff attendance and timesheets", "Leave, lateness and bonuses", "Vacancies and candidates"] },
                parent: { name: "Parent", points: ["Their child's attendance and grades", "Balance and payment history", "Direct correspondence with the school"] },
                student: { name: "Student", points: ["Their own grades and ranking", "Timetable and homework", "Coin balance and the Market"] }
            }
        },
        extras: {
            eyebrow: "Capabilities",
            title: "What else is inside",
            lead: "The small but necessary processes that cover a full school day.",
            f1_t: "Health and pastoral care",
            f1_d: "Notes from the doctor, psychologist, speech therapist and tutor collect in the student's single profile.",
            f2_t: "Coins and Market",
            f2_d: "Students earn coins for grades and participation, then trade them for real items in the school Market.",
            f3_t: "Catering",
            f3_d: "The menu is planned, the list of eating students is maintained, and billing runs automatically.",
            f4_t: "Reports",
            f4_d: "Ready analysis for admissions, teaching, finance, staff and pastoral work.",
            f5_t: "Hiring and org chart",
            f5_d: "Vacancies are published, candidates are tracked stage by stage, and the reporting structure is visible as a chart.",
            f6_t: "New academic year",
            f6_d: "Classes roll over and data is preserved. Nothing is copied by hand.",
            f7_t: "Surveys",
            f7_d: "Staff and parent feedback is collected and results break down by department."
        },
        why: {
            eyebrow: "The comparison",
            title: "Why Durbin",
            lead: "Other systems store data. Durbin also assigns the work, watches the deadline and verifies that it was done.",
            cmp_a_t: "The usual setup",
            cmp_a_1: "Data scattered across a dozen tools and spreadsheets",
            cmp_a_2: "Someone assembles the report on request",
            cmp_a_3: "The manager has to remember and chase people",
            cmp_a_4: "A mistake sits unnoticed with whoever made it",
            cmp_b_t: "With Durbin",
            cmp_b_1: "One database, and the records are linked",
            cmp_b_2: "The report is always ready",
            cmp_b_3: "When a deadline passes the system escalates on its own",
            cmp_b_4: "Every action leaves a trace and earns a score",
            w1_t: "Everything in one place",
            w1_d: "One system instead of a dozen tools. Data is entered once and works everywhere.",
            w2_t: "The process runs itself",
            w2_d: "Tasks are assigned automatically, deadlines are tracked, and misses escalate upward.",
            w3_t: "Multiple branches",
            w3_d: "Each branch runs on its own, the shared standard is pushed from the centre, and the whole picture stays visible.",
            w4_t: "Three languages",
            w4_d: "Uzbek, Russian and English. Staff and parents both work in the language they prefer.",
            w5_t: "Data stays safe",
            w5_d: "Each school's data is strictly separated, passwords are encrypted, and every significant action leaves a trace.",
            w6_t: "Works on a phone",
            w6_d: "Teachers mark attendance from their phone during the lesson, and staff check in from the workplace."
        },
        faq: {
            eyebrow: "FAQ",
            title: "Frequently asked questions",
            lead: "Not answered here? Write on Telegram or call us and we will walk you through it.",
            items: [
                { q: "How long does it take to roll Durbin out?", a: "Usually two to four weeks. That covers migrating your data, configuring the system around your school's processes and training the staff. Modules can be switched on in stages rather than all at once." },
                { q: "Can we bring our existing data across?", a: "Yes. Students, staff, classes and payment history are migrated from Excel files or from your current system — nothing has to be retyped." },
                { q: "Will the staff be able to learn it?", a: "The interface is configured per position: a teacher sees only their class and their tasks, the finance role sees payments. Because each person sees only their own work, training is short." },
                { q: "Does it work with several branches?", a: "Yes. Each branch runs on its own data, the shared standard is pushed from the centre, and the founder sees every branch on one screen." },
                { q: "Can we take only the modules we need?", a: "Durbin comes as one system — all twelve modules ship together. They run on a single database, so they are not sold separately: admissions depends on finance, finance on teaching. At the start you can switch on only the modules you need and open the rest later." },
                { q: "How is the data kept secure?", a: "Access is limited by position, every action leaves a trace, and who changed what stays visible. Backups are taken regularly." },
                { q: "Does it work over the phone and Telegram?", a: "Yes. The mobile app works separately for teacher, parent and student, and the Telegram bot sends grades, attendance and payment reminders." },
                { q: "How is the price calculated?", a: "Price depends on the number of students and branches. We give an exact figure at the demo, based on the size of your school." }
            ]
        },
        contact: {
            eyebrow: "Contact",
            title: "See your school inside Durbin",
            desc: "In the demo we walk through the system using your own data. Leave your number and we will get in touch.",
            name_label: "Your name",
            name_placeholder: "For example, Nodira Rasulova",
            school_label: "School name",
            school_placeholder: "For example, Ilm Ziyo School",
            phone_label: "Phone number",
            submit: "Book a demo",
            sending: "Sending",
            err_name: "Please enter your name.",
            err_school: "Please enter the school name.",
            err_phone: "Enter 9 digits, for example 90 123 45 67.",
            ok: "Received. We will contact you shortly.",
            fail: "Could not send. Please call +998 95 799 88 86 instead."
        },
        footer: {
            tagline: "A single management system for private schools and learning centres.",
            copy: "© 2026 Durbin. All rights reserved.",
            demo_note: "Figures shown on screens are illustrative."
        }
    }
};
