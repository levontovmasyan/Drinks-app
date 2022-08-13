import './App.css';
import React , {useState,useEffect} from 'react';
import DrinkCard from './components/DrinkCard'
import SearchBar from './components/SearchBar'
import Pagination from './components/Pagination';

const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

function App() {
 
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState("");
  const [drinks,setDrinks] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const searchDrinks = async ()=>{
    setIsLoading(true)
    const url = apiUrl + query
    const res = await fetch (url)
    const data = await res.json()
    console.log(data);
    setDrinks(data.drinks)
    setIsLoading(false)
  }

  useEffect(() => {
    searchDrinks()
  } , [])

  const handleSubmit = event => {
    event.preventDefault()
    searchDrinks()
  }

 // trying
  if(drinks){
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = drinks.slice(indexOfFirstPost, indexOfLastPost);
  
  //   // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
   
    return (
      <div className="container">
        <h2>My Drink App</h2>
        <SearchBar
            isisLoading={isLoading}
            query={query}
            setQuery={setQuery}
            handleSubmit={handleSubmit}
          />
        <div className="drinks-div"> 
        {currentPosts.map(currentPosts => (
          <DrinkCard 
          key={currentPosts.idDrink}
          drinks={currentPosts}
    />
        ))}
        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={drinks.length}
            paginate={paginate}
          />
          
        </div>
      </div>);
    
    } else{
      return (
        <div className="container">
          <h2>My Drink App</h2>
          <SearchBar
              isisLoading={isLoading}
              query={query}
              setQuery={setQuery}
              handleSubmit={handleSubmit}
            />
          <div className="drinks-div"> 
          {drinks ? drinks.map(drinks => (
            <DrinkCard 
            key={drinks.idDrink}
            drinks={drinks}
      />
          )): 'No drinks , Try Something else :)'}

            
          </div>
        </div>);
      
      }
      
    }
  

  




 
export default App;
