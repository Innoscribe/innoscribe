"use client";
import { Fade } from "react-awesome-reveal";

const PrivacyPolicyPage = () => {
  return (
    <Fade duration={1200} triggerOnce>
      <section className="bg-white dark:bg-gray-900 py-16 pt-48">
        <div className="max-w-5xl mx-auto px-6">
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-center text-gray-800 dark:text-white mb-10">
            Personvern- og AI-policy
          </h1>

          {/* Content */}
          <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              Hos Innoscribe er personvern og etisk bruk av kunstig intelligens en
              kjerneverdi. Vi mener at tillit bygges gjennom sikkerhet, åpenhet og
              ansvarlighet. Våre løsninger innen kundeservice og AI er utviklet for å
              skape trygg, effektiv og brukervennlig kommunikasjon mellom bedrifter
              og deres kunder – alltid med respekt for personopplysninger.
            </p>
            <p>
              Denne policyen beskriver våre prinsipper for behandling av data, bruk av
              kunstig intelligens og hvordan vi etterlever gjeldende regelverk.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">1. Grunnprinsipper for personvern</h2>
              <p>
                Vi behandler personopplysninger i samsvar med GDPR og
                bransjestandarder for sikkerhet og integritet.
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><b>Lovlighet og grunnlag:</b> Behandling skjer kun på gyldig rettslig grunnlag (samtykke, kontrakt eller berettiget interesse).</li>
                <li><b>Dataminimering:</b> Vi samler inn minst mulig informasjon, og kun det som er nødvendig.</li>
                <li><b>Åpenhet:</b> Vi informerer tydelig om hvordan personopplysninger behandles.</li>
                <li><b>Sikkerhet:</b> Data beskyttes gjennom kryptering, tilgangsstyring og sikker lagring.</li>
                <li><b>Lagring og sletting:</b> Opplysninger oppbevares kun så lenge de er nødvendige, og slettes eller anonymiseres etter faste rutiner.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">2. Håndtering av kundedata</h2>
              <p>
                For å sikre at kundedata alltid behandles trygt og i tråd med lovverket følger vi disse praksisene:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Databehandleravtaler inngås med alle underleverandører.</li>
                <li>Overføring utenfor EU/EØS skjer kun med gyldig rettslig grunnlag, som standard kontraktsklausuler.</li>
                <li>Tilgangskontroll sikrer at kun autoriserte medarbeidere med tjenstlig behov får innsyn.</li>
                <li>Varsling ved sikkerhetsbrudd: Ved avvik informerer vi berørte parter og Datatilsynet innen 72 timer.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">3. Bruk av kunstig intelligens (AI)</h2>
              <p>
                Vi ser på kunstig intelligens som et verktøy for å styrke, ikke erstatte, menneskelig kommunikasjon. Vår bruk av AI følger disse prinsippene:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li><b>Transparens:</b> Brukere skal alltid vite når de samhandler med en AI-assistent.</li>
                <li><b>Menneskelig tilgjengelighet:</b> Det skal alltid være mulig å be om kontakt med et menneske.</li>
                <li><b>Ansvarlighet:</b> Våre systemer testes og overvåkes for å unngå feil og diskriminering.</li>
                <li><b>Kontinuerlig forbedring:</b> Data brukes til å forbedre tjenestene våre, uten unødvendig lagring av personopplysninger.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">4. Kundeservice og kommunikasjon</h2>
              <p>
                Vi kommuniserer med respekt for lover og kundens preferanser.
                Telefonsamtaler, SMS og e-post brukes kun med samtykke eller der det
                foreligger et gyldig kundeforhold.
              </p>
              <p>Som kunde har du rett til:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Innsyn i egne data</li>
                <li>Retting av feilaktige opplysninger</li>
                <li>Sletting av personopplysninger</li>
                <li>Dataportabilitet i henhold til GDPR</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">5. Fremtidige reguleringer – (EU AI Act)</h2>
              <p>
                Den kommende EU-forordningen for kunstig intelligens (AI Act) vil også gjelde i Norge. Vi forbereder oss allerede på dette ved å:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Dokumentere AI-løsninger og risikovurderinger</li>
                <li>Sikre gjennomsiktighet i alle AI-prosesser</li>
                <li>Tilpasse interne rutiner og kontroller til kravene som trer i kraft i 2025–2026</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold mb-3">6. Kontakt oss</h2>
              <p>
                Har du spørsmål om personvern eller vår bruk av kunstig intelligens, er du velkommen til å ta kontakt:
              </p>
              <p>
                📧 <a href="mailto:contact@innoscribe.no" className="text-[#58c0c2] hover:underline">contact@innoscribe.no</a><br />
                📞 +47 405 56 333
              </p>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
};

export default PrivacyPolicyPage;
