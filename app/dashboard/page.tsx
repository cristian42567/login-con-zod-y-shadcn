"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import TableEmployees from "../components/TableEmployees";
import TableEmployeesShadcn from "../components/TableEmployeesShadcn";

export default function Dashboard() {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState<boolean | null>(null);
  const [date, setDate] = useState<Date | undefined>(new Date());

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
    </main>
  );
}
