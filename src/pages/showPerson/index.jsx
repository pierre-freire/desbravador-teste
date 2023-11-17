import Header from "../../components/header"
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { searchUser, getUserRepos } from "../../util/API";

export default function Home() {
  const [user, setUser] = useState({})
  const [repos, setRepos] = useState([])
  const [reversed, setReversed] = useState(false)
  const navigate = useNavigate();
  const { name } = useParams()

  useEffect(() => {
    getUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getUser() {
    const resUser = await searchUser(name)
    setUser(resUser)

    console.log(resUser)
    
    if(resUser.name === 'AxiosError') {
      if(resUser.response.status === 404) {
        navigate('/not_found')
      } else {
        navigate('/error')
      }
      return
    }

    const resRepos = await getUserRepos(name)
    const sortedRepos = resRepos.sort(sortRepos)

    setRepos(sortedRepos)
  }

  function redirectToRepo(repo) {
    navigate(`/show_repo/${name}/${repo}`)
  }

  function sortRepos(a, b) {
    if (a.stargazers_count > b.stargazers_count) {
      return -1;
    }
    if (a.stargazers_count < b.stargazers_count) {
      return 1;
    }
    
    return 0;
  }

  function changeDirection() {
    if(reversed === true) {
      const list = repos.reverse()
      setRepos(list)
    }
    
    if(reversed === false) {
      const list = repos.reverse()
      setRepos(list)
    }

    setReversed(!reversed)
  }

  return(
    <main>
      <Header />
      <div className="p-8 md:max-w-[1000px] mx-auto my-0">
        <section className="flex flex-col mb-7 gap-7">
          <div className="flex justify-between">
            <div className="flex flex-col justify-around">
              {user.name && <p className="text-lg text-teal-800 font-bold">{user.name}</p>}
              {user.email && <p className="text-lg">{user.email}</p>}
              {user.followers && <p className="text-lg">Seguidores: {user.followers}</p>}
              {user.following && <p className="text-lg">Seguindo: {user.following}</p>}
            </div>
            <img alt="user avatar" className="rounded-full w-32" src={user.avatar_url} loading="lazy" />
          </div>
          <p className="text-center text-lg">{user.bio}</p>
        </section>
        <table className="w-full items-center">
          <thead>
            <tr className="flex justify-between items-center border-solid border-b-[1px]">
              <th className="text-lg">Repositórios</th>
              <th className="flex items-center text-lg" onClick={changeDirection}>Estrelas <FontAwesomeIcon className="text-slate-800 text-lg pl-2" icon={reversed ? faArrowDown : faArrowUp} /></th>
            </tr>
          </thead>
          <tbody>
            {repos.length > 0 && repos.map((elm, i) => { return(
              <tr key={i} className="flex justify-between p-2 cursor-pointer odd:bg-teal-200 hover:bg-teal-800 hover:text-white" onClick={() => redirectToRepo(elm.name)}>
                <td className="text-lg">{elm.name}</td>
                <td className="text-lg">{elm.stargazers_count}</td>
              </tr>
            )})}
          </tbody>
        </table>
      </div>
    </main>)
}
