import Image from "next/image"
import Link from "next/link"
const DrinkList = ({drinks})=>{

    return(
        <ul className=" grid sm:grid-cols-2 gap-6 mt-6 ">
            {drinks.map(drink=>(
                <li key={drink.idDrink}>
                    <Link href={`/drinks/${drink.idDrink}`} className="text-xl my-1 ">
                        <div className="relative h-48 mb-4">
                            <Image src={drink.strDrinkThumb} fill  sizes="(max-width:768px)100vw, (max-width:1200px) 50vw," 
                            className="rounded-2xl"/>

                        </div>
                        {drink.strDrink}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
export default DrinkList