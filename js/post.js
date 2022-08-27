
function loadPost(){
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => displayPost(data))
}
function displayPost(data){
  const ul = document.getElementById("post-list");
  for( const post of data){
    console.log(post);
    const li = document.createElement('li');
    li.innerText = post.title;
    ul.appendChild(li);
  }
}