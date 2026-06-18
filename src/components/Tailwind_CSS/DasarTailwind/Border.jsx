export default function Border() {
  return (
    <div>
      <h1>Border</h1>
      <main>
        <section>
          <article>
            <h1 className="border-2">border</h1>
            <h1 className="border-2">
              border ketebalan border
            </h1>
            <h1 className="border-gray border">
              Background border
            </h1>
          </article>
          <aside>
            <pre>
              <code>
                {` <h1 className="border-2">border</h1>`}
              </code>
              <code>
                {` <h1 className="border-2">border</h1>`}
              </code>
              <code>
                {` <h1 className="border-2">border</h1>`}
              </code>
            </pre>
          </aside>
        </section>
      </main>
    </div>
  );
}
