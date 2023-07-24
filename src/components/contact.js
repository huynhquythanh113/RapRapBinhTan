import axios from "axios";
import React from "react";
import { Outlet } from "react-router-dom";

const baseURL = "//localhost:8081/user";
var config = {
  headers: { "Access-Control-Allow-Origin": "*" },
  responseType: 'blob'
};
export default function App() {
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(`${baseURL}`,config).then((response) => {
      setPost(response.data);
      console.log(response);
    });
  }, []);

  function updatePost() {
    axios 
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post."
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  return (
    <div>
     <Outlet />
    </div>
  );
}