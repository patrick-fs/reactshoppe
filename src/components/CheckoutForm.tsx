import React, { useState } from 'react';
import {  
  Col,
  Row,
  Form,
} from 'react-bootstrap';
import { connect, ConnectedProps } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { PaymentInfo, ContactInfo, Address, CheckoutData } from '../types/checkout';
import { Product } from '../types/product';
import { makePurchase } from '../services/checkout';


const CheckoutForm = ({ history }: RouteComponentProps) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setEmail] = useState();
  const [email, setLastName] = useState();
  const [street1, setStreet1] = useState();
  const [street2, setStreet2] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();

  const [ccName, setCcName] = useState();
  const [ccNumber, setCcNumber] = useState();
  const [ccExpiration, setCcExpiration] = useState();
  const [ccCVV, setCcCVV] = useState();


  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const address: Address = {
      street1,
      street2,
      country,
      state,
      zip,
    };
    
    const contactInfo: ContactInfo = {
      firstName,
      lastName,
      email,
    };

    const paymentInfo: PaymentInfo = {
      ccName,
      ccNumber,
      ccExpiration,
      ccCVV,
      shippingAddress: address,
      billingAddress: address,
    };

    const checkoutData: CheckoutData = {
      contactInfo,
      paymentInfo,
      products: [],
    };

    makePurchase(checkoutData);

    history.push('/thankyou');
  };

  return (
    <>    
    <h4>Billing Address</h4>
    <Form onSubmit={onSubmit}>
      <div className='fs-block'>
      <Row>
      <Col md={6}>
        <label htmlFor='firstName'>First name</label>
        <input type='text' className='form-control' id='firstName' 
          defaultValue={firstName} onChange={e => setFirstName(e.target.value)}></input>                
      </Col>
      <Col md={6}>
        <label htmlFor='lastName'>Last name</label>                
        <input type='text' className='form-control' id='lastName' 
          defaultValue={lastName} onChange={e => setLastName(e.target.value)}></input>
      </Col>
      </Row>            
      <Row>
      <Col>
        <label htmlFor='email'>Email <span className='text-muted'>(Optional)</span></label>                
        <input type='text' className='form-control' id='email' placeholder='you@example.com' 
          defaultValue={email} onChange={e => setEmail(e.target.value)}></input>
      </Col>
      </Row>
      <Row>
      <Col>
        <label htmlFor='address'>Address</label>                
        <input type='text' className='form-control' id='address' placeholder='1234 Main St' 
          defaultValue={street1} onChange={e => setStreet1(e.target.value)}></input>
      </Col>
      </Row>
      <Row>
      <Col>
        <label htmlFor='address2'>Address 2 <span className='text-muted'>(Optional)</span></label>                
        <input type='text' className='form-control' id='address2' placeholder='Apartment or suite' 
          defaultValue={street2} onChange={e => setStreet2(e.target.value)}></input>
      </Col>
      </Row>
      <Row>
      <Col md={5}>
        <label htmlFor='country'>Country</label>
        <select className='custom-select d-block w-100' id='country' defaultValue={country} onChange={e => setCountry(e.target.value)}>
          <option defaultValue=''>Choose...</option>
          <option>United States</option>
        </select>
      </Col>
      <Col md={4}>
        <label htmlFor='state'>State</label>
        <select className='custom-select d-block w-100' id='state' defaultValue={state} onChange={e => setState(e.target.value)}>
          <option value=''>Choose...</option>
          <option>California</option>
        </select>
      </Col>
      <Col md={3}>
        <label htmlFor='zip'>Zip</label>
        <input type='text' className='form-control' id='zip' 
          defaultValue={zip} onChange={e => setZip(e.target.value)}></input>
      </Col>
      </Row>
      </div>
      <Row>
      <Col>
        <hr/>        
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="save-info" />
          <label className="custom-control-label" htmlFor="save-info">Save this information for next time</label>
        </div>
        <hr/>
      </Col>
      </Row>
      <div className='fs-block'>
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
        <label htmlFor="ccname">Name on card</label>
        <input type="text" className="form-control" 
          defaultValue={ccName} onChange={e => setCcName(e.target.value)}></input>
        <small className="text-muted">Full name as displayed on card</small>
      </Col>
      <Col md={6}>
        <label htmlFor="ccnumber">Credit card number</label>
        <input type="text" className="form-control"
          defaultValue={ccNumber} onChange={e => setCcNumber(e.target.value)}></input>
      </Col>
      </Row>
      <Row>
      <Col md={3}>
        <label htmlFor="cc-expiration">Expiration</label>
        <input type="text" className="form-control"
          defaultValue={ccExpiration} onChange={e => setCcExpiration(e.target.value)}></input>                
      </Col>
      <Col md={3}>
        <label htmlFor="cc-cvv">CVV</label>
        <input type="text" className="form-control"
          defaultValue={ccCVV} onChange={e => setCcCVV(e.target.value)}></input>
      </Col>
      </Row>
      </div>
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

export default withRouter(CheckoutForm);