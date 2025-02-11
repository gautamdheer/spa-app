
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditPostModal = ({handleCloseEvent}) => { 
    const [content, setContent] = useState('');
    return (
            <>
            <div className="modal" id="editPostModal">
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                <div className="bg-white p-6 rounded-lg shadow-lg w-1/2 relative">
                <div className="loader"></div> 
                <h2 className="text-2xl mb-4">Edit Post</h2>
                <form>
                    <div className="mb-4 flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-2">Title</label>
                        <input
                        type="text"
                        className="border border-gray-300 rounded w-full p-2"
                        value="Sample Post Title"
                        required
                        />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-2">Category</label>
                        <select
                        className="border border-gray-300 rounded w-full p-2"
                        required
                        >
                        <option value="">Select Category</option>
                        <option value="1">Category 1</option> 
                        <option value="2">Category 2</option> 
                        </select>
                    </div>
                    </div>
            
                    <div className="mb-4">
                    <label className="block text-sm font-medium mb-2">Content</label>
                    <ReactQuill value={content} onChange={setContent} theme="snow" />
                    </div>
            
                    <div className="mb-4 flex space-x-4">
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-2">Featured Image</label>
                        <input
                        type="file"
                        />
                        <br /><br />
                        <img src="http://localhost/wp/wp-tuts/wp-content/uploads/2024/10/default-featured-image.jpg" alt="Featured" />
                    </div>
                    <div className="flex-1">
                        <label className="block text-sm font-medium mb-2">Status</label>
                        <select
                        className="border border-gray-300 rounded w-full p-2"
                        required
                        >
                        <option value="publish">Publish</option>
                        <option value="draft">Draft</option>
                        </select>
                    </div>
                    </div>
            
                    <div className="flex justify-end">
                    <button
                        type="button"
                        className="bg-gray-500 text-white px-4 py-2 rounded mr-2 cursor-pointer"
                        onClick={handleCloseEvent}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
                    >
                        Update
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </div>   
            </>
        );
    }
    export default EditPostModal;