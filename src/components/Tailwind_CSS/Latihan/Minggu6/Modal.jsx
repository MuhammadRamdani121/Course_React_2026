export default function Modal() {
  return (
    <div>
      <h1>Challenge 6-Modal</h1>
      <main>
        <section className="relative grid items-center justify-center border">
          <div className="relative z-30 my-5 grid h-100 w-120 justify-center border bg-blue-400">
            <div className="absolute top-0 -right-2 z-40 my-10 grid h-20 w-100 items-center justify-center border bg-red-300">
              <h1>Modal</h1>
              <button>Close</button>
            </div>
          </div>
        </section>
        <section className="relative grid h-60 items-center justify-center">
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
