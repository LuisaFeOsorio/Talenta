/* =========================================================
   Talenta · Componentes compartidos por todas las pantallas
   ========================================================= */

/* ---------- Iconos (stroke 24×24) ---------- */
const ICONS = {
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
  bell:'<path d="M18 8a6 6 0 1 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
  bookmark:'<path d="M6 4h12v17l-6-4.2L6 21Z"/>',
  'chevron-down':'<path d="m6 9 6 6 6-6"/>',
  'chevron-right':'<path d="m9 6 6 6-6 6"/>',
  'chevron-left':'<path d="m15 6-6 6 6 6"/>',
  check:'<path d="m5 13 4 4L19 7"/>',
  x:'<path d="M18 6 6 18M6 6l12 12"/>',
  'arrow-left':'<path d="M19 12H5"/><path d="m11 18-6-6 6-6"/>',
  'arrow-right':'<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>',
  'arrow-up':'<path d="M12 19V5"/><path d="m6 11 6-6 6 6"/>',
  upload:'<path d="M12 16V4"/><path d="m7 9 5-5 5 5"/><path d="M4 16v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/>',
  download:'<path d="M12 4v12"/><path d="m7 11 5 5 5-5"/><path d="M4 20h16"/>',
  'map-pin':'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.4"/>',
  briefcase:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M3 12h18"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  building:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1"/>',
  users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9"/><path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 11h18"/>',
  message:'<path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12Z"/>',
  settings:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/>',
  lock:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  help:'<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
  filter:'<path d="M4 5h16l-6 7v6l-4 2v-8L4 5Z"/>',
  sliders:'<path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0"/><circle cx="16" cy="6" r="2"/><circle cx="10" cy="12" r="2"/><circle cx="18" cy="18" r="2"/>',
  star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  minus:'<path d="M5 12h14"/>',
  eye:'<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
  'eye-off':'<path d="m3 3 18 18"/><path d="M10.6 6.2A9.9 9.9 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-3 3.6"/><path d="M6.3 6.3A17 17 0 0 0 2 12s3.5 6 10 6a9.6 9.6 0 0 0 3.6-.7"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
  trash:'<path d="M4 7h16M10 11v6M14 11v6"/><path d="M6 7l1 13a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1l1-13"/><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>',
  edit:'<path d="M4 20h4l10-10a2.8 2.8 0 0 0-4-4L4 16v4Z"/><path d="m14 6 4 4"/>',
  external:'<path d="M14 4h6v6"/><path d="m20 4-9 9"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  focus:'<path d="M8 3H5a2 2 0 0 0-2 2v3"/><path d="M16 3h3a2 2 0 0 1 2 2v3"/><path d="M21 16v3a2 2 0 0 1-2 2h-3"/><path d="M3 16v3a2 2 0 0 0 2 2h3"/>',
  alert:'<path d="M12 3 2.5 20h19L12 3Z"/><path d="M12 9v5M12 17h.01"/>',
  info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>',
  more:'<circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/>',
  logout:'<path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3"/><path d="M10 17l-5-5 5-5"/><path d="M15 12H5"/>',
  send:'<path d="M21 3 10.5 13.5"/><path d="M21 3 14 21l-3.5-7.5L3 10Z"/>',
  paperclip:'<path d="m20 11-8.5 8.5a4 4 0 0 1-5.7-5.7L14.3 5.3a3 3 0 0 1 4.2 4.2l-8.5 8.5a2 2 0 0 1-2.8-2.8l7.8-7.8"/>',
  refresh:'<path d="M20 11a8 8 0 0 0-14-4L3 10"/><path d="M3 5v5h5"/><path d="M4 13a8 8 0 0 0 14 4l3-3"/><path d="M21 19v-5h-5"/>',
  mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  phone:'<path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
  globe:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/>',
  home:'<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/>',
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  sparkle:'<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Z"/>',
  trending:'<path d="m3 17 6-6 4 4 8-8"/><path d="M21 7h-6M21 7v6"/>',
  award:'<circle cx="12" cy="9" r="5"/><path d="m8.5 13.5-1.5 7 5-2.5 5 2.5-1.5-7"/>',
  file:'<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8Z"/><path d="M14 3v5h5"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  play:'<path d="M8 5v14l11-7Z"/>',
  pause:'<path d="M9 5v14M15 5v14"/>',
  copy:'<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h8"/>',
  code:'<path d="m8 8-4 4 4 4M16 8l4 4-4 4"/>',
  database:'<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  chart:'<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  flag:'<path d="M5 21V4h9l1 2h4v9h-5l-1-2H5"/>',
  heart:'<path d="M12 20s-7-4.4-7-9a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 4.6-7 9-7 9Z"/>',
  'check-circle':'<circle cx="12" cy="12" r="9"/><path d="m8.5 12.2 2.5 2.5 4.5-5"/>',
  'x-circle':'<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/>',
  'alert-circle':'<circle cx="12" cy="12" r="9"/><path d="M12 8v5M12 16h.01"/>',
  'arrow-up-right':'<path d="M7 17 17 7"/><path d="M8 7h9v9"/>',
  menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
  gift:'<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9"/><path d="M12 8v13"/><path d="M12 8S10.5 3 8 3a2.5 2.5 0 0 0 0 5M12 8s1.5-5 4-5a2.5 2.5 0 0 1 0 5"/>',
  wifi:'<path d="M5 12.5a10 10 0 0 1 14 0"/><path d="M8.5 16a5.5 5.5 0 0 1 7 0"/><path d="M12 19.5h.01"/>'
};

function ic(name, cls){
  const p = ICONS[name] || ICONS.info;
  return '<svg class="ic' + (cls ? ' ' + cls : '') + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + p + '</svg>';
}

/* ---------- Datos de ejemplo ---------- */
const JOBS = [
  { id:'j1', title:'Desarrollador Full Stack', company:'Nova Systems', initials:'NS', cat:'tech', catLabel:'Tecnología',
    city:'Bogotá', mode:'Híbrido', salary:'$8.000.000 – $11.000.000', time:'hace 2 días', match:94, applicants:87,
    level:'Senior', saved:false, desc:'Construye productos digitales para el sector financiero con un equipo de 12 personas.' },
  { id:'j2', title:'Analista de Datos', company:'DataAndina', initials:'DA', cat:'tech', catLabel:'Tecnología',
    city:'Remoto', mode:'Remoto', salary:'$4.500.000 – $6.000.000', time:'hace 1 día', match:88, applicants:42,
    level:'Junior', saved:true, desc:'Modela y visualiza datos para decisiones comerciales.' },
  { id:'j3', title:'Diseñador UX/UI', company:'Estudio Bruma', initials:'EB', cat:'design', catLabel:'Diseño',
    city:'Medellín', mode:'Presencial', salary:'$5.200.000 – $7.000.000', time:'hace 5 horas', match:91, applicants:31,
    level:'Mid', saved:true, desc:'Diseña experiencias para productos de educación y cultura.' },
  { id:'j4', title:'Coordinador de Marketing Digital', company:'Mercadeo Verde', initials:'MV', cat:'market', catLabel:'Marketing',
    city:'Cali', mode:'Híbrido', salary:'$4.800.000', time:'hace 4 días', match:76, applicants:58,
    level:'Mid', saved:false, desc:'Lidera campañas de adquisición y contenido.' },
  { id:'j5', title:'Ingeniero DevOps', company:'CloudQuindío', initials:'CQ', cat:'tech', catLabel:'Tecnología',
    city:'Remoto', mode:'Remoto', salary:'$9.500.000 – $13.000.000', time:'hace 6 horas', match:82, applicants:23,
    level:'Senior', saved:false, desc:'Automatiza despliegues y observabilidad en la nube.' },
  { id:'j6', title:'Asistente Administrativo', company:'Grupo Café', initials:'GC', cat:'admin', catLabel:'Administración',
    city:'Armenia', mode:'Presencial', salary:'$2.400.000 – $3.000.000', time:'hace 3 días', match:71, applicants:64,
    level:'Junior', saved:false, desc:'Apoya procesos administrativos y atención a proveedores.' },
  { id:'j7', title:'Product Manager', company:'FinPay', initials:'FP', cat:'product', catLabel:'Producto',
    city:'Bogotá', mode:'Híbrido', salary:'$10.000.000 – $14.000.000', time:'hace 1 semana', match:79, applicants:39,
    level:'Senior', saved:false, desc:'Define la hoja de ruta de productos de pago.' },
  { id:'j8', title:'Técnico de Soporte TI', company:'RedAndes', initials:'RA', cat:'tech', catLabel:'Tecnología',
    city:'Manizales', mode:'Presencial', salary:'$2.800.000', time:'hace 2 días', match:84, applicants:47,
    level:'Junior', saved:false, desc:'Brinda soporte de primer y segundo nivel.' },
  { id:'j9', title:'Especialista en Ciberseguridad', company:'SecureOne', initials:'SO', cat:'tech', catLabel:'Tecnología',
    city:'Remoto', mode:'Remoto', salary:'$11.000.000 – $15.000.000', time:'hace 8 horas', match:86, applicants:18,
    level:'Senior', saved:false, desc:'Protege infraestructura crítica y lidera auditorías.' }
];

const AC_SOURCES = {
  ciudades: [
    { label:'Armenia, Quindío', meta:'18 empleos' },
    { label:'Bogotá D.C.', meta:'124 empleos' },
    { label:'Medellín, Antioquia', meta:'96 empleos' },
    { label:'Cali, Valle del Cauca', meta:'54 empleos' },
    { label:'Manizales, Caldas', meta:'21 empleos' },
    { label:'Pereira, Risaralda', meta:'17 empleos' }
  ],
  cargos: [
    { label:'Desarrollador Full Stack', meta:'Tecnología' },
    { label:'Analista de datos', meta:'Tecnología' },
    { label:'Diseñador UX/UI', meta:'Diseño' },
    { label:'Product Manager', meta:'Producto' },
    { label:'Ingeniero DevOps', meta:'Tecnología' }
  ],
  habilidades: [
    { label:'React', meta:'Tecnología' },
    { label:'Node.js', meta:'Tecnología' },
    { label:'SQL', meta:'Datos' },
    { label:'Docker', meta:'DevOps' },
    { label:'Figma', meta:'Diseño' },
    { label:'Scrum', meta:'Gestión' },
    { label:'Python', meta:'Datos' },
    { label:'Comunicación asertiva', meta:'Habilidad blanda' }
  ],
  empresas: [
    { label:'Nova Systems', meta:'Tecnología · 120 empleados' },
    { label:'DataAndina', meta:'Datos · 48 empleados' },
    { label:'Estudio Bruma', meta:'Diseño · 22 empleados' },
    { label:'CloudQuindío', meta:'Cloud · 64 empleados' }
  ],
  idiomas: [
    { label:'Inglés', meta:'B2' }, { label:'Portugués', meta:'A2' },
    { label:'Francés', meta:'A1' }, { label:'Alemán', meta:'A1' }
  ]
};

/* ---------- Helpers básicos ---------- */
function btn(label, o){
  o = o || {};
  const cls = ['btn','btn--' + (o.kind || 'primary'), o.size ? 'btn--' + o.size : '', o.block ? 'btn--block' : '', o.cls || ''].filter(Boolean).join(' ');
  const attrs = [
    o.id ? 'id="' + o.id + '"' : '',
    o.go ? 'data-go="' + o.go + '"' : '',
    o.demo ? 'data-demo="' + o.demo + '"' : '',
    o.action ? 'data-action="' + o.action + '"' : '',
    o.title ? 'title="' + o.title + '"' : '',
    o.aria ? o.aria : '',
    o.disabled ? 'disabled' : '',
    o.type ? 'type="' + o.type + '"' : 'type="button"',
    o.toggle ? 'aria-pressed="' + (o.toggle === true ? 'true' : 'false') + '"' : ''
  ].filter(Boolean).join(' ');
  const inner = (o.icon ? ic(o.icon) : '') + '<span>' + label + '</span>' + (o.iconRight ? ic(o.iconRight) : '');
  if (o.href) return '<a class="' + cls + '" href="' + o.href + '" ' + attrs + '>' + inner + '</a>';
  return '<button class="' + cls + '" ' + attrs + '>' + inner + '</button>';
}

function badge(text, kind, dot){
  const cls = 'badge' + (kind ? ' badge--' + kind : '') + (dot ? ' badge--dot' : '');
  return '<span class="' + cls + '">' + text + '</span>';
}

function chip(text, o){
  o = o || {};
  const cls = 'chip' + (o.kind ? ' chip--' + o.kind : '') + (o.size ? ' chip--' + o.size : '');
  const remove = o.removable ? '<button type="button" data-demo="remove-chip" aria-label="Quitar ' + text + '">' + ic('x') + '</button>' : '';
  const lead = o.icon ? ic(o.icon) : '';
  return '<span class="' + cls + '">' + lead + text + remove + '</span>';
}

function avatar(initials, o){
  o = o || {};
  const cls = ['avatar', o.size ? 'avatar--' + o.size : '', o.square ? 'avatar--square' : '', o.tone ? 'avatar--' + o.tone : ''].filter(Boolean).join(' ');
  return '<span class="' + cls + '" aria-hidden="true">' + initials + '</span>';
}

function alert(kind, title, text){
  const icons = { info:'info', ok:'check-circle', warn:'alert', bad:'x-circle', neutral:'info' };
  return '<div class="alert alert--' + kind + '">' + ic(icons[kind] || 'info') +
    '<div class="alert__body">' + (title ? '<div class="alert__title">' + title + '</div>' : '') + (text || '') + '</div></div>';
}

function progress(o){
  o = o || {};
  const tone = o.tone ? ' progress--' + o.tone : '';
  const size = o.size ? ' progress--' + o.size : '';
  const shown = o.valueText || (o.indet ? 'En curso' : (o.value || 0) + '%');
  const head = o.label ? '<div class="progress-head"><span class="progress-head__label">' + o.label + '</span><span class="progress-head__value">' + shown + '</span></div>' : '';
  const aria = o.indet
    ? 'aria-valuetext="' + shown + '"'
    : 'aria-valuenow="' + (o.value || 0) + '" aria-valuemin="0" aria-valuemax="100"';
  return '<div class="progress-wrap">' + head + '<div class="progress' + tone + size + (o.indet ? ' progress--indet' : '') + '" role="progressbar" ' + aria + ' aria-label="' + (o.label || 'Progreso') + '"><div class="progress__bar" style="width:' + (o.value || 0) + '%"></div></div></div>';
}

function ring(value, o){
  o = o || {};
  const size = o.size || 64, sw = o.stroke || 6;
  const r = (size - sw) / 2, c = 2 * Math.PI * r;
  const off = c * (1 - value / 100);
  const numSize = size < 58 ? 12 : size < 72 ? 15 : 17;
  return '<div class="ring' + (o.tone === 'ok' ? ' ring--ok' : '') + '" style="width:' + size + 'px;height:' + size + 'px">' +
    '<svg width="' + size + '" height="' + size + '" aria-hidden="true">' +
    '<circle class="ring__track" cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke-width="' + sw + '"/>' +
    '<circle class="ring__fill" cx="' + size / 2 + '" cy="' + size / 2 + '" r="' + r + '" fill="none" stroke-width="' + sw + '" stroke-dasharray="' + c.toFixed(1) + '" stroke-dashoffset="' + off.toFixed(1) + '"/>' +
    '</svg><div class="ring__text"><span class="ring__num" style="font-size:' + numSize + 'px">' + value + '%</span>' +
    (o.label ? '<span class="ring__cap">' + o.label + '</span>' : '') + '</div></div>';
}

/* ---------- Campos de formulario ---------- */
function fieldState(o){
  if (o.error) return ' is-invalid';
  if (o.valid) return ' is-valid';
  return '';
}

function field(o){
  const id = o.id;
  const full = o.full ? ' field--full' : '';
  const counter = o.maxlength && o.counter !== false;
  const describedBy = [o.hint ? id + '-hint' : '', id + '-msg'].filter(Boolean).join(' ');
  const wrapCls = 'input-wrap' + (o.icon ? ' input-wrap--icon' : '') + (o.suffix ? ' input-wrap--suffix' : '');
  let control;

  if (o.type === 'textarea'){
    control = '<textarea class="textarea' + (o.tall ? ' textarea--tall' : '') + '" id="' + id + '" name="' + (o.name || id) + '" placeholder="' + (o.placeholder || '') + '"' +
      (o.maxlength ? ' maxlength="' + o.maxlength + '" data-counter="' + id + '"' : '') +
      (o.required ? ' aria-required="true" data-required="true"' : '') +
      ' aria-describedby="' + describedBy + '"' + (o.error ? ' aria-invalid="true"' : '') +
      (o.readonly ? ' readonly' : '') + (o.disabled ? ' disabled' : '') + '>' + (o.value || '') + '</textarea>' +
      (counter ? '<span class="field__counter" data-counter-out="' + id + '">' + (o.value || '').length + '/' + o.maxlength + '</span>' : '');
  } else {
    const input = '<input class="input" id="' + id + '" name="' + (o.name || id) + '" type="' + (o.type || 'text') + '"' +
      ' placeholder="' + (o.placeholder || '') + '"' +
      (o.value ? ' value="' + o.value + '"' : '') +
      (o.ac ? ' data-ac="' + o.ac + '" autocomplete="off" role="combobox" aria-autocomplete="list" aria-expanded="false"' : '') +
      (o.autocomplete ? ' autocomplete="' + o.autocomplete + '"' : '') +
      (o.maxlength ? ' maxlength="' + o.maxlength + '" data-counter="' + id + '"' : '') +
      (o.required ? ' aria-required="true" data-required="true"' : '') +
      (o.readonly ? ' readonly' : '') + (o.disabled ? ' disabled' : '') +
      (o.inputmode ? ' inputmode="' + o.inputmode + '"' : '') +
      ' aria-describedby="' + describedBy + '"' + (o.error ? ' aria-invalid="true"' : '') + '>';
    const acList = o.ac ? '<div class="ac__list" role="listbox" aria-label="Sugerencias">' +
      (AC_SOURCES[o.ac] || []).map(function(it){
        return '<div class="ac__item" role="option" data-value="' + it.label + '">' + ic(o.ac === 'ciudades' ? 'map-pin' : o.ac === 'habilidades' ? 'sparkle' : 'search') +
          '<span>' + it.label + '</span><small>' + (it.meta || '') + '</small></div>';
      }).join('') +
      '<div class="ac__hint">Sugerencias basadas en tu perfil · usa ↑ ↓ para navegar</div></div>' : '';
    control = '<div class="' + wrapCls + '">' + (o.icon ? ic(o.icon) : '') + input +
      '<span class="input-wrap__state input-wrap__state--ok">' + ic('check') + '</span>' +
      '<span class="input-wrap__state input-wrap__state--bad">' + ic('alert') + '</span>' +
      (o.suffix || '') + '</div>' + acList +
      (counter ? '<span class="field__counter" data-counter-out="' + id + '">' + (o.value || '').length + '/' + o.maxlength + '</span>' : '');
  }

  return '<div class="field' + full + fieldState(o) + (counter ? ' field--counter' : '') + '" data-field>' +
    '<label class="field__label" for="' + id + '">' + o.label +
      (o.required ? ' <span class="req" aria-hidden="true">*</span><span class="sr-only">(obligatorio)</span>' : '') +
      (o.optional ? ' <span class="opt">(opcional)</span>' : '') +
    '</label>' +
    (o.ac ? '<div class="ac' + (o.acOpen ? ' is-open' : '') + '" data-ac-wrap>' : '') + control + (o.ac ? '</div>' : '') +
    (o.hint ? '<p class="field__hint" id="' + id + '-hint">' + ic('info') + '<span>' + o.hint + '</span></p>' : '') +
    '<p class="field__msg' + (o.error ? ' field__msg--error is-on' : o.valid && o.okText ? ' field__msg--ok is-on' : '') + '" id="' + id + '-msg" data-msg aria-live="polite">' +
      (o.error ? ic('alert') + '<span>' + o.error + '</span>' : (o.valid && o.okText ? ic('check') + '<span>' + o.okText + '</span>' : '')) +
    '</p>' +
  '</div>';
}

function select(o){
  const id = o.id;
  const opts = (o.options || []).map(function(op){
    const val = typeof op === 'string' ? op : op.value;
    const lab = typeof op === 'string' ? op : op.label;
    return '<option value="' + val + '"' + (o.value === val ? ' selected' : '') + '>' + lab + '</option>';
  }).join('');
  return '<div class="field' + (o.full ? ' field--full' : '') + fieldState(o) + '" data-field>' +
    (o.label ? '<label class="field__label" for="' + id + '">' + o.label +
      (o.required ? ' <span class="req" aria-hidden="true">*</span><span class="sr-only">(obligatorio)</span>' : '') +
      (o.optional ? ' <span class="opt">(opcional)</span>' : '') + '</label>' : '') +
    '<select class="select" id="' + id + '" name="' + (o.name || id) + '"' +
      (o.required ? ' aria-required="true" data-required="true"' : '') +
      (o.disabled ? ' disabled' : '') + ' aria-describedby="' + id + '-msg">' +
      '<option value="">' + (o.placeholder || 'Selecciona una opción') + '</option>' + opts + '</select>' +
    (o.hint ? '<p class="field__hint" id="' + id + '-hint">' + ic('info') + '<span>' + o.hint + '</span></p>' : '') +
    '<p class="field__msg' + (o.error ? ' field__msg--error is-on' : '') + '" id="' + id + '-msg" data-msg aria-live="polite">' +
      (o.error ? ic('alert') + '<span>' + o.error + '</span>' : '') + '</p>' +
  '</div>';
}

function check(o){
  return '<label class="check"><input type="checkbox" id="' + o.id + '" name="' + (o.name || o.id) + '"' +
    (o.checked ? ' checked' : '') + (o.required ? ' data-required="true" aria-required="true"' : '') + '>' +
    '<span>' + o.label + '</span></label>';
}

function choice(o){
  return '<label class="choice' + (o.checked ? ' is-selected' : '') + '">' +
    '<input type="' + (o.type || 'radio') + '" name="' + o.name + '"' + (o.value ? ' value="' + o.value + '"' : '') +
    (o.checked ? ' checked' : '') + (o.required ? ' data-required="true"' : '') + '>' +
    '<span class="choice__text">' + (o.title ? '<span class="choice__title">' + o.title + '</span>' : '') +
    (o.desc ? '<span class="choice__desc">' + o.desc + '</span>' : '') + '</span></label>';
}

function toggleRow(o){
  return '<div class="toggle-row"><div class="toggle-row__text">' +
    '<span class="toggle-row__title">' + o.title + '</span>' +
    (o.desc ? '<span class="toggle-row__desc">' + o.desc + '</span>' : '') + '</div>' +
    '<button type="button" class="toggle' + (o.on ? ' is-on' : '') + '" role="switch" aria-checked="' + (o.on ? 'true' : 'false') + '" aria-label="' + o.title + '" data-demo="toggle"></button></div>';
}

function fileRow(o){
  return '<div class="file-row">' +
    '<span class="file-row__icon">' + ic(o.icon || 'file') + '</span>' +
    '<div class="file-row__meta"><div class="file-row__name">' + o.name + '</div>' +
    '<div class="tiny dim">' + o.meta + '</div>' +
    (o.progress !== undefined ? '<div class="mt-2">' + progress({ value:o.progress, size:'xs', tone:o.progress === 100 ? 'ok' : undefined }) + '</div>' : '') +
    '</div>' +
    (o.done ? '<span class="badge badge--ok">' + ic('check') + 'Listo</span>' : '') +
    (o.action || '') + '</div>';
}

function dropzone(o){
  o = o || {};
  return '<div class="dropzone"><span class="dropzone__icon">' + ic('upload') + '</span>' +
    '<div class="small strong">' + (o.title || 'Arrastra tu archivo aquí') + '</div>' +
    '<div class="tiny dim">' + (o.text || 'PDF o DOCX · máximo 5 MB') + '</div>' +
    (o.btn || '') + '</div>';
}

/* ---------- Navegación y estructura ---------- */
function appHeader(o){
  o = o || {};
  const role = o.role || 'candidate';
  const active = o.active || '';
  const navCandidate = [
    { id:'inicio', label:'Inicio', icon:'home', go:'C01' },
    { id:'buscar', label:'Buscar empleo', icon:'search', go:'C02' },
    { id:'postulaciones', label:'Mis postulaciones', icon:'briefcase', go:'D05' },
    { id:'mensajes', label:'Mensajes', icon:'message', go:'E02' },
    { id:'guardados', label:'Guardados', icon:'bookmark', go:'C05' }
  ];
  const navCompany = [
    { id:'panel', label:'Panel', icon:'grid', go:'F01' },
    { id:'vacantes', label:'Vacantes', icon:'briefcase', go:'F04' },
    { id:'candidatos', label:'Candidatos', icon:'users', go:'F04' },
    { id:'mensajes', label:'Mensajes', icon:'message', go:'E02' }
  ];
  const items = role === 'company' ? navCompany : navCandidate;
  return '<header class="app-bar">' +
    '<a class="brand" data-go="' + (role === 'company' ? 'F01' : 'C01') + '"><span class="brand__mark">T</span>' +
      '<span class="brand__text"><strong>Talenta</strong><small>' + (role === 'company' ? 'Empresas' : 'Bolsa de empleo') + '</small></span></a>' +
    '<nav class="app-nav" aria-label="Navegación principal">' +
      items.map(function(it){
        return '<a href="#" data-go="' + it.go + '" class="' + (active === it.id ? 'is-active' : '') + '">' + ic(it.icon) + it.label + '</a>';
      }).join('') +
    '</nav>' +
    '<div class="app-bar__spacer"></div>' +
    (o.search ? '<label class="hsearch">' + ic('search') + '<input type="search" placeholder="' + (o.searchPlaceholder || 'Buscar cargo, empresa o ciudad') + '" aria-label="Buscar empleos"><kbd>⌘K</kbd></label>' : '') +
    '<button class="iconbtn" aria-label="Notificaciones" data-go="E03">' + ic('bell') + '<span class="iconbtn__dot"></span></button>' +
    '<button class="avatar-menu" data-go="' + (role === 'company' ? 'F01' : 'B05') + '" aria-label="Menú de cuenta">' +
      (role === 'company' ? avatar('NS', { square:true, tone:'company' }) : avatar('VR')) + ic('chevron-down') +
    '</button>' +
  '</header>';
}

function onboardHeader(o){
  o = o || {};
  return '<header class="onboard__bar">' +
    '<a class="brand" data-go="C01"><span class="brand__mark">T</span><span class="brand__text"><strong>Talenta</strong><small>Configura tu cuenta</small></span></a>' +
    '<div class="app-bar__spacer"></div>' +
    '<span class="tiny dim">' + (o.saveText || 'Guardado automático activo') + '</span>' +
    '<button class="btn btn--ghost btn--sm" data-demo="toast-ok">Guardar y salir</button>' +
    '<button class="iconbtn" aria-label="Ayuda" data-go="E06">' + ic('help') + '</button>' +
    avatar('VR', { size:'sm' }) +
  '</header>';
}

function stepper(steps, current, o){
  o = o || {};
  return '<div class="stepper' + (o.compact ? ' stepper--compact' : '') + '" role="list" aria-label="Progreso del formulario">' +
    steps.map(function(s, i){
      const n = i + 1;
      const state = n < current ? ' is-done' : n === current ? ' is-current' : '';
      const label = typeof s === 'string' ? s : s.label;
      const sub = typeof s === 'object' && s.sub ? '<span class="step__sub">' + s.sub + '</span>' : '';
      return '<div class="step' + state + '" role="listitem" aria-current="' + (n === current ? 'step' : 'false') + '">' +
        '<div class="step__top"><span class="step__num">' + (n < current ? ic('check') : n) + '</span><span class="step__line"></span></div>' +
        '<span class="step__label">' + label + '</span>' + sub + '</div>';
    }).join('') + '</div>';
}

function pageHead(o){
  return '<div class="split" style="align-items:flex-start">' +
    '<div class="stack" style="gap:5px;min-width:0">' +
      (o.eyebrow ? '<span class="eyebrow">' + o.eyebrow + '</span>' : '') +
      '<h1 class="h1">' + o.title + '</h1>' +
      (o.sub ? '<p class="small muted" style="max-width:640px">' + o.sub + '</p>' : '') +
    '</div>' +
    (o.actions ? '<div class="btn-row" style="flex:0 0 auto">' + o.actions + '</div>' : '') +
  '</div>';
}

function metaRow(icon, label, value){
  return '<div class="meta-list__row"><dt>' + ic(icon) + label + '</dt><dd>' + value + '</dd></div>';
}

function jobCard(job, o){
  o = o || {};
  const j = typeof job === 'string' ? JOBS.find(function(x){ return x.id === job; }) : job;
  if (!j) return '';
  const go = o.go || 'C04';
  return '<article class="jobcard' + (o.mini ? ' jobcard--mini' : '') + '" data-go="' + go + '" aria-label="' + j.title + ' en ' + j.company + '">' +
    (o.match !== false ? '<span class="jobcard__match">' + ic('sparkle') + j.match + '% match</span>' : '') +
    '<div class="jobcard__top">' +
      '<span class="jobcard__logo">' + j.initials + '</span>' +
      '<div class="jobcard__head">' +
        '<h3 class="jobcard__title">' + j.title + '</h3>' +
        '<div class="jobcard__company">' + ic('building') + j.company + '</div>' +
      '</div>' +
      '<button class="jobcard__save' + (j.saved ? ' is-on' : '') + '" data-demo="save" aria-label="' + (j.saved ? 'Quitar de guardados' : 'Guardar vacante') + '" aria-pressed="' + (j.saved ? 'true' : 'false') + '">' + ic('bookmark') + '</button>' +
    '</div>' +
    '<div class="jobcard__chips">' +
      '<span class="tag-cat tag-cat--' + j.cat + '">' + j.catLabel + '</span>' +
      chip(j.mode, { kind:'outline', size:'sm' }) +
      chip(j.city, { kind:'outline', size:'sm' }) +
    '</div>' +
    (o.desc && j.desc ? '<p class="tiny muted" style="line-height:1.45">' + j.desc + '</p>' : '') +
    '<div class="jobcard__foot">' +
      '<div><div class="jobcard__salary">' + j.salary + ' <span>COP</span></div>' +
      '<div class="jobcard__time">' + ic('clock') + j.time + ' · ' + j.applicants + ' postulantes</div></div>' +
      '<span class="badge badge--neutral">' + j.level + '</span>' +
    '</div>' +
  '</article>';
}

function kpi(o){
  return '<div class="card kpi"><div class="kpi__top"><span class="kpi__label">' + o.label + '</span>' +
    (o.icon ? '<span class="kpi__icon">' + ic(o.icon) + '</span>' : '') + '</div>' +
    '<div class="kpi__value">' + o.value + '</div>' +
    (o.foot ? '<div class="kpi__foot">' + o.foot + '</div>' : '') + '</div>';
}

function emptyState(o){
  return '<div class="empty"><span class="empty__art">' + ic(o.icon || 'bookmark') + '</span>' +
    '<h3>' + o.title + '</h3><p>' + o.text + '</p>' +
    (o.action ? '<div class="btn-row mt-2">' + o.action + '</div>' : '') + '</div>';
}

function timeline(items){
  return '<div class="tl">' + items.map(function(it){
    const state = it.state || 'pending';
    const icon = state === 'done' ? ic('check') : state === 'current' ? ic('clock') : ic('more');
    return '<div class="tl__item is-' + state + '"><span class="tl__dot">' + icon + '</span>' +
      '<div class="tl__head"><span class="tl__title">' + it.title + '</span>' +
      (it.time ? '<span class="tl__time">' + it.time + '</span>' : '') +
      (it.badge ? badge(it.badge.text, it.badge.kind) : '') + '</div>' +
      (it.desc ? '<div class="tl__desc">' + it.desc + '</div>' : '') +
      (it.body || '') + '</div>';
  }).join('') + '</div>';
}

function accordion(items, openIndex){
  return '<div class="accordion">' + items.map(function(it, i){
    const open = i === openIndex;
    return '<div class="acc__item' + (open ? ' is-open' : '') + '">' +
      '<button class="acc__btn" type="button" data-demo="accordion" aria-expanded="' + (open ? 'true' : 'false') + '">' + it.q + ic('chevron-down') + '</button>' +
      '<div class="acc__body">' + it.a + '</div></div>';
  }).join('') + '</div>';
}

function formLegend(text){
  return '<div class="form__legend">' + ic('info') + '<span><span class="req">*</span> ' + (text || 'Los campos marcados con asterisco son obligatorios. Los demás son opcionales.') + '</span></div>';
}

function tabs(items, active){
  return '<div class="tabs" role="tablist">' + items.map(function(it){
    const on = it.id === active;
    return '<button class="tab-item' + (on ? ' is-on' : '') + '" role="tab" aria-selected="' + on + '" data-demo="tab" data-tab="' + it.id + '">' + it.label +
      (it.count !== undefined ? ' <span class="badge badge--neutral">' + it.count + '</span>' : '') + '</button>';
  }).join('') + '</div>';
}

function segmented(items, active){
  return '<div class="segmented" role="group">' + items.map(function(it){
    return '<button class="' + (it.id === active ? 'is-on' : '') + '" data-demo="segment" data-seg="' + it.id + '">' + it.label +
      (it.count !== undefined ? '<span class="count">' + it.count + '</span>' : '') + '</button>';
  }).join('') + '</div>';
}

function statStrip(items){
  return '<div class="stat-strip">' + items.map(function(it){
    return '<div class="stat-strip__item"><span class="stat-strip__num">' + it.value + '</span><span class="stat-strip__cap">' + it.label + '</span></div>';
  }).join('') + '</div>';
}

function sectionHead(title, sub, action){
  return '<div class="split"><div class="stack" style="gap:2px"><h2 class="h2">' + title + '</h2>' +
    (sub ? '<span class="small muted">' + sub + '</span>' : '') + '</div>' + (action || '') + '</div>';
}

function track(steps, current, o){
  o = o || {};
  return '<div><div class="track">' + steps.map(function(s, i){
    const n = i + 1;
    const cls = n < current ? ' is-done' : n === current ? ' is-current' : '';
    return '<div class="track__seg' + cls + '"><span class="track__dot"></span><span class="track__bar"></span></div>';
  }).join('') + '</div>' +
  (o.labels === false ? '' : '<div class="track-labels">' + steps.map(function(s, i){
    const n = i + 1;
    return '<span class="' + (n < current ? 'is-done' : n === current ? 'is-current' : '') + '">' + s + '</span>';
  }).join('') + '</div>') + '</div>';
}

function dialog(o){
  return '<div class="screen-modal" data-modal>' +
    '<div class="dialog" role="dialog" aria-modal="true" aria-labelledby="dlg-title">' +
      '<div class="dialog__head"><span class="dialog__icon">' + ic(o.icon || 'alert') + '</span>' +
        '<div><h3 id="dlg-title">' + o.title + '</h3>' +
        (o.sub ? '<p class="tiny muted" style="margin-top:2px">' + o.sub + '</p>' : '') + '</div></div>' +
      '<div class="dialog__body">' + o.body + '</div>' +
      '<div class="dialog__foot">' + (o.cancel || btn('Cancelar', { kind:'secondary', demo:'close-modal' })) + (o.confirm || '') + '</div>' +
    '</div></div>';
}

function defineScreen(def){
  window.SCREENS = window.SCREENS || [];
  window.SCREENS.push(def);
}
