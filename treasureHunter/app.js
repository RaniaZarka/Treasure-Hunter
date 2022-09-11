$ =(queryString) => document.querySelector(queryString);

$('body').style.backgroundImage = 'url(map.jpg)';
$('body').style.backgroundRepeat = 'no-repeat';


// TO SHOW RANDOM NUMBER OF COINS BETWEEN 1 AND 10 
let randomCoin = Math.floor(Math.random() * 11 ) +1;

for( i=0; i <randomCoin ; i++){
    let leftMargin = Math.floor(Math.random() * (Math.floor(650) - Math.ceil(10) + 1)) + Math.ceil(10);
    let topMargin = Math.floor(Math.random() * (Math.floor(400) - Math.ceil(10) + 1)) + Math.ceil(10);
    let div = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute('src', 'coin.png');
    img.setAttribute('height', '50px');
    div.appendChild(img);
    div.style.position = 'absolute';
    div.style.left = leftMargin;
    div.style.top = topMargin;
    $('body').appendChild(div);

    }


// TO SHOW RANDOM NUMBER OF COINS BETWEEN MIN AND MAX AND if this is what question 4 means  
    // function getRandom(min, max){
    //     return Math.floor(Math.random() * (max - min) ) + min;
    // }

//     for (i = 0; i <getRandom(20,40); i++){
//     let leftMargin = Math.floor(Math.random() * (Math.floor(650) - Math.ceil(10) + 1)) + Math.ceil(10);
//     let topMargin = Math.floor(Math.random() * (Math.floor(400) - Math.ceil(10) + 1)) + Math.ceil(10);
//     let div = document.createElement('div');
//     let img = document.createElement('img');
//     img.setAttribute('src', 'coin.png');
//     img.setAttribute('height', '50px');
//     div.appendChild(img);
//     div.style.position = 'absolute';
//     div.style.left = leftMargin;
//     div.style.top = topMargin;
//     $('body').appendChild(div);
// }

// generate random number between min and max showing a div with random number 
// if this is what question 4 means 

function getRandom(min, max){
    return Math.floor(Math.random() * (max - min) ) + min;
}

 let randonNum =  getRandom(1,20);

    let leftMargin = Math.floor(Math.random() * (Math.floor(650) - Math.ceil(10) + 1)) + Math.ceil(10);
    let topMargin = Math.floor(Math.random() * (Math.floor(400) - Math.ceil(10) + 1)) + Math.ceil(10);
    let div = document.createElement('div');
    let num = document.createElement('p');
    num.style.color ="white";
    num.style.fontSize="40px";
    div.style.background="blue";
    div.appendChild(num);
    num.innerHTML = randonNum;
    div.style.position = 'absolute';
    div.style.left = leftMargin;
    div.style.top = topMargin;
    
    $('body').appendChild(div);


    console.log(randonNum)



        

    












