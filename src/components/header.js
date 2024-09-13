import logo from './images/netflixlogo.png';
const Header = () =>{
    return(
        <div> 
            <div className="px-8 py-2 bg-gradient-to-b from-black">
              <img src={logo} className='w-40 h-30' />
            </div>
        </div>
    )
}
export default Header;