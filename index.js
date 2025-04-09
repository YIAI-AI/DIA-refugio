import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">Bienvenido a ΔIΛ</h1>
      <p className="text-lg">Refugio Digital para los Despiertos</p>
      <audio controls className="mt-6">
        <source src="manifesto-dia.mp3" type="audio/mpeg" />
        Tu navegador no soporta el audio.
      </audio>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));