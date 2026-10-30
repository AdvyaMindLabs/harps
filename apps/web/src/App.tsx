import { ArrowUpRight, Heart, Users, BookOpen, Sparkles, ShieldCheck, Flower2 } from 'lucide-react';

export function App() {
  return (
    <>
      <header>
        <a className="brand" href="#home"><span>✳</span> HARPS.</a>
        <nav><a href="#vision">Our vision</a><a href="#pillars">Explore</a><a href="#community">Community</a></nav>
        <a className="navcta" href="#community">Join the community ↗</a>
      </header>
      <main id="home">
        <section className="hero">
          <div>
            <small>AN ADVAYA MINDLABS INITIATIVE</small>
            <h1>Better together.<br/><em>Deeper</em> by design.</h1>
            <p>A thoughtful space to connect, share wisdom, and grow. Discover a community rooted in wellbeing, prosperity, and purpose.</p>
            <a className="button" href="#community">Discover HARPS <ArrowUpRight size={17}/></a>
            <div className="trust"><ShieldCheck size={17}/> Designed with privacy in mind.</div>
          </div>
          <div className="art"><div className="circle"><Flower2 size={95}/><small>FIND YOUR PEOPLE.<br/>FIND YOUR PATH.</small></div></div>
        </section>
        <section className="intro" id="vision"><small>01 / OUR PHILOSOPHY</small><div><h2>Connection is the beginning of <em>everything.</em></h2><p>We believe thriving communities are built on shared values, authentic relationships, and the freedom to grow. HARPS brings these ideas into one welcoming digital home.</p></div></section>
        <section className="pillars" id="pillars"><small>02 / WHAT MATTERS</small><h2>More than a network.<br/><em>A way forward.</em></h2><div className="cards">
          <article><Heart/><h3>Wellbeing</h3><p>Ideas and conversations that support a balanced life.</p></article>
          <article><Users/><h3>Community</h3><p>Meet people who share your interests and aspirations.</p></article>
          <article><BookOpen/><h3>Knowledge</h3><p>Discover perspectives that encourage lifelong learning.</p></article>
          <article><Sparkles/><h3>Growth</h3><p>Find inspiration for your personal and inner journey.</p></article>
        </div></section>
        <section className="community" id="community"><small>03 / COMING TOGETHER</small><h2>Belong to <em>something good.</em></h2><p>HARPS is taking shape. Join the conversation and help us build a community with purpose.</p><a className="button light" href="mailto:hello@advyamindlabs.com?subject=HARPS%20community%20interest">Express interest <ArrowUpRight size={17}/></a><p className="note">This opens your email app. This prototype does not collect member data.</p></section>
      </main>
      <footer><b>✳ HARPS.</b><span>An initiative by Advaya Mindlabs · © {new Date().getFullYear()}</span></footer>
    </>
  );
}
