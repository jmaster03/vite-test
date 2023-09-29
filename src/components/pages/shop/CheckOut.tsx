import { Footer } from "../../navigation/Footer";
import { Menu } from "../../navigation/Menu";

export function CheckOut() {
    return (
        <div>
            <Menu /> 

            <a className="p-5 m-5 "><i className="icon-long-arrow-left"></i></a>
            <main className="main container-fluid">
            <h2 className="mt-5 mb-3 text-center">Chekout</h2>

                <div className="page-content">
            	<div className="checkout">
	                <div className="container">
            			<div className="checkout-discount">
            				<form action="#">
        						<input type="text" className="form-control" required  id="checkout-discount-input"/>
            					<label htmlFor="checkout-discount-input" className="text-truncate">Have a coupon? <span>Click here to enter your code</span></label>
            				</form>
            			</div>
            			<form action="#">
		                	<div className="row">
		                		<div className="col-lg-9">
		                			<h2 className="checkout-title">Billing Details</h2>
		                				<div className="row">
		                					<div className="col-sm-6">
		                						<label>First Name *</label>
		                						<input type="text" className="form-control" required />
		                					</div>

		                					<div className="col-sm-6">
		                						<label>Last Name *</label>
		                						<input type="text" className="form-control" required />
		                					</div>
		                				</div>

	            						<label>Company Name (Optional)</label>
	            						<input type="text" className="form-control" />

	            						<label>Country *</label>
	            						<input type="text" className="form-control" required />

	            						<label>Street address *</label>
	            						<input type="text" className="form-control" placeholder="House number and Street name" required />
	            						<input type="text" className="form-control" placeholder="Appartments, suite, unit etc ..." required />

	            						<div className="row">
		                					<div className="col-sm-6">
		                						<label>Town / City *</label>
		                						<input type="text" className="form-control" required />
		                					</div>

		                					<div className="col-sm-6">
		                						<label>State / County *</label>
		                						<input type="text" className="form-control" required />
		                					</div>
		                				</div>

		                				<div className="row">
		                					<div className="col-sm-6">
		                						<label>Postcode / ZIP *</label>
		                						<input type="text" className="form-control" required />
		                					</div>

		                					<div className="col-sm-6">
		                						<label>Phone *</label>
		                						<input type="tel" className="form-control" required />
		                					</div>
		                				</div>

	                					<label>Email address *</label>
	        							<input type="email" className="form-control" required />

	        							<div className="custom-control custom-checkbox">
											<input type="checkbox" className="custom-control-input" id="checkout-create-acc" />
											<label className="custom-control-label" htmlFor="checkout-create-acc">Create an account?</label>
										</div>

										<div className="custom-control custom-checkbox">
											<input type="checkbox" className="custom-control-input" id="checkout-diff-address" />
											<label className="custom-control-label" htmlFor="checkout-diff-address">Ship to a different address?</label>
										</div>

	                					<label>Order notes (optional)</label>
	        							<textarea className="form-control" cols={30} rows={4} placeholder="Notes about your order, e.g. special notes for delivery"></textarea>
		                		</div>
		                		<aside className="col-lg-3">
		                			<div className="summary">
		                				<h3 className="summary-title">Your Order</h3>

		                				<table className="table table-summary">
		                					<thead>
		                						<tr>
		                							<th>Product</th>
		                							<th>Total</th>
		                						</tr>
		                					</thead>

		                					<tbody>
		                						<tr>
		                							<td><a href="#">Beige knitted elastic runner shoes</a></td>
		                							<td>$84.00</td>
		                						</tr>

		                						<tr>
		                							<td><a href="#">Blue utility pinafore denimdress</a></td>
		                							<td>$76,00</td>
		                						</tr>
		                						<tr className="summary-subtotal">
		                							<td>Subtotal:</td>
		                							<td>$160.00</td>
		                						</tr>
		                						<tr>
		                							<td>Shipping:</td>
		                							<td>Free shipping</td>
		                						</tr>
		                						<tr className="summary-total">
		                							<td>Total:</td>
		                							<td>$160.00</td>
		                						</tr>
		                					</tbody>
		                				</table>

		                				<div className="accordion-summary" id="accordion-payment">
																	
										    <div className="card">
										        <div className="card-header" id="heading-4">
										            <h2 className="card-title">
										                <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4">
										                    PayPal
										                </a>
										            </h2>
										        </div>
										        <div id="collapse-4" className="collapse" aria-labelledby="heading-4" data-parent="#accordion-payment">
										            <div className="card-body">
										                Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum.
										            </div>
										        </div>
										    </div>

										    <div className="card">
										        <div className="card-header" id="heading-5">
										            <h2 className="card-title">
										                <a className="collapsed" role="button" data-toggle="collapse" href="#collapse-5" aria-expanded="false" aria-controls="collapse-5">
										                    Credit Card (Stripe)
										                    <img className=" mt-2" src="/src/assets/images/payments-summary.png" alt="payments cards"/>
										                </a>
										            </h2>
										        </div>

										        <div id="collapse-5" className="collapse" aria-labelledby="heading-5" data-parent="#accordion-payment">
										            <div className="card-body"> Donec nec justo eget felis facilisis fermentum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Lorem ipsum dolor sit ame.
										            </div>
										        </div>
										    </div>
										</div>

		                				<button type="submit" className="btn btn-outline-primary-2 btn-order btn-block">
		                					<span className="btn-text">Place Order</span>
		                					<span className="btn-hover-text">Proceed to Checkout</span>
		                				</button>
		                			</div>
		                		</aside>
		                	</div>
            			</form>
	                </div>
                </div>
            </div>
            </main>

        </div>

    )
}