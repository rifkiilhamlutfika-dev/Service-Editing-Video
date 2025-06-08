import { Instagram, Mail, Phone } from "lucide-react";

export default function Section5() {
  return (
    <section className="flex flex-col items-center mt-24 mb-24">
      <h2 className="uppercase font-bold mb-5 text-xl opacity-65">
        Video Edited By RILKAYT
      </h2>
      <div className="rounded-lg shadow-sm p-8 border-0 bg-[#1e2939] hover:shadow-lg transition-shadow duration-300 w-full">
        <div className="grid grid-cols-5 grid-rows-4 gap-3 max-h-[10rem] sm:max-h-[30rem] lg:max-h-[50rem]">
          <div className="col-span-2 row-span-2 overflow-hidden rounded-lg ">
            <img
              src="FOTO_1.jpg"
              alt=""
              className="object-center object-cover h-full w-full grayscale hover:grayscale-0 duration-300"
            />
          </div>
          <div className="col-span-2 row-span-2 col-start-1 row-start-3 overflow-hidden rounded-lg">
            <img
              src="FOTO_2.jpg"
              alt=""
              className="object-center object-cover h-full w-full scale-125 grayscale hover:grayscale-0 duration-300"
            />
          </div>
          <div className="col-span-3 row-span-2 col-start-3 row-start-1 overflow-hidden rounded-lg">
            <img
              src="FOTO_3.jpg"
              alt=""
              className="object-center object-cover h-full w-full grayscale hover:grayscale-0 duration-300"
            />
          </div>
          <div className="col-span-3 row-span-2 col-start-3 row-start-3 overflow-hidden rounded-lg">
            <img
              src="FOTO_4.jpg"
              alt=""
              className="object-center object-cover h-full w-full grayscale hover:grayscale-0 duration-300"
            />
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-bold uppercase text-white text-center mt-12">
          RIFKI ILHAM LUTFIKA
        </h3>
        <h5 className="text-sm md:text-lg text-center text-white">
          Editor Video
        </h5>

        <div className="flex justify-center gap-5 mt-5">
          <a
            href="https://www.instagram.com/rilka_yt/"
            target="_blank"
            className="text-white hover:text-blue-300 duration-300"
          >
            <Instagram />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=6285159722546&text=Halo%20Kak..%20Aku%20Mau%20Edit%20Video.."
            target="_blank"
            className="text-white hover:text-blue-300 duration-300"
          >
            <Phone />
          </a>
          <a
            href="mailto:rilkayt@gmail.com"
            target="_blank"
            className="text-white hover:text-blue-300 duration-300"
          >
            <Mail />
          </a>
        </div>
      </div>
    </section>
  );
}
