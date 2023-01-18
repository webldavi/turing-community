import Header from './sections/Header'
import Main from './sections/Main'
import Footer from './sections/Footer'
function App() {
  return (
  <div id="app" className="w-full min-h-screen flex flex-col justify-between gap-4">
    <Header/>
    <Main/>
    <Footer/>
  </div>
  );
}

export default App;
