import React, { useContext } from "react"
import { CountryType } from "./CountriesList"
import { Context } from "../context/Context"

const CountiesItem:React.FC<{item:CountryType}> = ({item}) => {
    const {counties, setCounties} = useContext(Context)
    function handleLike(id:string):void{
        // const findedData = counties.find(item => item.name = id);
        const updatedCounties = counties.map((item) => item.name === id ? { ...item, isLike: !item.isLike } : item);
        setCounties(updatedCounties);
    }
    function handleSave(id:string):void{
        const updatedCounties = counties.map((item) => item.name === id? {...item, isSave:!item.isSave } : item);
        setCounties(updatedCounties);
    }
  return (
    <div className="w-[300px] p-3 rounded-md bg-slate-200">
        <img className="h-[200px] rounded-md" src={item.img} alt="img" width={"100%"} height={200} />
        <h2 className="text-[23px] font-bold mb-2">{item.name} - {item.flagIcon.toUpperCase()}</h2>
        <p className="text-slate-500 ">{item.capital} - {item.population}</p>
        <div className="w-[180px] flex items-center justify-between mt-3">
            <button  onClick={() => handleLike(item.name)} className={`w-[47%] border-[2px] border-red-400 py-1 rounded-lg  duration-300  ${item.isLike ? "text-white bg-red-400" : "text-red-600"}`}>Like</button>
            <button onClick={() => handleSave(item.name)} className={`w-[47%] border-[2px] border-green-400 py-1 rounded-lg duration-300  ${item.isSave ? "text-white bg-green-400" : "text-green-600"}`}>Save</button>

        </div>
    </div>
  )
}

export default CountiesItem
