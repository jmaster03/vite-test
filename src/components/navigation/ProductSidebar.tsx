export function ProductSidebar(){
    return (
        <aside className="col-lg-3 col-xl-5col order-lg-first">
        <div className="sidebar sidebar-shop">
            <div className="widget widget-categories">
                <h3 className="widget-title">Electronics</h3>

                <div className="widget-body">
                    <div className="accordion" id="widget-cat-acc">
                        <div className="acc-item">
                            <h5>
                                <a role="button" data-toggle="collapse" href="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                                    Laptops &amp; Computers
                                </a>
                            </h5>
                            <div id="collapse-1" className="collapse show" data-parent="#widget-cat-acc">
                                <div className="collapse-wrap">
                                    <ul>
                                        <li><a href="#">Desktop Computers</a></li>
                                        <li><a href="#">Monitors</a></li>
                                        <li><a href="#">Laptops</a></li>
                                        <li><a href="#">iPad &amp; Tablets</a></li>
                                        <li><a href="#">Hard Drives &amp; Storage</a></li>
                                        <li><a href="#">Printers &amp; Supplies</a></li>
                                        <li><a href="#">Computer Accessories</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="acc-item">
                            <h5>
                                <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2">
                                    TV &amp; Video
                                </a>
                            </h5>
                            <div id="collapse-2" className="collapse" data-parent="#widget-cat-acc">
                                <div className="collapse-wrap">
                                    <ul>
                                        <li><a href="#">AV Receivers &amp; Amplifiers</a></li>
                                        <li><a href="#">Blu-ray Players &amp; Recorders</a></li>
                                        <li><a href="#">DVD Players &amp; Recorders</a></li>
                                        <li><a href="#">HD DVD Players</a></li>
                                        <li><a href="#">Home Theater Systems</a></li>
                                        <li><a href="#">Projection Screens</a></li>
                                        <li><a href="#">Projectors</a></li>
                                        <li><a href="#">Satellite Television</a></li>
                                        <li><a href="#">Televisions</a></li>
                                        <li><a href="#">TV-DVD Combos</a></li>
                                        <li><a href="#">Streaming Media Players</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="acc-item">
                            <h5>
                                <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-3" aria-expanded="false" aria-controls="collapse-3">
                                    Cell Phone
                                </a>
                            </h5>
                            <div id="collapse-3" className="collapse" data-parent="#widget-cat-acc">
                                <div className="collapse-wrap">
                                    <ul>
                                        <li><a href="#">Carrier Cell Phones</a></li>
                                        <li><a href="#">Unlocked Cell Phones</a></li>
                                        <li><a href="#">Mobile Broadband</a></li>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Cases, Holsters &amp; Clips</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="acc-item">
                            <h5>
                                <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
                                    Digital Cameras
                                </a>
                            </h5>
                            <div id="collapse-4" className="collapse" data-parent="#widget-cat-acc">
                                <div className="collapse-wrap">
                                    <ul>
                                        <li><a href="#">Accessories</a></li>
                                        <li><a href="#">Bags &amp; Cases</a></li>
                                        <li><a href="#">Binoculars &amp; Scopes</a></li>
                                        <li><a href="#">Film Photography</a></li>
                                        <li><a href="#">Flashes</a></li>
                                        <li><a href="#">Lenses</a></li>
                                        <li><a href="#">Lighting &amp; Studio</a></li>
                                        <li><a href="#">Tripods &amp; Monopods</a></li>
                                        <li><a href="#">Underwater Photography</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="widget">
                <h3 className="widget-title">Brands</h3>

                <div className="widget-body">
                    <div className="filter-items">
                        <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="brand-1"/>
                                    <label className="custom-control-label" htmlFor="brand-1">Next</label>
                            </div>
                        </div>

                        <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="brand-2"/>
                                    <label className="custom-control-label" htmlFor="brand-2">River Island</label>
                            </div>
                        </div>

                        <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="brand-3"/>
                                    <label className="custom-control-label" htmlFor="brand-3">Geox</label>
                            </div>
                        </div>

                        <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="brand-4"/>
                                    <label className="custom-control-label" htmlFor="brand-4">New Balance</label>
                            </div>
                        </div>

                        <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="brand-5"/>
                                    <label className="custom-control-label" htmlFor="brand-5">UGG</label>
                            </div>
                        </div>

                        <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="brand-6"/>
                                    <label className="custom-control-label" htmlFor="brand-6">F&amp;F</label>
                            </div>
                        </div>

                        <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="brand-7"/>
                                    <label className="custom-control-label" htmlFor="brand-7">Nike</label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="widget">
                <h3 className="widget-title">Price</h3>

                <div className="widget-body">
                    <div className="filter-items">
                        <div className="filter-item">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="price-1" name="filter-price" />
                                    <label className="custom-control-label" htmlFor="price-1">Under $25</label>
                            </div>
                        </div>

                        <div className="filter-item">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="price-2" name="filter-price" />
                                    <label className="custom-control-label" htmlFor="price-2">$25 to $50</label>
                            </div>
                        </div>

                        <div className="filter-item">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="price-3" name="filter-price"/>
                                    <label className="custom-control-label" htmlFor="price-3">$50 to $100</label>
                            </div>
                        </div>

                        <div className="filter-item">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="price-4" name="filter-price"/>
                                    <label className="custom-control-label" htmlFor="price-4">$100 to $200</label>
                            </div>
                        </div>

                        <div className="filter-item">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="price-5" name="filter-price"/>
                                    <label className="custom-control-label" htmlFor="price-5">$200 &amp; Above</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="widget">
                <h3 className="widget-title">Customer Rating</h3>

                <div className="widget-body">
                    <div className="filter-items">
                        <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cus-rating-1"/>
                                    <label className="custom-control-label" htmlFor="cus-rating-1">
                                        <span className="ratings-container">
                                            <span className="ratings">
                                                <span className="ratings-val" style={{width: '100%'}}></span>
                                            </span>
                                            <span className="ratings-text">( 24 )</span>
                                        </span>
                                    </label>
                            </div>
                        </div>

                        <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cus-rating-2"/>
                                    <label className="custom-control-label" htmlFor="cus-rating-2">
                                        <span className="ratings-container">
                                            <span className="ratings">
                                                <span className="ratings-val" style={{width: '80%'}}></span>
                                            </span>
                                            <span className="ratings-text">( 8 )</span>
                                        </span>
                                    </label>
                            </div>
                        </div>

                        <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cus-rating-3"/>
                                    <label className="custom-control-label" htmlFor="cus-rating-3">
                                        <span className="ratings-container">
                                            <span className="ratings">
                                                <span className="ratings-val" style={{width: '60%'}}></span>
                                            </span>
                                            <span className="ratings-text">( 5 )</span>
                                        </span>
                                    </label>
                            </div>
                        </div>

                        <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cus-rating-4"/>
                                    <label className="custom-control-label" htmlFor="cus-rating-4">
                                        <span className="ratings-container">
                                            <span className="ratings">
                                                <span className="ratings-val" style={{width:' 40%'}}></span>
                                            </span>
                                            <span className="ratings-text">( 1 )</span>
                                        </span>
                                    </label>
                            </div>
                        </div>

                        <div className="filter-item">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="cus-rating-5"/>
                                    <label className="custom-control-label" htmlFor="cus-rating-5">
                                        <span className="ratings-container">
                                            <span className="ratings">
                                                <span className="ratings-val" style={{width: '20%'}}></span>
                                            </span>
                                            <span className="ratings-text">( 3 )</span>
                                        </span>
                                    </label>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="widget">
                <h3 className="widget-title">Colour</h3>

                <div className="widget-body">
                    <div className="filter-colors">
                        <a href="#" style={{background: '#b87145'}}><span className="sr-only">Color Name</span></a>
                        <a href="#" style={{background: '#f0c04a'}}><span className="sr-only">Color Name</span></a>
                        <a href="#" style={{background: '#333333'}}><span className="sr-only">Color Name</span></a>
                        <a href="#" className="selected" style={{background: '#cc3333'}}><span className="sr-only">Color Name</span></a>
                        <a href="#" style={{background:' #3399cc'}}><span className="sr-only">Color Name</span></a>
                        <a href="#" style={{background: '#669933'}}><span className="sr-only">Color Name</span></a>
                        <a href="#" style={{background: '#f2719c'}}><span className="sr-only">Color Name</span></a>
                        <a href="#" style={{background: '#ebebeb'}}><span className="sr-only">Color Name</span></a>
                    </div>
                </div>
            </div>

            <div className="widget widget-banner-sidebar">
                <div className="banner-sidebar-title">ad banner 218 x 430px</div>

                <div className="banner-sidebar banner-overlay">
                    <a href="#">
                        <img src="/src/assets/images/demos/demo-13/banners/banner-6.jpg" alt="banner"/>
                    </a>
                </div>
            </div>
        </div>
    </aside>  
    )
}