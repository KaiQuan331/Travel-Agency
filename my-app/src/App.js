import React, { Component } from 'react';
import "./App.css"

class App extends Component {
  render() {
    return (
      <div>
        <body>
  <header>
    <div class="wrapper">
      <h1>Travel Agency <span class="orange">.</span></h1>
      <nav>
        <ul>
          <li> <a href="#main-image">Home</a></li>
          <li> <a href="#steps">Destinations</a></li>
          <li> <a href="#posibilities">Routes</a></li>
          <li> <a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
    
  </header>  
  <section id="main-image">
    <div class="wrapper">
      <h2>Organize Your
      <br/>
      <strong>Tailor-Made Vacation!</strong>
      </h2>
      <a class="button-1">This Way</a>

 
    </div>
  </section>
    
  <section id="steps">
    <div class="wrapper">
      <ul>  
        <li id="step-1">
          <h4 >Plan</h4>
          <p>Entrust us with your dreams of escape: with family or friends, we will find the formula that will meet your expectations.
</p>
        </li>
        <li id="step-2">
          <h4 >Organize</h4>
          <p>Benefit from the expertise of our specialists in each destination, they will accompany you in the realization of your trip.
</p>
        </li>
        <li id="step-3">
          <h4 >Voyager</h4>
          <p>We take care of ensuring your safety and ensuring your complete peace of mind throughout your trip.</p>
        </li>
        <div class="clear"></div>
      </ul>
    </div>
  </section>
  
  <section id="posibilities">
    <div class="wrapper">
      <article class="background-image: url(https://image.ibb.co/mxcnu5/article_image_1.jpg);">
        <div class="overlay">
          <h4>Go with family</h4>
          <p><small>Give the best to those you love and share fabulous moments!</small></p>
          <a href="#" class="button-2">More Information</a>
        </div>
       
      </article>
      
      <article class="background-image: url(https://image.ibb.co/c9jWnQ/article_image_2.jpg);">
        <div class="overlay">
          <h4>Want to Experience</h4>
          <p><small>Sometimes a little escape would be welcome and would do the greatest good!</small></p>
          <a href="#" class="button-2">More Information</a>
        </div>
        
      </article>
      <div class="clear"></div>
    </div>
  </section>
  
  <section id="contact">
    <div class="wrapper">
      <h3>Contact Us</h3>
      <p>At Travel Agency we know that traveling is a human adventure but also an important financial commitment for you. This is why we make it a point of honor to take into account each of your expectations to help you in the preparation of your stay, circuit or tailor-made trip.</p>
      <form action="">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Name" />
        <label for="email">Email</label>
        <input type="text" id="email" placeholder="Enter Email" />
        <input type="submit" value="OK" class="button-3" />
      </form>
    </div> 
  </section>
  
  <footer>
   <div class="wrapper">
     <h1>Travel Agency<span class="orange">.</span></h1>
     <div class="copyright">Copyright © 2020.</div>
   </div>
  </footer>
</body>
      </div>
    );
  }
}

export default App;