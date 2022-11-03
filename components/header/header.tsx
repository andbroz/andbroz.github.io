import Navbar from '@components/navbar/navbar.component';

export default function Header() {
  return (
    <>
      <div className='flex flex-row justify-end p-4'>
        <Navbar />
      </div>
    </>
  );
}
