import {ReactComponent as PlusBtn} from "../../../img/svg/add.svg";
import {ReactComponent as DeleteBtn} from "../../../img/svg/delete.svg";
import styles from './styles.module.css';
import PropTypes from 'prop-types';

const ProductCard = ({isDeletedBtn, name, price}) => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.product}>
                <span>{isDeletedBtn ? <DeleteBtn /> : <PlusBtn />}</span>
                <span>Изделие: {name}</span>
            </div>
            <div>{price} ₽</div>
        </div>
    );
};

ProductCard.propTypes = {
    isDeletedBtn: PropTypes.bool,
    name: PropTypes.string,
    price: PropTypes.string,
}

export default ProductCard;
