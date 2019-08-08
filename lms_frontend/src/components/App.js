import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Navbar from './navs/Navbar.js'
import Footer from './navs/Footer.js'
import Content from './content_boxes/Content.js'


const App = () => (
		 <Router>
			  <Navbar />
			  <Content />
			  <Footer />
		  </Router>
)




export default App;