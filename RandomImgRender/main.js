var theImages = [
    {
       src: "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
       width: "300",
       height: "300",
    },
    {
       src: "https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE",
       width: "300",
       height: "300",
    },
    {
       src: "https://i.picsum.photos/id/1010/5184/3456.jpg?hmac=7SE0MNAloXpJXDxio2nvoshUx9roGIJ_5pZej6qdxXs",
       width: "300",
       height: "300",
    },
    {
       src: "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
       width: "300",
       height: "300",
      },
    {
       src: "https://i.picsum.photos/id/100/2500/1656.jpg?hmac=gWyN-7ZB32rkAjMhKXQgdHOIBRHyTSgzuOK6U0vXb1w",
       width: "300",
       height: "300",
    },
    {
       src: "https://i.picsum.photos/id/102/4320/3240.jpg?hmac=ico2KysoswVG8E8r550V_afIWN963F6ygTVrqHeHeRc",
       width: "300",
       height: "300",
    },
];

let imgcontainer = document.querySelector('section');
let btn = document.getElementsByClassName('generate');
var img = new Array(theImages.length);
btn[0].addEventListener('click', function (){
       for (let i=0; i < theImages.length; i++)
          if (typeof(img[i])=='object')
         {
            imgcontainer.removeChild(img[i]);
         }
    var kt = new Array(theImages.length).fill(false);
    img.fill(undefined); 
    var tmp = 3;
    while (tmp >0)
    {
        var x = Math.floor(Math.random() * theImages.length)
        console.log(x);
        
        if (!kt[x]) {
          renderImage(x);
          kt[x] = true;
          tmp-=1; 
          console.log(img)
        }
    }
})

function renderImage(a){
    img[a] = document.createElement('img');
    imgcontainer.appendChild(img[a]);
    img[a].src =`${theImages[a].src}`;
    img[a].style = "width : 300px ; height : 300px";
}