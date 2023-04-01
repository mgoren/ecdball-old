import { Input } from '../Input';

const showInputDefaults = ['name', 'pronouns', 'email', 'emailConfirmation', 'phone'];

export default function ContactInfoInputs({ values, showInputs = showInputDefaults, autoFocus = false }) {
  const { name, pronouns, email, emailConfirmation, phone } = showInputs.reduce((acc, input) => {
    acc[input] = true;
    return acc;
  }, {});  

  return (
    <>
      {name && 
        <Input
          label="Full Name"
          name="fullName"
          type="text"
          autoFocus={autoFocus}
        />
      }

      {pronouns && 
        <Input
          label="Pronouns (optional)"
          name="pronouns"
          type="text"
          placeholder="e.g. they/them"
        />
      }

      {email &&
        <Input
          label="Email"
          name="email"
          type="email"
        />
      }

      {emailConfirmation &&
        <Input
          label="Re-enter email"
          name="emailConfirmation"
          type="email"
        />
      }

      {phone &&
        <Input
          label="Phone"
          name="phone"
          type="tel"
          pattern="###-###-####"
          placeholder="e.g. 555-555-5555"
        />
      }
    </>
  );
}
