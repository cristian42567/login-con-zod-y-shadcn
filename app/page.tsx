"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const goToLogin = () => {
    router.push("/login");
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
      </div>
    </main>
  );
}
