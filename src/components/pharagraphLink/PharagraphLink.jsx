
/* Solamente podemos tener una exportacion por defaut */
//Props: comunican los componentes padres con los componentes hijos

/* const ParagraphLink = ( propiedades ) => {
    //{clave:valor, href: "" }
    console.log(propiedades);
    const myParagraph = ( 
    <>
     <a
      style = { { textDecoration: 'none', color: propiedades.color} } 
      href={propiedades.href}
      target = '_blank'
     >
        <p>{propiedades.children} </p>
     </a>
    </>
 );
 return myParagraph;
};
export default ParagraphLink; */
//DESESTRUCTURANDO
const ParagraphLink = ( {href, color, children} ) => {
    //{clave:valor, href: "" }
    //console.log();
    const myParagraph = ( 
    <>
     <a
      style = { { textDecoration: 'none', color: color} } 
      href={href}
      target = '_blank'
     >
        <p>{children} </p>
     </a>
    </>
 );
 return myParagraph;
};
export default ParagraphLink;
//exportacion por default
//Para el estilo ya no se utilizan guiones, se utiliza CamelCase
/* 
Desestructuración
    const [varA,varB] = [23,45];
    const {varC,varD} = {varC,varF,varG};
*/ //si es un objeto se desestructura como objeto e igual con los arreglos, si es un arreglos de desestructura como arreglo