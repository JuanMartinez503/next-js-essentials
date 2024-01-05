import Image from "next/image";
import Link from "next/link";
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
const fetchSingleDrink = async (id)=>{
const response = await fetch(`${url}${id}`)

    if(!response.ok){
        throw new Error('single drink is not available')
    }
return response.json()
}

const SingleDrinkPage = async ({params})=>{

const data = await fetchSingleDrink(params.id)
const title = data?.drinks[0]?.strDrink
const imgScr = data?.drinks[0]?.strDrinkThumb

console.log(data);
    //you will have access to the params
console.log(params.id);
//this sets up dynamic routing
    return (
        <div>
            <Link href='/drinks' className="btn btn-primary mt-8 mb-12">Back to drinks
            </Link>
            <Image src={imgScr} width={300} height={300} className="w-48 h-48 rounded-lg shadow-lg mb-4"priority alt={title}/>
            <h1 className=" text-5xl mb-5">{title}</h1>
        </div>
    )
}
export default SingleDrinkPage