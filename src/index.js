import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter} from 'react-router-dom';
import { Helmet } from 'react-helmet';


ReactDOM.render(

  <React.StrictMode>
    <BrowserRouter>
      <Helmet>
        <title>Uğur Kaykaf</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
        <meta content="Uğur Kaykaf'ın kişisel web sitesi" name="keywords"/>
        <meta content="uğur,kaykaf,ibrahim,web,site" name="description"/>
        <link rel="icon" href="/img/logo/uk-logo.svg" />
      </Helmet>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


