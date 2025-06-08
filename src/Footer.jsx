export default function Footer() {
  return (
    <footer class="flex flex-col bg-[#000000] text-[#f7fe1fed] py-6 w-full px-20 items-center gap-10">
      <div class="text-center">
        © {new Date().getFullYear()} RILKAYT Production - All rights reserved.
      </div>
    </footer>
  );
}
