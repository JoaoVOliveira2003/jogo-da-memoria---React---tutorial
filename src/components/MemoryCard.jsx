//handleClick é uma função que vem de fora do componente, provavelmente passada por um componente pai.
export default function MemoryCard({ handleClick }) {
  //valores de emogi  
  const emojiArray = ['🐶', '🐷', '🐙', '🐛', '🐵', '🐶', '🐷', '🐙', '🐛', '🐵'];
  
    //ele pega cada valor da array emogi e cria uym novo elemento em jsx """""HTML coisado"""""
    const emojiEl = emojiArray.map((emoji, index) => (
      <li key={index} className="card-item">
        <button className="btn btn-emoji" onClick={handleClick}>
          {emoji}
        </button>
      </li>
    ));
    /*
    A saida desta coisa seria basicamente para cada um emogi ira ter:

    <li className="card-item">
      <button className="btn btn-emoji" onClick={handleClick}>
      🐶
      </button>
    </li>
    */

    //e no fim vai sair isso dai debnaixo:
    return <ul className="card-container">{emojiEl}</ul>;
  }
  