import type { Metadata } from "next";
import Reveal from "../components/Reveal";

export const metadata: Metadata = { title: "About" };

const values = [
  ["Restraint", "We say no to more sites than we say yes to. Focus is how we keep quality high."],
  ["Craft", "Details are where a building is won or lost. We obsess over junctions, thresholds and finishes."],
  ["Candour", "Plain-spoken with buyers, partners and neighbours — about programme, price and risk."],
  ["Permanence", "We design for the second and third owner, not just the first."],
];

const team = [
  ["Managing Director", "Name Surname"],
  ["Head of Development", "Name Surname"],
  ["Head of Design", "Name Surname"],
  ["Head of Delivery", "Name Surname"],
];

export default function About() {
  return (
    <>
      <section className="page-hero light">
        <div className="wrap">
          <p className="eyebrow">About</p>
          <h1 className="page-hero__title">A developer<br />with a point of view</h1>
        </div>
      </section>

      <section className="section light" style={{ paddingTop: 0 }}>
        <div className="wrap statement">
          <Reveal as="p" className="statement__text">
            Farnsworth was founded on a simple idea: buildings are long-term commitments to a
            place and its people. We are a privately owned development company working across
            Melbourne and Sydney, delivering apartments, townhouses and mixed-use precincts with
            an unusually small, senior team.
          </Reveal>
        </div>
      </section>

      <section className="section dark">
        <div className="wrap">
          <Reveal as="h2" className="h2">What we<br />believe</Reveal>
          <div className="values">
            {values.map(([t, d], i) => (
              <Reveal key={t} delay={i * 70} className="values__item">
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="wrap">
          <Reveal as="h2" className="h2">Leadership</Reveal>
          <div className="team">
            {team.map(([role, name], i) => (
              <Reveal key={role} delay={i * 70} className="team__item">
                <div className="team__photo" aria-hidden="true" />
                <h3>{name}</h3>
                <p>{role}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
