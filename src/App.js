import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { DayShlok } from './components/DayShlok';
import { ShlokaList } from './components/ShlokaList';

function App() {
  return (
    <div className="App" style={{position:"relative", height:"100vh"}}>
       <Header/>
       <DayShlok/>
       <ShlokaList/>
       <Footer/>
    </div>
  );
}

export default App;
