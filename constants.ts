
import type { QuizItem, SalesConfig } from './types';
import { Bucket } from './types';

export const QUIZ_DATA: QuizItem[] = [
  // FASE 1: CALENTAMIENTO
  {
    type: 'question',
    text: '¿Cuál es tu rango de edad?',
    answers: [
      { text: '25-30 años', buckets: [] },
      { text: '31-40 años', buckets: [] },
      { text: '41-50 años', buckets: [] },
      { text: 'Más de 50 años', buckets: [] },
    ],
  },
  {
    type: 'question',
    text: '¿Cómo te describirías en este momento de tu vida?',
    answers: [
      { text: 'En busca de un nuevo comienzo', buckets: [] },
      { text: 'Cansada de luchar sola', buckets: [] },
      { text: 'Lista para una transformación', buckets: [] },
      { text: 'Perdida, pero con esperanza', buckets: [] },
    ],
  },
  {
    type: 'question',
    text: '¿Has oído hablar de la Ley de Atracción?',
    answers: [
      { text: 'Sí, y ya he intentado aplicarla', buckets: [] },
      { text: 'Sí, pero nunca me ha funcionado', buckets: [] },
      { text: 'He oído hablar de ella, pero no la entiendo bien', buckets: [] },
      { text: 'No, es algo nuevo para mí', buckets: [] },
    ],
  },
  // INTERSTICIAL 1
  {
    type: 'interstitial',
    title: '¿SABÍAS QUÉ?',
    text: "Estudios muestran que el 87% de las mujeres entre 25 y 50 años sienten que viven en 'automático', desconectadas de su propio poder interior. Pero la ciencia ya lo ha comprobado: tu frecuencia energética determina lo que atraes.",
  },
  // FASE 2: DIAGNÓSTICO DE SÍNTOMAS
  {
    type: 'question',
    text: 'Cuando piensas en relaciones amorosas, ¿qué sientes con más frecuencia?',
    answers: [
      { text: 'Ansiedad por no ser elegida', buckets: [Bucket.Perseguidora] },
      { text: 'Miedo a entregarme de nuevo', buckets: [Bucket.Perseguidora] },
      { text: 'Indiferencia, como si no hubiera espacio para eso', buckets: [Bucket.Desconectada] },
      { text: 'Sensación de que "no me lo merezco"', buckets: [Bucket.Bloqueada, Bucket.Desconectada] },
    ],
  },
  {
    type: 'question',
    text: 'Completa la frase: "Cuando me miro al espejo, yo..."',
    answers: [
      { text: 'No reconozco a la mujer en la que me he convertido', buckets: [Bucket.Desconectada] },
      { text: 'Veo cansancio y peso en mis ojos', buckets: [Bucket.Perseguidora] },
      { text: 'Siento que mi brillo se apagó', buckets: [Bucket.Desconectada] },
      { text: 'Pienso "¿a dónde se fue esa niña llena de sueños?"', buckets: [Bucket.Bloqueada] },
    ],
  },
  {
    type: 'question',
    text: 'Sobre dinero y prosperidad, ¿cuál de estas frases te representa más?',
    answers: [
      { text: '"Trabajo duro, pero el dinero nunca sobra"', buckets: [Bucket.Bloqueada] },
      { text: '"Siento culpa cuando recibo o gano bien"', buckets: [Bucket.Bloqueada] },
      { text: '"Ni siquiera pienso en eso, tengo cosas más importantes"', buckets: [Bucket.Desconectada] },
      { text: '"Tengo miedo de no poder mantenerme"', buckets: [Bucket.Perseguidora] },
    ],
  },
  {
    type: 'question',
    text: '¿Alguna vez has tenido la sensación de que estás "pidiendo migajas" en algún área de tu vida?',
    answers: [
      { text: 'Sí, en las relaciones', buckets: [Bucket.Perseguidora] },
      { text: 'Sí, en el trabajo/dinero', buckets: [Bucket.Bloqueada] },
      { text: 'Sí, en todo — me siento invisible', buckets: [Bucket.Desconectada] },
      { text: 'No, pero siento que no soy valorada', buckets: [Bucket.Perseguidora, Bucket.Bloqueada] },
    ],
  },
  {
    type: 'question',
    text: '¿Qué es lo que más deseas transformar ahora?',
    answers: [
      { text: 'Atraer un amor verdadero y recíproco', buckets: [Bucket.Perseguidora] },
      { text: 'Prosperar financieramente sin tanto sacrificio', buckets: [Bucket.Bloqueada] },
      { text: 'Reencontrar mi brillo y propósito', buckets: [Bucket.Desconectada] },
      { text: 'Todas las anteriores', buckets: [Bucket.Perseguidora, Bucket.Bloqueada, Bucket.Desconectada] },
    ],
  },
   // INTERSTICIAL 2
  {
    type: 'interstitial',
    title: 'LA VERDAD QUE NADIE TE CONTÓ:',
    text: 'La neurociencia comprobó que emites una frecuencia energética con cada pensamiento y emoción. Cleopatra no conquistó imperios por belleza, sino porque vibraba en la frecuencia de la REINA. Y esa frecuencia puede ser reprogramada.',
  },
  // FASE 3: INTENSIDAD/FRECUENCIA
  {
    type: 'question',
    text: '¿Hace cuánto tiempo sientes que "algo falta" en tu vida?',
    answers: [
      { text: 'Menos de 6 meses', buckets: [] },
      { text: 'De 6 meses a 2 años', buckets: [] },
      { text: 'De 2 a 5 años', buckets: [] },
      { text: 'Más de 5 años (o toda la vida)', buckets: [] },
    ],
  },
  {
    type: 'question',
    text: '¿Has tenido alguna relación donde te sentiste "pequeña" o "menospreciada"?',
    answers: [
      { text: 'Sí, y todavía cargo con las marcas de eso', buckets: [Bucket.Perseguidora] },
      { text: 'Sí, y eso afectó mi autoestima', buckets: [Bucket.Desconectada] },
      { text: 'No, pero tengo miedo de que pase de nuevo', buckets: [] },
      { text: 'Estoy en esa situación ahora', buckets: [] },
    ],
  },
  {
    type: 'question',
    text: '¿Cómo manejas la idea de "pedir" o "manifestar" lo que deseas?',
    answers: [
      { text: 'Me da vergüenza pedir', buckets: [Bucket.Perseguidora] },
      { text: 'Creo que no me lo merezco', buckets: [Bucket.Bloqueada, Bucket.Desconectada] },
      { text: 'No sé cómo hacerlo bien', buckets: [] },
      { text: 'Ya lo intenté y no funcionó', buckets: [] },
    ],
  },
  {
    type: 'question',
    text: 'Si pudieras cambiar UNA sola cosa en tu vida hoy, sería:',
    answers: [
      { text: 'Atraer a una pareja que me valore', buckets: [Bucket.Perseguidora] },
      { text: 'Tener libertad financiera', buckets: [Bucket.Bloqueada] },
      { text: 'Sentir que soy dueña de mi vida', buckets: [Bucket.Desconectada] },
      { text: 'Todas, pero no sé por dónde empezar', buckets: [] },
    ],
  },
  // INTERSTICIAL 3
  {
    type: 'interstitial',
    title: 'ATENCIÓN: EL PATRÓN INVISIBLE',
    text: 'Si te identificaste con 3 o más de estas preguntas, estás atrapada en un patrón de vibración de escasez. ¿La buena noticia? Puede romperse en 21 días con el método adecuado.',
  },
  // FASE 4: SEGMENTACIÓN FINAL
  {
    type: 'question',
    text: 'Si fueras a describir tu energía actual, sería:',
    answers: [
      { text: '"Estoy persiguiendo, rogando, dando demasiado"', buckets: [Bucket.Perseguidora] },
      { text: '"Estoy trabada, bloqueada, nada fluye"', buckets: [Bucket.Bloqueada] },
      { text: '"Estoy apagada, perdida, sin brillo"', buckets: [Bucket.Desconectada] },
      { text: '"Estoy en todas estas al mismo tiempo"', buckets: [Bucket.Perseguidora, Bucket.Bloqueada, Bucket.Desconectada] },
    ],
  },
  {
    type: 'question',
    text: '¿Estás dispuesta a dedicar 15 minutos al día para reprogramar tu frecuencia y despertar a la Cleopatra que hay en ti?',
    answers: [
      { text: 'Sí, estoy lista para la transformación ✅', buckets: [] },
      { text: 'Sí, pero tengo dudas de si funcionará', buckets: [] },
      { text: 'No lo sé, necesito entenderlo mejor', buckets: [] },
    ],
  },
];


export const SALES_CONFIG: SalesConfig = {
  [Bucket.Perseguidora]: {
    profile: "La Perseguidora Cansada",
    headline: "Tu diagnóstico revela el patrón de la 'Perseguidora'. Ha llegado el momento de dejar de correr y empezar a ATRAER.",
    cta: "QUIERO DESPERTAR MI MAGNETISMO AHORA",
    validation: "Si has llegado hasta aquí, es porque reconoces este patrón: das, das, das... y nunca recibes lo mismo. Persigues amor, validación, atención — y cuanto más persigues, más se te escapan las cosas de las manos. Sientes ansiedad en las relaciones, miedo a no ser elegida, y te has visto haciéndote pequeña para 'encajar' en la vida de alguien.",
    explanation: "Este patrón no es una falla de carácter — es una frecuencia energética de escasez emocional. Desde niña, fuiste condicionada a creer que 'tienes que hacer algo para merecer'. Y eso te puso en una vibración de PEDIR en lugar de ATRAER.\n\nCleopatra nunca persiguió. Ella atraía. ¿Y sabes por qué? Porque vibraba en la frecuencia de la reina que YA se eligió a sí misma. Ella no imploraba. Ella EMANABA.",
    bridge: "Y eso es exactamente lo que aprenderás en 'El Magnetismo de Cleopatra'. Reprogramarás tu frecuencia de perseguidora a REINA. Aprenderás a:",
    bullets: [
      "Romper el patrón de dependencia emocional",
      "Activar el magnetismo interior que atrae amor RECÍPROCO",
      "Vibrar en la frecuencia de quien YA es elegida — porque se eligió primero",
    ],
    finalPitch: "Imagina despertar y sentir que ya no necesitas correr tras nada. El amor llega. Las oportunidades aparecen. Ya no estás pidiendo — estás ATRAYENDO.",
    finalCTA: "QUIERO DESPERTAR MI MAGNETISMO AHORA"
  },
  [Bucket.Bloqueada]: {
    profile: "La Bloqueada Financieramente",
    headline: "Tu diagnóstico apunta a la 'Bloqueada Financieramente'. Es hora de romper las cadenas de la escasez y desbloquear tu prosperidad.",
    cta: "QUIERO DESBLOQUEAR MI PROSPERIDAD AHORA",
    validation: "Trabajas duro. Te esfuerzas. Haces todo 'bien'. Pero, ¿el dinero? Nunca sobra. Siempre hay una emergencia, una cuenta inesperada, algo que te hace volver al punto de partida. Y lo peor: sientes CULPA cuando recibes, cuando cobras, cuando prosperas. Es como si una voz interna dijera: 'No te lo mereces'.",
    explanation: "Este bloqueo no es pereza o falta de competencia — es una programación energética de escasez financiera. Desde pequeña, escuchaste frases como 'el dinero no crece en los árboles', 'los ricos son egoístas', 'el trabajo dignifica'. Y esas creencias crearon un bloqueo vibratorio que te mantiene atrapada en el ciclo de trabajo duro sin prosperidad.\n\nCleopatra gobernaba un imperio. Ella no tenía miedo a la abundancia — ella COCREABA con el universo. ¿Y sabes el secreto? Ella vibraba en la frecuencia de la prosperidad SIN CULPA.",
    bridge: "Y eso es lo que desbloquearás en 'El Magnetismo de Cleopatra'. Reprogramarás tus creencias sobre el dinero y activarás el flujo de la abundancia. Aprenderás a:",
    bullets: [
      "Romper creencias limitantes sobre el dinero y el merecimiento",
      "Vibrar en la frecuencia de la prosperidad sin culpa",
      "Atraer oportunidades financieras con ligereza y propósito",
    ],
    finalPitch: "Imagina vivir sin aprietos. Sin ansiedad. El dinero fluyendo naturalmente porque VIBRAS en la frecuencia de la abundancia.",
    finalCTA: "QUIERO DESBLOQUEAR MI PROSPERIDAD AHORA"
  },
  [Bucket.Desconectada]: {
    profile: "La Desconectada de Sí Misma",
    headline: "Tu diagnóstico es de la 'Desconectada de Sí Misma'. Prepárate para reencontrar tu brillo interior y reconectarte con tu verdadera esencia.",
    cta: "QUIERO REENCONTRAR MI BRILLO AHORA",
    validation: "Te miras al espejo y no reconoces a la mujer en la que te has convertido. Perdiste el brillo. Vives en automático — despertar, trabajar, dormir, repetir. ¿Aquella niña llena de sueños? Desapareció. Sientes un vacío que no puedes nombrar. Y lo peor: ya ni sabes quién eres sin las máscaras, los roles, las obligaciones.",
    explanation: "Esta desconexión no es debilidad — es el resultado de años moldeándote para encajar en los estándares de los demás. Te adaptaste tanto que olvidaste tu esencia. La sociedad te enseñó a ser 'buena chica', 'madre perfecta', 'profesional dedicada' — pero nadie te enseñó a ser TÚ.\n\nCleopatra nunca se moldeó. Ella REINABA siendo auténtica. Ella sabía que el verdadero magnetismo viene de dentro — de la conexión con lo sagrado femenino, con el poder de la reina interior.",
    bridge: "Y esa reconexión es la que experimentarás en 'El Magnetismo de Cleopatra'. Despertarás a la reina que siempre ha estado dormida dentro de ti. Aprenderás a:",
    bullets: [
      "Reencontrar tu esencia y propósito de vida",
      "Reconectarte con lo sagrado femenino y tu poder interior",
      "Vibrar en la frecuencia de la mujer que lidera su propia vida",
    ],
    finalPitch: "Imagina despertar y reconocer a la mujer en el espejo. Sentir el brillo de vuelta. Vivir con propósito, presencia y MAGNETISMO.",
    finalCTA: "QUIERO REENCONTRAR MI BRILLO AHORA"
  },
};
