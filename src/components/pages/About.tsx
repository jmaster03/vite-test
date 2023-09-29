import { Footer } from "../navigation/Footer";
import { Menu } from "../navigation/Menu";

export function About() {
    return (
        <div>
            <Menu />
            <main className="main container-fluid">
                <h2 className="mt-5 mb-3 text-center">Who we are</h2>
                <div className="container text-center">
                    <p>
                        Welcome to Mernauta, where we believe that quality, style, and affordability should go hand-in-hand. Our mission is to provide our customers with the best possible shopping experience, whether they're looking for the latest fashion trends or must-have accessories.
                    </p>

                    <p>
                        Our team is made up of passionate professionals with years of experience in the retail industry. We take pride in our work and strive to exceed our customers' expectations with every purchase.
                    </p>


                    <p>
                        At Mernauta, we offer a wide range of products, from clothing and accessories to home goods and beauty products. Our products are carefully curated to ensure that we only offer the best quality and most fashionable items.
                    </p>

                    <p>

                        What sets us apart from our competitors is our commitment to affordability. We believe that everyone deserves to look and feel their best, regardless of their budget. That's why we offer competitive prices on all of our products, without compromising on quality.
                    </p>

                    <p>

                        We're proud to be a socially responsible company, and we're committed to making a positive impact in our communities. We support a number of charitable organizations and sustainability initiatives, and we're always looking for new ways to give back.

                    </p>




                </div>
                <div className="page-content pb-0 mt-3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-3 mb-lg-0">
                                <h2 className="text-center">Our Vision</h2>
                                <p>At Mernauta, our mission is to provide our customers with the best possible shopping experience by offering a wide range of high-quality products at affordable prices. We strive to exceed our customers' expectations with every purchase, and we're committed to delivering exceptional customer service. </p>
                            </div>

                            <div className="col-lg-6">
                                <h2 className="text-center" >Our Mission </h2>
                                <p> Our vision at Mernauta is to become the go-to destination for fashion-conscious individuals who want to look and feel their best without breaking the bank. We're constantly updating our product selection to stay ahead of the latest trends, and we're dedicated to providing a seamless shopping experience that's both enjoyable and stress-free. Above all, we're committed to making a positive impact in our communities and in the world at large, through our commitment to social responsibility and sustainability initiatives.</p>
                            </div>
                        </div>

                        <div className="mb-5"></div>
                    </div>

                    <div className="container">
                        <div className="row">
                                             <div className="col-lg-12">
                                <div className="brands-display">
                                    <div className="row justify-content-center">
                                        <div className="col-6 col-sm-4">
                                            <a href="#" className="brand">
                                                <img src="/src/assets/images/brands/1.png" alt="Brand Name" />
                                            </a>
                                        </div>

                                        <div className="col-6 col-sm-4">
                                            <a href="#" className="brand">
                                                <img src="/src/assets/images/brands/2.png" alt="Brand Name" />
                                            </a>
                                        </div>

                                        <div className="col-6 col-sm-4">
                                            <a href="#" className="brand">
                                                <img src="/src/assets/images/brands/3.png" alt="Brand Name" />
                                            </a>
                                        </div>

                                        <div className="col-6 col-sm-4">
                                            <a href="#" className="brand">
                                                <img src="/src/assets/images/brands/4.png" alt="Brand Name" />
                                            </a>
                                        </div>

                                        <div className="col-6 col-sm-4">
                                            <a href="#" className="brand">
                                                <img src="/src/assets/images/brands/5.png" alt="Brand Name" />
                                            </a>
                                        </div>

                                        <div className="col-6 col-sm-4">
                                            <a href="#" className="brand">
                                                <img src="/src/assets/images/brands/6.png" alt="Brand Name" />
                                            </a>
                                        </div>

                                        <div className="col-6 col-sm-4">
                                            <a href="#" className="brand">
                                                <img src="/src/assets/images/brands/7.png" alt="Brand Name" />
                                            </a>
                                        </div>

                                        <div className="col-6 col-sm-4">
                                            <a href="#" className="brand">
                                                <img src="/src/assets/images/brands/8.png" alt="Brand Name" />
                                            </a>
                                        </div>

                                        <div className="col-6 col-sm-4">
                                            <a href="#" className="brand">
                                                <img src="/src/assets/images/brands/9.png" alt="Brand Name" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr className="mt-4 mb-6" />


                    </div>

                    <div className="mb-2"></div>


                </div>
            </main>

            <Footer />
        </div>

    )
}