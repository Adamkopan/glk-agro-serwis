import Image from "next/image";

const phoneNumber = "+48 884826000";
const emailAddress = "glkagro.serwis@gmail.com";
const workshopAddress = "Brzeziny 139, 22-310 Kraśniczyn";
const workshopMapUrl =
  "https://www.google.com/maps/search/?api=1&query=Brzeziny%20139%2C%2022-310%20Kra%C5%9Bniczyn";
const workshopMapEmbedUrl =
  "https://maps.google.com/maps?q=Brzeziny%20139%2C%2022-310%20Kra%C5%9Bniczyn&t=&z=14&ie=UTF8&iwloc=&output=embed";

const services = [
  {
    title: "Diagnostyka u klienta",
    text: "Przyjeżdżamy na gospodarstwo i wykonujemy diagnostykę profesjonalnym oprogramowaniem oraz narzędziami serwisowymi.",
  },
  {
    title: "Naprawy w terenie",
    text: "Usuwamy awarie mechaniczne, elektryczne i hydrauliczne bez konieczności transportu maszyny.",
  },
  {
    title: "Transport do warsztatu",
    text: "Gdy naprawa wymaga zaplecza warsztatowego, organizujemy dalsze działania i serwis poza miejscem awarii.",
  },
  {
    title: "Części do maszyn",
    text: "Na zapytanie oferujemy również sprzedaż części do ciągników, kombajnów i innych maszyn rolniczych.",
  },
  {
    title: "Renowacje i odświeżanie",
    text: "Zajmujemy się także renowacją, odświeżaniem i przygotowaniem maszyn do dalszej pracy lub sezonu.",
  },
];

const brandNotes = [
  "Claas i Renault: diagnostyka oraz naprawy ciągników i kombajnów, od układów elektrycznych po mechanikę roboczą.",
  "Massey Ferguson: obsługa popularnych modeli wykorzystywanych w gospodarstwach, z naciskiem na szybką diagnozę usterki.",
  "Zetor i Ursus: serwis prostszych, wytrzymałych konstrukcji oraz pomoc przy częściach eksploatacyjnych i naprawczych.",
  "Inne marki: jeżeli maszyna pracuje w gospodarstwie, warto zadzwonić i opisać problem - sprawdzimy, jak możemy pomóc.",
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <Image
          src="/images/mobile-tractor-service.png"
          alt="Mobilny mechanik diagnozujący traktor na gospodarstwie"
          fill
          priority
          sizes="100vw"
          className="heroImage"
        />
        <div className="heroShade" />
        <header className="siteHeader">
          <a className="brand" href="#top" aria-label="GLK Agro Serwis">
            GLK Agro Serwis
          </a>
          <nav aria-label="Główne">
            <a href="#uslugi">Usługi</a>
            <a href="#marki">Marki</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </header>
        <div className="heroContent" id="top">
          <p className="eyebrow">Mobilny serwis maszyn rolniczych</p>
          <h1 id="hero-title">Naprawa traktorów i kombajnów bez dojazdu do warsztatu</h1>
          <p className="lead">
            Dojeżdżamy do klienta, wykonujemy diagnostykę na miejscu i naprawiamy maszyny w
            gospodarstwie. Jeśli trzeba, zabieramy sprzęt do warsztatu.
          </p>
          <div className="heroActions">
            <a className="button primary" href={`tel:${phoneNumber.replaceAll(" ", "")}`}>
              Zadzwoń teraz
            </a>
            <a className="button secondary" href={`mailto:${emailAddress}`}>
              Napisz email
            </a>
          </div>
        </div>
      </section>

      <section className="section intro" aria-label="Najważniejsze informacje">
        <p className="sectionLabel">Szybka pomoc w sezonie i poza sezonem</p>
        <h2>Serwis wtedy, gdy maszyna musi wrócić do pracy.</h2>
        <div className="introText">
          <p>
            Awarie maszyn rolniczych najczęściej zdarzają się wtedy, gdy sprzęt jest
            najbardziej potrzebny. Dlatego przyjeżdżamy bezpośrednio do klienta, sprawdzamy
            objawy na miejscu i od razu ustalamy, czy naprawa jest możliwa w gospodarstwie.
          </p>
          <p>
            Korzystamy z profesjonalnych narzędzi diagnostycznych i oprogramowania
            serwisowego, żeby precyzyjnie określić przyczynę problemu. Pomagamy przy
            usterkach mechanicznych, elektrycznych i hydraulicznych, a gdy sytuacja tego
            wymaga, kierujemy maszynę do warsztatu.
          </p>
          <p>
            Na zapytanie możemy również pomóc w doborze i sprzedaży części do ciągników,
            kombajnów oraz innych maszyn rolniczych. Zajmujemy się też renowacją i
            odświeżaniem maszyn, które wymagają przygotowania do dalszej pracy.
          </p>
        </div>
      </section>

      <section className="section services" id="uslugi" aria-labelledby="services-title">
        <div className="sectionHeading">
          <p className="sectionLabel">Zakres prac</p>
          <h2 id="services-title">Mobilna diagnostyka, naprawa i warsztat</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <span aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section brands" id="marki" aria-labelledby="brands-title">
        <p className="sectionLabel">Obsługiwane marki</p>
        <h2 id="brands-title">Doświadczenie z najczęściej spotykanymi maszynami</h2>
        <div className="brandCopy">
          {brandNotes.map((note) => (
            <p key={note}>{note}</p>
          ))}
        </div>
      </section>

      <footer className="contact" id="kontakt" aria-labelledby="contact-title">
        <div>
          <p className="sectionLabel">Kontakt</p>
          <h2 id="contact-title">Potrzebujesz naprawy w gospodarstwie?</h2>
          <p>
            Zadzwoń lub napisz. Podaj model maszyny, objawy usterki i lokalizację, a ustalimy
            najbliższy możliwy termin przyjazdu. Możesz też zapytać o dostępność części,
            renowację albo odświeżenie maszyny.
          </p>
        </div>
        <div className="contactActions">
          <a href={`tel:${phoneNumber.replaceAll(" ", "")}`}>{phoneNumber}</a>
          <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
          <div className="mapPanel">
            <a className="mapAddress" href={workshopMapUrl} target="_blank" rel="noreferrer">
              {workshopAddress}
            </a>
            <iframe
              src={workshopMapEmbedUrl}
              title="Mapa dojazdu do warsztatu GLK Agro Serwis"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </footer>
    </main>
  );
}
