import { forwardRef, useRef, useImperativeHandle } from 'react'

// forwardRef permite que o componente receba uma ref vinda do componente pai
const SomeComponent = forwardRef((props, ref) => {

  // useRef cria uma referência para o input do próprio componente
  // Essa ref permite acessar diretamente o elemento DOM
  const localInputRef = useRef()

  /*
    useImperativeHandle controla o que será exposto para o componente pai
    Através da ref recebida (ref), definimos quais métodos ou valores
    poderão ser acessados externamente
  */
  useImperativeHandle(ref, () => ({
    // Método que ficará disponível no componente pai
    validate: () => {
      // Verifica se o input existe e se o valor tem mais de 3 caracteres
      if (localInputRef.current.value.length > 3) {
        // Limpa o valor do input
        localInputRef.current.value = ""
        // Exibe um alerta informando a regra
        alert("Máximo 3 caracteres")
      }
    }
  }))

  return (
    <div>
      <p>Enviar no máximo 3 caracteres:</p>

      {/* 
        O input usa a ref local para que possamos
        acessar seu valor dentro do componente 
      */}
      <input type="text" ref={localInputRef} />
    </div>
  )
})

export default SomeComponent
