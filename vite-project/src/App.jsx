import discordLogo from "./assets/discord-logo-white.png";
import menuIcon from "./assets/menu-icon.png";
import background from "./assets/discord-background.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <img src={discordLogo} alt="discord logo" id="logo-icon" />
        <img src={menuIcon} alt="menu icon" id="menu-icon" />
      </nav>
      <h1>Imagine a Place...</h1>
      <p>
        ...where you can belong to a school club, a gaming group, or a worldwide
        art community. Where just you and a handful of friends can spend time
        together. A place that makes it easy to talk every day and hang out more
        often.
      </p>
      <section>
        <div className="buttonStack">
          <button className="white-button">Download for Mac</button>
          <button className="black-button">Open Discord in your browser</button>
        </div>
        <img src={background} alt="some characters" />
      </section>
    </div>
  );
}

export default App;
