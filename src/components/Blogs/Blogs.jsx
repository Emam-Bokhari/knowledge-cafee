import { useEffect } from "react"
import { useState } from "react"
import Blog from "../Blog/Blog"
import PropTypes from 'prop-types'

const Blogs = ({ handleAddBookmarks, handleMarksAsRead }) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch("Blogs.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div>

            {
                blogs.map(item => <Blog key={item.id} data={item} handleAddBookmarks={handleAddBookmarks} handleMarksAsRead={handleMarksAsRead}></Blog>)
            }

        </div>
    )
}

Blogs.propTypes = {
    handleAddBookmarks: PropTypes.func.isRequired,
    handleMarksAsRead: PropTypes.func.isRequired
}

export default Blogs