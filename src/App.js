import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageRecognition from './components/ImageRecognition/ImageRecognition';
import Rank from './components/Rank/Rank';
import ParticleBackground from './components/Particles/ParticleBackground';

function App() {
  return (
    <div className="App">
    <ParticleBackground />
    <Navigation />
    <Logo />
    <Rank />
    <ImageRecognition />
    
    </div>
  );
}

export default App;
