import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import HeadMessage from "./Components/Body/HeadMessage";
import GetStarted from "./Components/Body/GetStarted";
import TextStatement from "./Components/Body/TextStatement";
import Footer from "./Components/Footer/Footer";
import WhyChooseDocsID from "./Components/Body/WhyChooseDocsID";
import Subscription from "./Components/Body/Subscription";
import FAQSection from "./Components/Body/FAQ";
import Background from "./Components/Body/Background";

function App() {
  return (
    <div className="">
      <NavBar />
      <HeadMessage />
      <GetStarted />
      <Background />
      <div id="features" className="">
        <TextStatement />
      </div>
      <Background />
      <div id="why-choose-us" className="">
        <WhyChooseDocsID />
      </div>
      <div id="pricing">
        <Subscription />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;
