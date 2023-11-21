import './App.css';
import Header from './components/Header/Header'
import NoteInput from './components/Main/NoteInput';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <header>
          <Header />
      </header>

          <main>
              <NoteInput />

          </main>

      <footer>
      <Footer />

      </footer>
    </div>
  );
}

export default App;
