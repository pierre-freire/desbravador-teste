import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  function goHome() {
    navigate('/')
  }

  return (
    <header className="flex flex-col gap-2 bg-teal-800 ">
      <FontAwesomeIcon className="text-white text-6xl py-4 cursor-pointer" icon={faGithub} onClick={goHome} />
      <h1 className="sr-only">Teste desbravadores</h1>
    </header>)
}