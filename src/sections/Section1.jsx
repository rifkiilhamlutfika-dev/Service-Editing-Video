export default function Section1() {
  return (
    <section className="flex flex-col items-center">
      <div className="mt-24 w-full flex flex-col items-center gap-6 mb-24">
        <div className="flex justify-center">
          <h2 className="text-5xl sm:text-7xl font-extrabold leading-[3.65rem] sm:leading-[5.5rem] max-w-3xl text-center">
            Butuh Jasa Editing Video?
          </h2>
        </div>

        <div className="mt-5 flex justify-center">
          <a
            href="https://api.whatsapp.com/send?phone=6285159722546&text=Halo%20Kak..%20Aku%20Mau%20Edit%20Video.."
            target="_blank"
            className="bg-gradient-to-r from-fuchsia-600 to-purple-600 px-3 py-3 rounded-md font-semibold shadow-[3px_12px_11px_0px_rgba(0,_0,_0,_0.1)] text-white text-[0.815rem] w-full text-center text-lg sm:w-max sm:px-10 hover:shadow-[0px_0px_58px_9px_rgba(236,_72,_153,_0.5)] duration-300"
          >
            Chat Me Now!
          </a>
        </div>
      </div>
      <div className="w-full">
        <h3 className="font-semibold text-center opacity-75 mb-6">
          Preview Other Video By Me..
        </h3>
        <div className="aspect-video bg-amber-300">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/eYSr3Nlxxuc?si=usaW2NDn2xKV18Uw"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="object-cover object-center"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
