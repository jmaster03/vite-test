export function Banner() {
 
    return (
        <div className="container">
                	<h2 className="title text-center mt-3 mb-3">3 Columns Fullwidth</h2>

                	<div className="row justify-content-center">
                		<div className="col-md-6 col-lg-4">
                			<div className="banner">
	                			<a href="#">
	                				<img src="/src/assets/images/banners/3cols/banner-4.jpg" alt="Banner" />
	                			</a>

	                			<div className="banner-content">
	                				<h4 className="banner-subtitle">Quisque a lectus</h4>
	                				<h3 className="banner-title">Praesent elementum <br/>hendrerit tortor.</h3>
	                				<a href="#" className="banner-link">Click here</a>
	                			</div>
                			</div>
                		</div>

                		<div className="col-md-6 col-lg-4">
                			<div className="banner">
	                			<a href="#">
	                				<img src="/src/assets/images/banners/3cols/banner-5.jpg" alt="Banner" />
	                			</a>

	                			<div className="banner-content">
	                				<h4 className="banner-subtitle">Quisque a lectus</h4>
	                				<h3 className="banner-title">Donec consectetuer <br/>ligula vulputate.</h3>
	                				<a href="#" className="banner-link">Click here</a>
	                			</div>
                			</div>
                		</div>

                		<div className="col-md-6 col-lg-4">
                			<div className="banner">
	                			<a href="#">
	                				<img src="/src/assets/images/banners/3cols/banner-6.jpg" alt="Banner" />
	                			</a>

	                			<div className="banner-content">
	                				<h4 className="banner-subtitle">Quisque a lectus</h4>
	                				<h3 className="banner-title text-white">Phasellus ultrices <br/>nulla quisnibh.</h3>
	                				<a href="#" className="banner-link">Click here</a>
	                			</div>
                			</div>
                		</div>
                	</div>
                </div>

    )
}