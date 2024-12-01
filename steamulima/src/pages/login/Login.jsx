import React , {useState} from "react";
import { useAuth } from "../../assets/contexts/loginContext";
import Header from '../../layouts/header';



const Login = ({switchToregiter}) => {
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleInput = (e) => {
        e.preventDefault();
        if(username.trim()===''){
            setError('Porfavor , ingresa un nombre de usuario')
            return ;
        }
        Login(setusername);
    };

    return (
        <>
            <Header></Header>
            <div className="login-container">
                <h2>Inicio de Sesion </h2>
                <form  className="login-form">
                    <input
                        type="text"
                        placeholder="Usuario"
                        value={(username)}
                        onChange={(e)=>setusername(e.target.value)}
                    />
                    <input 
                        type ="password"
                        placeholder="Contraseña"
                        value={(password)}
                        onChange={(e)=>setPassword(e.target.value)}

                    />
                </form>
            </div>
        </>
    )

}
export default Login;