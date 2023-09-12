import ProfileImage from "../../assets/images/profile.png"

const Header = () => {
    return (
        <div>
            <section className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-20 my-10 ">
                <div className="flex justify-between items-center border-2 border-red-500">
                    <h2 className="text-4xl font-bold">Knowledge Cafe</h2>
                    <img src={ProfileImage} alt="Profile Image" />
                </div>
                <hr className="border-2 mt-5" />
            </section>
        </div>
    )
}
export default Header