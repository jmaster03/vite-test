import { Link } from "react-router-dom";
import { Footer } from "../../navigation/Footer";
import { Menu } from "../../navigation/Menu";

export function Wishlist() {
    return (
        <div>
            <Menu />
            <main className="main container-fluid">
            <h2 className="mt-5 mb-3 text-center">Wishlist</h2>

                <div className="page-content">
            	<div className="container">
					<table className="table table-wishlist table-mobile">
						<thead>
							<tr>
								<th>Product</th>
								<th>Price</th>
								<th>Stock Status</th>
								<th></th>
								<th></th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td className="product-col">
									<div className="product">
										<figure className="product-media">
											<a href="#">
												<img src="/src/assets/images/products/table/product-1.jpg" alt="Product image"/>
											</a>
										</figure>

										<h3 className="product-title">
											<Link to={'/product/asd'}>Beige knitted elastic runner shoes</Link>
										</h3>
									</div>
								</td>
								<td className="price-col">$84.00</td>
								<td className="stock-col"><span className="in-stock">In stock</span></td>
								<td className="action-col">
                                    <div className="dropdown">
									<button className="btn btn-block btn-outline-primary-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="icon-list-alt"></i>Select Options
                                    </button>

                                    <div className="dropdown-menu" x-placement="bottom-start" style={{position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(0px, 40px, 0px)'}}>
                                        <a className="dropdown-item" href="#">First option</a>
                                        <a className="dropdown-item" href="#">Another option</a>
                                        <a className="dropdown-item" href="#">The best option</a>
                                      </div>
                                    </div>
								</td>
								<td className="remove-col"><button className="btn-remove"><i className="icon-close"></i></button></td>
							</tr>
							<tr>
								<td className="product-col">
									<div className="product">
										<figure className="product-media">
											<a href="#">
												<img src="/src/assets/images/products/table/product-2.jpg" alt="Product image"/>
											</a>
										</figure>

										<h3 className="product-title">
                                        <Link to={'/product/asd'}>Blue utility pinafore denim dress</Link>
										</h3>
									</div>
								</td>
								<td className="price-col">$76.00</td>
								<td className="stock-col"><span className="in-stock">In stock</span></td>
								<td className="action-col">
									<button className="btn btn-block btn-outline-primary-2"><i className="icon-cart-plus"></i>Add to Cart</button>
								</td>
								<td className="remove-col"><button className="btn-remove"><i className="icon-close"></i></button></td>
							</tr>
							<tr>
								<td className="product-col">
									<div className="product">
										<figure className="product-media">
											<a href="#">
												<img src="/src/assets/images/products/table/product-3.jpg" alt="Product image"/>
											</a>
										</figure>

										<h3 className="product-title">
                                        <Link to={'/product/asd'}>Orange saddle lock front chain cross body bag</Link>
										</h3>
									</div>
								</td>
								<td className="price-col">$52.00</td>
								<td className="stock-col"><span className="out-of-stock">Out of stock</span></td>
								<td className="action-col">
									<button className="btn btn-block btn-outline-primary-2 disabled">Out of Stock</button>
								</td>
								<td className="remove-col"><button className="btn-remove"><i className="icon-close"></i></button></td>
							</tr>
						</tbody>
					</table>
	            	{/* <div className="wishlist-share">
	            		<div className="social-icons social-icons-sm mb-2">
	            			<label className="social-label">Share on:</label>
	    					<a href="#" className="social-icon" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></a>
	    					<a href="#" className="social-icon" title="Twitter" target="_blank"><i className="icon-twitter"></i></a>
	    					<a href="#" className="social-icon" title="Instagram" target="_blank"><i className="icon-instagram"></i></a>
	    					<a href="#" className="social-icon" title="Youtube" target="_blank"><i className="icon-youtube"></i></a>
	    					<a href="#" className="social-icon" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></a>
	    				</div>
	            	</div> */}
            	</div>
            </div>
            </main>

            <Footer />
        </div>

    )
}