import { useState } from "react"
import { supabase } from "../supabase/supabase"
import { useNavigate } from "react-router-dom"

export default function ResetSenha(){
    const [ senha, setSenha ] = useState("")
    const irPara = useNavigate()

    async function mudarSenha() {
        if(senha == ""){
            alert("insira algo")
            return
        }
        const res = await supabase.auth.updateUser({
            password: senha
        })
        if(res.error){
            alert("Algo deu errado! tente novamente mais tarde")
        } else{
            alert("senha trocada, Você ja pode fazer login")
            irPara("/")
        }
    }
    return(
        <div>
            <h1>Redefina sua senha</h1> <br />
            <input type="text" onChange={e => setSenha(e.target.value)}/>
            <button onClick={() => mudarSenha()}>Confirmar</button>
        </div>
    )
}