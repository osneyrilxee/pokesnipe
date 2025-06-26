import '../app/globals.css';


export default function Home() {
  return (
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
                    {/* <img src="../assets/search-svgrepo-com.svg" alt="search something"> */}
                    {/* <img src="../assets/account-svgrepo-com (1).svg" alt="login or sign up"> */}
                    {/* <img src="../assets/buy-svgrepo-com.svg" alt="your shopping cart"> */}
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
        <div id="seventh-div-choice-box">Autres TCG</div>
    </section>

    <main>

    </main>


    <footer>

        <div className="footer-first-section">
            <div>
                <p>Contact</p>
            </div>
        </div>

        <section className="footer-second-section">

            <div>
                <h4>Nous suivre</h4>
                <p>SnipePhone</p>
            </div>

            <div>
                <h4>Navigation</h4>
            </div>

        </section>

        <div className="footer-third-section">
            <p>© 2025 PokeSnipe made by Rilxee</p>
        </div>

    </footer>
    </div>
  );
}
