import React, { useContext } from "react"
import { Context } from "../context/Context"
import { CountryType } from "./CountriesList"

interface HeadType {
  title:string
  extraStyle:string
  // onClick:React.MouseEventHandler<HTMLButtonElement>
}

const Header = ({title, extraStyle}:HeadType) => {
  const {counties,setCounties,refresh, setRefresh} = useContext(Context)
  function handleChange(e:React.ChangeEvent<HTMLInputElement>){
    const value = (e.target as HTMLInputElement).value.toLowerCase()
    const data = counties.filter((item:CountryType) => item.name.toLowerCase().includes(value))
    setCounties(data)
    if(!value){
      setRefresh(!refresh)
    }
  }

  // like and save
  const likedCount = counties.reduce((sum:number,item:CountryType) => sum + (item.isLike ? 1 : 0),0)
  const savedCount = counties.reduce((sum:number,item:CountryType) => sum + (item.isSave ? 1 : 0),0)

  return (
    <header className={`${extraStyle} `}>
      <div className="flex justify-between items-center bg-blue-300 p-5">
        <h1 className="font-bold text-[25px] ">{title}</h1>
        <div className="flex items-center gap-2">
          <button className="rounded-full w-[65px] h-[65px] bg-red-500 text-white"> 
            (<span>{likedCount}</span>)
            Like
          </button>
          <button className="rounded-full w-[65px] h-[65px] bg-green-500 text-white"> 
            (<span>{savedCount}</span>)
            Save
          </button>
        </div>
      </div>
      
      <input onChange={handleChange} className="p-2 w-[300px] rounded-md outline-none border-[1px] border-slate-600 mt-3 ml-5" type="text" placeholder="Searching...." />
    </header>
  )
}

export default Header
