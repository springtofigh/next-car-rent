import styles from "./CarDetails.module.css";
import Company from './../icons/Company';
import Location from './../icons/Location';
import Model from './../icons/Model';
import Money from './../icons/Money';
import Calender from './../icons/Calender';
import Road from './../icons/Road';


function CarDetails(props) {
  const {id, name, model, year, distance, location, price, image, description} = props
  return (
    <div className={styles.container}>
      <img className={styles.image} src={image} />
      <h3 className={styles.header}>{name} {model}</h3>
      <div className={styles.details}>
        <div>
          <Company/>
          <p>Company</p>
          <span>{name}</span>
        </div>
        <div>
          <Model/>
          <p>Model</p>
          <span>{model}</span>
        </div>
        <div>
          <Calender/>
          <p>First Registration</p>
          <span>{year}</span>
        </div>
        <div>
          <Road/>
          <p>Kms driven</p>
          <span>{distance}</span>
        </div>
      </div>
      <div className={styles.details}>
        <div>
          <Location/>
          <p>Location</p>
          <span>{location}</span>
        </div>
      </div>
      <div className={styles.details}>
        <p className={styles.descriptionTitle}>Extra Information</p>
        <p className={styles.descriptionText}>{description}</p>
      </div>
      <div className={styles.details}>
        <div className={styles.price}>
          <Money />
          <p>Price:</p>
          <span>{price}</span>
        </div>
      </div>
      <button className={styles.button}>Buy</button>
    </div>
  );
}

export default CarDetails;
