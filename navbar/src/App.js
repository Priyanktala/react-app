import { Route, Routes } from "react-router-dom";
// admin side
import Navigation from "./admin/header/Navigation";
import Home from './admin/page/Home';
import Aboutus from "./admin/page/Aboutus";
import Contactus from "./admin/page/Contactus"
import Blog from  "./admin/page/Blog";

//use side
import Usenavigation from "./user/header/Usenavigation";
import Usehome from "./user/page/Usehome";
import Useproduct from "./user/page/Useproduct";
import Useaboutus from "./user/page/Useaboutus" ;
import Useservice from "./user/page/Useservice";

function App() {

  let  status = "admin";

  if(status === "admin"){
    return (
      <>
        <Navigation/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="/AboutUs" exact element={<Aboutus/>}/>
          <Route path="/ContactUs" exact element={<Contactus/>}/>
          <Route path="/Blog" exact element={<Blog/>}/>
        </Routes>
      </>
    );
  }
  else if (status === "user") {
    return(
      <>
      <Usenavigation/>
      <Routes>
        <Route path="/" exact element={<Usehome/>}/>
        <Route path="/Product" exact element={<Useproduct/>}/>
        <Route path="/AboutUs" exact element={<Useaboutus/>}/>
        <Route path="/Service" exact element={<Useservice/>}/>
      </Routes>
      </>
    )
  }
  else{
    return<h1>Not found</h1>
  }
 
}

export default App;
