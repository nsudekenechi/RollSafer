import { Footer } from "../components/Home/Footer";
import { Header } from "../components/Home/Header";
import { Nav } from "../components/Home/Nav";
import { Section } from "../components/Home/Section";

export const Home = () => {
  return (
    <>
      <div className="container mx-auto px-5">
        <Header />
        <Section />
        <Footer />
      </div>
    </>
  );
};
