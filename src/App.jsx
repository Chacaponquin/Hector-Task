import NavBar from "./Components/NavBar";
import SocialMedia from "./Components/SocialMedia";
import LeftSide from "./Components/LeftSide";
import ContentPrincipal from "./Components/ContentPrincipal";
import Footer from "./Components/Footer";
import Partner from "./Components/Partner";

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

      <Partner />
    </div>
  );
}

export default App;
