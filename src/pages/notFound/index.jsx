import SVG from './not_found.svg'
import Header from '../../components/header'

export default function NotFound () {
  return (
    <>
      <Header />
      <section className="p-8 flex flex-col gap-3 items-center max-w-[1000px] mx-auto my-0">
        <img src={SVG} alt='not found' className='w-full max-w-[400px]' /> 
        <p className='block text-center text-2xl mt-4'>
          Usuário/a não encontrado
        </p>
      </section>
    </>
  )
}