import Header from "../components/header";
import { Footer } from "../components/footer";

export default function ImpressumPage() {
  return (
    <div>
      <Header input="Impressum" />
      <div className="container">
        <p>
          Ristorante Familia Tomme GmbH <br/>
          Musterstraße 12 <br/>
          12345 Musterstadt <br/>
          Deutschland <br/><br/>
          Geschäftsführer: Max Mustermann <br/>
          Handelsregister: HRB 123456 <br/>
          Umsatzsteuer-ID: DE123456789
        </p>
      </div>
      <Footer />
    </div>
  );
}
