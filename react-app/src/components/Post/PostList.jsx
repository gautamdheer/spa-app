import React, { useState, useEffect } from 'react'
import AddPostModal from './Modal/AddPostModal'
import EditPostModal from './Modal/EditPostModal'

export default function PostList() {

    const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false)
    const [isEditPostModalOpen, setIsEditPostModalOpen] = useState(false)
    const [posts, setPosts] = useState([])

    const togglePostModal = () => {
      setIsAddPostModalOpen(prevState => !prevState);
    }

    const toggleEditPostModal = () => {
      setIsEditPostModalOpen(prevState => !prevState);
    }

    // list of wordpress posts
  const fetchWordpressPosts = async () => {
    try {
      const res = await fetch('http://localhost/spa-app/wp/wp-json/wp/v2/posts?status=publish,draft,trash', {
        method: 'GET',
        headers: {
          'Authorization': 'Basic ' + btoa("admin:admin")
        }
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        console.error('Error fetching posts:', errorData);
        return;
      }
  
      const data = await res.json();
      setPosts(data);
      console.log(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

    useEffect(() => {
        fetchWordpressPosts()
      }, [])

    // post status 
    const postStatus = (status) => {
      
      if(status === 'draft') {
        return  <button className="border px-4 py-2 bg-orange-500 text-white">{status.toUpperCase()}</button>

      } else if(status === 'trash') {
        return  <button className="border px-4 py-2 bg-red-500 text-white">{status.toUpperCase()}</button>
      }
      else if(status === 'publish') {
        return  <button className="border px-4 py-2 bg-green-500 text-white">{status.toUpperCase()}</button>
      }

    }
    // get post categories
    const getPostCategories = (categories) => {
      const categoryNames = categories.map((cat) => cat.name);
      return categoryNames.join(', ');
    }

  return (
    <>
    <div className="container max-w-5xl mx-auto p-4">
    <div className="loader"></div> 

    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Posts</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer" onClick={togglePostModal}>Add Post</button>
    </div>

    <table className="table-auto w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">ID</th>
          <th className="px-4 py-2">Title</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Category</th>
          <th className="px-4 py-2">Featured Image</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
            posts.map((post, index) => (
                <tr key={index} className="text-center">
          <td className="border px-4 py-2">{post.id}</td>
          <td className="border px-4 py-2">{post.title.rendered}</td>
          <td className="border px-4 py-2">
              {postStatus(post.status)}
          </td>
           <td className="border px-4 py-2">{getPostCategories(post.categories)}</td>
          <td className="border px-4 py-2">
            <img src={post.featured_media} alt={post.featured_media} className="w-16 h-16 object-cover" />
          </td>
          <td className="border px-4 py-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2 cursor-pointer" onClick={toggleEditPostModal}>Edit</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded cursor-pointer" disabled>Delete</button>
          </td>
        </tr>
        ))
       }
       </tbody>
    </table>  
    {
      isAddPostModalOpen && (
        <AddPostModal handleCloseEvent={togglePostModal} />
      )
    }
    {
      isEditPostModalOpen && (
        <EditPostModal handleCloseEvent={toggleEditPostModal} />
      )
    }
     </div>
    </>
  )
}
