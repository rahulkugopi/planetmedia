import React from 'react';
import Header from '../Header/Header';
import bannerOne from '../../assests/images/banner-4.svg';
import styles from '../../styles/Blog/Blog.module.scss';

function Blog() {
  return (
    <div data-testid='Blog' className={styles.Blog}>
      <Header />

      <div className='pl-10 pr-10'>
        <img src={bannerOne} />
      </div>

      <div className='container mx-auto'>
        <div className={styles.BlogContent}>
          <div className='text-center bg-white pt-10'>
            <h2 className='uppercase'>My Blog</h2>
          </div>


          <div className="grid lg:grid-cols-3 gap-6 pt-10 pl-10 pr-10">
            <div className={styles.grid}>
              <div className={`${styles.gridTopImg} flex align-middle justify-center`}>
                <img src={`${process.env.REACT_APP_IMG_URL}/?office&€1`} className='object-fill' />
              </div>

              <div className='pt-5 pb-5 pl-5 pr-5'>
                <div className={`${styles.gridContent} text-center`}>
                  <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Travel</h3>
                  <h2 className='font-serif'>Sheets containing Ipsum passages & more</h2>
                  <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                </div>
              </div>
            </div>

            <div className={styles.grid}>
              <div className={`${styles.gridTopImgSub} flex align-middle justify-center`}>
                <img src={`${process.env.REACT_APP_IMG_URL}/?office&€1`} className='object-fill' />
              </div>

              <div className='pt-5 pb-5 pl-5 pr-5'>
                <div className={`${styles.gridContent} text-center`}>
                  <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Travel</h3>
                  <h2 className='font-serif'>Sheets containing Ipsum passages & more</h2>
                  <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                </div>
              </div>
            </div>

            <div className={styles.grid}>
              <div className={`${styles.gridTopImg} flex align-middle justify-center`}>
                <img src={`${process.env.REACT_APP_IMG_URL}/?office&€1`} className='object-fill' />
              </div>

              <div className='pt-5 pb-5 pl-5 pr-5'>
                <div className={`${styles.gridContent} text-center`}>
                  <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Travel</h3>
                  <h2 className='font-serif'>Sheets containing Ipsum passages & more</h2>
                  <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                </div>
              </div>
            </div>

            <div className={styles.grid}>
              <div className={`${styles.gridTopImg} flex align-middle justify-center`}>
                <img src={`${process.env.REACT_APP_IMG_URL}/?office&€1`} className='object-fill' />
              </div>

              <div className='pt-5 pb-5 pl-5 pr-5'>
                <div className={`${styles.gridContent} text-center`}>
                  <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Travel</h3>
                  <h2 className='font-serif'>Sheets containing Ipsum passages & more</h2>
                  <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                </div>
              </div>
            </div>

          </div>
          



        </div>
      </div>


    </div>
  )
}

export default Blog