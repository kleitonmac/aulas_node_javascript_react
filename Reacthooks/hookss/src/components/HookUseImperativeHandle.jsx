import { useRef } from 'react'
import SomeComponent from './SomeComponent'

const HookUseImperativeHandle = () => {

  /*
    useRef cria uma referência que será passada
    para o componente filho (SomeComponent)
    
    Essa ref permitirá acessar métodos expostos
    via useImperativeHandle
  */
  const componentRef = useRef(null)

  return (
    <div>
      <h2>HookUseImperativeHandle</h2>

      {/*
        Passamos a ref para o componente filho.
        O React automaticamente conecta essa ref
        ao forwardRef do SomeComponent
      */}
      <SomeComponent ref={componentRef} />

      {/*
        Ao clicar no botão, acessamos o método
        validate() definido no useImperativeHandle
      */}
      <button onClick={() => componentRef.current.validate()}>
        validate
      </button>

      <hr />
    </div>
  )
}

export default HookUseImperativeHandle
