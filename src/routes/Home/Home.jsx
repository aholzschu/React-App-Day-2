import { Component } from 'react';
import SearchBox from '../SearchBox/SearchBox';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../NavBar/NavBar';



class Home extends Component {
  constructor(){
    console.log('constructor')
    super()
    this.state = {
      'pokemon': []
    }
  }

  async componentDidMount() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
    const data = await response.json()
    this.setState(() =>{
      return (
        {
          'pokemon': data['results']
        }
      )
    })
  }

  render(){
    return (
      <div className="Home">
      <div>
      </div>
        <div>
          <NavBar/>
        </div>
        <div>
          <SearchBox pokemon ={this.state.pokemon}/>
        </div>
      </div>
    );
  }
}  

export default Home;