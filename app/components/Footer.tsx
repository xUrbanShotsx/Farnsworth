import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer dark">
      <div className="wrap footer__grid">
        <div>
          <p className="eyebrow">Studio</p>
          <p>Level 12, 100 Example Street<br />Melbourne VIC 3000</p>
        </div>
        <div>
          <p className="eyebrow">Enquiries</p>
          <p>
            <a href="mailto:hello@farnsworth.example">hello@farnsworth.example</a>
            <br />
            <a href="tel:+61300000000">+61 3 0000 0000</a>
          </p>
        </div>
        <div>
          <p className="eyebrow">Explore</p>
          <p>
            <Link href="/projects">Projects</Link>
            <br />
            <Link href="/about">About</Link>
            <br />
            <Link href="/contact">Contact</Link>
          </p>
        </div>
      </div>
      <div className="wrap">
        <Image
          src="/logo-white.png"
          alt="Farnsworth"
          width={1080}
          height={127}
          className="footer__mark"
        />
        <p className="footer__legal">
          <span>© 2026 Farnsworth. All rights reserved.</span>
          <span>Images and renders are indicative only.</span>
        </p>
      </div>
    </footer>
  );
}
