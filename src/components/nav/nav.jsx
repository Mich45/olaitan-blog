import React from 'react'
import classes from './nav.module.css'
import { Link } from 'react-router-dom'
import { navBar } from '../constants/Nav'

export default function Nav() {
    return (
        <>
            <div>
                <nav className={classes.nav}>
                    <ul>
                        {
                            navBar.map((nav) => {
                                return (
                                    <Link to={nav.to}>
                                        <li>{nav.name}</li>
                                    </Link>
                                )
                            })
                        }
                    </ul>

                    <div className={classes.btnContainer}>
                        <Link>
                            sign in
                        </Link>
                        <Link>
                            <button>
                                Sign up
                            </button>
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    )
}
