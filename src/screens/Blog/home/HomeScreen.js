import React from 'react';
import cta from '../../../assets/cta.jpg';

const HomeScreen = () => {
  return (
    <main>
      <section className="home-screen__s__one">
        <img src={cta} alt="home" />
        <div className="home-screen__s__one__div">
          <h1>
            {' '}
            Aprende, descubre <br /> y aplica como manejar tus emociones
          </h1>
          <p>
            Reprehenderit nulla est minim consectetur do sit adipisicing tempor
            commodo eiusmod aute dolore do in. Officia cupidatat laboris nulla
            mollit cillum nostrud minim pariatur proident est.
          </p>
          <button>Quiero Aprender</button>
        </div>
      </section>
      <section className="home-screen__main__two">
        <q>
          <cite>La vida es un mosaico de roles y experiencias</cite>
        </q>
      </section>
    </main>
  );
};

export default HomeScreen;
