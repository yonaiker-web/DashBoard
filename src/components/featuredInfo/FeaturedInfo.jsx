import './featuredinfo.css'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Ingresos</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,415</span>
                    <span className="featuredMoneyRate">
                        -12.8 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Comparado con el mes pasado</span>
            </div>
            {/*2 */}
            <div className="featuredItem">
                <span className="featuredTitle">Ventas</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,485</span>
                    <span className="featuredMoneyRate">
                        -2.8 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featuredSub">Comparado con el mes pasado</span>
            </div>
            {/*3 */}
            <div className="featuredItem">
                <span className="featuredTitle">Costos</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,347</span>
                    <span className="featuredMoneyRate">
                        +18.2 <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featuredSub">Comparado con el mes pasado</span>
            </div>
        </div>
    )
}
