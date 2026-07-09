import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności strony GLK Agro Serwis, obejmująca informacje o logach serwera, Google Maps, odbiorcach danych i prawach użytkownika.",
};

export default function PrivacyPolicy() {
  return (
    <main className="policyPage">
      <article className="policyContent">
        <p className="sectionLabel">GLK Agro Serwis</p>
        <h1>Polityka prywatności</h1>
        <p className="policyDate">Ostatnia aktualizacja: 9 lipca 2026 r.</p>

        <section>
          <h2>1. Administrator danych</h2>
          <p>
            Administratorem danych osobowych jest GLK Agro Serwis, Brzeziny 139,
            22-310 Kraśniczyn, Polska. Kontakt w sprawach prywatności:
            <a href="mailto:glkagro.serwis@gmail.com">
              {" "}
              glkagro.serwis@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2>2. Charakter strony</h2>
          <p>
            Strona internetowa ma charakter informacyjny. Nie umożliwia
            zakładania kont użytkowników, nie zawiera formularza kontaktowego,
            newslettera ani systemu komentarzy. Kontakt z firmą odbywa się przez
            telefon, e-mail lub poprzez kliknięcie odnośnika do mapy.
          </p>
        </section>

        <section>
          <h2>3. Jakie dane mogą być przetwarzane</h2>
          <p>
            Podczas korzystania ze strony dostawca hostingu może automatycznie
            przetwarzać dane techniczne w logach serwera, takie jak adres IP,
            typ przeglądarki, dane urządzenia, data i godzina zapytania,
            odwiedzone podstrony oraz adres strony odsyłającej, jeżeli jest
            dostępny.
          </p>
          <p>
            Dane te są wykorzystywane w celu zapewnienia technicznego działania
            strony, bezpieczeństwa, zapobiegania nadużyciom oraz diagnozowania
            błędów. Jeżeli skontaktujesz się z nami telefonicznie lub e-mailowo,
            przetwarzamy dane, które dobrowolnie przekażesz w treści rozmowy lub
            wiadomości.
          </p>
        </section>

        <section>
          <h2>4. Cookies</h2>
          <p>
            Ta strona sama nie ustawia własnych plików cookies. Osadzona mapa
            Google może jednak powodować ustawienie plików cookies lub podobnych
            technologii przez Google po załadowaniu mapy. Zasady przetwarzania
            takich danych określa Google.
          </p>
        </section>

        <section>
          <h2>5. Google Maps</h2>
          <p>
            Strona korzysta z osadzonej mapy Google Maps w celu pokazania
            lokalizacji warsztatu. Załadowanie mapy powoduje połączenie z
            usługami Google. Google może otrzymać m.in. adres IP, informacje o
            przeglądarce i urządzeniu oraz informację o odwiedzonej stronie.
          </p>
          <p>
            Dane te mogą być przetwarzane przez Google zgodnie z jego własną
            polityką prywatności:
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              https://policies.google.com/privacy
            </a>
            .
          </p>
        </section>

        <section>
          <h2>6. Podstawy prawne przetwarzania</h2>
          <p>
            Logi serwera są przetwarzane na podstawie prawnie uzasadnionego
            interesu administratora, którym jest zapewnienie bezpieczeństwa,
            stabilności i poprawnego działania strony. Dane przekazane w
            kontakcie telefonicznym lub e-mailowym są przetwarzane w celu
            obsługi zapytania i kontaktu zwrotnego.
          </p>
          <p>
            Osadzenie Google Maps służy pokazaniu lokalizacji warsztatu i
            ułatwieniu dojazdu. Podstawą może być prawnie uzasadniony interes
            administratora.
          </p>
        </section>

        <section>
          <h2>7. Odbiorcy danych</h2>
          <p>
            Dane mogą być przetwarzane przez dostawcę hostingu strony oraz przez
            Google LLC lub podmioty powiązane z Google w zakresie działania
            osadzonej mapy Google Maps.
          </p>
        </section>

        <section>
          <h2>8. Przekazywanie danych poza EOG</h2>
          <p>
            W związku z korzystaniem z usług Google dane mogą być przekazywane
            poza Europejski Obszar Gospodarczy, w tym do Stanów Zjednoczonych.
            Google deklaruje stosowanie zabezpieczeń wymaganych przez
            obowiązujące przepisy o ochronie danych.
          </p>
        </section>

        <section>
          <h2>9. Okres przechowywania danych</h2>
          <p>
            Logi serwera są przechowywane zgodnie z zasadami dostawcy hostingu i
            tylko przez okres potrzebny do celów technicznych, bezpieczeństwa
            oraz diagnostyki. Dane przekazane w kontakcie bezpośrednim
            przechowujemy przez czas potrzebny do obsługi zapytania, a następnie
            zgodnie z obowiązkami prawnymi lub uzasadnioną potrzebą obrony przed
            roszczeniami.
          </p>
        </section>

        <section>
          <h2>10. Prawa użytkownika</h2>
          <p>
            W zakresie przewidzianym przepisami RODO przysługuje Ci prawo
            dostępu do danych, sprostowania danych, usunięcia danych,
            ograniczenia przetwarzania, sprzeciwu, przenoszenia danych, jeżeli
            ma zastosowanie, oraz wniesienia skargi do właściwego organu
            nadzorczego.
          </p>
        </section>

        <section>
          <h2>11. Zmiany polityki</h2>
          <p>
            Polityka prywatności może być aktualizowana, w szczególności w
            przypadku zmian w funkcjonowaniu strony, usługach zewnętrznych lub
            przepisach prawa. Aktualna wersja jest zawsze dostępna na tej
            podstronie.
          </p>
        </section>

        <a className="policyBack" href="/">
          Powrót na stronę główną
        </a>
      </article>
    </main>
  );
}
