import Image from "next/image";

const phoneNumber = "+48 000 000 000";
const emailAddress = "kontakt@glkagroserwis.pl";

const services = [
  {
    title: "Diagnostyka u klienta",
    text: "Przyjezdzamy na gospodarstwo i wykonujemy diagnostyke profesjonalnym oprogramowaniem oraz narzedziami serwisowymi.",
  },
  {
    title: "Naprawy w terenie",
    text: "Usuwamy awarie mechaniczne, elektryczne i hydrauliczne bez koniecznosci transportu maszyny.",
  },
  {
    title: "Transport do warsztatu",
    text: "Gdy naprawa wymaga zaplecza warsztatowego, organizujemy dalsze dzialania i serwis poza miejscem awarii.",
  },
  {
    title: "Czesci do maszyn",
    text: "Na zapytanie oferujemy rowniez sprzedaz czesci do ciagnikow, kombajnow i innych maszyn rolniczych.",
  },
];

const brandNotes = [
  "Claas i Renault: diagnostyka oraz naprawy ciagnikow i kombajnow, od ukladow elektrycznych po mechanike robocza.",
  "Massey Ferguson: obsluga popularnych modeli wykorzystywanych w gospodarstwach, z naciskiem na szybka diagnoze usterki.",
  "Zetor i Ursus: serwis prostszych, wytrzymalych konstrukcji oraz pomoc przy czesciach eksploatacyjnych i naprawczych.",
  "Inne marki: jezeli maszyna pracuje w gospodarstwie, warto zadzwonic i opisac problem - sprawdzimy, jak mozemy pomoc.",
];

export default function Home() {
  return (
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <Image
          src="/images/mobile-tractor-service.png"
          alt="Mobilny mechanik diagnozujacy traktor na gospodarstwie"
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
          <nav aria-label="Glowne">
            <a href="#uslugi">Uslugi</a>
            <a href="#marki">Marki</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </header>
        <div className="heroContent" id="top">
          <p className="eyebrow">Mobilny serwis maszyn rolniczych</p>
          <h1 id="hero-title">Naprawa traktorow i kombajnow bez dojazdu do warsztatu</h1>
          <p className="lead">
            Dojezdzamy do klienta, wykonujemy diagnostyke na miejscu i naprawiamy maszyny w
            gospodarstwie. Jesli trzeba, zabieramy sprzet do warsztatu.
          </p>
          <div className="heroActions">
            <a className="button primary" href={`tel:${phoneNumber.replaceAll(" ", "")}`}>
              Zadzwon teraz
            </a>
            <a className="button secondary" href={`mailto:${emailAddress}`}>
              Napisz email
            </a>
          </div>
        </div>
      </section>

      <section className="section intro" aria-label="Najwazniejsze informacje">
        <p className="sectionLabel">Szybka pomoc w sezonie i poza sezonem</p>
        <h2>Serwis wtedy, gdy maszyna musi wrocic do pracy.</h2>
        <div className="introText">
          <p>
            Awarie maszyn rolniczych najczesciej zdarzaja sie wtedy, gdy sprzet jest
            najbardziej potrzebny. Dlatego przyjezdzamy bezposrednio do klienta, sprawdzamy
            objawy na miejscu i od razu ustalamy, czy naprawa jest mozliwa w gospodarstwie.
          </p>
          <p>
            Korzystamy z profesjonalnych narzedzi diagnostycznych i oprogramowania
            serwisowego, zeby precyzyjnie okreslic przyczyne problemu. Pomagamy przy
            usterkach mechanicznych, elektrycznych i hydraulicznych, a gdy sytuacja tego
            wymaga, kierujemy maszyne do warsztatu.
          </p>
          <p>
            Na zapytanie mozemy rowniez pomoc w doborze i sprzedazy czesci do ciagnikow,
            kombajnow oraz innych maszyn rolniczych.
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
        <p className="sectionLabel">Obslugiwane marki</p>
        <h2 id="brands-title">Doswiadczenie z najczesciej spotykanymi maszynami</h2>
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
            Zadzwon lub napisz. Podaj model maszyny, objawy usterki i lokalizacje, a ustalimy
            najblizszy mozliwy termin przyjazdu. Mozesz tez zapytac o dostepnosc czesci.
          </p>
        </div>
        <div className="contactActions">
          <a href={`tel:${phoneNumber.replaceAll(" ", "")}`}>{phoneNumber}</a>
          <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </div>
      </footer>
    </main>
  );
}
