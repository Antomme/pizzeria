import Header from "../components/header";
import { Footer } from "../components/footer";

export default function KontaktPage() {
  return (
    <div>
      <Header input="Kontakt" />
      <div className="container">
        <p>
          Sie möchten uns erreichen? <br/>
          Telefon: +49 123 456789 <br/>
          E-Mail: info@familia-tomme.de <br/>
          Adresse: Musterstraße 12, 12345 Musterstadt <br/>
        </p>
      </div>
      <Footer />
    </div>
  );
}
