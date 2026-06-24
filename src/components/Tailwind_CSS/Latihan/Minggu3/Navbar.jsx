export default function Navbar() {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">
        Challange 3- Navbar
      </h1>
      <main className="border">
        <header className="flex items-center justify-between px-10">
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
      </main>
    </div>
  );
}
