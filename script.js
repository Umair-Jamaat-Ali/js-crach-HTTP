
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

// const imagesElem = document.getElementById("images");

// fetch('https://jsonplaceholder.typicode.com/photos')
//       .then(function(response){
//         return response.json();
//       })
//       .then(function(data){
//         data.forEach(function(images){
//             const url = images.url;
//             const imgElem = document.createElement("img");
//             imgElem.src = url
//             imagesElem.appendChild(imgElem);
//         })
//       });


      // fetch('https://jsonplaceholder.typicode.com/posts', {
      //   method: "post"
      // })
      // .then(function(response){
      //   return response.json();
      // })
      // .then(function(data){
      //   console.log(data);
      // });

      fetch('https://dummyjson.com/products/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'BMW Pencil',
          /* other product data */
          description: 'This is a good  product'
        })
      })
      .then(res => res.json())
      .then(console.log);
      //// data update krny k liay

      fetch('https://dummyjson.com/products/1', {
        method: 'PUT', /* or PATCH */
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'iPhone Galaxy +1'
        })
      })
      .then(res => res.json())
      .then(console.log);

//// data ko delete krny k liay


fetch('https://dummyjson.com/products/1', {
  method: 'DELETE',
})
.then(res => res.json())
.then(console.log);











