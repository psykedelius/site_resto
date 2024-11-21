const tokenCookieName="accesstoken";
const RoleCookieName = "role";
const btnSignout = document.getElementById("signout-btn");
btnSignout.addEventListener("click",signout);

function signout(){
    eraseCookie(tokenCookieName);
    eraseCookie(RoleCookieName);
    window.location.reload();
}

function getRole(){
    return getCookie(RoleCookieName);
}

function setToken(token){
    setCookie(tokenCookieName,token,7);
}

function getToken(){
    return getCookie(tokenCookieName);
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

//check if connected
function isConnected(){
    if (getToken() == null || getToken() == undefined){
        return false;
    }else{
        return true;
    }
}

if (isConnected())
    { console.log("je suis connecté"); }
    else
    { console.log("je ne suis pas connecté"); }

function showAndHideElementsForRole(){
    const userConnected = isConnected();
    const role = getRole();
    console.log("role = ",role);
    let allElementsToEdit = document.querySelectorAll('[data-show]');
    allElementsToEdit.forEach(element =>{
        switch(element.dataset.show){
            case 'disconnected':
                if(userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'connected':
                if(!userConnected){
                    element.classList.add("d-none");
                }
                break;
            case 'admin':
                if(!userConnected || role != 'admin'){
                    element.classList.add("d-none");
                }
                break;
            case 'client':
                if(!userConnected || role != 'client'){
                    element.classList.add("d-none");
                }
                break;
                        
        }
    })
        
    
}
    /*Roles
    disconnected
    connected (admin ou client)
    --admin
    --client
    */
