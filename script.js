// colors
function changeImageblue()
{
var img = document.getElementById("image");
img.src = 't-shirt-blue2.jpg'
return false;
}

function changeImagegreen()
{
var img = document.getElementById("image");
img.src = 't-shirt-green2.jpg'
return false;
}

function changeImageblack()
{
var img = document.getElementById("image");
img.src = 't-shirt-black2.jpg'
return false;
}

function changeImagewhite()
{
var img = document.getElementById("image");
img.src = 't-shirt-white2.jpg'
return false;
}


// button highlight
const sizeButtons = document.querySelectorAll('.tailles .btn-outline-dark');
        
        
        sizeButtons.forEach(button => {
            button.addEventListener('click', function() {
               
                sizeButtons.forEach(btn => {
                    btn.classList.remove('active');
                });
                
               
                this.classList.add('active');
            });
        });


 // cart
 document.addEventListener('DOMContentLoaded', function() {

     const addToCartBtn = document.getElementById('add-to-cart-btn');
    const cartCounter = document.getElementById('cart-counter');
            
     let itemCount = 0;
            
    addToCartBtn.addEventListener('click', function() {
   itemCount++;
            
    cartCounter.textContent = itemCount;
              
        cartCounter.style.transition = 'all 0.2s';
         cartCounter.style.transform = 'scale(1.5)';
              
    setTimeout(function() {
    cartCounter.style.transform = 'scale(1)';
              }, 200);
            });
          });