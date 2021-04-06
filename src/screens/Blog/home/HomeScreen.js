import React from 'react';
import cta from '../../../assets/cta.jpg';
import women from '../../../assets/women.jpg';

const HomeScreen = () => {
  return (
    <main>
      <section className="home-screen__s__one">
        <img src={cta} alt="home" title="Maneja tus emociones" />
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
      <section className="home-screen__s__two">
        <q>
          <cite> - La vida es un mosaico de roles y experiencias - </cite>
        </q>
      </section>
      <section className="home-screen__s__three">
        <div className="home-screen__s__three__div">
          <h3>¿Quién es Naydú?</h3>
          <p>
            Officia ullamco aliquip voluptate anim aliquip proident sint culpa
            adipisicing laborum. Est dolor mollit dolor aliquip nostrud ipsum in
            elit. Lorem velit ut minim do aliquip est incididunt ut quis
            voluptate non. Aliquip pariatur minim laboris incididunt sint
            consequat ex ad voluptate. Deserunt esse esse sit pariatur pariatur
            laboris qui elit cillum laboris proident magna reprehenderit
            cupidatat. Amet ad minim laborum eiusmod sit est fugiat adipisicing
            ea dolore. Irure sint ut ut occaecat proident et in. Aliqua quis
            commodo ut aliquip consectetur ex id sint anim id aliqua nulla. Enim
            veniam sit eu sit esse officia anim anim. Deserunt quis qui ad duis
            Lorem est aliqua anim irure. Excepteur mollit incididunt officia
          </p>
        </div>
        <img src={women} alt="home" />
      </section>
      <section className="home-screen__s__four">
        <div className="home-screen__s__four__main">
          <h3 className="home-screen__s__four__main__title">
            {' '}
            Sigueme en redes sociales{' '}
          </h3>
          <div className="home-screen__s__four__social">
            <ul>
              <li>FB</li>
              <li>INSTA</li>
              <li>YT</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomeScreen;
