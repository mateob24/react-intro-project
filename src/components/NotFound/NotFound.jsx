import { Header } from "../Header/Header"

export const NotFound = () => {
  return (
    <>
        <Header />
        <div className="h-screen flex items-center justify-center">
          <h2 className="text-3xl font-semibold text-orange-400">!404 - Recurso no encontrado</h2>
        </div>
    </>
  )
}
