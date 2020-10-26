import React from 'react';
import {Link} from 'react-router-dom';

import Navbar from '../../components/Navbar';
import logoSimbolo from '../../assets/logoSimbolo.svg';
import LogoBanner from '../../assets/LogoBanner.svg';

import RedeSocial from '../../components/RedeSocial';
import ImgCell from '../../assets/preview_cell.png';
import IconPlayStore from '../../assets/icon_PlayStore.svg';

import './Home.scss'

const LinkPlayStore = "https://play.google.com/store/apps/details?id=com.unidesenvlvimento.chamanozap&hl=pt_BR";

function Home (){
    return (
        <div className="home">
            <section className="box_1">
                <Navbar/>
                <div className="novidade">
                    <Link to='/web' className="versao_web global_description">
                        Versão web
                    </Link>
                    <div className="alerta_novidade">
                        <p className="global_description">Novidade!</p>
                    </div>
                </div>
                <div className="RedeSocialVertical">
                    <RedeSocial/>
                </div>
                <img className="LogoBanner" src={LogoBanner} alt="Logo Chama no Zap!"/>
            </section>
            <section className="box_2">
                <div className="ImgCell">
                    <img src={ImgCell} alt="Preview App, chama no zap!"/>
                </div>
                <div className="content_description">
                    <h3 className="global_title">O que é</h3>
                    <p className="global_description">
                        Chama no Zap! É um aplicativo que tem a missão de facilitar o inicio de 
                        novas conversa no WhatsApp. Com este aplicativo, você não precisa salvar 
                        o números da pessoa ou empresa para começar a conversa.
                    </p>
                    <Link to={{pathname: LinkPlayStore}} target="_blank" className="dowloadApp">
                        <img src={IconPlayStore}/>
                        <p className="global_description link-home">Instalar Aplicativo</p>
                    </Link>
                </div>
            </section>
            <section className="box_3">
                <div className="logoSimbolo">
                    <img src={logoSimbolo} />
                </div>
                <div className="content_description">
                    <h3 className="global_title">Por quê</h3>
                    <p className="global_description">
                        Chama no Zap! Nasceu, da necessidade de iniciar novas conversar 
                        no whatsapp sem precisar salvar número nos contatos da agenda.<br /><br />
                        Chama no Zap, nasceu em uma tarde de domingo, foi desenvolvido por Gean Lopes (Eu, para me conhecer 
                         <Link to={{ pathname: "https://www.linkedin.com/in/geanlopes/" }} target="_blank"> clique aqui </Link>)
                        O aplicativo é gratuito e está disponível na Play Store. Você pode baixar clicando no botão acima.
                    </p>
                </div>
            </section>
            <section className="box_4">
                <h3 className="global_title">Contato</h3>
                <div className="icones_contato">
                    <RedeSocial />
                </div>
            </section>
        </div>
    )
}

export default Home;