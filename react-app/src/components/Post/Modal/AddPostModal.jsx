import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const AddPostModal = ({handleCloseEvent, categoriesList}) => {
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');
    const [content, setContent] = useState('');
    const [featuredImage, setFeaturedImage] = useState(null);

    console.log(categoriesList);
    // Handle form data
    const handleSubmitData = (e) =>{
        e.preventDefault();
        console.log(title);
    }

return (
<>
<div className="modal" id="addPostModal">
<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 relative">
    <div className="loader"></div>  
    <h2 className="text-2xl mb-4">Add New Post</h2>
    <form onSubmit={handleSubmitData}>
        <div className="grid grid-cols-2 gap-4">
        <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Title</label>
            <input
            type="text"
            className="border border-gray-300 rounded w-full p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
        </div>

        <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Category</label>
            <select 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded w-full p-2"
            required
            >
            <option value="">Select Category</option>
                {
                   Object.entries(categoriesList).map(([index, value]) => (
                    <option value={index} key={index}>{value}</option>
                ))
                }
            </select>
        </div>

        <div className="mb-4 col-span-2">
            <label className="block text-sm font-medium mb-2">Content</label>
                <ReactQuill 
                value={content} 
                onChange={setContent} 
                theme="snow" 
                />   
    </div>

        <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Featured Image</label>
            <input type="file" onChange={(e) => setFeaturedImage(e.target.files[0])} />
        </div>

        <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Status</label>
            <select
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
            className="border border-gray-300 rounded w-full p-2"
            required
            >
            <option value="">- Select -</option>
            <option value="publish">Publish</option>
            <option value="draft">Draft</option>
            </select>
        </div>
        </div>

        <div className="flex justify-end mt-4">
        <button type="button" onClick={handleCloseEvent} className="bg-gray-500 text-white px-4 py-2 rounded mr-2 cursor-pointer">
            Cancel
        </button>
        <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
            Submit
        </button>
        </div>
    </form>
    </div>
</div>
</div>
</>
);
}
export default AddPostModal