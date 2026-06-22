export default function Position() {
  return (
    <div>
      <h1>Position Dan Interaksi</h1>

      <main>
        <section>
          <article>
            <aside className="relative z-10 w-1/2 border bg-black text-white">
              <h1 className="grid h-30 w-30 items-center justify-center border bg-amber-200">
                Kotak 1
              </h1>
              <h1 className="absolute -top-5 right-0 z-0 grid h-10 w-20 items-center border bg-red-300 text-center">
                Kotak 1
              </h1>
            </aside>

            <aside className="relative my-6 h-60 w-1/2 border">
              <h1 className="fixed top-5 right-5 h-10 w-10 border">
                kotak 2
              </h1>
            </aside>

            <aside className="relative my-6 h-60 w-1/2 border">
              <h1 className="sticky top-5 h-10 w-10 border">
                kotak 3
              </h1>
            </aside>
          </article>
        </section>

        <section>
          <h1>Z-index</h1>
          <span>Mengatur Posisi index</span>
          <article>
            <h1 className="z-10">z-10 (diatas 10)</h1>
            <h1 className="z-20">z-20 (diatas 20)</h1>
            <h1 className="z-50">z-50 (diatas 50)</h1>
          </article>
        </section>

        <section>
          <h1>Hover</h1>
          <span>
            Ada cursor mouse yg mendekat dia akan ada hover
          </span>
          <article>
            <h1 className="hover:bg-blue-600">
              hover:bg-blue-600
            </h1>
            <h1 className="hover:text-white">
              hover:text-white
            </h1>
            <h1 className="hover:scale-0">
              hover:scale-105
            </h1>
          </article>
        </section>

        <section>
          <h1>Transition</h1>
          <span>agar aimasi haluss</span>
          <article>
            <h1>transition</h1>
            <h1>duration</h1>
            <h1>ease-in-out</h1>
          </article>
        </section>
      </main>
    </div>
  );
}
