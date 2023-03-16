import { useField } from 'formik';
import { isMobile } from "react-device-detect";
import { PatternFormat } from 'react-number-format';
import * as S from '../Form-styles';

const Input = ({ label, pattern, ...props }) => {
  const { name } = props;
  const [field, meta] = useField(props);
  return (
    <div className='form-group'>
      <div className='row'>
        <div className="form-group col-sm-8">
          <S.Label className='S.Label' htmlFor={name}>{label}</S.Label>
          {!pattern && <input className='form-control' {...field} {...props} />}
          {pattern && <PatternFormat className='form-control' format={pattern} mask="_" {...field} {...props} />}
          <S.Warning className={`S.Warning ${meta.touched && meta.error ? 'visible' : ''}`}>{meta.error || '-'}</S.Warning>
        </div>
      </div>
    </div>
  );
};

const NumericInput = ({ label, range, showDollarSign, ...props }) => {
  const { name, onBlur } = props;
  const [field] = useField(props);
  return (
    <RightAlignedInput name={name} label={label} renderContent={() => {
      return (
        <>
          {showDollarSign && <div className="input-group-prepend"><span className="input-group-text" style={{padding: 6}}>$</span></div>}
          <input 
            type={isMobile ? 'tel' : 'number'} 
            className={`numericInput ${isMobile ? "form-control" : "text-center"}`} 
            {...field} 
            name={name} 
            id={name} 
            onBlur={onBlur}
            min={range[0]} max={range[1]} step="1" 
          />
        </>
      );
    }} />
  );
};

const ButtonInput = ({ label, buttonText, ...props }) => {
  const { name, onClick } = props;
  const [field] = useField(props);
  return (
    <RightAlignedInput name={name} label={label} renderContent={() => {
      return (
        <S.DonationButton 
          type='button' 
          className='btn btn-sm btn-secondary' 
          {...field} 
          onClick={onClick} 
        >
          {buttonText}
        </S.DonationButton>
      );
    }}/>
  );
}


const RightAlignedInput = ({ name, label, renderContent }) => {
  return (
    <div className='form-group'>
      <div className={isMobile ? '' : 'row'}>
        <div className="col-sm-9">
          <S.Label className='S.Label' htmlFor={name}>{label}</S.Label>
        </div>
        <div className="col-sm-3">
          <div className={`input-group mb-3 ${isMobile ? '' : 'justify-content-end'}`}>
            { renderContent() }
          </div>
        </div>
      </div>
    </div>
  );
};

export { Input, NumericInput, ButtonInput };
