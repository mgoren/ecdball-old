import { Input } from '../Input';

const contactInfoDefaults = {
  fullName: { id: 'fullName', label: 'Full Name' },
  pronouns: { id: 'pronouns', label: 'Pronouns (optional)' },
  email: { id: 'email', label: 'Email' },
  emailConfirmation: { id: 'emailConfirmation', label: 'Re-enter email' },
  phone: { id: 'phone', label: 'Phone' }
}

export default function ContactInfoInputs({ inputs = contactInfoDefaults, autoFocus = false }) {
  Object.keys(inputs).forEach (key => {
    inputs[key] = { ...contactInfoDefaults[key], ...inputs[key] };
  });
  const { fullName, pronouns, email, emailConfirmation, phone } = inputs;

  return (
    <>
      {fullName &&
        <Input
          label={fullName.label}
          name={fullName.id}
          type="text"
          autoFocus={autoFocus}
        />
      }

      {pronouns &&
        <Input
          label={pronouns.label}
          name={pronouns.id}
          type="text"
          placeholder="e.g. they/them"
        />
      }

      {email &&
        <Input
          label={email.label}
          name={email.id}
          type="email"
        />
      }

      {emailConfirmation &&
        <Input
          label={emailConfirmation.label}
          name={emailConfirmation.id}
          type="email"
        />
      }

      {phone &&
        <Input
          label={phone.label}
          name={phone.id}
          type="tel"
          pattern="###-###-####"
          placeholder="e.g. 555-555-5555"
        />
      }
    </>
  );
}
