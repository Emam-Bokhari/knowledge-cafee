import PropTypes from 'prop-types'
const Bookmark=({data})=>{
    const {title}=data
    return (
        <div>
                <p className="mt-5 bg-white px-2 rounded-md my-5">{title}</p>

        </div>
    )
}

Bookmark.propTypes={
    data:PropTypes.object.isRequired
}

export default Bookmark