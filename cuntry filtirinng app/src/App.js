
import { useEffect, useState } from 'react';
import './App.css';
import Countrie from './Components/Countrie';
import Country from './Components/Country';
import Search from './Components/Search';

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [isLoading,setLoading]=useState(true)
  const [Error,setError]=useState(null)
  const [countries,setcountries]=useState([])
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const fetchData=async(url)=>{
    setLoading(true)

    try {
      const response=await fetch(url);
      const data=await response.json();
    
      setcountries(data)
      setFilteredCountries(data)
       setLoading(false)
       setError(null)
    } catch (error) {
      setLoading(false)
      setError(error)
    }
  }
  useEffect(() => {
 
    fetchData(url)
  }, [])
  const handleRemoveCountry=(name)=>{
   const filter=filteredCountries.filter(()=>
    Country.name.common != name);
    setFilteredCountries(filter)
    
  }
  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountries = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilteredCountries(newCountries);
  };

  
  return (
    <div className="App">
     
    <h1> Country app </h1>
    <Search  onSearch={handleSearch} />
    {isLoading && <h2>Is Loading....</h2> }
    {Error &&<h2>{Error.name}</h2> }
    {countries && 
    <Countrie 
    countries={filteredCountries} 
    onRemoveCountry={handleRemoveCountry}
    /> }
    </div>
  );
}

export default App;
