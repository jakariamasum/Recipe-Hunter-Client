import Card from "./CoinCard";

function CoinPage() {
  const cardsData = [
    {
      title: "100 Coins",
      price: 1,
      coins: 100,
      features: ["Get 100 Coins", "Valid for one-time use", "Instant Delivery"],
    },
    {
      title: "500 Coins",
      price: 5,
      coins: 500,
      features: ["Get 500 Coins", "Valid for one-time use", "Instant Delivery"],
    },
    {
      title: "1000 Coins",
      price: 10,
      coins: 1000,
      features: [
        "Get 1000 Coins",
        "Valid for one-time use",
        "Instant Delivery",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex flex-wrap justify-center">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            price={card.price}
            features={card.features}
            offer={card.offer}
          />
        ))}
      </div>
    </div>
  );
}

export default CoinPage;
