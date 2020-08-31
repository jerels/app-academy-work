import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';
import LoginPanel from './LoginPanel';
import PokemonBrowser from './PokemonBrowser';
import { PrivateRoute } from './routesUtil';

const App = props => {
  const [currentUserId, setUserId] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [needLogin, setLogin] = useState(!currentUserId);
  const [pokemon, setPokemon] = useState(null);
  const authToken = Cookies.get('token');


  if (authToken) {
    try {
      const payload = authToken.split('.')[1];
      const decodedPayload = atob(payload);
      const payloadObj = JSON.parse(decodedPayload);
      const { data } = payloadObj;
      setUserId(data.id);
      debugger;
    } catch (error) {
      Cookies.remove('token');
    }
  }
  const handleCreated = pokemon => {
    setPokemon({ pokemon: [...pokemon, pokemon] });
  };

  const loadPokemon = async () => {
    const response = await fetch(`/api/pokemon`);
    if (response.ok) {
      const pokemon = await response.json();
      console.log(pokemon);
      setPokemon(pokemon);
      setLogin(false);
      setLoaded(true);
    } else {
      setLogin(true);
      setLoaded(true);
    }
  };

  const updateUser = currentUserId => {
    setLogin(false);
    setUserId(currentUserId);
    loadPokemon();
  };

  const cProps = {
    pokemon: pokemon,
    handleCreated: handleCreated,
    currentUserId: currentUserId
  };

  useEffect(() => {
    const loadPokemon = async () => {
      const response = await fetch(`/api/pokemon`);
      if (response.ok) {
        const pokemon = await response.json();
        console.log(pokemon);
        setPokemon(pokemon);
        setLogin(false);
        setLoaded(true);
      } else {
        setLogin(true);
        setLoaded(true);
      }
    };
    loadPokemon();
  });

  if (!loaded) {
    return null;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login"
          render={() => <LoginPanel {...props} updateUser={updateUser} />} />
        <PrivateRoute path="/"
          exact={true}
          needLogin={needLogin}
          component={PokemonBrowser}
          cProps={cProps} />
        <PrivateRoute path="/pokemon/:pokemonId"
          exact={true}
          needLogin={needLogin}
          component={PokemonBrowser}
          cProps={cProps} />
      </Switch>
    </BrowserRouter>
  )
};

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     const authToken = Cookies.get("token");
//     let currentUserId;
//     if (authToken) {
//       try {
//         const payload = authToken.split(".")[1];
//         const decodedPayload = atob(payload);
//         const payloadObj = JSON.parse(decodedPayload);
//         const { data } = payloadObj;
//         currentUserId = data.id;
//       } catch (e) {
//         Cookies.remove("token");
//       }
//     }
//     this.state = {
//       loaded: false,
//       currentUserId,
//       needLogin: !currentUserId,
//     };
//   }

//   componentDidMount() {
//     this.loadPokemon();
//   }

//   handleCreated = (pokemon) => {
//     this.setState({
//       pokemon: [...this.state.pokemon, pokemon]
//     });
//   }

//   async loadPokemon() {
//     const response = await fetch(`/api/pokemon`);
//     if (response.ok) {
//       const pokemon = await response.json();
//       this.setState({
//         pokemon,
//         needLogin: false,
//         loaded: true
//       });
//     } else {
//       this.setState({
//         needLogin: true,
//         loaded: true,
//       });
//     }
//   }

//   updateUser = currentUserId => {
//     this.setState({
//       needLogin: false,
//       currentUserId
//     });
//     this.loadPokemon();
//   }

//   render() {
//     const { loaded, currentUserId, needLogin, pokemon } = this.state;
//     if (!loaded) {
//       return null;
//     }
//     const cProps = {
//       pokemon: pokemon,
//       handleCreated: this.handleCreated,
//       currentUserId: currentUserId
//     };
//     return (
//       <BrowserRouter>
//         <Switch>
//           <Route path="/login"
//             render={props => <LoginPanel {...props} updateUser={this.updateUser} />} />
//           <PrivateRoute path="/"
//             exact={true}
//             needLogin={needLogin}
//             component={PokemonBrowser}
//             cProps={cProps} />
//           <PrivateRoute path="/pokemon/:pokemonId"
//             exact={true}
//             needLogin={needLogin}
//             component={PokemonBrowser}
//             cProps={cProps} />
//         </Switch>
//       </BrowserRouter>
//     )
//   }
// }

export default App;
