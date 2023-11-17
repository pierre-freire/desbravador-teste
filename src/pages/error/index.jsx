import svg from './error.svg'
import Header from '../../components/header'

export default function Error() {
  return (
    <>
      <Header />
      <div className="p-8 flex flex-col gap-3 items-center max-w-[1000px] mx-auto my-0">
        <img alt='not found' src={svg} className='w-full max-w-[400px]' />
        <p>Oops... Aconteceu algo de errado.</p>
        <p>Tente novamente </p>
      </div>
    </>
  )
}