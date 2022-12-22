import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl font-bold">Crypto Cafe</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 mb-3 font-bold">
                        <li><a>Home</a></li>
                        <li><a>Coins</a></li>
                        <li><a>Contact</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;