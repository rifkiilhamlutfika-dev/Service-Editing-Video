export default function Navbar() {
  return (
    <nav className="p-4 flex justify-between items-center">
      <a href="#" className="text-xl font-extrabold">
        RILKAYT
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=6285159722546&text=Halo%20Kak..%20Aku%20Mau%20Edit%20Video.."
        target="_blank"
        className="px-3 py-1 font-semibold bg bg-gradient-to-r from-fuchsia-600 to-purple-600 rounded-lg text-white hover:shadow-[0px_0px_58px_9px_rgba(236,_72,_153,_0.5)] duration-300"
      >
        Order Now
      </a>
    </nav>
  );
}
