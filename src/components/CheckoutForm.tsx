import React from 'react';
import {  
  Col,
  Row,
  Form,
} from 'react-bootstrap';

const CheckoutForm = () => {
  return (
    <>
    <h4>Billing Address</h4>
    <Form>
        <Row>
        <Col md={6}>
            <label htmlFor='firstName'>First name</label>
            <input type='text' className='form-control' id='firstName'></input>                
        </Col>
        <Col md={6}>
            <label htmlFor='lastName'>Last name</label>                
            <input type='text' className='form-control' id='lastName'></input>
        </Col>
        </Row>            
        <Row>
        <Col>
            <label htmlFor='email'>Email <span className='text-muted'>(Optional)</span></label>                
            <input type='text' className='form-control' id='email' placeholder='you@example.com'></input>
        </Col>
        </Row>
        <Row>
        <Col>
            <label htmlFor='address'>Address</label>                
            <input type='text' className='form-control' id='address' placeholder='1234 Main St'></input>
        </Col>
        </Row>
        <Row>
        <Col>
            <label htmlFor='address2'>Address 2 <span className='text-muted'>(Optional)</span></label>                
            <input type='text' className='form-control' id='address2' placeholder='Apartment or suite'></input>
        </Col>
        </Row>
        <Row>
        <Col md={5}>
            <label htmlFor='country'>Country</label>
            <select className='custom-select d-block w-100' id='country'>
            <option value=''>Choose...</option>
            <option>United States</option>
            </select>
        </Col>
        <Col md={4}>
            <label htmlFor='state'>State</label>
            <select className='custom-select d-block w-100' id='state'>
            <option value=''>Choose...</option>
            <option>California</option>
            </select>
        </Col>
        <Col md={3}>
            <label htmlFor='zip'>Zip</label>
            <input type='text' className='form-control' id='zip'></input>
        </Col>
        </Row>
        <Row>
        <Col>
            <hr/>
            <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="same-address" />
            <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
            </div>
            <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="save-info" />
            <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
            </div>
            <hr/>
        </Col>
        </Row>
        <Row>
        <Col>
            <h4>Payment</h4>
            <div className="custom-control custom-radio">
            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="credit">Credit card</label>
            </div>
            <div className="custom-control custom-radio">
            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="debit">Debit card</label>
            </div>
            <div className="custom-control custom-radio">
            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" />
            <label className="custom-control-label" htmlFor="paypal">PayPal</label>
            </div>
        </Col>
        </Row>
        <Row>
        <Col md={6}>
            <label htmlFor="cc-name">Name on card</label>
            <input type="text" className="form-control" id="cc-name"></input>
            <small className="text-muted">Full name as displayed on card</small>
        </Col>
        <Col md={6}>
            <label htmlFor="cc-number">Credit card number</label>
            <input type="text" className="form-control" id="cc-number"></input>
        </Col>
        </Row>
        <Row>
        <Col md={3}>
            <label htmlFor="cc-expiration">Expiration</label>
            <input type="text" className="form-control" id="cc-expiration"></input>                
        </Col>
        <Col md={3}>
            <label htmlFor="cc-cvv">CVV</label>
            <input type="text" className="form-control" id="cc-cvv"></input>
        </Col>
        </Row>
        <Row>
        <Col>
            <hr />
            <button className="btn btn-primary btn-lg btn-block" type="submit">Checkout</button>
        </Col>
        </Row>
    </Form>
    </>
  );
};

export default CheckoutForm;