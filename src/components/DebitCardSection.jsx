import React from "react";

const DebitCardSection = () => {
  const time = new Date();
  const hrs = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  console.log(hrs);

  return (
    <div className='debit-bg'>
      <div className='container debit-content'>
        <div className='debit-title'>Exclusive offers</div>
        <div className='debit-para'>
          Get Upto <span>50%</span> Off On Debit Card
        </div>
        <div className='debit-time mt-2'>
          <div className='time-content'>
            <div>{hrs}</div>
            <div>Hourse</div>
          </div>
          <div className='time-content'>
            <div> {min} </div>
            <div>Minutes</div>
          </div>
          <div className='time-content'>
            <div>{sec}</div>
            <div>Seconds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebitCardSection;
