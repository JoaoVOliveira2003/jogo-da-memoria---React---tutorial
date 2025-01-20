import { useState } from "react";  
import Form from './components/Form';  
import MemoryCard from './components/MemoryCard';

export default function App(){  
    // Controla se o jogo está ativo ou inativo, inicialmente definido como falso.
    const [isGameOn, setIsGameOn] = useState(false);
    const [emojiData,setEmojiData] = useState([])
   

    console.log(emojiData);

    // Função chamada quando o formulário é enviado.
    async function startGame(e) {
        // Impede o comportamento padrão do formulário (como recarregar a página).
        e.preventDefault();

        try {
            // Faz a requisição para a API de emojis.
            const response = await fetch("https://emojihub.yurace.pro/api/all/category/animals-and-nature");

            // Verifica se a resposta da API foi bem-sucedida.
            if (!response.ok) {
                throw new Error('Erro ao buscar emojis. Tente novamente mais tarde.');
            }

            // Converte a resposta em JSON.
            const data = await response.json();
            const dataSample = data.slice(0,5);

            // Exibe os dados no console para depuração.
            console.log(data);

            setEmojiData(dataSample)
            // Atualiza o estado para ativar o jogo.
            setIsGameOn(true);
        } catch (error) {
            // Exibe uma mensagem de erro no console se algo der errado.
            console.error("Ocorreu um erro:", error.message);
        }
    }

    // Função chamada ao clicar em uma carta.
    function turnCard() {
        // Exibe uma mensagem no console para indicar que uma carta foi clicada.
        console.log('Carta clicada');
    }

    return (
        <main>  
            <h1>Memória</h1>  

            {/* Renderiza o formulário se o jogo ainda não foi iniciado. */}
            {!isGameOn && <Form handleSubmit={startGame} />}  

            {/* Renderiza as cartas de memória se o jogo foi iniciado. */}
            {isGameOn && <MemoryCard handleClick={turnCard} data={emojiData}/>}  
        </main>
    );
}
