/* Durbin — i18n content (uz / ru / en) */

const MODULE_ORDER = ['lms', 'crm', 'marketing', 'erp', 'hr', 'sop', 'ai', 'agents', 'mobile', 'telegram', 'students', 'parents'];

const translations = {

    /* ═══════════════════════ O'ZBEKCHA ═══════════════════════ */
    uz: {
        a11y: { skip: "Asosiy kontentga o'tish", prev: "Oldingi modul", next: "Keyingi modul" },
        cta: { demo: "Demo olish" },
        nav: {
            modules: "Modullar",
            automation: "Avtomatlashtirish",
            roles: "Rollar",
            why: "Nega Durbin"
        },
        hero: {
            eyebrow: "Maktab boshqaruv tizimi",
            title: "Maktabingiz <em>bitta tizimda</em>",
            subtitle: "Qabuldan bitiruvgacha, dars jadvalidan oylik hisoblashgacha. Durbin barcha jarayonni birlashtiradi va bajarilishini o'zi nazorat qiladi.",
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
        promise: {
            p1_t: "Hammasi ko'rinadi",
            p1_d: "Moliya, davomat, qabul va xodimlar bitta panelda. Ma'lumot bir marta kiritiladi va hamma joyda ishlaydi.",
            p2_t: "Hech narsa unutilmaydi",
            p2_d: "Tizim vazifani o'zi taqsimlaydi, muddatini kuzatadi va bajarilmasa yuqoriga chiqaradi.",
            p3_t: "Hisobot tayyor turadi",
            p3_d: "So'rash va yig'ish shart emas. Har yo'nalish bo'yicha tahlil har doim ekranda."
        },
        modules: {
            eyebrow: "12 ta modul",
            title: "Maktabning har bir jarayoni uchun alohida modul",
            lead: "Chapdan modulni tanlang, o'ngda uning ichida nima ishlashini ko'ring.",
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
            eyebrow: "Durbin'ning asosiy kuchi",
            title: "Standart qog'ozda emas, tizimda yashaydi",
            lead: "Har maktabda qoidalar bor. Amalda esa kimdir esidan chiqaradi, kimdir ulgurmaydi, va buni hech kim bilmaydi. Durbin hodisani o'zi sezadi va tegishli xodimga vazifa yuboradi.",
            s1_t: "Hodisa vazifaga aylanadi",
            s1_d: "Maktabda biror narsa sodir bo'ladi, tizim tegishli vazifalarni yaratib egalariga yuboradi.",
            s2_t: "Muddat kuzatiladi",
            s2_d: "Muddat o'tsa avval ijrochi ogohlantiriladi, keyin rahbar, undan keyin bo'lim boshlig'i.",
            s3_t: "Bajarilgani tasdiqlanadi",
            s3_d: "Kerak bo'lsa dalil talab qilinadi: foto yoki hujjat.",
            s4_t: "Sifatga ball qo'yiladi",
            s4_d: "Muddatida bajarsa to'liq, kechiksa yarmi, qayta ishlashga qaytarilsa yana kam.",
            ex_label: "Misol",
            ex_trigger: "O'quvchi sinfga qabul qilindi.",
            ex_note: "Shu zahoti adaptatsiya jarayonining barcha vazifasi yaratiladi va har biri o'z egasiga boradi:",
            ex_r1: "Sinf rahbari", ex_t1: "ota-ona bilan tanishuv",
            ex_r2: "Psixolog", ex_t2: "adaptatsiya kuzatuvi",
            ex_r3: "Tyutor", ex_t3: "birinchi hafta nazorati",
            ex_out: "Rahbar “bajarildimi?” deb so'rab yurmaydi. Javob ekranda turadi.",
            foot: "Tizimda tayyor standartlar to'plami bor: qabul, adaptatsiya, shikoyat bilan ishlash, sotuv va moliya. Ularni noldan yozish shart emas, maktabingizga moslashtirasiz."
        },
        roles: {
            title: "Har kim faqat o'zinikini ko'radi",
            lead: "Kirish huquqlari nozik sozlanadi. O'qituvchi o'z sinfini, moliyachi to'lovlarni, direktor hammasini ko'radi.",
            ceo: "Asoschi", director: "Direktor", teacher: "O'qituvchi", parent: "Ota-ona", student: "O'quvchi",
            ceo_t: "Asoschi nimani ko'radi",
            ceo_1: "Barcha filial bo'yicha umumiy manzara",
            ceo_2: "Foyda, zarar va byudjet rejasi",
            ceo_3: "Qabul konversiyasi va marketing samarasi",
            ceo_4: "Standartlar bajarilishi bo'yicha ball",
            director_t: "Direktor nimani ko'radi",
            director_1: "Xodimlar davomati va intizomi",
            director_2: "Muddati o'tgan vazifalar ro'yxati",
            director_3: "Sinflar kesimida o'zlashtirish",
            director_4: "Qarzdorlik va kunlik kassa",
            teacher_t: "O'qituvchi nimani ko'radi",
            teacher_1: "Faqat o'z sinfi va fanlari",
            teacher_2: "Davomat va baholarni telefondan qo'yish",
            teacher_3: "Dars rejasi va uy vazifalari",
            teacher_4: "O'ziga biriktirilgan vazifalar",
            parent_t: "Ota-ona nimani ko'radi",
            parent_1: "Farzandining bugungi davomati",
            parent_2: "Kechagi bahosi va progress hisoboti",
            parent_3: "Qolgan to'lov va to'lov tarixi",
            parent_4: "Maktab bilan to'g'ridan-to'g'ri yozishma",
            student_t: "O'quvchi nimani ko'radi",
            student_1: "O'z baholari va reytingi",
            student_2: "Dars jadvali va uy vazifalari",
            student_3: "Yig'ilgan tangalar balansi",
            student_4: "Market: tangani mahsulotga almashtirish",
            mini: {
                ceo_k: [["Filiallar", "3"], ["Foyda", "+18,4%"], ["Standart bali", "92"]],
                ceo_b: [["Chilonzor", 88], ["Yunusobod", 74], ["Sergeli", 61]],
                dir_h: "Muddati o'tgan vazifalar",
                dir_r: [["Shikoyatga javob", "Sinf rahbari", "late"], ["Adaptatsiya hisoboti", "Psixolog", "late"], ["Oylik tabel", "HR bo'limi", "ok"]],
                tea_h: "9-A · Davomat",
                tea_r: [["Aliyev Bekzod", 1], ["Karimova Nilufar", 1], ["Rasulov Javohir", 0]],
                tea_s: "Saqlash",
                par_t: [["ph-check-circle", "Davomat", "Bugun darsda"], ["ph-star", "Baho", "Matematika: 5"], ["ph-wallet", "To'lov", "Qoldiq 450 000 so'm"]],
                stu_c: "Tanga balansi",
                stu_g: [["Matematika", 5], ["Fizika", 4], ["Ona tili", 5]]
            }
        },
        extras: {
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
        contact: {
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
        a11y: { skip: "Перейти к содержимому", prev: "Предыдущий модуль", next: "Следующий модуль" },
        cta: { demo: "Получить демо" },
        nav: {
            modules: "Модули",
            automation: "Автоматизация",
            roles: "Роли",
            why: "Почему Durbin"
        },
        hero: {
            eyebrow: "Система управления школой",
            title: "Ваша школа <em>в одной системе</em>",
            subtitle: "От приёма до выпуска, от расписания до расчёта зарплаты. Durbin объединяет все процессы и сам контролирует их выполнение.",
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
        promise: {
            p1_t: "Всё на виду",
            p1_d: "Финансы, посещаемость, приём и сотрудники на одной панели. Данные вводятся один раз и работают везде.",
            p2_t: "Ничего не забывается",
            p2_d: "Система сама распределяет задачи, следит за сроком и поднимает наверх невыполненное.",
            p3_t: "Отчёт всегда готов",
            p3_d: "Не нужно запрашивать и собирать. Аналитика по каждому направлению всегда на экране."
        },
        modules: {
            eyebrow: "12 модулей",
            title: "Отдельный модуль под каждый процесс школы",
            lead: "Выберите модуль слева и посмотрите справа, как он работает.",
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
            eyebrow: "Главная сила Durbin",
            title: "Стандарт живёт в системе, а не на бумаге",
            lead: "В каждой школе есть правила. На практике кто-то забывает, кто-то не успевает, и об этом никто не знает. Durbin сам замечает событие и отправляет задачу нужному сотруднику.",
            s1_t: "Событие становится задачей",
            s1_d: "В школе что-то происходит, система создаёт нужные задачи и отправляет их владельцам.",
            s2_t: "Срок под контролем",
            s2_d: "Если срок прошёл, сначала предупреждается исполнитель, затем руководитель, затем начальник отдела.",
            s3_t: "Выполнение подтверждается",
            s3_d: "При необходимости запрашивается доказательство: фото или документ.",
            s4_t: "За качество ставится балл",
            s4_d: "Выполнено в срок, значит полный балл. С опозданием, значит половина. Возвращено на доработку, значит ещё меньше.",
            ex_label: "Пример",
            ex_trigger: "Ученик принят в класс.",
            ex_note: "В тот же момент создаются все задачи процесса адаптации и каждая уходит своему владельцу:",
            ex_r1: "Классный руководитель", ex_t1: "знакомство с родителями",
            ex_r2: "Психолог", ex_t2: "наблюдение за адаптацией",
            ex_r3: "Тьютор", ex_t3: "контроль первой недели",
            ex_out: "Руководителю не нужно спрашивать “сделали?”. Ответ уже на экране.",
            foot: "В системе есть готовый набор стандартов: приём, адаптация, работа с жалобами, продажи и финансы. Писать с нуля не нужно, вы адаптируете их под свою школу."
        },
        roles: {
            title: "Каждый видит только своё",
            lead: "Права доступа настраиваются точно. Учитель видит свой класс, финансист платежи, директор всё.",
            ceo: "Учредитель", director: "Директор", teacher: "Учитель", parent: "Родитель", student: "Ученик",
            ceo_t: "Что видит учредитель",
            ceo_1: "Общая картина по всем филиалам",
            ceo_2: "Прибыль, убыток и план бюджета",
            ceo_3: "Конверсия приёма и эффективность маркетинга",
            ceo_4: "Баллы за выполнение стандартов",
            director_t: "Что видит директор",
            director_1: "Посещаемость и дисциплина сотрудников",
            director_2: "Список просроченных задач",
            director_3: "Успеваемость в разрезе классов",
            director_4: "Задолженность и дневная касса",
            teacher_t: "Что видит учитель",
            teacher_1: "Только свой класс и предметы",
            teacher_2: "Посещаемость и оценки с телефона",
            teacher_3: "План урока и домашние задания",
            teacher_4: "Закреплённые за ним задачи",
            parent_t: "Что видит родитель",
            parent_1: "Сегодняшняя посещаемость ребёнка",
            parent_2: "Вчерашняя оценка и отчёт о прогрессе",
            parent_3: "Остаток платежа и история оплат",
            parent_4: "Прямая переписка со школой",
            student_t: "Что видит ученик",
            student_1: "Свои оценки и рейтинг",
            student_2: "Расписание и домашние задания",
            student_3: "Баланс накопленных монет",
            student_4: "Маркет: обмен монет на товар",
            mini: {
                ceo_k: [["Филиалы", "3"], ["Прибыль", "+18,4%"], ["Балл стандартов", "92"]],
                ceo_b: [["Чиланзар", 88], ["Юнусабад", 74], ["Сергели", 61]],
                dir_h: "Просроченные задачи",
                dir_r: [["Ответ на жалобу", "Классный рук.", "late"], ["Отчёт по адаптации", "Психолог", "late"], ["Табель за месяц", "Отдел HR", "ok"]],
                tea_h: "9-А · Посещаемость",
                tea_r: [["Алиев Бекзод", 1], ["Каримова Нилуфар", 1], ["Расулов Джавохир", 0]],
                tea_s: "Сохранить",
                par_t: [["ph-check-circle", "Посещаемость", "Сегодня на уроках"], ["ph-star", "Оценка", "Математика: 5"], ["ph-wallet", "Оплата", "Остаток 450 000 сум"]],
                stu_c: "Баланс монет",
                stu_g: [["Математика", 5], ["Физика", 4], ["Родной язык", 5]]
            }
        },
        extras: {
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
        contact: {
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
        a11y: { skip: "Skip to content", prev: "Previous module", next: "Next module" },
        cta: { demo: "Book a demo" },
        nav: {
            modules: "Modules",
            automation: "Automation",
            roles: "Roles",
            why: "Why Durbin"
        },
        hero: {
            eyebrow: "School management system",
            title: "Your school <em>in one system</em>",
            subtitle: "From admission to graduation, from timetable to payroll. Durbin connects every process and tracks that the work actually gets done.",
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
        promise: {
            p1_t: "Everything is visible",
            p1_d: "Finance, attendance, admissions and staff on one panel. Data is entered once and works everywhere.",
            p2_t: "Nothing gets forgotten",
            p2_d: "The system assigns the task, watches the deadline and escalates when it is missed.",
            p3_t: "The report is already there",
            p3_d: "No requesting, no collecting. Analytics for every area stays on screen."
        },
        modules: {
            eyebrow: "12 modules",
            title: "A dedicated module for every school process",
            lead: "Pick a module on the left and watch how it works on the right.",
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
            eyebrow: "What Durbin does best",
            title: "The standard lives in the system, not on paper",
            lead: "Every school has rules. In practice someone forgets, someone runs out of time, and nobody finds out. Durbin notices the event itself and sends the task to the right person.",
            s1_t: "An event becomes a task",
            s1_d: "Something happens at school, and the system creates the related tasks and routes them to their owners.",
            s2_t: "The deadline is tracked",
            s2_d: "If the deadline passes, the assignee is warned first, then the manager, then the head of department.",
            s3_t: "Completion is confirmed",
            s3_d: "Proof can be required: a photo or a document.",
            s4_t: "Quality gets a score",
            s4_d: "On time is full credit, late is half, sent back for rework is less again.",
            ex_label: "Example",
            ex_trigger: "A student is enrolled in a class.",
            ex_note: "Right away every task in the onboarding process is created and routed to its owner:",
            ex_r1: "Class teacher", ex_t1: "meet the parents",
            ex_r2: "Psychologist", ex_t2: "monitor adaptation",
            ex_r3: "Tutor", ex_t3: "first week check-in",
            ex_out: "The manager never has to ask “is it done?”. The answer is on the screen.",
            foot: "A library of ready standards ships with the system: admissions, onboarding, complaint handling, sales and finance. You adapt them to your school instead of writing them from scratch."
        },
        roles: {
            title: "Everyone sees only their own work",
            lead: "Access rights are configured precisely. A teacher sees their class, an accountant sees payments, the director sees all of it.",
            ceo: "Founder", director: "Director", teacher: "Teacher", parent: "Parent", student: "Student",
            ceo_t: "What the founder sees",
            ceo_1: "One picture across every branch",
            ceo_2: "Profit, loss and budget plan",
            ceo_3: "Admission conversion and marketing performance",
            ceo_4: "Scores for standards compliance",
            director_t: "What the director sees",
            director_1: "Staff attendance and discipline",
            director_2: "The list of overdue tasks",
            director_3: "Performance by class",
            director_4: "Outstanding debt and daily cash",
            teacher_t: "What the teacher sees",
            teacher_1: "Only their own classes and subjects",
            teacher_2: "Attendance and grades from a phone",
            teacher_3: "Lesson plans and homework",
            teacher_4: "Tasks assigned to them",
            parent_t: "What the parent sees",
            parent_1: "Today's attendance for their child",
            parent_2: "Yesterday's grade and progress report",
            parent_3: "Outstanding balance and payment history",
            parent_4: "Direct messaging with the school",
            student_t: "What the student sees",
            student_1: "Their grades and ranking",
            student_2: "Timetable and homework",
            student_3: "Coin balance",
            student_4: "Market: trade coins for real items",
            mini: {
                ceo_k: [["Branches", "3"], ["Profit", "+18.4%"], ["Standards score", "92"]],
                ceo_b: [["Chilonzor", 88], ["Yunusobod", 74], ["Sergeli", 61]],
                dir_h: "Overdue tasks",
                dir_r: [["Reply to complaint", "Class teacher", "late"], ["Onboarding report", "Psychologist", "late"], ["Monthly timesheet", "HR team", "ok"]],
                tea_h: "9-A · Attendance",
                tea_r: [["Aliyev Bekzod", 1], ["Karimova Nilufar", 1], ["Rasulov Javohir", 0]],
                tea_s: "Save",
                par_t: [["ph-check-circle", "Attendance", "In class today"], ["ph-star", "Grade", "Mathematics: 5"], ["ph-wallet", "Payment", "450 000 UZS left"]],
                stu_c: "Coin balance",
                stu_g: [["Mathematics", 5], ["Physics", 4], ["Native language", 5]]
            }
        },
        extras: {
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
        contact: {
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
