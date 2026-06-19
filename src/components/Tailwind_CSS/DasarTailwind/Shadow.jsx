export default function Shadow() {
  return (
    <div>
      <h1>Shadow</h1>

      <main>
        <section>
          <article>
            <h1 className="shadow">shadow </h1>
            <h1 className="shadow-sm">shadow sm</h1>
            <h1 className="shadow-md">shadow md</h1>
            <h1 className="shadow-lg">shadow lg</h1>
          </article>

          <article>
            <pre>
              <code>{` <h1 className="shadow">shadow </h1>`}</code>
              <code>{` <h1 className="shadow-sm">shadow sm</h1>`}</code>
              <code>{` <h1 className="shadow-md">shadow md</h1>`}</code>
              <code>{` <h1 className="shadow-lg">shadow lg</h1>`}</code>
            </pre>
          </article>
        </section>
      </main>
    </div>
  );
}
