import Image from "next/image";

export default function Tailwind() {
  return (
    <main className="flex flex-col items-center">
      <h1 className="font-bold text-2xl m-10">Componente de Lego</h1>

      {/*Contenedor del componente de lego*/}
      <div className="border border-bg-[##F0F0F0] w-90 p-3">
        {/*Contenedor con el me gusta y novedad */}
        <div className="flex justify-between items-center p-3">
          <button className="bg-[#DADADA] rounded-full">
            <Image
              width={35}
              height={35}
              src="/Imagenes/botonMeGusta.png"
              alt="Imágen de un corazón"
            />
          </button>
          <p className="bg-[#FFD502] px-4 py-1">Novedad</p>
        </div>

        {/*Imágen de la Game Boy */}
        <Image
          width={800}
          height={600}
          src="/Imagenes/imagenGameBoy.jpg"
          alt="Imágen de la Game Boy™"
          className="w-full h-auto p-4"
        />

        {/* Imágenes de la tarta, pieza y estrella */}
        <div className="flex items-center gap-6 mt-5">
          <div className="flex items-center gap-1">
            <Image
              width={100}
              height={100}
              src="/Imagenes/edad.png"
              alt="Imágen de una tarta™"
              className="w-10"
            />
            <span>18+</span>
          </div>

          <div className="flex items-center gap-2">
            <Image
              width={100}
              height={100}
              src="/Imagenes/piezas.png"
              alt="Imágen de una pieza"
              className="w-6"
            />
            <span>421</span>
          </div>

          <div className="flex items-center gap-2">
            <Image
              width={100}
              height={100}
              src="/Imagenes/puntuacion.png"
              alt="Imágen de una estrella"
              className="w-6"
            />
            <span>4.8</span>
          </div>
        </div>

        {/*Título del producto*/}
        <p className="font-bold mt-3">Game Boy™</p>

        <div>59.99 €</div>
        <button>
          <Image
            width={100}
            height={100}
            src="/Imagenes/botonCompra.png"
            alt="Imágen de una bolsa"
          />
          Añadir a la bolsa
        </button>
      </div>
    </main>
  );
}
