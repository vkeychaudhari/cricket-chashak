/* =====================================================================
   SITE CONFIG — EDIT EVERYTHING HERE
   महात्मा ज्योतिराव फुले क्रिकेट चषक – पर्व ०२ - २०२७
   ---------------------------------------------------------------------
   • Text can be a plain string            "Text"
     or bilingual                          { mr: "मराठी", en: "English" }
   • Lines marked  // DUMMY  are placeholder values — replace them.
   • Photos: put your image file at the path written next to it.
     Until the file exists, the site shows a labelled placeholder that
     tells you exactly which file to add. No code change needed.
   • Dates: "YYYY-MM-DD"  (times use India time, +05:30)
   ===================================================================== */

window.SITE_CONFIG = {
  defaultLanguage: "mr", // "mr" = Marathi first, "en" = English first

  /* ---------- Tournament identity ---------- */
  tournament: {
    name: { mr: "महात्मा ज्योतिराव फुले क्रिकेट चषक", en: "Mahatma Jyotirao Phule Cricket Chashak" },
    nameLine1: { mr: "महात्मा ज्योतिराव फुले", en: "Mahatma Jyotirao Phule" },
    nameLine2: { mr: "क्रिकेट चषक", en: "Cricket Chashak" },
    shortName: { mr: "फुले क्रिकेट चषक", en: "Phule Cricket Chashak" },
    season: { mr: "पर्व ०२ – २०२७", en: "Season 02 – 2027" },
    badge: { mr: "पर्व २", en: "Season 2" },
    tagline: { mr: "समतेचा खेळ, एकतेचा उत्सव!", en: "A game of equality, a celebration of unity!" },
    logo: "images/theme/logo-header.webp", // small logo (header + footer). The big hero emblem is images/theme/logo-emblem-*.webp
    organizer: { mr: "", en: "" }, // optional – e.g. { mr: "आयोजक मंडळ, नाशिक", en: "Organising Committee, Nashik" }
  },

  /* ---------- Links ---------- */
  links: {
    registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLScUfC_euI_HjzbfOx9DgTEDQSOH7WdnMllYwfx1VdtYy3a0bQ/viewform", // Google Form for registration
    instagram: "",        // PASTE INSTAGRAM PAGE URL here, e.g. "https://www.instagram.com/yourpage"
    mapEmbed: "",         // optional: Google Maps → Share → "Embed a map" → copy only the src="..." URL
    mapLink: "",          // optional: Google Maps share link (leave "" to auto-generate from venue)
  },

  /* ---------- Contact ---------- */
  contact: {
    countryCode: "91",
    phones: ["9881858886", "9028848280", "9730024454"],
    whatsapp: "9028848280",
    whatsappMessage: "Hello, I want to know about Cricket Chashak Season 2",
  },

  /* =================================================================
     TAB 1 — SEASON 2 (2027)
     ================================================================= */
  season2: {
    keyInfo: [
      { icon: "crown", prefix: "₹", value: 30000, suffix: "/-",
        label: { mr: "संघ मालक फी", en: "Owner Fees" }, note: { mr: "प्रति संघ", en: "per team" } },
      { icon: "ticket", prefix: "₹", value: 600, suffix: "/-",
        label: { mr: "खेळाडू नोंदणी फी", en: "Player Registration Fee" }, note: { mr: "प्रति खेळाडू", en: "per player" } },
      { icon: "shield", value: 12, unit: { mr: "संघ", en: "Teams" },
        label: { mr: "एकूण संघ", en: "Total Teams" } },
      { icon: "users", value: 120, unit: { mr: "खेळाडू", en: "Players" },
        label: { mr: "एकूण खेळाडू", en: "Total Players" }, note: { mr: "लिलावाद्वारे संघनिवड", en: "picked through a live auction" } },
    ],

    prizes: {
      team: [ // amounts in ₹ (numbers only)
        { place: 1, title: { mr: "विजेता", en: "Winner" }, amount: 51000, extra: { mr: "+ भव्य चषक", en: "+ Champions Trophy" } },   // DUMMY amount
        { place: 2, title: { mr: "उपविजेता", en: "Runner-up" }, amount: 31000, extra: { mr: "+ चषक", en: "+ Trophy" } },          // DUMMY amount
        { place: 3, title: { mr: "तृतीय क्रमांक", en: "3rd Place" }, amount: 21000, extra: { mr: "+ चषक", en: "+ Trophy" } },     // DUMMY amount
        { place: 4, title: { mr: "चतुर्थ क्रमांक", en: "4th Place" }, amount: 11000, extra: { mr: "+ चषक", en: "+ Trophy" } },    // DUMMY amount
      ],
      individual: [
        { icon: "bat", title: { mr: "सर्वोत्कृष्ट फलंदाज", en: "Best Batter" }, amount: 5001, extra: { mr: "+ चषक", en: "+ Trophy" } },      // DUMMY
        { icon: "ball", title: { mr: "सर्वोत्कृष्ट गोलंदाज", en: "Best Bowler" }, amount: 5001, extra: { mr: "+ चषक", en: "+ Trophy" } },     // DUMMY
        { icon: "hand", title: { mr: "सर्वोत्कृष्ट क्षेत्ररक्षक", en: "Best Fielder" }, amount: 3001, extra: { mr: "+ चषक", en: "+ Trophy" } }, // DUMMY
        { icon: "star", title: { mr: "मालिकावीर (MVP)", en: "MVP – Player of the Series" }, amount: 7001, extra: { mr: "+ चषक", en: "+ Trophy" } }, // DUMMY
      ],
    },

    schedule: {
      auction: {
        // Player auction date & time in India time, e.g. "2026-12-20T18:00:00+05:30".
        // Leave "" until it is announced — the site then shows "Date to be announced" instead of a countdown.
        datetime: "",
        venue: "", // e.g. { mr: "…, नाशिक", en: "…, Nashik" } — leave "" until announced
      },
      tournamentStart: "2027-01-09",
      startTime: { mr: "सकाळी ८ वाजल्यापासून", en: "From 8:00 AM" }, // DUMMY
      final: "2027-01-10",
      finalTime: { mr: "सायंकाळी ५ वाजता", en: "5:00 PM onwards" },   // DUMMY
    },

    venue: {
      name: { mr: "क्रीडाधाम प्रीमियम मल्टीस्पोर्ट क्लब", en: "Kridadham Premium Multisport Club" },
      address: {
        mr: "जयभावे फार्म, गुरु गोविंद सिंग कॉलेजजवळ, इंदिरा नगर, नाशिक",
        en: "Jaybhave Farm, Near Guru Gobind Singh College, Indira Nagar, Nashik",
      },
      city: { mr: "नाशिक", en: "Nashik" },
      mapQuery: "Kridadham Premium Multisport Club, Indira Nagar, Nashik", // used for the embedded map
    },

    // ⚠ PLEASE REVIEW: well-known lines from Mahatma Phule's writings.
    // Verify the exact wording/source before publishing.
    quotes: [
      {
        mr: "विद्येविना मति गेली, मतीविना नीति गेली, नीतीविना गति गेली, गतीविना वित्त गेले, वित्ताविना शूद्र खचले — इतके अनर्थ एका अविद्येने केले.",
        en: "Without education, wisdom was lost; without wisdom, morals were lost; without morals, progress stopped; without progress, wealth was lost; without wealth, the downtrodden were crushed — so much misery came from the lack of education alone.",
        source: { mr: "शेतकऱ्याचा असूड (१८८३)", en: "Shetkaryacha Asud (1883)" },
      },
      {
        mr: "सत्य सर्वांचे आदिघर, सर्व धर्मांचे माहेर.",
        en: "Truth is the first home of all, and the mother-home of every faith.",
        source: { mr: "अखंड", en: "Akhand (verses)" },
      },
      {
        mr: "सर्व मानव प्राणी एकाच निर्मिकाची लेकरे आहेत.",
        en: "All human beings are children of one and the same Creator.",
        source: { mr: "सत्यशोधक समाजाचे तत्त्व", en: "Principle of the Satyashodhak Samaj" }, // ⚠ REVIEW (paraphrase)
      },
      {
        mr: "स्त्रियांना शिक्षण दिल्याशिवाय समाजाची खरी प्रगती होणार नाही.",
        en: "Society cannot truly progress unless women are educated.",
        source: { mr: "महात्मा फुले यांचे विचार", en: "Thoughts of Mahatma Phule" }, // ⚠ REVIEW (popular attribution)
      },
    ],
    portrait: "images/phule-portrait.jpg", // portrait for the quotes frame
  },

  /* =================================================================
     TAB 2 — SEASON 1 SUCCESS STORY (2026)
     ================================================================= */
  season1: {
    season: { mr: "पर्व ०१ – २०२६", en: "Season 01 – 2026" },

    // DUMMY draft – edit freely
    story: [
      {
        mr: "२०२६ मध्ये नाशिकच्या मातीत एका नव्या क्रिकेट परंपरेचा जन्म झाला. महात्मा ज्योतिराव फुले क्रिकेट चषकाच्या पहिल्या पर्वात ११ संघ मैदानात उतरले आणि प्रेक्षकांच्या उदंड प्रतिसादात समता, बंधुता आणि खिलाडूवृत्तीचा खरा उत्सव साजरा झाला.",
        en: "In 2026, a new cricket tradition was born on the grounds of Nashik. The first season of the Mahatma Jyotirao Phule Cricket Chashak brought 11 teams onto the field, cheered on by passionate crowds, in a true celebration of equality, brotherhood and sportsmanship.",
      },
      {
        mr: "प्रत्येक चौकार, प्रत्येक बळी आणि प्रत्येक झेलाने एकच संदेश दिला — मैदानात सगळे समान! पहिल्या पर्वाच्या या सुवर्ण आठवणी आता पर्व २ साठी नवी प्रेरणा आहेत.",
        en: "Every boundary, every wicket and every catch carried one message — on the field, everyone is equal! The golden memories of Season 1 are now the inspiration for Season 2.",
      },
    ],

    highlights: [ // teams = real; players, matches & sixes are DUMMY
      { value: 11, label: { mr: "संघ", en: "Teams" } },
      { value: 80, label: { mr: "खेळाडू", en: "Players" } },
      { value: 15, label: { mr: "सामने", en: "Matches" } },
      { value: 120, suffix: "+", label: { mr: "षटकार", en: "Sixes" } },
    ],

    /* Owner & Team slideshow — add / remove / edit teams here.
       id: short unique name (used by standings & awards below)
       name: team name (currently the owner's brand — change if the team had another name)
       color: team colour (hex) – used for accents & logo placeholder
       ownerPhoto / logo: image paths (add the files to the images folder)
       players: list of names – plain "Name" or { mr: "नाव", en: "Name" }.
                Leave [] to show "squad list coming soon". */
    teams: [
      {
        id: "kashmire-electricals", color: "#1E88E5",
        name: "Kashmire Electricals",
        owner: "Nagesh Kashmire",
        ownerPhoto: "images/season1/owners/owner-01-nagesh-kashmire.webp",
        logo: "images/season1/logos/logo-01-kashmire-electricals.webp",
        players: [],
      },
      {
        id: "aaradhya-developers", color: "#B8860B",
        name: "Aaradhya Developers",
        owner: "Bhushan Shinde",
        ownerPhoto: "images/season1/owners/owner-02-bhushan-shinde.webp",
        logo: "images/season1/logos/logo-02-aaradhya-developers.webp",
        players: [],
      },
      {
        id: "mayur-enterprises", color: "#1F5FAD",
        name: "Mayur Enterprises",
        owner: "Bhausaheb Mali & Sagar Mahajan",
        ownerPhoto: "images/season1/owners/owner-03-bhausaheb-mali-sagar-mahajan.webp",
        logo: "images/season1/logos/logo-03-mayur-enterprises.webp",
        players: [],
      },
      {
        id: "vazcon-realty", color: "#E06A1B",
        name: "Vazcon Realty",
        owner: "Tejas Vazare",
        ownerPhoto: "images/season1/owners/owner-04-tejas-vazare.webp",
        logo: "images/season1/logos/logo-04-vazcon-realty.webp",
        players: [],
      },
      {
        id: "logique-technologies", color: "#0097A7",
        name: "Logique Technologies",
        owner: "Yogesh Sonnis",
        ownerPhoto: "images/season1/owners/owner-05-yogesh-sonnis.webp",
        logo: "images/season1/logos/logo-05-logique-technologies.webp",
        players: [],
      },
      {
        id: "ca-india", color: "#2E7D32",
        name: "CA India",
        owner: "Pratik Jejurkar",
        ownerPhoto: "images/season1/owners/owner-06-pratik-jejurkar.webp",
        logo: "images/season1/logos/logo-06-ca-india.webp",
        players: [],
      },
      {
        id: "the-suki-media", color: "#E53935",
        name: "The Suki Media",
        owner: "Kishan Mahajan",
        ownerPhoto: "images/season1/owners/owner-07-kishan-mahajan.webp",
        logo: "images/season1/logos/logo-07-the-suki-media.webp",
        players: [],
      },
      {
        id: "jay-shankar-group", color: "#9E1B32",
        name: "Jay Shankar Group",
        owner: "Jaywant Jejurkar",
        ownerPhoto: "images/season1/owners/owner-08-jaywant-jejurkar.webp",
        logo: "images/season1/logos/logo-08-jay-shankar-group.webp",
        players: [],
      },
      {
        id: "data-engineer", color: "#0B2A6F",
        name: "Data Engineer",
        owner: "Satish Gaikwad",
        ownerPhoto: "images/season1/owners/owner-09-satish-gaikwad.webp",
        logo: "images/season1/logos/logo-09-data-engineer.webp",
        players: [],
      },
      {
        id: "mali-kitchens", color: "#EF6C00",
        name: "Mali Kitchens",
        owner: "Sanjay Mali",
        ownerPhoto: "images/season1/owners/owner-10-sanjay-mali.webp",
        logo: "images/season1/logos/logo-10-mali-kitchens.webp",
        players: [],
      },
      {
        id: "ambadas-khaire", color: "#6A1B9A",
        name: "Ambadas Khaire", // team name & logo not provided yet
        owner: "Ambadas Khaire",
        ownerPhoto: "images/season1/owners/owner-11-ambadas-khaire.webp",
        logo: "",
        players: [],
      },
    ],

    // Final standings – use the team "id" from the list above.
    // Leave "" until results are confirmed — the podium then shows "results coming soon".
    standings: {
      winner: "",
      runnerUp: "",
      third: "",
      fourth: "",
    },

    // Player awards – team = team "id"; stat line is free text
    awards: [ // DUMMY – replace with the real award winners (team = team id, or "")
      { icon: "bat", title: { mr: "सर्वोत्कृष्ट फलंदाज", en: "Best Batter" }, player: "Akash Pawar", team: "",
        photo: "images/season1/awards/best-batter.jpg", stat: { mr: "५ सामने · २४८ धावा · स्ट्राइक रेट १८२", en: "5 matches · 248 runs · SR 182" } },
      { icon: "ball", title: { mr: "सर्वोत्कृष्ट गोलंदाज", en: "Best Bowler" }, player: "Swapnil Gite", team: "",
        photo: "images/season1/awards/best-bowler.jpg", stat: { mr: "१४ बळी · इकॉनॉमी ६.२ · सर्वोत्तम ४/१२", en: "14 wickets · Econ 6.2 · Best 4/12" } },
      { icon: "hand", title: { mr: "सर्वोत्कृष्ट क्षेत्ररक्षक", en: "Best Fielder" }, player: "Aniket Sonawane", team: "",
        photo: "images/season1/awards/best-fielder.jpg", stat: { mr: "९ झेल · ३ धावबाद", en: "9 catches · 3 run-outs" } },
      { icon: "star", title: { mr: "मालिकावीर (MVP)", en: "MVP" }, player: "Pankaj Hire", team: "",
        photo: "images/season1/awards/mvp.jpg", stat: { mr: "१८६ धावा · ८ बळी · ४ सामनावीर", en: "186 runs · 8 wickets · 4× Player of the Match" } },
    ],

    // Photo gallery – add as many as you like
    gallery: [
      { src: "images/season1/gallery/photo-01.jpg", caption: { mr: "उद्घाटन सोहळा", en: "Opening ceremony" } },
      { src: "images/season1/gallery/photo-02.jpg", caption: { mr: "पहिला चेंडू", en: "The first ball" } },
      { src: "images/season1/gallery/photo-03.jpg", caption: { mr: "षटकारांचा पाऊस", en: "Raining sixes" } },
      { src: "images/season1/gallery/photo-04.jpg", caption: { mr: "विकेटचा जल्लोष", en: "Wicket celebration" } },
      { src: "images/season1/gallery/photo-05.jpg", caption: { mr: "अप्रतिम झेल", en: "A stunning catch" } },
      { src: "images/season1/gallery/photo-06.jpg", caption: { mr: "प्रेक्षकांचा उत्साह", en: "The roaring crowd" } },
      { src: "images/season1/gallery/photo-07.jpg", caption: { mr: "संघ फोटो", en: "Team photo" } },
      { src: "images/season1/gallery/photo-08.jpg", caption: { mr: "अंतिम सामना", en: "The grand final" } },
      { src: "images/season1/gallery/photo-09.jpg", caption: { mr: "विजेत्यांचा जल्लोष", en: "Champions celebrate" } },
      { src: "images/season1/gallery/photo-10.jpg", caption: { mr: "बक्षीस वितरण", en: "Prize distribution" } },
      { src: "images/season1/gallery/photo-11.jpg", caption: { mr: "मान्यवरांची उपस्थिती", en: "Distinguished guests" } },
      { src: "images/season1/gallery/photo-12.jpg", caption: { mr: "पर्व १ – एक आठवण", en: "Season 1 – a memory" } },
    ],
  },

  /* =================================================================
     SPONSORSHIP — shown on the Season 2 page, before Contact
     • To show a confirmed sponsor: put the logo file in images/sponsors/
       and fill sponsor: { logo: "images/sponsors/abc.png", name: "ABC Ltd", url: "https://..." }
       (name and url are optional).
     • Leave logo "" to show the "Your Brand Here" slot.
     • level: "title" = big featured card, "co" = wide card, "support" = 3-card row.
     ================================================================= */
  sponsors: {
    phone: "9730024454",
    whatsappMessage: "Hello, I am interested in sponsorship opportunities for Phule Cricket Chashak.",
    tiers: [
      {
        level: "title", icon: "crown", accent: "gold",
        name: { mr: "टायटल स्पॉन्सर", en: "Title Sponsor" },
        tag: { mr: "प्रीमियम भागीदारी", en: "Premium Partnership" },
        badge: { mr: "सर्वात प्रीमियम", en: "Most Premium" },
        benefits: [
          { mr: "संपूर्ण स्पर्धेत सर्वात ठळक ब्रँड दृश्यमानतेची संधी", en: "Opportunity for the most prominent brand visibility across the tournament" },
          { mr: "जर्सी, बॅनर आणि डिजिटल प्रमोशनवर ब्रँडिंगची संधी", en: "Potential branding on jerseys, banners and digital promotions" },
          { mr: "स्पर्धेतील महत्त्वाचे क्षण आणि घोषणांसोबत ब्रँडची ओळख", en: "Association with key tournament moments and announcements" },
        ],
        sponsor: { logo: "", name: "", url: "" },
      },
      {
        level: "co", icon: "handshake", accent: "blue",
        name: { mr: "को-स्पॉन्सर", en: "Co-Sponsor" },
        tag: { mr: "ठळक ब्रँड प्रसिद्धी", en: "Strong Brand Exposure" },
        benefits: [
          { mr: "निवडक स्पर्धा साहित्यावर ठळक ब्रँडिंग", en: "Prominent branding across selected event assets" },
          { mr: "मैदानावर आणि आमच्या डिजिटल माध्यमांवर दृश्यमानता", en: "Visibility at the ground and on our digital platforms" },
          { mr: "खेळाडू, कुटुंबे आणि क्रिकेटप्रेमींशी थेट संपर्क", en: "Connect with players, families and cricket fans" },
        ],
        sponsor: { logo: "", name: "", url: "" },
      },
      {
        level: "support", icon: "trophy", accent: "gold",
        name: { mr: "ट्रॉफी स्पॉन्सर", en: "Trophy Sponsor" },
        tag: { mr: "विजयासोबत तुमचा ब्रँड", en: "Brand on Glory" },
        benefits: [
          { mr: "चषक आणि बक्षीस वितरण सोहळ्याशी ब्रँडची जोड", en: "Brand association with the trophies and prize ceremony" },
          { mr: "पुरस्कार वितरणादरम्यान ब्रँडिंगची संधी", en: "Branding opportunity during award distribution" },
          { mr: "सोहळ्याच्या फोटो आणि व्हिडिओमध्ये दृश्यमानता", en: "Visibility in ceremony photos and videos" },
        ],
        sponsor: { logo: "", name: "", url: "" },
      },
      {
        level: "support", icon: "shirt", accent: "blue",
        name: { mr: "टी-शर्ट स्पॉन्सर", en: "T-Shirt Sponsor" },
        tag: { mr: "प्रत्येक खेळाडूवर", en: "On Every Player" },
        benefits: [
          { mr: "अधिकृत स्पर्धा जर्सीवर लोगो (करारानुसार)", en: "Logo on official tournament jerseys, subject to agreement" },
          { mr: "सामन्यांचे फोटो आणि सोशल मीडियाद्वारे दीर्घकाळ दृश्यमानता", en: "Lasting visibility through match photos and social media" },
          { mr: "खेळाडू, समर्थक आणि प्रेक्षकांच्या नजरेत", en: "Seen by players, supporters and spectators" },
        ],
        sponsor: { logo: "", name: "", url: "" },
      },
      {
        level: "support", icon: "food", accent: "orange",
        name: { mr: "फूड पार्टनर", en: "Food Partner" },
        tag: { mr: "खेळाला ऊर्जा", en: "Fuel the Game" },
        benefits: [
          { mr: "अल्पोपहार आणि आतिथ्य क्षेत्रात ब्रँडिंगची संधी", en: "Branding opportunities at refreshment and hospitality areas" },
          { mr: "खेळाडूंचे जेवण आणि स्पर्धेतील आतिथ्याशी ब्रँडची जोड", en: "Association with player meals and event hospitality" },
          { mr: "खेळाडू, कुटुंबे आणि प्रेक्षकांशी संपर्क", en: "Connect with players, families and spectators" },
        ],
        sponsor: { logo: "", name: "", url: "" },
      },
    ],
    // Associate partner slots — add or remove entries freely
    associates: [
      { logo: "", name: "", url: "" },
      { logo: "", name: "", url: "" },
      { logo: "", name: "", url: "" },
      { logo: "", name: "", url: "" },
    ],
  },

  /* =================================================================
     UI TEXT (headings, buttons, labels)
     ================================================================= */
  labels: {
    skip: { mr: "मुख्य मजकुराकडे जा", en: "Skip to content" },
    navSeason2: { mr: "पर्व २", en: "Season 2" },
    navRegister: { mr: "नोंदणी", en: "Registration" },
    navSeason1: { mr: "पर्व १", en: "Season 1" },
    navSeason1Suffix: { mr: " यशोगाथा", en: " Success Story" },
    navSponsors: { mr: "प्रायोजकत्व", en: "Sponsorship" },
    navSponsorsShort: { mr: "प्रायोजक", en: "Sponsors" },
    language: { mr: "भाषा", en: "Language" },

    registerNow: { mr: "आत्ताच नोंदणी करा", en: "Register Now" },
    registrationOpen: { mr: "नोंदणी सुरू!", en: "Registrations open!" },
    viewDetails: { mr: "स्पर्धेची माहिती", en: "Tournament details" },
    countdownAuction: { mr: "खेळाडू लिलावासाठी उरलेला वेळ", en: "Countdown to the Player Auction" },
    countdownStart: { mr: "पहिल्या चेंडूसाठी उरलेला वेळ", en: "Countdown to the first ball" },
    countdownLive: { mr: "स्पर्धा सुरू आहे! 🏏", en: "The tournament is LIVE! 🏏" },
    countdownDone: { mr: "पर्व २ यशस्वी! सर्वांचे आभार 🙏", en: "Season 2 is complete — thank you! 🙏" },
    countdownTba: { mr: "तारीख लवकरच जाहीर होईल", en: "Date to be announced" },
    tournamentDates: { mr: "स्पर्धा", en: "Tournament" },
    days: { mr: "दिवस", en: "Days" },
    hours: { mr: "तास", en: "Hours" },
    minutes: { mr: "मिनिटे", en: "Mins" },
    seconds: { mr: "सेकंद", en: "Secs" },

    keyInfoEyebrow: { mr: "महत्त्वाची माहिती", en: "Key information" },
    keyInfoTitle: { mr: "पर्व २ एका नजरेत", en: "Season 2 at a glance" },

    prizesEyebrow: { mr: "बक्षिसे", en: "Prizes" },
    prizesTitle: { mr: "विजयासाठी भव्य बक्षिसे", en: "Play for glory & big prizes" },
    individualAwards: { mr: "वैयक्तिक पुरस्कार", en: "Individual awards" },
    winnerPrize: { mr: "विजेत्याला", en: "for the winner" },

    scheduleEyebrow: { mr: "वेळापत्रक", en: "Schedule" },
    scheduleTitle: { mr: "लिलाव आणि स्पर्धेचे वेळापत्रक", en: "Auction & tournament schedule" },
    auction: { mr: "खेळाडू लिलाव", en: "Player auction" },
    tournamentStart: { mr: "स्पर्धेची सुरुवात", en: "Tournament begins" },
    final: { mr: "अंतिम सामना", en: "Grand final" },
    venueTitle: { mr: "स्पर्धेचे ठिकाण", en: "Tournament venue" },
    openInMaps: { mr: "Google Maps मध्ये उघडा", en: "Open in Google Maps" },
    mapTitle: { mr: "स्पर्धेच्या ठिकाणाचा नकाशा", en: "Map of the tournament venue" },

    quotesEyebrow: { mr: "प्रेरणा", en: "Inspiration" },
    quotesTitle: { mr: "महात्मा फुले यांचे विचार", en: "Words of Mahatma Phule" },
    portraitCaption: { mr: "महात्मा ज्योतिराव फुले", en: "Mahatma Jyotirao Phule" },
    portraitYears: { mr: "१८२७ – १८९०", en: "1827 – 1890" },

    ctaTitle: { mr: "मैदान तुमची वाट पाहतंय!", en: "The field is waiting for you!" },
    ctaText: { mr: "पर्व २ साठी आत्ताच नोंदणी करा आणि या उत्सवाचा भाग बना.", en: "Register for Season 2 now and be part of the celebration." },

    contactEyebrow: { mr: "संपर्क", en: "Contact" },
    contactTitle: { mr: "आमच्याशी संपर्क साधा", en: "Get in touch" },
    callUs: { mr: "कॉल करा", en: "Call Us" },
    callUsText: { mr: "कोणत्याही प्रश्नासाठी थेट बोला", en: "Talk to us directly about anything" },
    whatsappUs: { mr: "WhatsApp करा", en: "WhatsApp Us" },
    whatsappText: { mr: "त्वरित उत्तरासाठी मेसेज पाठवा", en: "Send a message for a quick reply" },
    followInstagram: { mr: "Instagram वर फॉलो करा", en: "Follow on Instagram" },
    instagramText: { mr: "ताज्या अपडेट्स, फोटो आणि व्हिडिओ", en: "Latest updates, photos & videos" },
    chooseNumber: { mr: "कोणत्या नंबरवर कॉल करायचा?", en: "Which number would you like to call?" },
    call: { mr: "कॉल", en: "Call" },
    close: { mr: "बंद करा", en: "Close" },
    comingSoon: { mr: "ही लिंक लवकरच उपलब्ध होईल.", en: "This link will be available soon." },

    s1Title: { mr: "एका सुवर्ण पर्वाची यशोगाथा", en: "The story of a golden first season" },
    teamsEyebrow: { mr: "संघ आणि मालक", en: "Owners & teams" },
    teamsTitle: { mr: "पर्व १ चे शिलेदार", en: "The heroes of Season 1" },
    owner: { mr: "संघ मालक", en: "Team owner" },
    team: { mr: "संघ", en: "Team" },
    squad: { mr: "संघातील खेळाडू", en: "Squad" },
    playersUnit: { mr: "खेळाडू", en: "players" },
    squadSoon: { mr: "संघातील खेळाडूंची यादी लवकरच अपडेट होईल.", en: "The squad list will be updated soon." },
    resultsSoon: { mr: "पर्व १ चे अंतिम निकाल लवकरच अपडेट होतील.", en: "Season 1 final results will be updated soon." },
    logo: { mr: "लोगो", en: "logo" },

    standingsEyebrow: { mr: "निकाल", en: "Results" },
    standingsTitle: { mr: "अंतिम क्रमवारी", en: "Final standings" },
    champion: { mr: "विजेता", en: "Champions" },
    runnerUp: { mr: "उपविजेता", en: "Runner-up" },
    third: { mr: "तृतीय", en: "3rd place" },
    fourth: { mr: "चतुर्थ क्रमांक", en: "4th place" },

    awardsEyebrow: { mr: "सन्मान", en: "Honours" },
    awardsTitle: { mr: "खेळाडू पुरस्कार", en: "Player awards" },
    galleryEyebrow: { mr: "गॅलरी", en: "Gallery" },
    galleryTitle: { mr: "पर्व १ च्या आठवणी", en: "Season 1 moments" },

    prev: { mr: "मागील", en: "Previous" },
    next: { mr: "पुढील", en: "Next" },
    pause: { mr: "थांबवा", en: "Pause" },
    play: { mr: "सुरू करा", en: "Play" },
    slide: { mr: "स्लाइड", en: "Slide" },

    sponsorsEyebrow: { mr: "प्रायोजकत्व", en: "Sponsorship" },
    sponsorsTitle: { mr: "प्रायोजकत्वाच्या संधी", en: "Sponsorship Opportunities" },
    sponsorsText: {
      mr: "फुले क्रिकेट चषकासोबत भागीदारी करा आणि आपला ब्रँड खेळाडू, कुटुंबे, क्रिकेटप्रेमी आणि आमच्या ऑनलाइन समुदायापर्यंत पोहोचवा. आपल्या ब्रँडला साजेसा प्रायोजकत्व प्रकार निवडा.",
      en: "Partner with Phule Cricket Chashak and showcase your brand to players, families, cricket enthusiasts and our online community. Choose a sponsorship category that suits your brand.",
    },
    becomeSponsor: { mr: "प्रायोजक व्हा", en: "Become a Sponsor" },
    yourBrandHere: { mr: "तुमचा ब्रँड येथे", en: "Your Brand Here" },
    sponsorLogo: { mr: "प्रायोजक लोगो", en: "Sponsor logo" },
    assocTitle: { mr: "असोसिएट पार्टनर्स", en: "Associate Partners" },
    assocText: {
      mr: "मोलाच्या भागीदार परिवाराचा भाग व्हा आणि आपल्या परिसरातील तळागाळातील क्रिकेटला पाठबळ द्या.",
      en: "Be part of a valued partner network and support grassroots cricket in your community.",
    },
    sponsorContactTitle: { mr: "प्रायोजकत्वासाठी संपर्क", en: "Contact for Sponsorship" },
    sponsorContactText: {
      mr: "चला, एक दमदार भागीदारी उभारूया. उपलब्ध प्रायोजकत्व संधींबद्दल जाणून घेण्यासाठी आमच्याशी संपर्क साधा.",
      en: "Let's build a powerful partnership. Contact us to explore available sponsorship opportunities.",
    },
    sponsorContactNote: { mr: "प्रायोजकत्वाबद्दल चर्चा करण्यासाठी कॉल किंवा WhatsApp करा.", en: "Call or WhatsApp us to discuss sponsorship opportunities." },
    callNow: { mr: "आत्ताच कॉल करा", en: "Call Now" },
    whatsappEnquiry: { mr: "WhatsApp चौकशी", en: "WhatsApp Enquiry" },

    quickLinks: { mr: "दुवे", en: "Quick links" },
    contactHeading: { mr: "संपर्क", en: "Contact" },
    organizedBy: { mr: "आयोजक", en: "Organised by" },
    madeWith: { mr: "नाशिकमध्ये ❤️ ने बनवले", en: "Made with ❤️ in Nashik" },
    rights: { mr: "सर्व हक्क राखीव.", en: "All rights reserved." },
  },
};
