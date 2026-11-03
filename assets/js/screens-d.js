/* =========================================================
   Pantallas D · Postulación y seguimiento
   ========================================================= */

defineScreen({
  id:'D01', title:'Postularme · paso 1 de 3', group:'D',
  purpose:'Inicio de postulación con datos precargados del perfil. El CV se adjunta con progreso visible y se explica qué se comparte con la empresa.',
  cta:'«Continuar» — pie del formulario; «Guardar borrador» como secundaria.',
  patterns:['Formulario','Validación','Progreso','Autocompletado','Loader','Feedback'],
  gestalt:['Proximidad','Región común','Continuidad','Figura-fondo'],
  reqs:['RQ-01','RQ-02','RQ-03','RQ-05','RQ-24','RQ-28'],
  html: () => `
  <div class="app">
    ${onboardHeader({ saveText:'Postulación · Nova Systems' })}
    <div class="onboard__progress">
      ${stepper(['Datos de contacto','Preguntas','Revisión'], 1)}
    </div>
    <div class="onboard__body">
      <div class="onboard__grid">
        <div class="card">
          <div class="card__head">
            <div class="grow">
              <h2 class="h2">Tus datos de contacto</h2>
              <p class="tiny muted" style="margin-top:2px">Los tomamos de tu perfil. Puedes ajustarlos solo para esta postulación.</p>
            </div>
            <div class="stack" style="gap:5px;width:140px">
              <span class="tiny muted right">Paso 1 de 3</span>
              ${progress({ value:33, size:'xs' })}
            </div>
          </div>
          <div class="card__body">
            <form class="form" data-validate data-success-go="D02" data-form-name="Datos de postulación" novalidate>
              ${alert('info', '', 'Esta información se enviará a <b>Nova Systems</b> junto con tu hoja de vida.')}
              ${formLegend()}

              <div class="grid grid--2" data-gestalt="Proximidad">
                ${field({ id:'ap-name', label:'Nombre completo', required:true, value:'Valentina Ríos Marín', autocomplete:'name' })}
                ${field({ id:'ap-email', label:'Correo electrónico', type:'email', required:true, icon:'mail',
                  value:'valentina.rios@correo.com', autocomplete:'email', valid:true })}
                ${field({ id:'ap-phone', label:'Teléfono', type:'tel', required:true, icon:'phone',
                  value:'+57 300 412 8890', autocomplete:'tel', valid:true, hint:'La empresa lo usará para coordinar entrevistas.' })}
                ${field({ id:'ap-city', label:'Ciudad', required:true, icon:'map-pin',
                  value:'Armenia, Quindío', ac:'ciudades', hint:'Debe coincidir con tu disponibilidad de traslado.' })}
              </div>
              ${field({ id:'ap-linkedin', label:'Perfil de LinkedIn', optional:true, icon:'globe', type:'url',
                placeholder:'linkedin.com/in/tu-perfil', hint:'Ayuda a la empresa a conocer mejor tu trayectoria.' })}

              <div class="divider" style="margin:2px 0"></div>

              <fieldset class="fieldset" data-gestalt="Región común">
                <legend class="fieldset__legend">Hoja de vida</legend>
                ${fileRow({ name:'CV_Valentina_Rios_2026.pdf', meta:'PDF · 284 KB · actualizado el 10/10/2026', progress:100, done:true,
                  action:'<button class="btn btn--secondary btn--sm" data-demo="upload">' + ic('refresh') + 'Reemplazar</button>' })}
                <div class="row gap-2 tiny muted">${ic('info')}<span>Tu CV actual se adjuntará automáticamente. Formatos: PDF o DOCX · máximo 5 MB.</span></div>
              </fieldset>

              ${field({ id:'ap-letter', label:'Carta de presentación', type:'textarea', optional:true, maxlength:800, tall:true,
                placeholder:'Cuéntale a la empresa por qué te interesa este cargo…',
                hint:'Recomendado: 3 párrafos cortos. Puedes usar una plantilla.' })}

              <div class="field" data-field>
                ${check({ id:'ap-share', label:'Compartir mi perfil completo con esta empresa, incluida mi expectativa salarial. <span class="dim">(opcional)</span>', checked:true })}
              </div>
            </form>
          </div>
          <div class="card__foot">
            ${btn('Atrás', { kind:'ghost', icon:'arrow-left', go:'C04' })}
            <span class="tiny muted row gap-2" style="margin-left:4px">${ic('check')}Borrador guardado</span>
            <div class="grow"></div>
            ${btn('Guardar borrador', { kind:'secondary', demo:'toast-ok' })}
            ${btn('Continuar', { kind:'primary', iconRight:'arrow-right', demo:'validate-go' })}
          </div>
        </div>

        <aside class="onboard__aside">
          <div class="card" data-gestalt="Figura-fondo">
            <div class="card__body" style="padding:16px;display:flex;flex-direction:column;gap:11px">
              <div class="row gap-3">
                <span class="jobcard__logo" style="width:40px;height:40px;flex-basis:40px">NS</span>
                <div class="grow">
                  <div class="small strong" style="line-height:1.3">Desarrollador Full Stack</div>
                  <div class="tiny muted">Nova Systems · Bogotá D.C.</div>
                </div>
              </div>
              <div class="row gap-2 wrap">
                ${badge('Híbrido', 'neutral')}${badge('Senior', 'neutral')}${badge('$8M – $11M', 'ok')}
              </div>
              <div class="divider" style="margin:2px 0"></div>
              <div class="row gap-3">
                ${ring(94, { size:46, label:'' })}
                <div class="tiny muted" style="line-height:1.45"><b class="strong">94% de coincidencia</b><br>9 de 10 requisitos cumplidos</div>
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card__body" style="padding:16px">
              <div class="panel__title">Tu postulación</div>
              <div class="checklist">
                <div class="checklist__item is-current">${ic('clock')}<span>Datos de contacto</span></div>
                <div class="checklist__item">${ic('info')}<span>Preguntas de la empresa</span></div>
                <div class="checklist__item">${ic('info')}<span>Revisión y envío</span></div>
              </div>
              <div class="panel mt-3" style="padding:10px">
                <div class="tiny muted" style="line-height:1.5">${ic('clock')} Tiempo estimado restante: <b class="strong">2 min</b></div>
              </div>
            </div>
          </div>

          <div class="panel panel--blue">
            <div class="row gap-2" style="margin-bottom:5px">${ic('sparkle')}<span class="h4">Consejo</span></div>
            <p class="tiny muted" style="line-height:1.55">Las postulaciones con carta de presentación reciben <b class="strong">40% más</b> respuestas. Menciona un proyecto concreto.</p>
          </div>
        </aside>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'D02', title:'Postularme · paso 2 de 3', group:'D',
  purpose:'Preguntas de selección con tipos de campo adecuados, obligatorios explícitos, contador de caracteres y progreso de respuestas.',
  cta:'«Continuar» — pie del formulario.',
  patterns:['Formulario','Validación','Progreso','Feedback'],
  gestalt:['Proximidad','Similitud','Región común'],
  reqs:['RQ-01','RQ-02','RQ-03','RQ-04','RQ-05','RQ-08'],
  html: () => `
  <div class="app">
    ${onboardHeader({ saveText:'Postulación · Nova Systems' })}
    <div class="onboard__progress">
      ${stepper(['Datos de contacto','Preguntas','Revisión'], 2)}
    </div>
    <div class="onboard__body">
      <div class="onboard__grid">
        <div class="card">
          <div class="card__head">
            <div class="grow">
              <h2 class="h2">Preguntas de Nova Systems</h2>
              <p class="tiny muted" style="margin-top:2px">6 preguntas · 2 obligatorias. Puedes guardar y continuar después.</p>
            </div>
            <div class="stack" style="gap:5px;width:150px">
              <span class="tiny muted right">2 de 6 respondidas</span>
              ${progress({ value:33, size:'xs' })}
            </div>
          </div>
          <div class="card__body">
            <form class="form" data-validate data-success-go="D03" data-form-name="Preguntas de selección" novalidate>
              ${formLegend()}

              <div class="field" data-field data-gestalt="Región común">
                <span class="field__label">1. ¿Cuántos años de experiencia tienes con Node.js? <span class="req">*</span></span>
                <div class="grid grid--3">
                  ${choice({ name:'q-node', value:'0-1', title:'Menos de 1 año' })}
                  ${choice({ name:'q-node', value:'2-3', title:'2 a 3 años' })}
                  ${choice({ name:'q-node', value:'4+', title:'4 años o más', checked:true, required:true })}
                </div>
                <p class="field__msg" data-msg aria-live="polite"></p>
              </div>

              <div class="field" data-field>
                <span class="field__label">2. ¿Tienes disponibilidad para trabajar 2 días por semana en Bogotá? <span class="req">*</span></span>
                <div class="grid grid--2">
                  ${choice({ name:'q-city', value:'yes', title:'Sí, sin problema', desc:'Puedo desplazarme 2 días por semana.', checked:true, required:true })}
                  ${choice({ name:'q-city', value:'no', title:'No por ahora', desc:'Solo modalidad remota.' })}
                </div>
                <p class="field__msg" data-msg aria-live="polite"></p>
              </div>

              <div class="grid grid--2">
                ${field({ id:'q-salary', label:'3. ¿Cuál es tu expectativa salarial?', optional:true,
                  placeholder:'8.500.000', inputmode:'numeric',
                  hint:'La vacante ofrece entre $8M y $11M COP.' })}
                ${select({ id:'q-source', label:'4. ¿Cómo nos conociste?', optional:true,
                  options:['Talenta','LinkedIn','Recomendación','Sitio web de la empresa','Otro'] })}
              </div>

              <div class="field" data-field>
                <span class="field__label">5. Cuéntanos por qué te interesa este cargo <span class="req">*</span></span>
                <div class="input-wrap" style="display:block">
                  <textarea class="textarea textarea--tall" id="q-why" name="q-why" maxlength="600" data-counter="q-why"
                    data-required="true" aria-required="true" aria-describedby="q-why-hint q-why-msg"
                    placeholder="Menciona un proyecto o experiencia concreta…">Me interesa liderar productos que impacten a personas reales. En Nova Systems puedo aportar mi experiencia migrando servicios a React y trabajando con equipos multidisciplinarios.</textarea>
                  <span class="field__counter" data-counter-out="q-why">168/600</span>
                </div>
                <p class="field__hint" id="q-why-hint">${ic('info')}<span>Mínimo 40 caracteres. Evita información sensible como tu documento o dirección.</span></p>
                <p class="field__msg" data-msg aria-live="polite"></p>
              </div>

              <div class="field" data-field data-gestalt="Proximidad">
                ${check({ id:'q-consent', required:true,
                  label:'Autorizo a Nova Systems a tratar mis datos para este proceso de selección. <span class="req">*</span>' })}
                <p class="field__msg" data-msg aria-live="polite"></p>
              </div>
            </form>
          </div>
          <div class="card__foot">
            ${btn('Atrás', { kind:'ghost', icon:'arrow-left', go:'D01' })}
            <div class="grow"></div>
            ${btn('Guardar borrador', { kind:'secondary', demo:'toast-ok' })}
            ${btn('Continuar', { kind:'primary', iconRight:'arrow-right', demo:'validate-go' })}
          </div>
        </div>

        <aside class="onboard__aside">
          <div class="card">
            <div class="card__body" style="padding:16px;display:flex;flex-direction:column;gap:11px">
              <div class="row gap-3">
                <span class="jobcard__logo" style="width:40px;height:40px;flex-basis:40px">NS</span>
                <div class="grow">
                  <div class="small strong" style="line-height:1.3">Desarrollador Full Stack</div>
                  <div class="tiny muted">Nova Systems · Bogotá D.C.</div>
                </div>
              </div>
              <div class="progress-head"><span class="progress-head__label">Progreso de la postulación</span><span class="progress-head__value">66%</span></div>
              ${progress({ value:66 })}
              <div class="tiny muted">Te faltan 4 preguntas opcionales y la revisión final.</div>
            </div>
          </div>

          <div class="card">
            <div class="card__body" style="padding:16px">
              <div class="panel__title">Cómo respondemos</div>
              <ul class="req-list">
                <li>${ic('check')}Cada respuesta se guarda automáticamente.</li>
                <li>${ic('check')}Puedes editar antes de enviar.</li>
                <li>${ic('check')}La empresa ve tus respuestas junto a tu perfil.</li>
              </ul>
            </div>
          </div>

          <div class="panel panel--warn">
            <div class="row gap-2" style="margin-bottom:5px">${ic('alert')}<span class="h4">Ten en cuenta</span></div>
            <p class="tiny muted" style="line-height:1.55">Si no cumples un requisito obligatorio, tu postulación podría cerrarse automáticamente. Revisa la descripción antes de continuar.</p>
          </div>
        </aside>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'D03', title:'Postularme · paso 3 de 3', group:'D',
  purpose:'Revisión final antes de enviar. Cada bloque se puede editar, el consentimiento es explícito y el envío muestra un loader con pasos.',
  cta:'«Enviar postulación» — pie del formulario, con loader al enviar.',
  patterns:['Formulario','Progreso','Loader','Feedback'],
  gestalt:['Proximidad','Cierre','Región común','Punto focal'],
  reqs:['RQ-09','RQ-11','RQ-24','RQ-29'],
  html: () => `
  <div class="app">
    ${onboardHeader({ saveText:'Postulación · Nova Systems' })}
    <div class="onboard__progress">
      ${stepper(['Datos de contacto','Preguntas','Revisión'], 3)}
    </div>
    <div class="onboard__body">
      <div class="onboard__grid">
        <div class="card">
          <div class="card__head">
            <div class="grow">
              <h2 class="h2">Revisa antes de enviar</h2>
              <p class="tiny muted" style="margin-top:2px">Verifica que todo esté correcto. Después del envío no podrás editar tus respuestas.</p>
            </div>
            ${badge('Paso 3 de 3', 'neutral')}
          </div>
          <div class="card__body" style="display:flex;flex-direction:column;gap:14px">
            ${alert('warn', 'Revisa la información con calma', 'La empresa recibirá tu perfil y tu CV en cuanto envíes la postulación.')}

            <div class="panel" data-gestalt="Región común">
              <div class="split" style="margin-bottom:8px">
                <span class="panel__title" style="margin:0">Datos de contacto</span>
                <button class="btn btn--ghost btn--sm" data-go="D01">${ic('edit')}Editar</button>
              </div>
              <div class="grid grid--2" style="gap:7px 16px">
                <div class="tiny"><span class="dim">Nombre:</span> <b class="strong">Valentina Ríos Marín</b></div>
                <div class="tiny"><span class="dim">Correo:</span> <b class="strong">valentina.rios@correo.com</b></div>
                <div class="tiny"><span class="dim">Teléfono:</span> <b class="strong">+57 300 412 8890</b></div>
                <div class="tiny"><span class="dim">Ciudad:</span> <b class="strong">Armenia, Quindío</b></div>
              </div>
            </div>

            <div class="panel">
              <div class="split" style="margin-bottom:8px">
                <span class="panel__title" style="margin:0">Hoja de vida</span>
                <button class="btn btn--ghost btn--sm" data-go="D01">${ic('edit')}Editar</button>
              </div>
              ${fileRow({ name:'CV_Valentina_Rios_2026.pdf', meta:'PDF · 284 KB · adjunto', done:true })}
            </div>

            <div class="panel">
              <div class="split" style="margin-bottom:8px">
                <span class="panel__title" style="margin:0">Respuestas</span>
                <button class="btn btn--ghost btn--sm" data-go="D02">${ic('edit')}Editar</button>
              </div>
              <dl class="meta-list">
                <div class="meta-list__row"><dt>Experiencia con Node.js</dt><dd>4 años o más</dd></div>
                <div class="meta-list__row"><dt>Disponibilidad en Bogotá</dt><dd>Sí, sin problema</dd></div>
                <div class="meta-list__row"><dt>Expectativa salarial</dt><dd>$8.500.000 COP</dd></div>
                <div class="meta-list__row"><dt>¿Cómo nos conoció?</dt><dd>Talenta</dd></div>
              </dl>
              <div class="divider" style="margin:10px 0"></div>
              <div class="tiny dim">Motivación</div>
              <p class="tiny mt-1" style="line-height:1.55;color:var(--ink-600)">Me interesa liderar productos que impacten a personas reales. En Nova Systems puedo aportar mi experiencia migrando servicios a React y trabajando con equipos multidisciplinarios.</p>
            </div>

            <div class="field" data-field>
              ${check({ id:'send-consent', checked:true, required:true,
                label:'Confirmo que la información es verídica y autorizo el tratamiento de mis datos para este proceso. <span class="req">*</span>' })}
              <p class="field__msg" data-msg aria-live="polite"></p>
            </div>

            <div class="alert alert--info">
              ${ic('clock')}<div class="alert__body"><b>Tiempo de respuesta promedio: 6 días.</b> Te avisaremos por correo y en «Mis postulaciones».</div>
            </div>
          </div>
          <div class="card__foot">
            ${btn('Atrás', { kind:'ghost', icon:'arrow-left', go:'D02' })}
            <div class="grow"></div>
            ${btn('Guardar borrador', { kind:'secondary', demo:'toast-ok' })}
            ${btn('Enviar postulación', { kind:'primary', icon:'send', demo:'submit-application' })}
          </div>
        </div>

        <aside class="onboard__aside">
          <div class="card">
            <div class="card__body" style="padding:16px;display:flex;flex-direction:column;gap:11px">
              <div class="row gap-3">
                <span class="jobcard__logo" style="width:40px;height:40px;flex-basis:40px">NS</span>
                <div class="grow">
                  <div class="small strong" style="line-height:1.3">Desarrollador Full Stack</div>
                  <div class="tiny muted">Nova Systems · Bogotá D.C.</div>
                </div>
              </div>
              <div class="row gap-2 wrap">${badge('Híbrido', 'neutral')}${badge('Senior', 'neutral')}</div>
              <div class="divider" style="margin:2px 0"></div>
              <div class="row gap-3">${ring(94, { size:44, label:'' })}<div class="tiny muted"><b class="strong">94% match</b><br>9 de 10 requisitos</div></div>
            </div>
          </div>

          <div class="card">
            <div class="card__body" style="padding:16px">
              <div class="panel__title">Qué pasa después</div>
              <div class="tl">
                <div class="tl__item is-current">
                  <span class="tl__dot">${ic('send')}</span>
                  <div class="tl__head"><span class="tl__title">Envías tu postulación</span></div>
                  <div class="tl__desc">Recibes confirmación inmediata.</div>
                </div>
                <div class="tl__item is-pending">
                  <span class="tl__dot">${ic('clock')}</span>
                  <div class="tl__head"><span class="tl__title">Revisión</span><span class="tl__time">1–6 días</span></div>
                </div>
                <div class="tl__item is-pending">
                  <span class="tl__dot">${ic('calendar')}</span>
                  <div class="tl__head"><span class="tl__title">Entrevista</span><span class="tl__time">Si avanzas</span></div>
                </div>
                <div class="tl__item is-pending">
                  <span class="tl__dot">${ic('flag')}</span>
                  <div class="tl__head"><span class="tl__title">Decisión final</span></div>
                </div>
              </div>
            </div>
          </div>

          <div class="panel panel--blue">
            <div class="row gap-2" style="margin-bottom:5px">${ic('shield')}<span class="h4">Tus datos</span></div>
            <p class="tiny muted" style="line-height:1.55">Solo el equipo de selección de Nova Systems verá tu información. Puedes retirar tu postulación en cualquier momento.</p>
          </div>
        </aside>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'D04', title:'Postulación enviada', group:'D',
  purpose:'Confirmación con evidencia de lo enviado y siguiente paso. El rastreador de 4 etapas comunica exactamente dónde está el proceso.',
  cta:'«Ver mis postulaciones» — bajo la confirmación, ancho completo.',
  patterns:['Progreso','Feedback','Catálogo'],
  gestalt:['Cierre','Punto focal','Figura-fondo','Continuidad'],
  reqs:['RQ-09','RQ-13','RQ-25','RQ-26'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'postulaciones' })}
    <div class="page">
      <div style="max-width:760px;margin:0 auto;display:flex;flex-direction:column;gap:16px">
        <div class="card">
          <div class="card__body" style="padding:30px;display:flex;flex-direction:column;gap:18px;align-items:center;text-align:center">
            <span style="width:66px;height:66px;border-radius:50%;background:var(--ok-bg);color:var(--ok);display:grid;place-items:center;border:1px solid var(--ok-line)" data-gestalt="Punto focal">${ic('check')}</span>
            <div class="stack" style="gap:6px;max-width:520px">
              <span class="eyebrow" style="color:var(--ok)">Postulación enviada</span>
              <h1 class="h1" style="font-size:25px">¡Buen paso, Valentina!</h1>
              <p class="small muted" style="line-height:1.6">Tu postulación a <b class="strong">Desarrollador Full Stack</b> en Nova Systems fue enviada. Te avisaremos por correo cuando cambie de etapa.</p>
            </div>

            <div class="panel" style="width:100%;text-align:left;display:flex;gap:12px;align-items:center">
              <span class="jobcard__logo">NS</span>
              <div class="grow">
                <div class="small strong">Desarrollador Full Stack</div>
                <div class="tiny muted">Nova Systems · Bogotá D.C. · Híbrido</div>
              </div>
              ${badge('En revisión', 'warn', true)}
            </div>

            <div style="width:100%" data-gestalt="Continuidad">
              ${track(['Enviada','En revisión','Entrevista','Decisión final'], 1)}
            </div>

            <div class="grid grid--3" style="width:100%;gap:9px">
              <div class="panel" style="padding:11px"><div class="tiny dim">Enviada</div><div class="small strong">Hoy, 10:24 a. m.</div></div>
              <div class="panel" style="padding:11px"><div class="tiny dim">CV adjunto</div><div class="small strong">CV_Valentina.pdf</div></div>
              <div class="panel" style="padding:11px"><div class="tiny dim">Respuesta estimada</div><div class="small strong">6 días hábiles</div></div>
            </div>

            <div class="alert alert--info" style="width:100%;text-align:left">
              ${ic('info')}<div class="alert__body"><b>Puedes seguir el proceso en «Mis postulaciones».</b> Ahí verás cada cambio de etapa, mensajes de la empresa y fechas de entrevista.</div>
            </div>

            <div class="stack" style="gap:9px;width:100%">
              ${btn('Ver mis postulaciones', { kind:'primary', block:true, iconRight:'arrow-right', go:'D05' })}
              <div class="grid grid--2" style="gap:9px">
                ${btn('Seguir explorando empleos', { kind:'secondary', block:true, icon:'search', go:'C02' })}
                ${btn('Agregar recordatorio', { kind:'secondary', block:true, icon:'calendar', demo:'toast-ok' })}
              </div>
            </div>
          </div>
        </div>
        <p class="center tiny dim">¿Algo no salió bien? <a class="link" data-go="E06">Escríbenos</a> y revisamos tu caso.</p>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'D05', title:'Mis postulaciones', group:'D',
  purpose:'Lista de procesos con estado, rastreador de 4 etapas y próxima acción. Las pestañas permiten filtrar sin perder el contexto.',
  cta:'«Ver detalle» por fila; «Buscar empleos» en la cabecera.',
  patterns:['Catálogo','Progreso','Feedback','Formulario'],
  gestalt:['Similitud','Proximidad','Continuidad','Región común'],
  reqs:['RQ-12','RQ-25','RQ-26','RQ-27','RQ-30'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'postulaciones' })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:16px">
        ${pageHead({ eyebrow:'Seguimiento', title:'Mis postulaciones',
          sub:'6 procesos activos. Revisa en qué etapa va cada uno y qué necesitas hacer ahora.',
          actions: btn('Buscar empleos', { kind:'primary', icon:'search', go:'C02' }) })}

        <div class="grid grid--4">
          ${kpi({ label:'Postulaciones activas', value:'6', icon:'briefcase', foot:'<span class="muted">2 nuevas esta semana</span>' })}
          ${kpi({ label:'En revisión', value:'3', icon:'clock', foot:'<span class="muted">Respuesta en 1–6 días</span>' })}
          ${kpi({ label:'Entrevistas', value:'1', icon:'calendar', foot:'<span class="up">' + ic('clock') + 'Mié 4 nov · 10:00</span>' })}
          ${kpi({ label:'Cerradas', value:'2', icon:'flag', foot:'<span class="muted">Archivadas por ti</span>' })}
        </div>

        <div class="card" data-gestalt="Región común">
          <div class="card__head" style="padding:12px 16px;display:flex;flex-direction:column;align-items:stretch;gap:11px">
            <div class="split">
              ${segmented([{id:'all',label:'Todas',count:6},{id:'review',label:'En revisión',count:3},{id:'interview',label:'Entrevistas',count:1},{id:'closed',label:'Archivadas',count:2}], 'all')}
              <div class="row gap-2">
                <label class="hsearch" style="width:220px;height:34px">${ic('search')}<input type="search" placeholder="Buscar empresa o cargo" aria-label="Buscar postulación"></label>
                ${select({ id:'app-sort', label:'', options:['Más recientes','Más antiguas','Estado'], value:'Más recientes' })}
              </div>
            </div>
          </div>
          <div>
            <div class="srow">
              <span class="jobcard__logo" style="width:40px;height:40px;flex-basis:40px">NS</span>
              <div class="srow__main">
                <div class="srow__title">Desarrollador Full Stack ${badge('En revisión', 'warn')}</div>
                <div class="srow__sub">Nova Systems · Bogotá D.C. · Postulaste el 12 oct</div>
                <div class="mt-2" style="max-width:380px">${track(['Enviada','Revisión','Entrevista','Decisión'], 2)}</div>
              </div>
              <div class="srow__aside" style="flex-direction:column;align-items:flex-end;gap:6px">
                <span class="tiny dim">Actualizado hace 2 h</span>
                ${btn('Ver detalle', { kind:'secondary', size:'sm', go:'D06' })}
              </div>
            </div>

            <div class="srow">
              <span class="jobcard__logo" style="width:40px;height:40px;flex-basis:40px">DA</span>
              <div class="srow__main">
                <div class="srow__title">Analista de Datos ${badge('Entrevista', 'ok')}</div>
                <div class="srow__sub">DataAndina · Remoto · Postulaste el 8 oct</div>
                <div class="mt-2" style="max-width:380px">${track(['Enviada','Revisión','Entrevista','Decisión'], 3)}</div>
              </div>
              <div class="srow__aside" style="flex-direction:column;align-items:flex-end;gap:6px">
                <span class="tiny muted row gap-2">${ic('calendar')}Mié 4 nov · 10:00</span>
                ${btn('Confirmar', { kind:'primary', size:'sm', go:'E01' })}
              </div>
            </div>

            <div class="srow">
              <span class="jobcard__logo" style="width:40px;height:40px;flex-basis:40px">CQ</span>
              <div class="srow__main">
                <div class="srow__title">Ingeniero DevOps ${badge('Enviada', 'neutral')}</div>
                <div class="srow__sub">CloudQuindío · Remoto · Postulaste el 14 oct</div>
                <div class="mt-2" style="max-width:380px">${track(['Enviada','Revisión','Entrevista','Decisión'], 1)}</div>
              </div>
              <div class="srow__aside" style="flex-direction:column;align-items:flex-end;gap:6px">
                <span class="tiny dim">Hace 3 días</span>
                ${btn('Ver detalle', { kind:'secondary', size:'sm', go:'D06' })}
              </div>
            </div>

            <div class="srow">
              <span class="jobcard__logo" style="width:40px;height:40px;flex-basis:40px">EB</span>
              <div class="srow__main">
                <div class="srow__title">Diseñador UX/UI ${badge('Cerrada', 'neutral')}</div>
                <div class="srow__sub">Estudio Bruma · Medellín · Cerrada el 30 sep</div>
                <div class="mt-2" style="max-width:380px">${track(['Enviada','Revisión','Entrevista','Decisión'], 4)}</div>
              </div>
              <div class="srow__aside" style="flex-direction:column;align-items:flex-end;gap:6px">
                <span class="tiny dim">No seleccionada</span>
                ${btn('Ver retroalimentación', { kind:'secondary', size:'sm', go:'D06' })}
              </div>
            </div>

            <div class="srow">
              <span class="jobcard__logo" style="width:40px;height:40px;flex-basis:40px">FP</span>
              <div class="srow__main">
                <div class="srow__title">Product Manager ${badge('En revisión', 'warn')}</div>
                <div class="srow__sub">FinPay · Bogotá D.C. · Postulaste el 16 oct</div>
                <div class="mt-2" style="max-width:380px">${track(['Enviada','Revisión','Entrevista','Decisión'], 2)}</div>
              </div>
              <div class="srow__aside" style="flex-direction:column;align-items:flex-end;gap:6px">
                <span class="tiny dim">Hace 1 día</span>
                ${btn('Ver detalle', { kind:'secondary', size:'sm', go:'D06' })}
              </div>
            </div>
          </div>
          <div class="card__foot" style="justify-content:space-between">
            <span class="tiny muted">Mostrando 5 de 6 postulaciones</span>
            <div class="pagination">
              <button disabled aria-label="Anterior">${ic('chevron-left')}</button>
              <button class="is-on">1</button>
              <button>2</button>
              <button aria-label="Siguiente">${ic('chevron-right')}</button>
            </div>
          </div>
        </div>

        <div class="alert alert--info">
          ${ic('info')}<div class="alert__body"><b>Consejo:</b> mantén tu perfil actualizado. Las empresas revisan tu disponibilidad y habilidades antes de agendar una entrevista. <a class="link" data-go="B05">Actualizar perfil</a></div>
        </div>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'D06', title:'Detalle de postulación', group:'D',
  purpose:'Seguimiento completo del proceso: línea de tiempo con evidencia, retroalimentación del reclutador y acciones para confirmar o reprogramar.',
  cta:'«Confirmar asistencia» — dentro de la etapa actual; «Enviar mensaje» en el panel derecho.',
  patterns:['Progreso','Feedback','Catálogo'],
  gestalt:['Continuidad','Proximidad','Región común','Figura-fondo'],
  reqs:['RQ-25','RQ-26','RQ-30','RQ-31'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'postulaciones' })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:14px">
        <nav class="row gap-2 tiny muted">
          <a class="link link--quiet" data-go="D05">Mis postulaciones</a>${ic('chevron-right')}
          <span class="strong" style="color:var(--ink-700)">Desarrollador Full Stack · Nova Systems</span>
        </nav>

        <div class="card" style="padding:20px 22px" data-gestalt="Figura-fondo">
          <div class="split" style="align-items:flex-start">
            <div class="row gap-4">
              <span class="jobcard__logo" style="width:54px;height:54px;flex-basis:54px;font-size:15px">NS</span>
              <div class="stack" style="gap:4px">
                <div class="row gap-2 wrap"><h1 class="h2" style="font-size:21px">Desarrollador Full Stack</h1>${badge('En revisión', 'warn', true)}</div>
                <div class="row gap-3 tiny muted wrap">
                  <span class="row gap-2">${ic('building')}Nova Systems</span>
                  <span class="row gap-2">${ic('map-pin')}Bogotá D.C. · Híbrido</span>
                  <span class="row gap-2">${ic('calendar')}Postulaste el 12 oct 2026</span>
                </div>
              </div>
            </div>
            <div class="btn-row">
              ${btn('Ver vacante', { kind:'secondary', size:'sm', icon:'external', go:'C04' })}
              <button class="iconbtn" style="border:1px solid var(--line-strong)" aria-label="Más acciones" data-demo="toast-info">${ic('more')}</button>
            </div>
          </div>

          <div class="divider"></div>
          ${track(['Enviada','En revisión','Entrevista','Decisión final'], 2)}
        </div>

        <div class="grid" style="grid-template-columns:minmax(0,1fr) 330px;align-items:start;gap:16px">
          <div class="stack gap-4">
            <div class="card" data-gestalt="Continuidad">
              <div class="card__head"><h2 class="card__title">Línea de tiempo del proceso</h2><div class="grow"></div><span class="badge badge--warn">Etapa actual: revisión</span></div>
              <div class="card__body">
                <div class="tl">
                  <div class="tl__item is-done">
                    <span class="tl__dot">${ic('check')}</span>
                    <div class="tl__head"><span class="tl__title">Postulación enviada</span><span class="tl__time">12 oct · 10:24 a. m.</span></div>
                    <div class="tl__desc">Recibimos tu postulación y tu CV. La empresa fue notificada.</div>
                  </div>
                  <div class="tl__item is-done">
                    <span class="tl__dot">${ic('check')}</span>
                    <div class="tl__head"><span class="tl__title">Perfil revisado por el equipo</span><span class="tl__time">13 oct · 4:10 p. m.</span></div>
                    <div class="tl__desc">Nova Systems abrió tu perfil y descargó tu hoja de vida.</div>
                  </div>
                  <div class="tl__item is-current">
                    <span class="tl__dot">${ic('clock')}</span>
                    <div class="tl__head"><span class="tl__title">Prueba técnica</span><span class="tl__time">16 oct · 9:00 a. m.</span>${badge('Completada', 'ok')}</div>
                    <div class="tl__desc">Ejercicio de 90 minutos sobre APIs y React. Resultado: <b class="strong">87/100</b>.</div>
                    <div class="tl__card" style="display:flex;align-items:center;gap:10px">
                      ${ic('file')}
                      <div class="grow"><div class="small strong">Retroalimentación de la prueba</div><div class="tiny muted">Buen manejo de estados; revisar manejo de errores.</div></div>
                      <button class="btn btn--ghost btn--sm" data-demo="toast-info">Ver</button>
                    </div>
                  </div>
                  <div class="tl__item is-pending">
                    <span class="tl__dot">${ic('calendar')}</span>
                    <div class="tl__head"><span class="tl__title">Entrevista técnica</span><span class="tl__time">Estimada: 4 nov</span>${badge('Por agendar', 'neutral')}</div>
                    <div class="tl__desc">La empresa confirmará fecha y hora en los próximos días.</div>
                  </div>
                  <div class="tl__item is-pending">
                    <span class="tl__dot">${ic('flag')}</span>
                    <div class="tl__head"><span class="tl__title">Decisión final</span><span class="tl__time">Estimada: 28 oct</span></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card__head"><h2 class="card__title">Retroalimentación del equipo</h2><div class="grow"></div><span class="tiny dim">Hace 2 días</span></div>
              <div class="card__body">
                <div class="quote">«Valentina mostró una base técnica sólida y buena comunicación. Nos gustaría conocer más sobre su experiencia liderando migraciones y cómo aborda los trade-offs de arquitectura.»</div>
                <div class="quote__by">
                  ${avatar('CM', { size:'sm' })}
                  <div><strong>Carolina Méndez</strong><small>Líder de talento · Nova Systems</small></div>
                  <div class="grow"></div>
                  ${btn('Responder', { kind:'secondary', size:'sm', icon:'message', go:'E02' })}
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card__head"><h2 class="card__title">Documentos enviados</h2></div>
              <div class="card__body" style="display:flex;flex-direction:column;gap:9px">
                ${fileRow({ name:'CV_Valentina_Rios_2026.pdf', meta:'PDF · 284 KB · enviado el 12 oct', done:true })}
                ${fileRow({ name:'Prueba_tecnica_valentina.zip', meta:'ZIP · 1,8 MB · enviado el 16 oct', done:true })}
              </div>
            </div>
          </div>

          <aside class="stack gap-4">
            <div class="card" data-gestalt="Región común">
              <div class="card__head"><h2 class="card__title">Persona de contacto</h2></div>
              <div class="card__body" style="display:flex;flex-direction:column;gap:12px">
                <div class="row gap-3">
                  ${avatar('CM', { size:'lg', tone:'violet' })}
                  <div><div class="small strong">Carolina Méndez</div><div class="tiny muted">Líder de talento</div><div class="tiny muted">Nova Systems</div></div>
                </div>
                <div class="stack gap-2">
                  ${btn('Enviar mensaje', { kind:'primary', block:true, size:'sm', icon:'message', go:'E02' })}
                  ${btn('Agendar entrevista', { kind:'secondary', block:true, size:'sm', icon:'calendar', go:'E01' })}
                </div>
                <div class="tiny muted row gap-2">${ic('clock')}Responde en ~4 horas</div>
              </div>
            </div>

            <div class="card">
              <div class="card__head"><h2 class="card__title">Resumen de la vacante</h2></div>
              <div class="card__body">
                <dl class="meta-list">
                  ${metaRow('target', 'Salario', '$8M – $11M COP')}
                  ${metaRow('briefcase', 'Contrato', 'Tiempo completo')}
                  ${metaRow('map-pin', 'Modalidad', 'Híbrido · Bogotá')}
                  ${metaRow('users', 'Postulantes', '87 personas')}
                  ${metaRow('calendar', 'Cierre', '21 oct 2026')}
                </dl>
              </div>
            </div>

            <div class="card">
              <div class="card__body" style="padding:16px">
                <div class="panel__title">Siguiente paso</div>
                <p class="tiny muted" style="line-height:1.55">Cuando la empresa proponga una fecha, recibirás una notificación y podrás confirmar o reprogramar.</p>
                <div class="progress-head mt-3"><span class="progress-head__label">Proceso completado</span><span class="progress-head__value">50%</span></div>
                ${progress({ value:50 })}
              </div>
            </div>

            <div class="card card--soft">
              <div class="card__body" style="padding:14px 16px">
                <div class="panel__title" style="color:var(--bad)">Zona sensible</div>
                <p class="tiny muted" style="line-height:1.5;margin-bottom:9px">Si retiras tu postulación, la empresa dejará de ver tu perfil en este proceso.</p>
                <button class="btn btn--danger btn--sm" data-demo="withdraw">${ic('x')}Retirar postulación</button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>`
});
