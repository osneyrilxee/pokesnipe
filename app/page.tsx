import '../app/globals.css';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import SearchItems from "./assets/search-svgrepo-com.svg"
import AccountProfile from "./assets/account-svgrepo-com (1).svg"
import BuyItems from "./assets/buy-svgrepo-com.svg";
import OnePieaceTcgBannerContainer from "./assets/one_pice_tcg.jpg"
import YuGiOhTcgBannerContainer from "./assets/yu_gi-oh.png";
import PokemonTcgBannerContainer from "./assets/pokemon.jpg";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Mon Site',
  description: 'Exemple avec font automatique',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
            <div>
        <div id="news">Annonces ou Informations sur la vente en ligne !</div>
    <header>
        <div className="header-div-first-class-part-img">
            {/* <img src="../assets/output (2).jpg" alt="PokeSnipe"> */}
        </div>

        <div className="nav-illus">
            <nav>
                <ul>
                    <li><a href="#d">Accueil</a></li>
                    <li><a href="#d">text</a></li>
                    <li><a href="#d">À propos</a></li>
                </ul>
                <div className="nav-logo">
                    <Image src={SearchItems} width={24} height={24} alt="search something"/>
                    <Image src={AccountProfile} width={24} height={24} alt="login or sign up"/>
                    <Image src={BuyItems} width={24} height={24}  alt="your shopping cart"/>
                </div>
            </nav>

        </div>
    </header>


    <section id="first-section-theme-list-choices">
        <div id="first-div-choice-box">Cartes Pokémon</div>
        <div id="second-div-choice-box">Cartes en Loose / Lots</div>
        <div id="third-div-choice-box">Cartes Gradées</div>
        <div id="fourth-div-choice-box">Coffrets & Produits scellés</div>
        <div id="fiveth-div-choice-box">Séries / Extensions</div>
        <div id="sixth-div-choice-box">Accessoires</div>

        <div className="div-section-others-tcg">
            <div>
            <Image src={OnePieaceTcgBannerContainer} className="one-piece" alt="One Pieace container TCG"/>
            </div>
            <div>
            <Image src={PokemonTcgBannerContainer} className="pokemon" alt="Pokemon container TCG"/>
            </div>
            <div>
            <Image src={YuGiOhTcgBannerContainer} className="yu-gi-oh" alt="Yu-Gi-Oh container TCG"/>
            </div>
       </div>
    </section>

    <main>

    </main>


    <footer>

        

        <div className="footer-third-section">
            <p>© 2025 PokeSnipe made by Rilxee</p>
        </div>

    </footer>
    </div>
      </body>
    </html>
  );
}



// export default function Home() {
//   return (

//   );
// }
