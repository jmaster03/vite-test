import { Link } from "react-router-dom";

export function UserSideBar() {
    return (
        <div>
            <aside className="col-lg-3 col-xl-5col order-lg-first">
                <div className="sidebar sidebar-shop">
                    <h3 className="widget-title"> <Link to={'/user-orders'}> Orders</Link></h3>
                    <h3 className="widget-title"><Link to={'/user-adresses'}> Addreses</Link></h3>
                    <h3 className="widget-title"><Link to={'/user-settings'}>Settings</Link> </h3>
                    <h3 className="widget-title"> <Link to={'/user-support'}>Support</Link> </h3>
                </div>
            </aside>
        </div>
    )
}