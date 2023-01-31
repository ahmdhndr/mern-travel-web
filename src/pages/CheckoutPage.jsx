import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import itemDetails from '../../jsonData/itemDetails.json';
import Button from '../components/Buttons';
import BookingInformation from '../components/Checkout/BookingInformation';
import Completed from '../components/Checkout/Completed';
import Payment from '../components/Checkout/Payment';
import Stepper, { Controller, MainContent, Meta, Numbering } from '../components/Stepper';

export default function CheckoutPage() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    paymentProof: '',
    bankName: '',
    bankHolder: '',
  });

  const onChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const checkout = {
    duration: 3,
  };

  const steps = {
    bookingInformation: {
      title: 'Booking Information',
      description: 'Please fill up the blank fields below',
      content: <BookingInformation data={data} checkout={checkout} itemDetails={itemDetails} onChange={onChange} />,
    },
    payment: {
      title: 'Payment',
      description: 'Kindly follow the instructions below',
      content: <Payment data={data} checkout={checkout} itemDetails={itemDetails} onChange={onChange} />,
    },
    completed: {
      title: 'Yay! Completed',
      description: null,
      content: <Completed />,
    },
  };

  return (
    <>
      <Stepper steps={steps}>
        {(prevStep, nextStep, currentStep, steps) => (
          <>
            <Numbering data={steps} current={currentStep} style={{ margin: '50px 0' }} />

            <Meta data={steps} current={currentStep} />

            <MainContent data={steps} current={currentStep} style={{ marginBottom: 50 }} />

            {currentStep === 'bookingInformation' && (
              <Controller>
                {data.firstName !== '' && data.lastName !== '' && data.email !== '' && data.phone !== '' && (
                  <Fade triggerOnce>
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="btn-primary"
                      style={{ marginBottom: '20px', padding: '18px 72px' }}
                    >
                      Continue to Book
                    </Button>
                  </Fade>
                )}
                <Button type="link" href={`/properties/${itemDetails._id}`}>
                  Cancel
                </Button>
              </Controller>
            )}

            {currentStep === 'payment' && (
              <Controller>
                {data.paymentProof !== '' && data.bankName !== '' && data.bankHolder !== '' && (
                  <Fade triggerOnce>
                    <Button
                      type="button"
                      onClick={nextStep}
                      className="btn-primary"
                      style={{ marginBottom: '20px', padding: '18px 72px' }}
                    >
                      Continue to Book
                    </Button>
                  </Fade>
                )}
                <Button type="button" onClick={prevStep}>
                  Cancel
                </Button>
              </Controller>
            )}

            {currentStep === 'completed' && (
              <Controller>
                <Button
                  type="link"
                  className="btn-primary"
                  href="/"
                  style={{ marginBottom: '73px', padding: '18px 72px' }}
                >
                  Back to Home
                </Button>
              </Controller>
            )}
          </>
        )}
      </Stepper>
    </>
  );
}
