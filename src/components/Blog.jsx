import { useEffect, useState } from 'react';




const Blog = () => {
  const [data, setData] = useState(null);

 useEffect(() => {
    fetch('data.json')
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
                <h5 class="card-title">{post.title}</h5>
                <p class="card-text">{post.description}</p>
              </div>

              {/* <div class="card-body">
                <a href="#" class="card-link">Card link</a>
              </div> */}
            </div>
          </div>
        </div>
              ))}
      </div>
    </div>


  )
}

export default Blog