import { Registration, RegistrationValues } from '@haloui/ui';

export default function RegistrationViewPage() {
    return (
      <Registration onSubmit={function (values: RegistrationValues): void | Promise<void> {
            throw new Error('Function not implemented.');
        } }/>
    );
  }