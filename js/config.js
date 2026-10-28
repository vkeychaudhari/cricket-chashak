/* =====================================================================
   SITE CONFIG — EDIT EVERYTHING HERE
   महात्मा जोतीराव फुले क्रिकेट चषक – पर्व ०२ - २०२७
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
    name: { mr: "महात्मा जोतीराव फुले क्रिकेट चषक", en: "Mahatma Jotirao Phule Cricket Chashak" },
    nameLine1: { mr: "महात्मा जोतीराव फुले", en: "Mahatma Jotirao Phule" },
    nameLine2: { mr: "क्रिकेट चषक", en: "Cricket Chashak" },
    shortName: { mr: "महात्मा जोतीराव फुले क्रिकेट चषक", en: "Mahatma Jotirao Phule Cricket Chashak" },
    season: { mr: "पर्व ०२ – २०२७", en: "Season 02 – 2027" },
    tagline: { mr: "समतेचा खेळ, एकतेचा उत्सव!", en: "A game of equality, a celebration of unity!" },
    logo: "images/theme/logo-header.webp", // small logo (header + footer). The big hero emblem is images/theme/logo-emblem-*.webp
    organizer: { mr: "", en: "" }, // optional – e.g. { mr: "आयोजक मंडळ, नाशिक", en: "Organising Committee, Nashik" }
  },

  /* ---------- Links ---------- */
  links: {
    registrationForm: "https://docs.google.com/forms/d/e/1FAIpQLScUfC_euI_HjzbfOx9DgTEDQSOH7WdnMllYwfx1VdtYy3a0bQ/viewform", // Google Form for registration
    instagram: "https://www.instagram.com/mahatma_jotirao_phule_cricket_/", // Instagram page
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
      // Prize money is not announced yet: amount: null hides it and shows "to be announced".
      // To publish, replace null with the amount in rupees (numbers only, no commas)
      team: [
        { place: 1, title: { mr: "विजेता", en: "Winner" }, amount: null, extra: { mr: "+ भव्य चषक", en: "+ Champions Trophy" } },
        { place: 2, title: { mr: "उपविजेता", en: "Runner-up" }, amount: null, extra: { mr: "+ चषक", en: "+ Trophy" } },
        { place: 3, title: { mr: "तृतीय क्रमांक", en: "3rd Place" }, amount: null, extra: { mr: "+ चषक", en: "+ Trophy" } },
        { place: 4, title: { mr: "चतुर्थ क्रमांक", en: "4th Place" }, amount: null, extra: { mr: "+ चषक", en: "+ Trophy" } },
      ],
      individual: [
        { icon: "bat", title: { mr: "सर्वोत्कृष्ट फलंदाज", en: "Best Batter" }, amount: null, extra: { mr: "+ चषक", en: "+ Trophy" } },
        { icon: "ball", title: { mr: "सर्वोत्कृष्ट गोलंदाज", en: "Best Bowler" }, amount: null, extra: { mr: "+ चषक", en: "+ Trophy" } },
        { icon: "medal", title: { mr: "सामनावीर (MOM)", en: "Man of the Match (MOM)" }, amount: null, extra: { mr: "प्रत्येक सामन्यासाठी", en: "For every match" } },
        { icon: "star", title: { mr: "मालिकावीर (MVP)", en: "MVP – Player of the Series" }, amount: null, extra: { mr: "+ चषक", en: "+ Trophy" } },
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
      startTime: "", // optional, e.g. { mr: "सकाळी ८ वाजल्यापासून", en: "From 8:00 AM" } — leave "" to hide
      final: "2027-01-10",
      finalTime: "",  // optional, same format as startTime
    },

    venue: {
      name: { mr: "क्रीडाधाम प्रीमियम मल्टीस्पोर्ट क्लब", en: "Kridadham Premium Multisport Club" },
      address: {
        mr: "जायभावे फार्म, गुरु गोविंद सिंग कॉलेजजवळ, इंदिरा नगर, नाशिक",
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
    portrait: "images/phule-portrait-v2.webp", // portrait for the quotes frame
  },

  /* =================================================================
     TAB 2 — SEASON 1 SUCCESS STORY (2026)
     ================================================================= */
  season1: {
    season: { mr: "पर्व ०१ – २०२६", en: "Season 01 – 2026" },

    // Poster shown first on the Season 1 tab (tap opens the full-size image). Set src: "" to hide it.
    poster: {
      src: "images/season1/s1-poster-1600.webp",
      small: "images/season1/s1-poster-800.webp", // phones load this one
      alt: { mr: "महात्मा जोतीराव फुले क्रिकेट चषक – पर्व १: प्रायोजक आणि संघ", en: "Mahatma Jotirao Phule Cricket Chashak – Season 1: sponsors and teams" },
    },

    /* Owner & Team slideshow — add / remove / edit teams here.
       id: short unique name (used by awards below)
       name: team name (teams without a confirmed name currently show the owner's brand)
       brand: optional – owner's business, shown under the owner's name
       logoBg: optional – logo plate colour for logos drawn on a dark background (e.g. "#000000")
       color: team colour (hex) – used for accents & logo placeholder
       ownerPhoto / logo: image paths (add the files to the images folder)
       players: list of names – plain "Name" or { mr: "नाव", en: "Name" }.
                Leave [] to show "squad list coming soon". */
    teams: [
      {
        id: "satyashodhak-lions", color: "#9C5A1A",
        name: { mr: "सत्यशोधक लायन्स", en: "Satyashodhak Lions" },
        owner: "Jaywant Jejurkar",
        brand: "Jay Shankar Group",
        ownerPhoto: "images/season1/owners/owner-08-jaywant-jejurkar.webp",
        logo: "images/season1/logos/team-08-satyashodhak-lions.webp",
        players: ["Shashi", "Vishal", "Kushal", "Nilesh", "Bhushan", "Vicky", "Prathmesh", "Rahul", "Gokul", "Mahesh", "Amol"],
      },
      {
        id: "jotirao-royals", color: "#A15C00",
        name: { mr: "जोतीराव रॉयल्स", en: "Jotirao Royals" },
        owner: "Ambadas Khaire",
        ownerPhoto: "images/season1/owners/owner-11-ambadas-khaire.webp",
        logo: "images/season1/logos/team-11-jotirao-royals.webp",
        players: ["Gaurav", "Shrikant", "KJ", "Rutik", "Aditya", "Vijay", "Prathm", "Chinmay", "Nitin", "Girish", "Vinayak", "Ajay"],
      },
      {
        id: "phule-panthers", color: "#8A6A2F",
        name: { mr: "फुले पँथर्स", en: "Phule Panthers" },
        owner: "Nagesh Kashmire",
        brand: "Kashmire Electricals",
        ownerPhoto: "images/season1/owners/owner-01-nagesh-kashmire.webp",
        logo: "images/season1/logos/team-01-phule-panthers.webp",
        players: ["Abhishek", "Gorakh", "BS", "Himanshu", "Kaivu", "Avdhoot", "Mangesh", "Andy", "Vikram", "SK", "Pratik"],
      },
      {
        id: "satyashodhak-titans", color: "#D84315",
        name: { mr: "सत्यशोधक टायटन्स", en: "Satyashodhak Titans" },
        owner: "Bhushan Shinde",
        brand: "Aaradhya Developers",
        ownerPhoto: "images/season1/owners/owner-02-bhushan-shinde.webp",
        logo: "images/season1/logos/team-02-satyashodhak-titans.webp",
        players: ["Umesh", "Ravi", "Roshan", "Ganesh", "Roshan", "Bhushan", "Yogesh", "Anklesh", "Omkar", "Pavan", "Vijay", "Yogesh"],
      },
      {
        id: "phule-power-hitters", color: "#C62828",
        name: { mr: "फुले पॉवर हीटर्स", en: "Phule Power Hitters" },
        owner: "Bhausaheb Mali & Sagar Mahajan",
        brand: "Mayur Enterprises",
        ownerPhoto: "images/season1/owners/owner-03-bhausaheb-mali-sagar-mahajan.webp",
        logo: "images/season1/logos/team-03-phule-power-hitters.webp",
        players: ["Shlok", "Vaibhav", "Atharva", "Pinu K.", "Amol", "Om", "Vedant", "Kunal", "Vedant", "Milan", "Yash", "Vaibhav"],
      },
      {
        id: "mahatma-phule-blasters", color: "#E64A19",
        name: { mr: "महात्मा फुले ब्लास्टर्स", en: "Mahatma Phule Blasters" },
        owner: "Kishan Mahajan & Tejas Vazare",
        brand: "The Suki Media & Vazcon Realty",
        ownerPhoto: "images/season1/owners/owner-04-kishan-mahajan-tejas-vazare.webp",
        logo: "images/season1/logos/team-04-mahatma-phule-blasters.webp",
        players: ["Kiran", "Yogesh", "Rohit", "Sahil", "Sharway", "Tanmay", "DK", "Pranav", "Sanket", "Sachinn", "Pratik"],
      },
      {
        id: "krantisurya-knight-riders", color: "#B26A00",
        name: { mr: "क्रांतिसुर्य नाईट रायडर्स", en: "Krantisurya Knight Riders" },
        owner: "Yogesh Sonnis",
        brand: "Logique Technologies",
        ownerPhoto: "images/season1/owners/owner-05-yogesh-sonnis.webp",
        logo: "images/season1/logos/team-05-krantisurya-knight-riders.webp",
        players: ["Saurabh", "Nil", "Vicky", "Geetesh", "Anna", "Avi", "Pavan", "Tanmay", "Saurabh", "Lucky", "Pankaj", "Amol"],
      },
      {
        id: "jotirao-strikers", color: "#2E7D32",
        name: { mr: "जोतीराव स्ट्राईकर्स", en: "Jotirao Strikers" },
        owner: "Pratik Jejurkar",
        brand: "CA India",
        ownerPhoto: "images/season1/owners/owner-06-pratik-jejurkar.webp",
        logo: "images/season1/logos/team-06-jotirao-strikers.webp",
        players: ["Saukhya", "Punarva", "Rohit", "Aniket", "Ram", "Pramod", "KK", "Yash", "Aditya", "Sarthak", "Tejas"],
      },
      {
        id: "jotirao-challengers", color: "#1565C0",
        name: { mr: "जोतीराव चॅलेंजर्स", en: "Jotirao Challengers" },
        owner: "Satish Gaikwad",
        brand: "Data Engineer",
        ownerPhoto: "images/season1/owners/owner-09-satish-gaikwad-v2.webp",
        logo: "images/season1/logos/team-09-jotirao-challengers.webp",
        logoBg: "#000000", // logo artwork has a black background
        players: ["Akki", "GG", "Appa", "Aadee", "Sahil", "Chiku", "Pahadi", "Vijay", "Pravin", "Yogesh", "Pranesh", "Digvijay"],
      },
      {
        id: "phule-supergiants", color: "#AD1457",
        name: { mr: "फुले सुपरजायंट्स", en: "Phule Supergiants" },
        owner: "Sanjay Mali",
        brand: "Mali Kitchens",
        ownerPhoto: "images/season1/owners/owner-10-sanjay-mali.webp",
        logo: "images/season1/logos/team-10-phule-supergiants.webp",
        players: ["Yash", "Tanmay", "Prasad", "Viju", "Saurabh", "Ajay", "Sanskar", "Ajay", "Suhas", "Rohit", "Kailas"],
      },
      {
        id: "kranti-warriors", color: "#9A2A1E",
        name: { mr: "क्रांति वॉरियर्स", en: "Kranti Warriors" },
        owner: "Nitin Mahajan",
        ownerPhoto: "images/season1/owners/owner-12-nitin-mahajan.webp",
        logo: "images/season1/logos/team-12-kranti-warriors.webp",
        players: ["Bhushan", "Bhushan", "Swapnil", "Harshal", "Jayesh", "Chetan", "Ravindra", "Sarwesh", "Hemant", "Bharat", "Manav", "Tejas"],
      },
    ],

    // Season 1 award winners. team = team id (or ""), stat = optional short stat line
    awards: [
      { icon: "bat", title: { mr: "सर्वोत्कृष्ट फलंदाज", en: "Best Batter" }, player: "Abhi Shirsath", team: "",
        photo: "images/season1/awards/abhi-shirsath.webp", stat: "" },
      { icon: "ball", title: { mr: "सर्वोत्कृष्ट गोलंदाज", en: "Best Bowler" }, player: "Yogesh Sonnis", team: "",
        photo: "images/season1/awards/yogesh-sonnis.webp", stat: "" },
      { icon: "hand", title: { mr: "सर्वोत्कृष्ट क्षेत्ररक्षक", en: "Best Fielder" }, player: "Vishal Khairnar", team: "",
        photo: "images/season1/awards/vishal-khairnar-fielder.webp", stat: "" },
      { icon: "star", title: { mr: "मालिकावीर (MVP)", en: "MVP" }, player: "Abhi Shirsath", team: "",
        photo: "images/season1/awards/abhi-shirsath.webp", stat: "" },
    ],

    // Photo gallery – add as many as you like
    // Photo gallery – add more photos to images/season1/gallery/ and list them here.
    gallery: [
      { src: "images/season1/gallery/s1-01-winner-team.webp", caption: { mr: "विजेता संघ", en: "Winner Team" } },
      { src: "images/season1/gallery/s1-02-runner-up-team.webp", caption: { mr: "उपविजेता संघ", en: "Runner-up Team" } },
      { src: "images/season1/gallery/s1-03-third-place-team.webp", caption: { mr: "तृतीय क्रमांक संघ", en: "3rd Place Team" } },
      { src: "images/season1/gallery/s1-04-fourth-place-team.webp", caption: { mr: "चतुर्थ क्रमांक संघ", en: "4th Place Team" } },
    ],

    // Season 1 sponsors — logo wall at the end of the Season 1 tab, shown in this order.
    // Add a sponsor: put the logo in images/season1/sponsors/ and add a line here.
    sponsors: [
      { name: "Jay Shankar Group", logo: "images/season1/sponsors/s1-sponsor-01-jay-shankar-group.webp" },
      { name: "Kashmire Electricals", logo: "images/season1/sponsors/s1-sponsor-02-kashmire-electricals.webp" },
      { name: "Logique Technologies", logo: "images/season1/sponsors/s1-sponsor-03-logique-technologies.webp" },
      { name: "The Suki Media", logo: "images/season1/sponsors/s1-sponsor-04-the-suki-media.webp" },
      { name: "Vazcon Realty", logo: "images/season1/sponsors/s1-sponsor-05-vazcon-realty.webp" },
      { name: "Mali Kitchens", logo: "images/season1/sponsors/s1-sponsor-06-mali-kitchens.webp" },
      { name: "Mayur Enterprises", logo: "images/season1/sponsors/s1-sponsor-07-mayur-enterprises.webp" },
      { name: { mr: "मधुशाम बिल्डकॉन", en: "Madhusham Buildcon" }, logo: "images/season1/sponsors/s1-sponsor-08-madhusham-buildcon.webp" },
      { name: "Aaradhya Developers", logo: "images/season1/sponsors/s1-sponsor-09-aaradhya-developers.webp" },
      { name: "KK Engineering Works", logo: "images/season1/sponsors/s1-sponsor-10-kk-engineering-works.webp" },
      { name: "Raka Sheth Mali Builders & Associates", logo: "images/season1/sponsors/s1-sponsor-11-raka-sheth-mali.webp" },
      { name: "Hotel Godavari – Shraddha Lawns", logo: "images/season1/sponsors/s1-sponsor-12-hotel-godavari.webp" },
      { name: { mr: "बुधा हलवाई जिलेबीवाले", en: "Budha Halwai Jilebiwale" }, logo: "images/season1/sponsors/s1-sponsor-13-budha-halwai.webp" },
      { name: "Carriall Bags & Luggage", logo: "images/season1/sponsors/s1-sponsor-14-carriall.webp" },
      { name: "Perfect Buildcon", logo: "images/season1/sponsors/s1-sponsor-15-perfect-buildcon.webp" },
      { name: "The Nasik Merchants Co-operative Bank Ltd.", logo: "images/season1/sponsors/s1-sponsor-16-nasik-merchants-bank.webp" },
      { name: { mr: "खैरनार जिलेबीवाले", en: "Khairnar Jilebiwale" }, logo: "images/season1/sponsors/s1-sponsor-17-khairnar-jilebiwale.webp" },
      { name: "Ashwamedh", logo: "images/season1/sponsors/s1-sponsor-18-ashwamedh.webp" },
      { name: "Amar Sound", logo: "images/season1/sponsors/s1-sponsor-19-amar-sound.webp" },
      { name: "Bolkar Builders and Developers – Shree Swami Samarth Construction", logo: "images/season1/sponsors/s1-sponsor-20-bolkar-builders.webp" },
      { name: { mr: "वेध न्यूज", en: "Vedh News" }, logo: "images/season1/sponsors/s1-sponsor-21-vedh-news.webp" },
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
    whatsappMessage: "Hello, I am interested in sponsorship opportunities for Mahatma Jotirao Phule Cricket Chashak.",
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
    prizeTba: { mr: "बक्षीस रक्कम लवकरच जाहीर होईल", en: "Prize money to be announced soon" },
    prizesNote: { mr: "विजेत्या संघांना आणि खेळाडूंना चषक. बक्षिसांची रक्कम लवकरच जाहीर केली जाईल.", en: "Trophies for the winning teams and players. Prize money will be announced soon." },

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
    portraitCaption: { mr: "महात्मा जोतीराव फुले", en: "Mahatma Jotirao Phule" },
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

    teamsEyebrow: { mr: "संघ आणि मालक", en: "Owners & teams" },
    teamsTitle: { mr: "पर्व १ चे शिलेदार", en: "The heroes of Season 1" },
    owner: { mr: "संघ मालक", en: "Team owner" },
    team: { mr: "संघ", en: "Team" },
    squad: { mr: "संघातील खेळाडू", en: "Squad" },
    playersUnit: { mr: "खेळाडू", en: "players" },
    squadSoon: { mr: "संघातील खेळाडूंची यादी लवकरच अपडेट होईल.", en: "The squad list will be updated soon." },
    logo: { mr: "लोगो", en: "logo" },


    awardsEyebrow: { mr: "सन्मान", en: "Honours" },
    awardsTitle: { mr: "खेळाडू पुरस्कार", en: "Player awards" },
    galleryEyebrow: { mr: "गॅलरी", en: "Gallery" },
    galleryTitle: { mr: "पर्व १ च्या आठवणी", en: "Season 1 moments" },
    s1SponsorsEyebrow: { mr: "आमचे भागीदार", en: "Our partners" },
    posterOpen: { mr: "पोस्टर मोठ्या आकारात पहा", en: "Open the full-size poster" },
    s1SponsorsTitle: { mr: "पर्व १ चे प्रायोजक", en: "Season 1 Sponsors" },
    s1SponsorsText: {
      mr: "पर्व १ यशस्वी करण्यासाठी पाठबळ दिल्याबद्दल आमच्या सर्व प्रायोजकांचे मनःपूर्वक आभार.",
      en: "Heartfelt thanks to all our sponsors for supporting Season 1 and making it a success.",
    },

    prev: { mr: "मागील", en: "Previous" },
    next: { mr: "पुढील", en: "Next" },
    pause: { mr: "थांबवा", en: "Pause" },
    play: { mr: "सुरू करा", en: "Play" },
    slide: { mr: "स्लाइड", en: "Slide" },

    sponsorsEyebrow: { mr: "प्रायोजकत्व", en: "Sponsorship" },
    sponsorsTitle: { mr: "प्रायोजकत्वाच्या संधी", en: "Sponsorship Opportunities" },
    sponsorsText: {
      mr: "महात्मा जोतीराव फुले क्रिकेट चषकासोबत भागीदारी करा आणि आपला ब्रँड खेळाडू, कुटुंबे, क्रिकेटप्रेमी आणि आमच्या ऑनलाइन समुदायापर्यंत पोहोचवा. आपल्या ब्रँडला साजेसा प्रायोजकत्व प्रकार निवडा.",
      en: "Partner with Mahatma Jotirao Phule Cricket Chashak and showcase your brand to players, families, cricket enthusiasts and our online community. Choose a sponsorship category that suits your brand.",
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
    rights: { mr: "सर्व हक्क राखीव.", en: "All rights reserved." },
  },
};
