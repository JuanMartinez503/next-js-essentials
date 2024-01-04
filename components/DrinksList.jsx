import Link from "next/link"
const DrinkList = ({drinks})=>{

    return(
        <ul className=" menu menu-vertical pl-0">
            {drinks.map(drink=>(
                <li key={drink.idDrink}>
                    <Link href={`/drinks/${drink.idDrink}`} className="btn my-1 btn-primary">{drink.strDrink}</Link>
                </li>
            ))}
        </ul>
    )
}
export default DrinkList