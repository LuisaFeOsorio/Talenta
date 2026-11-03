/* =========================================================
   Pantallas C · Descubrimiento de empleos
   ========================================================= */

defineScreen({
  id:'C01', title:'Inicio del candidato', group:'C',
  purpose:'Panel de resumen: estado del perfil, postulaciones activas y recomendaciones. Prioriza la siguiente acción del usuario.',
  cta:'«Buscar empleo» — esquina superior derecha; «Ver todas» en recomendados.',
  patterns:['Progreso','Catálogo','Feedback'],
  gestalt:['Proximidad','Similitud','Región común','Figura-fondo'],
  reqs:['RQ-12','RQ-13','RQ-17','RQ-18','RQ-20'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'inicio' })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:18px">

        <div class="split">
          <div class="stack" style="gap:4px">
            <span class="eyebrow">Domingo, 1 de noviembre</span>
            <h1 class="h1">Hola, Valentina</h1>
            <p class="small muted">Tienes <b class="strong">1 entrevista</b> esta semana y <b class="strong">3 postulaciones</b> en revisión.</p>
          </div>
          <div class="btn-row">
            ${btn('Mis postulaciones', { kind:'secondary', icon:'briefcase', go:'D05' })}
            ${btn('Buscar empleo', { kind:'primary', icon:'search', go:'C02' })}
          </div>
        </div>

        <div class="grid grid--4" data-gestalt="Similitud">
          ${kpi({ label:'Postulaciones activas', value:'4', icon:'briefcase',
            foot:'<span class="up">' + ic('arrow-up') + '2 esta semana</span>' })}
          ${kpi({ label:'Entrevistas', value:'1', icon:'calendar',
            foot:'<span class="up">' + ic('clock') + 'Mié 4 nov · 10:00</span>' })}
          ${kpi({ label:'Vacantes guardadas', value:'7', icon:'bookmark',
            foot:'<span class="muted">3 nuevas coincidencias</span>' })}
          <div class="card kpi">
            <div class="kpi__top"><span class="kpi__label">Perfil completado</span><span class="badge badge--ok">${ic('check')}100%</span></div>
            <div class="row gap-3" style="align-items:center">
              ${ring(100, { size:44, label:'', tone:'ok' })}
              <div class="tiny muted" style="line-height:1.45">Visible para<br><b class="strong">42 empresas</b></div>
            </div>
            <div class="kpi__foot"><a class="link" data-go="B05">Revisar mi perfil</a></div>
          </div>
        </div>

        <div class="split" style="margin-top:2px">
          <div class="stack" style="gap:2px">
            <h2 class="h2">Recomendados para ti</h2>
            <span class="tiny muted">Basado en tus habilidades, ubicación y búsquedas recientes.</span>
          </div>
          <a class="small link" data-go="C02">Ver todas las vacantes ${ic('arrow-right')}</a>
        </div>

        <div class="grid grid--3">
          ${jobCard(JOBS[0])}
          ${jobCard(JOBS[2])}
          ${jobCard(JOBS[1])}
        </div>

        <div class="grid" style="grid-template-columns:minmax(0,1fr) 340px;align-items:start;margin-top:2px">
          <div class="card">
            <div class="card__head">
              <h2 class="card__title">Tus postulaciones recientes</h2>
              <div class="grow"></div>
              <a class="small link" data-go="D05">Ver todas</a>
            </div>
            <div>
              <div class="srow">
                <span class="jobcard__logo" style="width:36px;height:36px;flex-basis:36px;font-size:10px">NS</span>
                <div class="srow__main">
                  <div class="srow__title">Desarrollador Full Stack ${badge('En revisión', 'warn')}</div>
                  <div class="srow__sub">Nova Systems · Postulaste el 12 oct</div>
                  <div class="mt-2" style="max-width:320px">${track(['Enviada','Revisión','Entrevista','Decisión'], 2, { labels:false })}</div>
                </div>
                <div class="srow__aside">
                  <span class="tiny dim">Actualizado hace 2 h</span>
                  ${btn('Ver', { kind:'secondary', size:'sm', go:'D06' })}
                </div>
              </div>
              <div class="srow">
                <span class="jobcard__logo" style="width:36px;height:36px;flex-basis:36px;font-size:10px">CQ</span>
                <div class="srow__main">
                  <div class="srow__title">Ingeniero DevOps ${badge('Enviada', 'neutral')}</div>
                  <div class="srow__sub">CloudQuindío · Postulaste el 14 oct</div>
                  <div class="mt-2" style="max-width:320px">${track(['Enviada','Revisión','Entrevista','Decisión'], 1, { labels:false })}</div>
                </div>
                <div class="srow__aside"><span class="tiny dim">Hace 3 días</span>${btn('Ver', { kind:'secondary', size:'sm', go:'D06' })}</div>
              </div>
              <div class="srow">
                <span class="jobcard__logo" style="width:36px;height:36px;flex-basis:36px;font-size:10px">DA</span>
                <div class="srow__main">
                  <div class="srow__title">Analista de Datos ${badge('Entrevista', 'ok')}</div>
                  <div class="srow__sub">DataAndina · Entrevista el 4 nov, 10:00</div>
                  <div class="mt-2" style="max-width:320px">${track(['Enviada','Revisión','Entrevista','Decisión'], 3, { labels:false })}</div>
                </div>
                <div class="srow__aside">${btn('Agenda', { kind:'primary', size:'sm', go:'E01' })}</div>
              </div>
            </div>
          </div>

          <div class="stack gap-4">
            <div class="card card--accent" data-gestalt="Región común">
              <div class="card__body" style="padding:16px">
                <div class="row gap-2" style="margin-bottom:7px">${ic('bell')}<span class="h4">Alerta de empleo activa</span></div>
                <p class="tiny muted" style="line-height:1.5">«Desarrollador Full Stack · Remoto»</p>
                <div class="chips mt-2">${chip('Diaria', { size:'sm' })}${chip('Correo', { size:'sm', kind:'outline' })}</div>
                <div class="split mt-3">
                  <span class="tiny muted">4 coincidencias hoy</span>
                  <a class="tiny link" data-go="E03">Gestionar</a>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card__head"><h2 class="card__title">Actividad</h2><div class="grow"></div><span class="tiny dim">Últimos 7 días</span></div>
              <div class="card__body" style="padding:14px 16px">
                <div class="tl">
                  <div class="tl__item is-current">
                    <span class="tl__dot">${ic('calendar')}</span>
                    <div class="tl__head"><span class="tl__title">Entrevista confirmada</span><span class="tl__time">Hoy</span></div>
                    <div class="tl__desc">DataAndina · 4 nov, 10:00 a. m.</div>
                  </div>
                  <div class="tl__item is-done">
                    <span class="tl__dot">${ic('check')}</span>
                    <div class="tl__head"><span class="tl__title">Perfil visto por 6 empresas</span><span class="tl__time">Ayer</span></div>
                  </div>
                  <div class="tl__item is-done">
                    <span class="tl__dot">${ic('check')}</span>
                    <div class="tl__head"><span class="tl__title">Postulación enviada</span><span class="tl__time">12 oct</span></div>
                    <div class="tl__desc">Nova Systems · Desarrollador Full Stack</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'C02', title:'Buscar empleo · catálogo', group:'C',
  purpose:'Catálogo con filtros persistentes a la izquierda, resultados en tarjetas homogéneas y orden explícito. Los filtros activos se muestran como chips removibles.',
  cta:'«Aplicar filtros» — dentro del panel de filtros; «Postularme» en el detalle.',
  patterns:['Catálogo','Formulario','Autocompletado','Feedback'],
  gestalt:['Similitud','Proximidad','Región común','Continuidad'],
  reqs:['RQ-17','RQ-18','RQ-19','RQ-20','RQ-21'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'buscar', search:true })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:16px">
        ${pageHead({ eyebrow:'248 vacantes activas', title:'Empleos en Colombia',
          sub:'Filtra por ciudad, modalidad y salario. Los resultados se actualizan sin salir de la página.',
          actions: btn('Alertas de empleo', { kind:'secondary', icon:'bell', go:'E03' }) })}

        <div class="grid" style="grid-template-columns:268px minmax(0,1fr);align-items:start;gap:18px">
          <aside class="card filters" data-gestalt="Región común">
            <div class="card__head" style="padding:14px 16px">
              <span class="h4 row gap-2">${ic('sliders')}Filtros</span>
              <div class="grow"></div>
              <button class="tiny link" data-demo="clear-filters">Limpiar</button>
            </div>
            <div class="card__body" style="padding:14px 16px">
              ${field({ id:'f-keyword', label:'Palabra clave', placeholder:'Cargo, empresa o skill', icon:'search', value:'' })}
              ${field({ id:'f-city', label:'Ubicación', icon:'map-pin', value:'Bogotá D.C.', ac:'ciudades' })}

              <div class="filter-block mt-4">
                <span class="filter-block__title">Categoría</span>
                <label class="filter-opt"><input type="checkbox" checked><span>Tecnología</span><span class="count">86</span></label>
                <label class="filter-opt"><input type="checkbox"><span>Diseño</span><span class="count">31</span></label>
                <label class="filter-opt"><input type="checkbox"><span>Marketing</span><span class="count">44</span></label>
                <label class="filter-opt"><input type="checkbox"><span>Administración</span><span class="count">52</span></label>
                <label class="filter-opt"><input type="checkbox"><span>Producto</span><span class="count">18</span></label>
              </div>

              <div class="filter-block">
                <span class="filter-block__title">Modalidad</span>
                <label class="filter-opt"><input type="radio" name="f-mode"><span>Cualquiera</span></label>
                <label class="filter-opt"><input type="radio" name="f-mode" checked><span>Remoto</span><span class="count">92</span></label>
                <label class="filter-opt"><input type="radio" name="f-mode"><span>Híbrido</span><span class="count">74</span></label>
                <label class="filter-opt"><input type="radio" name="f-mode"><span>Presencial</span><span class="count">82</span></label>
              </div>

              <div class="filter-block">
                <span class="filter-block__title">Nivel de experiencia</span>
                <label class="filter-opt"><input type="checkbox"><span>Junior</span></label>
                <label class="filter-opt"><input type="checkbox" checked><span>Mid</span></label>
                <label class="filter-opt"><input type="checkbox" checked><span>Senior</span></label>
              </div>

              <div class="filter-block">
                <span class="filter-block__title">Salario mínimo</span>
                ${select({ id:'f-salary', label:'Salario mensual', options:['$3.000.000 COP','$5.000.000 COP','$8.000.000 COP','$10.000.000 COP'], value:'$5.000.000 COP' })}
              </div>

              <div class="stack gap-2 mt-4">
                ${btn('Aplicar filtros', { kind:'primary', block:true, size:'sm', demo:'toast-ok' })}
                ${btn('Limpiar filtros', { kind:'ghost', block:true, size:'sm', demo:'clear-filters' })}
              </div>
            </div>
          </aside>

          <div class="stack" style="gap:12px;min-width:0">
            <div class="results-bar">
              <span class="small"><b class="strong">86 vacantes</b> <span class="muted">coinciden con tu búsqueda</span></span>
              <div class="grow"></div>
              <span class="tiny muted">Ordenar por</span>
              ${select({ id:'f-sort', label:'', options:['Más relevantes','Más recientes','Mejor salario','Menos postulantes'], value:'Más relevantes' })}
              <div class="viewtoggle" role="group" aria-label="Vista de resultados">
                <button class="is-on" aria-label="Vista de cuadrícula" aria-pressed="true">${ic('grid')}</button>
                <button aria-label="Vista de lista" aria-pressed="false">${ic('list')}</button>
              </div>
            </div>

            <div class="chips" data-gestalt="Continuidad">
              <span class="tiny muted" style="align-self:center">Filtros activos:</span>
              ${chip('Tecnología', { removable:true })}
              ${chip('Remoto', { removable:true })}
              ${chip('Bogotá D.C.', { removable:true })}
              ${chip('Mid / Senior', { removable:true })}
              <button class="chip chip--add chip--sm" data-demo="clear-filters">${ic('x')}Limpiar todo</button>
            </div>

            <div class="grid grid--3" data-gestalt="Similitud">
              ${jobCard(JOBS[0])}
              ${jobCard(JOBS[2])}
              ${jobCard(JOBS[1])}
              ${jobCard(JOBS[4])}
              ${jobCard(JOBS[8])}
              ${jobCard(JOBS[7])}
            </div>

            <div class="split" style="padding:6px 0 2px">
              <span class="tiny muted">Mostrando <b class="strong">1–6</b> de 86 vacantes</span>
              <div class="pagination">
                <button disabled aria-label="Página anterior">${ic('chevron-left')}</button>
                <button class="is-on" aria-current="page">1</button>
                <button>2</button>
                <button>3</button>
                <span class="tiny dim" style="padding:0 4px">…</span>
                <button>15</button>
                <button aria-label="Página siguiente">${ic('chevron-right')}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'C03', title:'Catálogo · cargando resultados', group:'C',
  purpose:'Estado de carga del catálogo: esqueletos con la misma estructura de la tarjeta final, barra indeterminada y mensaje con opción de cancelar.',
  cta:'«Cancelar búsqueda» — junto al mensaje de carga.',
  patterns:['Loader','Catálogo','Feedback','Progreso'],
  gestalt:['Similitud','Continuidad','Cierre'],
  reqs:['RQ-22','RQ-23','RQ-24'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'buscar', search:true })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:16px">
        ${pageHead({ eyebrow:'Actualizando resultados', title:'Empleos en Colombia',
          sub:'Aplicando filtros: Tecnología · Remoto · Bogotá D.C.',
          actions: btn('Alertas de empleo', { kind:'secondary', icon:'bell', go:'E03' }) })}

        <div class="grid" style="grid-template-columns:268px minmax(0,1fr);align-items:start;gap:18px">
          <aside class="card filters">
            <div class="card__head" style="padding:14px 16px">
              <span class="h4 row gap-2">${ic('sliders')}Filtros</span>
              <div class="grow"></div>
              <span class="spinner spinner--sm"></span>
            </div>
            <div class="card__body" style="padding:14px 16px;display:flex;flex-direction:column;gap:14px">
              <div class="stack" style="gap:6px"><div class="sk sk--text" style="width:42%"></div><div class="sk" style="height:42px"></div></div>
              <div class="stack" style="gap:6px"><div class="sk sk--text" style="width:52%"></div><div class="sk" style="height:42px"></div></div>
              <div class="stack" style="gap:9px;padding-top:6px;border-top:1px solid var(--line)">
                <div class="sk sk--text" style="width:36%"></div>
                <div class="sk sk--text" style="width:80%"></div>
                <div class="sk sk--text" style="width:64%"></div>
                <div class="sk sk--text" style="width:72%"></div>
              </div>
              <div class="stack" style="gap:9px;padding-top:6px;border-top:1px solid var(--line)">
                <div class="sk sk--text" style="width:40%"></div>
                <div class="sk sk--text" style="width:76%"></div>
                <div class="sk sk--text" style="width:58%"></div>
              </div>
            </div>
          </aside>

          <div class="stack" style="gap:12px;min-width:0">
            <div class="card" style="padding:10px 14px;display:flex;align-items:center;gap:11px">
              <span class="spinner"></span>
              <div class="grow">
                <div class="small strong">Buscando vacantes que coincidan contigo…</div>
                <div class="tiny muted">Esto tarda menos de 2 segundos. Puedes cancelar si lo deseas.</div>
              </div>
              <button class="btn btn--ghost btn--sm" data-demo="cancel-load">Cancelar</button>
            </div>
            <div class="progress progress--indet" role="progressbar" aria-label="Cargando resultados"><div class="progress__bar"></div></div>

            <div class="results-bar">
              <div class="sk sk--title" style="width:210px"></div>
              <div class="grow"></div>
              <div class="sk" style="width:132px;height:34px"></div>
              <div class="sk" style="width:66px;height:30px"></div>
            </div>

            <div class="grid grid--3">
              ${[1,2,3,4,5,6].map(function(){
                return '<div class="jobcard jobcard--sk" aria-hidden="true">' +
                  '<div class="jobcard__top"><div class="sk sk--circle" style="width:42px;height:42px;flex:0 0 42px"></div>' +
                  '<div class="jobcard__head" style="display:flex;flex-direction:column;gap:7px"><div class="sk sk--title" style="width:78%"></div><div class="sk sk--text" style="width:52%"></div></div></div>' +
                  '<div class="chips"><div class="sk" style="width:62px;height:24px;border-radius:999px"></div><div class="sk" style="width:78px;height:24px;border-radius:999px"></div></div>' +
                  '<div class="sk sk--text" style="width:94%"></div><div class="sk sk--text" style="width:70%"></div>' +
                  '<div class="jobcard__foot"><div class="stack" style="gap:6px"><div class="sk sk--text" style="width:110px"></div><div class="sk sk--text" style="width:86px"></div></div><div class="sk" style="width:54px;height:22px;border-radius:999px"></div></div>' +
                '</div>';
              }).join('')}
            </div>
            <div class="center tiny dim" style="padding:4px 0">Cargando 86 vacantes · 42%</div>
          </div>
        </div>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'C04', title:'Detalle de vacante', group:'C',
  purpose:'Detalle con jerarquía clara: información a la izquierda y decisión (postularse) fija a la derecha. La coincidencia con el perfil se explica, no solo se muestra.',
  cta:'«Postularme» — tarjeta derecha fija; «Guardar» como acción secundaria.',
  patterns:['Catálogo','Progreso','Feedback','Formulario'],
  gestalt:['Figura-fondo','Proximidad','Región común','Punto focal'],
  reqs:['RQ-17','RQ-18','RQ-20','RQ-25','RQ-26'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'buscar', search:true })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:14px">
        <nav class="row gap-2 tiny muted" aria-label="Ruta de navegación">
          <a class="link link--quiet" data-go="C02">Buscar empleo</a>${ic('chevron-right')}
          <a class="link link--quiet" data-go="C02">Tecnología</a>${ic('chevron-right')}
          <span class="strong" style="color:var(--ink-700)">Desarrollador Full Stack</span>
        </nav>

        <div class="grid grid--detail" style="align-items:start">
          <div class="stack gap-4" style="min-width:0">
            <div class="card" style="padding:22px 24px">
              <div class="row gap-4" style="align-items:flex-start">
                <span class="jobcard__logo" style="width:58px;height:58px;flex-basis:58px;font-size:16px">NS</span>
                <div class="grow stack" style="gap:5px">
                  <div class="row gap-2 wrap">
                    <h1 class="h1" style="font-size:24px">Desarrollador Full Stack</h1>
                    ${badge('Verificada', 'ok', true)}
                  </div>
                  <div class="row gap-3 wrap small muted">
                    <span class="row gap-2">${ic('building')}Nova Systems</span>
                    <span class="row gap-2">${ic('map-pin')}Bogotá D.C. · Híbrido</span>
                    <span class="row gap-2">${ic('clock')}Publicada hace 2 días</span>
                  </div>
                  <div class="chips mt-1">
                    <span class="tag-cat tag-cat--tech">Tecnología</span>
                    ${chip('Senior', { kind:'outline', size:'sm' })}
                    ${chip('Tiempo completo', { kind:'outline', size:'sm' })}
                    ${chip('$8M – $11M COP', { kind:'ok', size:'sm' })}
                  </div>
                </div>
                <div class="btn-row" style="flex:0 0 auto">
                  <button class="iconbtn" style="border:1px solid var(--line-strong)" aria-label="Compartir vacante" data-demo="toast-info">${ic('external')}</button>
                  <button class="iconbtn" style="border:1px solid var(--line-strong)" aria-label="Guardar vacante" data-demo="save">${ic('bookmark')}</button>
                </div>
              </div>

              <div class="divider"></div>

              <div class="stat-strip">
                <div class="stat-strip__item"><span class="stat-strip__num">87</span><span class="stat-strip__cap">Postulantes</span></div>
                <div class="stat-strip__item"><span class="stat-strip__num">12</span><span class="stat-strip__cap">Días restantes</span></div>
                <div class="stat-strip__item"><span class="stat-strip__num">2–3</span><span class="stat-strip__cap">Etapas</span></div>
                <div class="stat-strip__item"><span class="stat-strip__num">21 oct</span><span class="stat-strip__cap">Cierre</span></div>
              </div>
            </div>

            <div class="card">
              <div class="card__body" style="padding-bottom:0">
                ${tabs([{id:'desc',label:'Descripción'},{id:'req',label:'Requisitos'},{id:'comp',label:'Empresa'},{id:'proc',label:'Proceso'}], 'desc')}
              </div>
              <div class="card__body" style="display:flex;flex-direction:column;gap:18px">
                <div>
                  <h2 class="h3">Sobre el cargo</h2>
                  <p class="small mt-2" style="line-height:1.65;color:var(--ink-600)">Buscamos una persona para liderar el desarrollo de nuestra plataforma de pagos. Trabajarás con un equipo de 12 personas entre producto, diseño y datos, con foco en calidad, accesibilidad y rendimiento.</p>
                </div>
                <div>
                  <h2 class="h3">Responsabilidades</h2>
                  <ul class="req-list mt-2">
                    <li>${ic('check')}Diseñar y construir APIs y servicios en Node.js.</li>
                    <li>${ic('check')}Desarrollar interfaces en React con estándares de accesibilidad AA.</li>
                    <li>${ic('check')}Participar en revisiones de código y decisiones de arquitectura.</li>
                    <li>${ic('check')}Acompañar a personas junior en su crecimiento técnico.</li>
                  </ul>
                </div>
                <div>
                  <h2 class="h3">Requisitos</h2>
                  <ul class="req-list mt-2">
                    <li>${ic('check')}4+ años de experiencia con JavaScript/TypeScript.</li>
                    <li>${ic('check')}Experiencia con React, Node.js y bases de datos relacionales.</li>
                    <li>${ic('check')}Inglés intermedio (B2) para reuniones con el equipo global.</li>
                    <li>${ic('check')}Disponibilidad para 2 días presenciales en Bogotá.</li>
                  </ul>
                </div>
                <div>
                  <h2 class="h3">Beneficios</h2>
                  <div class="chips mt-2">
                    ${chip('Seguro médico', { kind:'outline' })}${chip('Presupuesto de formación', { kind:'outline' })}
                    ${chip('Días flexibles', { kind:'outline' })}${chip('Equipo de trabajo', { kind:'outline' })}
                    ${chip('Bono anual', { kind:'outline' })}
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card__head"><h2 class="card__title">Sobre Nova Systems</h2><div class="grow"></div><span class="badge badge--neutral">120 empleados</span></div>
              <div class="card__body" style="display:flex;gap:14px;align-items:flex-start">
                <span class="jobcard__logo" style="width:48px;height:48px;flex-basis:48px">NS</span>
                <div class="grow">
                  <p class="small" style="line-height:1.6;color:var(--ink-600)">Somos una empresa de tecnología financiera con 8 años en el mercado. Construimos productos para que más personas accedan a servicios financieros justos.</p>
                  <div class="row gap-4 mt-2 tiny muted">
                    <span class="row gap-2">${ic('map-pin')}Bogotá D.C.</span>
                    <span class="row gap-2">${ic('globe')}novasystems.co</span>
                    <span class="row gap-2">${ic('users')}120 empleados</span>
                  </div>
                </div>
                <button class="btn btn--secondary btn--sm" data-demo="toast-info">${ic('external')}Ver empresa</button>
              </div>
            </div>

            <div class="stack" style="gap:9px">
              <div class="split"><h2 class="h2" style="font-size:16px">Empleos similares</h2><a class="small link" data-go="C02">Ver más</a></div>
              <div class="grid grid--3">
                ${jobCard(JOBS[4], { mini:true, match:false })}
                ${jobCard(JOBS[8], { mini:true, match:false })}
                ${jobCard(JOBS[1], { mini:true, match:false })}
              </div>
            </div>
          </div>

          <aside class="stack gap-4" style="position:sticky;top:0">
            <div class="card" data-gestalt="Punto focal">
              <div class="card__body" style="padding:18px;display:flex;flex-direction:column;gap:14px">
                <div class="row gap-3">
                  ${ring(94, { size:58, label:'Match' })}
                  <div>
                    <div class="small strong">Muy buena coincidencia</div>
                    <div class="tiny muted" style="line-height:1.45">Tu perfil cubre 9 de 10 requisitos.</div>
                  </div>
                </div>

                <div class="stack" style="gap:9px">
                  ${progress({ label:'Habilidades', value:96, size:'sm' })}
                  ${progress({ label:'Experiencia', value:90, size:'sm' })}
                  ${progress({ label:'Ubicación', value:100, size:'sm', tone:'ok' })}
                </div>

                <div class="divider" style="margin:0"></div>

                <div>
                  <div class="tiny dim">Salario mensual</div>
                  <div class="h2" style="font-size:19px;margin-top:2px">$8.000.000 – $11.000.000</div>
                  <div class="tiny muted">COP · según experiencia</div>
                </div>

                <div class="stack gap-2">
                  ${btn('Postularme', { kind:'primary', block:true, iconRight:'arrow-right', go:'D01' })}
                  ${btn('Guardar vacante', { kind:'secondary', block:true, icon:'bookmark', demo:'save' })}
                </div>

                <div class="alert alert--info" style="padding:10px 11px">
                  ${ic('info')}<div class="alert__body tiny"><b>87 personas ya se postularon.</b> Tu postulación tarda menos de 2 minutos.</div>
                </div>

                <div class="meta-list">
                  ${metaRow('calendar', 'Cierra el', '21 oct 2026')}
                  ${metaRow('clock', 'Jornada', 'Lunes a viernes')}
                  ${metaRow('users', 'Vacantes', '2 posiciones')}
                </div>

                <button class="btn btn--quiet btn--sm" style="align-self:center" data-demo="toast-info">${ic('flag')}Reportar esta vacante</button>
              </div>
            </div>

            <div class="card card--soft">
              <div class="card__body" style="padding:14px 16px">
                <div class="row gap-2" style="margin-bottom:6px">${ic('shield')}<span class="h4">Vacante verificada</span></div>
                <p class="tiny muted" style="line-height:1.55">Nova Systems confirmó su identidad y los datos de contacto. Talenta nunca cobra por postularte.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'C05', title:'Vacantes guardadas · vacío', group:'C',
  purpose:'Estado vacío del catálogo guardado: explica qué es, por qué está vacío y ofrece una acción concreta sin dejar la pantalla en blanco.',
  cta:'«Explorar empleos» — dentro del estado vacío, centrado.',
  patterns:['Catálogo','Feedback','Progreso'],
  gestalt:['Cierre','Figura-fondo','Similitud','Punto focal'],
  reqs:['RQ-19','RQ-20','RQ-27'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'guardados' })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:16px">
        ${pageHead({ eyebrow:'0 vacantes guardadas', title:'Vacantes guardadas',
          sub:'Guarda oportunidades para revisarlas con calma y postularte cuando estés listo.',
          actions: btn('Buscar empleo', { kind:'primary', icon:'search', go:'C02' }) })}

        <div class="card" data-gestalt="Cierre">
          <div class="card__body" style="padding:8px">
            ${emptyState({
              icon:'bookmark',
              title:'Aún no has guardado vacantes',
              text:'Cuando encuentres una oferta interesante, toca el ícono de marcador. La encontrarás aquí para compararla o postularte después.',
              action: btn('Explorar empleos', { kind:'primary', icon:'search', go:'C02' }) + btn('Ver mis postulaciones', { kind:'secondary', icon:'briefcase', go:'D05' })
            })}
          </div>
          <div class="card__foot" style="justify-content:center;gap:18px">
            <span class="tiny muted row gap-2">${ic('bookmark')}Guarda hasta 50 vacantes</span>
            <span class="tiny muted row gap-2">${ic('bell')}Recibe avisos si cambian</span>
            <span class="tiny muted row gap-2">${ic('clock')}Se conservan 90 días</span>
          </div>
        </div>

        <div class="split" style="margin-top:2px">
          <div class="stack" style="gap:2px">
            <h2 class="h2" style="font-size:17px">Sugerencias para ti</h2>
            <span class="tiny muted">Basadas en tu perfil y en lo que has visto esta semana.</span>
          </div>
          <a class="small link" data-go="C02">Ver todas ${ic('arrow-right')}</a>
        </div>

        <div class="grid grid--3" data-gestalt="Similitud">
          ${jobCard(JOBS[4])}
          ${jobCard(JOBS[2])}
          ${jobCard(JOBS[8])}
        </div>
      </div>
    </div>
  </div>`
});
