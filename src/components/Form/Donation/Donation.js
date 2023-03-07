import { useState } from "react";
import { isMobile } from "react-device-detect";
import * as S from '../Form-styles';
import { DONATION_RANGE } from "consts";

export default function Form({ order, onBlur }) {
  const [donate, setDonate] = useState(order.donation > 0);

  return (
    <section className='donation'>
      <S.Title className="S.Title">Additional donation (tax deductible)</S.Title>
      <div className="form-group">
        <div className="row">
          <div className="col-sm-9">
            <S.Label htmlFor="donation">
              {!donate && "Would you like to make an additional donation to PCDC?"}
              {donate && "How much would you like to donate to PCDC?"}
            </S.Label>
          </div>
          <div className="col-sm-3">
            <div className="input-group mb-3 justify-content-end">
              {!donate && <S.DonationButton className='btn btn-sm btn-secondary' onClick={() => setDonate(true)}>Yes</S.DonationButton> }
              {donate &&
                <>
                  <div className="input-group-prepend"><span className="input-group-text" style={{padding: 6}}>$</span></div>
                  <input 
                    type={isMobile ? 'tel' : 'number'} className={`numericInput text-center ${isMobile ? "form-control" : ""}`} id="donation" name="donation" min={DONATION_RANGE[0]} max={DONATION_RANGE[1]} step="1" 
                    defaultValue={order.donation} onBlur={onBlur} />
                </> 
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}