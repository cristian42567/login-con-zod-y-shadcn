"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToLogin = () => {
    router.push("/login");
  };

  const goToTailwind = () => {
    router.push("/tailwind");
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-700">
      <div className="bg-white rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-black">
          Página principal
        </h1>
        <button
          onClick={goToLogin}
          className="w-full bg-indigo-500 text-white font-semibold rounded-lg py-3 hover:bg-indigo-600 active:bg-indigo-700 transition-colors duration-200"
        >
          Ir al Login
        </button>
        <button
          onClick={goToTailwind}
          className="w-full bg-indigo-500 text-white font-semibold rounded-lg py-3 hover:bg-indigo-600 active:bg-indigo-700 transition-colors duration-200 mt-5"
        >
          Ir a la página de Tailwind
        </button>
      </div>
    </main>
  );
}
