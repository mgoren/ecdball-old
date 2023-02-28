import * as S from '../Form-styles';

export default function Input({ label, type, id, pattern, required, autoFocus, initialValue, warning='Please fill in this field.', onBlur }) {
  return (
    <div className='row'>
      <div className="form-group col-sm-8">
        <S.Label className='S.Label' htmlFor={id}>{label}</S.Label>
        <input 
          type={type} id={id} name={id} className='form-control' pattern={pattern} required={required} autoFocus={autoFocus}
          defaultValue={initialValue} onBlur={onBlur} />
        <S.Warning className='S.Warning'>{warning}</S.Warning>
      </div>
    </div>
  );
}