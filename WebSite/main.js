let boxes = document.querySelectorAll('.box');
    
const onMouseMove = (e) =>{        
  boxes.forEach((b,i) => {
      setTimeout(()=>{   
          b.style.opacity = 5 - (.1*i);
          b.style.left = e.pageX + 'px';
          b.style.top = e.pageY + 'px';           
      },40*(i+5))      
                                 
  });
}

document.addEventListener('mousemove', onMouseMove);
console.log("box")

document.querySelector(".toggle").addEventListener("click",() => {
    document.querySelector(".toggle").classList.toggle("active");
    document.querySelector(".menu").classList.toggle("active");
    document.querySelector(".showcase").classList.toggle("active");


})




