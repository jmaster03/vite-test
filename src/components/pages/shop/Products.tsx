import { Footer } from "../../navigation/Footer";
import { Menu } from "../../navigation/Menu";
import { ProductSidebar } from "../../navigation/ProductSidebar";
import { CardProduct } from "./CardProduct";
import { CarouselProduct } from "./CarouselProduct";

export function Products() {
    return (
        <div>
            <Menu />
            <main className="main container-fluid">
                <h2 className="mt-5 mb-3" > Results for "Search"</h2>


                <div className="">
                    <div className="row">
                        <div className="col-lg-9 col-xl-4-5col">

                            <div className="mb-3"></div>

                            <div className="mb-3 mb-lg-5"></div>

                            <div className="mb-2"></div>


                            <div className="toolbox">
                                <div className="toolbox-left">
                                    <div className="toolbox-info">
                                        10 Products found
                                    </div>
                                </div>

                                <div className="toolbox-right">
                                    <div className="toolbox-sort">
                                        <label htmlFor="sortby">Sort by:</label>
                                        <div className="select-custom">
                                            <select name="sortby" id="sortby" className="form-control" defaultValue={'Rated'}>
                                                <option value="popularity" >Most Popular</option>
                                                <option value="rating">Most Rated</option>
                                                <option value="lower">Lower Price</option>
                                                <option value="higher">Higher Price</option>

                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="products mb-3">
                                <div className="row">
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>

                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>

                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>

                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>

                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>
                                    <div className="col-6 col-md-4 col-xl-3">
                                        <CardProduct />
                                    </div>


                                </div>
                            </div>

                            <nav aria-label="Page navigation">
							    <ul className="pagination justify-content-center">
							        <li className="page-item disabled">
							            <a className="page-link page-link-prev" href="#" aria-label="Previous" tabIndex={-1} aria-disabled="true">
							                <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
							            </a>
							        </li>
							        <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a></li>
							        <li className="page-item"><a className="page-link" href="#">2</a></li>
							        <li className="page-item"><a className="page-link" href="#">3</a></li>
							        <li className="page-item-total">of 6</li>
							        <li className="page-item">
							            <a className="page-link page-link-next" href="#" aria-label="Next">
							                Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
							            </a>
							        </li>
							    </ul>
							</nav>
                        </div>

                        <ProductSidebar />

                    </div>
                </div>


            </main>


            <div className="container">
                <CarouselProduct />

            </div>
            <Footer />
        </div>

    )
}