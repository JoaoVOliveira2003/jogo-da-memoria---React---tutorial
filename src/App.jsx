import { useState } from "react";
import Form from "./components/Form";
import MemoryCard from "./components/MemoryCard";

export default function App() {
  const [isGameOn, setIsGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);

  async function startGame(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://emojihub.yurace.pro/api/all/category/animals-and-nature"
      );

      if (!response.ok) {
        throw new Error("Erro ao buscar emojis. Tente novamente mais tarde.");
      }

      const data = await response.json();
      const dataSlice = getDataSlice(data);
      const emojisArray = getEmojiArray(dataSlice); // Nome da função corrigido.

      setEmojisData(emojisArray);
      setIsGameOn(true);
    } catch (err) {
      console.error("Ocorreu um erro ao buscar os emojis:", err);
    }
  }

  function getRandomIndices(data) {
    const randomIndicesArray = [];

    for (let i = 0; i < 5; i++) {
      const randomNum = Math.floor(Math.random() * data.length);
      if (!randomIndicesArray.includes(randomNum)) {
        randomIndicesArray.push(randomNum);
      } else {
        i--;
      }
    }

    return randomIndicesArray;
  }

  function getDataSlice(data) {
    const randomIndices = getRandomIndices(data);
    const dataSlice = randomIndices.map((index) => data[index]);

    return dataSlice;
  }

  function turnCard(name, index) {
    console.log("Uma carta foi clicada! "+ name + index);
  }

  function getEmojiArray(data) {
    const pairedEmojisArray = [...data, ...data];

    for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pairedEmojisArray[i];
      pairedEmojisArray[i] = pairedEmojisArray[j];
      pairedEmojisArray[j] = temp;
    }
    return pairedEmojisArray;
  }

  return (
    <main>
      <h1>Memória</h1>
      {!isGameOn && <Form handleSubmit={startGame} />}
      {isGameOn && <MemoryCard handleClick={turnCard} data={emojisData} />}
    </main>
  );
}
