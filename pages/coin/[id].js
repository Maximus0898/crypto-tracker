import Layout from '../../components/Layout';
import styles from './Coin.module.css';
import Image from 'next/image';

const Coin = ({ coin }) => {
  console.log(coin);
  return (
    <Layout>
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <Image
            src={coin.image.small}
            alt={coin.name}
            className={styles.coin_image}
          />
          <div className={styles.coin_info}>
            <h1 className={styles.coin_name}>{coin.name}</h1>
            <p className={styles.coin_ticker}>{coin.symbol}</p>
            <ul className={styles.coin_list}>
              <li>
                Price: $
                {coin.market_data.current_price.usd.toLocaleString('en-US')}
              </li>
              <li>
                Market Cap: $
                {coin.market_data.market_cap.usd.toLocaleString('en-US')}
              </li>
              <li>
                Trading Volume: $
                {coin.market_data.total_volume.usd.toLocaleString('en-US')}
              </li>
              <li>
                24h Low / 24h High: $
                {coin.market_data.low_24h.usd.toLocaleString('en-US')} / $
                {coin.market_data.high_24h.usd.toLocaleString('en-US')}
              </li>
              <li>
                All-Time High: $
                {coin.market_data.ath.usd.toLocaleString('en-US')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Coin;

export async function getServerSideProps(context) {
  const { id } = context.query;

  const res =
    await fetch(`https://api.coingecko.com/api/v3/coins/${id}?tickers=false&community_data=false&developer_data=false
    `);

  const data = await res.json();

  return {
    props: {
      coin: data,
    },
  };
}
