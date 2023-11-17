import Header from "../../components/header"
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { listUsers } from "../../util/API";

export default function Home() {
  const [search, setSearch] = useState('')
  const [homeUsers, setHomeUsers] = useState([])
  const navigate = useNavigate();
  
  function handleKeyDown(key) {
    if (key === 'Enter') {
      searchApi()
    }
  }
  
  function searchApi() {
    if(search.length === 0 ) return
    navigate(`/show_person/${search}`)
  }

  useEffect(() => {
    getUsers()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getUsers() {
    const resUser = await listUsers()
    
    if (resUser?.response?.status && resUser?.response?.status !== 200) {
      navigate('/error')
    } else {
      setHomeUsers(resUser)
    }
  }
  return (
    <>
        <main>
          <Header />
          <div className="flex flex-col justify-center items-center gap-3 p-8">
            <label  htmlFor="search_bar" className="text-center">
              Digite um nome de usuário(a)
            </label>
            <div className="flex flex-col md:flex-row gap-3 md:gap-0 min-w-[300px]">
              <input id="search_bar" placeholder="Digite o nome de um usuário" className="border-b border-teal-800 p-2 bg-slate-100 md:min-w-[300px]" value={search} onChange={(e) => {setSearch(e.target.value)}} onKeyDown={(e) => handleKeyDown(e.key)} />
              <button onClick={searchApi} className="bg-teal-800 p-3 text-white rounded-e hover:bg-teal-700">Pesquisar</button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 p-8">
            {homeUsers && homeUsers.map((item) => (
              <a
                href={`show_person/${item.login}`}
                key={item.id}
                className="flex items-center gap-3 min-w-[250px] rounded-full px-2 py-2 bg-teal-200 hover:bg-teal-800 hover:text-white"
              >
                <img
                  src={item.avatar_url}
                  className="aspect-square sm:w-12 md:h-12 rounded-full"
                  alt={`Foto de perfil de ${item.login}`}
                  width={48}
                  height={48}
                />
                {item.login}
              </a>)
              )}
          </div>
        </main>
    </>
  )
}