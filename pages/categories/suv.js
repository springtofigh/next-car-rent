import CarsList from '../../components/templates/CarsList';
import carsData from './../../data/carsData';

function SUV() {
  const suvCars = carsData.filter(car => car.category === 'suv')
  
  return (
    <CarsList data={suvCars}/>
  )
}

export default SUV