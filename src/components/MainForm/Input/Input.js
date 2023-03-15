import { useField } from 'formik';
import { isMobile } from "react-device-detect";
import * as S from '../Form-styles';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='form-group'>
      <div className='row'>
        <div className="form-group col-sm-8">
          <S.Label className='S.Label' htmlFor={props.id || props.name}>{label}</S.Label>
          <input className='form-control' {...field} {...props} />
          <S.Warning className={`S.Warning ${meta.touched && meta.error ? 'visible' : ''}`}>{meta.error || '-'}</S.Warning>
        </div>
      </div>
    </div>
  );
};

const NumericInput = (props) => {
  const { label, name, range, showDollarSign } = props;
  const [field] = useField(props);
  return (
    <div className='form-group'>
      <div className={isMobile ? '' : 'row'}>
        <div className="col-sm-9">
          <S.Label className='S.Label' htmlFor={name}>{label}</S.Label>
        </div>
        <div className="col-sm-3">
          <div className={`input-group mb-3 ${isMobile ? '' : 'justify-content-end'}`}>
            {showDollarSign && <div className="input-group-prepend"><span className="input-group-text" style={{padding: 6}}>$</span></div>}
            <input 
              type={isMobile ? 'tel' : 'number'} 
              className={`numericInput ${isMobile ? "form-control" : "text-center"}`} 
              {...field} name={name} id={name} onBlur={props.onBlur}
              min={range[0]} max={range[1]} step="1" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ButtonInput = (props) => {
  const { label, name, buttonText, onClick } = props;
  const [field] = useField(props);
  return (
    <div className="form-group">
      <div className={isMobile ? '' : 'row'}>
        <div className="col-sm-9">
          <S.Label className='S.Label' htmlFor={name}>{label}</S.Label>
        </div>
        <div className="col-sm-3">
          <div className={`input-group mb-3 ${isMobile ? '' : 'justify-content-end'}`}>
            <S.DonationButton type='button' className='btn btn-sm btn-secondary' {...field} onClick={onClick} >
              {buttonText}
            </S.DonationButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Input, NumericInput, ButtonInput };
