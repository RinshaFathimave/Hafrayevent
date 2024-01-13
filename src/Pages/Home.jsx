import Navbar from "../Components/Navbar";
import Images from "../images/Jpg Home.png";
import './Home.css';

const Home =()=>{




 
    return(
        <div>
            <Navbar />
            <div className="homepage-container">
             
             <img src={homepageImage} alt="Homepage" className="homepage-image" />
             <h1 className="homepage-heading">Welcome to My Website</h1>
             <p className="homepage-paragraph">This is a sample homepage paragraph. Replace it with your own content.</p>
       
           </div>
    </div>
      
       
        

        
    )
}
export default Home;