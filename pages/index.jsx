import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Center from '../components/Center';
import Player from '../components/Player';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <Head>
        <title>Spotify 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex'>
        {/* SIDEBAR */}
        <Sidebar />
        {/* CENTER */}
        <Center />
      </main>
      <div className='sticky bottom-0'>
        {/* Player */}
        <Player />
      </div>
    </div>
  );
};

export default Home;

//flex min-h-screen flex-col items-center justify-center py-2  ==> CENTER ALL
//h-screen => height:100vh

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
