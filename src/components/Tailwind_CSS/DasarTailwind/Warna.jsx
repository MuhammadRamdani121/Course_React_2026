export default function Warna() {
  return (
    <>
      <main>
        <h1 className="pb-6 text-center text-4xl font-bold">
          Style Untuk Warna
        </h1>

        {/*  */}

        <section className="my-2 flex items-center justify-center gap-2 border">
          <aside className="flex w-1/2 flex-col items-center justify-center gap-2 text-center">
            <h1 className="w-50 bg-blue-300">
              Contoh Warna BackGround
            </h1>
            <h1 className="w-50 bg-black text-white">
              Contoh Warna Text
            </h1>
            <h1 className="w-50 border border-red-400">
              Contoh Warna Border
            </h1>
          </aside>

          <article className="flex">
            <pre className="flex flex-col gap-2">
              <code>{` <h1 className="bg-blue-300">  </h1>`}</code>
              <code>{` <h1 className="text-white">  </h1>`}</code>
              <code>{` <h1 className="border-red-400 border"> </h1>`}</code>
            </pre>
          </article>
        </section>

        {/*  */}

        <section>
          <aside>
            <h1></h1>
          </aside>
          <article>
            <pre>
              <code>{`
            
            
            
            `}</code>
            </pre>
          </article>
        </section>
      </main>
    </>
  );
}
