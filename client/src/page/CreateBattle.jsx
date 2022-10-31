import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";

import styles from '../styles';
import { useGlobalContext } from '../context';

import { CustomButton, CustomInput, PageHOC } from '../components';

const CreateBattle = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className='flex flex-col mb-5'>
        <CustomInput

        />
        <CustomButton

        />
      </h1>
    </div>
  )
};

export default PageHOC(
  CreateBattle,
  <> Create <br/> a new Battle </>,
  <> Create your own battle and wait
    for other players to join you</>
);
