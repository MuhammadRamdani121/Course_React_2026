export default function ChallengeBesar() {
  return (
    <div>
      <h1 className="border-b text-center text-4xl font-bold">
        Challenge Besar Minggu 1-3{" "}
      </h1>

      <main className="relative my-10">
        <header className="sticky top-0 z-10 flex h-10 items-center justify-between bg-black px-4 text-white">
          <img
            src="/GambarDiri.jpg"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <nav className="flex gap-2 pr-10">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">Login</a>
          </nav>
        </header>

        <main className="h-screen">
          <section></section>
          <aside>
            <header>
              <h1>SideBar</h1>
              <nav>
                <a href="">- Home</a>
                <a href="">- Product</a>
                <a href="">- User</a>
              </nav>
            </header>
          </aside>
        </main>
      </main>
    </div>
  );
}
