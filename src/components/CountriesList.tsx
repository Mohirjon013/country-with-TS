import axios from "axios"
import { useContext, useEffect } from "react"
import CountiesItem from "./CountiesItem"
import { Context } from "../context/Context"


export interface CountryType {
    name:string,
    capital:string,
    img:string,
    flagIcon:string,
    population:number,
    isLike:boolean,
    isSave:boolean
}
const CountriesList = () => {
    const {counties, setCounties, refresh} = useContext(Context)

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then(res => {
            setCounties(res.data.splice(10, 30).map((item:any) => {
                const data:CountryType = {
                    name:item.name.common,
                    capital:item.capital[0],
                    img:item.flags.png,
                    flagIcon:item.flag,
                    population:item.population,
                    isLike:false,
                    isSave:false
                }
                return data
            }));
        })
    },[refresh])
    return (
        <div className="p-5 flex flex-wrap justify-between gap-5">
            {counties.map((item:CountryType, index:number) => <CountiesItem key={index} item={item} />)}
        </div>
    )
}

export default CountriesList
