import { Metadata } from "next";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export const metadata: Metadata = {
  title: "Team ",
  description: "Møt teamet bak Innoscribe - eksperter innen AI-løsninger",
};

const teamMembers = [
  {
    id: 1,
    name: "Team Member 1",
    role: "AI Specialist",
    image: "/images/team/hero-1.jpg",
  },
  {
    id: 2,
    name: "Team Member 2", 
    role: "Developer",
    image: "/images/team/hero-2.jpg",
  },
  {
    id: 3,
    name: "Team Member 3",
    role: "Product Manager",
    image: "/images/team/hero-3.jpg",
  },
  {
    id: 4,
    name: "Team Member 4",
    role: "UX Designer",
    image: "/images/team/hero-4.jpg",
  },
  {
    id: 5,
    name: "Team Member 5",
    role: "Data Scientist",
    image: "/images/team/hero-5.jpg",
  },
  {
    id: 6,
    name: "Team Member 6",
    role: "Business Analyst",
    image: "/images/team/hero-6.jpg",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="py-20 bg-white dark:bg-dark pt-40 lg:pt-48">
        <div className="container mx-auto px-4">
          <Fade duration={1000}>
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-dark dark:text-white mb-4">
                Vårt Team
              </h1>
              <p className="text-lg text-body-color dark:text-dark-6 max-w-2xl mx-auto">
                Møt ekspertene som driver Innoscribe fremover med innovative AI-løsninger
              </p>
            </div>
          </Fade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Fade key={member.id} duration={1000} delay={index * 100}>
                <div className="border border-[#58c0c2] p-4 bg-[#fbfbfb]">
                  <div className="relative h-96">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}