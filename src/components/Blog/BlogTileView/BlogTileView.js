import React, { useEffect, useState } from 'react';
import styles from '../../../styles/BlogTileView/BlogTileView.module.scss';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import { useNavigate } from 'react-router-dom';
import api from '../../../constants/Api';

function BlogTileView(props) {

  const navigate = useNavigate();
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    featchData();
  }, []);

  const featchData = () => {
    api.get('posts').then(res => {
      setBlogData(res.data);
    }).catch(error => {
      console.log(error);
    });
  }

  const handleReadMore = (evt) => {
    navigate(`/blog-details/${evt}`);
  }


  return (
    <div data-testid='BlogTileView' className={styles.BlogTileView}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-16 pl-10 pr-10">
        {
          blogData.map((res, index) => (
            <div className={styles.grid} key={index} onClick={e => handleReadMore(index+1)}>
              <div className={`${styles.gridTopImg} lg:h-h-300 sm:h-h-200 flex align-middle justify-center cursor-pointer`}>
                <img src={`${process.env.REACT_APP_IMG_URL}/?office&€${index+1}`} className='object-fill' />
              </div>

              <div className='pt-5 pb-5 pl-5 pr-5'>
                <div className={`${styles.gridContent} text-center`}>
                  <h3 className='text-2xl font-semibold leading-noneindex tracking-tight text-light-green uppercase'>Travel</h3>
                  <div className='blog-header'>
                    <h2 className='font-serif'>{res.title}</h2>
                  </div>
                  <p className='uppercase mt-5 text-gray'>By Michel jhon / 02 May 2021</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className={`${styles.btnArea} flex gap-2 pt-16 pb-20 justify-center`}>
        <button className={`${styles.btn} ${styles.active}`}>1</button>
        <button className={`${styles.btn}`}>2</button>
        <button className={`${styles.btnLink}`}>Next <ArrowForwardIosOutlinedIcon style={{ fontSize: '12px' }} /> </button>
      </div>
    </div>
  )
}

export default BlogTileView