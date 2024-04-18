import React from 'react';
import { Header } from './components/ui/Header'; 
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { DirectorView } from './components/directores/DirectorView';
import { GeneroView } from './components/generos/GeneroView';
import { ProductoraView } from './components/productoras/ProductoraView';
import { TipoView } from './components/tipos/TipoView';
import { ProduccionView } from './components/producciones/ProduccionView';
import { ProduccionUpdate } from './components/producciones/ProduccionUpdate';
import { GeneroUpdate } from './components/generos/GeneroUpdate';
import { DirectorUpdate } from './components/directores/DirectorUpdate';
import { ProductoraUpdate } from './components/productoras/ProductoraUpdate';
import { TipoUpdate } from './components/tipos/TipoUpdate';


const App = () => {
  return <Router>
    <Header />
      <Switch>
        <Route exact path="/" component={ ProduccionView } />   
        <Route exact path="/directores" component={ DirectorView } /> 
        <Route exact path="/generos" component={ GeneroView } /> 
        <Route exact path="/productoras" component={ ProductoraView } /> 
        <Route exact path="/tipos" component={ TipoView } />
        <Route exact path='/producciones/edit/:produccionId' component={ ProduccionUpdate} />   
        <Route exact path='/generos/edit/:generoId' component={ GeneroUpdate} />  
        <Route exact path='/productoras/edit/:productoraId' component={ ProductoraUpdate} />  
        <Route exact path='/directores/edit/:directorId' component={ DirectorUpdate} />  
        <Route exact path='/tipos/edit/:tipoId' component={ TipoUpdate} />  
        <Redirect to="/" /> 
      </Switch>
  </ Router>
}

export {
  App
}

