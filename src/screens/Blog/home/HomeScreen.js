import React from 'react';
import cta from '../../../assets/cta.jpg';

const HomeScreen = () => {
  return (
    <main className="blog-screen__main">
      <section className="blog-screen__s__one">
        <img src={cta} alt="Blog" />
        <div className="blog-screen__s__one__div">
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
    </main>
  );
};

export default HomeScreen;
