import { CardProduct } from "./CardProduct";
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

export function CarouselProduct() {
    return (
        <div>
                  	<h2 className="title text-center mt-3 mb-3">Electronics</h2>


            <div className="tab-content tab-content-carousel">
                <div className="tab-pane p-0 fade show active" id="hot-all-tab" role="tabpanel" aria-labelledby="hot-all-link">
                    <div className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow owl-loaded owl-drag" data-toggle="owl" data-owl-options="{
                                    &quot;nav&quot;: false, 
                                    &quot;dots&quot;: true,
                                    &quot;margin&quot;: 20,
                                    &quot;loop&quot;: false,
                                    &quot;responsive&quot;: {
                                        &quot;0&quot;: {
                                            &quot;items&quot;:2
                                        },
                                        &quot;480&quot;: {
                                            &quot;items&quot;:2
                                        },
                                        &quot;768&quot;: {
                                            &quot;items&quot;:3
                                        },
                                        &quot;992&quot;: {
                                            &quot;items&quot;:4
                                        },
                                        &quot;1280&quot;: {
                                            &quot;items&quot;:5,
                                            &quot;nav&quot;: true
                                        }
                                    }
                                }">

                        <div className="owl-stage-outer">
                            <div className="owl-stage" style={styles.anima}>
                                <div className="owl-item active" style={styles.shape}>
                                    <CardProduct />
                                </div>
                                <div className="owl-item " style={styles.shape}>
                                    <CardProduct />
                                </div>
                                <div className="owl-item " style={styles.shape}>
                                    <CardProduct />
                                </div>
                                <div className="owl-item " style={styles.shape}>
                                    <CardProduct />
                                </div>
                                <div className="owl-item " style={styles.shape}>
                                    <CardProduct />
                                </div>
                                <div className="owl-item " style={styles.shape}>
                                    <CardProduct />
                                </div>
                                <div className="owl-item " style={styles.shape}>
                                    <CardProduct />
                                </div>
                                <div className="owl-item " style={styles.shape}>
                                    <CardProduct />
                                </div>         <div className="owl-item " style={styles.shape}>
                                    <CardProduct />
                                </div>         <div className="owl-item " style={styles.shape}>
                                    <CardProduct />
                                </div>         <div className="owl-item " style={styles.shape}>
                                    <CardProduct />
                                </div>
                            </div>

                        </div>

                        
                        <div className="owl-nav disabled">
                            <button type="button" role="presentation" className="owl-prev"><i className="icon-angle-left"></i></button>
                            <button type="button" role="presentation" className="owl-next disabled"><i className="icon-angle-right"></i></button>
                        </div>
               
                    </div>
                </div>




            </div>
                                

        </div>


    )
}