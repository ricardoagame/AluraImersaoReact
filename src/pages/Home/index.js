import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';
import dadosIniciais from '../../data/dados_iniciais.json';


function Home() {
  return (
    <div style={{background: "#141414"}}> teste
      <Menu />

      <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo} url={dadosIniciais.categorias[0].videos[0].url} videoDescription={"Teste"}/>

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Footer>

      </Footer>
    </div>
  );
}

export default Home;
