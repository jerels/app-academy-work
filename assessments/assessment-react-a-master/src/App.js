import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductsList from './ProductsList';
import Introduction from './Introduction';
import ProductDetail from './ProductDetail';
import NotFound from './NotFound';
import NewProductForm from './NewProductForm';

function App() {
  return (
    <main>
      <BrowserRouter>
        <ProductsList />
        <Switch>
          <Route exact path='/' component={Introduction} />
          <Route exact path='/products/new' component={NewProductForm} />
          <Route exact path='/products/:productId' component={ProductDetail} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
