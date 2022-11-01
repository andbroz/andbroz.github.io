export default function Footer() {
  const currentYear = new Date(Date.now()).getFullYear();
  return (
    <div className='flex flex-row justify-end px-2 py-2'>
      <span className='text-sm text-opacity-50'>
        Copyright &copy; {currentYear} andbroz
      </span>
    </div>
  );
}
