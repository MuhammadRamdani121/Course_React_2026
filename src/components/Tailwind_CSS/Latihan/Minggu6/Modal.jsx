export default function Modal() {
  return (
    <div>
      <h1>Challenge 6-Modal</h1>
      <main>
        <section className="relative grid items-center justify-center border">
          <div className="relative z-30 my-5 grid w-120 justify-center border bg-blue-400">
            <div className="relative z-20 my-10 grid h-20 w-100 items-center justify-center border bg-red-300">
              <h1>Modal</h1>
              <button>Close</button>
            </div>
          </div>
        </section>
        <section className="relative h-60">
          <div className="absolute top-10 left-10 z-30 h-40 w-40 bg-blue-400">
            Parent
          </div>

          <div className="absolute top-20 left-20 z-20 h-40 w-40 bg-red-300">
            Child
          </div>
        </section>
      </main>
    </div>
  );
}
