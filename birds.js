
const imagesArr=[
  "./birds/1.jpeg",
  "./birds/2.jpg",
  "./birds/3.jpg",
  "./birds/4.jpg",
  "./birds/5.jpg",
  "./birds/6.jpg",
  "./birds/7.jpg",
]
let imgIndex=0;
function prev(){
    if(imgIndex==0){
        imgIndex=imagesArr.length-1;
    }
    else{
        imgIndex--;
    }
    const imgElement=document.getElementById('bird');
    imgElement.src=imagesArr[imgIndex];
}
function next(){
    if(imgIndex==imagesArr.length-1){
        imgIndex=0;
    }
    else{
        imgIndex++;
    }
    const imgElement=document.getElementById('bird');
    imgElement.src=imagesArr[imgIndex];
}
