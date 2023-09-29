import { Footer } from "../../navigation/Footer";
import { Menu } from "../../navigation/Menu";
import { UserSideBar } from "../../navigation/UserSideBar";

export function Settings() {
    return (
        <div>
            <Menu />
            <main className="main container-fluid">
                <h2 className="mt-5 mb-3 text-center">Settings account</h2>
                <UserSideBar/>
            </main>
            <Footer />
        </div>
    )
}