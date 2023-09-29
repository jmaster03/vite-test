import { Link } from "react-router-dom"

export function Footer() {
    const year = new Date().getFullYear()
    return (
        <div>
            <footer className="footer footer-2">


                <div className="footer-middle border-0">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-lg-6">
                                <div className="widget widget-about">
                                    <img src="/src/assets/images/demos/demo-13/logo-footer.png" className="footer-logo" alt="Footer Logo" width="105" height="25" />
                                    <p>Praesent dapibus, neque id cursus ucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus. </p>

                                    <div className="widget-about-info">
                                        <div className="row">
                                            <div className="col-sm-6 col-md-4">
                                                <span className="widget-about-title">Got Question? Call us 24/7</span>
                                                <a href="tel:123456789">+0123 456 789</a>
                                            </div>
                                            <div className="col-sm-6 col-md-8">
                                                <span className="widget-about-title">Payment Method</span>
                                                <figure className="footer-payments">
                                                    <img src="/src/assets/images/payments.png" alt="Payment methods" width="272" height="20" />
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">Information</h4>

                                    <ul className="widget-list">
                                        <li><Link to={'/about'}>About Mernauta</Link></li>
                                        <li><Link to={'/faqs'}>FAQ</Link></li>
                                        <li><a href="contact.html">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">Customer Service</h4>

                                    <ul className="widget-list">
                                        <li><Link to={'/faqs#collapse3-1'}>Payment Methods</Link></li>
                                        <li><Link to={'/faqs#collapse2-1'}>Returns</Link></li>
                                        <li><Link to={'/faqs#collapse-1'}>Shipping</Link></li>
                                        <li><Link to={'/terms_n_conditions'}>Terms and conditions</Link></li>
                                        <li><Link to={'/privacy_policy'}>Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-sm-4 col-lg-2">
                                <div className="widget">
                                    <h4 className="widget-title">My Account</h4>

                                    <ul className="widget-list">
                                        <li><Link to={'/cart'}>View Cart</Link></li>
                                        <li><Link to={'/wishlist'}>My Wishlist</Link></li>
                                        <li><Link to={'/user-orders'}>Track My Order</Link></li>
                                        <li><Link to={'/user-support'}>Help</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <p className="footer-copyright">Copyright © {year} Mernauta Store. All Rights Reserved.</p>
               

                        <div className="social-icons social-icons-color">

                            <a href="#" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>

                            <a href="#" className="social-icon social-pinterest" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )

}