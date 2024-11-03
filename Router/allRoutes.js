import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/Galerie", "Galerie", "/pages/galerie.html"),
    new Route("/", "Reserver", "/pages/reserver.html"),
    new Route("/index.html", "Accueil", "/pages/home.html"),];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Bistro breton";