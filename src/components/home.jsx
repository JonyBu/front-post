import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(function (response) {
        // handle success
        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="card-body">
      <table className="table">
        {posts.map((post) => {
          return (
            <tr>
              <td>{post.title}</td>
              <td>
                {<button className="btn btn-outline-dark btn-sm ">VER</button>}
              </td>
              <td>
                {
                  <button className="btn btn-outline-dark btn-sm ">
                    EDITAR
                  </button>
                }
              </td>
              <td>
                {
                  <button className="btn btn-outline-danger btn-sm ">
                    ELIMINAR
                  </button>
                }
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Home;
