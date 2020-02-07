// @ts-nocheck
import React,{useEffect,useState} from 'react'
import './App.css'
import Recipe from './Recipe';
const App = () =>{
  const APP_ID = "ec4e1804";
  const APP_KEY = "0cafe0458220e6591e3d6a07e8479c8f";
  const [recipes,setrecipes] = useState([]);
  const [search,setsearch] = useState("");
  const [query,setquery] = useState('chicken');
  useEffect(() => {
     getRecips()
  },[query]

  );
 
  
  const getRecips = async () =>{
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);  
      const data = await response.json();
      setrecipes(data.hits);
      console.log(data.hits);
      // fetch()
      // .then(reponse => {
      //   response.json();
      // }) 
  };
  
  const updatesearch =(e) =>{
    setsearch(e.target.value)
   
  };
  const getsearch =(e) =>{
    e.preventDefault();
    setquery(search);
    setsearch("");
  }
  
  
  
  
  
  return(
    <div className="App">
      <form onSubmit={getsearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updatesearch}></input>
  <button className='search-button'>search</button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe =>(
        // @ts-ignore
        <Recipe
         key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients}
        totalTime={recipe.recipe.totalTime} />
  ))}
  </div>
    </div>
   

  );
}

export default App


