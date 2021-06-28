import { useState } from 'react';
import Layout from '../components/Layout';

import CryptoList from '../components/CryptoList';
import SearchBar from '../components/SearchBar';

export default function Home({ cryptoData }) {
  const [search, setSearch] = useState('');

  const allCoins = cryptoData.filter((crypto) =>
    crypto.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };
  return (
    <Layout>
      <div className="coin_app">
        <SearchBar type="text" placeholder="Search" onChange={handleChange} />
        <CryptoList cryptoData={allCoins} />
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
  );

  const cryptoData = await res.json();

  return {
    props: {
      cryptoData,
    },
  };
};
