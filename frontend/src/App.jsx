import ReviewCard from "./components/reviewCard";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Main from "./components/Main";
import About from "./components/About";
import Hower from "./components/Hower";
import Footer from "./components/Footer";
import Form1 from "./components/Form1";
import Homehero from "./components/Homehero"
// import Contact from "./components/Contact"
import './index.css'
// const Rozarpay = require("rozarpay"); 
function App() {


  return (

    <div>
      <div className="mt-0"><Homehero/></div>
     <div className="my-0"> <Header/></div>
     <div><Main/></div>
     <div>
      <Cards/>
      
     </div>
     <div><About/></div>
     <div className="space-x-2 my-2 mx-12 gap-8 grid grid-cols-3">
      {/* <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/>
      <ReviewCard/> */}
     </div>
     {/* <div><Hower/></div> */}
     <div><Form1/></div>
     {/* <div><Contact/></div> */}
     {/* <div><Main/></div> */}
     <div><Footer/></div>
    </div>
  )
 
}

export default App;
