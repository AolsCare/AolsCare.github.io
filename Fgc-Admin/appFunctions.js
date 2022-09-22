const minus=document.getElementById('minimize');
const max=document.getElementById('maximize');
const CLOSE_APP=document.getElementById('close-app')


minus.addEventListener('click',minimize)
CLOSE_APP.addEventListener('click',close_app)
max.addEventListener('click',maximize)

function close_app(){
    app.window.close()
}
function minimize(){
    app.window.minimize()
}
function maximize(){
    app.window.maximize()
}