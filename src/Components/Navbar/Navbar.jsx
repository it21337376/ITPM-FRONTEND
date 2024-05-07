import React, { useState } from 'react';
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import user from '../Assets/user.png'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" className="shopping logo" />
                <p>StyleSphere</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() => { setMenu("home") }}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu === "home" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/shop'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Blog</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>About</Link> {menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("contact") }}><Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link> {menu === "contact" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Search</button></Link>
                <Link to='/cart'><img src={user} alt="" className="cart logo" /></Link>
                <Link to='/cart'><img src={cart_icon} alt="" className="cart logo" /></Link>
                <div className="nav-cart-count">0</div>
            </div>

        </div>
    )
}

export default Navbar