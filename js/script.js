

var ra=[]

function add(){
 
  
var arr=[
    {
      quote:"“Be yourself; everyone else is already taken.”",
      author:"― Oscar Wilde",
      img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1673611182i/3565._UX200_CR0,15,200,200_.jpg"

    },
    {
      quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
      author:"― Albert Einstein",
      img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1429114964i/9810._UX200_CR0,14,200,200_.jpg"

    },
    {
      quote:"“So many books, so little time.”",
      author:"― Frank Zappa",
      img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1315160559i/22302._UY200_CR2,0,200,200_.jpg"

    },
    {
      quote:"“A room without books is like a body without a soul.”",
      author:"― Marcus Tullius Cicero",
      img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1197881416i/13755._UX200_CR0,47,200,200_.jpg"

    },
    {
      quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
      author:"― Bernard M. Baruch",
      img:"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/authors/1331977133i/5768330._UX200_CR0,30,200,200_.jpg"

    }
]
var x = Math.floor(Math.random()*(arr.length-1));


ra.push(x) 
console.log(ra);
for(var i =0; i<ra.length;i++){
  if(ra[i+1]==ra[i]){
    ra[i+1]+=1;
    x=ra[i+1]
   
  }

}

console.log(x)


  var car =`
           <div class="image m-auto">
              <img src=${arr[x].img} class="w-100  rounded-circle" alt="authot image">
            </div>
            <p>${arr[x].quote}</p>
            <p>${arr[x].author}</p>
            `
           
            
  document.getElementById("quote").innerHTML =car;   
  
 
  
       
}

