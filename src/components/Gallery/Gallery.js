import React from 'react';
import styles from '../../styles/Gallery/Gallery.module.scss';
import imgOne from '../../assests/images/img-1.svg';
import imgTwo from '../../assests/images/img-2.svg';
import imgThree from '../../assests/images/img-3.svg';
import imgFour from '../../assests/images/img-4.svg';
import imgFive from '../../assests/images/img-5.svg';
import imgSix from '../../assests/images/img-6.svg';

function Gallery() {
  return (
    <div data-testid='Gallery' className={styles.Gallery}>
      <div className={`${styles.imgView} pt-0 pl-10 pr-10 pb-0`}>
        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-6">
          <div className={`${styles.imgSection} h-277 flex lg:justify-normal justify-center`}>
            <img src={imgOne} className='object-fill' />
          </div>

          <div className={`${styles.imgSection} h-auto lg:h-h-277 flex lg:justify-normal justify-center`}>
            <img src={imgTwo} className='object-fill' />
          </div>

          <div className={`${styles.imgSection} h-auto lg:h-h-277 flex lg:justify-normal justify-center`}>
            <img src={imgThree} className='object-fill' />
          </div>

          <div className={`${styles.imgSection} h-auto lg:h-h-277 flex lg:justify-normal justify-center`}>
            <img src={imgFour} className='object-fill' />
          </div>

          <div className={`${styles.imgSection} h-auto lg:h-h-277 flex lg:justify-normal justify-center`}>
            <img src={imgFive} className='object-fill' />
          </div>

          <div className={`${styles.imgSection} h-auto lg:h-h-277 flex lg:justify-normal justify-center`}>
            <img src={imgSix} className='object-fill' />
          </div>
        </div>

        <div className={`${styles.TitleCard} lg:titleCardView mt-10 flex justify-center`}>
          <div className={`${styles.inner} w-full lg:titleCardViewInner shadow p-5 bg-white`}>
            <h3> <span className='font-serif font-semibold text-xl'>Follow my instagram</span> <br /> <span>@logoipsum</span></h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery