import { Footer } from "../../navigation/Footer";
import { Menu } from "../../navigation/Menu";
import { UserSideBar } from "../../navigation/UserSideBar";

export function Addreses() {
    return (
        <div>
            <Menu />
            <main className="main container-fluid">
                <h2 className="mt-5 mb-3 text-center">My addresess</h2>
                <p>The following addresses will be used on the checkout page by default.</p>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card card-dashboard">
                            <div className="card-body">
                                <h3 className="card-title">Billing Address</h3>
                                <p>User Name<br />
                                    User Company<br />
                                    John str<br />
                                    New York, NY 10001<br />
                                    1-234-987-6543<br />
                                    yourmail@mail.com<br />
                                    <a href="#">Edit <i className="icon-edit"></i></a></p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="card card-dashboard">
                            <div className="card-body">
                                <h3 className="card-title">Shipping Address</h3>

                                <p>You have not set up this type of address yet.<br/>
                                    <a href="#">Edit <i className="icon-edit"></i></a></p>
                            </div>
                        </div>
                    </div>
                </div>
                <UserSideBar />
            </main>
            <Footer />
        </div>
    )
}