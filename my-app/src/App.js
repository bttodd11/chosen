
import { Outlet, Link } from 'react-router-dom';
import './App.css';
import Footer from './component/Footer/Footer';
import instagram from './img/instagram.png'
import twitter from './img/twitter.png'
import $ from 'jquery';

function App() {

  window.addEventListener('load', function () {
    $('.preloadBG').hide()
    $('.backgroundImage').show(); 


  })

  return (
    <body>
      <div className='preloadBG'>

      </div>
  <div>
    <div className='backgroundImage'>
     <a className="musicTitleLink" href=''><Link to="/music"><h3 className="musicTitle">Music</h3></Link></a>
      <h3 className="artTitle">Art</h3>
      <p className="clothTitle">Cloth</p>
      <div className="socialSection">
      <a href=""><img title="navIcon" src={instagram} alt="my-img" class="socialIcon" /></a>
      <a href=""><img title="navIcon" src={twitter} alt="my-img" class="socialIcon" /></a>
      <Outlet />
      </div>
      <Footer />
    </div>
  </div>
  </body>
  );
}

export default App;
