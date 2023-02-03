function Search(){
    let input = document.getElementById("search").value;
    input =input.toLowerCase();
    let stocks = document.getElementsByClassName("Search_products");

    for(let i = 0; i < stocks.length; i++){
        if(stocks[i].textContent.toLowerCase().includes(input)){
            stocks[i].style.display = "";
        }else{
            stocks[i].style.display = "none";
        }
    }
  
}

let i =0;
let time=3000;
let Image =["Chicken-Chow-Mein-235-g.jpg","Chicken-Fried-Rice-1-kg.jpg","Chicken-Pad-Thai-235-g.jpg","Chicken-Patatas-Bravas-220-g.jpg"];
function slideshow(){
   
    document.getElementById("slide").src = Image[i];
    i++;
    if(i==Image.length){
        i=0;
    }
setTimeout(slideshow, time);

}

slideshow();