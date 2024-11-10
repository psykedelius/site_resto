import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/"       , "Accueil", "/pages/home.html"),
    new Route("/index.html", "Accueil", "/pages/home.html"),
    new Route("/galerie", "Galerie", "/pages/galerie.html"),
    new Route("/reserver", "Réserver", "/pages/reservations/reserver.html"),
    new Route("/allResa", "Vos Réservations", "/pages/reservations/allResa.html"), 
    new Route("/signin", "Connection", "/pages/auth/signin.html"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html","/js/auth/signup.js"),
];
//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Bistro breton";