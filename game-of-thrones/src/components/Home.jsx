import React, { useContext } from 'react';
import { MyLangContext } from '../context/MyLangContext';
import "./Home.scss"
import { LenguageSelect } from './LenguageSelect';

export const Home = () => {

  const {t} = useContext(MyLangContext)

  return (
  <>
 
    <div className='b-home'>

      <div className='container-fluid d-flex justify-content-end align-items-center gap-4 b-home--lang'>
      <LenguageSelect></LenguageSelect>
      </div>
      <div className='b-home--title-box'>
        <div className='b-home--title-box__title'>{t('title')}</div>
        </div>

    </div>
    </>
  )
}