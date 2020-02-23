// resolvenos las rutas obtenidas del usuario para saber q templete usaremos
// pasamos la ruta resuelta por la funcion anterior
//comprobamos si la ruta es igual a slasg /, o un id en caso contrario es alguna seccion
// por la cual es usuario navega
// en caso de no cumplirse el if retorna en route otra seccion
const resolveRoutes = (route) => {
    if (route.length <= 3) {
      let validRoute = route === '/' ? route : '/:id';
      return validRoute;
    }
    return `/${route}`;
  };
  
  export default resolveRoutes;