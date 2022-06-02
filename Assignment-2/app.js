// function myFunction() {
//     var x = document.getElementById("btn").autofocus;
//     document.getElementById("hed").innerHTML = x;
//   }

//   function openImg(){
//     var image = document.getElementById('image');
//     var source = image.src;
//     window.open(source);
// }

// var fullImgBox = document.getElementById("fullImgBox")
// var fullImg = document.getElementById("fullImg");
// function openFullImg(pic) {
//     fullImgBox.style.display = "flex";
//     fullImg.src = pic;
// }
// function closeFullImg() {
//     fullImgBox.style.display = "none";

// let products = document.querySelectorAll(".pro-img");
// let getLatestOpenedImg;
// let windowWidth = window.innerWidth;

// if(products){
//   products.forEach(function(image)){
//     image.onclick = function(){
//     let getElementsclass = window.getSelection(image);
//     let getfulimgurl = getElementsclass.getPropertyValue("img");
//     let getimgpos = getfulimgurl.split();
//     alert(getfulimgurl)
//     }
//   }
// }


document.querySelectorAll('.one img').forEach(image =>{
  image.onclick = () =>{
    document.querySelector('.popup-image').style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
  });
  
document.querySelector('.popup-image span').onclick = () =>{
  document.querySelector('.popup-image').style.display = 'none';

}

