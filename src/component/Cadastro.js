import React from 'react';
import '../App.css';

class Cadastro extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            nome: null,
            email: null,
            senha: null,
        }
    }

    modificando = () => {
        this.setState({
            nome: document.querySelector('.nome').value,
            email:document.querySelector('.email').value,
            senha: document.querySelector('.senha').value
        })
    }


    render(){
        return (
            <div className="App">
                <label>Nome:</label>
                <input className="nome" type="text"></input>
                <label>Email:</label>
                <input className="email" type="email"></input>
                <label>Senha:</label>
                <input className="senha" type="password"></input>
                <button onClick={this.modificando}>Cadastre-se!</button>
            </div>
        );
    }
}

export default Cadastro;
