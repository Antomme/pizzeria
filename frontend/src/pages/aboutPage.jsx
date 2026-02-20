import Header from "../components/header";
import { Footer } from "../components/footer";

export default function AboutPage() {
  return (
    <div>
      <Header input="Über uns" />
      <div className="container">
        <p>
          Willkommen bei Ristorante Familia Tomme! Seit drei Generationen
          serviert unsere Familie authentische italienische Küche mit Liebe
          zum Detail. Hier erfahren Sie mehr über unsere Geschichte, unsere
          Philosophie und unsere Leidenschaft für gutes Essen.
        </p>
      </div>
      <Footer />
    </div>
  );
}
