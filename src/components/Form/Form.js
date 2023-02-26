import * as S from './Form-styles';

export default function Form() {
  return (
    <section className='form'>
      <S.Box className='S.Box'>
        <S.Title className='S.Title'>Contact information</S.Title>
        <div className='row'>
          <div className="form-group col-sm-8">
            <S.Label className='S.Label' htmlFor="order_name">Name</S.Label>
            <input type='text' id='order_name' name='order[name]' className='form-control' size='50' maxLength='50' autoFocus required />
            <S.Warning className='S.Warning'>Please fill in this field.</S.Warning>
          </div>
        </div>
        <div className='row'>
          <div className="form-group col-sm-8">
            <S.Label className='S.Label' htmlFor="order_email">Email</S.Label>
            <input type='email' id='order_email' name='order[email]' className='form-control' size='50' maxLength='50' required />
            <S.Warning className='S.Warning'>Please fill in this field.</S.Warning>
          </div>
        </div>
        <div className='row'>
          <div className="form-group col-sm-8">
            <S.Label className='S.Label' htmlFor="order_phone">Phone</S.Label>
            <input type='tel' id='order_phone' name='order[phone]' className='form-control' size='50' maxLength='50' required />
            <S.Warning className='S.Warning'>Please fill in this field.</S.Warning>
          </div>
        </div>
      </S.Box>
      <S.Box>
        <S.Title className='S.Title'>Megaband dance admissions</S.Title>
        
        <div className='form-group'>
          <div className='row'>
            <div className="col-sm-9">
              <S.Label className='S.Label' htmlFor="order_admission_cost">How much are you able to pay per admission? ($15-30)</S.Label>
            </div>
            <div className="col-sm-3">
              <div className="input-group mb-3 justify-content-end">
                <div className="input-group-prepend"><span className="input-group-text" style={{padding: 6}}>$</span></div>
                <input type="number" className="text-center" id="admission-cost" name="order[admission_cost]" min="15" max="30" step="1" defaultValue="30" />
              </div>
            </div>
          </div>
        </div>
        <S.Spacer></S.Spacer>

        <div className='form-group'>
          <div className='row'>
            <div className="col-sm-9">
              <S.Label htmlFor="order_admission_quantity">Select admissions quantity (1-4)</S.Label>
            </div>
            <div className="col-sm-3">
              <div className="input-group mb-3 justify-content-end">
                <input type="number" className="text-center" id="admission-quantity" name="order[admission_quantity]" min="1" max="9" step="1" defaultValue="1" />
              </div>
            </div>
          </div>
        </div>
        <S.Spacer></S.Spacer>

        <div className="form-group col-sm-8">
          <S.Label htmlFor="additional_1">Name for second admission:</S.Label>
          <input className="form-control" name="additional_1" id="additional_1"></input>
          <S.Warning className='S.Warning'>Please fill in this field.</S.Warning>
        </div>
        <div className="form-group col-sm-8">
          <S.Label htmlFor="additional_2">Name for third admission:</S.Label>
          <input className="form-control" name="additional_2" id="additional_2"></input>
          <S.Warning className='S.Warning'>Please fill in this field.</S.Warning>
        </div>
        <div className="form-group col-sm-8">
          <S.Label htmlFor="additional_3">Name for fourth admission:</S.Label>
          <input className="form-control" name="additional_3" id="additional_3"></input>
          <S.Warning className='S.Warning'>Please fill in this field.</S.Warning>
        </div>
        <S.Spacer></S.Spacer>

        <hr />
        <S.Spacer></S.Spacer>
        <S.Title className="S.Title">Additional donation (tax deductible)</S.Title>
        <div className="form-group">
          <div className="row">
            <div className="col-sm-9">
              <S.Label htmlFor="donation_question">Would you like to make an additional donation to PCDC?</S.Label>
            </div>
            <div className="col-sm-3">
              <div className="input-group mb-3 justify-content-end">
                <select className="form-select" name="donation_question" id="donation_question" defaultValue="No">
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <S.Spacer></S.Spacer>

        <div className='form-group'>
          <div className='row'>
            <div className="col-sm-9">
              <S.Label htmlFor="donation">How much would you like to donate to PCDC?</S.Label>
            </div>
            <div className="col-sm-3">
              <div className="input-group mb-3 justify-content-end">
                <div className="input-group-prepend"><span className="input-group-text" style={{padding: 6}}>$</span></div>
                <input type="number" className="text-center" id="donation" name="donation" min="0" max="999" step="1" defaultValue="0" />
              </div>
            </div>
          </div>
        </div>
      </S.Box>
    </section>
  );
}