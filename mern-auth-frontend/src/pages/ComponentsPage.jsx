
import { DoghnutChart } from '../components/custom/Doghnut'
import { BarChartComponent } from '../components/custom/BarChart'
import { AreaChartComponent } from '../components/custom/AreaChart'
import { AreaChartInteractive } from '../components/custom/AreaChartInteractive'
import { MiniBarComponent } from '../components/custom/MiniChart'

const ComponentsPage = () => {
    return (
        <div className='flex item-center p-12  bg-cover bg-center bg-[url("/bg_img.png")]'>
            <div className='flex flex-wrap gap-4'>
                <DoghnutChart />
                <BarChartComponent />
                <AreaChartComponent />
                <AreaChartInteractive />
                <MiniBarComponent />
            </div>
        </div>
    )
}

export default ComponentsPage
