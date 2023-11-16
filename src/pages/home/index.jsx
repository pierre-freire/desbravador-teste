import Header from "../../components/header"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate();
  
  function handleKeyDown(key) {
    if (key === 'Enter') {
      searchApi()
    }
  }
  
  function searchApi() {
    navigate(`/show_person/${search}`)
  }

  return(
    <main className="p-2 h-full">
      <Header />
      <div className="w-full h-full flex grow items-center">
        <label className="flex flex-col grow text-center">
          Digite um nome de usuário/a
          <input id="search_bar" className="outline-none flex grow items-center border-solid border-2 border-black rounded p-1 mt-2" value={search} onChange={(e) => {setSearch(e.target.value)}} onKeyDown={(e) => handleKeyDown(e.key)} />
        </label>
      </div>
    </main>)
}