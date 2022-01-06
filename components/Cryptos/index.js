import styles from './Cryptos.module.css';
import Link from 'next/link';
import Image from "next/image";

const Cryptos = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  id,
  priceChange,
}) => {
  return (
    <Link href="coin/[id]" as={`/coin/${id}`}>
      <a>
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <Image className={styles.coin_img} src={image} alt={name} />
              <p className={styles.coin_name}>{name}</p>
              <p className={styles.coin_symbol}>{symbol}</p>
            </div>
            <div className={styles.coin_data}>
              <p className={styles.coin_price}>${price}</p>
              <p className={styles.coin_volume}>
                ${volume.toLocaleString('en-US')}
              </p>
              {priceChange < 0 ? (
                <p className={(styles.coin_percent, styles.red)}>
                  {priceChange.toFixed(2)}%
                </p>
              ) : (
                <p className={(styles.coin_percent, styles.green)}>
                  {priceChange.toFixed(2)}%
                </p>
              )}

              <p className={styles.coin_marketcap}>
                Market Cap: ${marketcap.toLocaleString('en-US')}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Cryptos;
