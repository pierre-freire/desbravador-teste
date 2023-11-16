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
    <header className="flex flex-col gap-2">
      <FontAwesomeIcon className="text-slate-800 text-6xl" icon={faGithub} onClick={goHome} />
    </header>)
}