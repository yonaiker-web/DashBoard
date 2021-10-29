import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import './home.css'
//exportamos los datos de la grafica
import { userData } from '../../dummyData'
import WidgetLarge from '../../components/widgetLarge/WidgetLarge'
import WidgetSmall from '../../components/widgetSmall/WidgetSmall'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            {/*pasamos las props que se usaran para representar las graficas */}
            <Chart data={userData} title= "Analisis de Usuario" grid dataKey="Active User"/>
            <div className="homeWidgets">
                <WidgetSmall/>
                <WidgetLarge/>
                
            </div>
        </div>
    )
}
