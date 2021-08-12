
   let iconMenu= document.getElementById("check");
   let larguraJanela= window.innerWidth;
   let alturaJanela= window.innerHeight;
   let menu= document.getElementById('links');
   var subitens=menu.children;

   function ExibirSubItensMenu(id){
     
      let menu = document.getElementById(id);
      let submenu = menu.children;
      let icon_dark=submenu[1].getElementsByClassName('icon-arrow');
     
      if (submenu[2].style.display == 'none') {   
         submenu[2].style.display='block';
        
         icon_dark[0].style.transform='rotate(180deg)';   
      }else {
         icon_dark[0].style.transform='rotate(0deg)';
         submenu[2].style.display='none';      
      }
   }


   function alterarIcon(event) {
      let iconMenu=document.getElementById('iconMenu');
      if(event.target.checked){
         iconMenu.src='../images/icon-close.svg';
      }else{
         iconMenu.src='/images/icon-hamburger.svg';
      }
   }
   
   function Eventos() {
      let i=0;
     do{
        if( larguraJanela<=660 ){
            subitens[i].addEventListener('focus',function (event) { 
                  let item = event.target;
                  ExibirSubItensMenu(item.id);
                  })                   
        }
     
      i++; 
          }while(i<=2);
      }

   Eventos();
