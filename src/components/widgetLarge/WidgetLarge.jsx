import './widgetlarge.css'

export default function WidgetLarge() {

    const Button = ({type}) => {
        return <button className={"widgetLargeButton " + type}>{type}</button>
    }

    return (
        <div className="widgetLarge">
            <h3 className="widgetLargeTitle">Ultimas Transacciones</h3>
            <table className="widgetLargeTable">
                <tr className="widgetLargeTr">
                    <th className="widgetLargeTh">Clientes</th>
                    <th className="widgetLargeTh">Datos</th>
                    <th className="widgetLargeTh">Monto</th>
                    <th className="widgetLargeTh">Estado</th>
                </tr>
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://images.pexels.com/photos/2909369/pexels-photo-2909369.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLargeImg"/>
                        <span className="widgetLargeName">Susan Carol</span>
                    </td>
                    <td className="widgetLargeData">28 Ago 2021</td>
                    <td className="widgetLargeMount">$124.00</td>
                    <td className="widgetLargeStatus"><Button type="Aprobado"/></td>
                </tr>
                {/*2 */}
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://images.pexels.com/photos/9226518/pexels-photo-9226518.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLargeImg"/>
                        <span className="widgetLargeName">Martha Lopez</span>
                    </td>
                    <td className="widgetLargeData">27 Ago 2021</td>
                    <td className="widgetLargeMount">$1274.00</td>
                    <td className="widgetLargeStatus"><Button type="Rechazado"/></td>
                </tr>
                {/*3 */}
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://images.pexels.com/photos/2468487/pexels-photo-2468487.png?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLargeImg"/>
                        <span className="widgetLargeName">Harry Potter</span>
                    </td>
                    <td className="widgetLargeData">28 Ago 2021</td>
                    <td className="widgetLargeMount">$84.00</td>
                    <td className="widgetLargeStatus"><Button type="Pendiente"/></td>
                </tr>
                {/*4 */}
                <tr className="widgetLargeTr">
                    <td className="widgetLargeUser">
                        <img src="https://images.pexels.com/photos/3810552/pexels-photo-3810552.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className="widgetLargeImg"/>
                        <span className="widgetLargeName">Susan Bi Antony</span>
                    </td>
                    <td className="widgetLargeData">24 Oct 2021</td>
                    <td className="widgetLargeMount">$124.00</td>
                    <td className="widgetLargeStatus"><Button type="Aprobado"/></td>
                </tr>
            </table>
        </div>
    )
}
