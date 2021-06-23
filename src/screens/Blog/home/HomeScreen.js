import React from "react"
// import cta from '../../../assets/cta.jpg';
import women from "../../../assets/women.jpg"
// import butterfly from '../../../assets/butterfly.jpeg';

const HomeScreen = () => {
  return (
    <main>
      <section className="blog__screen__s1">
        <h1>
          Aprende, descubre <br /> y aplica como manejar tus emociones
        </h1>
        <p> Inicia ahora </p>
      </section>
      <section className="blog__screen__s2">
        <q>
          <cite> - La vida es un mosaico de roles y experiencias - </cite>
        </q>
      </section>
      <section className="blog__screen__s3">
        <img src={women} alt="Naydu jaramillo" />
      </section>
    </main>
  )
}

export default HomeScreen
