import Cryptos from './Cryptos';

export default function CryptoList({ cryptoData }) {
  return (
    <>
      {cryptoData.map((crypto) => {
        return (
          <Cryptos
            key={crypto.id}
            name={crypto.name}
            id={crypto.id}
            price={crypto.current_price}
            symbol={crypto.symbol}
            marketcap={crypto.market_cap}
            volume={crypto.total_volume}
            image={crypto.image}
            priceChange={crypto.price_change_percentage_24h}
          />
        );
      })}
    </>
  );
}
