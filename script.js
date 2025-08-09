document.addEventListener("DOMContentLoaded", () => {

const pronombres = [
  "yo",
  "tú",
  "él / ella",
<div class="container">
  <img src="https://yohablotuhablas.com/wp-content/uploads/2025/04/logo-yo-hablo-tu-hablas.png" alt="Logo" class="logo" />
  <h1>Practica el Presente de Indicativo</h1>
  <p class="subtitle">Escribe la forma correcta del verbo según el pronombre</p>
 
  <div class="prompt" id="prompt">(yo) ser</div>
  <input type="text" id="respuesta" placeholder="Escribe la forma correcta..."/>
  <button id="check">Comprobar</button> 
  <button id="btnMostrar">Mostrar respuesta</button>

  <div class="feedback" id="feedback"></div>
  <div class="stats" id="stats">
    ✅ Aciertos: 0 | ❌ Errores: 0 | 🔢 Precisión: 0%
  </div>

  <div class="disclaimer">
    🇪🇸 Puedes escribir con o sin tildes, con o sin ñ.<br />
  </div>
</div>



  "usted",
  "nosotros/as",
  "vosotros/as",
  "ellos / ellas",
  "ustedes"
];

const verbs = [
  { infinitivo: "hablar", conjugacion: { yo: "hablo", tú: "hablas", "él / ella": "habla", usted: "habla", "nosotros/as": "hablamos", "vosotros/as": "habláis", "ellos / ellas": "hablan", ustedes: "hablan" } },
  { infinitivo: "vivir", conjugacion: { yo: "vivo", tú: "vives", "él / ella": "vive", usted: "vive", "nosotros/as": "vivimos", "vosotros/as": "vivís", "ellos / ellas": "viven", ustedes: "viven" } },
  { infinitivo: "trabajar", conjugacion: { yo: "trabajo", tú: "trabajas", "él / ella": "trabaja", usted: "trabaja", "nosotros/as": "trabajamos", "vosotros/as": "trabajáis", "ellos / ellas": "trabajan", ustedes: "trabajan" } },
  { infinitivo: "estudiar", conjugacion: { yo: "estudio", tú: "estudias", "él / ella": "estudia", usted: "estudia", "nosotros/as": "estudiamos", "vosotros/as": "estudiáis", "ellos / ellas": "estudian", ustedes: "estudian" } },
  { infinitivo: "esperar", conjugacion: { yo: "espero", tú: "esperas", "él / ella": "espera", usted: "espera", "nosotros/as": "esperamos", "vosotros/as": "esperáis", "ellos / ellas": "esperan", ustedes: "esperan" } },
  { infinitivo: "usar", conjugacion: { yo: "uso", tú: "usas", "él / ella": "usa", usted: "usa", "nosotros/as": "usamos", "vosotros/as": "usáis", "ellos / ellas": "usan", ustedes: "usan" } },
  { infinitivo: "mirar", conjugacion: { yo: "miro", tú: "miras", "él / ella": "mira", usted: "mira", "nosotros/as": "miramos", "vosotros/as": "miráis", "ellos / ellas": "miran", ustedes: "miran" } },
  { infinitivo: "necesitar", conjugacion: { yo: "necesito", tú: "necesitas", "él / ella": "necesita", usted: "necesita", "nosotros/as": "necesitamos", "vosotros/as": "necesitáis", "ellos / ellas": "necesitan", ustedes: "necesitan" } },
  { infinitivo: "llevar", conjugacion: { yo: "llevo", tú: "llevas", "él / ella": "lleva", usted: "lleva", "nosotros/as": "llevamos", "vosotros/as": "lleváis", "ellos / ellas": "llevan", ustedes: "llevan" } },
  { infinitivo: "comer", conjugacion: { yo: "como", tú: "comes", "él / ella": "come", usted: "come", "nosotros/as": "comemos", "vosotros/as": "coméis", "ellos / ellas": "comen", ustedes: "comen" } },
  { infinitivo: "ser", conjugacion: { yo: "soy", tú: "eres", "él / ella": "es", usted: "es", "nosotros/as": "somos", "vosotros/as": "sois", "ellos / ellas": "son", ustedes: "son" } },
  { infinitivo: "estar", conjugacion: { yo: "estoy", tú: "estás", "él / ella": "está", usted: "está", "nosotros/as": "estamos", "vosotros/as": "estáis", "ellos / ellas": "están", ustedes: "están" } },
  { infinitivo: "tener", conjugacion: { yo: "tengo", tú: "tienes", "él / ella": "tiene", usted: "tiene", "nosotros/as": "tenemos", "vosotros/as": "tenéis", "ellos / ellas": "tienen", ustedes: "tienen" } },
  { infinitivo: "hacer", conjugacion: { yo: "hago", tú: "haces", "él / ella": "hace", usted: "hace", "nosotros/as": "hacemos", "vosotros/as": "hacéis", "ellos / ellas": "hacen", ustedes: "hacen" } },
  { infinitivo: "decir", conjugacion: { yo: "digo", tú: "dices", "él / ella": "dice", usted: "dice", "nosotros/as": "decimos", "vosotros/as": "decís", "ellos / ellas": "dicen", ustedes: "dicen" } },
  { infinitivo: "ir", conjugacion: { yo: "voy", tú: "vas", "él / ella": "va", usted: "va", "nosotros/as": "vamos", "vosotros/as": "vais", "ellos / ellas": "van", ustedes: "van" } },
  { infinitivo: "ver", conjugacion: { yo: "veo", tú: "ves", "él / ella": "ve", usted: "ve", "nosotros/as": "vemos", "vosotros/as": "veis", "ellos / ellas": "ven", ustedes: "ven" } },
  { infinitivo: "dar", conjugacion: { yo: "doy", tú: "das", "él / ella": "da", usted: "da", "nosotros/as": "damos", "vosotros/as": "dais", "ellos / ellas": "dan", ustedes: "dan" } },
  { infinitivo: "poder", conjugacion: { yo: "puedo", tú: "puedes", "él / ella": "puede", usted: "puede", "nosotros/as": "podemos", "vosotros/as": "podéis", "ellos / ellas": "pueden", ustedes: "pueden" } },
  { infinitivo: "querer", conjugacion: { yo: "quiero", tú: "quieres", "él / ella": "quiere", usted: "quiere", "nosotros/as": "queremos", "vosotros/as": "queréis", "ellos / ellas": "quieren", ustedes: "quieren" } },
  { infinitivo: "coger", conjugacion: { yo: "cojo", tú: "coges", "él / ella": "coge", usted: "coge", "nosotros/as": "cogemos", "vosotros/as": "cogéis", "ellos / ellas": "cogen", ustedes: "cogen" } },
  { infinitivo: "salir", conjugacion: { yo: "salgo", tú: "sales", "él / ella": "sale", usted: "sale", "nosotros/as": "salimos", "vosotros/as": "salís", "ellos / ellas": "salen", ustedes: "salen" } },
  { infinitivo: "poner", conjugacion: { yo: "pongo", tú: "pones", "él / ella": "pone", usted: "pone", "nosotros/as": "ponemos", "vosotros/as": "ponéis", "ellos / ellas": "ponen", ustedes: "ponen" } },
  { infinitivo: "conocer", conjugacion: { yo: "conozco", tú: "conoces", "él / ella": "conoce", usted: "conoce", "nosotros/as": "conocemos", "vosotros/as": "conocéis", "ellos / ellas": "conocen", ustedes: "conocen" } },
  { infinitivo: "venir", conjugacion: { yo: "vengo", tú: "vienes", "él / ella": "viene", usted: "viene", "nosotros/as": "venimos", "vosotros/as": "venís", "ellos / ellas": "vienen", ustedes: "vienen" } },
  { infinitivo: "pensar", conjugacion: { yo: "pienso", tú: "piensas", "él / ella": "piensa", usted: "piensa", "nosotros/as": "pensamos", "vosotros/as": "pensáis", "ellos / ellas": "piensan", ustedes: "piensan" } },
  { infinitivo: "beber", conjugacion: { yo: "bebo", tú: "bebes", "él / ella": "bebe", usted: "bebe", "nosotros/as": "bebemos", "vosotros/as": "bebéis", "ellos / ellas": "beben", ustedes: "beben" } },
{ infinitivo: "abrir", conjugacion: { yo: "abro", tú: "abres", "él / ella": "abre", usted: "abre", "nosotros/as": "abrimos", "vosotros/as": "abrís", "ellos / ellas": "abren", ustedes: "abren" } },
{ infinitivo: "aprender", conjugacion: { yo: "aprendo", tú: "aprendes", "él / ella": "aprende", usted: "aprende", "nosotros/as": "aprendemos", "vosotros/as": "aprendéis", "ellos / ellas": "aprenden", ustedes: "aprenden" } },
{ infinitivo: "buscar", conjugacion: { yo: "busco", tú: "buscas", "él / ella": "busca", usted: "busca", "nosotros/as": "buscamos", "vosotros/as": "buscáis", "ellos / ellas": "buscan", ustedes: "buscan" } },
{ infinitivo: "entender", conjugacion: { yo: "entiendo", tú: "entiendes", "él / ella": "entiende", usted: "entiende", "nosotros/as": "entendemos", "vosotros/as": "entendéis", "ellos / ellas": "entienden", ustedes: "entienden" } },
{ infinitivo: "empezar", conjugacion: { yo: "empiezo", tú: "empiezas", "él / ella": "empieza", usted: "empieza", "nosotros/as": "empezamos", "vosotros/as": "empezáis", "ellos / ellas": "empiezan", ustedes: "empiezan" } },
{ infinitivo: "cerrar", conjugacion: { yo: "cierro", tú: "cierras", "él / ella": "cierra", usted: "cierra", "nosotros/as": "cerramos", "vosotros/as": "cerráis", "ellos / ellas": "cierran", ustedes: "cierran" } },
{ infinitivo: "perder", conjugacion: { yo: "pierdo", tú: "pierdes", "él / ella": "pierde", usted: "pierde", "nosotros/as": "perdemos", "vosotros/as": "perdéis", "ellos / ellas": "pierden", ustedes: "pierden" } },
{ infinitivo: "preferir", conjugacion: { yo: "prefiero", tú: "prefieres", "él / ella": "prefiere", usted: "prefiere", "nosotros/as": "preferimos", "vosotros/as": "preferís", "ellos / ellas": "prefieren", ustedes: "prefieren" } },
{ infinitivo: "mentir", conjugacion: { yo: "miento", tú: "mientes", "él / ella": "miente", usted: "miente", "nosotros/as": "mentimos", "vosotros/as": "mentís", "ellos / ellas": "mienten", ustedes: "mienten" } },
{ infinitivo: "volver", conjugacion: { yo: "vuelvo", tú: "vuelves", "él / ella": "vuelve", usted: "vuelve", "nosotros/as": "volvemos", "vosotros/as": "volvéis", "ellos / ellas": "vuelven", ustedes: "vuelven" } },
{ infinitivo: "dormir", conjugacion: { yo: "duermo", tú: "duermes", "él / ella": "duerme", usted: "duerme", "nosotros/as": "dormimos", "vosotros/as": "dormís", "ellos / ellas": "duermen", ustedes: "duermen" } },
{ infinitivo: "encontrar", conjugacion: { yo: "encuentro", tú: "encuentras", "él / ella": "encuentra", usted: "encuentra", "nosotros/as": "encontramos", "vosotros/as": "encontráis", "ellos / ellas": "encuentran", ustedes: "encuentran" } },
{ infinitivo: "recordar", conjugacion: { yo: "recuerdo", tú: "recuerdas", "él / ella": "recuerda", usted: "recuerda", "nosotros/as": "recordamos", "vosotros/as": "recordáis", "ellos / ellas": "recuerdan", ustedes: "recuerdan" } },
{ infinitivo: "jugar", conjugacion: { yo: "juego", tú: "juegas", "él / ella": "juega", usted: "juega", "nosotros/as": "jugamos", "vosotros/as": "jugáis", "ellos / ellas": "juegan", ustedes: "juegan" } },
{ infinitivo: "pedir", conjugacion: { yo: "pido", tú: "pides", "él / ella": "pide", usted: "pide", "nosotros/as": "pedimos", "vosotros/as": "pedís", "ellos / ellas": "piden", ustedes: "piden" } },
{ infinitivo: "servir", conjugacion: { yo: "sirvo", tú: "sirves", "él / ella": "sirve", usted: "sirve", "nosotros/as": "servimos", "vosotros/as": "servís", "ellos / ellas": "sirven", ustedes: "sirven" } },
{ infinitivo: "repetir", conjugacion: { yo: "repito", tú: "repites", "él / ella": "repite", usted: "repite", "nosotros/as": "repetimos", "vosotros/as": "repetís", "ellos / ellas": "repiten", ustedes: "repiten" } },
{ infinitivo: "seguir", conjugacion: { yo: "sigo", tú: "sigues", "él / ella": "sigue", usted: "sigue", "nosotros/as": "seguimos", "vosotros/as": "seguís", "ellos / ellas": "siguen", ustedes: "siguen" } },
{ infinitivo: "corregir", conjugacion: { yo: "corrijo", tú: "corriges", "él / ella": "corrige", usted: "corrige", "nosotros/as": "corregimos", "vosotros/as": "corregís", "ellos / ellas": "corrigen", ustedes: "corrigen" } },
{ infinitivo: "traer", conjugacion: { yo: "traigo", tú: "traes", "él / ella": "trae", usted: "trae", "nosotros/as": "traemos", "vosotros/as": "traéis", "ellos / ellas": "traen", ustedes: "traen" } },
{ infinitivo: "conducir", conjugacion: { yo: "conduzco", tú: "conduces", "él / ella": "conduce", usted: "conduce", "nosotros/as": "conducimos", "vosotros/as": "conducís", "ellos / ellas": "conducen", ustedes: "conducen" } },
{ infinitivo: "saber", conjugacion: { yo: "sé", tú: "sabes", "él / ella": "sabe", usted: "sabe", "nosotros/as": "sabemos", "vosotros/as": "sabéis", "ellos / ellas": "saben", ustedes: "saben" } },
{ infinitivo: "oír", conjugacion: { yo: "oigo", tú: "oyes", "él / ella": "oye", usted: "oye", "nosotros/as": "oímos", "vosotros/as": "oís", "ellos / ellas": "oyen", ustedes: "oyen" } }

];


// Utils para normalizar texto: sin tildes y ñ->n
function normalize(str) {
  const from = "ÁÉÍÓÚáéíóúÑñ";
  const to   = "AEIOUaeiouNn";
  let res = "";
  for(let i = 0; i < str.length; i++) {
    const c = str[i];
    const idx = from.indexOf(c);
    if (idx > -1) {
      res += to[idx];
    } else {
      res += c;
    }
  }
  return res.toLowerCase().trim();
}

// Variables globales
let currentVerbIndex = 0;
let currentPronounIndex = 0;
let attempts = 0;
let correctCount = 0;
let errorCount = 0;


const promptDiv = document.getElementById("prompt");
const inputRespuesta = document.getElementById("respuesta");
const btnCheck = document.getElementById("check");
const btnMostrar = document.getElementById("btnMostrar");
const feedbackDiv = document.getElementById("feedback");
const statsDiv = document.getElementById("stats");



function actualizarStats() {
  const total = correctCount + errorCount;
  const porcentaje = total === 0 ? 0 : Math.round((correctCount / total) * 100);
  statsDiv.textContent = `✅ Aciertos: ${correctCount} | ❌ Errores: ${errorCount} | 🔢 Precisión: ${porcentaje}%`;
}

function mostrarNuevaPregunta() {
  attempts = 0;
  feedbackDiv.textContent = "";
  inputRespuesta.value = "";
  inputRespuesta.disabled = false;
  btnCheck.disabled = false;
  btnMostrar.disabled = false;

  // Elegir verbo y pronombre aleatorio
  currentVerbIndex = Math.floor(Math.random() * verbs.length);
  currentPronounIndex = Math.floor(Math.random() * pronombres.length);

  const verbo = verbs[currentVerbIndex];
  const pronombre = pronombres[currentPronounIndex];

  promptDiv.textContent = `(${pronombre}) ${verbo.infinitivo}`;
  inputRespuesta.focus();
}

function validarRespuesta() {
  const respuestaUsuario = normalize(inputRespuesta.value);
  const verbo = verbs[currentVerbIndex];
  const pronombre = pronombres[currentPronounIndex];
  const respuestaCorrecta = normalize(verbo.conjugacion[pronombre]);

  if (respuestaUsuario === respuestaCorrecta) {
    feedbackDiv.textContent = "✅ ¡Correcto!";
    correctCount++;
    actualizarStats();
		
    inputRespuesta.disabled = true;
    btnCheck.disabled = true;
    btnMostrar.disabled = true;
    
		// Espera 1 segundo y carga nueva pregunta automáticamente
    setTimeout(() => {
      mostrarNuevaPregunta();
      actualizarStats();
    }, 1000);
		
  } else {
    attempts++;
    if (attempts < 3) {
      feedbackDiv.textContent = `❌ Incorrecto. Intenta de nuevo (${attempts}/3)`;
 inputRespuesta.value = "";   // <-- limpia el input
      inputRespuesta.focus();
   
    } else {
      feedbackDiv.textContent = `❌ Incorrecto. La respuesta correcta es: "${verbo.conjugacion[pronombre]}"`;
      errorCount++;
      actualizarStats();
			
      inputRespuesta.disabled = true;
      btnCheck.disabled = true;
      btnMostrar.disabled = true;
     
			// Espera 1 segundo y carga nueva pregunta automáticamente
      setTimeout(() => {
        mostrarNuevaPregunta();
        actualizarStats();
      }, 1000);
    }
  }
}
  

btnCheck.addEventListener("click", validarRespuesta);

inputRespuesta.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !btnCheck.disabled) {
    validarRespuesta();
  }


});

btnMostrar.addEventListener("click", () => {
  const verbo = verbs[currentVerbIndex];
  const pronombre = pronombres[currentPronounIndex];
  feedbackDiv.textContent = `ℹ️ La respuesta correcta es: "${verbo.conjugacion[pronombre]}"`;
  errorCount++;
  actualizarStats();
  inputRespuesta.disabled = true;
  btnCheck.disabled = true;
  btnMostrar.disabled = true;
 

 





});
	
// Arrancamos el juego
mostrarNuevaPregunta();
actualizarStats();
  
});
