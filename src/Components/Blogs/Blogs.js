import React, { useState, useEffect } from "react";
import UpdateBlog from "../UpdateBlog/UpdateBlog";
import axios from "axios";

const Blogs = ({ blogs, fetchBlog }) => {
  // const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  // //fetch all blog
  // const fetchBlog = async () => {
  //   const { data } = await axios.get("/api/v1/applicant_test/");
  //   setBlogs(data);
  //   console.log("fetchBlog", data);
  // };

  // // display all blogs here
  // useEffect(() => {
  //   fetchBlog();
  // }, []);

  //modal here
  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal(blog) {
    setSelectedBlog(blog);
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="container">
      <div className="p-4 pr-5">
        <h3>Blog List</h3>
        <table className="table table-bblogless">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => (
              <tr key={index}>
                <td>{blog.Title} </td>
                <td>{blog.Author_Name}</td>
                <td>{blog.Phone}</td>
                <td>{blog.Email}</td>
                <td>{blog.Description}</td>
                <td>
                  <button
                    onClick={() => openModal(blog)}
                    className="btn btn-info"
                  >
                    UPDATE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <UpdateBlog
          modalIsOpen={modalIsOpen}
          blogs={selectedBlog}
          closeModal={closeModal}
          fetchBlog={fetchBlog}
        ></UpdateBlog>
      </div>
    </div>
  );
};

export default Blogs;
