
import '../App.css'

function Header(){

    return (
        <header className="flex justify-between items-center border border-yellow-100 text-center py-5 bg-gray-800 text-white font-bold text-2xl">
            
            <i className="fas fa-tasks text-3xl cursor-pointer mx-3 "></i>

            <h1 className="header-title bg-white p-1 rounded-md">TODO - LIST</h1>
            
            {/*-----icons on navbar----- */}

            <div >
               <i className="hover:bg-amber-200 p-1 fas fa-user text-2xl mx-3 cursor-pointer" title="Home"></i> 
               <i className=" hover:bg-amber-200 p-1 fas fa-home text-2xl mx-3 cursor-pointer" title="Home"></i> 
               <i className="hover:bg-amber-200 p-1 fas fa-search text-2xl mx-3 cursor-pointer" title="Search"></i>
               <i className="hover:bg-amber-200 p-1 fas fa-cog text-2xl mx-3 cursor-pointer" title="Settings"></i>            
            </div>

        </header>
    )
}

export default Header;