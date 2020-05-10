import React, { Component } from 'react';
import { Link } from "react-browser-router"; 

import '../../../styling/UI/drawerToggle/sideDrawer.scss';

class SideDrawer extends Component {

    render() {
        let drawerClasses = 'side-drawer';

        if(this.props.show) {
            drawerClasses = 'side-drawer open';
        }

        return (
            <div className={drawerClasses}>
                <Link 
                    className="navigation-link"
                    to={(location) => ({...location, pathname: "/"})}
                >About</Link>
                <Link 
                    className="navigation-link"
                    to={(location) => ({...location, pathname: "/popular_users"})}
                >Trending</Link>
                <Link 
                    className="navigation-link"
                    to={(location) => ({...location, pathname: "/battle"})}
                >Battle</Link>
            </div>
        )
    }
};

export default SideDrawer;