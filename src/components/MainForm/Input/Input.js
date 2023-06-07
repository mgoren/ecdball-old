import { isMobile } from "react-device-detect";
import { Field, useFormikContext, getIn } from 'formik';
import { PatternFormat } from 'react-number-format';
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { TextareaAutosize } from '@mui/base';

export const Input = ({ pattern, buttonText, onClick, ...props }) => {
  if (buttonText) {
    return <ButtonInput buttonText={buttonText} onClick={onClick} {...props} />;
  } else if (pattern) {
    return <NumberInput pattern={pattern} {...props} />;
  } else if (props.type === 'textarea') {
    return <TextArea {...props} />;
  } else {
    return <TextInput {...props} />;
  }
};

export const RightAlignedInput = ({ label, ...props }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography variant='body1' sx={{ marginRight: '.5rem' }}>{label}</Typography>
      <Input {...props} />
    </Box>
  );
};

const ButtonInput = ({ buttonText, onClick, ...props }) => {
  return (
    <Button variant='contained' size='large' color='info' onClick={onClick}>
      <Typography variant='body1' sx={{ marginRight: '.5rem' }}>{buttonText}</Typography>
    </Button>
  );
};

const TextInput = ({ label, name, type, ...props }) => {
  const { touched, errors, values, setFieldValue, handleBlur } = useFormikContext();

  const handleBlurAndSetNametag = (e) => {
    handleBlur(e);  // bubble up to default Formik onBlur handler
    if (name.includes('first') || name.includes('last')) {
      const personIndex = name.split('[')[1].split(']')[0];
      const first = getIn(values, `people[${personIndex}].first`);
      const last = getIn(values, `people[${personIndex}].last`);
      const existingNametag = getIn(values, `people[${personIndex}].nametag`);
      if (first && last && !existingNametag) {
        setFieldValue(`people[${personIndex}].nametag`, `${first} ${last}`);
      }
    }
  };

  return (
    <Field name={name}>
      {({ field }) => {
        const fieldError = getIn(errors, name);
        const isTouched = getIn(touched, name);
        return (
          <Box >
            <TextField
              // sx={{ marginBottom: '.2rem', '& .MuiFormHelperText-root': { fontSize: '.9rem' } }}
              type={type}
              label={label}
              variant='outlined'
              error={Boolean(isTouched && fieldError)}
              helperText={isTouched && fieldError}
              {...field}
              onBlur={handleBlurAndSetNametag}
              {...props}
            />
          </Box>
        )
      }}
    </Field>
  );
};

const NumberInput = ({ label, name, type, pattern, range, ...props }) => {
  const { setFieldValue } = useFormikContext();
  return (
    <Field name={name}>
      {({ field }) => {
        return (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <PatternFormat
              type={isMobile ? 'tel' : 'text'}
              customInput={TextField}
              label={label}
              format={pattern}
              onValueChange={({value}) => setFieldValue(name, value)}
              inputMode='numeric'
              variant='outlined'
              {...field}
              {...props}
            />
          </Box>
        )
      }}
    </Field>
  );
};

export const CheckboxInput = ({ name, label, options, ...props }) => {
  return (
    <>
      {label && <Typography gutterBottom={true} htmlFor={name}>{label}</Typography>}
      {options.map(option => (
        <div key={option.value}>
          <Field name={name}>
            {({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    id={option.value}
                    checked={field.value.includes(option.value)}
                    {...field}
                    value={option.value}
                    color="secondary"
                  />
                }
                label={option.label}
              />
            )}
          </Field>
        </div>
      ))}
    </>
  );
};

export const TextArea = ({ label, name, ...props }) => {
  return (
    <>
      <Typography gutterBottom={true} sx={{ marginBottom: '1rem' }} htmlFor={name}>
        {label}
      </Typography>
      <Field
        name={name}
        as={TextareaAutosize}
        minRows={5}
        style={{ width: '100%' }}
      />
    </>
  );
};
