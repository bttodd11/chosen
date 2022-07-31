
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
          <a href=''><Link to="/music"><p className="musicTitle">Music</p></Link></a>
          <a href='https://blessedbychosen.myshopify.com/'><h3 className="artTitle">Art</h3></a>
          <Link to="/cloth"><p className="clothTitle">Cloth</p></Link>
          <div className="socialSection">
            <a href="https://www.instagram.com/ericthechosen/"><img title="navIcon" src={instagram} alt="my-img" class="socialIcon" /></a>
            <a href="https://www.twitter.com/ericthechosen"><img title="navIcon" src={twitter} alt="my-img" class="socialIcon" /></a>
            <Outlet />
          </div>
          <Footer />
        </div>
      </div>
    </body>
  );
}

export default App;
