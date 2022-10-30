import React, {useState} from 'react';

import { PageHOC, CustomInput, CustomButton } from '../components';
import { useGlobalContext } from '../context';

const Home = () => {
  const { contract, walletAddress} = useGlobalContext();
  const [playerName, setPlayerName] = useState('');
  const handleClick = async () => {
    try {
      await contract.isPlayer(walletAddress);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div>
      <h1 className='flex flex-col'>
        <CustomInput
          label="Name"
          placeholder="Enter your player name"
          value={playerName}
          handleValueChange={setPlayerName}
        />

        <CustomButton
          title="Register"
          handleClick={handleClick}
          restStyles="mt-6"
        />
      </h1>
    </div>
  )
};

export default PageHOC(
  Home,
  <> Welcome to Avax Gods <br/> a Web3 NFT Card Game </>,
  <> Connect your wallet to start  playing <br/>
    the Ultimate Web3 Battle Card Game </>
);
