import { useParams } from 'react-router-dom';
import { getRepoInfo } from '../../util/API'; 
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLaptopCode, faStar } from '@fortawesome/free-solid-svg-icons'
import Header from "../../components/header"
import Error from '../../components/error';


export default function ShowRepo() {
  const [repository, setRepository] = useState({})
  const { user, repo } = useParams()
  const [ error, setError ] = useState(false)

  useEffect(() => {
    getRepo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /*
  nome, descrição, ,número de estrelas, linguagem e um link externo para a página do repositório no GitHub
  */

  useEffect(() => {
    console.log('rrrrrrrrrr',repository)
  }, [repository])

  async function getRepo() {
    const res = await getRepoInfo(user, repo)
    if (res?.response?.status && res?.response?.status !== 200) {
      setError(true)
    }
    setRepository(res)
  }

  return(
    <>
      {error ? <Error />
      :
      <main>
        <Header />
        {Object.keys(repository).length > 0 && 
          <section className="text-lg p-8 flex flex-col md:max-w-[1000px] mx-auto my-0">
            <div className="flex justify-between mb-7">
              <div className="flex flex-col gap-3">
                <a
                  href={repository.html_url}
                  className="flex gap-2 items-center text-lg text-teal-800 font-bold cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  {repository.name}
                  <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
                <p className="flex gap-3 items-center">
                  <FontAwesomeIcon className="text-yellow-400 text-lg" icon={faStar} />
                  {repository.stargazers_count}
                </p>
                {repository.language && <p className="max-w-fit px-3
                py-[2px] rounded-full bg-teal-700 text-white">{repository.language}</p>}
              </div>
              <FontAwesomeIcon className="text-7xl self-center text-teal-800 mb-7" icon={faLaptopCode} /> 
            </div>
            {repository.description && <p className="text-center">{repository.description}</p>}
          </section>}
        </main>
      }
    </>
  )
}