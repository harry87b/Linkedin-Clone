import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { logout, selectUser } from './features/userSlice';

function Header() {

  

  const dispatch = useDispatch();

  const logoutOffApp = () => {

    dispatch(logout())
    auth.signOut();

  }

  return (
    <div className='header'>
      

      <div className='header__left'>

      <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ8AAACfCAMAAADQxfvSAAAAaVBMVEUAd7f///8AdbYAcrUAcLT0+fw+hL1EicDp8/jl7vVmnsoAa7KNudhLksSiwtxgnsqwyuK90+eEr9PT5fB2ps4nf7sAZrAkhL5SjsJWl8fb6fPK3u17rNIVe7lyncp5osw0i8Gau9lglcabtr3eAAAEoElEQVR4nO2d23aqMBCGYZKgGFGOHgBb9f0fckPVVoQcKCxnulf+m96k+DmZkMlkEj3/oTBJo72Hr32UJuE3lXf/m+WF5Ayw4RoB47LIsw6fSIFTYHuooUnFD18YSUp0rUBG4YMvPHBsnAHxQ3jjExFFvAYwEl98qcQmUUimLV8G1HzvIYCs4ctp9m4rnvteWFA1X2PAIvQSqt7XSiZeSrd7mw5OvYhhQ2jEIm9P1/0aB6QQsPzXAmCMcxqRV1+Mnw4f9Xpdf14LSW4gwe68yZa3OFGU8ZEYIT8kfkfZilAQC+wi/FclHhUTwinp0bUmXNAAZKdyCK/xQxKxNsCg9VqVAQEL8liF13TxCZvOY0c1nu+v0SMypnC+uwtihxQ81eH5/gZ3iGgGx01lgcu36L+Yu8pRhzDLDXj+BnWEyI2Jr9xh8u0yE59Atd8uNPH5qAP4P+DD7d+Ktv+Zx2+GOn4t3n+o/geBaf5Y4YaAxvk3QMXz+Kee74IcAALTziDihL3KZJGOr8ZfIfGLGq/Ctl4rUL6jaeSrQSoAlycCy0tPnT8408BrLVj3XtNiQ2kfkQebLmFCbKOOsaDO7ogiXC+ASt9+C7iEqK7T+uhJQrm/jtr0MydnOSeaIrvZzLiUjR9/ebOUbLJD3/ZlXvX6WBhq9NqqrWg5RXmcVFVWlmVWJZftvt3zmWJLuF7injZ5N/YDyDcDrernSZrxxWfcX7KKJD1MKLqRigxv9fxIZSau+g5ymDwPwN1jjSrnvyRUpyif99uZciVa3VoBP+oX08safjNngqfM8C4XP9+4UOeBvwzIvNi0FPSr4y9WM7BQ5jjEz+ISgqXyY9tteR5p89gP1eP7eBY+nhuNd1M8eiDPwTcQP6o0uoZkBj5pzJI8A44cJNP5FsYke0cjM9rT+bbGJHFXq1EWnM5nzCG+aNyydTrfaI3K2SHw+WNWrhh8Y14yGHziaG9ADD4/Js4X2m+LovCNSGvj8FXW2xY4fL51HIPEZz2CZ+UTIszKpbCIF6znkBn5kvQsd414dDHOydXb7Veu4F7b2CyCYWVoXwaWDjgXX7x7LrwEzvU7U+L6Xr7Lqz8B0/fxh2UHz8MX97PVUGjjVtti8Vn4yqEnc21pV/xOvuEqHm11iG2MNQdfNbwXoa2NK9/It1X0lSYpYl3YMANfqPooritveB+fcq7SVu9Z1qnPwKcM5likmYkta0en86mnKmCa+h/L0swZ1ufqWE5Xn2S5yJzOF6s9XVefZHmaZzqfZqaSmiDBMkKdzqfJ9+jqp97Gp+mov8y3dXyOz/E5Psfn+Byf43N8js/xOT7H5/gcn+NzfI7P8Tk+x+f4HN+f5QuI84GySmC5tzofoDkjzGs1n20RqvoZz5XU7KJqpSt0gEJp9sy6iFcO3H7lt6denj8YmOIUS6IthWRHhd0r2/qm9iGHdN1Teu1u6wJb9Rut1x+GE+AsqIf+LR91dnfw6FNv13n4FJXJDFbHqpzmEPZlUVrBnvz9ndTvP6V+fyyN+wyG1d6/S/3+YvL3P1O/P5v8/ePU728nf/89+d8P8Kn//sJXJ5P8/Yp/itJiHNZSxOwAAAAASUVORK5CYII=' alt=''></img>

      <div className='header__search'>
        <SearchIcon/>

      <input placeholder='search' type="text"/>
      </div>

      </div>      

      <div className='header__right'>
      <HeaderOption Icon={HomeIcon} title='Home'/>
      <HeaderOption Icon={PeopleAltIcon} title='My Network'/>
      <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
      <HeaderOption Icon={MessageIcon} title='Messaging'/>
      <HeaderOption Icon={NotificationsActiveIcon} title='Notifications'/>
      <HeaderOption  avatar={true} 
      title="me"
      onClick={logoutOffApp}
      />
      


      </div>
      
    </div>
  )
}

export default Header
