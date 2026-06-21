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
      </main>
    </div>
  );
}
