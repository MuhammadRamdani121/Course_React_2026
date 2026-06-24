export default function Badge() {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold">
        Challenge 4 - Notification{" "}
      </h1>

      <main>
        <section className="">
          <div className="relative grid w-1/2">
            <h1>🔔</h1>
            <span className="absolute top-0 left-5">
              ●3
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
