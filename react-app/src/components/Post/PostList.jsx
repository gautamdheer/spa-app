import React, { useState } from 'react'
import AddPostModal from './Modal/AddPostModal'
import EditPostModal from './Modal/EditPostModal'

export default function PostList() {

    const [isAddPostModalOpen, setIsAddPostModalOpen] = useState(false)
    const [isEditPostModalOpen, setIsEditPostModalOpen] = useState(false)

    const togglePostModal = () => {
      setIsAddPostModalOpen(prevState => !prevState);
    }

    const toggleEditPostModal = () => {
      setIsEditPostModalOpen(prevState => !prevState);
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
        <tr className="text-center">
          <td className="border px-4 py-2">1</td>
          <td className="border px-4 py-2">Sample Title</td>
          <td className="border px-4 py-2">
            <button className="border px-4 py-2 bg-green-500 text-white">publish</button>
          </td>
          <td className="border px-4 py-2">Loading...</td>
          <td className="border px-4 py-2">
            <img src="http://localhost/learrn/cms/wp-content/uploads/2024/10/No-Image-Placeholder.png" alt="Featured" className="w-16 h-16 object-cover" />
          </td>
          <td className="border px-4 py-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded mr-2 cursor-pointer" onClick={toggleEditPostModal}>Edit</button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded cursor-pointer" disabled>Delete</button>
          </td>
        </tr>
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
