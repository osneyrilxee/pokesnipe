import '../app/style/main/globals.css';
import { Inter } from 'next/font/google';
import logo from '../public/output-removebg-preview.png';
import Image from 'next/image';
import SearchItems from "../public/search-svgrepo-com.svg";
import AccountProfile from "../public/account-svgrepo-com (1).svg";
import BuyItems from "../public/buy-svgrepo-com.svg";
import OnePieaceTcgBannerContainer from "../public/one_pice_tcg.jpg";
import YuGiOhTcgBannerContainer from "../public/yu_gi-oh.png";
import PokemonTcgBannerContainer from "../public/pokemon_banner.png";
import "./javascript/main/main.js";
import "../app/javascript/main/configs";
import menuChoices from "../public/lines.svg";
import "./javascript/main/main.js";
// import { useEffect } from 'react';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function Page() { 

  return (
            <div id="body">
        <div className="p-6" id="news">Annonces ou Informations sur la vente en ligne !</div>
    <header>
        {/* <div className="header-div-first-class-part-img">
            <Image src={logo} alt="" />
        </div> */}

            <nav>
                <ul>
                    <li><a href="https://pokesnipe.vercel.app"><Image className="nav-part-img-container" src={logo} alt="" /></a></li>
                    <li><a className="link-nav-section" href="#d">Accueil</a></li>
                    <li><a className="link-nav-section" href="#d">Nos services</a></li>
                    <li><a className="link-nav-section" href="#d">À propos</a></li>
                </ul>
                <div className="nav-logo">
                    <Image src={SearchItems} width={24} height={24} alt="search something"/>
                    <Image src={AccountProfile} width={24} height={24} alt="login or sign up"/>
                    <Image src={BuyItems} width={24} height={24}  alt="your shopping cart"/>
                    <Image className="menu-hamburger-nav-container" src={menuChoices} width={24} height={24} alt=""></Image>
                </div>
            </nav>

    </header>

    <section className="search-bar-section">
        <strong>Pokesnipe</strong>
        <form>
            <input type="text" className="text-container" placeholder="Recherchez"></input>        
            <Image className="search-bar-items-logo-main" src={SearchItems} width={24} alt=""></Image>
        </form>
    </section>


    <section className="first-section-theme-list-choices">
        <div className="navigation-container-flex">
            <a id="first-div-choice-box" href="/cards_second_path/page.tsx">Carte Pokémon</a>
            <a id="second-div-choice-box" href="#d"><p className="name-domain-page">Loose & Lots</p></a>
            <a id="third-div-choice-box" href="#d"><p className="name-domain-page">Cartes Gradées</p></a>
            <a id="fourth-div-choice-box" href="#d"><p className="name-domain-page">Coffrets & Produits scellés</p></a>
            <a id="fiveth-div-choice-box" href="#d"><p className="name-domain-page">Séries & Extensions</p></a>
            <a id="sixth-div-choice-box" href="#d"><p className="name-domain-page">Accessoires</p></a>
        </div>
        <div className="div-section-others-tcg">
            <div>
            <Image src={OnePieaceTcgBannerContainer} className="one-piece" width={200} alt="One Pieace container TCG"/>
            </div>
            <div>
            <Image src={PokemonTcgBannerContainer} className="pokemon" width={200} alt="Pokemon container TCG"/>
            </div>
            <div>
            <Image src={YuGiOhTcgBannerContainer} className="yu-gi-oh" width={200} alt="Yu-Gi-Oh container TCG"/>
            </div>
       </div>
    </section>

    <main>
        <h1>Les articles arriveront prochainement !</h1>
        <div className="informations">
            <h2>Contenue container d'article de vente <code>.map()</code> ou <code>forEach()</code></h2>
        </div>
    </main>


    <footer>
        

        <div className="footer-third-section">
            <p>© 2025 PokeSnipe made by Rilxee</p>
        </div>

    </footer>
    </div>
  );
}