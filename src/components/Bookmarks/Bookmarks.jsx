import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'
const Bookmarks = ({ bookmarks }) => {

    return (
        <div>
            <div className="border-2 w-full md:w-[250px] lg:w-[400px] border-green-500 mt-5 bg-gray-200 px-5">
                <h2 className="text-center">BookMarks: {bookmarks.length}</h2>
                {
                    bookmarks.map((item,index)=><Bookmark key={index} data={item}/>)
                }
            </div>
        </div>
    )
}

Bookmarks.propTypes={
    bookmarks:PropTypes.array.isRequired
}

export default Bookmarks