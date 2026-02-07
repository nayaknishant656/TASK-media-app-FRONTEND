import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Body from './components/body/body';
import { AuthProvider } from './context/AuthContext';
// import Footer from './components/footer/footer';
function App() {
  return (
    <AuthProvider>
      <div className='grandparent_socialpage'>
        <div className='parent_socialpage'>
          <Header />
          <Body />
          {/* <Footer /> */}
        </div>
      </div>
    </AuthProvider>

  );
}

export default App;
