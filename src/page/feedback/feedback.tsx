
import './feedback.css';
import { useState } from 'react';

export default function Feedback() {
  const [checked, setChecked] = useState(false);
  return(
    <div id="feed-back-wrapper">
      <div className='feedback-wrapper-child' id="feedback-script-wrapper">
        <div className='feedback-label'>
          <h1>Thank note</h1>
        </div>
        <div id='feedback-script'>
          <p>
            Thank you for using our services. We are so grateful to serve you.
            If you had any compliants or feedbacks, please contact us via our mobile phone and social media or through submitting the form beside.
          </p>
        </div>
      </div>
      <div className='feedback-wrapper-child' id="feedback-form-wrapper">
        <div  className='feedback-label' id="feedback-title">
          <h1>Feedback form</h1>
        </div>
        <div id="feedback-complaint-field">
          <h4>Complaints and feedbacks</h4>
          <input className='complaint-text' type="text" name="Description" placeholder='please give us your complaints and feedbacks...' />
          <div id='feedback-checkbox'>
            <div>
              <input type="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)}/>
            </div>
            <div className='feedback-checkbox-child'>
              <p>Feedback with personal information</p>
            </div>
          </div>
        </div>
        <div id="feedback-user-field">
          <div className='user-field-child'>
            <h5>Name</h5>
            <input className='text-small ' type="text" name="Name" disabled={!checked} placeholder="enter your name..." />
          </div>
          <div className='user-field-child'>
            <h5>Phone</h5>
            <input className='text-small' type="text" name="Phone" disabled={!checked} placeholder='enter your phone number...' />
          </div>
          <div className='user-field-child'>
            <h5>Email</h5>
            <input className='text-small' type="text" name="mail" disabled={!checked} placeholder='enter your email address' />
          </div>
        </div>
        <div id="feedback-button-field">
          <button>Submit</button>
        </div>
      </div>
    </div>
  )
}