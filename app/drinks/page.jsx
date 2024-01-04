import DrinksList from '../../components/DrinksList'
const fetchDrinks = async ()=>{
    await new Promise((resolve)=>setTimeout(resolve,1000))
    //new promise is created while the data is being fetched 
    //also uses the loading.js file to load
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
const response = await fetch(url)
if(!response.ok){
    throw new Error('Failed to fetch drinks')
}
const data = await response.json()
return data
}
export default async function DrinkPage (){
const data= await fetchDrinks()
console.log(data);
    return (
        <div>
            <DrinksList drinks={data.drinks}/>
            DrinkPage
        </div>
    )
}