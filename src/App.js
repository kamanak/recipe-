import React,{useEffect,useState} from 'react'
import Recipe from './Recipe';
const App = () =>{
  const APP_ID = "ec4e1804";
  const APP_KEY = "0cafe0458220e6591e3d6a07e8479c8f";
  const [recipes,setrecipes] = useState([]);
  useEffect(() => {
     getRecips()
  }

  );
 
  
  const getRecips = async () =>{
      const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);  
      const data = await response.json();
      setrecipes(data.hits);
      console.log(data.hits);
      // fetch()
      // .then(reponse => {
      //   response.json();
      // }) 
  };
  
  
  
  
  
  
  
  return(
    <div className="App">
      <form className='search-form'>
        <input className='search-bar' type='text'></input>
  <button className='search-button'>search</button>
      </form>
      {recipes.map(recipe =>(
        // @ts-ignore
        <Recipe 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} />
  ))}
    </div>
   

  );
}

export default App


