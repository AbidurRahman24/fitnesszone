import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";


const Head = () => {
  const [user] = useAuthState(auth)

  const handleSignOut = () => {
    signOut(auth)
    localStorage.removeItem('token')
  }
  return (
    <>
      <div className="navbar p-0 min-h-0 drop-shadow-xl">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            <FaPhoneAlt />
            <p className="text-base">+01740100570</p>
          </a>
        </div>
        <div className="flex-none">
          <div className='icon  width flex sm:aline-center '>
            {user ?
              <>
                <ul className="menu menu-vertical lg:menu-horizontal rounded-box">
                  <li><a>Name: <span className="text-orange-500 ">{user.displayName}</span></a></li>
                  <li><a><button onClick={handleSignOut}>sign out</button></a></li>
                </ul>
              </>
              :
              <Link className="aline-center" to={'/login'}>login</Link>
            }
            <button className="btn btn-ghost btn-circle">
            </button>
            <div className='cart pl-4'>
              <Link to='/cart'>
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle">
                    <div className="indicator">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                      <span className="badge badge-sm indicator-item">
                        0
                      </span>
                    </div>
                  </label>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;