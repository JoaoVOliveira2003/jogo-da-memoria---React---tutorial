
import { useState } from "react"  
import Form from './components/Form';  
import MemoryCard from './components/MemoryCard';

export default function App(){  

    // Controla se o jogo esta on ou off, inicialmente false.
    const [isGameOn, setIsGameOn] = useState(false);

    // Função chamada quando o formulário é enviado.
    function startGame(e){
        e.preventDefault();  // deixa a tela como desativada a principio
        setIsGameOn(true);  // Altera o estado `isGameOn` para `true`, o que vai ativar o jogo.
    }

    // cartaa clicada
    function turnCard(){
        console.log('carta clicada'); 
    }

    return (  //  renderizar o componente.
        <main>  
            <h1>Memoria</h1>  

            {!isGameOn && <Form handleSubmit={startGame} />}  {/* Se o jogo não começou (isGameOn é `false`), renderiza o componente Form */}            
            {isGameOn && <MemoryCard handleClick={startGame} />}  {/* Se o jogo começou (isGameOn é `true`), renderiza o componente MemoryCard */}
        </main>
    );
}
