import { Input } from '../Input';
import { FIELD_CONFIG } from 'config';

export default function ContactInfoInputs({ fields, index }) {
  return (
    fields.sort((a, b) => FIELD_CONFIG[a].order - FIELD_CONFIG[b].order)
    .map((field, i) => (
      <Input
        key={`${index}-${field}`}
        label={FIELD_CONFIG[field].label}
        name={FIELD_CONFIG[field].name || `people[${index}].${field}`}
        type={FIELD_CONFIG[field].type || 'text'}
        pattern={FIELD_CONFIG[field].pattern}
        placeholder={FIELD_CONFIG[field].placeholder}
      />
    ))
  );
}
