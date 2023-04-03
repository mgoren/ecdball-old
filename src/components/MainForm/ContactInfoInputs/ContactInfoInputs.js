import { Input } from '../Input';

const contactInfoDefaults = {
  fullName: { label: 'Full Name' },
  pronouns: { label: 'Pronouns (optional)' },
  email: { label: 'Email' },
  phone: { label: 'Phone' }
}

export default function ContactInfoInputs({ inputs = contactInfoDefaults, index, autoFocus = false }) {
  Object.keys(inputs).forEach (key => {
    inputs[key] = { ...contactInfoDefaults[key], ...inputs[key] };
  });
  const { fullName, pronouns, email, emailConfirmation, phone } = inputs;

  return (
    <>
      {fullName &&
        <Input
          label={fullName.label}
          name={`people[${index}].fullName`}
          type="text"
          autoFocus={autoFocus}
        />
      }

      {pronouns &&
        <Input
          label={pronouns.label}
          name={`people[${index}].pronouns`}
          type="text"
          placeholder="e.g. they/them"
        />
      }

      {email &&
        <Input
          label={email.label}
          name={`people[${index}].email`}
          type="email"
        />
      }

      {emailConfirmation &&
        <Input
          label='Re-enter email'
          name='emailConfirmation'
          type="email"
        />
      }

      {phone &&
        <Input
          label={phone.label}
          name={`people[${index}].phone`}
          type="tel"
          pattern="###-###-####"
          placeholder="e.g. 555-555-5555"
        />
      }
    </>
  );
}
