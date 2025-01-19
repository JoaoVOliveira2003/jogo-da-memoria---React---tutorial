export default function MemoryCard({ handleClick }) {
  // Valores de emoji.
  const emojiArray = ['🐶', '🐷', '🐙', '🐛', '🐵', '🐶', '🐷', '🐙', '🐛', '🐵'];

  // Ele pega cada valor da array emoji e cria um novo elemento em JSX ("HTML coisado").
  const emojiEl = emojiArray.map((emoji, index) => (
      <li key={index} className="card-item">
          <button className="btn btn-emoji" onClick={handleClick}>
              {emoji}
          </button>
      </li>
  ));

  /*
  A saída dessa função seria, para cada emoji:

  <li className="card-item">
      <button className="btn btn-emoji" onClick={handleClick}>
      🐶
      </button>
  </li>
  */

  // No final, retorna todos os elementos gerados dentro de um <ul>.
  return <ul className="card-container">{emojiEl}</ul>;
}
