import {
  Clapperboard,
  Disc,
  TvMinimalPlay,
  Video,
  Youtube,
} from "lucide-react";

export default function Section2() {
  return (
    <section className="flex flex-col items-center mt-24 mb-24">
      <h2 className="uppercase font-bold mb-5 text-xl opacity-65">
        Supported Editing Types
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 w-full gap-5 text-center">
        <h3 className="flex justify-center items-center gap-4 text-xl font-semibold text-white capitalize rounded-md shadow-md py-2 px-4 border-0 bg-gray-500 opacity-60 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-fuchsia-300 hover:text-black hover:opacity-100 duration-500">
          <Clapperboard /> Cinematic
        </h3>
        <h3 className="flex justify-center items-center gap-4 text-xl font-semibold text-white capitalize rounded-md shadow-md py-2 px-4 border-0 bg-gray-500 opacity-60 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-fuchsia-300 hover:text-black hover:opacity-100 duration-500">
          <TvMinimalPlay /> Tutorial
        </h3>
        <h3 className="flex justify-center items-center gap-4 text-xl font-semibold text-white capitalize rounded-md shadow-md py-2 px-4 border-0 bg-gray-500 opacity-60 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-fuchsia-300 hover:text-black hover:opacity-100 duration-500">
          <Youtube /> Youtube Video
        </h3>
        <h3 className="flex justify-center items-center gap-4 text-xl font-semibold text-white capitalize rounded-md shadow-md py-2 px-4 border-0 bg-gray-500 opacity-60 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-fuchsia-300 hover:text-black hover:opacity-100 duration-500">
          <Video /> Short Video
        </h3>
      </div>
    </section>
  );
}
