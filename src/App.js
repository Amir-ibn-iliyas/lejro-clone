
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Navbar from "./component/Navbar";
import Section1 from "./component/Section1";
import Services from "./component/Services";
import Footer from "./component/Footer";

function App() {
  return (
   <>
   <Navbar/>
   <Section1/>
   <Services/>
   <Footer/>
   </>
  );
}

export default App;
