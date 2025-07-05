import './App.css'; // подключим стили
import Header from './components/Header';
import Program from './components/Program';
import Calendar from './components/Calendar';
import Footer from './components/Footer';
import Story from './components/Story';
function App() {
  return (
    <div className="appContainer">
      {/* Фоновое видео */}
      <video
        className="videoBackground"
        src="/фон.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Содержимое поверх фона */}
      <div className="contentOverlay">
        <Header />
<Story/>
        <Program />
        <Calendar />
        {/* футер без фона */}
        <div className="noBackground">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
