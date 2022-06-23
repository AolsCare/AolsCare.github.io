function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  window.addEventListener("resize",()=>{
      if(window.innerWidth>=720){
        document.getElementById("mySidenav").style.width = window.innerWidth+"px";
        document.getElementById("closebtn").style.display="none"
      }
      else{
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("closebtn").style.display="block"
      }
  })

  document.getElementById("openbtn").addEventListener("click", openNav)
  document.getElementById("closebtn").addEventListener("click", closeNav)