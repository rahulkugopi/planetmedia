import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/Banner/Banner.module.scss';
import whiteLogo from '../../../assests/images/white-logo.svg';
import imgOne from '../../../assests/images/img-7.svg';
import imgTwo from '../../../assests/images/img-8.svg';
import imgThree from '../../../assests/images/img-9.svg';
import imgFour from '../../../assests/images/img-10.svg';

function Banner() {
    return (
        <div data-testid='Banner' className={styles.Banner}>
            <div className="grid lg:grid-cols-2 gap-0 banner-left">
                <div className={`${styles.BannerLeft} bg-no-repeat bg-cover`}>
                    <div className='w-full pt-10 pb-10 pr-10 pl-10'>
                        <div className={styles.logo}>
                            <img src={whiteLogo} />
                        </div>
                    </div>
                    <div className={styles.socialSection}>
                        <span className='p-3 bg-white rounded-full'>x</span>
                    </div>
                </div>
                <div className={`${styles.BannerRight}`}>
                    <div className={styles.topNav}>
                        <div className='pt-8 pb-8 pr-10 pl-10 flex gap-5 justify-end'>
                            <Link to='/' className='uppercase'>Home</Link>
                            <Link to='/blog' className='uppercase'>Blog</Link>
                        </div>
                    </div>

                    <div className=' pl-12 pt-12 pr-12 pb-12'>
                        <div className='flex gap-3'>
                            <h3 className='uppercase text-gray'>By Emma </h3>
                            <h3 className='uppercase text-gray text-center'><span>02 May <br /> 2021</span></h3>
                        </div>
                        <h2 className='font-serif font-light mt-4'>
                            Life is a flower of which
                            love is the honey.
                        </h2>
                        <p className='mt-5'>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees</p>

                        <div className={styles.readMore}>
                            <Link to='/' className='uppercase text-gray-special flex gap-3 font-medium mt-5 text-1xl items-center'>
                                Read More
                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.5171 6.55L5.92545 13.013L5.38788 12.3917L10.061 6.99029H0.334595V6.11145H10.0617L5.38788 0.708339L5.92545 0.086998L11.5171 6.55Z" fill="#606D59" />
                                </svg>
                            </Link>
                        </div>

                    </div>

                    <div className={`${styles.bottomThumbImg} grid lg:grid-cols-4 gap-0`}>
                        <div className=''>
                            <img src={imgOne} className='object-fill' />
                        </div>

                        <div className=''>
                            <img src={imgTwo} className='object-fill' />
                        </div>

                        <div className=''>
                            <img src={imgThree} className='object-fill' />
                        </div>

                        <div className=''>
                            <img src={imgFour} className='object-fill' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner