import { Card } from './Card';
 import { data } from './data';
 import logo from './logo.svg';
import './card.css'

import './App.css';

 function App() {
  let index = 0

// const data = [  {'title': 'gmjh', 'description': 'ghgggggguuuuuuuuuuddd'}]
  return (
    <div className="App">
      <header className="header">
        <h5>Brand Name</h5>
        <div>
          <p>Home</p>
          <p>Product</p>
          <p>Pricing</p>
          <p>Contact</p>
        </div>
        <div>
          <h5>Login</h5>
          <button className="btn-one btn-header">Join Us</button>
        </div>
      </header>
<div className="body">
        <p id="p">Join Us</p>
        <h1 id="h1" className="white">best learning oppertunities</h1>
        <p className="white discription">we know how large objects will act but things on small scale just do not act that way.</p>
        <div className="btns">
          <button className="btn-one">Get Qoute Now</button>
          <button id="btn-twe">Learn More</button>
        </div>
       <div className="cards"> {

          
        
          data.map((element)=> 
          <Card title={element.title} description={element.description}  logo={element.logo}></Card>
          )
        
       
      }
       </div>
  
      
      
       </div>


    </div>
  );
}

export default App;
