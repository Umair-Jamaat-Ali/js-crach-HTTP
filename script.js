
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(function(response){
//         return response.json();
//       })
//       .then(function(data){
//         console.log(data);
//       });

// HTTP for post

// fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(function(response){
//         return response.json();
//       })
//       .then(function(data){
//         console.log(data);
//       });


// photos

const imagesElem = document.getElementById("images");

fetch('https://jsonplaceholder.typicode.com/photos')
      .then(function(response){
        return response.json();
      })
      .then(function(data){
        data.forEach(function(images){
            const url = images.url;
            const imgElem = document.createElement("img");
            imgElem.src = url
            imagesElem.appendChild(imgElem);
        })
      });
