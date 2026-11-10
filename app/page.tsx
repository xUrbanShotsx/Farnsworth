import Link from "next/link";
import Image from "next/image";
import Elevation from "./components/Elevation";
import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import ProjectIndex from "./components/ProjectIndex";

const marquee = ["Land", "Design", "Delivery", "Stewardship"];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero dark">
        <div className="hero__grid" aria-hidden="true" />
        <Elevation variant="tower" className="hero__art" />
        <div className="wrap hero__inner">
          <p className="eyebrow hero__eyebrow">Property development · Est. 2009</p>
          <h1 className="hero__title">
            We build places
            <br />
            that outlast us.
          </h1>
          <div className="hero__foot">
            <p className="hero__lede">
              Farnsworth develops considered residential and mixed-use buildings — from the first
              site inspection to the day the keys change hands.
            </p>
            <Link href="/projects" className="btn btn--light">
              View projects <span aria-hidden="true">→</span>
            </Link>
          </div>
          <Image
            src="/logo-white.png"
            alt=""
            width={1080}
            height={127}
            className="hero__mark"
            priority
          />
        </div>
      </section>

      {/* STATEMENT */}
      <section className="section light">
        <div className="wrap statement">
          <Reveal as="p" className="eyebrow">Our philosophy</Reveal>
          <Reveal as="p" className="statement__text">
            Good development is patient. We choose fewer sites, spend longer on the drawings and
            build with materials that age well — so every Farnsworth project looks better in
            twenty years than it did on opening day.
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="stats light">
        <div className="wrap stats__grid">
          {[
            { n: 17, s: "", l: "Years developing" },
            { n: 2400, s: "+", l: "Homes delivered" },
            { n: 38, s: "", l: "Completed projects" },
            { n: 1.2, s: "", l: "Billion in value", raw: true },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 90} className="stat">
              <span className="stat__n">
                {s.raw ? (
                  <>$1.2B</>
                ) : (
                  <Counter to={s.n} suffix={s.s} />
                )}
              </span>
              <span className="stat__l">{s.l}</span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section dark">
        <div className="wrap">
          <div className="section__head">
            <Reveal as="h2" className="h2">Selected<br />projects</Reveal>
            <Link href="/projects" className="link">All projects ↗</Link>
          </div>
          <ProjectIndex />
        </div>
      </section>

      {/* APPROACH */}
      <section className="section light">
        <div className="wrap approach">
          <Reveal as="h2" className="h2 approach__title">How we work</Reveal>
          <div className="approach__list">
            {[
              ["01", "Find", "We acquire sites in established, well-connected neighbourhoods where good architecture can add to the street rather than compete with it."],
              ["02", "Design", "Leading architects, a small client team and a long design phase. We resolve the details on paper so they are right on site."],
              ["03", "Build", "Transparent programmes, fixed standards and a single point of accountability from first excavation to final inspection."],
              ["04", "Steward", "We don't walk away at settlement. Farnsworth stays involved with owners and buildings long after completion."],
            ].map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 60} className="approach__item">
                <span className="mono">{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="marquee dark" aria-hidden="true">
        <div className="marquee__track">
          {[...marquee, ...marquee, ...marquee, ...marquee].map((w, i) => (
            <span key={i}>
              {w}
              <i>✱</i>
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section cta light">
        <div className="wrap">
          <Reveal as="p" className="eyebrow">Work with us</Reveal>
          <Reveal as="h2" className="cta__title">
            Have a site?
            <br />
            Let&rsquo;s talk.
          </Reveal>
          <Reveal>
            <Link href="/contact" className="btn btn--dark">
              Start a conversation <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
