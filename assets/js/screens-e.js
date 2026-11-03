/* =========================================================
   Pantallas E · Gestión de la cuenta y comunicación
   ========================================================= */

defineScreen({
  id:'E01', title:'Entrevistas y agenda', group:'E',
  purpose:'Agenda de entrevistas con calendario, selección de horario y confirmación. El estado del proceso se refuerza con un rastreador y una lista de preparación.',
  cta:'«Confirmar asistencia» — tarjeta de la próxima entrevista; «Reprogramar» como alternativa.',
  patterns:['Progreso','Formulario','Feedback','Loader'],
  gestalt:['Proximidad','Región común','Continuidad','Punto focal'],
  reqs:['RQ-06','RQ-07','RQ-09','RQ-14','RQ-30','RQ-32'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'' })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:16px">
        ${pageHead({ eyebrow:'Mi agenda', title:'Entrevistas',
          sub:'Confirma tu asistencia, revisa los detalles y prepárate con tiempo. Las horas se muestran en tu zona horaria.',
          actions: btn('Mis postulaciones', { kind:'secondary', icon:'briefcase', go:'D05' }) +
                   btn('Agregar a mi calendario', { kind:'primary', icon:'calendar', demo:'toast-ok' }) })}

        <div class="grid" style="grid-template-columns:minmax(0,1fr) 370px;align-items:start">
          <div class="stack gap-4">
            <div class="card" data-gestalt="Región común">
              <div class="card__head">
                <div class="grow">
                  <h2 class="card__title">Noviembre 2026</h2>
                  <p class="tiny muted" style="margin-top:2px">Selecciona un día para ver los horarios disponibles.</p>
                </div>
                <div class="row gap-2">
                  <button class="iconbtn" style="border:1px solid var(--line-strong)" aria-label="Mes anterior">${ic('chevron-left')}</button>
                  <button class="iconbtn" style="border:1px solid var(--line-strong)" aria-label="Mes siguiente">${ic('chevron-right')}</button>
                </div>
              </div>
              <div class="card__body" style="display:flex;flex-direction:column;gap:15px">
                <div class="cal" data-gestalt="Proximidad">
                  ${['L','M','X','J','V','S','D'].map(function(d){ return '<div class="cal__dow">' + d + '</div>'; }).join('')}
                  ${[26,27,28,29,30,31].map(function(d){ return '<div class="cal__day is-muted">' + d + '</div>'; }).join('')}
                  <div class="cal__day is-today">1<span class="cal__dot"></span></div>
                  ${[2,3].map(function(d){ return '<div class="cal__day">' + d + '</div>'; }).join('')}
                  <div class="cal__day is-selected">4<span class="cal__dot"></span></div>
                  ${[5,6,7,8].map(function(d){ return '<div class="cal__day">' + d + (d === 6 ? '<span class="cal__dot cal__dot--warn"></span>' : '') + '</div>'; }).join('')}
                  ${[9,10,11,12,13,14,15].map(function(d){ return '<div class="cal__day">' + d + (d === 12 ? '<span class="cal__dot"></span>' : '') + '</div>'; }).join('')}
                  ${[16,17,18,19,20,21,22].map(function(d){ return '<div class="cal__day">' + d + '</div>'; }).join('')}
                  ${[23,24,25,26,27,28,29].map(function(d){ return '<div class="cal__day">' + d + '</div>'; }).join('')}
                  <div class="cal__day">30</div>
                  ${[1,2,3,4,5,6].map(function(d){ return '<div class="cal__day is-muted">' + d + '</div>'; }).join('')}
                </div>

                <div class="divider" style="margin:0"></div>

                <div class="split">
                  <div class="stack" style="gap:2px">
                    <span class="h4">Horarios disponibles · miércoles 4 de noviembre</span>
                    <span class="tiny muted">Hora de Colombia (GMT-5) · entrevista de 45 minutos</span>
                  </div>
                  ${badge('3 cupos', 'ok', true)}
                </div>

                <div class="slot-grid" data-gestalt="Similitud">
                  ${['09:00','09:30','10:00','10:30','11:00','11:30','14:00','14:30','15:00','15:30','16:00','16:30'].map(function(t){
                    const cls = t === '10:00' ? ' is-on' : (t === '11:30' || t === '14:30') ? ' is-off' : '';
                    return '<button class="slot' + cls + '" data-demo="select-slot" aria-pressed="' + (t === '10:00') + '">' + t + '</button>';
                  }).join('')}
                </div>

                <div class="row gap-2 tiny muted">${ic('info')}Los horarios tachados ya fueron reservados por otras personas.</div>
              </div>
            </div>

            <div class="card">
              <div class="card__head">
                <div class="grow">
                  <h2 class="card__title">Preparación para la entrevista</h2>
                  <p class="tiny muted" style="margin-top:2px">3 de 5 pasos completados. Te falta poco.</p>
                </div>
                <div class="stack" style="gap:5px;width:130px">
                  <span class="tiny muted right">60%</span>
                  ${progress({ value:60, size:'xs' })}
                </div>
              </div>
              <div class="card__body">
                <div class="checklist">
                  <div class="checklist__item is-done">${ic('check-circle')}<span>Revisar la descripción del cargo</span></div>
                  <div class="checklist__item is-done">${ic('check-circle')}<span>Preparar ejemplos de proyectos</span></div>
                  <div class="checklist__item is-done">${ic('check-circle')}<span>Probar cámara y micrófono</span></div>
                  <div class="checklist__item is-current">${ic('clock')}<span>Investigar a DataAndina</span></div>
                  <div class="checklist__item">${ic('info')}<span>Preparar preguntas para el equipo</span></div>
                </div>
                <div class="divider" style="margin:14px 0"></div>
                <div class="grid grid--3" style="gap:9px">
                  <button class="btn btn--secondary btn--sm" data-demo="toast-info">${ic('file')}Ver vacante</button>
                  <button class="btn btn--secondary btn--sm" data-demo="toast-info">${ic('help')}Preguntas frecuentes</button>
                  <button class="btn btn--secondary btn--sm" data-demo="toast-info">${ic('play')}Video de práctica</button>
                </div>
              </div>
            </div>
          </div>

          <aside class="stack gap-4">
            <div class="card" data-gestalt="Punto focal">
              <div class="card__head">
                <h2 class="card__title">Próxima entrevista</h2>
                <div class="grow"></div>
                ${badge('Confirmada', 'ok', true)}
              </div>
              <div class="card__body" style="display:flex;flex-direction:column;gap:13px">
                <div class="row gap-3">
                  <span class="jobcard__logo" style="width:44px;height:44px;flex-basis:44px">DA</span>
                  <div class="grow">
                    <div class="small strong">Analista de Datos</div>
                    <div class="tiny muted">DataAndina · Remoto</div>
                  </div>
                  ${badge('Etapa 3 de 4', 'neutral')}
                </div>

                <div class="panel" style="padding:12px">
                  <dl class="meta-list">
                    ${metaRow('calendar', 'Fecha', 'Mié 4 nov 2026')}
                    ${metaRow('clock', 'Hora', '10:00 a. m. – 10:45 a. m.')}
                    ${metaRow('globe', 'Modalidad', 'Videollamada')}
                    ${metaRow('user', 'Entrevistadora', 'Carolina Méndez')}
                  </dl>
                </div>

                <div data-gestalt="Continuidad">
                  ${track(['Confirmada','Preparación','Entrevista','Resultado'], 2)}
                </div>

                <div class="stack gap-2">
                  ${btn('Confirmar asistencia', { kind:'primary', block:true, icon:'check', demo:'confirm-interview' })}
                  <div class="grid grid--2" style="gap:8px">
                    ${btn('Reprogramar', { kind:'secondary', block:true, icon:'calendar', demo:'reschedule' })}
                    ${btn('Enviar mensaje', { kind:'secondary', block:true, icon:'message', go:'E02' })}
                  </div>
                </div>

                <div class="alert alert--info" style="padding:10px 11px">
                  ${ic('info')}<div class="alert__body tiny"><b>El enlace se habilita 10 minutos antes.</b> Te enviaremos un recordatorio por correo y notificación.</div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card__head"><h2 class="card__title">Contacto de la empresa</h2></div>
              <div class="card__body" style="display:flex;flex-direction:column;gap:10px">
                <div class="row gap-3">
                  ${avatar('CM', { size:'lg', tone:'violet' })}
                  <div><div class="small strong">Carolina Méndez</div><div class="tiny muted">Líder de talento · DataAndina</div></div>
                </div>
                <div class="row gap-2 tiny muted">${ic('clock')}Responde en ~4 horas</div>
                ${btn('Abrir conversación', { kind:'secondary', block:true, size:'sm', icon:'message', go:'E02' })}
              </div>
            </div>

            <div class="panel panel--blue">
              <div class="row gap-2" style="margin-bottom:5px">${ic('shield')}<span class="h4">Consejo</span></div>
              <p class="tiny muted" style="line-height:1.55">Prueba tu conexión y entra 5 minutos antes. Si algo falla, escríbenos desde el chat y avisamos a la empresa.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'E02', title:'Mensajes con la empresa', group:'E',
  purpose:'Mensajería contextual: la conversación conserva la vacante, el estado del proceso y los archivos compartidos. El compositor informa límites y atajos.',
  cta:'«Enviar» — compositor del hilo; «Ver vacante» en el panel de contexto.',
  patterns:['Catálogo','Feedback','Formulario','Progreso'],
  gestalt:['Proximidad','Región común','Figura-fondo','Continuidad'],
  reqs:['RQ-07','RQ-15','RQ-26','RQ-30','RQ-32'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'mensajes' })}
    <div class="page page--flush">
      <div class="msg">
        <div class="msg__list">
          <div class="msg__search">
            <label class="hsearch" style="width:100%;height:34px">${ic('search')}<input type="search" placeholder="Buscar conversación" aria-label="Buscar conversación"></label>
          </div>
          <div class="scroll-y" style="flex:1">
            <div class="conv is-active">
              ${avatar('CM', { tone:'violet' })}
              <div class="conv__main">
                <div class="conv__top"><span class="conv__name">Carolina Méndez</span><span class="conv__time">9:41</span></div>
                <div class="conv__preview">Perfecto, te comparto el enlace de la videollamada…</div>
                <div class="conv__job">${ic('briefcase')}Analista de Datos · DataAndina</div>
              </div>
              <span class="conv__dot"></span>
            </div>
            <div class="conv is-unread">
              ${avatar('NS', { square:true, tone:'company' })}
              <div class="conv__main">
                <div class="conv__top"><span class="conv__name">Nova Systems</span><span class="conv__time">Ayer</span></div>
                <div class="conv__preview">Tu prueba técnica fue recibida. Estamos revisando…</div>
                <div class="conv__job">${ic('briefcase')}Desarrollador Full Stack</div>
              </div>
              <span class="conv__dot"></span>
            </div>
            <div class="conv">
              ${avatar('FP', { tone:'teal' })}
              <div class="conv__main">
                <div class="conv__top"><span class="conv__name">FinPay · Talento</span><span class="conv__time">Lun</span></div>
                <div class="conv__preview">Gracias por postularte. ¿Tienes disponibilidad…?</div>
                <div class="conv__job">${ic('briefcase')}Product Manager</div>
              </div>
            </div>
            <div class="conv">
              ${avatar('T', { square:true })}
              <div class="conv__main">
                <div class="conv__top"><span class="conv__name">Equipo Talenta</span><span class="conv__time">30 oct</span></div>
                <div class="conv__preview">Tu perfil ya es visible para 42 empresas.</div>
                <div class="conv__job">${ic('info')}Notificación del sistema</div>
              </div>
            </div>
          </div>
          <div style="padding:10px 12px;border-top:1px solid var(--line)" class="split">
            <span class="tiny dim">4 conversaciones</span>
            <button class="tiny link" data-demo="toast-info">Marcar leídas</button>
          </div>
        </div>

        <div class="thread">
          <div class="thread__head">
            ${avatar('CM', { tone:'violet' })}
            <div class="grow">
              <div class="row gap-2"><span class="small strong">Carolina Méndez</span>${badge('Empresa verificada', 'ok')}</div>
              <div class="tiny muted">Líder de talento · DataAndina · Responde en ~4 h</div>
            </div>
            <button class="iconbtn" aria-label="Buscar en la conversación" data-demo="toast-info">${ic('search')}</button>
            <button class="iconbtn" aria-label="Más opciones" data-demo="toast-info">${ic('more')}</button>
          </div>

          <div class="bubbles" data-gestalt="Proximidad">
            <div class="daysep">Hoy</div>
            <div class="bubble bubble--them">
              Hola Valentina, ¡gracias por postularte a Analista de Datos! Revisamos tu perfil y nos gustaría agendar una entrevista.
              <div class="bubble__meta">${ic('clock')}9:12 a. m.</div>
            </div>
            <div class="bubble bubble--me">
              Hola Carolina, muchas gracias. Con gusto. ¿Qué días tienen disponibles?
              <div class="bubble__meta">Tú · 9:18 a. m. ${ic('check')}</div>
            </div>
            <div class="bubble bubble--them">
              Tenemos cupos el miércoles 4 y el jueves 5 de noviembre. La entrevista dura 45 minutos y es por videollamada.
              <div class="bubble__meta">${ic('clock')}9:24 a. m.</div>
            </div>
            <div class="bubble bubble--me">
              El miércoles 4 a las 10:00 a. m. me funciona perfecto.
              <div class="bubble__meta">Tú · 9:31 a. m. ${ic('check')}</div>
            </div>
            <div class="bubble bubble--them">
              Perfecto, te comparto el enlace de la videollamada y lo dejamos en tu agenda.
              <div class="bubble__meta">${ic('clock')}9:41 a. m.</div>
            </div>
            <div class="typing">Carolina está escribiendo <span class="typing__dots"><i></i><i></i><i></i></span></div>
          </div>

          <div class="composer">
            <div class="composer__row">
              <button class="iconbtn" aria-label="Adjuntar archivo" data-demo="upload">${ic('paperclip')}</button>
              <textarea class="composer__input" id="msg-input" placeholder="Escribe un mensaje…" aria-label="Mensaje" maxlength="1000"></textarea>
              <button class="btn btn--primary" data-demo="send-message">${ic('send')}Enviar</button>
            </div>
            <div class="composer__hint">
              <span>Enter para enviar · Shift + Enter para salto de línea</span>
              <span>0/1000</span>
            </div>
          </div>
        </div>

        <aside class="msg__side">
          <div>
            <div class="panel__title">Vacante asociada</div>
            <div class="row gap-3">
              <span class="jobcard__logo" style="width:38px;height:38px;flex-basis:38px;font-size:10.5px">DA</span>
              <div class="grow">
                <div class="small strong">Analista de Datos</div>
                <div class="tiny muted">DataAndina · Remoto</div>
              </div>
            </div>
            <div class="chips mt-2">${chip('Híbrido', { kind:'outline', size:'sm' })}${chip('$4.5M – $6M', { kind:'ok', size:'sm' })}</div>
            ${btn('Ver vacante', { kind:'secondary', block:true, size:'sm', icon:'external', go:'C04' })}
          </div>

          <div class="divider" style="margin:0"></div>

          <div>
            <div class="panel__title">Estado del proceso</div>
            ${track(['Enviada','Revisión','Entrevista','Decisión'], 3)}
            <div class="tiny muted mt-2">Entrevista agendada para el mié 4 nov, 10:00 a. m.</div>
            <a class="link small" data-go="D06" style="display:inline-block;margin-top:9px">Ver seguimiento completo</a>
          </div>

          <div class="divider" style="margin:0"></div>

          <div>
            <div class="panel__title">Archivos compartidos</div>
            ${fileRow({ name:'CV_Valentina_Rios_2026.pdf', meta:'PDF · 284 KB', action:'<button class="iconbtn" aria-label="Descargar" data-demo="toast-info">' + ic('download') + '</button>' })}
            ${fileRow({ name:'Enlace_entrevista.txt', meta:'TXT · 1 KB', action:'<button class="iconbtn" aria-label="Abrir" data-demo="toast-info">' + ic('external') + '</button>' })}
          </div>

          <div class="panel panel--blue" style="padding:11px">
            <div class="row gap-2" style="margin-bottom:4px">${ic('shield')}<span class="tiny strong">Conversación segura</span></div>
            <p class="tiny muted" style="line-height:1.5">Nunca compartas datos bancarios ni documentos por este medio. Repórtalo si ocurre.</p>
          </div>
        </aside>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'E03', title:'Alertas de empleo', group:'E',
  purpose:'Configuración de alertas con frecuencia, canales y filtros reutilizables. Cada alerta muestra su estado, coincidencias y acciones sin salir de la lista.',
  cta:'«Guardar alerta» — pie del formulario de creación.',
  patterns:['Formulario','Validación','Catálogo','Feedback','Progreso'],
  gestalt:['Proximidad','Similitud','Región común','Continuidad'],
  reqs:['RQ-02','RQ-04','RQ-07','RQ-14','RQ-18','RQ-30','RQ-33'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'buscar', search:true })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:16px">
        ${pageHead({ eyebrow:'Búsquedas guardadas', title:'Alertas de empleo',
          sub:'Recibe vacantes nuevas según tus filtros. Puedes pausar una alerta sin eliminarla.',
          actions: btn('Buscar empleo', { kind:'secondary', icon:'search', go:'C02' }) })}

        <div class="grid grid--3" data-gestalt="Similitud">
          ${kpi({ label:'Alertas activas', value:'3', icon:'bell', foot:'<span class="up">' + ic('check') + '2 con coincidencias hoy</span>' })}
          ${kpi({ label:'Coincidencias esta semana', value:'14', icon:'sparkle', foot:'<span class="muted">6 nuevas desde ayer</span>' })}
          ${kpi({ label:'Último envío', value:'Hoy', icon:'mail', foot:'<span class="muted">7:00 a. m. · correo</span>' })}
        </div>

        <div class="grid" style="grid-template-columns:minmax(0,1fr) 380px;align-items:start">
          <div class="stack gap-4">
            <div class="card" data-gestalt="Región común">
              <div class="card__head">
                <h2 class="card__title">Tus alertas</h2>
                <div class="grow"></div>
                <span class="tiny muted">3 de 5 permitidas</span>
              </div>
              <div class="card__body" style="display:flex;flex-direction:column;gap:12px">
                <div class="panel" style="background:#fff">
                  <div class="split" style="align-items:flex-start">
                    <div class="row gap-3" style="align-items:flex-start">
                      <span class="kpi__icon" style="width:38px;height:38px;flex-basis:38px">${ic('bell')}</span>
                      <div>
                        <div class="row gap-2"><span class="small strong">Desarrollador Full Stack · Remoto</span>${badge('Activa', 'ok', true)}</div>
                        <div class="tiny muted" style="margin-top:2px">Tecnología · Senior · $8M+ · Colombia</div>
                      </div>
                    </div>
                    <button type="button" class="toggle is-on" role="switch" aria-checked="true" aria-label="Activar alerta Desarrollador Full Stack" data-demo="toggle"></button>
                  </div>
                  <div class="chips mt-3">
                    ${chip('Diaria', { size:'sm' })}${chip('Correo', { kind:'outline', size:'sm' })}${chip('Push', { kind:'outline', size:'sm' })}
                  </div>
                  <div class="split mt-3">
                    <span class="tiny muted">${ic('sparkle')} 4 coincidencias hoy · último envío 7:00 a. m.</span>
                    <div class="row gap-2">
                      <button class="btn btn--ghost btn--sm" data-demo="toast-info">${ic('edit')}Editar</button>
                      <button class="btn btn--ghost btn--sm" data-demo="confirm-remove" style="color:var(--bad)">${ic('trash')}Eliminar</button>
                    </div>
                  </div>
                </div>

                <div class="panel" style="background:#fff">
                  <div class="split" style="align-items:flex-start">
                    <div class="row gap-3" style="align-items:flex-start">
                      <span class="kpi__icon" style="width:38px;height:38px;flex-basis:38px">${ic('bell')}</span>
                      <div>
                        <div class="row gap-2"><span class="small strong">Diseño UX/UI · Medellín</span>${badge('Activa', 'ok', true)}</div>
                        <div class="tiny muted" style="margin-top:2px">Diseño · Mid · Híbrido · Antioquia</div>
                      </div>
                    </div>
                    <button type="button" class="toggle is-on" role="switch" aria-checked="true" aria-label="Activar alerta Diseño UX/UI" data-demo="toggle"></button>
                  </div>
                  <div class="chips mt-3">
                    ${chip('Semanal', { size:'sm' })}${chip('Correo', { kind:'outline', size:'sm' })}
                  </div>
                  <div class="split mt-3">
                    <span class="tiny muted">${ic('sparkle')} 2 coincidencias esta semana · último envío lun 7:00 a. m.</span>
                    <div class="row gap-2">
                      <button class="btn btn--ghost btn--sm" data-demo="toast-info">${ic('edit')}Editar</button>
                      <button class="btn btn--ghost btn--sm" data-demo="confirm-remove" style="color:var(--bad)">${ic('trash')}Eliminar</button>
                    </div>
                  </div>
                </div>

                <div class="panel" style="background:#fff">
                  <div class="split" style="align-items:flex-start">
                    <div class="row gap-3" style="align-items:flex-start">
                      <span class="kpi__icon" style="width:38px;height:38px;flex-basis:38px">${ic('bell')}</span>
                      <div>
                        <div class="row gap-2"><span class="small strong">Analista de Datos · Remoto</span>${badge('Pausada', 'neutral', true)}</div>
                        <div class="tiny muted" style="margin-top:2px">Datos · Junior/Mid · Remoto · Colombia</div>
                      </div>
                    </div>
                    <button type="button" class="toggle" role="switch" aria-checked="false" aria-label="Activar alerta Analista de Datos" data-demo="toggle"></button>
                  </div>
                  <div class="chips mt-3">
                    ${chip('Diaria', { size:'sm' })}${chip('Correo', { kind:'outline', size:'sm' })}
                  </div>
                  <div class="split mt-3">
                    <span class="tiny muted">${ic('pause')} Pausada por ti el 24 oct</span>
                    <div class="row gap-2">
                      <button class="btn btn--ghost btn--sm" data-demo="toast-info">${ic('edit')}Editar</button>
                      <button class="btn btn--ghost btn--sm" data-demo="confirm-remove" style="color:var(--bad)">${ic('trash')}Eliminar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="alert alert--info">
              ${ic('info')}<div class="alert__body"><b>Las alertas usan tus filtros de búsqueda.</b> Si cambias ciudad o modalidad en el catálogo, puedes actualizar la alerta con un clic. <a class="link" data-go="C02">Ir al catálogo</a></div>
            </div>
          </div>

          <aside class="stack gap-4">
            <div class="card" data-gestalt="Punto focal">
              <div class="card__head"><h2 class="card__title">Nueva alerta</h2><div class="grow"></div>${badge('Paso 1 de 1', 'neutral')}</div>
              <div class="card__body">
                <form class="form" data-validate data-success-go="E03" data-form-name="Nueva alerta de empleo" novalidate style="gap:14px">
                  ${formLegend('Los campos con * son obligatorios. Puedes editarla después.')}
                  ${field({ id:'al-keyword', label:'Palabra clave', required:true, icon:'search', value:'Desarrollador Full Stack',
                    placeholder:'Cargo, habilidad o empresa', hint:'Usa palabras que aparezcan en el título del empleo.' })}
                  ${field({ id:'al-city', label:'Ubicación', required:true, icon:'map-pin', value:'Remoto', ac:'ciudades',
                    hint:'Elige una ciudad o «Remoto» para todo el país.' })}
                  <div class="grid grid--2">
                    ${select({ id:'al-cat', label:'Categoría', required:true, options:['Tecnología','Diseño','Marketing','Administración','Producto'], value:'Tecnología' })}
                    ${select({ id:'al-salary', label:'Salario mínimo', optional:true, options:['$3.000.000 COP','$5.000.000 COP','$8.000.000 COP','$10.000.000 COP'], value:'$8.000.000 COP' })}
                  </div>

                  <div class="field" data-field>
                    <span class="field__label">Frecuencia <span class="req">*</span></span>
                    <div class="grid grid--3" style="gap:7px">
                      ${choice({ name:'al-freq', value:'instant', title:'Al instante', desc:'Cada nueva vacante' })}
                      ${choice({ name:'al-freq', value:'daily', title:'Diaria', desc:'Un correo al día', checked:true, required:true })}
                      ${choice({ name:'al-freq', value:'weekly', title:'Semanal', desc:'Resumen los lunes' })}
                    </div>
                    <p class="field__msg" data-msg aria-live="polite"></p>
                  </div>

                  <div class="field" data-field>
                    <span class="field__label">Canales de aviso <span class="opt">(opcional)</span></span>
                    <div class="stack" style="gap:8px">
                      ${check({ id:'al-mail', label:'Correo electrónico · valentina.rios@correo.com', checked:true })}
                      ${check({ id:'al-push', label:'Notificación en la app', checked:true })}
                      ${check({ id:'al-wa', label:'WhatsApp · +57 300 412 8890' })}
                    </div>
                  </div>

                  <div class="card__foot" style="margin:2px -20px -20px;border-radius:0 0 var(--radius) var(--radius)">
                    <button class="btn btn--ghost btn--sm" type="button" data-demo="clear-filters">Restablecer</button>
                    <div class="grow"></div>
                    <button class="btn btn--primary" data-demo="save-alert">${ic('bell')}Guardar alerta</button>
                  </div>
                </form>
              </div>
            </div>

            <div class="card card--soft">
              <div class="card__body" style="padding:14px 16px">
                <div class="panel__title">Cómo funciona</div>
                <div class="checklist">
                  <div class="checklist__item is-done">${ic('search')}<span>Defines los filtros</span></div>
                  <div class="checklist__item is-done">${ic('sparkle')}<span>Buscamos coincidencias</span></div>
                  <div class="checklist__item is-current">${ic('mail')}<span>Recibes el resumen</span></div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'E04', title:'Configuración de la cuenta', group:'E',
  purpose:'Ajustes agrupados por tema, con formulario normativo, guardado explícito y resumen del estado de la cuenta. La navegación lateral evita perder el contexto.',
  cta:'«Guardar cambios» — pie del formulario; «Cancelar» restaura valores.',
  patterns:['Formulario','Validación','Progreso','Feedback','Autocompletado'],
  gestalt:['Proximidad','Región común','Similitud','Continuidad'],
  reqs:['RQ-01','RQ-02','RQ-03','RQ-04','RQ-05','RQ-06','RQ-07','RQ-13','RQ-34'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'' })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:16px">
        ${pageHead({ eyebrow:'Tu cuenta', title:'Configuración',
          sub:'Actualiza tus datos, preferencias y seguridad. Los cambios se aplican a todas tus postulaciones.',
          actions: btn('Ver mi perfil', { kind:'secondary', icon:'user', go:'B05' }) })}

        <div class="grid" style="grid-template-columns:238px minmax(0,1fr);align-items:start;gap:18px">
          <aside class="card" data-gestalt="Región común">
            <div class="card__body" style="padding:9px">
              <button class="sitem is-active" style="width:100%;text-align:left;padding:9px" data-demo="toast-info">
                <span class="sitem__body"><span class="sitem__title">Datos de la cuenta</span></span>${ic('user')}
              </button>
              <button class="sitem" style="width:100%;text-align:left;padding:9px" data-demo="toast-info">
                <span class="sitem__body"><span class="sitem__title">Notificaciones</span></span>${ic('bell')}
              </button>
              <button class="sitem" style="width:100%;text-align:left;padding:9px" data-demo="toast-info">
                <span class="sitem__body"><span class="sitem__title">Seguridad</span></span>${ic('lock')}
              </button>
              <button class="sitem" style="width:100%;text-align:left;padding:9px" data-go="E05">
                <span class="sitem__body"><span class="sitem__title">Privacidad y datos</span></span>${ic('shield')}
              </button>
              <button class="sitem" style="width:100%;text-align:left;padding:9px" data-go="E06">
                <span class="sitem__body"><span class="sitem__title">Ayuda y soporte</span></span>${ic('help')}
              </button>
            </div>
            <div class="card__foot" style="justify-content:flex-start">
              <a class="tiny link" data-go="E07" style="color:var(--bad)">Eliminar mi cuenta</a>
            </div>
          </aside>

          <div class="stack gap-4">
            <div class="card">
              <div class="card__head">
                <div class="grow">
                  <h2 class="card__title">Datos de la cuenta</h2>
                  <p class="tiny muted" style="margin-top:2px">Esta información aparece en tu perfil y en tus postulaciones.</p>
                </div>
                <div class="row gap-3">
                  ${ring(100, { size:40, label:'', tone:'ok' })}
                  <div class="tiny muted" style="line-height:1.4"><b class="strong">Perfil completo</b><br>Visible para empresas</div>
                </div>
              </div>
              <div class="card__body">
                <form class="form" data-validate data-success-go="E04" data-form-name="Datos de la cuenta" novalidate>
                  ${formLegend()}

                  <div class="row gap-4 panel" style="padding:12px">
                    ${avatar('VR', { size:'lg' })}
                    <div class="grow">
                      <div class="small strong">Foto de perfil</div>
                      <div class="tiny muted">JPG o PNG · mínimo 400×400 px · máximo 2 MB</div>
                    </div>
                    <div class="btn-row">
                      <button class="btn btn--secondary btn--sm" data-demo="upload">${ic('upload')}Cambiar</button>
                      <button class="btn btn--ghost btn--sm" data-demo="confirm-remove">${ic('trash')}Quitar</button>
                    </div>
                  </div>

                  <div class="grid grid--2" data-gestalt="Proximidad">
                    ${field({ id:'cfg-name', label:'Nombres', required:true, value:'Valentina', autocomplete:'given-name' })}
                    ${field({ id:'cfg-last', label:'Apellidos', required:true, value:'Ríos Marín', autocomplete:'family-name' })}
                    ${field({ id:'cfg-email', label:'Correo electrónico', type:'email', required:true, icon:'mail', value:'valentina.rios@correo.com',
                      autocomplete:'email', valid:true, okText:'Correo verificado.', hint:'Para cambiarlo deberás verificar el nuevo correo.' })}
                    ${field({ id:'cfg-phone', label:'Teléfono', type:'tel', required:true, icon:'phone', value:'+57 300 412 8890', autocomplete:'tel',
                      hint:'Solo se muestra a empresas cuando avanzas a entrevista.' })}
                    ${field({ id:'cfg-city', label:'Ciudad de residencia', required:true, icon:'map-pin', value:'Armenia, Quindío', ac:'ciudades' })}
                    ${field({ id:'cfg-birth', label:'Fecha de nacimiento', optional:true, icon:'calendar', placeholder:'DD/MM/AAAA', value:'14/03/1997',
                      hint:'No es obligatoria y no se muestra en tu perfil público.' })}
                  </div>

                  ${field({ id:'cfg-headline', label:'Título profesional', required:true, value:'Desarrolladora Full Stack · React & Node.js',
                    maxlength:90, hint:'Aparece debajo de tu nombre. Sé específica y breve.' })}

                  ${field({ id:'cfg-bio', label:'Sobre mí', type:'textarea', optional:true, maxlength:400, value:'Desarrolladora con 4 años de experiencia construyendo aplicaciones web accesibles y medibles.', tall:false,
                    hint:'Cuéntales a las empresas qué te motiva y cómo trabajas.' })}

                  <div class="grid grid--2">
                    ${select({ id:'cfg-lang', label:'Idioma de la interfaz', options:['Español (Colombia)','Español (Latinoamérica)','Inglés'], value:'Español (Colombia)' })}
                    ${select({ id:'cfg-tz', label:'Zona horaria', options:['(GMT-5) Bogotá, Lima, Quito','(GMT-3) Buenos Aires','(GMT-6) Ciudad de México'], value:'(GMT-5) Bogotá, Lima, Quito' })}
                  </div>

                  <div class="card__foot" style="margin:2px -20px -20px;border-radius:0 0 var(--radius) var(--radius)">
                    <span class="tiny muted row gap-2">${ic('check')}Última actualización: hoy, 9:02 a. m.</span>
                    <div class="grow"></div>
                    <button class="btn btn--secondary" type="button" data-demo="toast-info">Cancelar</button>
                    <button class="btn btn--primary" data-demo="save-settings">${ic('check')}Guardar cambios</button>
                  </div>
                </form>
              </div>
            </div>

            <div class="grid grid--2">
              <div class="card">
                <div class="card__head"><h2 class="card__title">Notificaciones</h2></div>
                <div class="card__body" style="padding-top:6px;padding-bottom:6px">
                  ${toggleRow({ title:'Nuevas vacantes recomendadas', desc:'Resumen diario según tu perfil.', on:true })}
                  ${toggleRow({ title:'Cambios en mis postulaciones', desc:'Cuando una empresa avanza tu proceso.', on:true })}
                  ${toggleRow({ title:'Recordatorios de entrevistas', desc:'24 horas y 1 hora antes.', on:true })}
                  ${toggleRow({ title:'Novedades de Talenta', desc:'Consejos y productos nuevos.', on:false })}
                </div>
              </div>

              <div class="card">
                <div class="card__head"><h2 class="card__title">Seguridad</h2><div class="grow"></div>${badge('Protegida', 'ok')}</div>
                <div class="card__body" style="display:flex;flex-direction:column;gap:11px">
                  <div class="split"><div><div class="small strong">Contraseña</div><div class="tiny muted">Actualizada hace 3 meses</div></div><button class="btn btn--secondary btn--sm" data-demo="toast-info">Cambiar</button></div>
                  <div class="divider" style="margin:0"></div>
                  <div class="split"><div><div class="small strong">Verificación en dos pasos</div><div class="tiny muted">Protege tu cuenta con un código adicional</div></div>${badge('Recomendado', 'warn')}</div>
                  <div class="divider" style="margin:0"></div>
                  <div class="split"><div><div class="small strong">Sesiones activas</div><div class="tiny muted">2 dispositivos · Bogotá y Armenia</div></div><button class="btn btn--ghost btn--sm" data-demo="toast-info">Gestionar</button></div>
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
  id:'E05', title:'Privacidad y datos', group:'E',
  purpose:'Control de visibilidad y consentimientos en un solo lugar. Cada opción explica su consecuencia y las acciones sensibles se separan del resto.',
  cta:'«Guardar preferencias» — pie del formulario de privacidad.',
  patterns:['Formulario','Feedback','Progreso','Catálogo'],
  gestalt:['Proximidad','Región común','Figura-fondo','Punto focal'],
  reqs:['RQ-02','RQ-07','RQ-15','RQ-16','RQ-19','RQ-31','RQ-34'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'' })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:16px">
        ${pageHead({ eyebrow:'Tu cuenta', title:'Privacidad y datos',
          sub:'Tú decides qué información comparten las empresas y cómo usamos tus datos.',
          actions: btn('Centro de ayuda', { kind:'secondary', icon:'help', go:'E06' }) })}

        <div class="grid" style="grid-template-columns:minmax(0,1fr) 348px;align-items:start;gap:18px">
          <div class="stack gap-4">
            <div class="card" data-gestalt="Región común">
              <div class="card__head">
                <div class="grow">
                  <h2 class="card__title">Visibilidad del perfil</h2>
                  <p class="tiny muted" style="margin-top:2px">Puedes cambiar esto cuando quieras. Se aplica de inmediato.</p>
                </div>
                ${badge('Visible', 'ok', true)}
              </div>
              <div class="card__body">
                <form class="form" data-validate data-success-go="E05" data-form-name="Preferencias de privacidad" novalidate>
                  <div class="field" data-field>
                    <span class="field__label">¿Quién puede ver tu perfil? <span class="req">*</span></span>
                    <div class="stack" style="gap:9px">
                      ${choice({ name:'privacy', value:'verified', title:'Solo empresas verificadas', desc:'Empresas con identidad y datos confirmados por Talenta.', checked:true, required:true })}
                      ${choice({ name:'privacy', value:'all', title:'Todas las empresas registradas', desc:'Más oportunidades, pero menos control sobre quién te contacta.' })}
                      ${choice({ name:'privacy', value:'hidden', title:'Perfil oculto', desc:'Solo las empresas a las que te postules verán tu información.' })}
                    </div>
                    <p class="field__msg" data-msg aria-live="polite"></p>
                  </div>

                  <div class="divider" style="margin:2px 0"></div>

                  <fieldset class="fieldset" data-gestalt="Proximidad">
                    <legend class="fieldset__legend">Qué información compartes</legend>
                    ${toggleRow({ title:'Mostrar mi expectativa salarial', desc:'Ayuda a filtrar procesos alineados con lo que buscas.', on:true })}
                    ${toggleRow({ title:'Mostrar mi teléfono', desc:'Solo se revela después de confirmar una entrevista.', on:false })}
                    ${toggleRow({ title:'Mostrar mi disponibilidad inmediata', desc:'Aparece como etiqueta en tu perfil.', on:true })}
                    ${toggleRow({ title:'Aparecer en búsquedas de empresas', desc:'Si lo desactivas, solo te verán al postularte.', on:true })}
                  </fieldset>

                  <div class="divider" style="margin:2px 0"></div>

                  <fieldset class="fieldset">
                    <legend class="fieldset__legend">Consentimientos</legend>
                    ${check({ id:'prv-data', checked:true, label:'Autorizo el tratamiento de mis datos para procesos de selección. <span class="dim">(obligatorio para postularte)</span>' })}
                    ${check({ id:'prv-marketing', label:'Quiero recibir novedades, consejos y promociones de Talenta. <span class="dim">(opcional)</span>' })}
                    ${check({ id:'prv-analytics', checked:true, label:'Permitir análisis anónimos para mejorar las recomendaciones. <span class="dim">(opcional)</span>' })}
                  </fieldset>

                  <div class="card__foot" style="margin:2px -20px -20px;border-radius:0 0 var(--radius) var(--radius)">
                    <span class="tiny muted">Los cambios se guardan de forma segura.</span>
                    <div class="grow"></div>
                    <button class="btn btn--secondary" type="button" data-demo="toast-info">Descartar</button>
                    <button class="btn btn--primary" data-demo="save-settings">${ic('check')}Guardar preferencias</button>
                  </div>
                </form>
              </div>
            </div>

            <div class="card">
              <div class="card__head"><h2 class="card__title">Tus datos</h2><div class="grow"></div><span class="tiny muted">Ley 1581 de 2012</span></div>
              <div class="card__body" style="display:flex;flex-direction:column;gap:12px">
                <div class="split">
                  <div class="row gap-3">
                    <span class="kpi__icon" style="width:38px;height:38px;flex-basis:38px">${ic('download')}</span>
                    <div><div class="small strong">Descargar mis datos</div><div class="tiny muted">Copia de tu perfil, postulaciones y mensajes en formato JSON.</div></div>
                  </div>
                  ${btn('Solicitar copia', { kind:'secondary', size:'sm', demo:'download-data' })}
                </div>
                <div class="divider" style="margin:0"></div>
                <div class="split">
                  <div class="row gap-3">
                    <span class="kpi__icon" style="width:38px;height:38px;flex-basis:38px">${ic('refresh')}</span>
                    <div><div class="small strong">Historial de consentimientos</div><div class="tiny muted">Consulta cuándo aceptaste cada política.</div></div>
                  </div>
                  ${btn('Ver historial', { kind:'secondary', size:'sm', demo:'toast-info' })}
                </div>
              </div>
            </div>

            <div class="card card--soft">
              <div class="card__body" style="padding:16px">
                <div class="split" style="align-items:flex-start">
                  <div>
                    <div class="panel__title" style="color:var(--bad)">Zona sensible</div>
                    <p class="tiny muted" style="line-height:1.55;max-width:520px">Si eliminas tu cuenta, borraremos tu perfil, postulaciones y mensajes. Esta acción no se puede deshacer.</p>
                  </div>
                  <button class="btn btn--danger btn--sm" data-go="E07">${ic('trash')}Eliminar cuenta</button>
                </div>
              </div>
            </div>
          </div>

          <aside class="stack gap-4">
            <div class="card" data-gestalt="Figura-fondo">
              <div class="card__head"><h2 class="card__title">Así te ven las empresas</h2><div class="grow"></div>${badge('Vista previa', 'neutral')}</div>
              <div class="card__body" style="display:flex;flex-direction:column;gap:11px">
                <div class="row gap-3">
                  ${avatar('VR', { size:'lg' })}
                  <div class="grow"><div class="small strong">Valentina Ríos</div><div class="tiny muted">Desarrolladora Full Stack</div></div>
                  ${badge('Verificada', 'ok')}
                </div>
                <div class="panel" style="padding:11px">
                  <div class="tiny dim">Visible para</div>
                  <div class="small strong">Empresas verificadas</div>
                  <div class="tiny muted mt-1">42 empresas pueden encontrarte</div>
                </div>
                <dl class="meta-list">
                  ${metaRow('target', 'Salario', 'Visible')}
                  ${metaRow('phone', 'Teléfono', 'Oculto hasta entrevista')}
                  ${metaRow('map-pin', 'Ciudad', 'Armenia, Quindío')}
                  ${metaRow('briefcase', 'Disponibilidad', 'Inmediata')}
                </dl>
                ${btn('Abrir vista previa', { kind:'secondary', block:true, size:'sm', icon:'external', demo:'toast-info' })}
              </div>
            </div>

            <div class="card">
              <div class="card__head"><h2 class="card__title">Resumen de privacidad</h2></div>
              <div class="card__body" style="display:flex;flex-direction:column;gap:11px">
                <div class="progress-head"><span class="progress-head__label">Datos protegidos</span><span class="progress-head__value">100%</span></div>
                ${progress({ value:100, tone:'ok' })}
                <div class="tiny muted">Cumples con los requisitos de privacidad para postularte.</div>
                <div class="divider" style="margin:0"></div>
                <div class="row gap-2 tiny muted">${ic('shield')}Conexión cifrada y datos alojados en Colombia.</div>
                <a class="link small" data-go="E06">Leer la política de tratamiento</a>
              </div>
            </div>

            <div class="panel panel--warn">
              <div class="row gap-2" style="margin-bottom:5px">${ic('alert')}<span class="h4">Ten en cuenta</span></div>
              <p class="tiny muted" style="line-height:1.55">Ocultar tu perfil no elimina las postulaciones ya enviadas. Esas empresas conservarán tu información por el tiempo del proceso.</p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'E06', title:'Centro de ayuda', group:'E',
  purpose:'Soporte autoservicio con búsqueda, preguntas frecuentes y contacto. El formulario de soporte usa los mismos estándares de etiquetas, ayuda y validación.',
  cta:'«Enviar solicitud» — pie del formulario de contacto.',
  patterns:['Formulario','Validación','Feedback','Catálogo','Autocompletado'],
  gestalt:['Proximidad','Región común','Similitud','Cierre'],
  reqs:['RQ-01','RQ-02','RQ-03','RQ-04','RQ-07','RQ-13','RQ-28'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'' })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:16px">
        ${pageHead({ eyebrow:'Estamos para ayudarte', title:'Centro de ayuda',
          sub:'Busca una respuesta o escríbenos. Respondemos en menos de 24 horas hábiles.',
          actions: btn('Mis postulaciones', { kind:'secondary', icon:'briefcase', go:'D05' }) })}

        <div class="card" style="padding:10px 12px">
          <label class="hsearch" style="width:100%;height:42px;border:1px solid var(--line-strong);border-radius:9px;padding:0 12px">
            ${ic('search')}<input type="search" placeholder="Busca por tema, palabra clave o pregunta…" aria-label="Buscar en el centro de ayuda">
            <kbd>⌘K</kbd>
          </label>
        </div>

        <div class="grid" style="grid-template-columns:218px minmax(0,1fr) 320px;align-items:start;gap:16px">
          <aside class="card" data-gestalt="Región común">
            <div class="card__head"><h2 class="card__title">Temas</h2></div>
            <div class="card__body" style="padding:9px">
              <button class="sitem is-active" style="width:100%;text-align:left;padding:8px"><span class="sitem__body"><span class="sitem__title">Primeros pasos</span></span>${ic('play')}</button>
              <button class="sitem" style="width:100%;text-align:left;padding:8px"><span class="sitem__body"><span class="sitem__title">Cuenta y acceso</span></span>${ic('lock')}</button>
              <button class="sitem" style="width:100%;text-align:left;padding:8px"><span class="sitem__body"><span class="sitem__title">Perfil y CV</span></span>${ic('user')}</button>
              <button class="sitem" style="width:100%;text-align:left;padding:8px"><span class="sitem__body"><span class="sitem__title">Postulaciones</span></span>${ic('briefcase')}</button>
              <button class="sitem" style="width:100%;text-align:left;padding:8px"><span class="sitem__body"><span class="sitem__title">Entrevistas</span></span>${ic('calendar')}</button>
              <button class="sitem" style="width:100%;text-align:left;padding:8px"><span class="sitem__body"><span class="sitem__title">Privacidad</span></span>${ic('shield')}</button>
              <button class="sitem" style="width:100%;text-align:left;padding:8px"><span class="sitem__body"><span class="sitem__title">Empresas</span></span>${ic('building')}</button>
            </div>
            <div class="card__foot" style="justify-content:flex-start"><span class="tiny muted">7 temas · 34 artículos</span></div>
          </aside>

          <div class="stack gap-4">
            <div class="card" data-gestalt="Cierre">
              <div class="card__head">
                <div class="grow">
                  <h2 class="card__title">Preguntas frecuentes</h2>
                  <p class="tiny muted" style="margin-top:2px">Las dudas más comunes de las personas que buscan empleo.</p>
                </div>
                <a class="tiny link" data-demo="toast-info">Ver todas</a>
              </div>
              <div class="card__body" style="padding:10px 16px 16px">
                ${accordion([
                  { q:'¿Postularme tiene algún costo?', a:'No. Talenta es gratuita para las personas que buscan empleo. Ninguna empresa puede cobrarte por postularte, hacer pruebas o agendar entrevistas. Si recibes una solicitud de pago, repórtala desde el botón «Reportar».' },
                  { q:'¿Cómo sé en qué etapa va mi postulación?', a:'En «Mis postulaciones» verás una línea de tiempo con cada cambio de etapa. También recibirás un correo y una notificación cuando la empresa avance tu proceso.' },
                  { q:'¿Puedo retirar una postulación?', a:'Sí. Abre el detalle de la postulación y usa «Retirar postulación» en la zona sensible. La empresa dejará de ver tu perfil en ese proceso, pero conservará el registro por motivos legales.' },
                  { q:'¿Quién puede ver mi hoja de vida?', a:'Por defecto, solo las empresas verificadas y aquellas a las que te postulas. Puedes cambiar la visibilidad en Privacidad y datos, o pausar tu perfil sin eliminarlo.' },
                  { q:'¿Qué hago si no puedo asistir a una entrevista?', a:'Ingresa a «Entrevistas», abre la entrevista y elige «Reprogramar». También puedes escribirle a la persona de contacto desde el chat. Avisa con al menos 24 horas de anticipación.' },
                  { q:'¿Cómo elimino mi cuenta?', a:'Ve a Privacidad y datos → Eliminar cuenta. Te pediremos una confirmación adicional y tu contraseña. La eliminación borra tu perfil, postulaciones y mensajes.' }
                ], 0)}
              </div>
            </div>

            <div class="card">
              <div class="card__head"><h2 class="card__title">Artículos populares</h2><div class="grow"></div><span class="tiny muted">Actualizados esta semana</span></div>
              <div class="card__body" style="padding:9px 16px">
                ${[
                  ['file','Cómo crear una hoja de vida que destaque','Perfil y CV · 4 min de lectura'],
                  ['target','5 consejos para preparar una entrevista virtual','Entrevistas · 6 min de lectura'],
                  ['briefcase','Qué significa cada estado de tu postulación','Postulaciones · 3 min de lectura'],
                  ['shield','Cómo controlar quién ve tu perfil','Privacidad · 5 min de lectura']
                ].map(function(a){
                  return '<button class="srow" style="width:100%;text-align:left;border-radius:8px;padding:10px" data-demo="toast-info">' +
                    '<span class="kpi__icon" style="width:32px;height:32px;flex-basis:32px">' + ic(a[0]) + '</span>' +
                    '<div class="srow__main"><div class="srow__title" style="font-size:12.5px">' + a[1] + '</div><div class="srow__sub">' + a[2] + '</div></div>' +
                    ic('chevron-right') + '</button>';
                }).join('')}
              </div>
            </div>
          </div>

          <aside class="stack gap-4">
            <div class="card" data-gestalt="Punto focal">
              <div class="card__head"><h2 class="card__title">Escríbenos</h2><div class="grow"></div>${badge('Respuesta < 24 h', 'ok')}</div>
              <div class="card__body">
                <form class="form" data-validate data-success-go="E06" data-form-name="Solicitud de soporte" novalidate style="gap:13px">
                  ${formLegend('Los campos con * son obligatorios.')}
                  ${select({ id:'help-topic', label:'Motivo', required:true, options:['Problema con mi cuenta','Postulación o proceso','Entrevistas','Privacidad y datos','Reportar una vacante','Otro'], placeholder:'Selecciona un motivo' })}
                  ${field({ id:'help-email', label:'Correo de contacto', type:'email', required:true, icon:'mail', value:'valentina.rios@correo.com', autocomplete:'email', hint:'Te responderemos a este correo.' })}
                  ${field({ id:'help-msg', label:'Cuéntanos qué pasó', type:'textarea', required:true, maxlength:600, tall:true,
                    placeholder:'Describe el problema con el mayor detalle posible…', hint:'Incluye fechas, nombres de empresas o números de postulación.' })}
                  <div class="field" data-field>
                    <span class="field__label">Adjuntar captura <span class="opt">(opcional)</span></span>
                    ${dropzone({ title:'Arrastra una imagen aquí', text:'PNG o JPG · máximo 5 MB', btn:'<button class="btn btn--secondary btn--sm mt-2" data-demo="upload">' + ic('upload') + 'Elegir archivo</button>' })}
                  </div>
                  <button class="btn btn--primary btn--block" data-demo="send-ticket">${ic('send')}Enviar solicitud</button>
                </form>
              </div>
            </div>

            <div class="card card--soft">
              <div class="card__body" style="padding:14px 16px">
                <div class="panel__title">Estado del servicio</div>
                <div class="split" style="padding:3px 0"><span class="tiny muted">Plataforma web</span>${badge('Operativa', 'ok', true)}</div>
                <div class="split" style="padding:3px 0"><span class="tiny muted">Notificaciones</span>${badge('Operativa', 'ok', true)}</div>
                <div class="split" style="padding:3px 0"><span class="tiny muted">Videollamadas</span>${badge('Mantenimiento', 'warn', true)}</div>
                <div class="divider" style="margin:9px 0"></div>
                <div class="tiny muted">Última actualización: hoy, 8:30 a. m.</div>
              </div>
            </div>

            <div class="panel panel--blue">
              <div class="row gap-2" style="margin-bottom:5px">${ic('message')}<span class="h4">Chat en vivo</span></div>
              <p class="tiny muted" style="line-height:1.55">Lunes a viernes, 8:00 a. m. – 6:00 p. m. (GMT-5).</p>
              <button class="btn btn--secondary btn--sm mt-2" data-demo="toast-info">${ic('message')}Iniciar chat</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'E07', title:'Eliminar cuenta · confirmación', group:'E',
  purpose:'Confirmación de una acción destructiva: consecuencias explícitas, motivo, contraseña y confirmación escrita. La salida segura está siempre disponible.',
  cta:'«Eliminar mi cuenta» — acción destructiva alineada a la derecha; «Cancelar» como salida.',
  patterns:['Formulario','Validación','Feedback'],
  gestalt:['Cierre','Punto focal','Figura-fondo','Proximidad'],
  reqs:['RQ-02','RQ-03','RQ-04','RQ-09','RQ-31','RQ-34'],
  html: () => `
  <div class="app">
    ${appHeader({ active:'' })}
    <div class="page">
      <div class="container" style="display:flex;flex-direction:column;gap:16px">
        ${pageHead({ eyebrow:'Tu cuenta', title:'Privacidad y datos',
          sub:'Tú decides qué información comparten las empresas y cómo usamos tus datos.',
          actions: btn('Volver a configuración', { kind:'secondary', icon:'arrow-left', go:'E04' }) })}

        <div class="grid" style="grid-template-columns:minmax(0,1fr) 348px;align-items:start;gap:18px">
          <div class="card">
            <div class="card__head"><h2 class="card__title">Visibilidad del perfil</h2><div class="grow"></div>${badge('Visible', 'ok', true)}</div>
            <div class="card__body" style="display:flex;flex-direction:column;gap:12px">
              <div class="panel" style="background:#fff">
                <div class="split">
                  <div><div class="small strong">Solo empresas verificadas</div><div class="tiny muted">42 empresas pueden encontrar tu perfil.</div></div>
                  ${badge('Seleccionado', 'ok')}
                </div>
              </div>
              <div class="panel" style="background:#fff;opacity:.7">
                <div class="split">
                  <div><div class="small strong">Todas las empresas registradas</div><div class="tiny muted">Más oportunidades, menos control.</div></div>
                  ${badge('No seleccionado', 'neutral')}
                </div>
              </div>
              <div class="panel" style="background:#fff;opacity:.7">
                <div class="split">
                  <div><div class="small strong">Perfil oculto</div><div class="tiny muted">Solo te verán al postularte.</div></div>
                  ${badge('No seleccionado', 'neutral')}
                </div>
              </div>
            </div>
          </div>
          <div class="card card--soft">
            <div class="card__body" style="padding:16px">
              <div class="panel__title" style="color:var(--bad)">Zona sensible</div>
              <p class="tiny muted" style="line-height:1.55">La eliminación de la cuenta es permanente y borra tu historial.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    ${dialog({
      icon:'trash',
      title:'Eliminar mi cuenta',
      sub:'Esta acción es permanente y no se puede deshacer.',
      body: `
        ${alert('bad', 'Se eliminará toda tu información', 'Tu perfil, hoja de vida, postulaciones, mensajes, alertas y preferencias se borrarán de Talenta.')}
        <form class="form" data-validate data-form-name="Eliminar cuenta" novalidate style="gap:12px">
          <div class="stack gap-1">
            <span class="tiny muted row gap-2">${ic('x')}Tu perfil dejará de ser visible para empresas.</span>
            <span class="tiny muted row gap-2">${ic('x')}Perderás el acceso a tus procesos activos.</span>
            <span class="tiny muted row gap-2">${ic('x')}No podrás recuperar tu historial de postulaciones.</span>
          </div>
          ${select({ id:'del-reason', label:'¿Por qué te vas?', required:true,
            options:['Encontré empleo','No recibí respuestas','La plataforma no era para mí','Problemas de privacidad','Otro motivo'], placeholder:'Selecciona un motivo' })}
          ${field({ id:'del-pass', label:'Confirma tu contraseña', type:'password', required:true, autocomplete:'current-password',
            placeholder:'Tu contraseña actual', hint:'Verificamos tu identidad antes de eliminar la cuenta.',
            suffix:'<button type="button" class="input-suffix" data-demo="toggle-pass" aria-label="Mostrar contraseña">' + ic('eye') + '</button>' })}
          ${field({ id:'del-word', label:'Escribe ELIMINAR para confirmar', required:true, placeholder:'ELIMINAR',
            hint:'Debe escribirse en mayúsculas y sin espacios.' })}
          <div class="field" data-field>
            ${check({ id:'del-consent', required:true, label:'Entiendo que esta acción es permanente y acepto perder mi información. <span class="req">*</span>' })}
            <p class="field__msg" data-msg aria-live="polite"></p>
          </div>
        </form>`,
      cancel: btn('Cancelar', { kind:'secondary', demo:'close-modal' }),
      confirm: btn('Eliminar mi cuenta', { kind:'danger-solid', demo:'confirm-delete' })
    })}
  </div>`
});
