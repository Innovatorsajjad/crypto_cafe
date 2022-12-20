import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">Crypto Cafe</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 mb-3">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                        <li><a>Item 4</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;