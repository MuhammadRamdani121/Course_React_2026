export default function WidthHight() {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">
        Width And Hight
      </h1>

      <main>
        <section className="grid grid-cols-2 items-center justify-center">
          <article className="border">
            <h1 className="w-64 border">Width w*64</h1>
            <h1 className="w-full border">Width Full</h1>
            <h1 className="w-screen border">
              Width Screen
            </h1>

            <h1 className="h-64 border">Height h*64</h1>
            <h1 className="h-full border">Height full</h1>
            <h1 className="h-screen border">
              Heihgt Screen
            </h1>
          </article>
          <article>
            <pre className="flex flex-col gap-45 border">
              <code>{`<h1 className="w-64">Width w*64</h1>`}</code>
              <code>{`<h1 className="w-full">Width Full</h1>`}</code>
              <code>{`<h1 className="w-screen">Width Screen</h1>`}</code>

              <code>{`<h1 className="h-64">Height h*64</h1>`}</code>
              <code>{`<h1 className="h-full">Height full</h1>`}</code>
              <code>{`<h1 className="h-screen">Heihgt Screen</h1>`}</code>
            </pre>
          </article>
        </section>
      </main>
    </div>
  );
}
