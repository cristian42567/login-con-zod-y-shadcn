"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState<boolean | null>(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");

    if (!loggedIn) {
      router.push("/"); // Redirige directamente
      return; // Salimos del efecto
    }

    // Para evitar renderizado en cascada, usamos setTimeout 0
    // Esto hace que setState se ejecute en la siguiente "tick"
    setTimeout(() => setIsLogged(true), 0);
  }, [router]);

  return (
    <main>
      {isLogged === null ? (
        <h1>Cargando...</h1>
      ) : (
        <h1>Yeeeaaaa has iniciado sesión</h1>
      )}
    </main>
  );
}
