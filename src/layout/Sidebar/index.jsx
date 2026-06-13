import "./style.css"
import Botao from "../../ui/Botoes"
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/logo/logo.png"
import { House, Handshake, UserRoundPen, Star, LogOut } from 'lucide-react';

export default function Sidebar() {
    const irPara = useNavigate()
    async function desFazerLogin() {
        const res = supabase.auth.signOut()
      }

    return(
        <div className="container">
            {/* logo */}
            <img src={Logo} alt="Logo" />

            <div className="btn-redirecionamentos">
                <Botao texto={"Comunidade"} icon={House} onClick={() => irPara("/home")} className="btn" />
                <Botao texto={"Ajuda DRM"} icon={Handshake } onClick={() => irPara("/perguntas")} className="btn" />
                <Botao texto={"Perfil"} icon={UserRoundPen } onClick={() => irPara("/home/seuUser")} className="btn" />
                <Botao texto={"Feedback"} icon={Star} onClick={() => irPara("/feedback")} className="btn" />
            </div>

            {/* Logout */}  
            <Botao texto={"Logout"} icon={LogOut} onClick={() => desFazerLogin()} className="btn" />
        </div>
    )
}