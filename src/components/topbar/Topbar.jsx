import React from 'react'
import './Topbar.css'
import { NotificationsNone, Language, Settings } from '@material-ui/icons';
//avatar de perfil
import avatar from '../../asset/imagenes/avatar-perfil.jpg'
//logo cacaoft
import logo from '../../asset/imagenes/Cacaoftlogo.png'

export default function Topbar() {
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo"><img src={logo} alt="logo cacaoft" className="logoimg"></img>CacaoFinTech</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src={avatar} alt="Imagen de Perfil" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}