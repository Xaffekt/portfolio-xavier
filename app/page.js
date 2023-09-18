import Header from "./(sections)/Header"
import Footer from "./(sections)/Footer"
import Hero from "./(sections)/Hero"
import Skills from "./(sections)/Skills"
import Projects from "./(sections)/Projects"
import About from "./(sections)/About"
import Contact from "./(sections)/Contact"

export default function Home() {


  return (
    <>
      <Header />
      <main className=" pt-32 bg-light-background dark:bg-dark-background">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
