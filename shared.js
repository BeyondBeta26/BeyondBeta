/* ============================================================
   Beyond Beta — shared data + rendering utilities
   Edit LAYERS / BRIEFINGS / SIGNALS / TEAM below to update
   content across every page at once. See README.md.
   ============================================================ */

const LAYERS = [
  {num:0, name:'Raw materials and intermediate products', desc:'Rare earths, silicon, raw materials', color:'var(--l0)', count:'5 essays'},
  {num:1, name:'Components', desc:'Chips, semiconductors, hardware', color:'var(--l1)', count:'6 essays'},
  {num:2, name:'Communications infrastructure', desc:'Connectivity, backbone, edge, 5G/6G', color:'var(--l2)', count:'7 essays'},
  {num:3, name:'Infrastructure-as-a-Service (IaaS)', desc:'Compute, storage, facilities, energy', color:'var(--l3)', count:'10 essays'},
  {num:4, name:'Platform-as-a-Service (PaaS)', desc:'Cloud, platforms, APIs, middleware', color:'var(--l4)', count:'8 essays'},
  {num:5, name:'European data spaces', desc:'Secure, interoperable, trusted data infrastructure', color:'var(--l5)', count:'9 essays'},
  {num:6, name:'Software technology', desc:'AI models, algorithms, open source, tools', color:'var(--l6)', count:'7 essays'},
  {num:7, name:'European system of laws and values', desc:'Regulation, rights, ethics, public interest', color:'var(--l7)', count:'6 essays'}
];

/* Every Briefing is ~500 words, published weekly. "featured:true" marks the
   one shown on the homepage — move the flag to a newer entry each week. */
const BRIEFINGS = [
  {id:'europe-missing-ai-advantage', title:"Europe's Missing AI Advantage", layer:5,
   excerpt:"Why data infrastructure — not model size — may determine Europe's position in the next phase of AI competition.",
   date:'2026-08-26', readTime:'4 min read', featured:true, url:'#'},
  {id:'chip-sovereignty-illusion', title:'The Chip Sovereignty Illusion', layer:1,
   excerpt:"Europe's semiconductor investments are real, but the dependency they're meant to fix is deeper than fab capacity.",
   date:'2026-08-19', readTime:'4 min read', featured:false, url:'#'},
  {id:'iaas-without-hyperscalers', title:'Can Europe Run IaaS Without Hyperscalers?', layer:3,
   excerpt:'Sovereign cloud projects keep launching. Almost none of them answer the question of who actually operates them.',
   date:'2026-08-12', readTime:'5 min read', featured:false, url:'#'},
  {id:'ai-act-enforcement-gap', title:'The AI Act Enforcement Gap', layer:7,
   excerpt:'Rules on paper are not rules in practice. What early enforcement patterns reveal about the law that was supposed to lead the world.',
   date:'2026-08-05', readTime:'4 min read', featured:false, url:'#'},
  {id:'platform-lockin-public-sector', title:'Platform Lock-in in the Public Sector', layer:4,
   excerpt:'Migrating a ministry off a hyperscaler platform is not a procurement decision. It is a multi-year infrastructure project.',
   date:'2026-07-29', readTime:'5 min read', featured:false, url:'#'},
  {id:'open-source-models-policy', title:'What Open-Weight Models Mean for Policy', layer:6,
   excerpt:"Open-weight releases scramble the assumptions behind most of Europe's AI governance drafting.",
   date:'2026-07-22', readTime:'4 min read', featured:false, url:'#'},
  {id:'5g-backbone-dependencies', title:"Who Actually Owns Europe's 5G Backbone?", layer:2,
   excerpt:'Vendor diversity rules changed the headlines. They changed the ownership structure much less.',
   date:'2026-07-15', readTime:'4 min read', featured:false, url:'#'},
  {id:'materials-diplomacy', title:'Materials Diplomacy Is Industrial Policy', layer:0,
   excerpt:'Rare earth agreements are being negotiated like trade deals. They should be read like security guarantees.',
   date:'2026-07-08', readTime:'5 min read', featured:false, url:'#'}
];

/* Signals are short — a headline and a sentence, not a full write-up. */
const SIGNALS = [
  {id:'signal-043', num:'#043', title:'Germany expands sovereign cloud initiative', layer:3, impact:'High', icon:'cloud', date:'2026-08-27', url:'#'},
  {id:'signal-042', num:'#042', title:'Mistral announces new public-sector partnership', layer:4, impact:'Medium', icon:'building', date:'2026-08-26', url:'#'},
  {id:'signal-041', num:'#041', title:'EU advances data space interoperability framework', layer:5, impact:'High', icon:'database', date:'2026-08-25', url:'#'},
  {id:'signal-040', num:'#040', title:'New European chip project enters development', layer:1, impact:'Medium', icon:'chip', date:'2026-08-22', url:'#'},
  {id:'signal-039', num:'#039', title:'Cross-border AI procurement guideline published', layer:7, impact:'Medium', icon:'globe', date:'2026-08-21', url:'#'},
  {id:'signal-038', num:'#038', title:'France and Germany align on IaaS certification scheme', layer:3, impact:'High', icon:'database', date:'2026-08-19', url:'#'},
  {id:'signal-037', num:'#037', title:'Open-weight model release cited in Commission draft', layer:6, impact:'Medium', icon:'building', date:'2026-08-18', url:'#'},
  {id:'signal-036', num:'#036', title:'Undersea cable resilience fund announced', layer:2, impact:'High', icon:'globe', date:'2026-08-14', url:'#'},
  {id:'signal-035', num:'#035', title:'Rare earths recycling target set for 2030', layer:0, impact:'Low', icon:'chip', date:'2026-08-12', url:'#'},
  {id:'signal-034', num:'#034', title:'Platform interoperability complaint filed with regulator', layer:4, impact:'Medium', icon:'cloud', date:'2026-08-08', url:'#'}
];

const TEAM = [
  {id:'kirsten-rulf', name:'Kirsten Rulf', role:'Editor-in-Chief', focus:'Strategy, policy, and institutional power', color:'#19A8AF', guest:false,
   bio:'Kirsten leads Beyond Beta\'s editorial direction and writes the weekly Briefing. Her background is in digital policy and technology strategy at the intersection of government and industry.'},
  {id:'anna-schmidt', name:'Anna Schmidt', role:'Research Editor', focus:'Data, regulation, and public sector', color:'#EA7B26', guest:false,
   bio:'Anna covers European data infrastructure and regulatory design, with a focus on how public-sector procurement shapes the sovereignty stack in practice.'},
  {id:'marc-dubois', name:'Marc Dubois', role:'Technology Editor', focus:'Infrastructure, platforms, and compute', color:'#0F1F30', guest:false,
   bio:'Marc writes on infrastructure, platforms, and compute — tracking how cloud and chip dependencies actually move (or don\'t) at the technical layer.'},
  {id:'guest-contributor', name:'Guest Contributor', role:'External Perspective', focus:'Expert voices from across Europe', color:'#A79C8B', guest:true,
   bio:'Beyond Beta periodically publishes guest essays from practitioners, researchers, and policymakers working directly on technology sovereignty across Europe.'}
];

/* ---------- generic svg helpers ---------- */
const SVGNS = "http://www.w3.org/2000/svg";
function el(tag, attrs){
  const e = document.createElementNS(SVGNS, tag);
  for(const k in attrs) e.setAttribute(k, attrs[k]);
  return e;
}
function resolveColor(varName){
  return getComputedStyle(document.documentElement).getPropertyValue(varName.replace('var(--','').replace(')','')).trim() || varName;
}
function layerByNum(num){ return LAYERS.find(l=>l.num===num); }

/* ---------- sovereignty map (shared by index.html hero/teaser and framework.html) ---------- */
function buildMap(svg, opts){
  const {hubX, hubY, stationX, topY, bottomY, showLabels, small, linkLabels} = opts;
  const n = LAYERS.length;
  const ys = LAYERS.map((_,i)=> topY + i*(bottomY-topY)/(n-1));

  const ringGroup = el('g', {opacity:'0.35'});
  [1.9, 3.1, 4.3].forEach(mult=>{
    ringGroup.appendChild(el('circle', {
      cx:hubX, cy:hubY, r: (small?13:19)*mult, fill:'none',
      stroke:'#C9CFC5', 'stroke-width': small?0.6:0.8, 'stroke-dasharray': small?'2,4':'3,6'
    }));
  });
  svg.appendChild(ringGroup);

  const D = small?32:60;
  const stub = small?20:45;
  const spineX = hubX - D;

  const others = LAYERS.map((l,idx)=>idx).filter(idx => LAYERS[idx].num !== 5);
  const joinIndex = {};
  others.forEach((idx, k) => { joinIndex[idx] = others[(k + Math.floor(others.length/2)) % others.length]; });

  LAYERS.forEach((layer, i)=>{
    const sy = ys[i];
    const color = resolveColor(layer.color);
    const isHi = layer.num === 5;
    const diff = sy - hubY;
    let bendX = hubX + Math.abs(diff);
    bendX = Math.min(bendX, stationX - (small?24:50));
    const lw = (small?3:4.5) + (isHi?2:0);

    const g = el('g', {class:'map-line', 'data-layer':layer.num, tabindex:'0', role:'button',
                       'aria-label':`Layer ${layer.num}: ${layer.name}`});

    let d;
    if(isHi){
      d = `M ${hubX} ${hubY} L ${bendX} ${sy} L ${stationX} ${sy}`;
    } else {
      const joinY = ys[joinIndex[i]];
      const dir = joinY === hubY ? -1 : Math.sign(joinY - hubY);
      const p1x = spineX, p1y = hubY + dir*D;
      const westX = spineX - stub;
      d = `M ${westX} ${joinY} L ${spineX} ${joinY} L ${p1x} ${p1y} L ${hubX} ${hubY} L ${bendX} ${sy} L ${stationX} ${sy}`;

      g.appendChild(el('circle', {cx:westX, cy:joinY, r: small?4:5.5, fill:'#F7F4EE', stroke:color, 'stroke-width':small?2:2.6}));
      g.appendChild(el('circle', {cx:spineX, cy:joinY, r: small?2.6:3.6, fill:'#F7F4EE', stroke:color, 'stroke-width':small?1.8:2.2}));
      if(Math.abs(joinY - p1y) > (small?12:20)){
        g.appendChild(el('circle', {cx:spineX, cy:(joinY+p1y)/2, r: small?2.6:3.6, fill:'#F7F4EE', stroke:color, 'stroke-width':small?1.8:2.2}));
      }
    }

    const path = el('path', {d, stroke:color, 'stroke-width':lw, fill:'none', 'stroke-linejoin':'round', 'stroke-linecap':'round'});
    g.insertBefore(path, g.firstChild);

    [0.38, 0.72].forEach(t=>{
      const tx = bendX + (stationX - bendX) * t;
      const tickR = small?2.6:3.6;
      g.appendChild(el('circle', {cx:tx, cy:sy, r:tickR, fill:'#F7F4EE', stroke:color, 'stroke-width':small?1.8:2.2}));
    });

    const r = isHi ? (small?9:16) : (small?6.5:11);
    const station = el('circle', {cx:stationX, cy:sy, r:r, fill:'#fff', stroke:color, 'stroke-width':small?2.6:4});
    g.appendChild(station);

    if(showLabels){
      const num = el('text', {x:stationX+26, y:sy+7, class:'map-num', fill:color});
      num.textContent = layer.num; g.appendChild(num);

      const label = el('text', {x:stationX+54, y:sy-1, class:'map-label'+(isHi?' hi':'')});
      label.textContent = layer.name; g.appendChild(label);

      const desc = el('text', {x:stationX+54, y:sy+16, class:'map-desc'});
      desc.textContent = layer.desc; g.appendChild(desc);

      if(isHi){
        const bbox_w = layer.name.length*9.0 + 34;
        g.insertBefore(el('rect', {x:stationX+46, y:sy-19, width:bbox_w, height:26, rx:8, class:'hi-pill'}), label);
      }
    } else if(isHi){
      const num = el('text', {x:stationX, y:sy+5, 'text-anchor':'middle', class:'map-num-small', fill:color});
      num.textContent = layer.num; g.appendChild(num);
    }

    g.addEventListener('mouseenter', ()=> g.classList.add('hovering'));
    g.addEventListener('mouseleave', ()=> g.classList.remove('hovering'));
    if(linkLabels){
      g.addEventListener('click', ()=> { window.location.href = `framework.html#layer-${layer.num}`; });
      g.addEventListener('keypress', (e)=> { if(e.key==='Enter' || e.key===' ') window.location.href = `framework.html#layer-${layer.num}`; });
    } else {
      g.addEventListener('click', ()=> focusLayer(layer.num));
      g.addEventListener('keypress', (e)=> { if(e.key==='Enter' || e.key===' ') focusLayer(layer.num); });
    }
    svg.appendChild(g);
  });

  svg.appendChild(el('circle', {cx:hubX, cy:hubY, r: small?20:29, fill:'#DCFCF3'}));
  svg.appendChild(el('circle', {cx:hubX, cy:hubY, r: small?14:20, fill:'#fff', stroke:resolveColor('var(--navy)'), 'stroke-width':small?2.5:4}));
  svg.appendChild(el('circle', {cx:hubX, cy:hubY, r: small?7:11, fill:resolveColor('var(--navy)')}));
}

function focusLayer(num){
  const card = document.querySelector(`.layer-card[data-layer="${num}"], .layer-block[data-layer="${num}"]`);
  document.querySelectorAll('.layer-card').forEach(c=>c.classList.remove('active'));
  if(card){
    if(card.classList.contains('layer-card')) card.classList.add('active');
    card.scrollIntoView({behavior:'smooth', block:'center'});
    card.classList.add('pulse');
    setTimeout(()=>card.classList.remove('pulse'), 1100);
  }
}

/* ---------- icons ---------- */
function layerIcon(num, color){
  const s = el('svg', {viewBox:'0 0 44 44', width:'44', height:'44'});
  s.appendChild(el('circle', {cx:22, cy:22, r:20, fill:'none', stroke:color, 'stroke-width':2}));
  const g = el('g', {stroke:color, 'stroke-width':2, fill:'none', 'stroke-linecap':'round', 'stroke-linejoin':'round'});
  const shapes = {
    7: 'M14,17 L22,12 L30,17 M14,17 L11,24 L17,24 Z M30,17 L27,24 L33,24 Z M22,12 L22,28 M16,28 L28,28',
    6: 'M17,15 L11,22 L17,29 M27,15 L33,22 L27,29',
    5: 'M14,15 a8,3 0 1,0 16,0 a8,3 0 1,0 -16,0 M14,15 L14,27 a8,3 0 0,0 16,0 L30,15',
    4: 'M12,15 h20 M12,22 h20 M12,29 h20',
    3: 'M14,14 h16 v16 h-16 z M17,17 h2 v2 h-2z M21,17 h2 v2h-2z M25,17h2v2h-2z M17,21h2v2h-2z M21,21h2v2h-2z M25,21h2v2h-2z',
    2: 'M22,12 L14,30 L18,30 L22,17 L26,30 L30,30 Z M17,22 h10',
    1: 'M15,15 h14 v14 h-14 z M19,19 h6 v6 h-6z M22,10 v5 M22,29 v5 M10,22 h5 M29,22 h5',
    0: 'M22,10 L30,17 L26,30 L18,30 L14,17 Z'
  };
  const path = el('path', {d: shapes[num]});
  g.appendChild(path);
  s.appendChild(g);
  return s;
}

function signalIcon(kind){
  const s = el('svg', {viewBox:'0 0 24 24', width:'20', height:'20', fill:'none', stroke:'currentColor', 'stroke-width':2, 'stroke-linecap':'round', 'stroke-linejoin':'round'});
  const paths = {
    cloud:'M7,18 a4,4 0 0,1 0,-8 a5,5 0 0,1 9.6,-1.5 A4.5,4.5 0 0,1 17,18 Z',
    building:'M5,21 V6 h14 V21 M5,21 h14 M8,9 h2 M13,9 h2 M8,13 h2 M13,13 h2 M8,17 h2 M13,17h2',
    database:'M12,6 a7,2.2 0 1,0 0.001,0 M5,6 v12 a7,2.2 0 0,0 14,0 V6 M5,12 a7,2.2 0 0,0 14,0',
    chip:'M9,9 h6 v6 h-6z M9,3 v3 M15,3 v3 M9,18 v3 M15,18 v3 M3,9 h3 M3,15 h3 M18,9 h3 M18,15 h3',
    globe:'M12,3 a9,9 0 1,0 0.001,0 M3,12 h18 M12,3 a13,9 0 0,1 0,18 a13,9 0 0,1 0,-18'
  };
  s.appendChild(el('path', {d:paths[kind]}));
  return s;
}

function linkedInIcon(){
  const s = el('svg', {viewBox:'0 0 24 24', fill:'currentColor'});
  s.appendChild(el('path', {d:'M4.98 3.5C4.98 4.88 3.94 6 2.5 6S0 4.88 0 3.5 1.04 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.83v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1V23h-4v-6.94c0-1.66-.03-3.79-2.31-3.79-2.32 0-2.68 1.81-2.68 3.67V23h-4V8z'}));
  return s;
}

/* ---------- renderers ---------- */
function renderLayerGrid(containerId, opts){
  opts = opts || {};
  const grid = document.getElementById(containerId);
  if(!grid) return;
  LAYERS.forEach(layer=>{
    const color = resolveColor(layer.color);
    const card = document.createElement(opts.linkToFramework ? 'a' : 'div');
    if(opts.linkToFramework) card.href = `framework.html#layer-${layer.num}`;
    card.className = 'layer-card' + (layer.num===5 ? ' active':'');
    card.dataset.layer = layer.num;
    const numEl = document.createElement('div');
    numEl.className='num'; numEl.style.color = color; numEl.textContent = layer.num;
    const icWrap = document.createElement('div'); icWrap.className='ic';
    icWrap.appendChild(layerIcon(layer.num, color));
    const h5 = document.createElement('h5'); h5.textContent = layer.name;
    const count = document.createElement('div'); count.className='count'; count.textContent = layer.count;
    card.append(numEl, icWrap, h5, count);
    grid.appendChild(card);
  });
}

function renderSignals(containerId, list, opts){
  opts = opts || {};
  const grid = document.getElementById(containerId);
  if(!grid) return;
  list.forEach(sig=>{
    const layer = layerByNum(sig.layer);
    const color = resolveColor(layer.color);
    const card = document.createElement('div'); card.className='signal-card'; card.id = sig.id;
    const icWrap = document.createElement('div'); icWrap.className='signal-icon';
    icWrap.style.background = color+'22'; icWrap.style.color = color;
    icWrap.appendChild(signalIcon(sig.icon));
    const num = document.createElement('div'); num.className='signal-num'; num.textContent = 'SIGNAL '+sig.num;
    const h4 = document.createElement('h4'); h4.textContent = sig.title;
    const foot = document.createElement('div'); foot.className='signal-foot';
    foot.innerHTML = `<span>Layer ${layer.num} · Impact: ${sig.impact}</span><span>1 min read</span>`;
    card.append(icWrap, num, h4, foot);
    if(opts.withShare){
      const shareUrl = window.location.origin + window.location.pathname.replace(/[^/]*$/, '') + `signals.html#${sig.id}`;
      const btn = document.createElement('a');
      btn.className = 'share-btn'; btn.target = '_blank'; btn.rel = 'noopener';
      btn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
      btn.appendChild(linkedInIcon());
      btn.appendChild(document.createTextNode('Share on LinkedIn'));
      card.appendChild(btn);
    }
    grid.appendChild(card);
  });
}

function renderTeam(containerId, list, opts){
  opts = opts || {};
  const grid = document.getElementById(containerId);
  if(!grid) return;
  list.forEach(m=>{
    const card = document.createElement('div'); card.className='team-card';
    const av = document.createElement('div'); av.className='avatar'; av.style.background = m.color;
    av.textContent = m.name.split(' ').map(w=>w[0]).join('').slice(0,2);
    const info = document.createElement('div'); info.className='team-info';
    info.innerHTML = `<div class="name">${m.name}</div><div class="role">${m.role}</div><div class="focus">${m.focus}</div><span class="li-link">in</span>`;
    card.append(av, info);
    grid.appendChild(card);
  });
}

function renderCityLights(groupId){
  const g = document.getElementById(groupId);
  if(!g) return;
  for(let i=0;i<140;i++){
    const x = Math.random()*400;
    const y = 60 + Math.random()*200;
    const r = Math.random()*1.4 + 0.3;
    const bias = Math.exp(-(Math.pow(x-170,2))/9000) + Math.exp(-(Math.pow(x-260,2))/6000);
    if(Math.random() > bias*0.9 + 0.12) continue;
    const c = el('circle', {cx:x, cy:y, r:r, fill:'#FDEE73', opacity: (0.3+Math.random()*0.7).toFixed(2)});
    g.appendChild(c);
  }
  for(let i=0;i<10;i++){
    const y = 40 + Math.random()*220;
    const x1 = Math.random()*400, x2 = x1 + Math.random()*120 - 60;
    g.appendChild(el('line', {x1, y1:y, x2, y2:y-30-Math.random()*40, stroke:'#5FCFC7', 'stroke-width':0.6, opacity:0.35}));
  }
}

function formatDate(iso){
  const d = new Date(iso+'T00:00:00');
  return d.toLocaleDateString('en-GB', {day:'numeric', month:'short', year:'numeric'});
}

/* ---------- mobile nav toggle ---------- */
function wireMobileMenu(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav.links');
  if(!btn || !nav) return;
  btn.addEventListener('click', ()=>{
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> nav.classList.remove('open')));
}

/* ---------- subscribe form (footer, present on every page) ---------- */
function wireSubscribeForm(){
  const form = document.getElementById('subscribe-form');
  if(!form) return;
  form.addEventListener('submit', function(e){
    e.preventDefault();
    document.getElementById('subscribe-note').textContent = "Thanks! (Placeholder — connect this form's action to your Kit form endpoint to actually collect subscribers.)";
  });
}
