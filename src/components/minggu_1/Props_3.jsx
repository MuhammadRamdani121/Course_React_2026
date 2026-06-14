export default function Props_2() {
  return (
    <div>
      <h1 className="text-lg font-bold">Props</h1>
      <span>Data Dari Parent ke child</span>

      <div className="flex flex-col gap-10 bg-red-100">
        <pre className="">
          <code className="text-xl font-bold">
            {`
            export default function Component({title}){
            return(
            <button className="border-2 bg-black p-2 text-white">
             {title}
           </button>


           nanti di parentnya 
           <Component title="Nama Title"/>
            )}
            `}
          </code>
        </pre>
      </div>
    </div>
  );
}
