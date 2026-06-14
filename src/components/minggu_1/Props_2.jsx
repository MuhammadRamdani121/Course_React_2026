export default function Props_2() {
  return (
    <div>
      <h1 className="text-lg font-bold">Component</h1>
      <span>Memecah UI Menjadi Bagian Kecil</span>

      <div className="flex flex-col gap-10 bg-red-100">
        <button className="border-2 bg-black p-2 text-white">
          Ini Contoh button
        </button>

        <pre className="">
          <code className="text-xl font-bold">
            {`
            export default function JSX(){
            return(
            <>
            <h1>Ini jSX</h1>
            </>
            )}
            `}
          </code>
        </pre>
      </div>
    </div>
  );
}
