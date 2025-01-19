//importando o valor RegularButton
import RegularButton from './RegularButton';

/*
Basicamente é o seguinte 

export default function Form({ handleSubmit }) {

tem um handleSubmit significa que ele vai colocar um valor de variavel nisspo

ai em baixo vc tem coisas normais de htl

Isso em html normal seria isso:

<form class="wrapper" onsubmit="handleSubmit()">
  <button onclick="handleSubmit()">Start Game</button>
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

