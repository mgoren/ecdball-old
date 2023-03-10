import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask'; // this triggers findDOMNode deprecation warning
import { isMobile } from "react-device-detect";
import { ADMISSION_COST_RANGE, ADMISSION_QUANTITY_RANGE, DONATION_RANGE, NAME_REGEX, PHONE_REGEX, DEFAULTS } from "consts";
import * as S from './Form-styles';
import { clamp } from 'utils';
import Header from "./Header";
import Input from './Input';
import Donation from './Donation';

const INPUT_RANGES = { 'admissionCost': ADMISSION_COST_RANGE, 'admissionQuantity': ADMISSION_QUANTITY_RANGE, 'donation': DONATION_RANGE };
const RANGE_FIELDS = Object.keys(INPUT_RANGES);
const TEXT_FIELDS = ['fullName', 'email', 'phone', 'person2', 'person3', 'person4'];

export default function Form({ order, setOrder }) {
  const navigate = useNavigate();

  if (JSON.stringify(order) === JSON.stringify(DEFAULTS) ) {
    sessionStorage.removeItem('lastCompletedOrder');
  }

  useEffect(() => { window.scrollTo(0,0); },[])

  function onBlur(e) {
    let [field, value] = [e.target.id, e.target.value];
    if (RANGE_FIELDS.includes(field)) {
      if (e.type === 'blur') { // THIS IS SO HACKY
        value = validatedNumericInput(value, INPUT_RANGES[field]);
      }
      e.target.value = value;
    }
    let updatedOrder = Object.assign({}, order);
    updatedOrder[e.target.id] = value;
    setOrder(updatedOrder);

    if (TEXT_FIELDS.includes(field)) { // DON'T DIRECTLY MANIPULATE DOM
      e.target.nextElementSibling.style.visibility = e.target.checkValidity() ? 'hidden' : 'visible';
    }

  }

  function onSubmit(e) {
    e.preventDefault();

    // FACTOR THIS OUT
    let updatedOrder = Object.assign({}, order);
    for (let i = ADMISSION_QUANTITY_RANGE[0] + 1; i <= ADMISSION_QUANTITY_RANGE[1]; i++) {
      updatedOrder[`person${i}`] = order.admissionQuantity >= i ? updatedOrder[`person${i}`] : '';
    }
    setOrder(updatedOrder);

    navigate('/checkout');
  }

  return (
    <>
      <Header />

      <form onSubmit={onSubmit}>

        <S.Box className={isMobile ? 'mobile' : 'desktop'}>
          <S.Title className='S.Title'>Contact information</S.Title>
          <Input
            label = 'Name'
            type = 'text'
            id = 'fullName'
            initialValue = {order.fullName}
            pattern = {NAME_REGEX}
            required = 'required'
            autoFocus = {isMobile || order.fullName ? '' : 'autoFocus'}
            onBlur = {onBlur}
          />

          <Input
            label = 'Email'
            type = 'email'
            id = 'email'
            initialValue = {order.email}
            required = 'required'
            warning = 'Please enter a valid email address.'
            onBlur = {onBlur}
          />

          <div className='row'>
            <div className="form-group col-sm-8">
              <S.Label className='S.Label' htmlFor='phone'>Phone</S.Label>
              <InputMask 
                type='tel' id='phone' name='phone' className='form-control' pattern={PHONE_REGEX} required
                defaultValue={order.phone} onBlur={onBlur} mask='(999) 999-9999' />
              <S.Warning className='S.Warning'>Please enter a valid phone number.</S.Warning>
            </div>
          </div>

        </S.Box>

        <S.Box className={isMobile ? 'mobile' : 'desktop'}>
          <S.Title className='S.Title'>Megaband dance admissions</S.Title>

          <div className='form-group'>
            <div className={isMobile ? '' : 'row'}>
              <div className="col-sm-9">
                <S.Label className='S.Label' htmlFor="order_admission_cost">How much are you able to pay per admission? ($15-30)</S.Label>
              </div>
              <div className="col-sm-3">
                <div className={`input-group mb-3 ${isMobile ? '' : 'justify-content-end'}`}>
                  <div className="input-group-prepend"><span className="input-group-text" style={{padding: 6}}>$</span></div>
                  <input 
                    type={isMobile ? 'tel' : 'number'} className={`numericInput ${isMobile ? "form-control" : "text-center"}`} id="admissionCost" name="order[admission_cost]" min={ADMISSION_COST_RANGE[0]} max={ADMISSION_COST_RANGE[1]} step="1" 
                    defaultValue={order.admissionCost} onBlur={onBlur} />
                </div>
              </div>
            </div>
          </div>

          <S.Spacer />

          <div className='form-group'>
            <div className={isMobile ? '' : 'row'}>
              <div className="col-sm-9">
                <S.Label htmlFor="admissionQuantity">Select admissions quantity (1-4)</S.Label>
              </div>
              <div className="col-sm-3">
                <div className={`input-group mb-3 ${isMobile ? '' : 'justify-content-end'}`}>
                  <input 
                    type={isMobile ? 'tel' : 'number'} className={`numericInput ${isMobile ? "form-control" : "text-center"}`} id="admissionQuantity" name="order[admission_quantity]" min={ADMISSION_QUANTITY_RANGE[0]} max={ADMISSION_QUANTITY_RANGE[1]} step="1" 
                    defaultValue={order.admissionQuantity} onBlur={onBlur} onChange={onBlur} />
                </div>
              </div>
            </div>
          </div>

          <S.Spacer />

          { order.admissionQuantity >= 2 &&
            <Input
              label = 'Name for second admission:'
              type = 'text'
              id = 'person2'
              initialValue = {order.person2}
              pattern = {NAME_REGEX}
              required = 'required'
              onBlur = {onBlur}
            />
          }

          { order.admissionQuantity >= 3 &&
            <Input
              label = 'Name for third admission:'
              type = 'text'
              id = 'person3'
              initialValue = {order.person3}
              pattern = {NAME_REGEX}
              required = 'required'
              onBlur = {onBlur}
            />
          }

          { order.admissionQuantity >= 4 &&
            <Input
              label = 'Name for fourth admission:'
              type = 'text'
              id = 'person4'
              initialValue = {order.person4}
              pattern = {NAME_REGEX}
              required = 'required'
              onBlur = {onBlur}
            />
          }

          <S.Spacer /><hr /><S.Spacer />

          <Donation order={order} onBlur={onBlur} />
        </S.Box>

        <S.Box className={`text-end ${isMobile ? 'mobile' : 'desktop'}`}>
          <S.NextButton type='submit' className='btn btn-primary'>Next</S.NextButton>
        </S.Box>
      </form>
    </>
  );
}

function validatedNumericInput(value, range) {
  const normalized = parseInt(value) || range[0];
  return clamp(normalized, range[0], range[1]);
}
