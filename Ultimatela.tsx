import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const posts = [
    { status: "Rascunho", title: "Post 1" },
    { status: "Publicado", title: "Post 2" },
    { status: "Em análise", title: "Comentário 1" },
    { status: "Publicado", title: "Comentário 2" },
  ];

  const categories = ["Instagram", "Work", "Bags", "Lamp", "Books"];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-6">
          <h1 className="text-xl font-bold">HABIT</h1>
          <ul className="hidden md:flex gap-4 text-gray-600">
            <li>Início</li>
            <li>Páginas</li>
            <li>Destaques</li>
            <li>Assinar</li>
            <li>Admin</li>
          </ul>
        </div>

        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Buscar..."
            className="border rounded-lg px-3 py-1 focus:outline-none"
          />
          <button className="border border-green-700 text-green-700 px-4 py-1 rounded-lg hover:bg-green-700 hover:text-white transition">
            Buscar
          </button>
          <button className="border border-green-700 text-green-700 px-4 py-1 rounded-lg hover:bg-green-700 hover:text-white transition">
            Entrar
          </button>
        </div>
      </nav>

      {/* Conteúdo principal */}
      <main className="flex flex-col md:flex-row flex-1 p-6 gap-6">
        {/* Perfil */}
        <aside className="w-full md:w-1/3 lg:w-1/4 bg-white p-4 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-4">Perfil</h2>
          <div className="w-full h-32 bg-gray-100 rounded-lg mb-3"></div>

          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg mb-3"
          />

          <input
            type="text"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full border px-3 py-2 rounded-lg mb-3"
          />

          <button
            onClick={handleSave}
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition w-full"
          >
            Salvar
          </button>

          {saved && (
            <p className="text-green-700 text-sm text-center mt-2">
              Perfil salvo!
            </p>
          )}
        </aside>

        {/* Postagens */}
        <section className="flex-1 bg-white p-4 rounded-lg shadow-sm">
          <h2 className="font-semibold mb-4 text-lg">Suas Postagens</h2>
          <div className="flex flex-col gap-4">
            {posts.map((post, index) => (
              <div
                key={index}
                className="flex items-center justify-between border rounded-lg p-3 hover:bg-gray-50 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-20 h-16 bg-gray-100 rounded-lg"></div>
                  <div>
                    <p className="text-sm text-gray-500">{post.status}</p>
                    <h3 className="font-semibold">{post.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Rodapé */}
      <footer className="flex flex-wrap justify-center gap-3 p-4 bg-white border-t mt-4">
        {categories.map((cat, i) => (
          <button
            key={i}
            className="border px-4 py-2 rounded-lg hover:bg-gray-100 transition font-medium"
          >
            {cat}
          </button>
        ))}
      </footer>
    </div>
  );
}

export default App;
