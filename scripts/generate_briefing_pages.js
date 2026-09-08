#!/usr/bin/env node
/*
 * Generates one real static HTML page per briefing in briefings.json,
 * written to briefings/<id>.html. Each page gets its own correct
 * <title>, meta description, and Open Graph/Twitter tags -- unlike the
 * old briefing.html?id= template, these are real per-item pages a
 * static host can serve correctly to search engines and social-share
 * crawlers (which don't run JavaScript).
 *
 * Run this from the repo root: node scripts/generate_briefing_pages.js
 * Re-run it every time briefings.json changes (new briefing added or
 * an existing one edited) -- it regenerates every page from scratch.
 */
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://beyondbeta.eu';
const ROOT = path.join(__dirname, '..');
const OUT_DIR = path.join(ROOT, 'briefings');

// --- pull the exact same markdown/formatting functions used by the live site,
// straight out of shared.js, so generated pages match the JS-rendered version exactly ---
const js = fs.readFileSync(path.join(ROOT, 'shared.js'), 'utf8');
function grab(name){
  const start = js.indexOf('function ' + name);
  let depth = 0, i = start, started = false;
  for(; i < js.length; i++){
    if(js[i] === '{'){ depth++; started = true; }
    if(js[i] === '}'){ depth--; if(started && depth === 0){ i++; break; } }
  }
  return js.slice(start, i);
}
function grabArray(name){
  const m = js.match(new RegExp('const ' + name + ' = (\\[[\\s\\S]*?\\n\\]);'));
  return 'var ' + name + ' = ' + m[1] + ';'; // var (not const) so it survives past this eval() call
}
eval(grabArray('LAYERS'));
eval(grab('layerByNum'));
eval(grab('escapeHtml'));
eval(grab('inlineMarkdown'));
eval(grab('renderMarkdown'));
eval(grab('formatDate'));
const cssVars = {};
const cssText = fs.readFileSync(path.join(ROOT, 'shared.css'), 'utf8');
[...cssText.matchAll(/--(l[0-7]):(#[0-9A-Fa-f]{6})/g)].forEach(m => cssVars['--'+m[1]] = m[2]);
function hexFor(varRef){
  const key = varRef.replace('var(', '').replace(')', '');
  return cssVars[key] || '#0F1F30';
}

function fixRelativeLinks(html){
  // links inside a briefing's body use root-relative paths (framework.html,
  // about.html#contact) because that's correct from the site root -- these
  // pages live one folder deeper, so those links need a ../ prefix.
  return html.replace(/href="([^"]+)"/g, (m, href) => {
    if(/^https?:\/\//.test(href) || href.startsWith('../') || href.startsWith('/') || href.startsWith('#')){
      return m;
    }
    return `href="../${href}"`;
  });
}
function escapeAttr(s){
  return escapeHtml(s).replace(/"/g, '&quot;');
}

function buildPage(b){
  const layer = layerByNum(b.layer);
  const color = hexFor(layer.color);
  const bodyHtml = fixRelativeLinks(renderMarkdown(b.body || b.excerpt));
  const metaDesc = escapeAttr(b.excerpt.replace(/<[^>]+>/g, '')).slice(0, 160);
  const canonicalUrl = `${SITE_URL}/briefings/${b.id}.html`;
  const titleAttr = escapeAttr(b.title);

  const prefix = '../';
  const header = `<header>
  <div class="wrap nav-inner">
    <a href="${prefix}index.html" class="logo">
      <span class="word">Beyond Beta</span>
      <span class="tag">AI &amp; TECHNOLOGY SOVEREIGNTY</span>
    </a>
    <nav class="links">
      <a href="${prefix}framework.html">Framework</a>
      <a href="${prefix}briefings.html" class="nav-active">Briefings</a>
      <a href="${prefix}signals.html">Signals</a>
      <a href="${prefix}authors.html">Authors</a>
      <a href="${prefix}about.html">About</a>
    </nav>
    <div class="nav-right">
      <a href="${prefix}index.html#subscribe" class="btn btn-primary">Subscribe</a>
      <button class="icon-btn" aria-label="Search">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </button>
      <button class="menu-toggle" aria-label="Menu">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
      </button>
    </div>
  </div>
</header>
<div class="search-overlay" id="subscribe-overlay">
  <div class="search-box" role="dialog" aria-label="Subscribe to Beyond Beta" style="max-width:420px;">
    <div class="search-input-row" style="justify-content:space-between;">
      <strong style="color:var(--navy); font-size:15px;">Subscribe to Beyond Beta</strong>
      <button type="button" id="subscribe-modal-close" aria-label="Close" style="border:none; background:none; color:var(--muted); font-size:16px; cursor:pointer; padding:4px;">✕</button>
    </div>
    <div id="subscribe-modal-content" style="padding:20px;"></div>
  </div>
</div>`;

  const footer = `<footer>
  <div class="wrap footer-inner">
    <div>
      <a href="${prefix}index.html" class="logo">
        <span class="word">Beyond Beta</span>
        <span class="tag">AI &amp; TECHNOLOGY SOVEREIGNTY</span>
      </a>
      <p class="desc">Independent analysis on the systems that shape Europe's technological future.</p>
      <p class="desc">© 2026 Beyond Beta. All rights reserved.</p>
    </div>
    <div>
      <h6>Explore</h6>
      <ul>
        <li><a href="${prefix}framework.html">Framework</a></li>
        <li><a href="${prefix}briefings.html">Briefings</a></li>
        <li><a href="${prefix}signals.html">Signals</a></li>
        <li><a href="${prefix}authors.html">Authors</a></li>
      </ul>
    </div>
    <div>
      <h6>About</h6>
      <ul>
        <li><a href="${prefix}about.html">About</a></li>
        <li><a href="${prefix}impressum.html">Impressum</a></li>
        <li><a href="${prefix}privacy-policy.html">Privacy Policy</a></li>
        <li><a href="${prefix}site-notice.html">Site Notice</a></li>
        <li><a href="${prefix}about.html#contact">Contact</a></li>
      </ul>
    </div>
    <div id="subscribe" class="subscribe-box">
      <h6>Stay informed</h6>
      <p class="desc" style="margin-top:0;">Weekly briefings and daily signals on AI, technology, and sovereignty.</p>
      <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      <form action="https://app.kit.com/forms/9870682/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="9870682" data-uid="471b26de76" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success - welcome to the Beyond Beta Briefings! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;show&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}">
        <ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
        <div data-element="fields" class="seva-fields formkit-fields">
          <input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Your email address" required="" type="email">
          <button data-element="submit" class="formkit-submit formkit-submit" type="submit">
            <div class="formkit-spinner"><div></div><div></div><div></div></div>
            <span>Subscribe</span>
          </button>
        </div>
      </form>
    </div>
  </div>
  <div class="wrap foot-bottom">Built with care in Europe.</div>
</footer>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="../favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
<link rel="apple-touch-icon" href="../apple-touch-icon.png">
<title>${escapeHtml(b.title)} — Beyond Beta</title>
<meta name="description" content="${metaDesc}">
<link rel="canonical" href="${canonicalUrl}">

<meta property="og:type" content="article">
<meta property="og:site_name" content="Beyond Beta">
<meta property="og:title" content="${titleAttr}">
<meta property="og:description" content="${metaDesc}">
<meta property="og:url" content="${canonicalUrl}">
<meta property="og:image" content="https://beyondbeta.eu/og-image.png">
<meta property="og:image:width" content="1731">
<meta property="og:image:height" content="909">
<meta property="og:image:alt" content="Beyond Beta — AI &amp; Technology Sovereignty">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${titleAttr}">
<meta name="twitter:description" content="${metaDesc}">
<meta name="twitter:image" content="https://beyondbeta.eu/og-image.png">

<link rel="stylesheet" href="../shared.css">
<style>
.briefing-article{max-width:720px;}
.briefing-article .layer-tag{font-size:12.5px; font-weight:700; margin:0 0 10px;}
.briefing-article h1{font-family:var(--serif); font-weight:700; font-size:34px; line-height:1.2; margin:0 0 14px; color:var(--navy);}
.briefing-article .briefing-meta{margin:0 0 28px; padding-bottom:24px; border-bottom:1px solid var(--border);}
.briefing-article .body h3{font-family:var(--serif); font-weight:500; font-size:20px; color:var(--navy); margin:28px 0 10px;}
.briefing-article .body h4{font-family:var(--sans); font-weight:700; font-size:15px; color:var(--navy); margin:22px 0 8px;}
.briefing-article .body p{color:var(--ink); font-size:16px; line-height:1.75; margin:0 0 18px;}
.briefing-article .body a{color:var(--cobalt); font-weight:600;}
</style>
</head>
<body>
${header}

<main>
  <div class="wrap page-header">
    <p class="eyebrow"><a href="../briefings.html" style="color:inherit;">← All briefings</a></p>
  </div>
  <section>
    <div class="wrap">
      <article class="briefing-article">
        <p class="layer-tag" style="color:${color};">Layer ${layer.num} · ${escapeHtml(layer.name)}</p>
        <h1>${escapeHtml(b.title)}</h1>
        <div class="briefing-meta"><span><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg> ${b.readTime}</span><span>${formatDate(b.date)}</span></div>
        <div class="body">
${bodyHtml}
        </div>
        <div id="share-wrap" style="margin-top:32px;"></div>
      </article>
    </div>
  </section>
</main>
${footer}
<script src="../shared.js"></script>
<script>

wireMobileMenu();
wireSubscribeModal();
document.getElementById('share-wrap').appendChild(shareButtons(window.location.href, ${JSON.stringify(b.title)}));

loadSharedData().then(()=>{
  wireSearch();
});
</script>
</body>
</html>
`;
}

const briefings = JSON.parse(fs.readFileSync(path.join(ROOT, 'briefings.json'), 'utf8'));
if(!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
briefings.forEach(b => {
  const html = buildPage(b);
  fs.writeFileSync(path.join(OUT_DIR, `${b.id}.html`), html);
  console.log(`Wrote briefings/${b.id}.html`);
});
