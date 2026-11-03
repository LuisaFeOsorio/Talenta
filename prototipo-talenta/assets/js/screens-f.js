/* =========================================================
   Pantallas F · Experiencia de empresa
   ========================================================= */

defineScreen({
  id:'F01', title:'Panel de la empresa', group:'F',
  purpose:'Panel de reclutamiento con embudo, vacantes activas y candidatos destacados. Cada indicador enlaza a la acción siguiente del reclutador.',
  cta:'«Publicar vacante» — cabecera del panel; «Ver candidatos» como secundaria.',
  patterns:['Catálogo','Progreso','Feedback'],
  gestalt:['Proximidad','Similitud','Región común','Figura-fondo'],
  reqs:['RQ-06','RQ-12','RQ-15','RQ-17','RQ-21','RQ-26','RQ-35'],
  html: () => `
  <div class="app">
    ${appHeader({ role:'company', active:'panel' })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:16px">
        ${pageHead({ eyebrow:'Nova Systems · Panel de reclutamiento', title:'Hola, Carolina',
          sub:'Tienes 18 candidatos por revisar y 5 entrevistas esta semana. Prioriza los procesos con cierre próximo.',
          actions: btn('Ver candidatos', { kind:'secondary', icon:'users', go:'F04' }) +
                   btn('Publicar vacante', { kind:'primary', icon:'plus', go:'F02' }) })}

        <div class="grid grid--4" data-gestalt="Similitud">
          ${kpi({ label:'Vacantes activas', value:'4', icon:'briefcase', foot:'<span class="up">' + ic('arrow-up') + '1 nueva esta semana</span>' })}
          ${kpi({ label:'Postulantes', value:'312', icon:'users', foot:'<span class="muted">48 en los últimos 7 días</span>' })}
          ${kpi({ label:'Entrevistas', value:'5', icon:'calendar', foot:'<span class="up">' + ic('clock') + '2 hoy</span>' })}
          ${kpi({ label:'Tiempo medio de cierre', value:'6 días', icon:'trending', foot:'<span class="up">' + ic('arrow-down') + '2 días vs. mes anterior</span>' })}
        </div>

        <div class="grid" style="grid-template-columns:minmax(0,1fr) 356px;align-items:start">
          <div class="stack gap-4">
            <div class="card" data-gestalt="Continuidad">
              <div class="card__head">
                <div class="grow">
                  <h2 class="card__title">Embudo de selección</h2>
                  <p class="tiny muted" style="margin-top:2px">Últimos 30 días · todas las vacantes activas.</p>
                </div>
                <div class="segmented">
                  <button class="is-on">30 días</button>
                  <button>90 días</button>
                </div>
              </div>
              <div class="card__body" style="display:flex;flex-direction:column;gap:14px">
                <div class="stack" style="gap:7px">
                  <div class="progress-head"><span class="progress-head__label">Postulantes recibidos</span><span class="progress-head__value">312 · 100%</span></div>
                  ${progress({ value:100, size:'sm' })}
                </div>
                <div class="stack" style="gap:7px">
                  <div class="progress-head"><span class="progress-head__label">Perfiles revisados</span><span class="progress-head__value">148 · 47%</span></div>
                  ${progress({ value:47, size:'sm' })}
                </div>
                <div class="stack" style="gap:7px">
                  <div class="progress-head"><span class="progress-head__label">Entrevistas realizadas</span><span class="progress-head__value">42 · 13%</span></div>
                  ${progress({ value:13, size:'sm' })}
                </div>
                <div class="stack" style="gap:7px">
                  <div class="progress-head"><span class="progress-head__label">Ofertas enviadas</span><span class="progress-head__value">8 · 2,6%</span></div>
                  ${progress({ value:3, size:'sm', tone:'ok' })}
                </div>
                <div class="divider" style="margin:2px 0"></div>
                <div class="grid grid--3" style="gap:9px">
                  <div class="panel" style="padding:10px"><div class="tiny dim">Conversión a entrevista</div><div class="small strong">13,5%</div></div>
                  <div class="panel" style="padding:10px"><div class="tiny dim">Ofertas aceptadas</div><div class="small strong">75%</div></div>
                  <div class="panel" style="padding:10px"><div class="tiny dim">Candidatos por vacante</div><div class="small strong">78</div></div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card__head">
                <h2 class="card__title">Vacantes activas</h2>
                <div class="grow"></div>
                <a class="tiny link" data-go="F04">Ver todas</a>
              </div>
              <table class="tbl">
                <thead><tr><th>Vacante</th><th>Etapa</th><th>Postulantes</th><th>Cierre</th><th></th></tr></thead>
                <tbody>
                  <tr>
                    <td><div class="tbl__main">Desarrollador Full Stack</div><div class="tiny muted">Bogotá · Híbrido</div></td>
                    <td>${badge('En revisión', 'warn')}</td>
                    <td class="num">87</td>
                    <td class="tiny muted">21 nov</td>
                    <td><button class="btn btn--secondary btn--sm" data-go="F04">Ver</button></td>
                  </tr>
                  <tr>
                    <td><div class="tbl__main">Ingeniero DevOps</div><div class="tiny muted">Remoto · Colombia</div></td>
                    <td>${badge('Entrevistas', 'ok')}</td>
                    <td class="num">42</td>
                    <td class="tiny muted">18 nov</td>
                    <td><button class="btn btn--secondary btn--sm" data-go="F04">Ver</button></td>
                  </tr>
                  <tr>
                    <td><div class="tbl__main">Analista de Datos</div><div class="tiny muted">Remoto · Colombia</div></td>
                    <td>${badge('Publicada', 'neutral')}</td>
                    <td class="num">31</td>
                    <td class="tiny muted">30 nov</td>
                    <td><button class="btn btn--secondary btn--sm" data-go="F04">Ver</button></td>
                  </tr>
                  <tr>
                    <td><div class="tbl__main">Diseñador UX/UI</div><div class="tiny muted">Medellín · Híbrido</div></td>
                    <td>${badge('Pausada', 'neutral')}</td>
                    <td class="num">18</td>
                    <td class="tiny muted">—</td>
                    <td><button class="btn btn--secondary btn--sm" data-go="F04">Ver</button></td>
                  </tr>
                </tbody>
              </table>
              <div class="card__foot" style="justify-content:space-between">
                <span class="tiny muted">4 vacantes activas · 178 postulantes en total</span>
                <button class="btn btn--ghost btn--sm" data-demo="toast-info">${ic('plus')}Nueva vacante</button>
              </div>
            </div>
          </div>

          <aside class="stack gap-4">
            <div class="card" data-gestalt="Punto focal">
              <div class="card__head"><h2 class="card__title">Candidatos destacados</h2><div class="grow"></div>${badge('Nuevos', 'ok')}</div>
              <div class="card__body" style="display:flex;flex-direction:column;gap:12px">
                ${[
                  ['VR','Valentina Ríos','Full Stack · 94%','NS'],
                  ['JC','Julián Castro','DevOps · 91%','CQ'],
                  ['LM','Laura Mejía','Datos · 88%','DA']
                ].map(function(c){
                  return '<div class="split">' +
                    '<div class="row gap-3">' + avatar(c[0], { size:'sm' }) +
                    '<div><div class="small strong">' + c[1] + '</div><div class="tiny muted">' + c[2] + '</div></div></div>' +
                    '<div class="row gap-2">' + badge('Nuevo', 'ok') +
                    '<button class="btn btn--secondary btn--sm" data-go="F04">Ver</button></div></div>';
                }).join('')}
                <div class="divider" style="margin:0"></div>
                <button class="btn btn--secondary btn--block btn--sm" data-go="F04">${ic('users')}Ver todos los candidatos</button>
              </div>
            </div>

            <div class="card">
              <div class="card__head"><h2 class="card__title">Tareas pendientes</h2><div class="grow"></div><span class="tiny muted">3 de 5</span></div>
              <div class="card__body" style="display:flex;flex-direction:column;gap:10px">
                <div class="progress-head"><span class="progress-head__label">Progreso de hoy</span><span class="progress-head__value">60%</span></div>
                ${progress({ value:60, size:'sm' })}
                <div class="checklist">
                  <div class="checklist__item is-done">${ic('check-circle')}<span>Revisar 8 candidatos nuevos</span></div>
                  <div class="checklist__item is-done">${ic('check-circle')}<span>Confirmar entrevista de Julián</span></div>
                  <div class="checklist__item is-done">${ic('check-circle')}<span>Responder mensaje de Laura</span></div>
                  <div class="checklist__item is-current">${ic('clock')}<span>Enviar oferta a Andrés</span></div>
                  <div class="checklist__item">${ic('info')}<span>Actualizar descripción de DevOps</span></div>
                </div>
              </div>
            </div>

            <div class="panel panel--blue">
              <div class="row gap-2" style="margin-bottom:5px">${ic('sparkle')}<span class="h4">Sugerencia</span></div>
              <p class="tiny muted" style="line-height:1.55">Las vacantes con rango salarial reciben <b class="strong">2,3× más</b> postulaciones. Añade el rango a «Diseñador UX/UI».</p>
              <button class="btn btn--secondary btn--sm mt-2" data-go="F03">${ic('edit')}Completar vacante</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'F02', title:'Publicar vacante · paso 1 de 4', group:'F',
  purpose:'Publicación guiada de una vacante. El primer paso captura lo esencial con ayudas contextuales y una vista previa que reduce la incertidumbre.',
  cta:'«Continuar» — pie del formulario; «Guardar borrador» como secundaria.',
  patterns:['Formulario','Validación','Progreso','Autocompletado','Feedback'],
  gestalt:['Proximidad','Región común','Continuidad','Similitud'],
  reqs:['RQ-01','RQ-02','RQ-03','RQ-04','RQ-05','RQ-06','RQ-07','RQ-14','RQ-36'],
  html: () => `
  <div class="app">
    <header class="onboard__bar">
      <a class="brand" data-go="F01"><span class="brand__mark">T</span><span class="brand__text"><strong>Talenta</strong><small>Empresas</small></span></a>
      <span class="badge badge--neutral">Nova Systems</span>
      <div class="app-bar__spacer"></div>
      <span class="tiny dim">Guardado automático activo</span>
      <button class="btn btn--ghost btn--sm" data-demo="toast-ok">Guardar y salir</button>
      <button class="iconbtn" aria-label="Ayuda" data-go="E06">${ic('help')}</button>
      ${avatar('NS', { square:true, tone:'company' })}
    </header>
    <div class="onboard__progress">
      ${stepper(['Información','Descripción','Requisitos','Publicación'], 1)}
    </div>
    <div class="onboard__body">
      <div class="onboard__grid">
        <div class="card">
          <div class="card__head">
            <div class="grow">
              <h2 class="h2">Información del cargo</h2>
              <p class="tiny muted" style="margin-top:2px">Lo esencial para que las personas entiendan la oportunidad.</p>
            </div>
            <div class="stack" style="gap:5px;width:130px">
              <span class="tiny muted right">Paso 1 de 4</span>
              ${progress({ value:25, size:'xs' })}
            </div>
          </div>
          <div class="card__body">
            <form class="form" data-validate data-success-go="F03" data-form-name="Publicar vacante · información" novalidate>
              ${alert('info', '', 'Publicar una vacante es gratis durante los primeros 30 días. Puedes editarla o pausarla cuando quieras.')}
              ${formLegend()}

              ${field({ id:'job-title', label:'Título de la vacante', required:true, value:'Desarrollador Full Stack',
                maxlength:90, placeholder:'Ej. Desarrollador Full Stack', hint:'Usa el cargo real. Evita palabras como «urgente» o «increíble».' })}

              <div class="grid grid--2" data-gestalt="Proximidad">
                ${select({ id:'job-cat', label:'Categoría', required:true, options:['Tecnología','Diseño','Marketing','Administración','Producto','Ventas'], value:'Tecnología' })}
                ${select({ id:'job-contract', label:'Tipo de contrato', required:true, options:['Tiempo completo','Medio tiempo','Por proyecto','Temporal'], value:'Tiempo completo' })}
              </div>

              <div class="field" data-field data-gestalt="Región común">
                <span class="field__label">Nivel de experiencia <span class="req">*</span></span>
                <div class="grid grid--3" style="gap:8px">
                  ${choice({ name:'job-level', value:'junior', title:'Junior', desc:'0 a 2 años' })}
                  ${choice({ name:'job-level', value:'mid', title:'Mid', desc:'2 a 4 años' })}
                  ${choice({ name:'job-level', value:'senior', title:'Senior', desc:'4+ años', checked:true, required:true })}
                </div>
                <p class="field__msg" data-msg aria-live="polite"></p>
              </div>

              <div class="field" data-field>
                <span class="field__label">Modalidad <span class="req">*</span></span>
                <div class="grid grid--3" style="gap:8px">
                  ${choice({ name:'job-mode', value:'remote', title:'Remoto', desc:'Desde cualquier ciudad' })}
                  ${choice({ name:'job-mode', value:'hybrid', title:'Híbrido', desc:'2-3 días presenciales', checked:true, required:true })}
                  ${choice({ name:'job-mode', value:'onsite', title:'Presencial', desc:'En la oficina' })}
                </div>
                <p class="field__msg" data-msg aria-live="polite"></p>
              </div>

              <div class="grid grid--2">
                ${field({ id:'job-city', label:'Ciudad', required:true, icon:'map-pin', value:'Bogotá D.C.', ac:'ciudades',
                  hint:'Si es remoto, escribe «Remoto».' })}
                ${field({ id:'job-vacancies', label:'Número de vacantes', optional:true, value:'2', inputmode:'numeric',
                  hint:'Puedes cubrirlo con una sola publicación.' })}
              </div>

              <div class="divider" style="margin:2px 0"></div>

              ${field({ id:'job-desc', label:'Descripción de la vacante', type:'textarea', required:true, maxlength:1200, tall:true,
                value:'Buscamos una persona para liderar el desarrollo de nuestra plataforma de pagos. Trabajarás con un equipo de 12 personas entre producto, diseño y datos, con foco en calidad, accesibilidad y rendimiento.',
                placeholder:'Describe el reto, el equipo y el impacto del cargo…',
                hint:'Mínimo 80 caracteres. Explica qué hará la persona y con quién trabajará.' })}

              ${field({ id:'job-functions', label:'Funciones principales', type:'textarea', optional:true, maxlength:800, tall:false,
                value:'Diseñar y construir APIs y servicios en Node.js. Desarrollar interfaces en React con estándares de accesibilidad AA.',
                placeholder:'Una función por línea…', hint:'Puedes editarlas después desde el panel.' })}
            </form>
          </div>
          <div class="card__foot">
            ${btn('Cancelar', { kind:'ghost', icon:'arrow-left', go:'F01' })}
            <span class="tiny muted row gap-2" style="margin-left:4px">${ic('check')}Borrador guardado</span>
            <div class="grow"></div>
            ${btn('Guardar borrador', { kind:'secondary', demo:'toast-ok' })}
            ${btn('Continuar', { kind:'primary', iconRight:'arrow-right', demo:'validate-go' })}
          </div>
        </div>

        <aside class="onboard__aside">
          <div class="card progress-card" data-gestalt="Continuidad">
            ${ring(25, { size:58, label:'Publicación' })}
            <div>
              <div class="strong small">Tu vacante</div>
              <div class="tiny muted">Paso 1 de 4 · 4 min restantes</div>
            </div>
          </div>

          <div class="card" data-gestalt="Figura-fondo">
            <div class="card__head"><h2 class="card__title">Vista previa</h2><div class="grow"></div>${badge('En vivo', 'neutral')}</div>
            <div class="card__body" style="padding:14px">
              <div class="jobcard" style="box-shadow:none;cursor:default">
                <div class="jobcard__top">
                  <span class="jobcard__logo">NS</span>
                  <div class="jobcard__head">
                    <h3 class="jobcard__title">Desarrollador Full Stack</h3>
                    <div class="jobcard__company">${ic('building')}Nova Systems</div>
                  </div>
                </div>
                <div class="jobcard__chips">
                  <span class="tag-cat tag-cat--tech">Tecnología</span>
                  ${chip('Híbrido', { kind:'outline', size:'sm' })}
                  ${chip('Bogotá D.C.', { kind:'outline', size:'sm' })}
                </div>
                <div class="jobcard__foot">
                  <div><div class="jobcard__salary">$8.000.000 – $11.000.000 <span>COP</span></div>
                  <div class="jobcard__time">${ic('clock')}Publicada hace un momento</div></div>
                  ${badge('Senior', 'neutral')}
                </div>
              </div>
              <div class="tiny muted mt-2" style="line-height:1.5">Así verán tu vacante en el catálogo. Se actualiza mientras escribes.</div>
            </div>
          </div>

          <div class="card">
            <div class="card__body" style="padding:16px">
              <div class="panel__title">Checklist de calidad</div>
              <div class="checklist">
                <div class="checklist__item is-done">${ic('check-circle')}<span>Título claro y específico</span></div>
                <div class="checklist__item is-done">${ic('check-circle')}<span>Categoría y nivel definidos</span></div>
                <div class="checklist__item is-current">${ic('clock')}<span>Descripción del reto</span></div>
                <div class="checklist__item">${ic('info')}<span>Rango salarial</span></div>
                <div class="checklist__item">${ic('info')}<span>Preguntas de selección</span></div>
              </div>
            </div>
          </div>

          <div class="panel panel--blue">
            <div class="row gap-2" style="margin-bottom:5px">${ic('sparkle')}<span class="h4">Consejo</span></div>
            <p class="tiny muted" style="line-height:1.55">Las vacantes con descripción de 80 a 200 palabras reciben <b class="strong">35% más</b> postulaciones de calidad.</p>
          </div>
        </aside>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'F03', title:'Publicar vacante · paso 3 de 4', group:'F',
  purpose:'Requisitos, compensación y preguntas de selección. Los chips reducen la escritura, el rango salarial es explícito y la vista previa valida la calidad.',
  cta:'«Publicar vacante» — pie del formulario, con loader y confirmación.',
  patterns:['Formulario','Validación','Progreso','Loader','Feedback','Autocompletado'],
  gestalt:['Proximidad','Similitud','Región común','Cierre'],
  reqs:['RQ-01','RQ-02','RQ-03','RQ-04','RQ-06','RQ-08','RQ-14','RQ-24','RQ-29','RQ-36'],
  html: () => `
  <div class="app">
    <header class="onboard__bar">
      <a class="brand" data-go="F01"><span class="brand__mark">T</span><span class="brand__text"><strong>Talenta</strong><small>Empresas</small></span></a>
      <span class="badge badge--neutral">Nova Systems</span>
      <div class="app-bar__spacer"></div>
      <span class="tiny dim">Guardado automático activo</span>
      <button class="btn btn--ghost btn--sm" data-demo="toast-ok">Guardar y salir</button>
      <button class="iconbtn" aria-label="Ayuda" data-go="E06">${ic('help')}</button>
      ${avatar('NS', { square:true, tone:'company' })}
    </header>
    <div class="onboard__progress">
      ${stepper(['Información','Descripción','Requisitos','Publicación'], 3)}
    </div>
    <div class="onboard__body">
      <div class="onboard__grid">
        <div class="card">
          <div class="card__head">
            <div class="grow">
              <h2 class="h2">Requisitos y compensación</h2>
              <p class="tiny muted" style="margin-top:2px">Sé transparente: las vacantes con salario reciben más postulaciones.</p>
            </div>
            <div class="stack" style="gap:5px;width:130px">
              <span class="tiny muted right">Paso 3 de 4</span>
              ${progress({ value:75, size:'xs' })}
            </div>
          </div>
          <div class="card__body">
            <form class="form" data-validate data-success-go="F04" data-form-name="Publicar vacante · requisitos" novalidate>
              ${formLegend()}

              <fieldset class="fieldset" data-gestalt="Región común">
                <legend class="fieldset__legend">Habilidades requeridas</legend>
                <div class="chips">
                  ${chip('React', { removable:true })}${chip('Node.js', { removable:true })}${chip('PostgreSQL', { removable:true })}${chip('Docker', { removable:true })}
                  <button class="chip chip--add" data-demo="add-chip">${ic('plus')}Añadir habilidad</button>
                </div>
                ${field({ id:'job-skill', label:'Buscar habilidad', icon:'search', ac:'habilidades', placeholder:'Escribe una habilidad y elige una sugerencia',
                  hint:'Las habilidades alimentan el porcentaje de coincidencia con los candidatos.' })}
              </fieldset>

              <div class="grid grid--2">
                ${select({ id:'job-exp', label:'Experiencia mínima', required:true, options:['Sin experiencia','1 año','2 años','3 años','4 años','5+ años'], value:'4 años' })}
                ${select({ id:'job-edu', label:'Formación', optional:true, options:['No requiere título','Técnico','Tecnólogo','Profesional','Especialización'], value:'Profesional' })}
              </div>

              <fieldset class="fieldset">
                <legend class="fieldset__legend">Rango salarial</legend>
                <div class="grid grid--2">
                  ${field({ id:'job-sal-min', label:'Salario mínimo', required:true, value:'8.000.000', inputmode:'numeric', hint:'Sin puntos ni símbolos.' })}
                  ${field({ id:'job-sal-max', label:'Salario máximo', required:true, value:'11.000.000', inputmode:'numeric', hint:'Debe ser mayor al mínimo.' })}
                </div>
                <div class="row gap-2 tiny muted">${ic('info')}Moneda: COP · frecuencia mensual. Mostraremos el rango en la tarjeta de la vacante.</div>
              </fieldset>

              <fieldset class="fieldset">
                <legend class="fieldset__legend">Beneficios <span class="opt" style="text-transform:none;letter-spacing:0">(opcional)</span></legend>
                <div class="grid grid--3" style="gap:7px">
                  ${check({ id:'ben-health', label:'Seguro médico', checked:true })}
                  ${check({ id:'ben-training', label:'Presupuesto de formación', checked:true })}
                  ${check({ id:'ben-days', label:'Días flexibles' })}
                  ${check({ id:'ben-bonus', label:'Bono anual' })}
                  ${check({ id:'ben-equipment', label:'Equipo de trabajo', checked:true })}
                  ${check({ id:'ben-remote', label:'Ayuda de conectividad' })}
                </div>
              </fieldset>

              <div class="divider" style="margin:2px 0"></div>

              <fieldset class="fieldset" data-gestalt="Proximidad">
                <legend class="fieldset__legend">Preguntas de selección</legend>
                <p class="tiny muted" style="margin-top:-8px">Se muestran al final de la postulación. Máximo 5 preguntas.</p>
                ${field({ id:'job-q1', label:'Pregunta 1', required:true, value:'¿Cuántos años de experiencia tienes con Node.js?',
                  maxlength:140, hint:'Evita preguntas que revelen información sensible.' })}
                <div class="field" data-field>
                  <span class="field__label">Tipo de respuesta para la pregunta 1 <span class="req">*</span></span>
                  <div class="grid grid--3" style="gap:7px">
                    ${choice({ name:'job-q1-type', value:'text', title:'Texto libre', desc:'Respuesta abierta' })}
                    ${choice({ name:'job-q1-type', value:'single', title:'Opción múltiple', desc:'Una respuesta', checked:true, required:true })}
                    ${choice({ name:'job-q1-type', value:'yesno', title:'Sí / No', desc:'Respuesta binaria' })}
                  </div>
                  <p class="field__msg" data-msg aria-live="polite"></p>
                </div>
                ${field({ id:'job-q2', label:'Pregunta 2', optional:true, value:'¿Tienes disponibilidad para 2 días presenciales en Bogotá?',
                  maxlength:140, hint:'Puedes agregar hasta 3 preguntas más después de publicar.' })}
              </fieldset>

              <div class="grid grid--2">
                ${field({ id:'job-close', label:'Fecha de cierre', required:true, icon:'calendar', value:'21/11/2026', placeholder:'DD/MM/AAAA',
                  hint:'La vacante se pausa automáticamente en esa fecha.' })}
                ${select({ id:'job-visibility', label:'Visibilidad', options:['Pública en el catálogo','Solo con enlace directo','Solo candidatos invitados'], value:'Pública en el catálogo' })}
              </div>
            </form>
          </div>
          <div class="card__foot">
            ${btn('Atrás', { kind:'ghost', icon:'arrow-left', go:'F02' })}
            <span class="tiny muted row gap-2" style="margin-left:4px">${ic('check')}Borrador guardado</span>
            <div class="grow"></div>
            ${btn('Vista previa', { kind:'secondary', icon:'eye', demo:'toast-info' })}
            ${btn('Publicar vacante', { kind:'primary', icon:'send', demo:'publish-job' })}
          </div>
        </div>

        <aside class="onboard__aside">
          <div class="card progress-card">
            ${ring(75, { size:58, label:'Publicación' })}
            <div>
              <div class="strong small">Casi lista</div>
              <div class="tiny muted">Paso 3 de 4 · 2 min restantes</div>
            </div>
          </div>

          <div class="card">
            <div class="card__head"><h2 class="card__title">Calidad de la publicación</h2><div class="grow"></div>${badge('Muy buena', 'ok')}</div>
            <div class="card__body" style="display:flex;flex-direction:column;gap:11px">
              <div class="progress-head"><span class="progress-head__label">Puntaje</span><span class="progress-head__value">82 / 100</span></div>
              ${progress({ value:82, tone:'ok' })}
              <div class="checklist">
                <div class="checklist__item is-done">${ic('check-circle')}<span>Título y categoría</span></div>
                <div class="checklist__item is-done">${ic('check-circle')}<span>Descripción del cargo</span></div>
                <div class="checklist__item is-done">${ic('check-circle')}<span>Rango salarial</span></div>
                <div class="checklist__item is-current">${ic('clock')}<span>Añade 1 beneficio más</span></div>
              </div>
            </div>
          </div>

          <div class="card card--soft">
            <div class="card__body" style="padding:14px 16px">
              <div class="panel__title">Resumen</div>
              <dl class="meta-list">
                ${metaRow('briefcase', 'Cargo', 'Full Stack')}
                ${metaRow('map-pin', 'Modalidad', 'Híbrido · Bogotá')}
                ${metaRow('target', 'Salario', '$8M – $11M COP')}
                ${metaRow('calendar', 'Cierre', '21 nov 2026')}
                ${metaRow('users', 'Vacantes', '2 posiciones')}
              </dl>
            </div>
          </div>

          <div class="panel panel--warn">
            <div class="row gap-2" style="margin-bottom:5px">${ic('alert')}<span class="h4">Antes de publicar</span></div>
            <p class="tiny muted" style="line-height:1.55">Revisa que el salario y los requisitos sean reales. Las vacantes reportadas pueden ser despublicadas.</p>
          </div>
        </aside>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'F04', title:'Candidatos · embudo kanban', group:'F',
  purpose:'Embudo de candidatos en columnas con tarjetas homogéneas. El reclutador ve el volumen por etapa, filtra por vacante y abre el perfil sin perder el tablero.',
  cta:'«Ver perfil» — pie de cada tarjeta; «Publicar vacante» en la cabecera.',
  patterns:['Catálogo','Progreso','Feedback','Formulario'],
  gestalt:['Similitud','Proximidad','Región común','Continuidad'],
  reqs:['RQ-06','RQ-12','RQ-15','RQ-17','RQ-18','RQ-21','RQ-26','RQ-35'],
  html: () => `
  <div class="app">
    ${appHeader({ role:'company', active:'candidatos' })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:14px">
        ${pageHead({ eyebrow:'Nova Systems · Selección', title:'Candidatos',
          sub:'Arrastra las tarjetas para mover candidatos entre etapas. Los cambios se guardan automáticamente.',
          actions: btn('Exportar', { kind:'secondary', icon:'download', demo:'toast-ok' }) +
                   btn('Publicar vacante', { kind:'primary', icon:'plus', go:'F02' }) })}

        <div class="card" style="padding:11px 14px" data-gestalt="Región común">
          <div class="split">
            <div class="row gap-3">
              ${segmented([{id:'all',label:'Todas las vacantes',count:312},{id:'fs',label:'Full Stack',count:87},{id:'devops',label:'DevOps',count:42},{id:'data',label:'Datos',count:31}], 'all')}
            </div>
            <div class="row gap-2">
              <label class="hsearch" style="width:230px;height:32px">${ic('search')}<input type="search" placeholder="Buscar candidato" aria-label="Buscar candidato"></label>
              ${select({ id:'cand-sort', label:'', options:['Mejor coincidencia','Más recientes','Nombre A-Z'], value:'Mejor coincidencia' })}
              <div class="viewtoggle" role="group" aria-label="Vista de candidatos">
                <button class="is-on" aria-label="Vista kanban" aria-pressed="true">${ic('grid')}</button>
                <button aria-label="Vista lista" aria-pressed="false">${ic('list')}</button>
              </div>
            </div>
          </div>
        </div>

        <div class="row gap-5" style="padding:0 2px">
          <div class="stat-strip">
            <div class="stat-strip__item"><span class="stat-strip__num">312</span><span class="stat-strip__cap">Postulantes</span></div>
            <div class="stat-strip__item"><span class="stat-strip__num">27</span><span class="stat-strip__cap">En proceso</span></div>
            <div class="stat-strip__item"><span class="stat-strip__num">5</span><span class="stat-strip__cap">Entrevistas</span></div>
            <div class="stat-strip__item"><span class="stat-strip__num">2</span><span class="stat-strip__cap">Ofertas</span></div>
          </div>
          <div class="grow"></div>
          <div class="row gap-2 tiny muted">${ic('info')}Actualizado hace 2 minutos</div>
        </div>

        <div class="kanban" data-gestalt="Similitud">
          <div class="kcol">
            <div class="kcol__head">
              <span class="kcol__dot"></span>
              <span class="kcol__title">Nuevos</span>
              <span class="kcol__count">12</span>
              <div class="grow"></div>
              <button class="iconbtn" style="width:24px;height:24px" aria-label="Opciones de Nuevos" data-demo="toast-info">${ic('more')}</button>
            </div>
            ${[
              ['VR','Valentina Ríos','Full Stack · 4 años','94','hace 2 h'],
              ['JC','Julián Castro','DevOps · 5 años','91','hace 4 h'],
              ['LM','Laura Mejía','Datos · 3 años','88','hace 5 h']
            ].map(function(c){
              return '<div class="kcard" data-demo="toast-info">' +
                '<div class="kcard__top">' + avatar(c[0], { size:'sm' }) +
                '<div class="grow"><div class="kcard__name">' + c[1] + '</div><div class="kcard__role">' + c[2] + '</div></div>' +
                badge(c[3] + '%', 'ok') + '</div>' +
                '<div class="kcard__meta">' + chip('Bogotá', { kind:'outline', size:'sm' }) + chip('Híbrido', { kind:'outline', size:'sm' }) + '</div>' +
                '<div class="kcard__foot"><span class="tiny dim">' + c[4] + '</span><button class="btn btn--ghost btn--sm" data-demo="toast-info">Ver perfil</button></div>' +
              '</div>';
            }).join('')}
            <button class="btn btn--secondary btn--block btn--sm" style="border-style:dashed" data-demo="toast-info">${ic('plus')}Ver 9 más</button>
          </div>

          <div class="kcol">
            <div class="kcol__head">
              <span class="kcol__dot" style="background:#C98A1B"></span>
              <span class="kcol__title">En revisión</span>
              <span class="kcol__count">8</span>
              <div class="grow"></div>
              <button class="iconbtn" style="width:24px;height:24px" aria-label="Opciones de En revisión" data-demo="toast-info">${ic('more')}</button>
            </div>
            ${[
              ['AC','Andrés Cárdenas','Backend · 6 años','89','hace 1 día'],
              ['MP','María Paula Gómez','Frontend · 4 años','86','hace 1 día'],
              ['DR','Diego Ramírez','Full Stack · 5 años','84','hace 2 días']
            ].map(function(c){
              return '<div class="kcard" data-demo="toast-info">' +
                '<div class="kcard__top">' + avatar(c[0], { size:'sm', tone:'teal' }) +
                '<div class="grow"><div class="kcard__name">' + c[1] + '</div><div class="kcard__role">' + c[2] + '</div></div>' +
                badge(c[3] + '%', 'ok') + '</div>' +
                '<div class="kcard__meta">' + chip('Remoto', { kind:'outline', size:'sm' }) + chip('Senior', { kind:'outline', size:'sm' }) + '</div>' +
                '<div class="kcard__foot"><span class="tiny dim">' + c[4] + '</span><button class="btn btn--ghost btn--sm" data-demo="toast-info">Ver perfil</button></div>' +
              '</div>';
            }).join('')}
            <button class="btn btn--secondary btn--block btn--sm" style="border-style:dashed" data-demo="toast-info">${ic('plus')}Ver 5 más</button>
          </div>

          <div class="kcol">
            <div class="kcol__head">
              <span class="kcol__dot" style="background:var(--ok)"></span>
              <span class="kcol__title">Entrevista</span>
              <span class="kcol__count">5</span>
              <div class="grow"></div>
              <button class="iconbtn" style="width:24px;height:24px" aria-label="Opciones de Entrevista" data-demo="toast-info">${ic('more')}</button>
            </div>
            ${[
              ['CM','Camila Ospina','Datos · 5 años','93','Mié 4 nov · 10:00'],
              ['JP','Jorge Peña','DevOps · 4 años','90','Jue 5 nov · 9:00'],
              ['SL','Sara Londoño','Frontend · 3 años','87','Vie 6 nov · 14:00']
            ].map(function(c){
              return '<div class="kcard" data-demo="toast-info">' +
                '<div class="kcard__top">' + avatar(c[0], { size:'sm', tone:'violet' }) +
                '<div class="grow"><div class="kcard__name">' + c[1] + '</div><div class="kcard__role">' + c[2] + '</div></div>' +
                badge(c[3] + '%', 'ok') + '</div>' +
                '<div class="kcard__meta">' + chip(c[4], { kind:'ok', size:'sm' }) + '</div>' +
                '<div class="kcard__foot"><span class="tiny dim">Entrevista agendada</span><button class="btn btn--ghost btn--sm" data-demo="toast-info">Ver perfil</button></div>' +
              '</div>';
            }).join('')}
            <button class="btn btn--secondary btn--block btn--sm" style="border-style:dashed" data-demo="toast-info">${ic('plus')}Ver 2 más</button>
          </div>

          <div class="kcol">
            <div class="kcol__head">
              <span class="kcol__dot" style="background:#6D4AC7"></span>
              <span class="kcol__title">Oferta</span>
              <span class="kcol__count">2</span>
              <div class="grow"></div>
              <button class="iconbtn" style="width:24px;height:24px" aria-label="Opciones de Oferta" data-demo="toast-info">${ic('more')}</button>
            </div>
            ${[
              ['AB','Alejandra Bustos','Full Stack · 7 años','96','Oferta enviada ayer'],
              ['RG','Ricardo Gil','Backend · 6 años','92','Oferta enviada hoy']
            ].map(function(c){
              return '<div class="kcard" data-demo="toast-info">' +
                '<div class="kcard__top">' + avatar(c[0], { size:'sm', tone:'amber' }) +
                '<div class="grow"><div class="kcard__name">' + c[1] + '</div><div class="kcard__role">' + c[2] + '</div></div>' +
                badge(c[3] + '%', 'ok') + '</div>' +
                '<div class="kcard__meta">' + chip('Oferta', { kind:'ok', size:'sm' }) + chip('Pendiente', { kind:'warn', size:'sm' }) + '</div>' +
                '<div class="kcard__foot"><span class="tiny dim">' + c[4] + '</span><button class="btn btn--ghost btn--sm" data-demo="toast-info">Ver perfil</button></div>' +
              '</div>';
            }).join('')}
            <div class="panel panel--ok" style="padding:11px">
              <div class="tiny muted" style="line-height:1.5">${ic('check-circle')} 75% de las ofertas se aceptan en menos de 3 días.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
});
