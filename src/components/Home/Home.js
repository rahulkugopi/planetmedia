import React from 'react';
import Banner from './Banner/Banner';
import styles from '../../styles/Home/Home.module.scss';
import PopularImgOne from '../../assests/images/img-11.svg';
import PopularImgTwo from '../../assests/images/img-12.svg';
import PopularImgThree from '../../assests/images/img-13.svg';
import bannerOne from '../../assests/images/banner-1.svg';
import bannerTwo from '../../assests/images/banner-2.svg';
import bannerThree from '../../assests/images/banner-3.svg';
import searchIcon from '../../assests/images/search.svg';
import User from '../../assests/images/user.svg';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import Gallery from '../Gallery/Gallery';

function Home() {
    return (
        <div data-testid='Home' className={styles.Home}>
            <Banner />

            <div className='container mx-auto'>
                <div className={styles.stories}>
                    <div className={`${styles.hdr} flex justify-center`}>
                        <h1 className='uppercase'><span>Popular Stories</span></h1>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 pt-10 pb-0">
                        <div className={styles.grid}>
                            <div className={`${styles.gridTopImg} flex align-middle justify-center h-h-450`}>
                                <img src={PopularImgOne} className='object-fill' />
                            </div>

                            <div className='pt-5 lg:pt-0 pb-0 pl-5 pr-5'>
                                <div className={`${styles.gridContent} text-center`}>
                                    <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Travel</h3>
                                    <h2 className='font-serif'>Sheets containing Ipsum passages & more</h2>
                                    <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.grid}>
                            <div className={`${styles.gridTopImg} flex align-middle justify-center h-h-450`}>
                                <img src={PopularImgTwo} className='object-fill' />
                            </div>

                            <div className='pt-5 lg:pt-0 pb-0 pl-5 pr-5'>
                                <div className={`${styles.gridContent} text-center`}>
                                    <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Fashion</h3>
                                    <h2 className='font-serif'>Sheets containing Ipsum passages & more</h2>
                                    <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.grid}>
                            <div className={`${styles.gridTopImg} flex align-middle justify-center h-h-450`}>
                                <img src={PopularImgThree} className='object-fill' />
                            </div>

                            <div className='pt-5 lg:pt-0 pb-0 pl-5 pr-5'>
                                <div className={`${styles.gridContent} text-center`}>
                                    <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Lifestyle</h3>
                                    <h2 className='font-serif'>Sheets containing Ipsum passages & more</h2>
                                    <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.viewSection}>
                    <div className={`${styles.stories} border-none`}>
                        <div className="grid lg:grid-cols-3 gap-6 pt-0 pl-10 pr-10">
                            <div className={`${styles.grid} lg:col-span-2`}>
                                <div className={`${styles.gridTopImg}`}>
                                    <img src={bannerOne} className='object-fill' />
                                </div>

                                <div className='pt-5 pb-5 pl-5 pr-5'>
                                    <div className={`${styles.gridContent}`}>
                                        <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Travel</h3>
                                        <h2 className='font-serif'>There are many variations of passages of  available not the majority have suffered alteration</h2>
                                        <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.subSection}>
                                <div className={styles.form}>
                                    <input type='text' placeholder='Search....' />
                                    <img src={searchIcon} className={styles.searchIcon} />
                                </div>

                                <div className={`${styles.userView} flex justify-center mt-20 flex-col flex-wrap text-center`}>
                                    <img src={User} />
                                    <h2 className='mt-10 font-serif text-xl'>Emma Jacson</h2>
                                    <p className='uppercase text-gray mt-2'>Blogger</p>
                                    <p className='mt-5'>Hello, I am in his into a horrible lay on his armour-like back horrible vermin. He lay on his armour</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-6 pt-10 pl-10 pr-10">
                            <div className={`${styles.grid} col-span-2`}>
                                <div className={`${styles.gridTopImg}`}>
                                    <img src={bannerTwo} className='object-fill' />
                                </div>

                                <div className='pt-5 pb-5 pl-5 pr-5'>
                                    <div className={`${styles.gridContent}`}>
                                        <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Travel</h3>
                                        <h2 className='font-serif'>Possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. </h2>
                                        <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-6 pt-10 pl-10 pr-10">
                            <div className={`${styles.grid} col-span-2`}>
                                <div className={`${styles.gridTopImg}`}>
                                    <img src={bannerThree} className='object-fill' />
                                </div>

                                <div className='pt-5 pb-5 pl-5 pr-5'>
                                    <div className={`${styles.gridContent}`}>
                                        <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Interior</h3>
                                        <h2 className='font-serif'>Feel the charm of existence in this spot, which was created for the bliss of souls like mine</h2>
                                        <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                                    </div>
                                </div>

                                <div className={`${styles.btnArea} flex gap-2 mt-12 lg:justify-normal justify-center`}>
                                    <button className={`${styles.btn} ${styles.active}`}>1</button>
                                    <button className={`${styles.btn}`}>2</button>
                                    <button className={`${styles.btnLink}`}>Next <ArrowForwardIosOutlinedIcon style={{ fontSize: '12px' }} /> </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Gallery />

        </div>
    )
}

export default Home