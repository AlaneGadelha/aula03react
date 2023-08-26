import logo from '../componentes/download.png';
import { useState} from 'react';
import './Form.css';

//icones do formulário

function Form(){
    function exibir(e){
        e.preventDefault()
        console.log(usuario)
        console.log(senha)

    }
    const [usuario,setUsuario] = useState();
    //usuario-> valor atual 
    //alterar o valor do usario=
    const [senha,setSenha]= useState()


     

        return(
        <div className='form'>
            <div className="col1">
                <h1>Estados - React</h1>
                <img src={logo} className="App-logo" alt="logo infinity"></img>
            </div>
            <div className='col2'>
                <form onSubmit={exibir} action="#">
                <label><strong>Usuário:</strong></label><br/>
                <input  
                    type ="text"
                    id="usuario"
                    name="usuario"
                    onChange = {(e)=> setUsuario(e.target.value)}
                >
                </input><br/><br/>
                <label> <strong>Senha:</strong></label><br/>
                <input 
                type ="password"
                id="senha"
                name="senha"
                onChange = {(e)=> setSenha(e.target.value)}
                ></input><br/>
                <button className='entrar'  type="submit" value='Entrar'> <strong>Entrar</strong></button><br/>
                </form>
            </div> 
        </div>



    );
}
export default Form;