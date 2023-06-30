import { useAppContext } from '../context/appContext'
import StatsEmployee from './StatEmployee'
import { FcAssistant, FcPortraitMode,FcManager,FcBusinessman} from "react-icons/fc";
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineDeliveryDining } from "react-icons/md";
import Wrapper from '../assets/wrappers/StatsContainer'


const StatsContainer = () => {
  const { stats } = useAppContext()

  const defaultStats = [
    {
      title: 'Managers',
      count: stats.Manager || 0,
      icon: <FcManager />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'Admins',
      count: stats.Admin || 0,
      icon: <GrUserAdmin />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'Cashiers',
      count: stats.Cashier || 0,
      icon: <FcAssistant />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
    {
      title: 'Technicians',
      count: stats.Technician || 0,
      icon: <FcPortraitMode />,
      color: '#7f12b4',
      bcg: '#d696f6',
    },
    {
      title: 'Delivery Persons',
      count: stats.DeliveryPerson || 0,
      icon: <MdOutlineDeliveryDining />,
      color: '#068445',
      bcg: '#90f8c4',
    },
    {
      title: 'Accountants',
      count: stats.Accountant || 0,
      icon: <FcBusinessman />,
      color: '#0C100E',
      bcg: '#868887',
    },
  ]

  return (
    <Wrapper>
      {defaultStats.map((employee, index) => {
        return <StatsEmployee key={index} {...employee} />
      })}
    </Wrapper>
  )
}

export default StatsContainer