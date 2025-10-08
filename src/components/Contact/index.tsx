import React from "react";

export default function ContactPage() {
  return (
    <section className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 lg:gap-x-20 items-start">
          {/* LEFT SIDE */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-dark dark:text-white mb-6 leading-snug">
              La oss hjelpe deg å lykkes med AI
            </h2>
            <p className="text-base text-body-color dark:text-dark-6 mb-10">
              Interessert i hvordan våre løsninger kan gjøre hverdagen enklere og mer effektiv?
              <br />
              <br />
              Fyll ut skjemaet eller ta kontakt – så finner vi den rette løsningen for din bedrift.
            </p>

            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start gap-4">
                <span className="text-[#00BCD4]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5Z" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-dark dark:text-white">Hovedkontor</h4>
                  <p className="text-sm text-body-color dark:text-dark-6">
                    Niels Juels Gate 70, Oslo, Norge
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <span className="text-[#00BCD4]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8l8 5 8-5v10H4Z" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-dark dark:text-white">Kontakt oss</h4>
                  <p className="text-sm text-body-color dark:text-dark-6">contact@innoscribe.no</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <span className="text-[#00BCD4]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.72 11.72 0 0 0 3.68.59 1 1 0 0 1 1 1v3.73a1 1 0 0 1-1 1C9.94 22.46 1.54 14.06 1.54 3a1 1 0 0 1 1-1H6.3a1 1 0 0 1 1 1c0 1.26.2 2.49.59 3.68a1 1 0 0 1-.24 1.01l-2.2 2.2Z" />
                  </svg>
                </span>
                <div>
                  <h4 className="text-sm font-semibold text-dark dark:text-white">Telefon</h4>
                  <p className="text-sm text-body-color dark:text-dark-6">+47 40 55 63 33</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
              Send oss ​​en melding!
            </h3>
            <form action="https://formspree.io/f/moqgylzg" method="POST">
              <div className="mb-[22px]">
                <label
                  htmlFor="fullName"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Navn*
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Ola Normann"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-[#58c0c2] focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="email"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  E-post*
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="eksempel@din-epost.no"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-[#58c0c2] focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[22px]">
                <label
                  htmlFor="phone"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Telefon*
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+47 000 00 000"
                  className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-[#58c0c2] focus:outline-none dark:border-dark-3 dark:text-white"
                />
              </div>
              <div className="mb-[30px]">
                <label
                  htmlFor="message"
                  className="mb-4 block text-sm text-body-color dark:text-dark-6"
                >
                  Melding*
                </label>
                <textarea
                  name="message"
                  rows={1}
                  placeholder="skriv her"
                  className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-[#58c0c2] focus:outline-none dark:border-dark-3 dark:text-white"
                ></textarea>
              </div>
              <div className="mb-0">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-[#58c0c2] px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-[#58c0c2]/90"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
