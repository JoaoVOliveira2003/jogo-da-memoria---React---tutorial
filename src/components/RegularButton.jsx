/*
children é uma propriedade especial no React.
Ele contém o conteúdo dentro da tag do componente.

No código em Form.jsx, você está passando o valor "Começar", e ele coloca esse valor no botão.

handleClick é uma função que você passa para o RegularButton, nesse caso o handleSubmit.
*/

export default function RegularButton({ children, handleClick }) {
  return (
      <button className="btn btn--text" onClick={handleClick}>
          {children}
      </button>
  );
}
