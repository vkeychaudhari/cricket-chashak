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
    logo: "images/logo.svg", // replace with your official logo (png/svg/jpg)
    organizer: { mr: "", en: "" }, // optional – e.g. { mr: "आयोजक मंडळ, नाशिक", en: "Organising Committee, Nashik" }
  },

  /* ---------- Links ---------- */
  links: {
    registrationForm: "", // PASTE GOOGLE FORM LINK here, e.g. "https://forms.gle/AbCdEf123"
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
        datetime: "2026-12-20T18:00:00+05:30", // DUMMY – auction date & time (countdown counts to this)
        venue: { mr: "क्रीडाधाम प्रीमियम मल्टीस्पोर्ट क्लब, नाशिक", en: "Kridadham Premium Multisport Club, Nashik" }, // DUMMY
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
        mr: "२०२६ मध्ये नाशिकच्या मातीत एका नव्या क्रिकेट परंपरेचा जन्म झाला. महात्मा ज्योतिराव फुले क्रिकेट चषकाच्या पहिल्या पर्वात ८ संघ आणि ८० खेळाडू मैदानात उतरले आणि प्रेक्षकांच्या उदंड प्रतिसादात समता, बंधुता आणि खिलाडूवृत्तीचा खरा उत्सव साजरा झाला.",
        en: "In 2026, a new cricket tradition was born on the grounds of Nashik. The first season of the Mahatma Jyotirao Phule Cricket Chashak brought 8 teams and 80 players onto the field, cheered on by passionate crowds, in a true celebration of equality, brotherhood and sportsmanship.",
      },
      {
        mr: "प्रत्येक चौकार, प्रत्येक बळी आणि प्रत्येक झेलाने एकच संदेश दिला — मैदानात सगळे समान! पहिल्या पर्वाच्या या सुवर्ण आठवणी आता पर्व २ साठी नवी प्रेरणा आहेत.",
        en: "Every boundary, every wicket and every catch carried one message — on the field, everyone is equal! The golden memories of Season 1 are now the inspiration for Season 2.",
      },
    ],

    highlights: [ // DUMMY numbers
      { value: 8, label: { mr: "संघ", en: "Teams" } },
      { value: 80, label: { mr: "खेळाडू", en: "Players" } },
      { value: 15, label: { mr: "सामने", en: "Matches" } },
      { value: 120, suffix: "+", label: { mr: "षटकार", en: "Sixes" } },
    ],

    /* Owner & Team slideshow — add / remove / edit teams here.
       id: short unique name (used by standings & awards below)
       color: team colour (hex) – used for accents & logo placeholder
       ownerPhoto / logo: image paths (add the files to the images folder)
       players: list of names – plain "Name" or { mr: "नाव", en: "Name" } */
    teams: [ // DUMMY teams, owners & players
      {
        id: "nashik-kings", color: "#c8960c",
        name: { mr: "नाशिक किंग्ज", en: "Nashik Kings" },
        owner: { mr: "राहुल पाटील", en: "Rahul Patil" },
        ownerPhoto: "images/season1/owners/team-1-owner.jpg",
        logo: "images/season1/logos/team-1-logo.png",
        players: ["Akash Pawar (C)", "Rohit Deshmukh", "Sagar Kale", "Vishal More", "Ganesh Bhosale", "Pranav Joshi", "Kunal Wagh", "Siddharth Gaikwad", "Omkar Jadhav", "Tejas Shinde"],
      },
      {
        id: "godavari-warriors", color: "#0284c7",
        name: { mr: "गोदावरी वॉरियर्स", en: "Godavari Warriors" },
        owner: { mr: "सचिन जाधव", en: "Sachin Jadhav" },
        ownerPhoto: "images/season1/owners/team-2-owner.jpg",
        logo: "images/season1/logos/team-2-logo.png",
        players: ["Aniket Sonawane (C)", "Mayur Thakare", "Nikhil Borse", "Yogesh Ahire", "Shubham Nikam", "Prathamesh Kulkarni", "Rushikesh Patil", "Harshal Deore", "Amit Sali", "Vaibhav Khairnar"],
      },
      {
        id: "panchavati-panthers", color: "#dc2626",
        name: { mr: "पंचवटी पँथर्स", en: "Panchavati Panthers" },
        owner: { mr: "अमोल शिंदे", en: "Amol Shinde" },
        ownerPhoto: "images/season1/owners/team-3-owner.jpg",
        logo: "images/season1/logos/team-3-logo.png",
        players: ["Swapnil Gite (C)", "Dinesh Sangle", "Saurabh Chavan", "Akshay Mali", "Rahul Darade", "Kiran Bagul", "Mangesh Kadam", "Ajinkya Pathare", "Suraj Bhamre", "Nilesh Ghuge"],
      },
      {
        id: "trimbak-titans", color: "#16a34a",
        name: { mr: "त्र्यंबक टायटन्स", en: "Trimbak Titans" },
        owner: { mr: "विकास गायकवाड", en: "Vikas Gaikwad" },
        ownerPhoto: "images/season1/owners/team-4-owner.jpg",
        logo: "images/season1/logos/team-4-logo.png",
        players: ["Pankaj Hire (C)", "Sandeep Jagtap", "Ravi Kshirsagar", "Abhishek Mahajan", "Ketan Suryawanshi", "Lalit Pagar", "Bhushan Avhad", "Hemant Wagh", "Datta Kothawade", "Sumit Bachhav"],
      },
      {
        id: "indiranagar-strikers", color: "#ea580c",
        name: { mr: "इंदिरानगर स्ट्रायकर्स", en: "Indira Nagar Strikers" },
        owner: { mr: "संतोष भालेराव", en: "Santosh Bhalerao" },
        ownerPhoto: "images/season1/owners/team-5-owner.jpg",
        logo: "images/season1/logos/team-5-logo.png",
        players: ["Gaurav Sonar (C)", "Vikram Dhage", "Ashish Pingle", "Tushar Mhaske", "Prasad Kokate", "Chetan Lokhande", "Atul Nagare", "Jayesh Kute", "Manoj Wakchaure", "Shrikant Dalvi"],
      },
      {
        id: "satpur-giants", color: "#4f46e5",
        name: { mr: "सातपूर सुपर जायंट्स", en: "Satpur Super Giants" },
        owner: { mr: "प्रवीण काळे", en: "Pravin Kale" },
        ownerPhoto: "images/season1/owners/team-6-owner.jpg",
        logo: "images/season1/logos/team-6-logo.png",
        players: ["Rajesh Bhagat (C)", "Sanket Gholap", "Umesh Tidke", "Rohan Lahamge", "Sachin Kasar", "Vinod Rokade", "Kailas Gangurde", "Deepak Shirsath", "Tanmay Ugale", "Ashok Bodke"],
      },
      {
        id: "deolali-daredevils", color: "#db2777",
        name: { mr: "देवळाली डेअरडेव्हिल्स", en: "Deolali Daredevils" },
        owner: { mr: "नितीन पवार", en: "Nitin Pawar" },
        ownerPhoto: "images/season1/owners/team-7-owner.jpg",
        logo: "images/season1/logos/team-7-logo.png",
        players: ["Mahendra Kshatriya (C)", "Ajay Mundhe", "Shekhar Jondhale", "Kapil Pagare", "Nitesh Barde", "Pratik Chaudhari", "Sunil Mogal", "Hrishikesh Dongre", "Yash Ghodke", "Balaji Shelke"],
      },
      {
        id: "sinnar-sixers", color: "#0d9488",
        name: { mr: "सिन्नर सिक्सर्स", en: "Sinnar Sixers" },
        owner: { mr: "महेश साळवे", en: "Mahesh Salve" },
        ownerPhoto: "images/season1/owners/team-8-owner.jpg",
        logo: "images/season1/logos/team-8-logo.png",
        players: ["Ravindra Sangale (C)", "Ganesh Wable", "Rupesh Dighe", "Kishor Hande", "Vijay Bhor", "Sahil Gunjal", "Pavan Kakad", "Dnyaneshwar Shelar", "Aditya Varpe", "Mohan Thete"],
      },
    ],

    // Final standings – use the team "id" from the list above
    standings: { // DUMMY
      winner: "nashik-kings",
      runnerUp: "panchavati-panthers",
      third: "godavari-warriors",
      fourth: "trimbak-titans",
    },

    // Player awards – team = team "id"; stat line is free text
    awards: [ // DUMMY
      { icon: "bat", title: { mr: "सर्वोत्कृष्ट फलंदाज", en: "Best Batter" }, player: "Akash Pawar", team: "nashik-kings",
        photo: "images/season1/awards/best-batter.jpg", stat: { mr: "५ सामने · २४८ धावा · स्ट्राइक रेट १८२", en: "5 matches · 248 runs · SR 182" } },
      { icon: "ball", title: { mr: "सर्वोत्कृष्ट गोलंदाज", en: "Best Bowler" }, player: "Swapnil Gite", team: "panchavati-panthers",
        photo: "images/season1/awards/best-bowler.jpg", stat: { mr: "१४ बळी · इकॉनॉमी ६.२ · सर्वोत्तम ४/१२", en: "14 wickets · Econ 6.2 · Best 4/12" } },
      { icon: "hand", title: { mr: "सर्वोत्कृष्ट क्षेत्ररक्षक", en: "Best Fielder" }, player: "Aniket Sonawane", team: "godavari-warriors",
        photo: "images/season1/awards/best-fielder.jpg", stat: { mr: "९ झेल · ३ धावबाद", en: "9 catches · 3 run-outs" } },
      { icon: "star", title: { mr: "मालिकावीर (MVP)", en: "MVP" }, player: "Pankaj Hire", team: "trimbak-titans",
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
     UI TEXT (headings, buttons, labels)
     ================================================================= */
  labels: {
    skip: { mr: "मुख्य मजकुराकडे जा", en: "Skip to content" },
    navSeason2: { mr: "पर्व २", en: "Season 2" },
    navRegister: { mr: "नोंदणी", en: "Registration" },
    navSeason1: { mr: "पर्व १", en: "Season 1" },
    navSeason1Suffix: { mr: " यशोगाथा", en: " Success Story" },
    language: { mr: "भाषा", en: "Language" },

    registerNow: { mr: "आत्ताच नोंदणी करा", en: "Register Now" },
    registrationOpen: { mr: "नोंदणी सुरू!", en: "Registrations open!" },
    viewDetails: { mr: "स्पर्धेची माहिती", en: "Tournament details" },
    countdownAuction: { mr: "खेळाडू लिलावासाठी उरलेला वेळ", en: "Countdown to the Player Auction" },
    countdownStart: { mr: "पहिल्या चेंडूसाठी उरलेला वेळ", en: "Countdown to the first ball" },
    countdownLive: { mr: "स्पर्धा सुरू आहे! 🏏", en: "The tournament is LIVE! 🏏" },
    countdownDone: { mr: "पर्व २ यशस्वी! सर्वांचे आभार 🙏", en: "Season 2 is complete — thank you! 🙏" },
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

    quickLinks: { mr: "दुवे", en: "Quick links" },
    contactHeading: { mr: "संपर्क", en: "Contact" },
    organizedBy: { mr: "आयोजक", en: "Organised by" },
    madeWith: { mr: "नाशिकमध्ये ❤️ ने बनवले", en: "Made with ❤️ in Nashik" },
    rights: { mr: "सर्व हक्क राखीव.", en: "All rights reserved." },
  },
};
