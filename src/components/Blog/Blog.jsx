import PropTypes from 'prop-types'
import { FaBookmark } from 'react-icons/fa'
const Blog = ({ data, handleAddBookmarks, handleMarksAsRead }) => {
    console.log(data)
    const { cover_img, title, author, author_img, posted_date, reading_time, id, hashtags } = data

    const handleAddBlog = () => {
        handleAddBookmarks(data)
    }

    const handleAddTime=()=>{
        handleMarksAsRead(reading_time,id)
    }

    return (
        <div>
            <div className="w-full  md:w-2/3 lg:w-3/4 border-2 border-red-500 mt-5">
                <img className='w-full' src={cover_img} />

                <div className='flex justify-between items-center'>
                    <div className="mt-5 flex gap-5 items-center">
                        <img style={{ width: '60px', height: '60px', borderRadius: '100%' }} src={author_img} />
                        <p>{author}</p>
                    </div>
                    <div>
                        <p>{reading_time} min Read <button onClick={handleAddBlog}><FaBookmark></FaBookmark></button></p>
                    </div>
                </div>
                <h2 className="mt-5">{title}</h2>
                <h2 className='mt-2'>{posted_date}</h2>
                <p>
                    {
                        hashtags.map((item, index) => <span key={index}><a href="#">{item}</a></span>)
                    }
                </p>
                <button onClick={handleAddTime} className='mt-2 bg-indigo-300 px-2 py-1 rounded-sm'>Mark As Read</button>
            </div>
        </div>
    )
}

Blog.propTypes = {
    data: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func.isRequired,
    handleMarksAsRead: PropTypes.func.isRequired
}

export default Blog