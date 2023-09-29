import { Link } from "react-router-dom";
import { Footer } from "../navigation/Footer";
import { Menu } from "../navigation/Menu";

export function ErrorPage() {
    return (

        <div>
            <Menu />
            <main className="main container-fluid">
            <div className="error-content text-center" style={{backgroundImage: 'url(/src/assets/images/backgrounds/error-bg.jpg)'}}>
            	<div className="container">
            		<h1 className="error-title">Error 404</h1>
            		<p>We are sorry, the page you've requested is not available.</p>
            		<Link to={'/'} className="btn btn-outline-primary-2 btn-minwidth-lg">
            			<span>BACK TO HOMEPAGE</span>
            			<i className="icon-long-arrow-right"></i>
            		</Link>
            	</div>
        	</div>
            </main>

            <Footer />
        </div>
    )
}