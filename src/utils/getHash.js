// logica para traer el id sin el hash o numeral
// accdemos a un elemento del navegador llamado location
// y obtenemos el hash con slide sacamos el numeral
// split lo convertimos a arreglo y eliminamos los slash /
// 
const getHash = () =>
  location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;