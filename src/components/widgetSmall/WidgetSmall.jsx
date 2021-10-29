import './widgetsmall.css'
import { Visibility } from '@material-ui/icons'

export default function WidgetSmall() {
    return (
        <div className="widgetSmall">
            <span className="widgetSmallTitle">Nuevos Miembros</span>
            <ul className="widgetSmallList">
                <li className="widgetSmallListItem">
                    <img src="https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Yonaiker Ocando</span>
                        <span className="widgetSmallUserTitle">Desarrollador Web</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility className="widgetSmallIcon"/>
                        Ver
                    </button>
                </li>
                {/*2 */}
                <li className="widgetSmallListItem">
                    <img src="https://images.pexels.com/photos/1771383/pexels-photo-1771383.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Anastasia Paredes</span>
                        <span className="widgetSmallUserTitle">Diseñadora Grafica</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility/>
                        Ver
                    </button>
                </li>
                {/*3 */}
                <li className="widgetSmallListItem">
                    <img src="https://images.pexels.com/photos/3214807/pexels-photo-3214807.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Edgar Lopez</span>
                        <span className="widgetSmallUserTitle">Monutiny Manager</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility/>
                        Ver
                    </button>
                </li>
                {/*4 */}
                <li className="widgetSmallListItem">
                    <img src="https://images.pexels.com/photos/3418814/pexels-photo-3418814.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Crismarly Canelon</span>
                        <span className="widgetSmallUserTitle">Base de Datos</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility/>
                        Ver
                    </button>
                </li>
                {/*5 */}
                <li className="widgetSmallListItem">
                    <img src="https://images.pexels.com/photos/3068120/pexels-photo-3068120.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetSmallImg" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Carmen Limones</span>
                        <span className="widgetSmallUserTitle">Soporte</span>
                    </div>
                    <button className="widgetSmallButton">
                        <Visibility/>
                        Ver
                    </button>
                </li>
            </ul>
        </div>
    )
}
