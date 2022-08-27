function postLoader(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then( res => res.json())
  .then(data => displayView(data))
}

function displayView(posts) {
  const postContainer = document.getElementById('posts-container');
  for( const post of posts){
    const postDiv = document.createElement("div");
    postDiv.classList.add('post');
    console.log(post);
    postDiv.innerHTML = `
       <h2>user:${post.userId}</h2>
       <h4> post:${post.title}</h4>
       <p> post-body: ${post.body}</p>
    
    `;
    postContainer.appendChild(postDiv);
  }

}

postLoader();

