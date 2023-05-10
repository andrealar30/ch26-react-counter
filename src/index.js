import React from 'react';
import ReactDOM from 'react-dom/client';
import  {App}  from './App';


/* El renderizado importante */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
/*{ <>
  <h1>Holi pato</h1>
  <h2>Ya te la sabes, saca tu VSC</h2>
</> }*/
    <React.StrictMode>
      <App />
    </React.StrictMode>
);

/* Todo lo que se pone en un js debe estar en un elemento padre */
/* div puede ocasionarnos problemas por eso mejor utilizamos React.Fragment y la forma corta <> </> hace referencia a React.Fragment */