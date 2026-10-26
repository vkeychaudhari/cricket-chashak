# महात्मा जोतीराव फुले क्रिकेट चषक – पर्व ०२ - २०२७

Website for the **Mahatma Jotirao Phule Cricket Chashak, Season 2 (2027)**. It's a bilingual (Marathi + English), mobile-first site with two tabs: **Season 2** and **Season 1 Success Story**.

Plain HTML, CSS and JavaScript. No build step, no installs, and it's free to host.

---

## 1. Preview it on your computer

- **Easiest:** double-click `index.html`. It opens in your browser.
- **Or** run a local server from this folder:
  ```bash
  python -m http.server 8080
  ```
  then open http://localhost:8080

---

## 2. Edit the content (only one file)

All the text, fees, dates, prizes, teams, players, quotes and links live in **`js/config.js`**. Open it in any text editor (Notepad works, VS Code is nicer).

| What | Where in `js/config.js` |
|---|---|
| **Google Form link** (Registration tab, Register buttons) | `links.registrationForm` |
| **Instagram page** | `links.instagram` |
| Phone numbers / WhatsApp number / message | `contact` |
| Owner fee, player fee, teams, players | `season2.keyInfo` |
| Prize amounts + individual awards | `season2.prizes` |
| Auction date/time/venue (the countdown uses this), start & final dates | `season2.schedule` |
| Venue name, address, map | `season2.venue` (and optional `links.mapEmbed`) |
| Mahatma Phule quotes | `season2.quotes` |
| **Season 1 teams, owners, players** (the slideshow) | `season1.teams` |
| Final standings (podium) | `season1.standings` |
| Player awards | `season1.awards` |
| Gallery photos and captions | `season1.gallery` |
| **Sponsorship cards, sponsor logos, sponsorship phone / WhatsApp message** | `sponsors` |
| Headings, button text | `labels` |

**Rules:**
- Text can be `"plain"` or bilingual: `{ mr: "मराठी", en: "English" }`.
- Every line marked `// DUMMY` holds placeholder data. Replace it with the real values.
- Dates use the `"YYYY-MM-DD"` format. The auction uses date + time: `"2026-12-20T18:00:00+05:30"`.
- **Auction date:** while `season2.schedule.auction.datetime` is `""`, the hero shows "Date to be announced" (तारीख लवकरच जाहीर होईल). Fill it in and the live countdown starts automatically.
- Keep the commas and quotes as they are. If the page goes blank after an edit, a comma or quote is usually missing.

### Adding a sponsor
1. Save the sponsor's logo in `images/sponsors/` (PNG/WebP with a transparent or white background, about 800×400, under 200 KB).
2. In `js/config.js` → `sponsors`, find the category and fill its `sponsor`:
   ```js
   sponsor: { logo: "images/sponsors/abc.png", name: "ABC Ltd", url: "https://abc.example" },
   ```
   `name` and `url` are optional (with a `url` the logo becomes a link). Associate partners are the `associates` list — add or remove entries freely.
3. Leave `logo: ""` to keep showing the "Your Brand Here" slot. If the logo file path is wrong, a labelled placeholder shows which file is missing.

### ⚠ Please check before publishing
- **Auction date/time/venue**: empty until announced (shows "Date to be announced").
- **Prize amounts**: hidden until announced (`amount: null` in `season2.prizes`).
- **Start/final timings**: dummy.
- **Quotes**: the first two are well-known lines from Phule's writings. The 3rd and 4th are popular attributions/paraphrases. Please verify the wording.
- **Season 1 final standings and gallery photos**: not added yet (teams, squads and award winners are real).

---

## 3. Add photos

Until a photo file exists, the site shows a **labelled placeholder that names the exact file it needs**. Copy your photo to that path and it appears. You don't need to change any code.

```
images/
├── theme/                        ← official logo + navy/gold theme artwork (already made, WebP)
│   ├── logo-emblem-600.webp / logo-emblem-1000.webp   ← big hero emblem
│   ├── logo-header.webp          ← small logo in header + footer
│   ├── stadium-mobile.webp / stadium-desktop.webp     ← hero stadium backgrounds
│   └── favicon-64.png, apple-touch-icon.png, particles.png, brush-strokes.svg, gold-divider.svg
├── phule-portrait.jpg            ← Mahatma Phule portrait (quotes section)
├── og-image.jpg                  ← WhatsApp preview picture (already made)
└── season1/
    ├── owners/team-1-owner.jpg … team-8-owner.jpg   ← owner photos (portrait, ~800×1000)
    ├── logos/team-1-logo.png  … team-8-logo.png     ← team logos (square, ~400×400)
    ├── awards/best-batter.jpg, best-bowler.jpg, best-fielder.jpg, mvp.jpg
    └── gallery/photo-01.jpg … photo-12.jpg          ← match photos (landscape, ~1200×800)
```

Tips:
- Keep photos small for fast loading on mobile: **under 300 KB each** (use https://squoosh.app to compress).
- To use a different file name or format (e.g. `.png`), change the path in `js/config.js`.
- To swap the logo, replace the files in `images/theme/` with the same names (WebP, transparent background), or change `tournament.logo` in `js/config.js` (header/footer) and the hero `<img>` paths in `index.html`.
- Theme colours and fonts are at the top of `css/style.css` (`:root`). Fonts: Barlow Condensed (headlines), Inter (text), Noto Sans Devanagari (Marathi).
- To add more teams or gallery photos, copy one block in `js/config.js` and edit it.

---

## 4. Host it for free

### Option A: Netlify Drop (easiest, no account setup needed beyond sign-up)
1. Go to **https://app.netlify.com/drop** and sign in.
2. Drag the whole **`CricketLeagueWebsite`** folder onto the page.
3. You get a link like `https://random-name.netlify.app`. To rename it, go to **Site configuration → Change site name** (e.g. `phule-chashak.netlify.app`).
4. To update the site later, open the site → **Deploys** → drag the folder again.

### Option B: GitHub Pages
1. Create a new public repository on https://github.com (e.g. `phule-chashak`).
2. **Add file → Upload files** → drag in everything inside this folder → **Commit**.
3. Go to **Settings → Pages → Source: Deploy from a branch → `main` / `(root)` → Save**.
4. After about a minute the site is live at `https://<username>.github.io/phule-chashak/`.

### Option C: Vercel
1. Put the files on GitHub (steps 1–2 above).
2. Go to https://vercel.com → **Add New → Project** → import the repository.
3. Set Framework Preset to **Other**, then click **Deploy**.

### After hosting: make the WhatsApp preview work
`index.html` is already set to the GitHub Pages address **https://vkeychaudhari.github.io/cricket-chashak/** (`canonical`, `og:url`, `og:image`). If you host somewhere else or add a custom domain, replace that address in those 3 places and upload again.

WhatsApp caches link previews. If an old preview shows up, share the link with `?v=2` at the end.

**After any update:** in `index.html`, change `?v=1` to `?v=2` on the `style.css`, `config.js` and `app.js` lines so visitors' phones load the new version instead of a cached copy.

---

## 5. Regenerate the share image (optional)

`images/og-image.jpg` (1200×630) is made from `tools/og-image.html`. To change it, edit that file, open it in Chrome, and take a 1200×630 screenshot. Or run this (Windows, Edge):

```bash
"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" --headless=new --hide-scrollbars --window-size=1200,630 --virtual-time-budget=10000 --screenshot="og.png" "file:///E:/ClaudeDemo/CricketLeagueWebsite/tools/og-image.html"
```

Then save it as JPG (under 300 KB) at `images/og-image.jpg`.

---

## Files

```
index.html        page structure + Open Graph tags
css/style.css     all styling (colours/fonts at the top in :root)
js/config.js      ← ALL editable content
js/app.js         behaviour: tabs, language toggle, countdown, slideshows, lightbox
images/           logo, icons, share image, your photos
tools/            share-image template (not needed by the live site)
```
