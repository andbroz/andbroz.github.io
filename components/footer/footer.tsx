export default function Footer() {
  return (
    <div className='flex flex-row justify-end px-2 py-2'>
      <span className='text-stone-800 text-opacity-50 text-sm'>
        Copyright &copy; {new Date(Date.now()).getFullYear()} andbroz
      </span>
    </div>
  );
}
