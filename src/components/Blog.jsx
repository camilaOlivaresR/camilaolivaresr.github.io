import { useEffect, useState } from 'react';
import ada from './img/ada.jpeg';



const Blog = () => {
  const [data, setData] = useState(null);

 useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div class="mb-5">
      <div class="d-flex justify-content-center">
        <h2>Blog</h2>
      </div>
      <div class="row">
         
        {data.posts.map(post => (
        
  
     
        <div class="col-md-4 p-2" >
          <div class="card h-100">
            <div class="card" >
              <img src={post.image} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">key={post.id},</h5>
                <p class="card-text">{post.title}.</p>
              </div>

              <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
              </div>
            </div>
          </div>
        </div>
              ))}
      </div>
    </div>


  )
}

export default Blog