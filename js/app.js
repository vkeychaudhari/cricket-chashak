/* =====================================================================
   Mahatma Jyotirao Phule Cricket Chashak — site script
   All content comes from js/config.js (window.SITE_CONFIG).
   ===================================================================== */
(function () {
  'use strict';

  const C = window.SITE_CONFIG;
  if (!C) { console.error('SITE_CONFIG missing – check js/config.js'); return; }

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const LOCALE = { mr: 'mr-IN', en: 'en-IN' };
  let lang = 'mr';

  /* ---------- text helpers ---------- */
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const isBi = (v) => v != null && typeof v === 'object' && !Array.isArray(v);
  const pick = (v, l = lang) => (isBi(v) ? (v[l] || v.en || v.mr || '') : (v == null ? '' : String(v)));
  const both = (fn) => ({ mr: fn('mr'), en: fn('en') });
  const label = (k) => (C.labels[k] != null ? C.labels[k] : k);

  // bilingual value -> HTML (two spans, CSS shows the active language)
  const T = (v) => {
    if (!isBi(v)) return esc(v);
    const mr = pick(v, 'mr'), en = pick(v, 'en');
    return mr === en ? esc(mr) : `<span class="l-mr" lang="mr">${esc(mr)}</span><span class="l-en" lang="en">${esc(en)}</span>`;
  };
  const L = (k) => T(label(k));
  // bilingual attribute (kept in sync on language switch)
  const A = (name, v) => `${name}="${esc(pick(v))}" data-${name}-mr="${esc(pick(v, 'mr'))}" data-${name}-en="${esc(pick(v, 'en'))}"`;

  const DEVA = '०१२३४५६७८९';
  const digits = (s, l) => (l === 'mr' ? String(s).replace(/[0-9]/g, (d) => DEVA[d]) : String(s));
  const group = (n) => new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(n);
  const num = (n, l) => digits(group(n), l);
  const N = (n) => T(both((l) => num(n, l)));
  const CN = (n) => ['mr', 'en'].map((l) => `<span class="l-${l}" lang="${l}" data-count="${n}">${num(n, l)}</span>`).join('');
  const rupee = (n) => T(both((l) => `₹${num(n, l)}`));

  const toDate = (s) => new Date(/^\d{4}-\d{2}-\d{2}$/.test(s) ? `${s}T00:00:00+05:30` : s);
  const fmtDate = (s, l, opts) => digits(new Intl.DateTimeFormat(LOCALE[l], Object.assign({ timeZone: 'Asia/Kolkata' }, opts)).format(toDate(s)), l);
  const D = (s, opts) => T(both((l) => fmtDate(s, l, opts)));

  const icon = (name, cls) => `<svg class="i${cls ? ' ' + cls : ''}" aria-hidden="true"><use href="#i-${name}"></use></svg>`;
  const initials = (t) => pick(t.name, 'en').split(/\s+/).filter(Boolean).map((w) => w[0]).join('').slice(0, 3).toUpperCase();
  const teamById = Object.fromEntries((C.season1.teams || []).map((t) => [t.id, t]));

  /* ---------- labelled placeholder images ---------- */
  const PH = [];
  function phSrc(p) {
    const xml = esc;
    let svg;
    if (p.kind === 'logo') {
      const c = p.color || '#167045';
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><defs><radialGradient id="a" cx=".3" cy=".25" r=".95"><stop offset="0" stop-color="#fff" stop-opacity=".35"/><stop offset=".5" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><rect width="400" height="400" fill="${c}"/><rect width="400" height="400" fill="url(#a)"/><circle cx="200" cy="200" r="165" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="6" stroke-dasharray="14 10"/><text x="200" y="228" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-weight="800" font-size="${(p.initials || '').length > 2 ? 104 : 128}" fill="#fff">${xml(p.initials || '?')}</text><text x="200" y="292" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-weight="700" font-size="30" letter-spacing="6" fill="#fff" fill-opacity=".85">LOGO</text></svg>`;
    } else {
      const W = p.w || 800, H = p.h || 1000, c = p.color || '#167045';
      const cx = W / 2, iy = H * 0.34, r = Math.min(W, H) * 0.17, sw = W * 0.012;
      const fs = Math.round(W * 0.042);
      const art = p.kind === 'person'
        ? `<circle cx="${cx}" cy="${iy - r * 0.3}" r="${r * 0.6}" fill="#fff" fill-opacity=".22"/><path d="M${cx - r * 1.2} ${iy + r * 1.35}a${r * 1.2} ${r * 1.05} 0 0 1 ${r * 2.4} 0z" fill="#fff" fill-opacity=".22"/>`
        : `<rect x="${cx - r}" y="${iy - r * 0.6}" width="${r * 2}" height="${r * 1.4}" rx="${r * 0.25}" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="${sw}"/><circle cx="${cx}" cy="${iy + r * 0.1}" r="${r * 0.38}" fill="none" stroke="#fff" stroke-opacity=".35" stroke-width="${sw}"/><rect x="${cx - r * 0.35}" y="${iy - r * 0.85}" width="${r * 0.7}" height="${r * 0.25}" rx="${r * 0.08}" fill="#fff" fill-opacity=".35"/>`;
      const ty = H * 0.68;
      svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}"><defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c}"/><stop offset="1" stop-color="#03190f"/></linearGradient><pattern id="p" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M0 36L36 0" stroke="#fff" stroke-opacity=".05" stroke-width="2"/></pattern></defs><rect width="${W}" height="${H}" fill="url(#a)"/><rect width="${W}" height="${H}" fill="url(#p)"/>${art}<rect x="${W * 0.07}" y="${ty - fs * 1.7}" width="${W * 0.86}" height="${fs * 5.3}" rx="${fs * 0.6}" fill="#000" fill-opacity=".3" stroke="#f2c14e" stroke-opacity=".7" stroke-width="2" stroke-dasharray="10 7"/><text x="${cx}" y="${ty}" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-weight="700" font-size="${fs}" fill="#fff">${xml(p.label)}</text><text x="${cx}" y="${ty + fs * 1.45}" text-anchor="middle" font-family="Segoe UI,Arial,sans-serif" font-weight="700" letter-spacing="3" font-size="${fs * 0.62}" fill="#f2c14e">REPLACE WITH FILE</text><text x="${cx}" y="${ty + fs * 2.65}" text-anchor="middle" font-family="Consolas,Menlo,monospace" font-size="${fs * 0.62}" fill="#fff" fill-opacity=".9">${xml(p.path || '')}</text></svg>`;
    }
    return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  }
  function img(src, ph, opts) {
    const o = opts || {};
    const id = PH.push(Object.assign({ path: src }, ph)) - 1;
    const s = src || phSrc(PH[id]);
    return `<img src="${esc(s)}" data-ph="${id}" ${A('alt', o.alt || '')} loading="${o.eager ? 'eager' : 'lazy'}" decoding="async"${o.cls ? ` class="${o.cls}"` : ''}>`;
  }
  // missing photo -> swap in the labelled placeholder
  document.addEventListener('error', (e) => {
    const t = e.target;
    if (t && t.tagName === 'IMG' && t.dataset.ph && !t.dataset.phDone) {
      t.dataset.phDone = '1';
      t.classList.add('is-ph');
      t.src = phSrc(PH[+t.dataset.ph]);
    }
  }, true);

  /* ---------- links ---------- */
  const isPlaceholderUrl = (u) => !u || /YOUR|PASTE|REPLACE|xxxx/i.test(u);
  const cc = C.contact.countryCode || '91';
  const phones = C.contact.phones || [];
  const telHref = (n) => `tel:+${cc}${n}`;
  const fmtPhone = (n) => (n.length === 10 ? `+${cc} ${n.slice(0, 5)} ${n.slice(5)}` : n);
  const waHref = `https://wa.me/${cc}${C.contact.whatsapp}?text=${encodeURIComponent(C.contact.whatsappMessage || '')}`;
  const venue = C.season2.venue;
  const mapEmbed = C.links.mapEmbed || `https://maps.google.com/maps?q=${encodeURIComponent(venue.mapQuery)}&z=15&output=embed`;
  const mapLink = C.links.mapLink || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(venue.mapQuery)}`;

  /* =================================================================
     LANGUAGE
     ================================================================= */
  function initLang() {
    let saved = null;
    try { saved = localStorage.getItem('mjpcc-lang'); } catch (e) { /* storage blocked */ }
    const fromUrl = new URLSearchParams(location.search).get('lang');
    lang = [fromUrl, saved, C.defaultLanguage, 'mr'].find((l) => l === 'mr' || l === 'en');
    document.documentElement.lang = lang;
  }
  function setLang(l) {
    lang = l;
    document.documentElement.lang = l;
    try { localStorage.setItem('mjpcc-lang', l); } catch (e) { /* storage blocked */ }
    $$('[data-lang-btn]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.langBtn === l)));
    ['alt', 'aria-label', 'title'].forEach((a) => {
      $$(`[data-${a}-${l}]`).forEach((el) => el.setAttribute(a, el.getAttribute(`data-${a}-${l}`)));
    });
    document.title = `${pick(C.tournament.name)} – ${pick(C.tournament.season)}`;
    tickCountdown();
  }

  /* =================================================================
     STATIC LABELS  (data-t="key" | data-t="@tournamentField")
     ================================================================= */
  function fillStatic() {
    $$('[data-t]').forEach((el) => {
      const k = el.dataset.t;
      el.innerHTML = T(k[0] === '@' ? C.tournament[k.slice(1)] : label(k));
    });
    $$('[data-t-aria]').forEach((el) => {
      const v = label(el.dataset.tAria);
      el.setAttribute('aria-label', pick(v));
      el.setAttribute('data-aria-label-mr', pick(v, 'mr'));
      el.setAttribute('data-aria-label-en', pick(v, 'en'));
    });
    $$('[data-logo]').forEach((el) => { if (C.tournament.logo) el.src = C.tournament.logo; });
    $('#year').innerHTML = T(both((l) => digits(new Date().getFullYear(), l)));
    const org = C.tournament.organizer;
    if (org && pick(org)) {
      const el = $('#ftrOrg');
      el.innerHTML = `${L('organizedBy')}: ${T(org)}`;
      el.hidden = false;
    }
  }

  /* =================================================================
     TAB 1 — SEASON 2
     ================================================================= */
  let cdKey = null;
  function tickCountdown() {
    const box = $('#countdown');
    if (!box) return;
    const s = C.season2.schedule;
    const now = Date.now();
    const next = [
      { at: toDate(s.auction.datetime), key: 'countdownAuction', icon: 'gavel' },
      { at: toDate(s.tournamentStart), key: 'countdownStart', icon: 'ball' },
    ].find((t) => t.at.getTime() > now);

    if (next) {
      box.dataset.state = 'running';
      if (cdKey !== next.key) {
        cdKey = next.key;
        $('.cd__label', box).innerHTML = icon(next.icon) + `<span>${L(next.key)}</span>`;
      }
      let sec = Math.floor((next.at.getTime() - now) / 1000);
      const parts = [Math.floor(sec / 86400), Math.floor((sec %= 86400) / 3600), Math.floor((sec %= 3600) / 60), sec % 60];
      $$('.cd__num', box).forEach((el, i) => { el.textContent = digits(String(parts[i]).padStart(2, '0'), lang); });
    } else {
      box.dataset.state = 'done';
      const finalEnd = toDate(s.final).getTime() + 86400000;
      $('.cd__msg', box).innerHTML = L(now < finalEnd ? 'countdownLive' : 'countdownDone');
    }
  }

  function renderTicker() {
    const s2 = C.season2, s = s2.schedule;
    const teams = s2.keyInfo.find((k) => k.icon === 'shield');
    const players = s2.keyInfo.find((k) => k.icon === 'users');
    const win = s2.prizes.team[0];
    const items = [
      C.tournament.badge,
      teams && both((l) => `${num(teams.value, l)} ${pick(teams.unit, l)}`),
      players && both((l) => `${num(players.value, l)} ${pick(players.unit, l)}`),
      both((l) => `${fmtDate(s.tournamentStart, l, { day: 'numeric' })} – ${fmtDate(s.final, l, { day: 'numeric', month: 'long', year: 'numeric' })}`),
      venue.city,
      win && both((l) => `${pick(win.title, l)} – ₹${num(win.amount, l)}`),
      label('registrationOpen'),
      C.tournament.tagline,
    ].filter(Boolean);
    const run = items.map((v, i) => `<span class="ticker__item">${T(v)}${icon(i % 2 ? 'star' : 'ball')}</span>`).join('');
    $('#ticker').innerHTML = run + run;
  }

  function renderKeyInfo() {
    $('#keyInfo').innerHTML = C.season2.keyInfo.map((k, i) => `
      <article class="stat spot reveal" style="--d:${i * 0.08}s">
        ${icon(k.icon, 'stat__bg')}
        <div class="stat__icon">${icon(k.icon)}</div>
        <div>
          <p class="stat__num" data-countup>${k.prefix ? `<span class="stat__aff">${esc(k.prefix)}</span>` : ''}<span>${CN(k.value)}</span>${k.suffix ? `<span class="stat__aff">${esc(k.suffix)}</span>` : ''}${k.unit ? `<span class="stat__unit">${T(k.unit)}</span>` : ''}</p>
          <h3 class="stat__label">${T(k.label)}</h3>
          ${k.note ? `<p class="stat__note">${T(k.note)}</p>` : ''}
        </div>
      </article>`).join('');
  }

  function renderPrizes() {
    const [win, ...rest] = C.season2.prizes.team;
    $('#teamPrizes').innerHTML = `
      <article class="prize-win reveal">
        <div class="prize-win__in">
          <svg class="prize-win__trophy" viewBox="0 0 64 64" aria-hidden="true"><use href="#i-trophy-fill"></use></svg>
          <p class="prize-win__place">${T(win.title)}</p>
          <p class="prize-win__amt gold-text" data-countup>₹${CN(win.amount)}</p>
          ${win.extra ? `<p class="prize-win__extra">${T(win.extra)}</p>` : ''}
        </div>
      </article>
      <div class="prize-list">
        ${rest.map((p, i) => `
          <article class="prize spot reveal" style="--d:${(i + 1) * 0.08}s">
            <span class="medal medal--${p.place}">${N(p.place)}</span>
            <div class="prize__body">
              <h3 class="prize__title">${T(p.title)}</h3>
              ${p.extra ? `<p class="prize__extra">${T(p.extra)}</p>` : ''}
            </div>
            <p class="prize__amt">${p.amount ? rupee(p.amount) : ''}</p>
          </article>`).join('')}
      </div>`;

    $('#individualPrizes').innerHTML = C.season2.prizes.individual.map((a, i) => `
      <article class="ind__card spot reveal" style="--d:${i * 0.08}s">
        <div class="ind__icon">${icon(a.icon)}</div>
        <h4 class="ind__title">${T(a.title)}</h4>
        ${a.amount ? `<p class="ind__prize">${rupee(a.amount)}</p>` : ''}
        ${a.extra ? `<p class="ind__extra">${T(a.extra)}</p>` : ''}
      </article>`).join('');
  }

  function renderSchedule() {
    const s = C.season2.schedule;
    const dateOpts = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const timeOf = (iso) => both((l) => {
      if (l === 'en') return fmtDate(iso, 'en', { hour: 'numeric', minute: '2-digit', hour12: true }).toUpperCase();
      const [h, m] = fmtDate(iso, 'en', { hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }).split(':').map(Number);
      const part = h >= 4 && h < 12 ? 'सकाळी' : h >= 12 && h < 16 ? 'दुपारी' : h >= 16 && h < 20 ? 'सायंकाळी' : 'रात्री';
      return `${part} ${digits(`${h % 12 || 12}:${String(m).padStart(2, '0')}`, 'mr')} वाजता`;
    });
    const items = [
      { key: 'auction', ic: 'gavel', date: s.auction.datetime, time: timeOf(s.auction.datetime), place: s.auction.venue },
      { key: 'tournamentStart', ic: 'flag', date: s.tournamentStart, time: s.startTime, place: venue.name },
      { key: 'final', ic: 'trophy', date: s.final, time: s.finalTime, place: venue.name, cls: 'tl--final' },
    ];
    $('#timeline').innerHTML = items.map((it, i) => `
      <li class="tl reveal ${it.cls || ''}" style="--d:${i * 0.1}s">
        <span class="tl__node">${icon(it.ic)}</span>
        <p class="tl__tag">${L(it.key)}</p>
        <p class="tl__date">${D(it.date, dateOpts)}</p>
        <div class="tl__meta">
          ${it.time && pick(it.time) ? `<span>${icon('clock')}${T(it.time)}</span>` : ''}
          ${it.place ? `<span>${icon('pin')}${T(it.place)}</span>` : ''}
        </div>
      </li>`).join('');

    $('#venue').innerHTML = `
      <div class="venue__info">
        <span class="eyebrow">${L('venueTitle')}</span>
        <h3 class="venue__name">${T(venue.name)}</h3>
        <p class="venue__addr">${icon('pin')}<span>${T(venue.address)}</span></p>
        <div class="venue__btns">
          <a class="btn btn--gold" href="${esc(mapLink)}" target="_blank" rel="noopener">${icon('nav')}<span>${L('openInMaps')}</span></a>
        </div>
      </div>
      <div class="venue__map">
        <iframe src="${esc(mapEmbed)}" ${A('title', label('mapTitle'))} loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
      </div>`;
  }

  function renderQuotes() {
    $('#portrait').innerHTML = `
      <div class="portrait__frame">${img(C.season2.portrait, { kind: 'person', label: 'Mahatma Phule portrait', w: 600, h: 800, color: '#3d2b12' }, { alt: label('portraitCaption') })}</div>
      ${icon('spark', 'portrait__orn portrait__orn--l')}${icon('spark', 'portrait__orn portrait__orn--r')}
      <figcaption>${L('portraitCaption')}<small>${L('portraitYears')}</small></figcaption>`;
    $('#quoteTrack').innerHTML = C.season2.quotes.map((q) => `
      <blockquote class="q" role="group" aria-roledescription="slide">
        ${icon('quote', 'q__mark')}
        <p class="q__mr" lang="mr">${esc(q.mr)}</p>
        <p class="q__en" lang="en">${esc(q.en)}</p>
        ${q.source ? `<footer class="q__src">${T(q.source)}</footer>` : ''}
      </blockquote>`).join('');
  }

  function renderContact() {
    const phoneBtns = phones.map((n) => `<a class="phone-btn" href="${telHref(n)}"><span>${fmtPhone(n)}</span>${icon('phone')}</a>`).join('');
    $('#contactCards').innerHTML = `
      <article class="ccard ccard--call reveal">
        <div class="ccard__icon">${icon('phone')}</div>
        <h3>${L('callUs')}</h3>
        <p>${L('callUsText')}</p>
        <div class="phones">${phoneBtns}</div>
      </article>
      <article class="ccard ccard--wa reveal" style="--d:.08s">
        <div class="ccard__icon">${icon('whatsapp')}</div>
        <h3>${L('whatsappUs')}</h3>
        <p>${L('whatsappText')}</p>
        <a class="btn btn--wa" href="${esc(waHref)}" target="_blank" rel="noopener">${icon('whatsapp')}<span>${fmtPhone(C.contact.whatsapp)}</span></a>
      </article>
      <article class="ccard ccard--ig reveal" style="--d:.16s">
        <div class="ccard__icon">${icon('instagram')}</div>
        <h3>${L('followInstagram')}</h3>
        <p>${L('instagramText')}</p>
        <a class="btn btn--ig" href="#" data-instagram>${icon('instagram')}<span>Instagram</span></a>
      </article>`;

    $('#sheetPhones').innerHTML = phoneBtns;
    $('#ftrPhones').innerHTML = phones.map((n) => `<li><a href="${telHref(n)}">${icon('phone')}${fmtPhone(n)}</a></li>`).join('');
    $('#ftrSocial').innerHTML = `
      <a href="${esc(waHref)}" target="_blank" rel="noopener" aria-label="WhatsApp">${icon('whatsapp')}</a>
      <a href="#" data-instagram aria-label="Instagram">${icon('instagram')}</a>
      <a href="${esc(mapLink)}" target="_blank" rel="noopener" ${A('aria-label', label('openInMaps'))}>${icon('pin')}</a>`;

    $('#dock').innerHTML = `
      <a class="dock__btn dock__btn--call" href="${phones[0] ? telHref(phones[0]) : '#'}" data-call>${icon('phone')}<span>${L('call')}</span></a>
      <a class="dock__btn dock__btn--wa" href="${esc(waHref)}" target="_blank" rel="noopener">${icon('whatsapp')}<span>WhatsApp</span></a>
      <a class="dock__btn dock__btn--ig" href="#" data-instagram>${icon('instagram')}<span>Instagram</span></a>
      <a class="dock__btn dock__btn--reg" href="#" data-register>${icon('spark')}<span>${L('navRegister')}</span></a>`;
    const fab = $('#fabWa');
    fab.href = waHref;
    fab.setAttribute('aria-label', 'WhatsApp');
  }

  /* =================================================================
     TAB 2 — SEASON 1
     ================================================================= */
  function renderSeason1Intro() {
    const s1 = C.season1;
    $('#s1Season').innerHTML = T(s1.season);
    $('#s1Story').innerHTML = (s1.story || []).map((p) => `<p>${T(p)}</p>`).join('');
    $('#s1Stats').innerHTML = (s1.highlights || []).map((h) => `
      <div class="s1-stat"><b data-countup>${CN(h.value)}${h.suffix ? esc(h.suffix) : ''}</b><span>${T(h.label)}</span></div>`).join('');
  }

  function renderTeams() {
    const teams = C.season1.teams;
    const n = teams.length;
    $('#teamTrack').innerHTML = teams.map((t, i) => `
      <div class="tslide" role="group" aria-roledescription="slide" ${A('aria-label', both((l) => `${digits(i + 1, l)} / ${digits(n, l)} – ${pick(t.name, l)}`))} style="--team:${esc(t.color)}">
        <article class="tcard">
          <div class="tcard__media">
            ${img(t.ownerPhoto, { kind: 'person', label: `Owner photo · ${pick(t.name, 'en')}`, color: t.color }, { alt: both((l) => `${pick(label('owner'), l)}: ${pick(t.owner, l)}`) })}
            <div class="tcard__owner"><small>${L('owner')}</small><strong>${T(t.owner)}</strong></div>
          </div>
          <div class="tcard__body">
            <div class="tcard__head">
              <div class="tcard__logo">${img(t.logo, { kind: 'logo', initials: initials(t), color: t.color }, { alt: both((l) => `${pick(t.name, l)} ${pick(label('logo'), l)}`) })}</div>
              <div><span class="tcard__kicker">${L('team')}</span><h3 class="tcard__team">${T(t.name)}</h3></div>
            </div>
            <div class="tcard__bar"></div>
            <div class="tcard__squad-title"><span>${L('squad')}</span><span>${N(t.players.length)} ${L('playersUnit')}</span></div>
            <ol class="squad">${t.players.map((p, j) => `<li><b>${N(j + 1)}</b><span>${T(p)}</span></li>`).join('')}</ol>
          </div>
        </article>
      </div>`).join('');
  }

  function renderPodium() {
    const st = C.season1.standings || {};
    const places = { 1: st.winner, 2: st.runnerUp, 3: st.third, 4: st.fourth };
    const names = { 1: 'champion', 2: 'runnerUp', 3: 'third', 4: 'fourth' };
    const logo = (t) => img(t.logo, { kind: 'logo', initials: initials(t), color: t.color }, { alt: both((l) => `${pick(t.name, l)} ${pick(label('logo'), l)}`) });
    const sparkles = [[8, 18, 0], [86, 10, .8], [16, 46, 1.6], [80, 40, .4], [50, -4, 1.2]]
      .map(([x, y, d]) => `<svg class="sparkle" style="left:${x}%;top:${y}%;animation-delay:${d}s" viewBox="0 0 24 24" aria-hidden="true"><use href="#i-spark"></use></svg>`).join('');

    $('#podium').innerHTML = [2, 1, 3].map((p) => {
      const t = teamById[places[p]];
      if (!t) return '<div></div>';
      const ic = p === 1
        ? '<svg class="pod__icon" viewBox="0 0 64 64" aria-hidden="true"><use href="#i-trophy-fill"></use></svg>'
        : icon('medal', 'pod__icon');
      return `
        <div class="pod pod--${p} reveal" style="--d:${p === 1 ? 0 : p === 2 ? 0.15 : 0.3}s;--ring:${esc(t.color)}">
          ${p === 1 ? sparkles : ''}
          ${ic}
          <div class="pod__logo">${logo(t)}</div>
          <h3 class="pod__team">${T(t.name)}</h3>
          <p class="pod__owner">${T(t.owner)}</p>
          <span class="pod__label">${L(names[p])}</span>
          <div class="pod__step">${N(p)}</div>
        </div>`;
    }).join('');

    const t4 = teamById[places[4]];
    $('#podium4').innerHTML = t4 ? `
      <div class="pod4 reveal" style="--ring:${esc(t4.color)}">
        <span class="medal medal--4">${N(4)}</span>
        <div class="pod4__logo">${logo(t4)}</div>
        <div class="pod4__info"><strong>${T(t4.name)}</strong><span>${T(t4.owner)}</span></div>
        <span class="pod4__tag">${L('fourth')}</span>
      </div>` : '';
  }

  function renderAwards() {
    $('#awardCards').innerHTML = (C.season1.awards || []).map((a, i) => {
      const t = teamById[a.team] || {};
      return `
        <article class="award reveal" style="--d:${i * 0.08}s;--team:${esc(t.color || '#167045')}">
          <div class="award__media">
            ${img(a.photo, { kind: 'person', label: `${pick(a.title, 'en')} photo`, color: t.color }, { alt: both((l) => `${pick(a.title, l)} – ${pick(a.player, l)}`) })}
            <span class="award__badge">${icon(a.icon || 'star')}${T(a.title)}</span>
          </div>
          <div class="award__body">
            <h3 class="award__name">${T(a.player)}</h3>
            ${t.name ? `<p class="award__team">${T(t.name)}</p>` : ''}
            ${a.stat ? `<p class="award__stat">${T(a.stat)}</p>` : ''}
          </div>
        </article>`;
    }).join('');
  }

  let galleryItems = [];
  function renderGallery() {
    const pattern = ['big', '', '', 'tall', '', '', 'wide', '', 'tall', '', '', ''];
    galleryItems = (C.season1.gallery || []).map((g, i) => {
      const ph = { kind: 'photo', label: `Season 1 photo ${i + 1}`, w: 1200, h: 800, color: i % 2 ? '#0f5434' : '#167045' };
      return { src: g.src, caption: g.caption, html: img(g.src, ph, { alt: g.caption }), ph: PH.length - 1 };
    });
    $('#galleryGrid').innerHTML = galleryItems.map((g, i) => {
      const size = pattern[i % pattern.length];
      return `<button type="button" class="g-item reveal${size ? ' g-item--' + size : ''}" data-index="${i}" style="--d:${(i % 4) * 0.06}s">
        ${g.html}<span class="g-item__cap">${T(g.caption)}</span></button>`;
    }).join('');
  }

  /* =================================================================
     CAROUSEL (slide + fade modes, autoplay, swipe, dots, pause on hover)
     ================================================================= */
  class Carousel {
    constructor(root, opts) {
      this.root = root;
      this.mode = opts.mode || 'slide';
      this.interval = opts.interval || 5000;
      this.track = $('[data-track]', root);
      this.slides = Array.from(this.track.children);
      this.n = this.slides.length;
      if (!this.n) return;
      this.i = 0;
      this.elapsed = 0;
      this.hover = false;
      this.userPaused = reduceMotion;
      this.bar = $('[data-progress]', root);

      $('[data-controls]', root).innerHTML = `
        <button type="button" class="car-btn" data-prev ${A('aria-label', label('prev'))}>${icon('left')}</button>
        <div class="dots" data-dots></div>
        <button type="button" class="car-btn" data-next ${A('aria-label', label('next'))}>${icon('right')}</button>
        <button type="button" class="car-btn car-btn--toggle" data-toggle>${icon('pause', 'i-pause')}${icon('play', 'i-play')}</button>`;
      const dotLabel = opts.dotLabel || ((k) => both((l) => `${pick(label('slide'), l)} ${digits(k + 1, l)}`));
      $('[data-dots]', root).innerHTML = this.slides.map((_, k) => `<button type="button" class="dot-btn" ${A('aria-label', dotLabel(k))}></button>`).join('');
      this.dots = $$('.dot-btn', root);
      this.toggleBtn = $('[data-toggle]', root);

      this.dots.forEach((d, k) => d.addEventListener('click', () => this.go(k)));
      $('[data-prev]', root).addEventListener('click', () => this.go(this.i - 1));
      $('[data-next]', root).addEventListener('click', () => this.go(this.i + 1));
      this.toggleBtn.addEventListener('click', () => { this.userPaused = !this.userPaused; this.syncToggle(); });
      root.addEventListener('mouseenter', () => { this.hover = true; });
      root.addEventListener('mouseleave', () => { this.hover = false; });
      root.addEventListener('focusin', () => { this.hover = true; });
      root.addEventListener('focusout', (e) => { if (!root.contains(e.relatedTarget)) this.hover = false; });
      root.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') this.go(this.i - 1);
        if (e.key === 'ArrowRight') this.go(this.i + 1);
      });
      this.bindSwipe();
      this.go(0);
      this.syncToggle();
      this.loop = this.loop.bind(this);
      requestAnimationFrame(this.loop);
    }
    visible() { return this.root.offsetParent !== null && !document.hidden; }
    loop(ts) {
      const dt = this.last ? Math.min(ts - this.last, 100) : 0;
      this.last = ts;
      if (!this.userPaused && !this.hover && !this.dragging && this.visible()) {
        this.elapsed += dt;
        if (this.elapsed >= this.interval) this.go(this.i + 1);
      }
      if (this.bar) this.bar.style.transform = `scaleX(${Math.min(this.elapsed / this.interval, 1)})`;
      requestAnimationFrame(this.loop);
    }
    go(k) {
      this.i = (k + this.n) % this.n;
      this.elapsed = 0;
      if (this.mode === 'slide') this.track.style.transform = `translateX(${-this.i * 100}%)`;
      this.slides.forEach((s, j) => {
        const on = j === this.i;
        s.classList.toggle('is-active', on);
        s.setAttribute('aria-hidden', String(!on));
        if (on) s.removeAttribute('inert'); else s.setAttribute('inert', '');
      });
      this.dots.forEach((d, j) => d.setAttribute('aria-current', String(j === this.i)));
    }
    syncToggle() {
      this.root.classList.toggle('is-paused', this.userPaused);
      const v = label(this.userPaused ? 'play' : 'pause');
      this.toggleBtn.setAttribute('aria-label', pick(v));
      this.toggleBtn.setAttribute('data-aria-label-mr', pick(v, 'mr'));
      this.toggleBtn.setAttribute('data-aria-label-en', pick(v, 'en'));
    }
    bindSwipe() {
      const vp = $('[data-viewport]', this.root) || this.track;
      let x0 = null, y0 = 0, dx = 0, w = 1, pid = null, axis = null;
      vp.addEventListener('pointerdown', (e) => {
        if (e.pointerType === 'mouse') { if (e.button !== 0) return; e.preventDefault(); }
        x0 = e.clientX; y0 = e.clientY; dx = 0; axis = null; w = vp.clientWidth || 1; pid = e.pointerId;
      });
      vp.addEventListener('pointermove', (e) => {
        if (x0 === null || e.pointerId !== pid) return;
        dx = e.clientX - x0;
        const dy = e.clientY - y0;
        if (axis === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
          axis = Math.abs(dx) > Math.abs(dy) ? 'x' : 'y';
          if (axis === 'x') {
            this.dragging = true;
            try { vp.setPointerCapture(pid); } catch (err) { /* ignore */ }
            this.track.classList.add('no-anim');
            vp.classList.add('is-drag');
          }
        }
        if (axis === 'x' && this.mode === 'slide') {
          this.track.style.transform = `translateX(calc(${-this.i * 100}% + ${dx}px))`;
        }
      });
      const end = () => {
        if (x0 === null) return;
        if (axis === 'x') {
          this.track.classList.remove('no-anim');
          vp.classList.remove('is-drag');
          if (Math.abs(dx) > Math.min(70, w * 0.18)) this.go(this.i + (dx < 0 ? 1 : -1));
          else this.go(this.i);
        }
        x0 = null; axis = null; this.dragging = false;
      };
      vp.addEventListener('pointerup', end);
      vp.addEventListener('pointercancel', end);
    }
  }

  /* =================================================================
     LIGHTBOX
     ================================================================= */
  function initLightbox() {
    const lb = $('#lightbox'), im = $('#lbImg'), cap = $('#lbCap'), cnt = $('#lbCount');
    let i = 0, lastFocus = null;
    const show = (k) => {
      const n = galleryItems.length;
      i = (k + n) % n;
      const g = galleryItems[i];
      im.removeAttribute('data-ph-done');
      im.dataset.ph = g.ph;
      im.src = g.src || phSrc(PH[g.ph]);
      im.alt = pick(g.caption);
      cap.innerHTML = T(g.caption);
      cnt.textContent = digits(`${i + 1} / ${n}`, lang);
    };
    const open = (k) => {
      lastFocus = document.activeElement;
      show(k);
      lb.hidden = false;
      document.documentElement.style.overflow = 'hidden';
      $('[data-lb="close"]', lb).focus();
    };
    const close = () => {
      lb.hidden = true;
      document.documentElement.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    };
    $('#galleryGrid').addEventListener('click', (e) => {
      const b = e.target.closest('.g-item');
      if (b) open(+b.dataset.index);
    });
    lb.addEventListener('click', (e) => {
      const act = e.target.closest('[data-lb]');
      if (act) {
        const a = act.dataset.lb;
        if (a === 'close') close(); else show(i + (a === 'next' ? 1 : -1));
      } else if (e.target === lb) close();
    });
    document.addEventListener('keydown', (e) => {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') show(i + 1);
      if (e.key === 'ArrowLeft') show(i - 1);
    });
    let sx = null;
    lb.addEventListener('pointerdown', (e) => { sx = e.clientX; });
    lb.addEventListener('pointerup', (e) => {
      if (sx === null) return;
      const d = e.clientX - sx;
      if (Math.abs(d) > 60) show(i + (d < 0 ? 1 : -1));
      sx = null;
    });
  }

  /* =================================================================
     CALL SHEET, EXTERNAL LINKS, TOAST
     ================================================================= */
  let toastTimer;
  function toast(v) {
    const el = $('#toast');
    el.innerHTML = T(v);
    el.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('show'), 2800);
  }

  function wireLinks() {
    const setLink = (a, url) => {
      if (isPlaceholderUrl(url)) {
        a.setAttribute('href', '#');
        a.addEventListener('click', (e) => { e.preventDefault(); toast(label('comingSoon')); });
      } else {
        a.setAttribute('href', url);
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener');
      }
    };
    $$('[data-register]').forEach((a) => setLink(a, C.links.registrationForm));
    $$('[data-instagram]').forEach((a) => setLink(a, C.links.instagram));
  }

  function initSheet() {
    const sheet = $('#callSheet');
    let lastFocus = null;
    const close = () => {
      sheet.hidden = true;
      document.documentElement.style.overflow = '';
      if (lastFocus) lastFocus.focus();
    };
    $$('[data-call]').forEach((b) => b.addEventListener('click', (e) => {
      if (phones.length < 2) return;
      e.preventDefault();
      lastFocus = b;
      sheet.hidden = false;
      document.documentElement.style.overflow = 'hidden';
      $('.phone-btn', sheet).focus();
    }));
    $$('[data-close]', sheet).forEach((b) => b.addEventListener('click', close));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !sheet.hidden) close(); });
  }

  /* =================================================================
     TABS (hash routing, no reload)
     ================================================================= */
  const PANELS = ['season2', 'season1'];
  let current = null;
  function showPanel(name) {
    if (current === name) return false;
    $$('[data-panel]').forEach((p) => {
      const on = p.dataset.panel === name;
      p.hidden = !on;
      if (on && current) {
        p.classList.remove('is-entering');
        void p.offsetWidth;
        p.classList.add('is-entering');
      }
    });
    $$('[data-tab-link]').forEach((a) => {
      if (a.dataset.tabLink === name) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
    current = name;
    return true;
  }
  function route() {
    const h = decodeURIComponent(location.hash.slice(1));
    let panel = PANELS.includes(h) ? h : null;
    let target = null;
    if (!panel && h) {
      target = document.getElementById(h);
      const p = target && target.closest('[data-panel]');
      panel = p ? p.dataset.panel : null;
    }
    const changed = showPanel(panel || current || 'season2');
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ behavior: changed || reduceMotion ? 'instant' : 'smooth', block: 'start' }));
    } else if (changed) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }
  function initTabs() {
    window.addEventListener('hashchange', route);
    $$('[data-tab-link]').forEach((a) => a.addEventListener('click', () => {
      if (location.hash === a.getAttribute('href')) window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    }));
    route();
  }

  /* =================================================================
     EFFECTS: reveal on scroll, count-up, header, spotlight
     ================================================================= */
  function countUp(el) {
    const spans = $$('[data-count]', el);
    const t0 = performance.now(), dur = 1500;
    const step = (t) => {
      const p = Math.min((t - t0) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      spans.forEach((s) => { s.textContent = num(Math.round(+s.dataset.count * e), s.classList.contains('l-mr') ? 'mr' : 'en'); });
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  function initEffects() {
    if (!('IntersectionObserver' in window) || reduceMotion) {
      $$('.reveal').forEach((el) => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      }), { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      $$('.reveal').forEach((el) => io.observe(el));

      const cio = new IntersectionObserver((entries) => entries.forEach((en) => {
        if (en.isIntersecting) { countUp(en.target); cio.unobserve(en.target); }
      }), { threshold: 0.4 });
      $$('[data-countup]').forEach((el) => {
        $$('[data-count]', el).forEach((s) => { s.textContent = num(0, s.classList.contains('l-mr') ? 'mr' : 'en'); });
        cio.observe(el);
      });
    }

    const hdr = $('.hdr');
    const onScroll = () => hdr.classList.toggle('is-scrolled', window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    document.addEventListener('pointermove', (e) => {
      const el = e.target.closest && e.target.closest('.spot');
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    }, { passive: true });
  }

  /* =================================================================
     BOOT
     ================================================================= */
  initLang();
  fillStatic();
  renderTicker();
  renderKeyInfo();
  renderPrizes();
  renderSchedule();
  renderQuotes();
  renderContact();
  renderSeason1Intro();
  renderTeams();
  renderPodium();
  renderAwards();
  renderGallery();
  wireLinks();
  initSheet();
  initLightbox();

  $$('[data-lang-btn]').forEach((b) => b.addEventListener('click', () => setLang(b.dataset.langBtn)));
  setLang(lang);
  setInterval(tickCountdown, 1000);

  new Carousel($('#quoteCar'), { mode: 'fade', interval: 7000 });
  new Carousel($('#teamCar'), {
    mode: 'slide',
    interval: 5500,
    dotLabel: (k) => C.season1.teams[k].name,
  });

  initTabs();
  initEffects();
})();
