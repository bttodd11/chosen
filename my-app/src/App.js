
import './App.css';
import youTube from './img/youtube.png';
import instagram from './img/instagram.png'
import twitter from './img/twitter.png'
import facebook from './img/facebook.png'

function App() {
  return (
    <div className="backgroundImage">
      <h3 className="musicTitle">Music</h3>
      <h3 className="artTitle">Art</h3>
      <p className="clothTitle">Cloth</p>
      <div className="socialSection">
      <a href=""><img title="navIcon" src={youTube} alt="my-img" class="socialIcon" /></a>
      <a href=""><img title="navIcon" src={instagram} alt="my-img" class="socialIcon" /></a>
      <a href=""><img title="navIcon" src={twitter} alt="my-img" class="socialIcon" /></a>
      <a href=""><img title="navIcon" src={facebook} alt="my-img" class="socialIcon" /></a>
      </div>
    </div>
  );
}

export default App;
