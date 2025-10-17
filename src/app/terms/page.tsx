"use client";
import { Fade } from "react-awesome-reveal";

export default function TermsPage() {
  return (
    <Fade duration={1200} triggerOnce>
      <section className="bg-white dark:bg-gray-900 py-16 pt-48">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-10">
            Brukervilkår
          </h1>
          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Disse brukervilkårene gjelder for bruk av Innoscribes nettsider, tjenester og AI-løsninger.
              Ved å bruke våre produkter samtykker du til vilkårene nedenfor.
            </p>

            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">1. Formål</h2>
              <p>
                Innoscribe leverer AI-drevne løsninger for kundeservice, kommunikasjon og automatisering.
                Vilkårene regulerer forholdet mellom deg som bruker og Innoscribe AS, og skal sikre ansvarlig og trygg bruk av våre tjenester.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">2. Brukeransvar</h2>
              <p>Du forplikter deg til å:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Oppgi riktige og oppdaterte opplysninger.</li>
                <li>Bruke tjenestene på en lovlig og etisk måte.</li>
                <li>Ikke forsøke å misbruke, kopiere eller manipulere våre systemer eller data.</li>
              </ul>
              <p>
                Brudd på vilkårene kan medføre sperring eller avslutning av tilgang.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">3. Immaterielle rettigheter</h2>
              <p>
                Alt innhold, teknologi, design og dokumentasjon tilhører Innoscribe. Ingen deler av tjenesten kan kopieres, endres eller distribueres uten skriftlig tillatelse.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">4. Ansvarsbegrensning</h2>
              <p>
                Innoscribe leverer tjenestene «som de er».
                Vi garanterer ikke uavbrutt drift eller fullstendig feilfrihet.
                Vi er ikke ansvarlige for tap eller skader som skyldes:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Tekniske feil eller driftsavbrudd</li>
                <li>Feil bruk av tjenestene</li>
                <li>Forhold utenfor vår kontroll</li>
              </ul>
              <p>Bruk skjer på eget ansvar.</p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">5. Personvern</h2>
              <p>
                Bruk av våre tjenester innebærer behandling av personopplysninger.
                Dette skjer i tråd med vår Personvern- og AI-policy, som beskriver hvordan vi samler inn, bruker og beskytter data.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">6. Tredjepartstjenester</h2>
              <p>
                Noen funksjoner integreres med eksterne plattformer som for eksempel Google, Outlook, eller andre etter kunden sine behov.
                Ved bruk av slike integrasjoner gjelder også tredjepartens egne vilkår og personvernerklæringer.
                Innoscribe er ikke ansvarlig for feil, endringer eller tap som følge av disse.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">7. Endringer og opphør</h2>
              <p>
                Vi kan oppdatere vilkårene ved behov.
                Vesentlige endringer varsles på våre nettsider før de trer i kraft.
                Vi kan avslutte eller endre tjenester som del av vedlikehold eller videreutvikling.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">8. Lovvalg og tvister</h2>
              <p>
                Vilkårene reguleres av norsk lov.
                Tvister søkes løst i minnelighet. Dersom det ikke lykkes, avgjøres saken i Oslo tingrett.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}