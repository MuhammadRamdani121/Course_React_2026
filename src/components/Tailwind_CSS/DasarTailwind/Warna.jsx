export default function Warna() {
  return (
    <>
      <main>
        <h1 className="text-center text-2xl font-bold">
          Style Untuk Warna
        </h1>

        {/*  */}

        <section className="my-2 flex items-center justify-center gap-2 border">
          <aside className="flex w-1/2 flex-col gap-2">
            <h1 className="bg-blue-300">
              Contoh Warna BackGround
            </h1>
            <h1 className="bg-black text-white">
              Contoh Warna Text
            </h1>
            <h1 className="border border-red-400">
              Contoh Warna Border
            </h1>
          </aside>

          <article className="flex">
            <pre className="flex flex-col gap-2">
              <code>{` <h1 className="bg-blue-300"> Contoh Warna BackGround  </h1>`}</code>
              <code>{` <h1 className="bg-blue-300"> Contoh Warna BackGround  </h1>`}</code>
              <code>{` <h1 className="bg-blue-300"> Contoh Warna BackGround  </h1>`}</code>
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
