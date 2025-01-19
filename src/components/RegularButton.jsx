/*
children é uma propriedade especial no React.
Ele contém o conteúdo dentro da tag do componente.

no codigo em Form.jsx, vc esta passando o valor Começar, ai ele pega o valor e coloca ai 

handleClick é uma função que você passa para o RegularButton,nesse caso o handleSubmit
*/
export default function RegularButton({ children, handleClick }) {
    return (
      <button className="btn btn--text" onClick={handleClick}>{children}</button>
    );
  }
  