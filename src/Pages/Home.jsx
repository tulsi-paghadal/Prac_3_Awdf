import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function Home() {
  const name = "Paghadal Tulsi B.";

  const title =
    "B.Tech IT Student | Aspiring Entrepreneur & Creative Designer ✦";

  const description =
    "I am a passionate and creative B.Tech IT student with a strong interest in designing, sketching, and transforming ideas into meaningful experiences. I enjoy exploring creativity through UI/UX and design, and I dream of building my own startup in the future. I believe that great ideas, creativity, and technology can come together to create something impactful.";

  const skills = ["UI/UX Design", "Sketching", "Creative Designing"];

  return (
    <>
      <Header name={name} title={title} />

      <main>
        <About name={name} description={description} />
        <Skills skills={skills} />
      </main>

      <Footer />
    </>
  );
}

export default Home;