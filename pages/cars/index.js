import Categories from "../../components/module/Categories"
import CarsPage from "../../components/templates/CarsPage"
import SearchBar from "../../components/module/SearchBar"
import carsData from "../../data/carsData"

const Cars = () => {
  return (
    <div>
        <SearchBar/>
        <Categories/>
        <CarsPage data={carsData} />
    </div>
  )
}

export default Cars