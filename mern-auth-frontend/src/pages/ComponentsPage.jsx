
import { DoghnutChart } from '../components/custom/Doghnut'
import { BarChartComponent } from '../components/custom/BarChart'
import { AreaChartComponent } from '../components/custom/AreaChart'
import { AreaChartInteractive } from '../components/custom/AreaChartInteractive'
import { MiniBarComponent } from '../components/custom/MiniChart'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const ComponentsPage = () => {
    const navigate = useNavigate()
    return (
        <div className='flex item-center p-12 relative  bg-cover bg-center bg-[url("/bg_img.png")]'>
            <img onClick={() => { navigate("/") }} className="absolute left-5 top-5 sm:left-20 w-8 h-12 sm:w-32 cursor-pointer" src={assets.authLogo} />
            <div className='flex mt-8 gap-4 flex-wrap'>
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
