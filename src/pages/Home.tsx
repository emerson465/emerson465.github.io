import copy from "copy-to-clipboard";
import { useState } from 'react'

import { BsLinkedin, BsFillClipboardCheckFill, BsFillClipboardFill, BsFillCloudDownloadFill } from "react-icons/bs";

import resume from '../assets/Emerson Alves.pdf'

import './Home.css'

const Home = () => {

  const [isCopied, setIsCopied] = useState(false);
  const linkedin = "https://www.linkedin.com/in/emerson465/"


  const copyToClipboard = () => {
    copy("emerson.s.alves465@gmail.com");
    setIsCopied(true)
  }

  return (
    <div className='bg className="no-select"'>
      <div className="container first">
        <div className='first-half'>

          <div>
            <h3>Olá meu nome é</h3>
            <h1>Emerson Alves!</h1>
            <h2>Futuro Engenheiro da Computação,</h2>
            <h2>Fullstack Developer</h2>
          </div>

          <div className="home-button">

            <h4>Vamos trabalhar juntos! entre em contato comigo</h4>

            <div onClick={copyToClipboard}>
              <h4 className="no-select">{isCopied ? "Copiado!" : "emerson.s.alves465@gmail.com"}</h4>
              <button >
                {isCopied ? <BsFillClipboardCheckFill size={32} /> : <BsFillClipboardFill size={32} />}
              </button>
            </div>

          </div>

          <div className="home-button">
            <a href={resume} download="Emerson Alves Curriculo" target='_blank'>
              <div>
                Meu curriculo :D
                <button >
                  <BsFillCloudDownloadFill size={32} />
                </button>
              </div>
            </a>
          </div>

          <div className="home-button">
            <a href={linkedin} target='_blank'>
              <div>
                <p>
                Linkedin
                </p>
                <button >
                  <BsLinkedin size={32} />
                </button>
              </div>
            </a>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Home