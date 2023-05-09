import React from 'react';
import ReactDOM from 'react-dom/client';
import  P  from './components/pharagraphLink/PharagraphLink';


/* El renderizado importante */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
/*{ <>
  <h1>Holi pato</h1>
  <h2>Ya te la sabes, saca tu VSC</h2>
</> }*/
    <React.StrictMode>
      {/* <p href="http"> texto </p> */}
      <P href = "https://legacy.reactjs.org/" color = "red" > React</P>  {/* color rojo */}
      <P href = "https://youtube.com" color = "green">YouTube </P> {/* color verde */}
      <P href = "https://linkedin.com" color ="purple"> LinkedIn</P> {/* color morado */}
    </React.StrictMode>
 
);

/* Todo lo que se pone en un js debe estar en un elemento padre */
/* div puede ocasionarnos problemas por eso mejor utilizamos React.Fragment y la forma corta <> </> hace referencia a React.Fragment */