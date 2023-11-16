import { useParams } from 'react-router-dom';
import { getRepoInfo } from '../../util/API'; 
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Header from "../../components/header"


export default function ShowRepo() {
  const [repository, setRepository] = useState({})
  const { user, repo } = useParams()

  useEffect(() => {
    getRepo()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  /*
  nome, descrição, ,número de estrelas, linguagem e um link externo para a página do repositório no GitHub
  */

  useEffect(() => {
    console.log(repository)
  }, [repository])

  async function getRepo() {
    const res = await getRepoInfo(user, repo)
    setRepository(res)
  }

  return(
    <main className='p-2'>
      <Header />

      {Object.keys(repository).length > 0 && 
        <section className='text-lg'>
          <h1>Nome: {repository.name}</h1>
          <p>Descrição: {repository.description}</p>
          <p><FontAwesomeIcon className="text-slate-800 text-lg" icon={faStar} /> Estrelas: {repository.stargazers_count}</p>
          <p>Linguagem: {repository.language}</p>
          <a href={repository.html_url} target='_blank' rel='noreferrer'>Clique para o abrir repositorio</a>
        </section>}
    </main>)
}