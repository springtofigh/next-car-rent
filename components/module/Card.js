import Link from "next/link";
import styles from "./Card.module.css";
import Location from "../icons/Location";

function Card(props) {
  const {id, name, model, year, distance ,location, price, image, category} = props
  return (
    <Link href={`/cars/${id}`}>
    <div className={styles.container}>
      <img className={styles.image} src={image}/>
        <h4 className={styles.title}>{`${name} ${model}`}</h4>
        <p className={styles.detail}>{`${year} . ${distance}Km`}</p>
        <div className={styles.footer}>
          <p className={styles.price}>$ {price}</p>
          <div className={styles.location}>
            <p>{location}</p>
            <Location/>
          </div>
        </div>
    </div>
    </Link>
  );
}

export default Card;
