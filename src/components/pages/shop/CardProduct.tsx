import { Link } from "react-router-dom"

export function CardProduct() {
    const styles = {
        anima: { transform: 'translate3d(-884px, 0px, 0px)', transition: 'all 0.4s ease 0s', width: '1326px' },
        anima2: { transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '951px' },
        shape: { width: '201px', marginRight: '20px' },
        wid8: { width: ' 80%' },
        wid6: { width: ' 60%' },
        wid100: { width: ' 100%' },


        color1: { background: '#edd2c8' },
        color2: { background: '#eaeaec' },
        color3: { background: '#333333' },

    }

    return (
        <div className="container">
            <div className="product">
                <figure className="product-media">
                    <span className="product-label label-sale">Sale</span>
                    <Link to={'/product/asd'}>
                        <img src="/src/assets/images/demos/demo-13/products/product-1.jpg" alt="Product image" className="product-image" />
                    </Link>

                    <div className="product-action-vertical">
                        <a href="#" className="btn-product-icon btn-wishlist btn-expandable"><span>add to wishlist</span></a>
                    </div>

                    <div className="product-action">
                        <a href="#" className="btn-product btn-cart" title="Add to cart"><span>add to cart</span></a>
                    </div>
                </figure>

                <div className="product-body">
                    <div className="product-cat">
                        <a href="#">Furniture</a>
                    </div>
                    <h3 className="product-title"><Link to={'/product/asd'}>Butler Stool Ladder</Link></h3>
                    <div className="product-price">
                        <span className="new-price">$251.99</span>
                        <span className="old-price">Was $290.00</span>
                    </div>
                    <div className="ratings-container">
                        <div className="ratings">
                            <div className="ratings-val" style={styles.wid100}></div>
                        </div>
                        <span className="ratings-text">( 2 Reviews )</span>
                    </div>
                </div>
            </div>


        </div>

    )
}