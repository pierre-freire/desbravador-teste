
import Header from "../header";

export default function Error() {
  return (
    <>
      <Header />
      { /*svg aqui*/ }
      <div className="p-8 flex flex-col gap-3 items-center">
        <p>Oops... Aconteceu algo de errado.</p>
        <p>Tente novamente </p>
      </div>
    </>
  )
}