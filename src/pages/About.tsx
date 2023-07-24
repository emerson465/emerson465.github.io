import CardExp from '../components/CardExp'
import Skill from '../components/Skill'
import './About.css'

import photo from '../assets/photo.png'

import imgReact from '../assets/react.png'
import imgNode from '../assets/node.png'
import imgHtml from '../assets/html.png'
import imgJavascript from '../assets/javascript.png'
import imgPython from '../assets/python.png'

const About = () => {
  return (
    <div>
      <div className="container first">
        <div className="first-left half">
          <h2>UM POUCO SOBRE MIM!</h2>
          <p>Olá! Sou <span>Emerson Alves</span>, um graduando em Engenharia da Computação de 22 anos. Tenho uma paixão pela tecnologia e sou desenvolvedor fullstack, especializado em <span style={{ color: "#7eb25f" }}>Node.js</span> e <span>React</span>. Além disso, tive a oportunidade de trabalhar por <span>3 anos como projetista em CAD</span> na empresa Consórcio Nova Bolandeira, onde adquiri habilidades valiosas em design e desenvolvimento de soluções computacionais. Sou uma pessoa curiosa, resiliente e adoro aprender coisas novas. Sempre estou em busca de desafios emocionantes que me permitam expandir meus conhecimentos e acompanhar as últimas tendências tecnológicas. Meu objetivo é combinar minha paixão pela engenharia da computação com minhas habilidades como desenvolvedor para criar soluções incríveis e inovadoras. Estou animado para fazer parte de projetos empolgantes, trabalhar em equipe e contribuir para o sucesso de empresas e clientes. Vamos criar algo incrível juntos!</p>
        </div>
        <div className="first-right half">
          <img src={photo} width={'80%'} />
        </div>
      </div>
      <div className="container">
        <div className="second-left half">
          <h2>CONHECIMENTO</h2>
          <ul>
            <Skill source={imgHtml} name='HTML'/>
            <Skill source={imgJavascript} name='Javascript'/>
            <Skill source={imgReact} name='React'/>
            <Skill source={imgNode} name='NodeJS'/>
            <Skill source={imgPython} name='Python'/>
          </ul>
        </div>
        <div className="second-right half">
          <h2>EXPERIENCIA</h2>
          <CardExp empresa='Consorcio Nova Bolandeira' cargo='Cadista' periodo='2020 - 2023' desc='elaborar e desenvolver esboços e plantas, modificar e atualizar desenhos utilizando CAD, monitoramento e roteirização de esquipes, criação de relatorios, levantamento de materiais e fechamento de medição.'/>
        </div>
      </div>
    </div>
  )
}

export default About