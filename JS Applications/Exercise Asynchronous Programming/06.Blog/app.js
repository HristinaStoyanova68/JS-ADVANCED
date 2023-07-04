function attachEvents() {

   const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
   const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

   const btnLoadPosts = document.getElementById('btnLoadPosts');
   btnLoadPosts.addEventListener('click', loadPosts);
   const h1Element = document.getElementById('post-title');
   const paragraphElement = document.getElementById('post-body');
   const h2Element = document.getElementsByTagName('h2');
   const ulElement = document.getElementById('post-comments');

   const selectPostElements = document.getElementById('posts');

   function loadPosts() {
      fetch(postsUrl)
         .then(response => response.json())
         .then(data => {

            const dataAsArray = Object.entries(data);
            console.log(dataAsArray);
            dataAsArray.forEach(element => {
               const id = element[0];
               const title = element[1].title;
               const body = element[1].body;

               const optionElement = document.createElement('option');
               optionElement.id = id;
               optionElement.textContent = title;
               selectPostElements.appendChild(optionElement);

               selectPostElements.addEventListener('click', selectPost);

               function selectPost(e) {

                  const btnViewPost = document.getElementById('btnViewPost');
                  btnViewPost.addEventListener('click', viewPosts);

                  function viewPosts() {

                     fetch(commentsUrl)
                        .then(response => response.json())
                        .then(data => {
                           const commentsAsArray = Object.values(data);
                           //console.log(commentsAsArray);
                           const comments = commentsAsArray.filter(element => element.postId === id)

                           comments.forEach(comment => {
                              h1Element.textContent = title;
                           paragraphElement.textContent = body;
                           const liElement = document.createElement('li');
                           liElement.id = comment.id;
                           liElement.textContent = comment.text;
                           ulElement.appendChild(liElement);
                           })
                        });
                  }
               }
            });
         });
   }
}

attachEvents();

// const postsId = element[1].postsId;
// const commentId = element[1].id;
// const commentText = element[1].text;
// if (id === postsId) {
//    h1Element.textContent = title;
//    paragraphElement.textContent = body;
//    const liElement = document.createElement('li');
//    liElement.id = commentId;
//    liElement.textContent = commentText;
//    ulElement.appendChild(liElement);
// }