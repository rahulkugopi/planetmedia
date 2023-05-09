import React from 'react';
import Header from '../../Header/Header';
import styles from '../../../styles/Banner/Banner.module.scss';
import whiteLogo from '../../../assests/images/white-logo.svg';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <div data-testid='Banner' className={styles.Banner}>
            <div className="grid lg:grid-cols-2 gap-0 banner-left">
                <div className={`${styles.BannerLeft} bg-no-repeat bg-cover`} style={{ backgroundImage: "url(https://images.unsplash.com/photo-1610703122258-5a08b3166416?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8b2ZmaWNlLOKCrDE5fHx8fHx8MTY4MzI4NzU4MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080)" }}>
                    <div className='w-full pt-10 pl-10'>
                        <img src={whiteLogo} />
                    </div>
                    {/* <div className=''>
                        <span className='p-3 bg-white rounded-full'>x</span>
                    </div> */}
                </div>
                <div className={`${styles.BannerRight}`}>
                    <div className='pl-12 pt-12'>
                        <Link to='' className='uppercase'>Home</Link>
                        <Link to='' className='uppercase'>Blog</Link>
                    </div>

                    <div className=' pl-12 pt-12 pr-12 pb-12'>
                        <p className='uppercase text-gray'>By Emma / <span>02 May 2021</span></p>
                        <h2 className='font-serif font-light mt-5'>
                            Life is a flower of which
                            love is the honey.
                        </h2>
                        <p className='mt-10'>When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees</p>

                        <Link to='/' className='uppercase text-gray-special flex gap-3 font-medium mt-10 text-1xl items-center'>
                            Read More
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.5171 6.55L5.92545 13.013L5.38788 12.3917L10.061 6.99029H0.334595V6.11145H10.0617L5.38788 0.708339L5.92545 0.086998L11.5171 6.55Z" fill="#606D59" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner