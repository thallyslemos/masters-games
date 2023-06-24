export function Loading() {
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-gradient-to-tr to-LIGTH-BLUE from-white">
            <div className="flex items-center justify-center text-BLUE-2 flex-col">
          Carregando...
              <div className="p-4 w-40 h-40 border-t-4 border-b-4 border-BLUE-1 rounded-full animate-spin"></div>
            </div>
          </div>
    )
}