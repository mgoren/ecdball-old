import { Field } from 'formik';
import { isMobile } from "react-device-detect";
import { PatternFormat } from 'react-number-format';
import * as S from '../Form-styles';

const Input = ({ label, pattern, ...props }) => {
  const { name } = props;
  return (
    <div className='form-group'>
      <div className='row'>
        <div className="form-group col-sm-8">
          <S.Label className='S.Label' htmlFor={name}>{label}</S.Label>
          {!pattern && 
            <Field name={name}>{({field, meta}) =>
              <S.Input>
                <input className='form-control' {...field} {...props} />
                {meta.touched && meta.error && <S.Warning>{meta.error}</S.Warning>}
              </S.Input>
            }
            </Field>
          }
          {pattern && (
            <Field name={name}>{({field, meta}) =>
              <S.Input>
                <PatternFormat className='form-control' format={pattern} mask="_" {...field} {...props} />
                {meta.touched && meta.error && <S.Warning>{meta.error}</S.Warning>}
              </S.Input>
            }
            </Field>
          )}
        </div>
      </div>
    </div>
  );
};

const NumericInput = ({ label, range, showDollarSign, ...props }) => {
  const { name, onBlur } = props;
  return (
    <RightAlignedInput name={name} label={label} renderContent={() => {
      return (
        <>
          {showDollarSign && 
            <div className="input-group-prepend">
              <span className="input-group-text" style={{padding: 6}}>$</span>
            </div>
          }
          <Field 
            type={isMobile ? 'tel' : 'number'} 
            className={`numericInput ${isMobile ? "form-control" : "text-center"}`} 
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
  return (
    <RightAlignedInput name={name} label={label} renderContent={() => {
      return (
        <S.DonationButton 
          type='button' 
          className='btn btn-sm btn-secondary' 
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
