// acceso al a los personajes de la api
const API = 'https://rickandmortyapi.com/api/character/';

// el if ternario trae todos los personajes en caso de no haber id
const getData = async (id) => {
  const apiURl = id ? `${API}${id}` : API;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};

export default getData;