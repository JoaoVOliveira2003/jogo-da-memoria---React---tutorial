//Importando valores
import React  from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";

//Dom basicamente faz com que nos possamos mecher nas coisas do codigo como se fosse yum objeto

/*
ReactDOM cria uma raiz (root), que controla onde o React vai renderizar o conteúdo na página.
O nome "root" é usado como convenção para indicar o ponto principal da aplicação.
O código seleciona o elemento do DOM com id="root".
O método render(<App />) insere o componente <App /> dentro dessa raiz.
*/
ReactDOM.createRoot(document.getElementById('root')).render(<App />);