import { Banner } from '../common/Banner'
import { Footer } from '../navigation/Footer'
import { Menu } from '../navigation/Menu'
import { CarouselProduct } from './shop/CarouselProduct'

const styleImage ={
  image1:{
    backgroundImage: 'url(' + '/src/assets/images/demos/demo-13/slider/slide-1.png' + ')'
  },

  image2:{
    backgroundImage: 'url(' + '/src/assets/images/demos/demo-13/slider/slide-2.jpg' + ')'
  },

  image3:{
    backgroundImage: 'url(' + '/src/assets/images/demos/demo-13/slider/slide-3.jpg' + ')'
  },
}

export function Home() {

  return (
    <div>
      <Menu />
      <main className="main container-fluid">
        <div className="intro-slider-container mt-2">
                <div className="intro-slider owl-carousel owl-simple owl-nav-inside" data-toggle="owl" data-owl-options='{
                        "nav": false,
                        "responsive": {
                            "992": {
                                "nav": true
                            }
                        }
                    }'>
                    <div className="intro-slide" style={styleImage.image1}>
                        <div className="container intro-content">
                            <div className="row">
                                <div className="col-auto  intro-col">
                                    <h3 className="intro-subtitle">Trade-In Offer</h3>
                                    <h1 className="intro-title">MacBook Air <br/>Latest Model
                                        <span>
                                            <sup className="font-weight-light">from</sup>
                                            <span className="text-primary">$999<sup>,99</sup></span>
                                        </span>
                                    </h1>

                                    <a href="category.html" className="btn btn-outline-primary-2">
                                        <span>Shop Now</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="intro-slide" style={styleImage.image2}>
                        <div className="container intro-content">
                            <div className="row">
                                <div className="col-auto  intro-col">
                                    <h3 className="intro-subtitle">Trevel & Outdoor</h3>
                                    <h1 className="intro-title">Original Outdoor <br/>Beanbag
                                        <span>
                                            <sup className="font-weight-light line-through">$89,99</sup>
                                            <span className="text-primary">$29<sup>,99</sup></span>
                                        </span>
                                    </h1>

                                    <a href="category.html" className="btn btn-outline-primary-2">
                                        <span>Shop Now</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="intro-slide" style={styleImage.image3}>
                        <div className="container intro-content">
                            <div className="row">
                                <div className="col-auto intro-col">
                                    <h3 className="intro-subtitle">Fashion Promotions</h3>
                                    <h1 className="intro-title">Tan Suede <br/>Biker Jacket
                                        <span>
                                            <sup className="font-weight-light line-through">$240,00</sup>
                                            <span className="text-primary">$180<sup>,99</sup></span>
                                        </span>
                                    </h1>

                                    <a href="category.html" className="btn btn-outline-primary-2">
                                        <span>Shop Now</span>
                                        <i className="icon-long-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <span className="slider-loader"></span>
        </div>

        <hr className="m-5"/>
          <CarouselProduct />
        <hr className="m-5"/>
        <Banner/>
        <hr className="m-5" />
        <CarouselProduct/>
        <hr className="m-5" />

        <Banner/>

        <hr className="m-5"/>

        <div className="cta cta-horizontal cta-horizontal-box bg-primary">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-2xl-5col">
                            <h3 className="cta-title text-white">Join Our Newsletter</h3>
                            <p className="cta-desc text-white">Subcribe to get information about products and coupons</p>
                        </div>
                        
                        <div className="col-3xl-5col">
                            <form action="#">
                                <div className="input-group">
                                    <input type="email" className="form-control form-control-white" placeholder="Enter your Email Address" aria-label="Email Adress" required/>
                                    <div className="input-group-append">
                                        <button className="btn btn-outline-white-2" type="submit"><span>Subscribe</span><i className="icon-long-arrow-right"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


      </main>


      <Footer />
    </div>
  )
}
