import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { supaClient } from '../../core/supa';

const AuthForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [haveAccount, setHaveAccount] = useState(true);

  const onSubmitHandler = async (data) => {
    const { email, password } = data;
    const authMethod = haveAccount ? 'signIn' : 'signUp';
    const { error } = await supaClient.auth[authMethod](
      {
        email,
        password,
      },
      {
        redirectTo: 'http://localhost:3000/wellcome ',
      },
    );
    if (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <h1>{haveAccount ? 'Login' : 'SingUp'}</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <input
            type="text"
            placeholder="email"
            {...register('email', { required: true })}
          />
          <input
            type="password"
            placeholder="password"
            {...register('password')}
          />

          <button> {haveAccount ? 'Login' : 'SingUp'}</button>
        </fieldset>
        {errors.email && <p>there are errors </p>}
      </form>
      <p onClick={() => setHaveAccount(!haveAccount)}>
        {!haveAccount ? 'Login' : 'SingUp'}
      </p>
    </>
  );
};

export default AuthForm;
