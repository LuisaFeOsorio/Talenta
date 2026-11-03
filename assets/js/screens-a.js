/* =========================================================
   Pantallas A · Acceso y registro
   ========================================================= */

defineScreen({
  id:'A01', title:'Iniciar sesión', group:'A',
  purpose:'Punto de entrada para usuarios con cuenta. Formulario corto, un solo CTA primario y recuperación de contraseña visible.',
  cta:'«Ingresar» — columna del formulario, ancho completo, debajo de los campos.',
  patterns:['Formulario','Validación','Loader','Feedback','Autocompletado'],
  gestalt:['Figura-fondo','Proximidad','Cierre','Punto focal'],
  reqs:['RQ-01','RQ-02','RQ-04','RQ-10','RQ-16'],
  html: () => `
  <div class="app">
    <div class="auth">
      <aside class="auth__aside" data-gestalt="Figura-fondo">
        <div class="brand">
          <span class="brand__mark">T</span>
          <span class="brand__text"><strong>Talenta</strong><small>Bolsa de empleo</small></span>
        </div>
        <div class="auth__pitch">
          <span class="eyebrow">Empleo con propósito</span>
          <h1 class="h1">Tu próximo empleo empieza con una búsqueda clara.</h1>
          <p class="small muted" style="line-height:1.6">Conectamos talento del Quindío y de Colombia con empresas que publican procesos transparentes y responden a cada postulación.</p>
          <ul class="auth__list">
            <li>${ic('check')}<span><b>248 vacantes activas</b> verificadas esta semana.</span></li>
            <li>${ic('check')}<span>Seguimiento del proceso en <b>4 etapas visibles</b>.</span></li>
            <li>${ic('check')}<span>Alertas de empleo ajustadas a tu perfil.</span></li>
          </ul>
        </div>
        <div class="auth__quote" data-gestalt="Cierre">
          <p>«Encontré mi primer empleo en tres semanas. Lo que más me ayudó fue ver en qué etapa iba cada postulación.»</p>
          <div class="auth__person">
            ${avatar('LM', { size:'sm' })}
            <div><strong>Laura Mejía</strong><small>Analista de datos · DataAndina</small></div>
          </div>
        </div>
      </aside>

      <main class="auth__main">
        <div class="auth__card">
          <div class="auth__head">
            <span class="eyebrow">Bienvenido de nuevo</span>
            <h2 class="h1" style="font-size:25px">Inicia sesión</h2>
            <p class="small muted">Usa el correo con el que creaste tu cuenta.</p>
          </div>

          <form class="form" data-validate data-success-go="C01" data-form-name="Iniciar sesión" novalidate data-gestalt="Proximidad">
            ${field({ id:'login-email', label:'Correo electrónico', type:'email', required:true, icon:'mail',
              value:'valentina.rios@correo.com', autocomplete:'email', valid:true,
              placeholder:'nombre@correo.com', hint:'Lo usamos para identificarte y avisarte de tus procesos.' })}
            ${field({ id:'login-pass', label:'Contraseña', type:'password', required:true,
              value:'Valentina2026', autocomplete:'current-password', placeholder:'Tu contraseña',
              suffix:`<button type="button" class="input-suffix" data-demo="toggle-pass" aria-label="Mostrar contraseña">${ic('eye')}</button>` })}

            <div class="split" style="margin-top:-4px">
              ${check({ id:'login-remember', label:'Mantener sesión iniciada', checked:true })}
              <a class="small link" data-go="A05">¿Olvidaste tu contraseña?</a>
            </div>

            <div data-gestalt="Punto focal">
              ${btn('Ingresar', { kind:'primary', block:true, demo:'login' })}
            </div>

            <div class="auth__divider">o continúa con</div>
            ${btn('Continuar con Google', { kind:'secondary', block:true, icon:'globe', demo:'toast-info' })}

            <p class="auth__switch">¿No tienes cuenta? <a data-go="A02">Crear una cuenta gratis</a></p>
          </form>
        </div>
        <p class="auth__legal">Al ingresar aceptas los Términos de uso y la Política de tratamiento de datos personales de Talenta.</p>
      </main>
    </div>
  </div>`
});

defineScreen({
  id:'A02', title:'Crear cuenta · paso 1 de 3', group:'A',
  purpose:'Registro dividido en pasos con barra de progreso. Agrupa los campos por afinidad y explica el requisito de contraseña antes de que el usuario falle.',
  cta:'«Crear cuenta y continuar» — pie de la tarjeta, alineado a la derecha.',
  patterns:['Formulario','Validación','Progreso','Autocompletado','Feedback'],
  gestalt:['Proximidad','Continuidad','Región común','Similitud'],
  reqs:['RQ-01','RQ-02','RQ-03','RQ-04','RQ-05','RQ-14'],
  html: () => `
  <div class="app">
    ${onboardHeader({ saveText:'Borrador guardado automáticamente' })}
    <div class="onboard__progress" data-gestalt="Continuidad">
      ${stepper(['Cuenta','Verificar correo','Tipo de cuenta'], 1)}
    </div>
    <div class="onboard__body">
      <div class="onboard__grid">
        <div class="card">
          <div class="card__head">
            <div class="grow">
              <h2 class="h2">Crea tu cuenta</h2>
              <p class="tiny muted" style="margin-top:2px">Paso 1 de 3 · Tarda menos de 2 minutos.</p>
            </div>
            ${badge('33% completado', 'neutral')}
          </div>
          <div class="card__body">
            <form class="form" data-validate data-success-go="A03" data-form-name="Crear cuenta" novalidate>
              ${formLegend()}
              <div class="grid grid--2" data-gestalt="Proximidad">
                ${field({ id:'reg-name', label:'Nombres', required:true, placeholder:'Valentina', autocomplete:'given-name' })}
                ${field({ id:'reg-last', label:'Apellidos', required:true, placeholder:'Ríos Marín', autocomplete:'family-name' })}
              </div>
              ${field({ id:'reg-email', label:'Correo electrónico', type:'email', required:true, icon:'mail',
                placeholder:'nombre@correo.com', autocomplete:'email',
                hint:'Te enviaremos un código para verificar que es tuyo.' })}
              <div class="grid grid--2">
                ${field({ id:'reg-pass', label:'Contraseña', type:'password', required:true,
                  value:'Valentina2026', placeholder:'Crea una contraseña segura', autocomplete:'new-password',
                  suffix:`<button type="button" class="input-suffix" data-demo="toggle-pass" aria-label="Mostrar contraseña">${ic('eye')}</button>` })}
                ${field({ id:'reg-pass2', label:'Confirmar contraseña', type:'password', required:true,
                  value:'Valentina2026', placeholder:'Repite la contraseña', autocomplete:'new-password', valid:true,
                  okText:'Las contraseñas coinciden.' })}
              </div>
              <div class="meter meter--strong" data-meter aria-hidden="true">
                <div class="meter__bars">
                  <span class="meter__bar is-on"><i style="width:100%"></i></span>
                  <span class="meter__bar is-on"><i style="width:100%"></i></span>
                  <span class="meter__bar is-on"><i style="width:100%"></i></span>
                  <span class="meter__bar is-on"><i style="width:100%"></i></span>
                </div>
                <div class="meter__label">Seguridad de la contraseña: <b>Fuerte</b> · 12 caracteres, mayúscula y número.</div>
              </div>

              <div class="field" data-field data-gestalt="Región común">
                <div class="stack" style="gap:10px">
                  ${check({ id:'reg-terms', required:true,
                    label:'Acepto los <a href="#">Términos de uso</a> y autorizo el tratamiento de mis datos personales según la <a href="#">política de privacidad</a>.' })}
                  ${check({ id:'reg-news', checked:true,
                    label:'Quiero recibir alertas de empleo y novedades de Talenta. <span class="dim">(opcional)</span>' })}
                </div>
                <p class="field__msg" data-msg aria-live="polite"></p>
              </div>
            </form>
          </div>
          <div class="card__foot">
            <span class="tiny muted">¿Ya tienes cuenta? <a class="link" data-go="A01">Inicia sesión</a></span>
            <div class="grow"></div>
            ${btn('Crear cuenta y continuar', { kind:'primary', iconRight:'arrow-right', demo:'validate-go', form:'A02' })}
          </div>
        </div>

        <aside class="onboard__aside">
          <div class="card progress-card" data-gestalt="Región común">
            ${ring(33, { size:58, label:'Completo' })}
            <div>
              <div class="strong small">Tu registro</div>
              <div class="tiny muted">Paso 1 de 3</div>
            </div>
          </div>
          <div class="card">
            <div class="card__body" style="padding:16px">
              <div class="panel__title">Siguientes pasos</div>
              <div class="checklist">
                <div class="checklist__item is-done">${ic('check-circle')}<span>Cuenta creada</span></div>
                <div class="checklist__item is-current">${ic('clock')}<span>Verificar tu correo</span></div>
                <div class="checklist__item">${ic('info')}<span>Elegir tipo de cuenta</span></div>
                <div class="checklist__item">${ic('info')}<span>Completar tu perfil</span></div>
              </div>
            </div>
          </div>
          <div class="card card--accent">
            <div class="card__body" style="padding:15px">
              <div class="row gap-2" style="margin-bottom:6px">${ic('shield')}<span class="h4">Tus datos están protegidos</span></div>
              <p class="tiny muted" style="line-height:1.55">Solo las empresas a las que te postules verán tu hoja de vida. Puedes ocultar tu perfil cuando quieras.</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'A03', title:'Verificar correo', group:'A',
  purpose:'Confirmación del correo con código de 6 dígitos. Feedback inmediato, reenvío con temporizador y opción de corregir el correo.',
  cta:'«Verificar código» — bajo el código, ancho completo.',
  patterns:['Formulario','Validación','Loader','Progreso','Feedback'],
  gestalt:['Cierre','Proximidad','Punto focal'],
  reqs:['RQ-02','RQ-04','RQ-09','RQ-11'],
  html: () => `
  <div class="app">
    ${onboardHeader({ saveText:'Paso 2 de 3' })}
    <div class="onboard__progress">
      ${stepper(['Cuenta','Verificar correo','Tipo de cuenta'], 2)}
    </div>
    <div class="onboard__body" style="display:flex;justify-content:center">
      <div style="width:100%;max-width:520px;display:flex;flex-direction:column;gap:16px;padding-top:8px">
        <div class="card">
          <div class="card__body" style="padding:30px 32px;display:flex;flex-direction:column;gap:20px;align-items:center;text-align:center">
            <span style="width:58px;height:58px;border-radius:16px;background:var(--blue-50);color:var(--blue-600);display:grid;place-items:center" data-gestalt="Punto focal">${ic('mail')}</span>
            <div class="stack" style="gap:6px">
              <h1 class="h2">Revisa tu correo</h1>
              <p class="small muted" style="line-height:1.6">Enviamos un código de 6 dígitos a<br><b class="strong">valentina.rios@correo.com</b></p>
              <a class="small link" data-go="A02">Cambiar correo</a>
            </div>

            <form class="form" data-validate data-success-go="A04" data-form-name="Verificar código" style="width:100%;gap:16px" novalidate>
              <div class="otp" data-otp data-gestalt="Proximidad" aria-label="Código de verificación de 6 dígitos">
                <input type="text" inputmode="numeric" maxlength="1" value="4" class="is-filled" aria-label="Dígito 1">
                <input type="text" inputmode="numeric" maxlength="1" value="8" class="is-filled" aria-label="Dígito 2">
                <input type="text" inputmode="numeric" maxlength="1" value="2" class="is-filled" aria-label="Dígito 3">
                <input type="text" inputmode="numeric" maxlength="1" value="9" class="is-filled" aria-label="Dígito 4">
                <input type="text" inputmode="numeric" maxlength="1" value="1" class="is-filled" aria-label="Dígito 5">
                <input type="text" inputmode="numeric" maxlength="1" value="6" class="is-filled" aria-label="Dígito 6">
              </div>
              <p class="field__msg field__msg--ok is-on" aria-live="polite">${ic('check')}<span>Código completo. Verifica para continuar.</span></p>

              <div class="split" style="background:var(--bg-soft);border:1px solid var(--line);border-radius:9px;padding:10px 12px">
                <span class="tiny muted">¿No recibiste el código?</span>
                <button class="btn btn--ghost btn--sm" data-demo="resend">${ic('refresh')}Reenviar en 00:42</button>
              </div>

              ${btn('Verificar código', { kind:'primary', block:true, demo:'verify' })}
            </form>

            <div class="alert alert--warn" style="text-align:left;width:100%">
              ${ic('alert')}<div class="alert__body"><b>Revisa la carpeta de spam.</b> Si en 5 minutos no llega, puedes reenviarlo o escribir a soporte.</div>
            </div>
          </div>
        </div>
        <p class="center tiny dim">¿Problemas con la verificación? <a class="link" data-go="E06">Contacta a soporte</a></p>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'A04', title:'Elegir tipo de cuenta', group:'A',
  purpose:'Decisión única entre candidato y empresa. Dos opciones comparables, una preseleccionada y consecuencias explicadas antes de continuar.',
  cta:'«Continuar como candidato» — esquina inferior derecha.',
  patterns:['Formulario','Progreso','Feedback'],
  gestalt:['Similitud','Proximidad','Región común','Figura-fondo'],
  reqs:['RQ-03','RQ-06','RQ-13'],
  html: () => `
  <div class="app">
    ${onboardHeader({ saveText:'Paso 3 de 3' })}
    <div class="onboard__progress">
      ${stepper(['Cuenta','Verificar correo','Tipo de cuenta'], 3)}
    </div>
    <div class="onboard__body">
      <div style="max-width:920px;margin:0 auto;display:flex;flex-direction:column;gap:22px">
        <div class="stack center" style="gap:6px;align-items:center">
          <span class="eyebrow">Paso 3 de 3</span>
          <h1 class="h1">¿Cómo vas a usar Talenta?</h1>
          <p class="small muted" style="max-width:520px">Elige el tipo de cuenta. Podrás cambiarlo más adelante desde Configuración.</p>
        </div>

        <div class="grid grid--2" style="gap:18px" data-gestalt="Similitud">
          <label class="choice" style="padding:20px;align-items:flex-start;flex-direction:column;gap:12px;border-color:var(--blue-500);background:var(--blue-25);box-shadow:0 0 0 3px rgba(37,99,235,.09);position:relative">
            <span class="badge badge--ok" style="position:absolute;top:14px;right:14px">${ic('check')}Recomendado</span>
            <input type="radio" name="account-type" checked style="position:absolute;opacity:0">
            <span style="width:46px;height:46px;border-radius:12px;background:#fff;border:1px solid var(--blue-100);display:grid;place-items:center;color:var(--blue-700)">${ic('user')}</span>
            <span class="choice__text" style="gap:5px">
              <span class="h3">Soy candidato</span>
              <span class="choice__desc">Busco empleo y quiero postularme a vacantes verificadas.</span>
            </span>
            <ul class="req-list" style="width:100%;margin-top:2px">
              <li>${ic('check')}Postúlate en 3 pasos y guarda borradores.</li>
              <li>${ic('check')}Sigue el estado de cada proceso.</li>
              <li>${ic('check')}Recibe alertas según tu perfil.</li>
            </ul>
          </label>

          <label class="choice" style="padding:20px;align-items:flex-start;flex-direction:column;gap:12px">
            <input type="radio" name="account-type" style="position:absolute;opacity:0">
            <span style="width:46px;height:46px;border-radius:12px;background:var(--bg-soft);border:1px solid var(--line);display:grid;place-items:center;color:var(--ink-500)">${ic('building')}</span>
            <span class="choice__text" style="gap:5px">
              <span class="h3">Soy empresa</span>
              <span class="choice__desc">Publico vacantes y gestiono candidatos con mi equipo.</span>
            </span>
            <ul class="req-list req-list--muted" style="width:100%;margin-top:2px">
              <li>${ic('check')}Publica vacantes y recibe postulaciones.</li>
              <li>${ic('check')}Organiza candidatos en un embudo.</li>
              <li>${ic('check')}Agenda entrevistas desde la plataforma.</li>
            </ul>
          </label>
        </div>

        <div class="card card--soft">
          <div class="card__body" style="padding:13px 16px;display:flex;align-items:center;gap:10px">
            ${ic('info')}
            <p class="tiny muted" style="line-height:1.5">Al continuar como candidato te pediremos tus datos básicos para armar tu perfil. Puedes <b class="strong">guardar y salir</b> en cualquier momento.</p>
          </div>
        </div>

        <div class="split">
          ${btn('Volver', { kind:'secondary', icon:'arrow-left', go:'A03' })}
          <div class="btn-row">
            <button class="btn btn--ghost" data-go="C01">Explorar sin completar perfil</button>
            ${btn('Continuar como candidato', { kind:'primary', iconRight:'arrow-right', go:'B01' })}
          </div>
        </div>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'A05', title:'Recuperar contraseña', group:'A',
  purpose:'Flujo de recuperación con una sola pregunta. Evita revelar si el correo existe y mantiene el camino de vuelta al inicio de sesión.',
  cta:'«Enviar enlace de recuperación» — ancho completo.',
  patterns:['Formulario','Validación','Loader','Feedback'],
  gestalt:['Proximidad','Punto focal','Cierre'],
  reqs:['RQ-02','RQ-04','RQ-10','RQ-11'],
  html: () => `
  <div class="app">
    <header class="app-bar">
      <a class="brand" data-go="A01"><span class="brand__mark">T</span><span class="brand__text"><strong>Talenta</strong><small>Recuperar acceso</small></span></a>
      <div class="app-bar__spacer"></div>
      <button class="btn btn--ghost btn--sm" data-go="A01">${ic('arrow-left')}Volver a iniciar sesión</button>
    </header>
    <div class="page" style="display:grid;place-items:center">
      <div style="width:100%;max-width:430px;display:flex;flex-direction:column;gap:16px">
        <div class="card">
          <div class="card__body" style="padding:28px;display:flex;flex-direction:column;gap:20px">
            <div class="stack" style="gap:6px">
              <span class="eyebrow">Recuperar acceso</span>
              <h1 class="h1" style="font-size:24px">¿Olvidaste tu contraseña?</h1>
              <p class="small muted" style="line-height:1.6">Escribe el correo de tu cuenta y te enviaremos un enlace para crear una nueva. El enlace vence en 30 minutos.</p>
            </div>

            <form class="form" data-validate data-success-go="A06" data-form-name="Recuperar contraseña" novalidate>
              ${field({ id:'rec-email', label:'Correo electrónico', type:'email', required:true, icon:'mail',
                placeholder:'nombre@correo.com', autocomplete:'email',
                hint:'Por seguridad, no confirmamos si el correo está registrado.' })}
              ${btn('Enviar enlace de recuperación', { kind:'primary', block:true, demo:'recover' })}
              <p class="center tiny muted">¿No tienes acceso a tu correo? <a class="link" data-go="E06">Contacta a soporte</a></p>
            </form>
          </div>
        </div>
        <div class="panel panel--blue">
          <div class="row gap-2" style="margin-bottom:4px">${ic('info')}<span class="h4">Consejo de seguridad</span></div>
          <p class="tiny muted" style="line-height:1.55">Talenta nunca te pedirá tu contraseña por correo, teléfono o mensaje. Si recibes una solicitud así, repórtala.</p>
        </div>
      </div>
    </div>
  </div>`
});

defineScreen({
  id:'A06', title:'Enlace enviado', group:'A',
  purpose:'Confirmación del envío de recuperación. Repite el correo para evitar errores, ofrece reenvío con temporizador y una salida clara.',
  cta:'«Volver a iniciar sesión» — ancho completo.',
  patterns:['Feedback','Progreso','Formulario'],
  gestalt:['Cierre','Punto focal','Figura-fondo'],
  reqs:['RQ-09','RQ-11','RQ-13'],
  html: () => `
  <div class="app">
    <header class="app-bar">
      <a class="brand" data-go="A01"><span class="brand__mark">T</span><span class="brand__text"><strong>Talenta</strong><small>Recuperar acceso</small></span></a>
      <div class="app-bar__spacer"></div>
      <button class="btn btn--ghost btn--sm" data-go="E06">${ic('help')}Necesito ayuda</button>
    </header>
    <div class="page" style="display:grid;place-items:center">
      <div style="width:100%;max-width:460px;display:flex;flex-direction:column;gap:16px">
        <div class="card">
          <div class="card__body" style="padding:32px;display:flex;flex-direction:column;gap:18px;align-items:center;text-align:center">
            <span style="width:62px;height:62px;border-radius:18px;background:var(--ok-bg);color:var(--ok);display:grid;place-items:center;border:1px solid var(--ok-line)" data-gestalt="Punto focal">${ic('check-circle')}</span>
            <div class="stack" style="gap:6px">
              <h1 class="h2">Revisa tu bandeja de entrada</h1>
              <p class="small muted" style="line-height:1.6">Si <b class="strong">valentina.rios@correo.com</b> está registrado, recibirás un enlace para restablecer tu contraseña.</p>
            </div>
            <div class="alert alert--info" style="text-align:left;width:100%">
              ${ic('clock')}<div class="alert__body"><b>El enlace vence en 30 minutos.</b> Revisa también las carpetas de spam y promociones.</div>
            </div>
            <div style="width:100%;display:flex;flex-direction:column;gap:9px">
              ${btn('Volver a iniciar sesión', { kind:'primary', block:true, go:'A01' })}
              ${btn('Reenviar enlace (00:59)', { kind:'secondary', block:true, demo:'resend', icon:'refresh' })}
            </div>
          </div>
        </div>
        <div class="card card--soft">
          <div class="card__body" style="padding:14px 16px">
            <div class="panel__title">¿Escribiste mal tu correo?</div>
            <p class="tiny muted" style="line-height:1.55">Vuelve atrás y usa la dirección correcta. Si el problema continúa, <a class="link" data-go="E06">contacta a soporte</a> con tu número de documento.</p>
          </div>
        </div>
      </div>
    </div>
  </div>`
});
