import React from 'react';
import { useDispatch } from 'react-redux';
import { removeProductAction } from '../actions';
import { ProductType } from '../ducks';
import { Button } from '../../../components/common/button/Button';
import styles from './Card.module.scss';
const notImg = require('../../../assets/images/notImg.png');

type ActionCard = {
  onBuyProduct?: (props: ProductType) => void
}

export const Card = (props: ProductType & ActionCard): JSX.Element => {
  const {
    id,
    title,
    imgUrl,
    desc,
    price,
    currency,
    onBuyProduct
  } = props;
  const dispatch = useDispatch();

  const handleRemove = (id: number) => {
    dispatch(removeProductAction(id));
  }

  const handleClick = (product: ProductType) => {
    onBuyProduct(product)
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.cardHeaderImg}>
          <img src={imgUrl ? imgUrl : notImg} alt="img" />
        </div>
        <button
          title="Удалить"
          className={[styles.cardHeaderBtn, styles.cardHeaderBtnRemove, 'btn btn-round btn-secondary'].join(' ')}
          onClick={() => handleRemove(id)}
        >x</button>
        <button
          className={[styles.cardHeaderBtn, styles.cardHeaderBtnCreate, 'btn btn-secondary'].join(' ')}
        >Редактировать</button>
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardTitle}>
          {title}
        </div>
        {desc && (
          <div className={styles.cardDesc}>
            {desc}
          </div>
        )}
        <div className={styles.cardAction}>
          <div className="">
            <span>{price}</span>
            <span>{currency}</span>
          </div>
          <Button
            type="button"
            className="button button-secondary"
            onClick={() => handleClick(props)}
          >Купить</Button>
        </div>
      </div>
    </div>
  );
};