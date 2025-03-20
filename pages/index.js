import Categories from "../components/module/Categories"
import CarsPage from "../components/templates/CarsPage"
import SearchBar from "../components/module/SearchBar"
import AllButton from "../components/module/AllButton"
import carsData from "../data/carsData"


function Index() {
  const cars = carsData.slice(0,3)

  return (
    <>
    <SearchBar/>
    <Categories/>
    <AllButton/>
    <CarsPage data={cars}/>
    </>

  );
}

export default Index;
