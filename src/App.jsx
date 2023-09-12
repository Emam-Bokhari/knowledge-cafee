
import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

const App = () => {
    const [bookmarks,setBookmarks]=useState([])

    const handleAddBookmarks=(blog)=>{
        const newBookmarks=[...bookmarks,blog]
        setBookmarks(newBookmarks)
    }

    return (
        <div>
            <Header />
            <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-20 flex flex-col md:flex-row">
                <Blogs  handleAddBookmarks={handleAddBookmarks}/>
                
                <Bookmarks bookmarks={bookmarks} />
            </div>
        </div>
    )
}
export default App