function KPICards() {
  const cards = [
    {
      title: "Threats",
      value: "2,456",
      color: "text-red-400",
    },
    {
      title: "Attacks",
      value: "687",
      color: "text-orange-400",
    },
    {
      title: "Response Time",
      value: "2.5 min",
      color: "text-cyan-400",
    },
    {
      title: "Success Rate",
      value: "98.4%",
      color: "text-green-400",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-5 mt-6">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
        >
          <h3 className="text-gray-400">{card.title}</h3>

          <p className={`text-3xl font-bold mt-3 ${card.color}`}>
            {card.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default KPICards;
