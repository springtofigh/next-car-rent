import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  const router = useRouter()

  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`)
    } else {
      alert('Please Enter Min and Max')
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <input placeholder="min price" value={min} onChange={e => setMin(e.target.value)} />
        <input placeholder="max price" value={max} onChange={e => setMax(e.target.value)} />
      </div>
      <button onClick={searchHandler}>Search</button>
    </div>
  );
}

export default SearchBar;
