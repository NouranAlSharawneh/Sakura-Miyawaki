import "./App.css";
import heroImage from "../public/assets/heroImage.png";
import signature from "../public/assets/signature.png";
import lsrfLogo from "../public/assets/lsrfLogo.png";

function App() {
  return (
    <>
      <HeroSection />{" "}
    </>
  );
}

function HeroSection() {
  return (
    <section>
      <div>
        <img src={heroImage} alt="Sakura hero image" />
        <div className="nav--bar">
          <nav>
            <ul>
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">gallery</a>
              </li>
              <li>
                <a href="#">39ers</a>
              </li>
              <li>
                <a href="#">performance</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="personal--info">
          <p className="text--style-1">Birthname:</p>
          <p className="text--style-2">Sakura Miyawaki</p>
          <p className="text--style-1">Birthyear:</p>
          <p className="text--style-2">19-03-1998</p>
        </div>
        <div className="personal--info--2">
          <p className="text--style-1">Nationality:</p>
          <p className="text--style-2">Japanese</p>
          <p className="text--style-1">Hometown:</p>
          <p className="text--style-2">Kagoshima</p>
        </div>
        <div className="signature--area">
          <p className="text--style-1">Signature:</p>
          <img src={signature} alt="sakura signature" />
        </div>
        <div className="signature--area">
          <p className="text--style-1">Representative Color:</p>
          <p className="text--style-2">Cherry pink</p>
          <p className="text--style-1">MBTI:</p>
          <p className="text--style-2">INTP</p>
        </div>
        <div className="active--group">
          <p className="text--style-1">Current Group:</p>
          <img src={lsrfLogo} alt="Le sserafim Logo" />
        </div>
      </div>
    </section>
  );
}

export default App;
