import React from 'react';
import Dashboad from './Components/dashboard/Dashboard';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Card from './Components/card/Card';
import NewsList from './Components/NewsList/NewsList';

class App extends React.Component {
  render() {

    return <div className='main-content' >

      <Header />
      <Dashboad />
      <Card/>
      <Footer/>
      {/* <NewsList/> */}

    </div>

  }
}
export default App;
