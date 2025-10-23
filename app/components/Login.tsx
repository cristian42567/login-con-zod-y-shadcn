"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { mockUsers } from "../lib/auth";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    const userExist = mockUsers.find(
      (u) => u.username === username && u.password == password
    );

    if (userExist) {
      localStorage.setItem("loggedIn", "true");
      router.push("/dashboard");
    } else {
      setError("Usuario o contraseña incorrecto");
    }
  }

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-700">
      <div className="bg-white rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Iniciar sesión
        </h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-900 placeholder-gray-500"
          />

          <button
            type="submit"
            className="bg-indigo-500 text-white rounded-md py-2 hover:bg-indigo-600 transition"
          >
            Iniciar sesión
          </button>
        </form>
        {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
      </div>
    </main>
  );
}
