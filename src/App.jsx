import NavBar from "./Components/NavBar";
import SocialMedia from "./Components/SocialMedia";
import LeftSide from "./Components/LeftSide";
import ContentPrincipal from "./Components/ContentPrincipal";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="hero-content">
      <NavBar />

      <section>
        <LeftSide />
        <ContentPrincipal />
        <SocialMedia />
      </section>

      <Footer />
    </div>
  );
}

export default App;
