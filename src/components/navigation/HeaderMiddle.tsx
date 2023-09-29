import { Link } from "react-router-dom"
export function HeaderMiddle(){
    return(
        <div className="header-middle">
                <div className="container">
                    <div className="header-left">
             
                        <Link to={'/'} className="logo">
                            <img src={'/src/assets/images/demos/demo-13/logo.png'} alt="Mernauta Logo" width="105" height="25"/>
                        </Link>
                    </div>

                    <div className="header-center">
                        <div className="header-search header-search-extended header-search-visible header-search-no-radius d-none d-lg-block">
                            <a href="#" className="search-toggle" role="button"><i className="icon-search"></i></a>
                            <form action="/products" method="get">
                                <div className="header-search-wrapper search-wrapper-wide">
                                    <div className="select-custom">
                                        <select id="cat" name="cat">
                                            <option value="">All Departments</option>
                                            <option value="1">Fashion</option>
                                            <option value="2">- Women</option>
                                            <option value="3">- Men</option>
                                            <option value="4">- Jewellery</option>
                                            <option value="5">- Kids Fashion</option>
                                            <option value="10">Home &amp; Garden</option>
                                            <option value="16">- Auto Tools &amp; Supplies</option>
                                        </select>
                                    </div>
                                    <label  className="sr-only">Search</label>
                                    <input type="search" className="form-control" name="q" id="q" placeholder="Search product ..." required />
                                    <button className="btn btn-primary" type="submit"><i className="icon-search"></i></button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="header-right">
                        <div className="header-dropdown-link">
                            <div className="dropdown cart-dropdown">
                                <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static" title="Compare Products" aria-label="Compare Products">
                                    <i className="icon-user"></i>
                                    <span className="compare-txt">Account</span>
                                </a>

                                <div className="dropdown-menu dropdown-menu-right">
                                    <ul className="">
                                        <li className="mb-2">
                                            <h4 className="product-title"><Link to={'/user-orders'}>Orders</Link></h4>
                                        </li>
                                        <li className="mb-2">
                                            <h4 className="product-title"><Link to={'/user-adresses'}>Address</Link></h4>
                                        </li>
                                   
                                        <li className="mb-2">
                                            <h4 className="product-title"><Link to='/user-settings'>Settings</Link></h4>
                                            
                                        </li>
                                        <li className="mb-2">
                                            <h4 className="product-title"><Link to={'/user-support'}>Help Center</Link></h4>
                                            
                                        </li>

                                    </ul>

                                    <div className="dropdown-cart-action">
                                        <a href="#" className="btn btn-outline-primary-2"><span>Logout</span></a>
                                    </div>
                                </div>
                            </div>

                            <Link to={'/wishlist'} className="wishlist-link">
                                <i className="icon-heart-o"></i>
                                <span className="wishlist-count">3</span>
                                <span className="wishlist-txt">Wishlist</span>
                            </Link>

                            <div className="dropdown cart-dropdown">
                                <a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                                    <i className="icon-shopping-cart"></i>
                                    <span className="cart-count">2</span>
                                    <span className="cart-txt">Cart</span>
                                </a>

                                <div className="dropdown-menu dropdown-menu-right">
                                    <div className="dropdown-cart-products">
                                        <div className="product">
                                            <div className="product-cart-details">
                                                <h4 className="product-title">
                                                    <a href="product.html">Beige knitted elastic runner shoes</a>
                                                </h4>

                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span>
                                                    x $84.00
                                                </span>
                                            </div>

                                            <figure className="product-image-container">
                                                <a href="product.html" className="product-image">
                                                    <img src="/src/assets/images/products/cart/product-1.jpg" alt="product"/>
                                                </a>
                                            </figure>
                                            <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                        </div>

                                        <div className="product">
                                            <div className="product-cart-details">
                                                <h4 className="product-title">
                                                    <a href="product.html">Blue utility pinafore denim dress</a>
                                                </h4>

                                                <span className="cart-product-info">
                                                    <span className="cart-product-qty">1</span>
                                                    x $76.00
                                                </span>
                                            </div>

                                            <figure className="product-image-container">
                                                <a href="product.html" className="product-image">
                                                    <img src="/src/assets/images/products/cart/product-2.jpg" alt="product"/>
                                                </a>
                                            </figure>
                                            <a href="#" className="btn-remove" title="Remove Product"><i className="icon-close"></i></a>
                                        </div>
                                    </div>

                                    <div className="dropdown-cart-total">
                                        <span>Total</span>

                                        <span className="cart-total-price">$160.00</span>
                                    </div>

                                    <div className="dropdown-cart-action">
                                        <Link to={'/cart'} className="btn btn-primary">View Cart</Link>
                                        <Link to={'/checkout    '} className="btn btn-outline-primary-2"><span>Checkout</span><i className="icon-long-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )
}