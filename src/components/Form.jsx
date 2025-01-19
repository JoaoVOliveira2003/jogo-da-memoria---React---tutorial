// Importando o componente RegularButton.
import RegularButton from './RegularButton';

/*
Basicamente é o seguinte:

export default function Form({ handleSubmit }) {

Se há um handleSubmit, significa que ele vai receber uma função como valor.

O HTML gerado seria equivalente a:

<form class="wrapper" onsubmit="handleSubmit()">
  <button onclick="handleSubmit()">Começar</button>
</form>
*/

export default function Form({ handleSubmit }) {
    return (
        <form className="wrapper" onSubmit={handleSubmit}>
            <RegularButton handleClick={handleSubmit}>
                Começar
            </RegularButton>
        </form>
    );
}
