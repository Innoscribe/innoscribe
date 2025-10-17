const services = [
  {
    title: "AI CHATBOTS",
    price: "$00",
    period: "/month",
    description:
      "AI-chatboter som svarer på spørsmål, hjelper kunder og automatiserer kommunikasjon døgnet rundt.",
    features: [
      "AI-funksjoner som funker",
      "Sikkerhet i Fokus",
      "Enkel å bruke",
      "Alltid support",
    ],
    isPopular: false,
    isSelected: false,
    buttonText: "Kom i gang",
    link: "https://www.innoscribe.online/",
  },
  {
    title: "AI-TELEFONASSISTENTER",
    price: "$00",
    period: "/month",
    description:
      "AI-telefonassistenter som tar imot samtaler, håndterer bestillinger og svarer kunder automatisk.",
    features: [
      "24/7 tilgjengelighet",
      "Innkommende samtaler",
      "Utgående samtaler",
      "Tilpasset dashboard",
    ],
    isPopular: false,
    isSelected: true,
    buttonText: "Kom i gang",
    link: "https://www.innoscribe.online/",
  },
  {
    title: "AI-AGENTER",
    price: "$00",
    period: "/month",
    description:
      "AI-agenter som utfører oppgaver, følger opp kunder og integreres sømløst i dine systemer.",
    features: [
      "AI-agenter for effektiv drift",
      "Smarte funksjoner",
      "Automatiserer oppgaver",
      "Enkel integrasjon",
    ],
    isPopular: false,
    isSelected: false,
    buttonText: "Kom i gang",
    link: "https://www.innoscribe.online/",
  },
  {
    title: "UTGÅENDE BOOKING (BETAL PER RESULTAT)",
    price: "Pay",
    period: "As You Go",
    description:
      "Betal kun for vellykkede bookinger – perfekt for resultatorienterte salgskampanjer.",
    features: [
      "Kun betaling for vellykkede bookinger",
      "Ingen månedlige minuttsgrenser",
      "Ideell for salg og møtebooking",
    ],
    isPopular: false,
    isSelected: false,
    buttonText: "Kom i gang",
    link: "https://www.innoscribe.online/",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-white text-gray-900">
      <div className="pt-40 pb-20 text-center bg-white">
        <h1 className="text-4xl font-extrabold">Prissetting</h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-6 border transition hover:shadow-md ${
              service.isSelected
                ? "border-[#00C2CB] ring-2 ring-[#00C2CB]"
                : "border-gray-200"
            } bg-white`}
          >
            {service.isPopular && (
              <div className="absolute top-4 right-4 bg-[#00C2CB] text-white text-xs font-bold px-2 py-1 rounded">
                Most Popular
              </div>
            )}
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{service.description}</p>
            <div className="text-3xl font-bold mb-2">
              {service.price}
              <span className="text-base font-normal text-gray-500"> {service.period}</span>
            </div>
            <p className="text-xs text-gray-500 mb-4 italic">
              Registrer deg først for å få tilpasset prising
            </p>
            <ul className="text-sm text-gray-700 space-y-2 mb-6 text-left">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-[#00C2CB] font-bold mr-2 mt-1">✓</span> {feature}
                </li>
              ))}
            </ul>
            <a
              href={service.link}
              className={`block text-center w-full py-2 rounded-md text-sm font-semibold transition border ${
                service.isSelected
                  ? "bg-[#00C2CB] text-white"
                  : "border-[#00C2CB] text-[#00C2CB] hover:bg-[#00C2CB] hover:text-white"
              }`}
            >
              {service.buttonText}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
