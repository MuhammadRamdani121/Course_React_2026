export default function ProfileCard() {
  return (
    <div>
      <h1 className="border-b text-center text-4xl font-bold">
        Profile Card
      </h1>

      <main className="my-10 flex items-center justify-center">
        <section className="flex h-120 w-1/2 flex-col items-center justify-center gap-5 border">
          <img
            src="/GambarDiri.jpg"
            alt=""
            className="h-50 w-50 rounded-full"
          />
          <div>
            <h1>Muhammad Ramdani</h1>
            <p>Front End Developer</p>
          </div>
          <button className="w-30 rounded-lg border bg-white text-black hover:bg-black hover:text-white">
            Follow
          </button>
        </section>
      </main>
    </div>
  );
}
