import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import TravelAnimation from "./animation.json"
import Lottie from "lottie-react"


function App() {

  return (
   <>
   
   <Home></Home>
   <div style={{backgroundColor:"#303030"}} > <Lottie   height='200px' width="200px" animationData={TravelAnimation}/></div>
  
   <Footer></Footer>
   </>
  );
}

export default App;
