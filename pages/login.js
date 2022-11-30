import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

const Login = (props) => {
  return (
    <div className='flex flex-col bg-black min-h-screen w-full justify-center items-center'>
      <img className='w-52 mb-5' src='http://links.papareact.com/9xl' alt='' />

      {Object.values(props).map((provider) => (
        <div key={provider.name}>
          <button
            className='bg-[#18d860] text-white rounded-full p-5'
            //if sign in is successful then go to home page
            onClick={() => signIn(provider.id, { callbackUrl: '/' })}
          >
            Login with {provider.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Login;

//server-side render
export const getServerSideProps = async () => {
  const providers = await getProviders();

  return {
    props: providers,
  };
};
