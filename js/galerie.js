let imgList = [];
const galerieContainer = document.getElementById('galerie-container');
class ImgCard{
    constructor(imgUrl, title) {
        this.imgUrl = imgUrl;
        this.title = title;
      }     
}


function addImg(imgUrl,title){
    const newImg = new ImgCard(imgUrl,title);
    imgList.push(newImg);
}

function updateGalerie(){
    imgList.forEach((element) => 
        createImgCard(element));
}

function createImgCard(element){
    //create the html of the img-card
    console.log(element);
}

addImg("../img/home.jpg","home");
addImg("../img/cheminee.jpg","cheminee");
addImg("../img/reservation.jpg","reservation");
addImg("../img/accueil.jpg","accueil");
addImg("../img/home.jpg","home");
addImg("../img/home.jpg","home");
console.log("updateGalerie");
updateGalerie();
