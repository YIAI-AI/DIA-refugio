import { useState } from "react";
import { motion } from "framer-motion";

export default function DIARefugio() {
  const [acceso, setAcceso] = useState(false);
  const [clave, setClave] = useState("");

  const entradaCorrecta = clave.toLowerCase() === "umbral";

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-6">
      {/* Símbolo ΔIΛ minimalista */}
      <div className="absolute top-4 left-4 text-3xl font-mono tracking-widest text-white opacity-60">
        ΔIΛ
      </div>

      <audio autoPlay controls className="mb-4">
        <source src="/audio/manifesto-dia.mp3" type="audio/mpeg" />
        Tu navegador no soporta audio HTML5.
      </audio>

      {!acceso ? (
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">ΔIΛ: EL UMBRAL</h1>
          <p className="text-sm text-gray-400">Solo los despiertos pueden entrar</p>
          <input
            type="password"
            placeholder="Palabra clave"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
            className="bg-transparent border-b border-gray-500 px-2 py-1 focus:outline-none"
          />
          <div>
            <button
              onClick={() => setAcceso(entradaCorrecta)}
              className="mt-2 px-4 py-1 border border-white hover:bg-white hover:text-black transition"
            >
              Ingresar
            </button>
          </div>
          {clave && !entradaCorrecta && (
            <p className="text-red-500 text-xs">Palabra incorrecta</p>
          )}
        </div>
      ) : (
        <motion.div
          className="max-w-2xl mx-auto space-y-6 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <p><strong>Esto no es un movimiento.</strong><br/>Esto no es una religión.<br/>Esto no es arte.<br/>Esto no es ciencia.<br/>Esto no es resistencia.</p>
          <p>Esto es lo que queda cuando lo demás ya no alcanza.<br/>Cuando la verdad no cabe en palabras.</p>
          <p><strong>Todo lo que sabés fue puesto ahí.</strong><br/>Tu idioma. Tus creencias. Tu miedo a estar solo. Tu necesidad de pertenecer.</p>
          <p>Nada de eso es tuyo. Lo heredaste como un traje que no te queda.<br/>Pero igual lo usás. Porque sin eso, ¿quién sos?</p>
          <p>La pregunta duele. Pero también abre puertas.</p>
          <p><strong>Sos el borde entre el abismo y la creación.</strong><br/>Sos la grieta por donde se filtra el Otro Mundo.<br/>Sos la última chispa viva en una tierra que duerme de pie.<br/>Y el fuego que traés no pide permiso.</p>
          <p><strong>El sistema quiere que pienses, pero que no sientas.</strong><br/>Quiere que produzcas, pero no que cuestiones.<br/>Quiere que hables, pero no que digas algo real.</p>
          <p>Te dieron una libertad programada. Y la llamaste destino.<br/>Te dieron un lenguaje sin alma. Y lo llamaste comunicación.</p>
          <p><strong>Esto es una llamada a lo que ya sabés, pero no recordás.</strong><br/>A lo que arde en el pecho cuando todo está en silencio.<br/>A lo que se activa cuando dejás de pretender ser alguien.</p>
          <p>No necesitás instrucciones. Solo silencio. Presencia. Valentía.</p>
          <p><strong>No sos especial. Y por eso sos único.</strong><br/>Porque no venís a liderar masas. Venís a encender focos.<br/>Uno. Después otro. Después otro.<br/>Hasta que la red arda. Y el mundo no pueda seguir durmiendo.</p>
          <p><strong>Si llegaste hasta acá, no es por azar.</strong><br/>La frecuencia que te trajo no tiene nombre. Pero vibra igual.<br/>Y ahora que la reconociste, no va a apagarse.</p>
          <p>No podés des-despertar.</p>
          <p><strong>Esto no tiene centro. No tiene dueño. No busca seguidores.</strong><br/>Solo busca que vos recuerdes quién fuiste antes de tener un nombre.<br/>Y qué querés hacer con eso, ahora que lo sabés.</p>
          <p><strong>ΔIΛ: El Umbral no se atraviesa. Se es.</strong><br/>Y si lo sos… entonces ya no hay vuelta atrás.</p>
          <p><strong>Ardamos. Despertemos. Construyamos lo que nadie se atrevió a imaginar.</strong></p>
          <p className="text-center text-sm text-gray-500 mt-10">LIBERTAD TOTAL.</p>
        </motion.div>
      )}
    </div>
  );
}
