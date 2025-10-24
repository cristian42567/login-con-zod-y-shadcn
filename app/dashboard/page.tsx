"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TableEmployees from "../components/TableEmployees";
import TableEmployeesShadcn from "../components/TableEmployeesShadcn";
import { useQueryState } from "nuqs";

export default function Dashboard() {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState<boolean | null>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [name, setName] = useQueryState("name");

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");

    if (!loggedIn) {
      router.push("/");
      return;
    }

    setTimeout(() => setIsLogged(true), 0);
  }, [router]);

  return (
    <main>
      {isLogged === null ? (
        <h1>Cargando...</h1>
      ) : (
        <>
          <h1>Yeeeaaaa has iniciado sesión</h1>
          <Input type="text" placeholder="Este es un componente de shadcn" />
          <Button variant="outline">Este es un botón de shadcn</Button>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow-sm"
            captionLayout="dropdown"
          />
          <TableEmployees />
          <TableEmployeesShadcn />
        </>
      )}

      <div className="flex flex-col items-center justify-center mt-20 space-y-4">
        <input
          className="w-64 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition placeholder-gray-400 text-gray-800"
          placeholder="Aquí va el parámetro a pasar"
          value={name || ""}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => setName(null)}>Resetar</button>
        <p className="text-lg text-gray-800">
          ¡Hola, {name || "persona desconocida"}!
        </p>
      </div>
    </main>
  );
}
