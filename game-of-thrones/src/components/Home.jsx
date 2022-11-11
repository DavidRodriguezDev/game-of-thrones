import React, { useContext } from 'react';
import { MyLangContext } from '../context/MyLangContext';
import "./Home.scss"

export const Home = () => {

  const {t} = useContext(MyLangContext)

  return (
    <div className='b-home'>
      <div className='b-home__title'>{t('title')}</div>
    </div>
  )
}