import { useState } from "react";
import * as S from './Form-styles';
import { Box, Spacer } from 'components/SharedStyles.js';
import { clamp } from 'utils';
import { ADMISSION_COST_RANGE, ADMISSION_QUANTITY_RANGE, DONATION_RANGE, NAME_REGEX, PHONE_REGEX } from "consts";
import Input from './Input';
import Donation from './Donation';

const INPUT_RANGES = { 'admissionCost': ADMISSION_COST_RANGE, 'admissionQuantity': ADMISSION_QUANTITY_RANGE, 'donation': DONATION_RANGE };

export default function Form({ order, setOrder, setCheckingOut }) {
  const [quantity, setQuantity] = useState(order.admissionQuantity);

  function onBlur(e) {
    let [field, value, fieldType] = [e.target.id, e.target.value, e.target.type];
    if (Object.keys(INPUT_RANGES).includes(field)) {      
      value = validatedNumericInput(value, INPUT_RANGES[field]);
      e.target.value = value;
    }
    let updatedOrder = Object.assign({}, order);
    updatedOrder[e.target.id] = value;
    if (field === 'admissionQuantity') {
      for (let i=ADMISSION_QUANTITY_RANGE[0]+1; i<=ADMISSION_QUANTITY_RANGE[1]; i++) {
        updatedOrder[`person${i}`] = quantity >= i ? updatedOrder[`person${i}`] : '';
      }
    }
    setOrder(updatedOrder);
    if (['text', 'email', 'tel'].includes(fieldType)) {
      e.target.nextElementSibling.style.visibility = e.target.checkValidity() ? 'hidden' : 'visible';
    }
  }
  
  function onSubmit(e) {
    e.preventDefault();
    setCheckingOut(true);
  }

  return (
    <form onSubmit={onSubmit}>

      <Box className='Box'>
        <S.Title className='S.Title'>Contact information</S.Title>
        <Input
          label = 'Name'
          type = 'text'
          id = 'fullName'
          initialValue = {order.fullName}
          pattern = {NAME_REGEX}
          required = 'required'
          autoFocus = 'autoFocus'
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

        <Input
          label = 'Phone'
          type = 'tel'
          id = 'phone'
          initialValue = {order.phone}
          required = 'required'
          warning = 'Please enter a valid phone number.'
          pattern = {PHONE_REGEX}
          onBlur = {onBlur}
        />
      </Box>

      <Box>
        <S.Title className='S.Title'>Megaband dance admissions</S.Title>
        
        <div className='form-group'>
          <div className='row'>
            <div className="col-sm-9">
              <S.Label className='S.Label' htmlFor="order_admission_cost">How much are you able to pay per admission? ($15-30)</S.Label>
            </div>
            <div className="col-sm-3">
              <div className="input-group mb-3 justify-content-end">
                <div className="input-group-prepend"><span className="input-group-text" style={{padding: 6}}>$</span></div>
                <input 
                  type="number" className="text-center" id="admissionCost" name="order[admission_cost]" min={ADMISSION_COST_RANGE[0]} max={ADMISSION_COST_RANGE[1]} step="1" 
                  defaultValue={order.admissionCost} onBlur={onBlur} />
              </div>
            </div>
          </div>
        </div>

        <Spacer />

        <div className='form-group'>
          <div className='row'>
            <div className="col-sm-9">
              <S.Label htmlFor="admissionQuantity">Select admissions quantity (1-4)</S.Label>
            </div>
            <div className="col-sm-3">
              <div className="input-group mb-3 justify-content-end">
                <input 
                  type="number" className="text-center" id="admissionQuantity" name="order[admission_quantity]" min={ADMISSION_QUANTITY_RANGE[0]} max={ADMISSION_QUANTITY_RANGE[1]} step="1" 
                  defaultValue={order.admissionQuantity} onBlur={onBlur} onChange={(e) => setQuantity(e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        <Spacer />

        { quantity >= 2 &&
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

        { quantity >= 3 &&
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

        { quantity >= 4 &&
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

        <Spacer />
        <hr />
        <Spacer />

        <Donation order={order} onBlur={onBlur} />

      </Box>

      <Box>
        <button type='submit' className='btn btn-warning'>Proceed to checkout</button>
      </Box>
    </form>
  );
}

function validatedNumericInput(value, range) {
  const normalized = parseInt(value) || range[0];
  return clamp(normalized, range[0], range[1]);
}
