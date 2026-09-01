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
  {id:'kirsten-rulf', name:'Kirsten Rulf', role:'Editor-in-Chief', focus:'AI policy, digital regulation, and institutional strategy', color:'#19A8AF', guest:false,
   photo:'team/kirsten-rulf.jpg', linkedin:'https://www.linkedin.com/in/kirstenrulf/',
   bio:'Kirsten Rulf is a Partner and Associate Director in BCG\'s Berlin office. Until April 2023, she served as Head of the "Fundamental Questions of Digital Policy" unit at the German Federal Chancellery, advising former Chancellors Angela Merkel and Olaf Scholz on national and international digital policy. During her tenure at the Federal Chancellery, she was responsible for the German federal government\'s AI and data strategies, as well as for negotiating the EU regulatory framework for digital transformation — including the AI Act, the Data Act, the Digital Services Act, and the Digital Markets Act. Prior to her time in government, Kirsten Rulf taught Artificial Intelligence and Compliance at Harvard Law School. In addition to her work at BCG, she currently is an advisor to the EU Commission\'s AI Office and DG Connect, she teaches at Yale University and is a 2023 UC Berkeley Tech Policy Fellow. Kirsten holds an MPP from the Harvard Kennedy School, two Master\'s degrees from the University of Oxford, and was a 2022 Yale World Fellow.'},
  {id:'hanna-mrugalla', name:'Hanna Mrugalla', role:'Research Fellow', focus:'Geoeconomics, digital sovereignty, and EU competitiveness', color:'#EA7B26', guest:false,
   photo:'team/hanna-mrugalla.jpg', linkedin:'https://www.linkedin.com/in/hanna-mrugalla-483347202/',
   bio:'Studying International Political Economy at LSE, Hanna is passionate about exploring the role Europe will play in geoeconomic competition with the U.S. and China. She is particularly drawn to the complexities of digital sovereignty and its implications for European competitiveness, an interest that has developed through her professional experience in German politics and public sector consulting. Holding a Bachelor\'s degree in Philosophy, Politics and Economics, she values interdisciplinary debate and learning from new perspectives.'},
  {id:'marie-gevers', name:'Marie Gevers', role:'Research Fellow', focus:'AI in economic decision-making and public policy', color:'#0F1F30', guest:false,
   photo:'team/marie-gevers.jpg', linkedin:'https://www.linkedin.com/in/marie-gevers-0b4b7a349/',
   bio:'Marie studies International Business Administration and Entrepreneurship with a minor in Business Psychology at Leuphana University Lüneburg. She is particularly interested in exploring how artificial intelligence is reshaping economic decision-making and public policy. As Finance & Founder\'s Associate at a Hamburg-based startup building AI-powered predictive maintenance solutions, she gets to see these dynamics play out first-hand.'},
  {id:'guest-contributor', name:'Guest Contributor', role:'External Perspective', focus:'Expert voices from across Europe', color:'#A79C8B', guest:true,
   photo:'team/guest-map.svg',
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
const CUSTOM_ICON_PATHS = {
  2: 'M18 51.9507C18 65.4051 23.5431 77.486 32.5108 86.2862L31.11 87.7137C21.7808 78.5588 16 65.9718 16 51.9507C16 38.034 21.6967 25.4308 30.9079 16.2902L32.3166 17.7098C23.4655 26.4932 18 38.5924 18 51.9507ZM32.4234 51.9507C32.4234 61.4105 36.3218 69.9725 42.6264 76.1595L41.2256 77.587C34.5564 71.0422 30.4234 61.9731 30.4234 51.9507C30.4234 41.9283 34.5564 32.8592 41.2256 26.3145L42.6264 27.7419C36.3218 33.9289 32.4234 42.4909 32.4234 51.9507ZM47.8319 51.9507C47.8319 57.402 50.0727 62.3374 53.7016 65.9109L52.2984 67.3359C48.3063 63.4048 45.8319 57.9633 45.8319 51.9507C45.8319 45.9382 48.3063 40.4966 52.2984 36.5655L53.7016 37.9906C50.0727 41.5641 47.8319 46.4995 47.8319 51.9507ZM110 51.9507C110 65.4051 104.457 77.486 95.4892 86.2862L96.89 87.7137C106.219 78.5588 112 65.9718 112 51.9507C112 38.034 106.303 25.4308 97.0921 16.2902L95.6834 17.7098C104.535 26.4932 110 38.5924 110 51.9507ZM95.5766 51.9507C95.5766 61.4105 91.6782 69.9725 85.3736 76.1595L86.7744 77.587C93.4436 71.0422 97.5766 61.9731 97.5766 51.9507C97.5766 41.9283 93.4436 32.8592 86.7744 26.3145L85.3736 27.7419C91.6782 33.9289 95.5766 42.4909 95.5766 51.9507ZM80.1681 51.9507C80.1681 57.402 77.9273 62.3374 74.2984 65.9109L75.7016 67.3359C79.6937 63.4049 82.1681 57.9633 82.1681 51.9507C82.1681 45.9382 79.6937 40.4966 75.7016 36.5655L74.2984 37.9906C77.9273 41.5641 80.1681 46.4995 80.1681 51.9507ZM69 52C69 54.7614 66.7614 57 64 57C61.2386 57 59 54.7614 59 52C59 49.2386 61.2386 47 64 47C66.7614 47 69 49.2386 69 52ZM64 55C65.6569 55 67 53.6568 67 52C67 50.3431 65.6569 49 64 49C62.3431 49 61 50.3431 61 52C61 53.6568 62.3431 55 64 55ZM36.5683 119.637L60.5683 58.0519L62.4317 58.7781L60.1212 64.707L64.25 68.8358L68.019 65.0668L65.5306 58.6814L67.3941 57.9552L76.3987 81.0613C76.4228 81.1108 76.4428 81.1621 76.4585 81.2149L91.4317 119.637L89.5683 120.363L83.0079 103.529L64.25 90.5194L45.0699 103.822L44.947 103.645L38.4317 120.363L36.5683 119.637ZM66.0047 89.3024L81.7081 100.193L75.0256 83.046L66.0047 89.3024ZM64.25 88.0854L54.5536 81.3605L64.25 71.6642L73.9464 81.3605L64.25 88.0854ZM62.4953 89.3024L46.1068 100.669L53.0808 82.773L62.4953 89.3024ZM54.8484 78.2374L59.3281 66.7423L62.8358 70.25L54.8484 78.2374ZM68.8121 67.102L72.8324 77.4182L65.6642 70.25L68.8121 67.102Z',
  3: 'M15 12C15 9.23858 17.2386 7 20 7H90C92.7614 7 95 9.23858 95 12V47H93V12C93 10.3431 91.6569 9 90 9H20C18.3431 9 17 10.3431 17 12V47H15V12ZM27 25H73V23H27V25ZM84.723 73H85.4615H92.5385H93.277L93.4942 73.7059L95.2384 79.3743C95.8584 79.5937 96.4633 79.8449 97.0512 80.1259L102.293 77.3506L102.946 77.0051L103.468 77.5273L108.473 82.5315L108.995 83.0537L108.649 83.7065L105.874 88.9486C106.155 89.5366 106.406 90.1416 106.626 90.7616L112.294 92.5058L113 92.723V93.4615V100.538V101.277L112.294 101.494L106.626 103.238C106.406 103.858 106.155 104.463 105.874 105.051L108.649 110.293L108.995 110.946L108.473 111.468L103.469 116.473L102.946 116.995L102.294 116.649L97.0514 113.874C96.4634 114.155 95.8584 114.406 95.2384 114.626L93.4942 120.294L93.277 121H92.5385H85.4615H84.723L84.5058 120.294L82.7616 114.626C82.1416 114.406 81.5366 114.155 80.9486 113.874L75.7064 116.649L75.0537 116.995L74.5314 116.473L69.5273 111.468L69.005 110.946L69.3506 110.293L72.1259 105.051C71.8449 104.463 71.5937 103.858 71.3743 103.238L65.7059 101.494L65 101.277V100.538V93.4615V92.723L65.7059 92.5058L71.3743 90.7616C71.5938 90.1416 71.845 89.5366 72.126 88.9486L69.3507 83.7064L69.0052 83.0537L69.5274 82.5314L74.5316 77.5273L75.0538 77.005L75.7066 77.3506L80.9488 80.1259C81.5367 79.8449 82.1416 79.5937 82.7616 79.3743L84.5058 73.7059L84.723 73ZM86.2001 75L84.5227 80.4516L84.3695 80.9495L83.8737 81.1093C83.0133 81.3867 82.1834 81.732 81.3901 82.1391L80.9264 82.377L80.4657 82.1331L75.4235 79.4638L71.4639 83.4234L74.1332 88.4655L74.3771 88.9262L74.1391 89.39C73.732 90.1833 73.3867 91.0133 73.1093 91.8737L72.9495 92.3695L72.4516 92.5227L67 94.2001V99.7999L72.4516 101.477L72.9495 101.631L73.1093 102.126C73.3867 102.987 73.732 103.817 74.139 104.61L74.377 105.074L74.1331 105.534L71.4638 110.576L75.4234 114.536L80.4655 111.867L80.9262 111.623L81.39 111.861C82.1833 112.268 83.0133 112.613 83.8737 112.891L84.3695 113.05L84.5227 113.548L86.2001 119H91.7999L93.4773 113.548L93.6305 113.05L94.1263 112.891C94.9867 112.613 95.8168 112.268 96.61 111.861L97.0738 111.623L97.5345 111.867L102.577 114.536L106.536 110.576L103.867 105.534L103.623 105.074L103.861 104.61C104.268 103.817 104.613 102.987 104.891 102.126L105.05 101.631L105.548 101.477L111 99.7999V94.2001L105.548 92.5227L105.05 92.3695L104.891 91.8737C104.613 91.0133 104.268 90.1833 103.861 89.39L103.623 88.9262L103.867 88.4655L106.536 83.4234L102.576 79.4638L97.5343 82.1331L97.0736 82.377L96.6099 82.1391C95.8166 81.732 94.9867 81.3867 94.1263 81.1093L93.6305 80.9495L93.4773 80.4516L91.7999 75H86.2001ZM89 91C85.6863 91 83 93.6863 83 97C83 100.314 85.6863 103 89 103C92.3137 103 95 100.314 95 97C95 93.6863 92.3137 91 89 91ZM81 97C81 92.5817 84.5817 89 89 89C93.4183 89 97 92.5817 97 97C97 101.418 93.4183 105 89 105C84.5817 105 81 101.418 81 97ZM83 36H27V34H83V36ZM27 47H73V45H27V47ZM35 61.0195C35 58.0689 36.9611 56 39.0163 56C41.0714 56 43.0326 58.0689 43.0326 61.0195C43.0326 63.9702 41.0714 66.0391 39.0163 66.0391C36.9611 66.0391 35 63.9702 35 61.0195ZM39.0163 54C35.5306 54 33 57.3212 33 61.0195C33 64.7179 35.5306 68.0391 39.0163 68.0391C42.502 68.0391 45.0326 64.7179 45.0326 61.0195C45.0326 57.3212 42.502 54 39.0163 54ZM22.0163 83C19.9611 83 18 85.0689 18 88.0195C18 90.9702 19.9611 93.0391 22.0163 93.0391C24.0714 93.0391 26.0326 90.9702 26.0326 88.0195C26.0326 85.0689 24.0714 83 22.0163 83ZM16 88.0195C16 84.3212 18.5306 81 22.0163 81C25.502 81 28.0326 84.3212 28.0326 88.0195C28.0326 91.7179 25.502 95.0391 22.0163 95.0391C18.5306 95.0391 16 91.7179 16 88.0195ZM35 113.02C35 110.069 36.9611 108 39.0163 108C41.0714 108 43.0326 110.069 43.0326 113.02C43.0326 115.97 41.0714 118.039 39.0163 118.039C36.9611 118.039 35 115.97 35 113.02ZM39.0163 106C35.5306 106 33 109.321 33 113.02C33 116.718 35.5306 120.039 39.0163 120.039C42.502 120.039 45.0326 116.718 45.0326 113.02C45.0326 109.321 42.502 106 39.0163 106ZM85.0163 56C82.9611 56 81 58.0689 81 61.0195C81 63.9702 82.9611 66.0391 85.0163 66.0391C87.0714 66.0391 89.0326 63.9702 89.0326 61.0195C89.0326 58.0689 87.0714 56 85.0163 56ZM79 61.0195C79 57.3212 81.5306 54 85.0163 54C88.502 54 91.0326 57.3212 91.0326 61.0195C91.0326 64.7179 88.502 68.0391 85.0163 68.0391C81.5306 68.0391 79 64.7179 79 61.0195ZM21 54V68.0456H23V54H21ZM21 120.046V106H23V120.046H21ZM55 54V68.0456H57V54H55ZM38 95.0456V81H40V95.0456H38ZM55 106V120.046H57V106H55ZM67 68.0456V54H69V68.0456H67ZM55 81V95.0456H57V81H55Z',
  4: 'M70 10H46H45V24H70V10ZM43 10V24V26H45H70H72V24V10V8H70H46H45H43H32C29.5809 8 27.5631 9.71793 27.0999 12.0003C27.0667 12.0001 27.0333 12 27 12C19.268 12 13 18.268 13 26C13 33.0529 18.2154 38.8878 25 39.8582V58.5C25 61.8137 27.6863 64.5 31 64.5H37V62.5H31C28.7909 62.5 27 60.7091 27 58.5V40C34.732 40 41 33.732 41 26C41 18.9885 35.8457 13.1808 29.1194 12.1594C29.4829 10.9117 30.635 10 32 10H43ZM27 38C33.6274 38 39 32.6274 39 26C39 19.3726 33.6274 14 27 14C20.3726 14 15 19.3726 15 26C15 32.6274 20.3726 38 27 38ZM54 44V49H56V44H54ZM59 59H69V69H59V59ZM57 57H59H69H71V59V69V71H69H59H57V69V59V57ZM79 54H84V56H79V54ZM54 79V84H56V79H54ZM44 54H49V56H44V54ZM72 44V49H74V44H72ZM79 72H84V74H79V72ZM72 79V84H74V79H72ZM44 72H49V74H44V72ZM66 44V49H68V44H66ZM79 66H84V68H79V66ZM66 79V84H68V79H66ZM44 66H49V68H44V66ZM60 44V49H62V44H60ZM79 60H84V62H79V60ZM60 79V84H62V79H60ZM44 60H49V62H44V60ZM55 53H73C74.1046 53 75 53.8954 75 55V73C75 74.1046 74.1046 75 73 75H55C53.8954 75 53 74.1046 53 73V55C53 53.8954 53.8954 53 55 53ZM51 55C51 52.7909 52.7909 51 55 51H73C75.2091 51 77 52.7909 77 55V73C77 75.2091 75.2091 77 73 77H55C52.7909 77 51 75.2091 51 73V55ZM26 94C26 98.4183 22.4183 102 18 102C13.5817 102 10 98.4183 10 94C10 89.5817 13.5817 86 18 86C22.4183 86 26 89.5817 26 94ZM19.5 103.888C24.3113 103.165 28 99.013 28 94C28 88.4771 23.5228 84 18 84C12.4772 84 8 88.4771 8 94C8 99.3552 12.2094 103.727 17.5 103.988V106.5C17.5 109.814 20.1863 112.5 23.5 112.5H60V117C60 118.657 61.3431 120 63 120H83C84.6569 120 86 118.657 86 117V108H94V109C94 110.657 95.3431 112 97 112H109C110.657 112 112 110.657 112 109V92.9451C116.5 92.4476 120 88.6326 120 84C120 79.3674 116.5 75.5524 112 75.0549V69C112 65.6863 109.314 63 106 63H92V65H106C108.209 65 110 66.7909 110 69V75.0549C105.828 75.5161 102.516 78.8284 102.055 83H97C95.3431 83 94 84.3431 94 86V106H86V97C86 95.3431 84.6569 94 83 94H63C61.3431 94 60 95.3431 60 97V110.5H23.5C21.2909 110.5 19.5 108.709 19.5 106.5V103.888ZM112 90.9291C115.392 90.4439 118 87.5265 118 84C118 80.134 114.866 77 111 77C107.474 77 104.556 79.6077 104.071 83H109C110.657 83 112 84.3431 112 86V90.9291ZM110 92.9451V109C110 109.552 109.552 110 109 110H97C96.4477 110 96 109.552 96 109V86C96 85.4477 96.4477 85 97 85H102.055C102.516 89.1716 105.828 92.4839 110 92.9451ZM110 90.9291C106.934 90.4906 104.509 88.0657 104.071 85H109C109.552 85 110 85.4477 110 86V90.9291ZM77 10H87V24H77V10ZM75 8H77H87H89V10V24V26H87H77H75V24V10V8ZM97 10H94V24H97V10ZM94 8H92V10V24V26H94H97H99V24V10V8H97H94ZM102 8H104V10V24V26H102V24V10V8ZM63 96C62.4477 96 62 96.4477 62 97V117C62 117.552 62.4477 118 63 118H83C83.5523 118 84 117.552 84 117V97C84 96.4477 83.5523 96 83 96H63Z'
};

function layerIcon(num, color){
  const s = el('svg', {viewBox:'0 0 44 44', width:'44', height:'44'});
  s.appendChild(el('circle', {cx:22, cy:22, r:20, fill:'none', stroke:color, 'stroke-width':2}));
  if(CUSTOM_ICON_PATHS[num]){
    const cg = el('g', {transform:'translate(9,9) scale(0.203125)'});
    cg.appendChild(el('path', {d: CUSTOM_ICON_PATHS[num], fill: color, 'fill-rule':'evenodd', 'clip-rule':'evenodd'}));
    s.appendChild(cg);
    return s;
  }
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
    const av = document.createElement('div'); av.className='avatar';
    if(m.photo){
      const img = document.createElement('img'); img.src = m.photo; img.alt = m.name;
      img.style.width='100%'; img.style.height='100%'; img.style.objectFit='cover'; img.style.borderRadius='inherit';
      av.appendChild(img);
    } else {
      av.style.background = m.color;
      av.textContent = m.name.split(' ').map(w=>w[0]).join('').slice(0,2);
    }
    const info = document.createElement('div'); info.className='team-info';
    const liHref = m.linkedin ? ` href="${m.linkedin}" target="_blank" rel="noopener"` : '';
    const liTag = m.linkedin ? 'a' : 'span';
    info.innerHTML = `<div class="name">${m.name}</div><div class="role">${m.role}</div><div class="focus">${m.focus}</div><${liTag} class="li-link"${liHref}>in</${liTag}>`;
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
