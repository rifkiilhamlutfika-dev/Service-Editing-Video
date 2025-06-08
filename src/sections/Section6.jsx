import Accordion from "../Accordion";

export default function Section6() {
  return (
    <section className="flex flex-col items-center mt-16 mb-24">
      <div className="mt-5 mb-24 flex justify-center">
        <a
          href="https://api.whatsapp.com/send?phone=6285159722546&text=Halo%20Kak..%20Aku%20Mau%20Edit%20Video.."
          target="_blank"
          className="bg-gradient-to-r from-fuchsia-600 to-purple-600 px-3 py-3 rounded-md font-semibold shadow-[3px_12px_11px_0px_rgba(0,_0,_0,_0.1)] text-white text-[0.815rem] w-full text-center text-lg sm:w-max sm:px-10 hover:shadow-[0px_0px_58px_9px_rgba(236,_72,_153,_0.5)] duration-300"
        >
          Chat Me Now!
        </a>
      </div>
      <h2 className="uppercase font-bold mb-5 text-xl opacity-65">FAQ</h2>
      <Accordion />
    </section>
  );
}
