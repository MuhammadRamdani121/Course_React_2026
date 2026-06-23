export default function LoginPage() {
  return (
    <>
      <h1 className="border-b py-2 text-center text-4xl font-bold">
        Login page
      </h1>
      <head>
        <h1>Login Card</h1>
      </head>
      {/*  */}
      <main className="mx-auto my-10 flex h-120 w-1/2 flex-col items-center justify-center border">
        <section className="flex flex-col items-center justify-center">
          <label htmlFor="" className="shadow-lg">
            Input Label
          </label>
          <input
            className="rounded-md border indent-2"
            type="text"
            name="Email Input"
            id=""
            Input
            Email
          />
          <label htmlFor="" className="shadow-lg">
            Input Password
          </label>
          <input
            className="rounded-md border indent-2"
            type="password"
            name="Input Password"
            id=""
          />
        </section>

        <section>
          <button className="h my-5 rounded-lg border bg-amber-400 px-10 hover:bg-black hover:text-white hover:transition hover:ease-in-out">
            login
          </button>
        </section>
      </main>
    </>
  );
}
