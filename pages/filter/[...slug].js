import { useRouter } from "next/router";
import carsData from '../../data/carsData';
import CarsList from "../../components/templates/CarsList";


function FiltredCars() {
    const router = useRouter();
    const [min, max] = router.query.slug || []
    
    const filtredData = carsData.filter(car => car.price > min && car.price < max)
    console.log(filtredData);

    if (!filtredData.length) return <h3>Not Found</h3>
  return (
    <CarsList data={filtredData} />
  )
}

export default FiltredCars