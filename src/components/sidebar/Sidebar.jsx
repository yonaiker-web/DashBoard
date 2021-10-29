import "./sidebar.css"
import { LineStyle,  Timeline, TrendingUp, Person, Store, AttachMoney, Assessment, Email, DynamicFeed, Chat, ManageAccounts, Report } from '@material-ui/icons'
import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul classNamw="sidebarList">
                        <Link exact to="/" className="sidebarLink">
                            <li className="sidebarListItem active">
                                <LineStyle className="sidebarIcon"/>
                                inicio
                            </li>
                        </Link>
                        
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analisis
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon" />
                            Ventas
                        </li>
                    </ul>
                </div>
                {/*2 */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Menu Rapido</h3>
                    <ul classNamw="sidebarList">
                        {/*usuarios */}
                        <Link to="/usuarios" className="sidebarLink">
                            <li className="sidebarListItem active">
                                <Person className="sidebarIcon"/>
                                Usuarios
                            </li>
                        </Link>
                        {/*productos */}
                        <Link to="/productos" className="sidebarLink">
                        <li className="sidebarListItem">
                            <Store className="sidebarIcon" />
                            Productos
                        </li>
                        </Link>
                        
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon" />
                            Transacciones
                        </li>
                        <li className="sidebarListItem">
                            <Assessment className="sidebarIcon" />
                            Reportes
                        </li>
                    </ul>
                </div>
                {/*3 */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notificaciones</h3>
                    <ul classNamw="sidebarList">
                        <li className="sidebarListItem active">
                            <Email className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon" />
                            Realimentacion
                        </li>
                        <li className="sidebarListItem">
                            <Chat className="sidebarIcon" />
                            Chat
                        </li>
                    </ul>
                </div>
                {/*4 */}
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Personal</h3>
                    <ul classNamw="sidebarList">
                        <li className="sidebarListItem active">
                            <Timeline className="sidebarIcon"/>
                            Gerente
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon" />
                            Analisis
                        </li>
                        <li className="sidebarListItem">
                            <Report className="sidebarIcon" />
                            Reportes
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}