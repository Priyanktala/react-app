import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light ">
                <a class="navbar-brand text-dark" href="#">LOGO</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <a class="nav-link text-dark" href="#"> Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item" data-toggle=" modal" data-target="#exampleModal" data-whatever="@mdo">
                            <Link class="nav-link text-dark" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"> Add Product </Link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark " href="#"> About </a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0 mr-5"  type="submit">Search</button>
                            <button class="btn btn-danger my-2 my-sm-0 " type="submit"><Link style={{color : 'black' , textDecoration : "none"}} to={"/"}>LogOut</Link></button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar