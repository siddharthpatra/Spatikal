import React from 'react'

import '../../resources/css/content.css'
import MountAbu from '../../resources/images/MountAbu.jpeg'
import Navbar from '../header/Navbar'
import Footer from '../footer/footer'

const Content = ()=> {
    return (
        <>
            <Navbar/>
            <div className ="card-font">
            <h2 >Blog</h2>
            <div className="card-content">
            <div className="content-image-container">
           <img src={MountAbu} />
          
           </div>
           </div>
           <h2 >Mount Abu</h2>
          
           <div className="bordertop"></div>
                        <div className="information">

                       
                        <ul>
                            <li><i className="far fa-user"> Sipun</i>
                            &nbsp;&nbsp;&nbsp;

                            <i className="far fa-calendar"> February 27, 2021</i>
                            &nbsp;&nbsp;&nbsp;
                        <i className="far fa-folder"> Science and Technology</i></li>
                        </ul>
                        
                        </div>
                    
           
                        
            <div className="bordertop"></div>
             
        <div className="font-size">             
           <p>Fake words can be an excellent way for writers to begin putting words to paper. Whether they are looking to overcome a bit of writer's block or just need a quality way to begin writing each day, having a random pseudo word generated can be an ideal way to do this. Once the writer has a random fake word, he or she can attempt to write a paragraph about the meaning of that nonsense word, or simply come up with a definition, and then use the word in a sentence. Since the words aren't real, it should help overcome writer's block or make it an easy way to begin writing each day </p>
           </div> 
           <br></br>
           </div>
            <Footer/>
        </>
    )
}



export default Content