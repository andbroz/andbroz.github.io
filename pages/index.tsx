export default function Home() {
  return (
    <div
      transition-style='in:wipe:right'
      className='grid h-80 grid-cols-3 grid-rows-3 font-sriracha text-6xl font-bold text-oldGold'
    >
      <h1 className='col-span-2 col-start-1'>My name is Andrzej</h1>
      <h2 className='col-span-2 col-start-2 row-start-3 row-end-4 grid place-content-end '>
        I am Front End Web Developer.
      </h2>
    </div>
  );
}
