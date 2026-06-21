export default function Position() {
  return (
    <div>
      <h1>Position Dan Interaksi</h1>

      <main>
        <section>
          <article>
            <aside className="relative w-1/2 border">
              <h1 className="h-30 w-30 border">Kotak 1</h1>
              <h1 className="absolute top-0 right-0 h-10 w-10 border">
                Kotak 1
              </h1>
            </aside>

            <aside className="relative my-6 h-60 w-1/2 border">
              <h1 className="fixed h-10 w-10 border">
                kotak 2
              </h1>
            </aside>
          </article>
        </section>
      </main>
    </div>
  );
}
