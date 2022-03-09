
import { Outlet, Link } from 'react-router-dom';
import './App.css';
import youTube from './img/youtube.png';
import instagram from './img/instagram.png'
import twitter from './img/twitter.png'
import facebook from './img/facebook.png'

function App() {
  return (
    <div>
     <Link to="/music"><h3 className="musicTitle">Music</h3></Link>
      <h3 className="artTitle">Art</h3>
      <p className="clothTitle">Cloth</p>
      <div className="socialSection">
      <a href=""><img title="navIcon" src={instagram} alt="my-img" class="socialIcon" /></a>
      <a href=""><img title="navIcon" src={twitter} alt="my-img" class="socialIcon" /></a>
      <Outlet />
      </div>
    </div>
  );
}

export default App;
