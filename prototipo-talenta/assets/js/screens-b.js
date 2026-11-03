/* =========================================================
   Pantallas B · Perfil del candidato
   ========================================================= */

defineScreen({
  id:'B01', title:'Completar perfil · datos', group:'B',
  purpose:'Primer bloque del perfil. Agrupa identificación, contacto y presentación; marca obligatorios y ofrece autocompletado de ciudad.',
  cta:'«Continuar» — pie de la tarjeta, a la derecha.',
  patterns:['Formulario','Validación','Autocompletado','Progreso','Feedback'],
  gestalt:['Proximidad','Región común','Continuidad','Similitud'],
  reqs:['RQ-01','RQ-02','RQ-03','RQ-05','RQ-06','RQ-07'],
  html: () => `
  <div class="app">
    ${onboardHeader({ saveText:'Borrador guardado hace un momento' })}
    <div class="onboard__progress">
      ${stepper(['Datos','Experiencia','Habilidades','Listo'], 1)}
    </div>
    <div class="onboard__body">
      <div class="onboard__grid">
        <div class="card">
          <div class="card__head">
            <div class="grow">
              <h2 class="h2">Datos personales</h2>
              <p class="tiny muted" style="margin-top:2px">Así te verán las empresas cuando te postules.</p>
            </div>
            ${badge('25% del perfil', 'neutral')}
          </div>
          <div class="card__body">
            <form class="form" data-validate data-success-go="B02" data-form-name="Datos personales" novalidate>
              ${formLegend()}

              <fieldset class="fieldset" data-gestalt="Proximidad">
                <legend class="fieldset__legend">1 · Identificación</legend>
                <div class="grid grid--2">
                  ${field({ id:'p-name', label:'Nombres', required:true, value:'Valentina', autocomplete:'given-name' })}
                  ${field({ id:'p-last', label:'Apellidos', required:true, value:'Ríos Marín', autocomplete:'family-name' })}
                  ${select({ id:'p-doctype', label:'Tipo de documento', optional:true,
                    options:['Cédula de ciudadanía','Cédula de extranjería','Pasaporte','Tarjeta de identidad'], value:'Cédula de ciudadanía' })}
                  ${field({ id:'p-doc', label:'Número de documento', optional:true, placeholder:'1.234.567.890', inputmode:'numeric',
                    hint:'Solo lo ven las empresas cuando avanzas a entrevista.' })}
                </div>
              </fieldset>

              <fieldset class="fieldset" data-gestalt="Región común">
                <legend class="fieldset__legend">2 · Contacto</legend>
                <div class="grid grid--2">
                  ${field({ id:'p-email', label:'Correo electrónico', type:'email', required:true, icon:'mail',
                    value:'valentina.rios@correo.com', readonly:true, valid:true,
                    hint:'Verificado. Para cambiarlo ve a Configuración › Cuenta.' })}
                  ${field({ id:'p-phone', label:'Teléfono de contacto', type:'tel', required:true, icon:'phone',
                    value:'+57 300 412 8890', autocomplete:'tel', inputmode:'tel', valid:true,
                    hint:'Formato: +57 300 000 0000. Lo usan solo para coordinar entrevistas.' })}
                  ${field({ id:'p-city', label:'Ciudad de residencia', required:true, icon:'map-pin',
                    value:'Armenia, Quindío', ac:'ciudades', acOpen:true,
                    hint:'Empieza a escribir para ver sugerencias.' })}
                  ${field({ id:'p-address', label:'Dirección', optional:true, icon:'home', placeholder:'Calle 12 # 4-56' })}
                </div>
              </fieldset>

              <fieldset class="fieldset">
                <legend class="fieldset__legend">3 · Perfil profesional</legend>
                ${field({ id:'p-headline', label:'Título profesional', required:true,
                  value:'Desarrolladora Full Stack · React & Node.js',
                  hint:'Una línea que resuma lo que haces. Ej.: «Analista de datos con 3 años en retail».' })}
                ${field({ id:'p-about', label:'Sobre mí', type:'textarea', optional:true, maxlength:400, tall:false,
                  value:'Desarrolladora con 4 años de experiencia construyendo aplicaciones web. Me enfoco en accesibilidad, rendimiento y trabajo en equipo.',
                  hint:'Cuéntale a la empresa cómo trabajas y qué te motiva. Evita datos sensibles.' })}
                <div class="grid grid--2">
                  ${field({ id:'p-linkedin', label:'Perfil de LinkedIn', optional:true, icon:'globe',
                    placeholder:'linkedin.com/in/tu-perfil', type:'url' })}
                  ${field({ id:'p-birth', label:'Fecha de nacimiento', optional:true, icon:'calendar',
                    placeholder:'DD/MM/AAAA', hint:'Nunca se muestra en tu perfil público.' })}
                </div>
              </fieldset>
            </form>
          </div>
          <div class="card__foot">
            ${btn('Guardar y salir', { kind:'ghost', demo:'toast-ok' })}
            <span class="tiny muted row gap-2" style="margin-left:4px">${ic('check')}Guardado automático</span>
            <div class="grow"></div>
            ${btn('Guardar borrador', { kind:'secondary', demo:'toast-ok' })}
            ${btn('Continuar', { kind:'primary', iconRight:'arrow-right', demo:'validate-go' })}
          </div>
        </div>

        <aside class="onboard__aside">
          <div class="card progress-card">
            ${ring(25, { size:58, label:'Completo' })}
            <div><div class="strong small">Tu perfil</div><div class="tiny muted">Paso 1 de 4 · Datos</div></div>
          </div>
          <div class="card">
            <div class="card__body" style="padding:16px">
              <div class="panel__title">Progreso del perfil</div>
              <div class="checklist">
                <div class="checklist__item is-current">${ic('clock')}<span>Datos personales</span></div>
                <div class="checklist__item">${ic('briefcase')}<span>Experiencia laboral</span></div>
                <div class="checklist__item">${ic('sparkle')}<span>Habilidades e idiomas</span></div>
                <div class="checklist__item">${ic('check-circle')}<span>Revisión final</span></div>
              </div>
            </div>
          </div>
          <div class="panel panel--blue">
            <div class="row gap-2" style="margin-bottom:5px">${ic('sparkle')}<span class="h4">Perfiles completos</span></div>
            <p class="tiny muted" style="line-height:1.55">Los perfiles con foto, experiencia y habilidades reciben hasta <b class="strong">3 veces más</b> contactos de empresas.</p>
          </div>
        </aside>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'B02', title:'Completar perfil · experiencia', group:'B',
  purpose:'Captura de experiencia con bloques repetibles. Cada bloque tiene su propio encabezado, acciones y validación independiente.',
  cta:'«Continuar» — pie de la tarjeta; «Agregar otra experiencia» como acción secundaria.',
  patterns:['Formulario','Validación','Progreso','Autocompletado','Feedback'],
  gestalt:['Región común','Proximidad','Continuidad','Similitud'],
  reqs:['RQ-01','RQ-02','RQ-06','RQ-08','RQ-14'],
  html: () => `
  <div class="app">
    ${onboardHeader({ saveText:'Borrador guardado hace 2 minutos' })}
    <div class="onboard__progress">
      ${stepper(['Datos','Experiencia','Habilidades','Listo'], 2)}
    </div>
    <div class="onboard__body">
      <div class="onboard__grid">
        <div class="card">
          <div class="card__head">
            <div class="grow">
              <h2 class="h2">Experiencia laboral</h2>
              <p class="tiny muted" style="margin-top:2px">Agrega tus últimos cargos. Empieza por el más reciente.</p>
            </div>
            ${badge('50% del perfil', 'neutral')}
          </div>
          <div class="card__body">
            <form class="form" data-validate data-success-go="B03" data-form-name="Experiencia" novalidate>
              ${formLegend('Los campos con * son obligatorios. Puedes guardar el borrador y continuar después.')}

              <div class="card card--soft" data-gestalt="Región común" style="box-shadow:none">
                <div class="card__head" style="padding:12px 16px;background:#fff;border-radius:12px 12px 0 0">
                  <span class="badge badge--outline">Experiencia 1</span>
                  <span class="tiny muted">Más reciente</span>
                  <div class="grow"></div>
                  <button class="iconbtn" style="width:30px;height:30px" data-demo="confirm-remove" aria-label="Eliminar experiencia">${ic('trash')}</button>
                </div>
                <div class="card__body" style="padding:16px;display:flex;flex-direction:column;gap:14px">
                  <div class="grid grid--2">
                    ${field({ id:'exp-role', label:'Cargo', required:true, value:'Desarrolladora Full Stack' })}
                    ${field({ id:'exp-company', label:'Empresa', required:true, value:'Nova Systems', autocomplete:'organization' })}
                    ${select({ id:'exp-sector', label:'Sector', optional:true,
                      options:['Tecnología','Servicios financieros','Educación','Salud','Retail','Sector público'], value:'Tecnología' })}
                    ${field({ id:'exp-city', label:'Ciudad', required:true, icon:'map-pin', value:'Bogotá D.C.', ac:'ciudades' })}
                    ${field({ id:'exp-start', label:'Fecha de inicio', required:true, icon:'calendar', value:'03/2022', placeholder:'MM/AAAA' })}
                    ${field({ id:'exp-end', label:'Fecha de fin', optional:true, icon:'calendar', value:'', placeholder:'MM/AAAA', disabled:true,
                      hint:'Deshabilitado porque marcaste «Actualmente trabajo aquí».' })}
                  </div>
                  <div class="field" data-field>
                    <div class="stack" style="gap:7px">
                      ${check({ id:'exp-current', label:'Actualmente trabajo aquí', checked:true })}
                    </div>
                  </div>
                  ${field({ id:'exp-achievements', label:'Logros y responsabilidades', type:'textarea', required:true, maxlength:600,
                    value:'• Lideré la migración de 3 servicios a React y reduje el tiempo de carga en 42%.\n• Acompañé a 4 desarrolladores junior en su plan de crecimiento.',
                    hint:'Usa viñetas y resultados medibles. Mínimo 40 caracteres.' })}
                  <div class="field">
                    <span class="field__label">Habilidades usadas <span class="opt">(opcional)</span></span>
                    <div class="chips">
                      ${chip('React', { removable:true })}
                      ${chip('Node.js', { removable:true })}
                      ${chip('PostgreSQL', { removable:true })}
                      <button type="button" class="chip chip--add" data-demo="add-chip">${ic('plus')}Añadir habilidad</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card" data-gestalt="Similitud">
                <div class="card__body" style="padding:12px 16px;display:flex;align-items:center;gap:12px">
                  <span class="avatar avatar--square avatar--company" style="width:34px;height:34px;flex-basis:34px">DA</span>
                  <div class="grow">
                    <div class="small strong">Analista de datos junior · DataAndina</div>
                    <div class="tiny muted">01/2021 – 02/2022 · Bogotá D.C.</div>
                  </div>
                  <button class="btn btn--ghost btn--sm" data-demo="toast-info">${ic('edit')}Editar</button>
                  <button class="iconbtn" style="width:30px;height:30px" data-demo="confirm-remove" aria-label="Eliminar experiencia">${ic('trash')}</button>
                </div>
              </div>

              <button type="button" class="btn btn--secondary btn--block" style="border-style:dashed;height:44px" data-demo="add-experience">
                ${ic('plus')}Agregar otra experiencia
              </button>
            </form>
          </div>
          <div class="card__foot">
            ${btn('Atrás', { kind:'ghost', icon:'arrow-left', go:'B01' })}
            <span class="tiny muted row gap-2" style="margin-left:4px">${ic('check')}Borrador guardado hace 2 min</span>
            <div class="grow"></div>
            ${btn('Guardar borrador', { kind:'secondary', demo:'toast-ok' })}
            ${btn('Continuar', { kind:'primary', iconRight:'arrow-right', demo:'validate-go' })}
          </div>
        </div>

        <aside class="onboard__aside">
          <div class="card progress-card">
            ${ring(50, { size:58, label:'Completo' })}
            <div><div class="strong small">Tu perfil</div><div class="tiny muted">Paso 2 de 4 · Experiencia</div></div>
          </div>
          <div class="card">
            <div class="card__body" style="padding:16px">
              <div class="panel__title">Progreso del perfil</div>
              <div class="checklist">
                <div class="checklist__item is-done">${ic('check-circle')}<span>Datos personales</span></div>
                <div class="checklist__item is-current">${ic('clock')}<span>Experiencia laboral</span></div>
                <div class="checklist__item">${ic('sparkle')}<span>Habilidades e idiomas</span></div>
                <div class="checklist__item">${ic('check-circle')}<span>Revisión final</span></div>
              </div>
            </div>
          </div>
          <div class="panel">
            <div class="row gap-2" style="margin-bottom:5px">${ic('info')}<span class="h4">Sobre la redacción</span></div>
            <p class="tiny muted" style="line-height:1.55">Escribe logros, no tareas: <b class="strong">«reduje el tiempo de carga en 42%»</b> comunica más que «encargado del frontend».</p>
          </div>
        </aside>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'B03', title:'Completar perfil · habilidades', group:'B',
  purpose:'Cierre del perfil con habilidades en formato chip, idiomas, certificaciones y preferencias laborales. Muestra sugerencias para reducir el esfuerzo de escritura.',
  cta:'«Finalizar perfil» — pie de la tarjeta, a la derecha.',
  patterns:['Formulario','Autocompletado','Progreso','Validación','Feedback'],
  gestalt:['Proximidad','Similitud','Región común','Ley de Prägnanz'],
  reqs:['RQ-06','RQ-07','RQ-08','RQ-12','RQ-14'],
  html: () => `
  <div class="app">
    ${onboardHeader({ saveText:'Borrador guardado hace un momento' })}
    <div class="onboard__progress">
      ${stepper(['Datos','Experiencia','Habilidades','Listo'], 3)}
    </div>
    <div class="onboard__body">
      <div class="onboard__grid">
        <div class="card">
          <div class="card__head">
            <div class="grow">
              <h2 class="h2">Habilidades y preferencias</h2>
              <p class="tiny muted" style="margin-top:2px">Lo último para que las empresas te encuentren.</p>
            </div>
            ${badge('75% del perfil', 'neutral')}
          </div>
          <div class="card__body">
            <form class="form" data-validate data-success-go="B04" data-form-name="Habilidades" novalidate>
              ${formLegend()}

              <fieldset class="fieldset" data-gestalt="Proximidad">
                <legend class="fieldset__legend">Habilidades técnicas</legend>
                ${field({ id:'sk-input', label:'Añade tus habilidades', required:true, icon:'search', ac:'habilidades',
                  placeholder:'Ej.: React, SQL, gestión de proyectos…',
                  hint:'Escribe y elige una sugerencia. Puedes añadir hasta 20.' })}
                <div class="chips">
                  ${chip('React', { removable:true })}
                  ${chip('Node.js', { removable:true })}
                  ${chip('PostgreSQL', { removable:true })}
                  ${chip('Docker', { removable:true })}
                  ${chip('Git', { removable:true })}
                  ${chip('Scrum', { removable:true })}
                </div>
                <div class="panel" style="padding:12px">
                  <div class="tiny muted" style="margin-bottom:7px"><b class="strong">Sugerencias según tu experiencia</b> · toca para añadir</div>
                  <div class="chips">
                    <button type="button" class="chip chip--add chip--sm" data-demo="add-chip">${ic('plus')}TypeScript</button>
                    <button type="button" class="chip chip--add chip--sm" data-demo="add-chip">${ic('plus')}AWS</button>
                    <button type="button" class="chip chip--add chip--sm" data-demo="add-chip">${ic('plus')}Testing</button>
                    <button type="button" class="chip chip--add chip--sm" data-demo="add-chip">${ic('plus')}GraphQL</button>
                    <button type="button" class="chip chip--add chip--sm" data-demo="add-chip">${ic('plus')}CI/CD</button>
                  </div>
                </div>
              </fieldset>

              <fieldset class="fieldset" data-gestalt="Región común">
                <legend class="fieldset__legend">Idiomas</legend>
                <div class="stack" style="gap:9px">
                  <div class="grid" style="grid-template-columns:1fr 180px 34px;gap:9px;align-items:center">
                    ${select({ id:'lang-1', label:'Idioma', options:['Español','Inglés','Portugués','Francés'], value:'Español' })}
                    ${select({ id:'lang-1-level', label:'Nivel', options:['A1','A2','B1','B2','C1','C2','Nativo'], value:'Nativo' })}
                    <button class="iconbtn" style="align-self:end;margin-bottom:4px" data-demo="confirm-remove" aria-label="Eliminar idioma">${ic('trash')}</button>
                  </div>
                  <div class="grid" style="grid-template-columns:1fr 180px 34px;gap:9px;align-items:center">
                    ${select({ id:'lang-2', label:'Idioma', options:['Español','Inglés','Portugués','Francés'], value:'Inglés' })}
                    ${select({ id:'lang-2-level', label:'Nivel', options:['A1','A2','B1','B2','C1','C2','Nativo'], value:'B2' })}
                    <button class="iconbtn" style="align-self:end;margin-bottom:4px" data-demo="confirm-remove" aria-label="Eliminar idioma">${ic('trash')}</button>
                  </div>
                </div>
                <button type="button" class="btn btn--ghost btn--sm" style="align-self:flex-start" data-demo="add-language">${ic('plus')}Agregar idioma</button>
              </fieldset>

              <fieldset class="fieldset">
                <legend class="fieldset__legend">Certificaciones</legend>
                ${fileRow({ name:'Certificado_React_Avanzado.pdf', meta:'PDF · 1,2 MB · cargado el 12/10/2026', progress:100, done:true,
                  action:'<button class="iconbtn" style="width:30px;height:30px" data-demo="confirm-remove" aria-label="Eliminar archivo">' + ic('trash') + '</button>' })}
                ${dropzone({ title:'Arrastra una certificación o elige un archivo', text:'PDF · máximo 5 MB · opcional', btn:'<button class="btn btn--secondary btn--sm mt-2" data-demo="upload">Elegir archivo</button>' })}
              </fieldset>

              <fieldset class="fieldset" data-gestalt="Similitud">
                <legend class="fieldset__legend">Preferencias laborales</legend>
                <div class="stack" style="gap:7px">
                  <span class="field__label">Disponibilidad <span class="req">*</span></span>
                  <div class="grid grid--3">
                    ${choice({ name:'availability', value:'full', title:'Tiempo completo', desc:'40 h semanales', checked:true, required:true })}
                    ${choice({ name:'availability', value:'part', title:'Medio tiempo', desc:'20 h semanales' })}
                    ${choice({ name:'availability', value:'project', title:'Por proyecto', desc:'Freelance' })}
                  </div>
                </div>
                <div class="grid grid--2">
                  ${field({ id:'sk-salary', label:'Expectativa salarial', optional:true, placeholder:'6.500.000', inputmode:'numeric',
                    hint:'Ayuda a filtrar vacantes acordes a tu expectativa.' })}
                  ${select({ id:'sk-currency', label:'Moneda', optional:true, options:['COP · Peso colombiano','USD · Dólar'], value:'COP · Peso colombiano' })}
                </div>
                <div class="stack" style="gap:7px">
                  <span class="field__label">Modalidad preferida <span class="opt">(opcional)</span></span>
                  <div class="grid grid--3">
                    ${choice({ type:'checkbox', name:'mode', value:'remote', title:'Remoto', desc:'Desde cualquier ciudad', checked:true })}
                    ${choice({ type:'checkbox', name:'mode', value:'hybrid', title:'Híbrido', desc:'2–3 días presenciales', checked:true })}
                    ${choice({ type:'checkbox', name:'mode', value:'onsite', title:'Presencial', desc:'En la ciudad de la empresa' })}
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="card__foot">
            ${btn('Atrás', { kind:'ghost', icon:'arrow-left', go:'B02' })}
            <div class="grow"></div>
            ${btn('Guardar borrador', { kind:'secondary', demo:'toast-ok' })}
            ${btn('Finalizar perfil', { kind:'primary', iconRight:'arrow-right', demo:'validate-go' })}
          </div>
        </div>

        <aside class="onboard__aside">
          <div class="card progress-card">
            ${ring(75, { size:58, label:'Completo' })}
            <div><div class="strong small">Tu perfil</div><div class="tiny muted">Paso 3 de 4 · Habilidades</div></div>
          </div>
          <div class="card">
            <div class="card__body" style="padding:16px">
              <div class="panel__title">Progreso del perfil</div>
              <div class="checklist">
                <div class="checklist__item is-done">${ic('check-circle')}<span>Datos personales</span></div>
                <div class="checklist__item is-done">${ic('check-circle')}<span>Experiencia laboral</span></div>
                <div class="checklist__item is-current">${ic('clock')}<span>Habilidades e idiomas</span></div>
                <div class="checklist__item">${ic('check-circle')}<span>Revisión final</span></div>
              </div>
            </div>
          </div>
          <div class="card card--soft">
            <div class="card__body" style="padding:14px 16px">
              <div class="panel__title">Impacto de tus habilidades</div>
              <div class="bars" style="margin-bottom:6px">
                <span style="height:30%"></span><span style="height:45%"></span><span style="height:38%"></span>
                <span style="height:62%"></span><span class="is-on" style="height:88%"></span><span class="is-on" style="height:100%"></span>
              </div>
              <p class="tiny muted" style="line-height:1.5">Con 5 o más habilidades tu perfil aparece en <b class="strong">3× más</b> búsquedas de empresas.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'B04', title:'Perfil listo', group:'B',
  purpose:'Cierre del onboarding con confirmación explícita, resumen de lo logrado y dos caminos: buscar empleo o revisar el perfil.',
  cta:'«Ver empleos recomendados» — bajo el resumen, ancho completo.',
  patterns:['Progreso','Feedback','Loader'],
  gestalt:['Cierre','Punto focal','Similitud','Figura-fondo'],
  reqs:['RQ-09','RQ-13','RQ-15'],
  html: () => `
  <div class="app">
    ${onboardHeader({ saveText:'Perfil guardado' })}
    <div class="onboard__progress">
      ${stepper(['Datos','Experiencia','Habilidades','Listo'], 4)}
    </div>
    <div class="onboard__body">
      <div style="max-width:780px;margin:0 auto;display:flex;flex-direction:column;gap:18px">
        <div class="card" style="overflow:hidden">
          <div style="background:var(--blue-50);border-bottom:1px solid var(--blue-100);padding:26px 28px;display:flex;align-items:center;gap:20px" data-gestalt="Punto focal">
            ${ring(100, { size:78, label:'Completo', tone:'ok' })}
            <div class="stack" style="gap:4px">
              <span class="eyebrow" style="color:var(--ok)">Perfil completado</span>
              <h1 class="h1" style="font-size:25px">¡Listo, Valentina! Tu perfil está completo.</h1>
              <p class="small muted">Las empresas ya pueden encontrarte y postularte toma menos de 2 minutos.</p>
            </div>
          </div>
          <div class="card__body" style="padding:22px 28px;display:flex;flex-direction:column;gap:16px">
            <div class="grid grid--2" style="gap:10px">
              <div class="checklist__item is-done">${ic('check-circle')}<span>Datos personales verificados</span></div>
              <div class="checklist__item is-done">${ic('check-circle')}<span>2 experiencias registradas</span></div>
              <div class="checklist__item is-done">${ic('check-circle')}<span>6 habilidades y 2 idiomas</span></div>
              <div class="checklist__item is-done">${ic('check-circle')}<span>Certificación adjunta</span></div>
            </div>

            <div class="divider" style="margin:2px 0"></div>

            <div class="split" style="align-items:flex-start">
              <div class="stack" style="gap:8px">
                <span class="h3">Tu perfil en números</span>
                ${statStrip([
                  { value:'94%', label:'Coincidencia media' },
                  { value:'6', label:'Habilidades' },
                  { value:'2', label:'Idiomas' },
                  { value:'100%', label:'Completado' }
                ])}
              </div>
              ${badge('Visible para empresas', 'ok', true)}
            </div>

            <div class="alert alert--ok">
              ${ic('sparkle')}<div class="alert__body"><b>Tenemos 12 vacantes que coinciden contigo.</b> Empieza por las que mejor se ajustan a tu perfil.</div>
            </div>

            <div class="stack" style="gap:9px">
              ${btn('Ver empleos recomendados', { kind:'primary', block:true, iconRight:'arrow-right', go:'C01' })}
              <div class="grid grid--2" style="gap:9px">
                ${btn('Revisar mi perfil', { kind:'secondary', block:true, icon:'eye', go:'B05' })}
                ${btn('Descargar perfil en PDF', { kind:'secondary', block:true, icon:'download', demo:'toast-info' })}
              </div>
            </div>
          </div>
        </div>
        <p class="center tiny dim">Puedes editar tu perfil cuando quieras desde <a class="link" data-go="B05">Mi perfil</a>.</p>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'B05', title:'Mi perfil', group:'B',
  purpose:'Vista consolidada del perfil con estado de visibilidad, secciones escaneables y acciones de edición siempre accesibles.',
  cta:'«Editar perfil» — cabecera del perfil, junto a «Vista previa».',
  patterns:['Progreso','Feedback','Catálogo'],
  gestalt:['Proximidad','Región común','Figura-fondo','Continuidad'],
  reqs:['RQ-06','RQ-13','RQ-15','RQ-18'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'', search:false })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:16px">
        <div class="card" style="padding:22px 24px" data-gestalt="Figura-fondo">
          <div class="row gap-5" style="align-items:flex-start">
            <div style="position:relative">
              ${avatar('VR', { size:'xl' })}
              <span style="position:absolute;right:-2px;bottom:-2px;width:22px;height:22px;border-radius:50%;background:var(--ok);color:#fff;display:grid;place-items:center;border:3px solid #fff">${ic('check')}</span>
            </div>
            <div class="grow stack" style="gap:6px">
              <div class="row gap-2 wrap">
                <h1 class="h1" style="font-size:24px">Valentina Ríos Marín</h1>
                ${badge('Perfil verificado', 'ok', true)}
                ${badge('Disponibilidad inmediata', 'neutral')}
              </div>
              <p class="small muted">Desarrolladora Full Stack · React &amp; Node.js</p>
              <div class="row gap-4 wrap tiny muted">
                <span class="row gap-2">${ic('map-pin')}Armenia, Quindío</span>
                <span class="row gap-2">${ic('briefcase')}4 años de experiencia</span>
                <span class="row gap-2">${ic('clock')}Responde en ~2 h</span>
              </div>
            </div>
            <div class="btn-row" style="flex:0 0 auto">
              ${btn('Vista previa', { kind:'secondary', icon:'eye', demo:'toast-info' })}
              ${btn('Editar perfil', { kind:'primary', icon:'edit', demo:'toast-info' })}
              <button class="iconbtn" style="border:1px solid var(--line-strong)" aria-label="Más opciones">${ic('more')}</button>
            </div>
          </div>

          <div class="panel panel--blue mt-4" style="display:flex;align-items:center;gap:14px;padding:12px 14px">
            ${ring(100, { size:42, label:'', tone:'ok' })}
            <div class="grow">
              <div class="small strong">Tu perfil está al 100%</div>
              <div class="tiny muted">Las empresas pueden ver tu perfil completo y contactarte.</div>
            </div>
            <div class="row gap-2">
              <span class="tiny muted">Visible para empresas</span>
              <button type="button" class="toggle is-on" role="switch" aria-checked="true" aria-label="Visible para empresas" data-demo="toggle"></button>
            </div>
          </div>
        </div>

        <div class="grid" style="grid-template-columns:minmax(0,1fr) 330px;align-items:start">
          <div class="stack gap-4">
            <div class="card">
              <div class="card__head"><h2 class="card__title">Sobre mí</h2><div class="grow"></div>
                <button class="btn btn--ghost btn--sm" data-demo="toast-info">${ic('edit')}Editar</button></div>
              <div class="card__body">
                <p class="small" style="line-height:1.65;color:var(--ink-600)">Desarrolladora con 4 años de experiencia construyendo aplicaciones web. Me enfoco en accesibilidad, rendimiento y trabajo en equipo. Disfruto traducir necesidades de negocio en interfaces simples y medibles.</p>
                <div class="chips mt-3">
                  ${chip('Trabajo en equipo')}${chip('Comunicación asertiva')}${chip('Pensamiento analítico')}${chip('Mentoría')}
                </div>
              </div>
            </div>

            <div class="card" data-gestalt="Proximidad">
              <div class="card__head"><h2 class="card__title">Experiencia</h2><div class="grow"></div>
                <button class="btn btn--ghost btn--sm" data-demo="toast-info">${ic('edit')}Editar</button></div>
              <div class="card__body">
                <div class="tl">
                  <div class="tl__item is-done">
                    <span class="tl__dot">${ic('briefcase')}</span>
                    <div class="tl__head"><span class="tl__title">Desarrolladora Full Stack</span><span class="tl__time">03/2022 – actualidad</span></div>
                    <div class="tl__desc">Nova Systems · Bogotá D.C. (Híbrido)</div>
                    <ul class="bullets mt-2">
                      <li>${ic('check')}Migré 3 servicios a React y reduje el tiempo de carga en 42%.</li>
                      <li>${ic('check')}Acompañé a 4 desarrolladores junior en su plan de crecimiento.</li>
                    </ul>
                  </div>
                  <div class="tl__item is-done">
                    <span class="tl__dot">${ic('briefcase')}</span>
                    <div class="tl__head"><span class="tl__title">Analista de datos junior</span><span class="tl__time">01/2021 – 02/2022</span></div>
                    <div class="tl__desc">DataAndina · Bogotá D.C.</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card__head"><h2 class="card__title">Educación</h2><div class="grow"></div>
                <button class="btn btn--ghost btn--sm" data-demo="toast-info">${ic('plus')}Añadir</button></div>
              <div class="card__body" style="display:flex;gap:12px;align-items:flex-start">
                <span class="kpi__icon" style="width:38px;height:38px;flex-basis:38px">${ic('award')}</span>
                <div>
                  <div class="small strong">Ingeniería de Sistemas</div>
                  <div class="tiny muted">Universidad del Quindío · 2016 – 2021</div>
                </div>
                ${badge('Verificado', 'ok')}
              </div>
            </div>

            <div class="card">
              <div class="card__head"><h2 class="card__title">Habilidades</h2><div class="grow"></div>
                <button class="btn btn--ghost btn--sm" data-demo="toast-info">${ic('edit')}Editar</button></div>
              <div class="card__body">
                <div class="panel__title">Técnicas</div>
                <div class="chips">${chip('React')}${chip('Node.js')}${chip('PostgreSQL')}${chip('Docker')}${chip('Git')}${chip('Scrum')}</div>
                <div class="panel__title mt-4">Blandas</div>
                <div class="chips">${chip('Comunicación asertiva', { kind:'outline' })}${chip('Mentoría', { kind:'outline' })}${chip('Pensamiento analítico', { kind:'outline' })}</div>
              </div>
            </div>
          </div>

          <aside class="stack gap-4">
            <div class="card" data-gestalt="Región común">
              <div class="card__head"><h2 class="card__title">Datos de contacto</h2></div>
              <div class="card__body" style="display:flex;flex-direction:column;gap:10px">
                <div class="row gap-3"><span class="kpi__icon">${ic('mail')}</span><div class="grow"><div class="tiny dim">Correo</div><div class="small strong">valentina.rios@correo.com</div></div>${badge('Verificado', 'ok')}</div>
                <div class="row gap-3"><span class="kpi__icon">${ic('phone')}</span><div class="grow"><div class="tiny dim">Teléfono</div><div class="small strong">+57 300 412 8890</div></div></div>
                <div class="row gap-3"><span class="kpi__icon">${ic('globe')}</span><div class="grow"><div class="tiny dim">LinkedIn</div><div class="small strong">linkedin.com/in/valentinarios</div></div>${ic('external')}</div>
              </div>
            </div>

            <div class="card">
              <div class="card__head"><h2 class="card__title">Idiomas</h2></div>
              <div class="card__body" style="display:flex;flex-direction:column;gap:9px">
                <div class="split"><span class="small strong">Español</span>${badge('Nativo', 'neutral')}</div>
                <div class="split"><span class="small strong">Inglés</span>${badge('B2 · Intermedio alto', 'neutral')}</div>
              </div>
            </div>

            <div class="card">
              <div class="card__head"><h2 class="card__title">Preferencias</h2></div>
              <div class="card__body">
                <dl class="meta-list">
                  ${metaRow('briefcase', 'Modalidad', 'Remoto · Híbrido')}
                  ${metaRow('clock', 'Disponibilidad', 'Tiempo completo')}
                  ${metaRow('target', 'Expectativa', '$6.500.000 COP')}
                  ${metaRow('shield', 'Visibilidad', 'Empresas verificadas')}
                </dl>
                <a class="link small" data-go="E04" style="display:inline-block;margin-top:12px">Cambiar preferencias</a>
              </div>
            </div>

            <div class="panel panel--blue">
              <div class="row gap-2" style="margin-bottom:5px">${ic('eye')}<span class="h4">Así te ven las empresas</span></div>
              <p class="tiny muted" style="line-height:1.55">Tu teléfono y documento solo se revelan cuando avanzas a entrevista.</p>
              <button class="btn btn--secondary btn--sm mt-2" data-demo="toast-info">${ic('external')}Abrir vista previa</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>`
});
