/* =========================================================
   Talenta · Prototipo (solo pantallas), router, validación e interacciones
   ========================================================= */

(function(){
  const state = { screenId:'A01', zoom:1, gestalt:false };
  const SCREENS = window.SCREENS || [];

  const el = {
    stage: document.getElementById('stage'),
    toasts: document.getElementById('toasts'),
    overlay: document.getElementById('overlay-root')
  };

  /* ---------- Utilidades ---------- */
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function def(id){ return SCREENS.find(function(s){ return s.id === id; }) || SCREENS[0]; }

  /* ---------- Toasts ---------- */
  function toast(kind, text){
    const map = { ok:'check-circle', info:'info', warn:'alert', bad:'x-circle' };
    const t = document.createElement('div');
    t.className = 'toast' + (kind && kind !== 'ok' ? ' toast--' + kind : '');
    t.innerHTML = ic(map[kind] || 'info') + '<span>' + esc(text) + '</span>';
    el.toasts.appendChild(t);
    setTimeout(function(){
      t.style.opacity = '0';
      t.style.transform = 'translateY(6px)';
      t.style.transition = 'all .2s ease';
      setTimeout(function(){ t.remove(); }, 220);
    }, 3200);
  }

  /* Sin panel de recorrido: se conserva la firma porque las acciones demo la usan */
  function logEvent(){}

  /* ---------- Router ---------- */
  function parseHash(){
    const h = (location.hash || '').replace(/^#\/?/, '');
    const parts = h.split('/');
    if (parts[0] === 'pantalla' && parts[1] && SCREENS.some(function(s){ return s.id === parts[1]; })) return parts[1];
    return 'A01';
  }

  function renderRoute(){
    state.screenId = parseHash();
    renderStage();
  }

  function openScreen(id){
    if (!SCREENS.some(function(s){ return s.id === id; })) return;
    state.screenId = id;
    const target = '#/pantalla/' + id;
    if (location.hash === target) renderRoute(); else location.hash = target;
  }

  /* ---------- Escenario: solo el artboard ---------- */
  function renderStage(){
    const s = def(state.screenId);
    document.title = 'Talenta · ' + s.id + ' ' + s.title;
    el.stage.innerHTML =
      '<div class="artboard-wrap" id="artboard-wrap">' +
        '<div class="artboard" id="artboard">' +
          '<div class="screen-root" id="screen-root"></div>' +
          '<div class="gx-layer" id="gx-layer"></div>' +
        '</div>' +
      '</div>';
    document.getElementById('screen-root').innerHTML = s.html();
    requestAnimationFrame(function(){ computeFit(); applyGestalt(); });
  }

  /* Ajusta el artboard (1440 × 900) al 100% de la ventana */
  function computeFit(){
    const w = window.innerWidth, h = window.innerHeight;
    if (!w || !h) return;
    state.zoom = Math.min(w / 1440, h / 900);
    el.stage.style.setProperty('--z', state.zoom);
    if (state.gestalt) setTimeout(applyGestalt, 30);
  }

  /* ---------- Leyes de Gestalt (único control del visor) ---------- */
  function paintGestaltButton(){
    const b = document.getElementById('gx-toggle');
    if (b) b.setAttribute('aria-pressed', state.gestalt ? 'true' : 'false');
  }

  function toggleGestalt(){
    state.gestalt = !state.gestalt;
    paintGestaltButton();
    applyGestalt();
  }

  function applyGestalt(){
    const layer = document.getElementById('gx-layer');
    const board = document.getElementById('artboard');
    if (!layer || !board) return;
    layer.innerHTML = '';
    if (!state.gestalt) return;
    const ar = board.getBoundingClientRect();
    const z = state.zoom || 1;
    board.querySelectorAll('[data-gestalt]').forEach(function(n){
      const r = n.getBoundingClientRect();
      if (!r.width || !r.height) return;
      const box = document.createElement('div');
      box.className = 'gx-box';
      box.style.left = ((r.left - ar.left) / z) + 'px';
      box.style.top = ((r.top - ar.top) / z) + 'px';
      box.style.width = (r.width / z) + 'px';
      box.style.height = (r.height / z) + 'px';
      const tag = document.createElement('span');
      tag.className = 'gx-tag';
      tag.textContent = n.getAttribute('data-gestalt');
      box.appendChild(tag);
      layer.appendChild(box);
    });
  }

  function closeOverlay(){ el.overlay.innerHTML = ''; }

  /* ---------- Validación ---------- */
  function wrapOf(input){
    return input.closest('.field') || input.closest('.fieldset') || input.parentElement;
  }
  function setMessage(wrap, kind, text){
    if (!wrap) return;
    const msg = wrap.querySelector('[data-msg]');
    wrap.classList.remove('is-invalid','is-valid');
    wrap.classList.add(kind === 'ok' ? 'is-valid' : 'is-invalid');
    if (msg){
      msg.className = 'field__msg is-on ' + (kind === 'ok' ? 'field__msg--ok' : 'field__msg--error');
      msg.innerHTML = ic(kind === 'ok' ? 'check' : 'alert') + '<span>' + esc(text) + '</span>';
    }
  }
  function clearMessage(wrap){
    if (!wrap) return;
    wrap.classList.remove('is-invalid');
    const msg = wrap.querySelector('[data-msg]');
    if (msg){ msg.className = 'field__msg'; msg.innerHTML = ''; }
  }
  function defaultMsg(input, reason){
    if (reason === 'email') return 'Escribe un correo válido. Ejemplo: nombre@correo.com';
    if (reason === 'match') return 'Las contraseñas no coinciden. Vuelve a escribirlas.';
    if (reason === 'word') return 'Escribe ELIMINAR en mayúsculas para confirmar.';
    if (input.type === 'checkbox') return 'Debes marcar esta casilla para continuar.';
    if (input.tagName === 'SELECT') return 'Selecciona una opción de la lista.';
    if (input.type === 'radio') return 'Selecciona una opción para continuar.';
    return 'Este campo es obligatorio. Completa la información para continuar.';
  }

  function validateField(input, silent){
    if (!input || input.disabled) return true;
    const wrap = wrapOf(input);
    let ok = true, reason = '';
    const val = (input.value || '').trim();

    if (input.type === 'radio'){
      const scope = input.closest('form') || input.closest('.card') || document;
      const group = scope.querySelectorAll('input[type="radio"][name="' + input.name + '"]');
      ok = Array.prototype.some.call(group, function(r){ return r.checked; });
      if (!ok) reason = 'radio';
    } else if (input.type === 'checkbox'){
      ok = input.checked;
    } else if (!val){
      ok = false;
    } else if (input.type === 'email' || /email/i.test(input.id)){
      ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val);
      if (!ok) reason = 'email';
    } else if (/-pass2$/.test(input.id)){
      const other = document.getElementById(input.id.replace(/2$/, ''));
      if (other && other.value !== input.value){ ok = false; reason = 'match'; }
    } else if (input.id === 'del-word'){
      if (val !== 'ELIMINAR'){ ok = false; reason = 'word'; }
    }

    if (!ok){
      if (!silent) setMessage(wrap, 'bad', defaultMsg(input, reason));
      return false;
    }
    if (wrap){
      wrap.classList.remove('is-invalid');
      const msg = wrap.querySelector('[data-msg]');
      if (msg){ msg.className = 'field__msg'; msg.innerHTML = ''; }
      wrap.classList.add('is-valid');
    }
    return true;
  }

  function validateScope(scope){
    const controls = Array.prototype.slice.call(scope.querySelectorAll('[data-required]'));
    const radiosDone = {};
    let first = null;
    controls.forEach(function(c){
      if (c.type === 'radio'){
        if (radiosDone[c.name]) return;
        radiosDone[c.name] = true;
        if (!validateField(c)){ if (!first) first = c; }
        return;
      }
      if (!validateField(c)){ if (!first) first = c; }
    });
    if (first){
      const wrap = wrapOf(first);
      if (wrap && wrap.scrollIntoView){ try { wrap.scrollIntoView({ block:'center', behavior:'smooth' }); } catch(e){} }
      setTimeout(function(){ try { first.focus({ preventScroll:true }); } catch(e){} }, 120);
      toast('bad', 'Revisa los campos marcados antes de continuar.');
      return false;
    }
    return true;
  }

  function scopeFor(btn){
    return btn.closest('.dialog') || btn.closest('.card') || btn.closest('.screen-modal') || btn.closest('.alt__body') || document;
  }
  function formFor(btn){
    const scope = scopeFor(btn);
    return scope.querySelector('form[data-validate]') || btn.closest('form[data-validate]');
  }

  /* ---------- Acciones demo ---------- */
  function setLoading(btn, on){
    if (!btn) return;
    btn.classList.toggle('is-loading', !!on);
    btn.disabled = !!on;
  }

  function showLoader(title, sub, steps){
    const root = document.getElementById('screen-root');
    if (!root) return;
    const old = document.getElementById('screen-loader');
    if (old) old.remove();
    const box = document.createElement('div');
    box.className = 'screen-modal';
    box.id = 'screen-loader';
    box.innerHTML = '<div class="dialog" style="width:410px"><div class="dialog__body" style="align-items:center;text-align:center;padding:26px 26px 24px">' +
      '<span class="spinner spinner--lg"></span>' +
      '<div class="h2" style="font-size:18px">' + title + '</div>' +
      '<p class="small muted" style="line-height:1.55;max-width:300px">' + sub + '</p>' +
      progress({ indet:true, label:'Procesando' }) +
      '<div class="checklist" style="width:100%;text-align:left">' +
        (steps || []).map(function(s, i){
          return '<div class="checklist__item ' + (i === 0 ? 'is-done' : i === 1 ? 'is-current' : '') + '">' + ic(i === 0 ? 'check-circle' : i === 1 ? 'clock' : 'info') + '<span>' + s + '</span></div>';
        }).join('') +
      '</div></div></div>';
    root.appendChild(box);
  }

  function handleDemo(action, btn){
    switch(action){
      case 'login': {
        const form = formFor(btn);
        if (form && !validateScope(form)) return;
        setLoading(btn, true);
        logEvent(state.screenId, 'Inicio de sesión');
        setTimeout(function(){ openScreen('C01', 'Inicio de sesión'); toast('ok', 'Bienvenida, Valentina'); }, 850);
        break;
      }
      case 'verify': {
        const root = document.getElementById('screen-root');
        const otp = root ? root.querySelectorAll('.otp input') : [];
        let missing = false;
        Array.prototype.forEach.call(otp, function(i){
          i.classList.toggle('is-error', !i.value);
          if (!i.value) missing = true;
        });
        if (missing){ toast('bad', 'Completa los 6 dígitos del código.'); return; }
        setLoading(btn, true);
        logEvent('A04', 'Código verificado');
        setTimeout(function(){ openScreen('A04', 'Código verificado'); toast('ok', 'Correo verificado correctamente'); }, 800);
        break;
      }
      case 'recover': {
        const form = formFor(btn);
        if (form && !validateScope(form)) return;
        setLoading(btn, true);
        logEvent('A06', 'Recuperación enviada');
        setTimeout(function(){ openScreen('A06', 'Recuperación enviada'); toast('ok', 'Enlace enviado. Revisa tu correo.'); }, 900);
        break;
      }
      case 'validate-go': {
        const form = formFor(btn);
        const ok = form ? validateScope(form) : validateScope(scopeFor(btn));
        if (!ok) return;
        const dest = form && form.getAttribute('data-success-go');
        if (dest){
          setLoading(btn, true);
          logEvent(dest, 'Formulario válido');
          setTimeout(function(){ openScreen(dest, 'Formulario válido'); toast('ok', 'Información guardada. Continuamos.'); }, 780);
        } else {
          toast('ok', 'Formulario válido. Todo listo para continuar.');
          logEvent('—', 'Validación de formulario');
        }
        break;
      }
      case 'submit-application': {
        const scope = scopeFor(btn);
        if (!validateScope(scope)) return;
        showLoader('Enviando tu postulación…', 'Estamos guardando tus respuestas y adjuntando tu hoja de vida.', ['Datos verificados','Enviando a Nova Systems','Confirmando recepción']);
        logEvent('D04', 'Postulación enviada');
        setTimeout(function(){ openScreen('D04', 'Postulación enviada'); toast('ok', 'Postulación enviada a Nova Systems'); }, 1700);
        break;
      }
      case 'publish-job': {
        const form = formFor(btn);
        if (form && !validateScope(form)) return;
        showLoader('Publicando tu vacante…', 'Estamos validando la información y preparando la vista pública.', ['Requisitos validados','Publicando en el catálogo','Notificando a candidatos']);
        logEvent('F04', 'Vacante publicada');
        setTimeout(function(){ openScreen('F04', 'Vacante publicada'); toast('ok', 'Vacante publicada · ya recibe postulaciones'); }, 1700);
        break;
      }
      case 'upload': {
        const card = btn.closest('.card') || scopeFor(btn);
        const dz = card.querySelector('.dropzone');
        const name = 'CV_Valentina_Rios_2026.pdf';
        if (dz){
          const row = document.createElement('div');
          row.style.marginTop = '10px';
          row.innerHTML = fileRow({ name:name, meta:'PDF · 284 KB · cargado', progress:100, done:true });
          dz.parentElement.insertBefore(row, dz.nextSibling);
        }
        logEvent('—', 'Archivo cargado: ' + name);
        toast('ok', 'Archivo cargado · ' + name);
        break;
      }
      case 'toggle': {
        const on = !btn.classList.contains('is-on');
        btn.classList.toggle('is-on', on);
        btn.setAttribute('aria-checked', on ? 'true' : 'false');
        logEvent('—', 'Preferencia ' + (on ? 'activada' : 'pausada'));
        break;
      }
      case 'save': {
        const on = !btn.classList.contains('is-on');
        btn.classList.toggle('is-on', on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
        btn.setAttribute('aria-label', on ? 'Quitar de guardados' : 'Guardar vacante');
        logEvent('—', on ? 'Vacante guardada' : 'Vacante quitada de guardados');
        toast(on ? 'ok' : 'info', on ? 'Vacante guardada en tu lista' : 'Vacante quitada de guardados');
        break;
      }
      case 'toggle-pass': {
        const wrap = btn.closest('.input-wrap');
        const input = wrap && wrap.querySelector('input');
        if (!input) return;
        const show = input.type === 'password';
        input.type = show ? 'text' : 'password';
        btn.innerHTML = ic(show ? 'eye-off' : 'eye');
        btn.setAttribute('aria-label', show ? 'Ocultar contraseña' : 'Mostrar contraseña');
        break;
      }
      case 'accordion': {
        const item = btn.closest('.acc__item');
        if (!item) return;
        const open = !item.classList.contains('is-open');
        item.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
        break;
      }
      case 'tab': {
        const tabs = btn.closest('.tabs');
        if (!tabs) return;
        tabs.querySelectorAll('.tab-item').forEach(function(t){
          t.classList.toggle('is-on', t === btn);
          t.setAttribute('aria-selected', t === btn ? 'true' : 'false');
        });
        break;
      }
      case 'segment': {
        const seg = btn.closest('.segmented');
        if (!seg) return;
        seg.querySelectorAll('button').forEach(function(b){ b.classList.toggle('is-on', b === btn); });
        logEvent('—', 'Vista: ' + btn.textContent.trim());
        break;
      }
      case 'resend': {
        if (btn.dataset.timer) return;
        let n = 42;
        btn.disabled = true;
        const base = btn.innerHTML.replace(/\d\d:\d\d/g, '');
        btn.innerHTML = ic('refresh') + 'Reenviar en 00:42';
        btn.dataset.timer = setInterval(function(){
          n--;
          btn.innerHTML = ic('refresh') + 'Reenviar en 00:' + String(Math.max(0, n)).padStart(2, '0');
          if (n <= 0){
            clearInterval(btn.dataset.timer);
            delete btn.dataset.timer;
            btn.disabled = false;
            btn.innerHTML = ic('refresh') + 'Reenviar código';
          }
        }, 1000);
        toast('info', 'Código reenviado · revisa tu correo');
        break;
      }
      case 'withdraw': {
        confirmDialog('Retirar postulación', 'Tu postulación a Desarrollador Full Stack se retirará del proceso. La empresa dejará de ver tu perfil para esta vacante.', 'Retirar', 'danger', function(){
          logEvent('D05', 'Postulación retirada');
          toast('warn', 'Postulación retirada · puedes volver a postularte');
          setTimeout(function(){ openScreen('D05', 'Postulación retirada'); }, 500);
        });
        break;
      }
      case 'confirm-remove': {
        confirmDialog('Quitar este elemento', 'Se quitará de tu perfil. Podrás volver a agregarlo cuando quieras.', 'Quitar', 'danger', function(){
          const target = btn.closest('.file-row') || btn.closest('.panel') || btn.closest('.card');
          if (target) target.remove();
          logEvent('—', 'Elemento quitado');
          toast('info', 'Elemento quitado');
        });
        break;
      }
      case 'confirm-delete': {
        const scope = btn.closest('.dialog') || scopeFor(btn);
        const form = scope.querySelector('form[data-validate]');
        if (form && !validateScope(form)) return;
        const word = form && form.querySelector('#del-word');
        if (word && word.value.trim() !== 'ELIMINAR'){ validateField(word); return; }
        const modal = btn.closest('.screen-modal');
        if (modal) modal.remove();
        logEvent('A01', 'Cuenta eliminada');
        toast('bad', 'Tu cuenta fue eliminada. Esperamos verte de nuevo.');
        setTimeout(function(){ openScreen('A01', 'Cuenta eliminada'); }, 700);
        break;
      }
      case 'clear-filters': {
        const card = btn.closest('.filters') || scopeFor(btn);
        card.querySelectorAll('input[type="checkbox"],input[type="radio"]').forEach(function(i){ i.checked = false; });
        card.querySelectorAll('input[type="text"],input[type="search"]').forEach(function(i){ i.value = ''; });
        document.querySelectorAll('#screen-root .chips .chip button').forEach(function(b){ b.closest('.chip').remove(); });
        logEvent('—', 'Filtros limpiados');
        toast('info', 'Filtros limpiados');
        break;
      }
      case 'cancel-load': {
        logEvent('C02', 'Búsqueda cancelada');
        openScreen('C02', 'Búsqueda cancelada');
        toast('info', 'Búsqueda cancelada · tus filtros se conservan');
        break;
      }
      case 'select-slot': {
        const grid = btn.closest('.slot-grid');
        if (grid) grid.querySelectorAll('.slot').forEach(function(s){
          s.classList.toggle('is-on', s === btn);
          s.setAttribute('aria-pressed', s === btn ? 'true' : 'false');
        });
        logEvent('—', 'Horario seleccionado: ' + btn.textContent.trim());
        break;
      }
      case 'confirm-interview': {
        btn.classList.add('is-loading');
        setTimeout(function(){
          btn.classList.remove('is-loading');
          btn.innerHTML = ic('check') + 'Asistencia confirmada';
          btn.disabled = true;
          toast('ok', 'Asistencia confirmada · te enviamos el enlace');
          logEvent('—', 'Entrevista confirmada');
        }, 700);
        break;
      }
      case 'reschedule': {
        confirmDialog('Reprogramar entrevista', 'Enviaremos una solicitud a Carolina Méndez. Te compartirá nuevos horarios en un máximo de 24 horas.', 'Solicitar cambio', 'primary', function(){
          logEvent('—', 'Reprogramación solicitada');
          toast('info', 'Solicitud enviada · te avisaremos por correo');
        });
        break;
      }
      case 'save-alert': {
        const form = formFor(btn);
        if (form && !validateScope(form)) return;
        setLoading(btn, true);
        setTimeout(function(){
          setLoading(btn, false);
          btn.innerHTML = ic('check') + 'Alerta guardada';
          toast('ok', 'Alerta guardada · recibirás coincidencias diarias');
          logEvent('—', 'Alerta de empleo guardada');
        }, 700);
        break;
      }
      case 'save-settings': {
        const form = formFor(btn);
        if (form && !validateScope(form)) return;
        setLoading(btn, true);
        setTimeout(function(){
          setLoading(btn, false);
          btn.innerHTML = ic('check') + 'Cambios guardados';
          toast('ok', 'Cambios guardados correctamente');
          logEvent('—', 'Preferencias guardadas');
        }, 700);
        break;
      }
      case 'send-message': {
        const thread = btn.closest('.thread');
        const input = thread && thread.querySelector('#msg-input');
        if (!input || !input.value.trim()){ toast('warn', 'Escribe un mensaje antes de enviar.'); input && input.focus(); return; }
        const bubbles = thread.querySelector('.bubbles');
        const typing = bubbles.querySelector('.typing');
        const bubble = document.createElement('div');
        bubble.className = 'bubble bubble--me';
        bubble.innerHTML = esc(input.value.trim()) + '<div class="bubble__meta">Tú · ahora ' + ic('check') + '</div>';
        bubbles.insertBefore(bubble, typing);
        input.value = '';
        const hint = thread.querySelector('.composer__hint span:last-child');
        if (hint) hint.textContent = '0/1000';
        toast('ok', 'Mensaje enviado a Carolina');
        logEvent('—', 'Mensaje enviado');
        break;
      }
      case 'send-ticket': {
        const form = formFor(btn);
        if (form && !validateScope(form)) return;
        setLoading(btn, true);
        setTimeout(function(){
          setLoading(btn, false);
          btn.innerHTML = ic('check') + 'Solicitud enviada';
          toast('ok', 'Solicitud enviada · respuesta en menos de 24 h');
          logEvent('—', 'Solicitud de soporte enviada');
        }, 800);
        break;
      }
      case 'download-data': {
        toast('ok', 'Preparamos tu copia · la recibirás por correo en 24 h');
        logEvent('—', 'Copia de datos solicitada');
        break;
      }
      case 'close-modal': {
        const modal = btn.closest('.screen-modal') || btn.closest('.overlay');
        if (modal) modal.remove();
        break;
      }
      case 'add-chip': {
        const field = btn.closest('.field') || btn.closest('.fieldset');
        const chips = field && field.querySelector('.chips');
        if (!chips) return;
        let text = btn.textContent.replace(/^\+?\s*(Añadir|Agregar)\s*/i, '').trim();
        if (!text || /habilidad/i.test(text)) text = 'Nueva habilidad';
        const newChip = document.createElement('span');
        newChip.className = 'chip';
        newChip.innerHTML = esc(text) + '<button type="button" data-demo="remove-chip" aria-label="Quitar ' + esc(text) + '">' + ic('x') + '</button>';
        chips.insertBefore(newChip, btn);
        logEvent('—', 'Habilidad agregada: ' + text);
        break;
      }
      case 'remove-chip': {
        const chip = btn.closest('.chip');
        if (chip){ chip.remove(); logEvent('—', 'Elemento quitado del perfil'); }
        break;
      }
      case 'add-experience': {
        const form = btn.closest('form');
        if (!form) return;
        const card = document.createElement('div');
        card.className = 'card card--soft';
        card.style.boxShadow = 'none';
        const n = Date.now();
        card.innerHTML = '<div class="card__head" style="padding:12px 16px;background:#fff;border-radius:12px 12px 0 0">' +
          '<span class="badge badge--outline">Nueva experiencia</span><span class="tiny muted">Completa los datos</span></div>' +
          '<div class="card__body" style="padding:16px;display:flex;flex-direction:column;gap:14px">' +
            '<div class="grid grid--2">' +
              field({ id:'exp-new-role-'+n, label:'Cargo', required:true, placeholder:'Ej. Desarrollador Full Stack' }) +
              field({ id:'exp-new-company-'+n, label:'Empresa', required:true, placeholder:'Nombre de la empresa' }) +
            '</div>' +
            field({ id:'exp-new-ach-'+n, label:'Logros y responsabilidades', type:'textarea', required:true, maxlength:600, placeholder:'Describe tus logros con resultados medibles.' }) +
          '</div>';
        form.insertBefore(card, btn);
        logEvent('—', 'Nueva experiencia agregada');
        toast('info', 'Completa los datos de la nueva experiencia');
        break;
      }
      case 'add-language': {
        const container = btn.parentElement;
        const row = document.createElement('div');
        row.className = 'grid grid--2';
        row.style.alignItems = 'end';
        row.innerHTML = select({ id:'lang-new-'+Date.now(), label:'Idioma', options:['Inglés','Portugués','Francés','Alemán'], placeholder:'Selecciona' }) +
          select({ id:'lang-lvl-'+Date.now(), label:'Nivel', options:['A1','A2','B1','B2','C1','C2'], placeholder:'Nivel' }) +
          '<button class="iconbtn" style="align-self:end;margin-bottom:4px" data-demo="confirm-remove" aria-label="Eliminar idioma">' + ic('trash') + '</button>';
        container.insertBefore(row, btn);
        logEvent('—', 'Idioma agregado');
        break;
      }
      case 'fill-demo': {
        const form = btn.closest('form');
        if (!form) return;
        const name = form.querySelector('#fd-test-name');
        const mail = form.querySelector('#fd-test-mail');
        const consent = form.querySelector('#fd-test-consent');
        if (name){ name.value = 'Valentina Ríos'; name.dispatchEvent(new Event('input', { bubbles:true })); }
        if (mail){ mail.value = 'valentina.rios@correo.com'; mail.dispatchEvent(new Event('input', { bubbles:true })); }
        if (consent){ consent.checked = true; consent.dispatchEvent(new Event('change', { bubbles:true })); }
        toast('info', 'Ejemplo completado · pulsa «Probar validación»');
        break;
      }
      case 'toast-ok': toast('ok', 'Acción completada correctamente'); logEvent('—', 'Acción completada'); break;
      case 'toast-info': toast('info', 'Esta acción está simulada en el prototipo'); logEvent('—', 'Acción informativa'); break;
      case 'toast-warn': toast('warn', 'Revisa la información antes de continuar'); break;
      case 'toast-bad': toast('bad', 'No pudimos completar la acción'); break;
      default:
        toast('info', 'Acción de prototipo: ' + action);
    }
  }

  function confirmDialog(title, text, confirmLabel, kind, onConfirm){
    el.overlay.innerHTML =
      '<div class="overlay" data-overlay><div class="dialog" role="dialog" aria-modal="true">' +
        '<div class="dialog__head"><span class="dialog__icon" style="background:var(--warn-bg);color:var(--warn)">' + ic('alert') + '</span>' +
          '<div><h3>' + esc(title) + '</h3><p class="tiny muted" style="margin-top:2px">Confirma antes de continuar.</p></div></div>' +
        '<div class="dialog__body"><p class="small muted" style="line-height:1.6">' + esc(text) + '</p></div>' +
        '<div class="dialog__foot">' + btn('Cancelar', { kind:'secondary', demo:'close-modal' }) +
          btn(confirmLabel, { kind: kind || 'primary', demo:'confirm-dialog-ok' }) + '</div>' +
      '</div></div>';
    const ov = el.overlay.querySelector('[data-overlay]');
    ov.addEventListener('click', function(e){ if (e.target === e.currentTarget) closeOverlay(); });
    el.overlay.querySelector('[data-demo="close-modal"]').addEventListener('click', closeOverlay);
    el.overlay.querySelector('[data-demo="confirm-dialog-ok"]').addEventListener('click', function(){
      closeOverlay();
      if (onConfirm) onConfirm();
    });
  }

  /* ---------- Autocompletado ---------- */
  function acWrap(input){ return input.closest('.ac'); }
  function filterAc(input){
    const wrap = acWrap(input);
    if (!wrap) return;
    const q = input.value.trim().toLowerCase();
    wrap.classList.add('is-open');
    wrap.querySelectorAll('.ac__item').forEach(function(it){
      const val = (it.getAttribute('data-value') || '').toLowerCase();
      it.style.display = !q || val.indexOf(q) !== -1 ? '' : 'none';
      it.classList.remove('is-active');
    });
    input.setAttribute('aria-expanded', 'true');
  }
  function closeAllAc(){
    document.querySelectorAll('.ac.is-open').forEach(function(w){ w.classList.remove('is-open'); });
    document.querySelectorAll('input[data-ac]').forEach(function(i){ i.setAttribute('aria-expanded','false'); });
  }
  function chooseAc(item){
    const wrap = item.closest('.ac');
    const input = wrap && wrap.querySelector('input[data-ac]');
    if (!input) return;
    input.value = item.getAttribute('data-value') || item.textContent.trim();
    input.dispatchEvent(new Event('input', { bubbles:true }));
    wrap.classList.remove('is-open');
    input.setAttribute('aria-expanded','false');
    input.focus();
  }

  /* ---------- Eventos globales ---------- */
  document.addEventListener('click', function(e){
    const go = e.target.closest('[data-go]');
    if (go){
      e.preventDefault();
      openScreen(go.getAttribute('data-go'));
      return;
    }
    const demo = e.target.closest('[data-demo]');
    if (demo){
      e.preventDefault();
      handleDemo(demo.getAttribute('data-demo'), demo);
      return;
    }
    const acItem = e.target.closest('.ac__item');
    if (acItem){ chooseAc(acItem); return; }
    if (!e.target.closest('.ac')) closeAllAc();
  });

  document.addEventListener('submit', function(e){ e.preventDefault(); });

  document.addEventListener('input', function(e){
    const t = e.target;
    if (t.matches && t.matches('[data-counter]')){
      const out = document.querySelector('[data-counter-out="' + t.id + '"]');
      if (out) out.textContent = t.value.length + '/' + t.getAttribute('maxlength');
    }
    if (t.matches && t.matches('input[data-ac]')) filterAc(t);
    const wrap = t.closest && t.closest('.field');
    if (wrap && wrap.classList.contains('is-invalid') && (t.matches('input,select,textarea'))){
      validateField(t, true);
    }
    if (t.id === 'msg-input'){
      const hint = t.closest('.composer') && t.closest('.composer').querySelector('.composer__hint span:last-child');
      if (hint) hint.textContent = t.value.length + '/1000';
    }
  });

  document.addEventListener('change', function(e){
    const t = e.target;
    if (t.matches && t.matches('input[type="radio"],input[type="checkbox"]')){
      const wrap = t.closest('.field');
      if (wrap && wrap.classList.contains('is-invalid')) validateField(t, true);
      if (t.type === 'radio' && t.name){
        document.querySelectorAll('input[type="radio"][name="' + t.name + '"]').forEach(function(r){
          const c = r.closest('.choice');
          if (c) c.classList.toggle('is-selected', r.checked);
        });
      }
    }
  });

  document.addEventListener('focusin', function(e){
    if (e.target.matches && e.target.matches('input[data-ac]')) filterAc(e.target);
  });

  document.addEventListener('keydown', function(e){
    const input = e.target;
    if (input.matches && input.matches('input[data-ac]')){
      const wrap = acWrap(input);
      if (!wrap) return;
      const items = Array.prototype.slice.call(wrap.querySelectorAll('.ac__item')).filter(function(i){ return i.style.display !== 'none'; });
      let idx = items.findIndex(function(i){ return i.classList.contains('is-active'); });
      if (e.key === 'ArrowDown'){ e.preventDefault(); idx = Math.min(items.length - 1, idx + 1); items.forEach(function(i,j){ i.classList.toggle('is-active', j === idx); }); }
      else if (e.key === 'ArrowUp'){ e.preventDefault(); idx = Math.max(0, idx - 1); items.forEach(function(i,j){ i.classList.toggle('is-active', j === idx); }); }
      else if (e.key === 'Enter' && idx >= 0){ e.preventDefault(); chooseAc(items[idx]); }
      else if (e.key === 'Escape'){ closeAllAc(); }
      return;
    }
    if (e.target.matches && e.target.matches('.otp input')){
      const field = e.target;
      if (e.key === 'Backspace'){
        e.preventDefault();
        if (field.value){
          field.value = '';
          field.classList.remove('is-filled','is-error');
        } else {
          const prev = field.previousElementSibling;
          if (prev){ prev.value = ''; prev.classList.remove('is-filled','is-error'); prev.focus(); }
        }
        return;
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
        e.preventDefault();
        const sib = e.key === 'ArrowLeft' ? field.previousElementSibling : field.nextElementSibling;
        if (sib) sib.focus();
        return;
      }
      if (!/^\d$/.test(e.key)){
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) e.preventDefault();
        return;
      }
      e.preventDefault();
      field.value = e.key;
      field.classList.add('is-filled');
      field.classList.remove('is-error');
      const next = field.nextElementSibling;
      if (next) next.focus();
      return;
    }
    if (e.target.tagName === 'TEXTAREA' && e.target.id === 'msg-input' && e.key === 'Enter' && !e.shiftKey){
      e.preventDefault();
      const btn = e.target.closest('.composer').querySelector('[data-demo="send-message"]');
      if (btn) handleDemo('send-message', btn);
      return;
    }
    if (e.target.matches && e.target.matches('input,textarea,select')) return;
    if (e.key === 'Escape'){ closeAllAc(); closeOverlay(); return; }
    if (e.key === 'g' || e.key === 'G'){ toggleGestalt(); return; }
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight'){
      const i = SCREENS.indexOf(def(state.screenId));
      const j = e.key === 'ArrowLeft' ? i - 1 : i + 1;
      if (j >= 0 && j < SCREENS.length) openScreen(SCREENS[j].id);
    }
  });

  window.addEventListener('resize', computeFit);

  /* ---------- Botón único: Leyes de Gestalt ---------- */
  const gx = document.createElement('button');
  gx.type = 'button';
  gx.id = 'gx-toggle';
  gx.className = 'gx-toggle';
  gx.setAttribute('aria-pressed', 'false');
  gx.title = 'Mostrar u ocultar las leyes de Gestalt (G)';
  gx.innerHTML = ic('eye') + '<span>Leyes de Gestalt</span>';
  gx.addEventListener('click', toggleGestalt);
  document.body.appendChild(gx);

  window.Talenta = { openScreen: openScreen, toast: toast, state: state, logEvent: logEvent };

  /* ---------- Arranque ---------- */
  if (!location.hash) history.replaceState(null, '', '#/pantalla/A01');
  window.addEventListener('hashchange', renderRoute);
  renderRoute();
})();
