import { useEffect, useState } from "react";

const pages = ["home", "stem", "music", "media", "portfolio", "spark"];

const navItems = [
  ["home", "Home"],
  ["stem", "STEM"],
  ["music", "Music"],
  ["media", "Media"],
  ["spark", "Spark"],
];

const facts = [
  ["From Headford", "Based in Headford, Galway, and about to start sixth year."],
  ["Music-brained", "Classically trained violinist, guitarist, performer, songwriter, and producer."],
  ["Builds useful things", "I like ideas that turn into prototypes, events, clubs, shows, or something people can use."],
  ["Not afraid to ask", "Cold emailing, outreach, interviews, open mics, radio hosting: I like making things happen."],
  ["Favourite song", "Roy's Tune by Fontaines D.C."],
  ["Tiny lore", "I love pasta, my favourite colour is light blue, and I have always wanted to go to Thailand."],
];

const chords = [
  ["D", "I am a fully classically trained violinist and completed all nine Trinity College London grades with distinctions."],
  ["G", "I have played guitar since I was seven and perform regularly at open mics and local gigs."],
  ["C", "I perform anything from folk to acoustic rock covers."],
  ["Am", "I write and produce my own songs."],
];

const portfolioImages = [
  ["portfolio-camp-build.jpg", "Scouts building a wooden structure outdoors", "tall"],
  ["portfolio-camp-portrait.jpg", "Scout posing in sunglasses with a neckerchief", ""],
  ["portfolio-camp-cup.jpg", "Scout giving a thumbs up while holding a blue cup", ""],
  ["portfolio-camp-group.jpg", "Group of scouts gathered outside on grass", "wide"],
  ["portfolio-camp-pyramid.jpg", "Group forming a human pyramid outdoors", "wide"],
  ["portfolio-robotics.jpg", "Robotics build on a table", "tall"],
];

function getPageFromHash() {
  const hash = window.location.hash.replace("#", "");
  return pages.includes(hash) ? hash : "home";
}

export function App() {
  const [page, setPage] = useState(getPageFromHash);

  useEffect(() => {
    const syncPage = () => setPage(getPageFromHash());
    window.addEventListener("hashchange", syncPage);
    return () => window.removeEventListener("hashchange", syncPage);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = page === "spark" ? "community" : page;
  }, [page]);

  return (
    <>
      <div className="backdrop" aria-hidden="true" />
      {page === "home" ? <ChalkUnderlay /> : null}
      <header className="site-header">
        <a className="brand" href="#home">
          Eve Kennedy
        </a>
        <nav className="nav" aria-label="Primary navigation">
          {navItems.map(([id, label]) => (
            <a className={page === id ? "active" : ""} href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </nav>
      </header>
      <main className="page">
        {page === "stem" ? <Stem /> : null}
        {page === "music" ? <Music /> : null}
        {page === "media" ? <Media /> : null}
        {page === "portfolio" ? <Portfolio /> : null}
        {page === "spark" ? <Spark /> : null}
        {page === "home" ? <Home /> : null}
      </main>
    </>
  );
}

function ChalkUnderlay() {
  return (
    <div className="chalk-underlay" aria-hidden="true">
      {[
        "prototype first",
        "science fair brain",
        "radio voice",
        "classically trained",
        "cold email courage",
        "make it useful",
        "open mic energy",
        "community builder",
        "safety by design",
        "media instincts",
        "ask better questions",
        "turn ideas into rooms",
      ].map((line) => (
        <p key={line}>{line}</p>
      ))}
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="intro">
        <div>
          <h1>Eve Kennedy</h1>
          <p>
            Leaving Cert student in Headford, Galway, working across science fairs, classical violin, guitar,
            radio, photography, videography, and student-led STEM spaces.
          </p>
        </div>
        <aside className="profile-panel" aria-label="Profile snapshot">
          <dl>
            <div>
              <dt>Based in</dt>
              <dd>Headford, Galway</dd>
            </div>
            <div>
              <dt>Currently</dt>
              <dd>Starting sixth year and studying for the Leaving Cert</dd>
            </div>
            <div>
              <dt>Contact</dt>
              <dd>
                <a href="mailto:evek092@gmail.com">evek092@gmail.com</a>
              </dd>
            </div>
          </dl>
        </aside>
      </section>
      <section className="section split">
        <h2>Personal facts</h2>
        <div className="fact-grid">
          {facts.map(([title, copy]) => (
            <article className="fact-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section split">
        <h2>Choose a page</h2>
        <div className="topic-grid">
          <TopicCard id="stem" title="STEM" copy="Young Scientist projects, awards, Reforma, and research work." />
          <TopicCard id="music" title="Music" copy="Classical violin, guitar, open mics, covers, and original songs." />
          <TopicCard id="media" title="Media" copy="Yaptime on Flirt FM, photography, videography, and social work." />
          <TopicCard id="spark" title="Spark Innovation" copy="Assistant manager work, outreach, events, and STEM clubs." />
        </div>
      </section>
      <section className="section split">
        <h2>Links</h2>
        <div className="link-list">
          <a href="https://www.linkedin.com/in/eve-kennedy-60a40039b/" rel="noreferrer" target="_blank">
            LinkedIn
          </a>
          <a href="https://www.instagram.com/eve.ken09/" rel="noreferrer" target="_blank">
            Instagram
          </a>
          <a href="mailto:evek092@gmail.com">Email</a>
        </div>
      </section>
    </>
  );
}

function TopicCard({ id, title, copy }) {
  return (
    <a className="topic-card" href={`#${id}`}>
      <div className="topic-icon" aria-hidden="true">
        {title.charAt(0)}
      </div>
      <h3>{title}</h3>
      <p>{copy}</p>
    </a>
  );
}

function Stem() {
  return (
    <>
      <section className="intro">
        <div>
          <h1>STEM</h1>
          <p>Science projects, safety ideas, prototypes, awards, and the work that turned into Reforma.</p>
        </div>
        <aside className="profile-panel" aria-label="STEM snapshot">
          <dl>
            <div>
              <dt>Young Scientist</dt>
              <dd>Two-time competitor</dd>
            </div>
            <div>
              <dt>SciFest Galway</dt>
              <dd>Boston Scientific award and runner-up best project</dd>
            </div>
            <div>
              <dt>Stripe Bootcamp</dt>
              <dd>Winner with Reforma</dd>
            </div>
          </dl>
        </aside>
      </section>
      <section className="section">
        <div className="section-header">
          <h2>Projects</h2>
          <p>Selected STEM work</p>
        </div>
        <div className="project-list">
          <Project
            href="https://scifest.ie/Page/Atlantic-Technological-University-Galway-Awards-2023/519199/Index.html"
            label="SciFest"
            title="Motion sensor wristband"
          >
            A Young Scientist 2023 project using an Arduino, PIR sensor, and buzzer to alert visually impaired users
            to oncoming vehicles through infrared movement detection and a wrist buzz.
          </Project>
          <Project href="https://stripeyste.com/winners-2026-full" label="Award" title="Memory metal crumple zones">
            A Young Scientist project investigating nitinol as a material for car crumple zones, with the aim of making
            repairs safer, cheaper, and less wasteful.
          </Project>
          <Project
            href="https://www.linkedin.com/posts/university-college-dublin_a-team-of-five-secondary-school-activity-7454462631001747456-KYTx"
            label="UCD"
            title="Reforma"
          >
            A team business concept developed from the crumple-zone project during Stripe Young Scientist Business
            Bootcamp, winning the inaugural bootcamp.
          </Project>
        </div>
      </section>
      <section className="section split">
        <h2>Achievements</h2>
        <ul className="plain-list">
          <li>AirNav Ireland Safety Innovation Award at Stripe Young Scientist for Memory metal crumple zones.</li>
          <li>Runner-up best project at SciFest regional Galway for the nitinol crumple-zone project.</li>
          <li>Boston Scientific Medical Devices Award at SciFest Galway for the motion sensor wristband.</li>
          <li>Winner of the inaugural Stripe Young Scientist Business Bootcamp with Reforma.</li>
        </ul>
      </section>
      <section className="section split">
        <h2>Features</h2>
        <div className="link-list">
          <a href="https://www.galwaybayfm.ie/galway-bay-fm-news-desk/galway-students-win-eight-awards-at-2026-stripe-young-scientist-of-the-year-211219" rel="noreferrer" target="_blank">
            Galway Bay FM
          </a>
          <a href="https://www.rsa.ie/road-safety/education/road-safety-awards/young-scientist-road-safety-entrants" rel="noreferrer" target="_blank">
            Road Safety Authority
          </a>
          <a href="https://stripeyste.com/winners-2026-full" rel="noreferrer" target="_blank">
            Stripe Young Scientist
          </a>
          <a href="https://scifest.ie/Page/Atlantic-Technological-University-Galway-Awards-2023/519199/Index.html" rel="noreferrer" target="_blank">
            SciFest Galway
          </a>
        </div>
      </section>
      <section className="section photo-grid-section">
        <Photo title="Reforma" src="/assets/reforma-business-bootcamp.jpg" alt="Reforma team holding awards after winning business bootcamp" />
        <Photo title="Business talk" src="/assets/business-talk.jpg" alt="Eve attending a business talk" />
      </section>
    </>
  );
}

function Project({ children, href, label, title }) {
  return (
    <article className="project">
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
      <a href={href} rel="noreferrer" target="_blank">
        {label}
      </a>
    </article>
  );
}

function Music() {
  const [activeChord, setActiveChord] = useState(chords[0]);

  return (
    <>
      <section className="intro">
        <div>
          <h1>Music</h1>
          <p>
            Fully classically trained violinist, guitarist since age seven, open mic performer, folk and acoustic rock
            cover player, songwriter, and producer.
          </p>
        </div>
        <aside className="profile-panel" aria-label="Music snapshot">
          <dl>
            <div>
              <dt>Violin</dt>
              <dd>All nine Trinity College London grades with distinctions</dd>
            </div>
            <div>
              <dt>Guitar</dt>
              <dd>Playing since age seven</dd>
            </div>
            <div>
              <dt>Performance</dt>
              <dd>Open mics and local gigs</dd>
            </div>
          </dl>
        </aside>
      </section>
      <section className="section split">
        <h2>Click a chord</h2>
        <div className="chord-board">
          <div className="chord-neck" aria-label="Guitar chord facts">
            <div className="fret-lines" aria-hidden="true">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            {chords.map((chord) => (
              <button
                className={activeChord[0] === chord[0] ? "chord-button active" : "chord-button"}
                key={chord[0]}
                onClick={() => setActiveChord(chord)}
                type="button"
              >
                {chord[0]}
              </button>
            ))}
          </div>
          <article className="chord-fact" aria-live="polite">
            <p>{activeChord[1]}</p>
          </article>
        </div>
      </section>
      <section className="section split">
        <h2>Notes</h2>
        <div className="section-body">
          <p>
            Music is both disciplined and social for me. Classical violin gave me structure; guitar, open mics, local
            gigs, and songwriting give me a way to make things more personal.
          </p>
        </div>
      </section>
      <section className="section">
        <Photo title="Guitar gig" src="/assets/music-guitar-gig.png" alt="Eve playing guitar and singing at a gig" portrait />
      </section>
    </>
  );
}

function Media() {
  return (
    <>
      <section className="intro">
        <div>
          <h1>Media</h1>
          <p>
            Yaptime on Flirt FM, photography, videography, and the practical side of making people, events, and
            organisations look alive online.
          </p>
        </div>
        <aside className="profile-panel" aria-label="Media snapshot">
          <dl>
            <div>
              <dt>Radio</dt>
              <dd>Yaptime on Flirt FM</dd>
            </div>
            <div>
              <dt>Local work</dt>
              <dd>Photography and videography</dd>
            </div>
            <div>
              <dt>Social</dt>
              <dd>Spark Innovation content</dd>
            </div>
          </dl>
        </aside>
      </section>
      <section className="section split">
        <h2>Yaptime</h2>
        <div className="section-body">
          <p>
            Yaptime was my radio show on Flirt FM. It deserves a big place here because it shows the part of me that
            likes hosting, choosing music, talking naturally, and making something people can actually tune into.
          </p>
          <p>It brings together music, conversation, opinions, and the kind of unscripted personality that makes local radio interesting.</p>
        </div>
      </section>
      <section className="section split">
        <h2>Photo and video</h2>
        <div className="section-body">
          <p>
            I do photography and videography locally, especially when people need something practical, sharp, and ready
            to use for events, projects, organisations, or social media.
          </p>
          <p>
            <a href="#portfolio">Open the photo portfolio</a>
          </p>
        </div>
      </section>
      <section className="section split">
        <h2>Links</h2>
        <div className="link-list">
          <a href="https://flirtfm.ie" rel="noreferrer" target="_blank">
            Flirt FM
          </a>
          <a href="#portfolio">Photo portfolio</a>
          <a href="https://www.instagram.com/eve.ken09/" rel="noreferrer" target="_blank">
            Instagram
          </a>
        </div>
      </section>
    </>
  );
}

function Portfolio() {
  return (
    <>
      <section className="intro">
        <div>
          <h1>Photo portfolio</h1>
          <p>A place for local photography, video stills, event work, and visual projects.</p>
        </div>
        <aside className="profile-panel" aria-label="Portfolio snapshot">
          <dl>
            <div>
              <dt>Work</dt>
              <dd>Photography and videography</dd>
            </div>
            <div>
              <dt>Use</dt>
              <dd>Events, social content, projects, organisations</dd>
            </div>
            <div>
              <dt>Contact</dt>
              <dd>
                <a href="mailto:evek092@gmail.com">evek092@gmail.com</a>
              </dd>
            </div>
          </dl>
        </aside>
      </section>
      <section className="section" aria-label="Photo gallery">
        <div className="portfolio-grid">
          {portfolioImages.map(([src, alt, size]) => (
            <figure className={`portfolio-card ${size}`} key={src}>
              <img src={`/assets/${src}`} alt={alt} />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}

function Spark() {
  return (
    <>
      <section className="intro">
        <div>
          <h1>Spark Innovation</h1>
          <p>
            A student-led STEM organisation running clubs in Headford and Galway, with meetings, speakers, and support
            for young people who want to build.
          </p>
        </div>
        <aside className="profile-panel" aria-label="Spark snapshot">
          <dl>
            <div>
              <dt>Role</dt>
              <dd>Assistant manager</dd>
            </div>
            <div>
              <dt>Work</dt>
              <dd>Social media, outreach, event management, cold emailing</dd>
            </div>
            <div>
              <dt>Clubs</dt>
              <dd>Headford and Galway</dd>
            </div>
          </dl>
        </aside>
      </section>
      <section className="section split">
        <h2>What I do</h2>
        <div className="section-body">
          <p>
            I am currently assistant manager of Spark Innovation. I manage social media, work on outreach and event
            management, and do a lot of cold emailing to help the organisation grow.
          </p>
          <p>
            We run STEM clubs in Headford and Galway, hold regular meetings, and bring in speakers so students have more
            support if they want to build, compete, or explore STEM seriously.
          </p>
        </div>
      </section>
      <section className="section split">
        <h2>Capabilities</h2>
        <ul className="tag-list">
          <li>Community leadership</li>
          <li>Social media</li>
          <li>Outreach</li>
          <li>Event management</li>
          <li>Cold emailing</li>
          <li>Public speaking</li>
          <li>Student support</li>
        </ul>
      </section>
      <section className="section split">
        <h2>Links</h2>
        <div className="link-list">
          <a href="https://sparkinnovationireland.com" rel="noreferrer" target="_blank">
            Spark Innovation
          </a>
          <a href="mailto:evek092@gmail.com">Email</a>
        </div>
      </section>
      <section className="section photo-grid-section">
        <Photo title="Spark Innovation hub meeting" src="/assets/spark-hub-meeting.jpg" alt="Students at a Spark Innovation hub meeting" />
        <Photo title="Spark speaker event" src="/assets/spark-speakers.jpg" alt="Speaker discussion at a Spark Innovation event" />
      </section>
    </>
  );
}

function Photo({ alt, portrait, src, title }) {
  return (
    <article>
      <div className="section-header">
        <h2>{title}</h2>
      </div>
      <div className={portrait ? "feature-photo portrait" : "feature-photo"}>
        <img src={src} alt={alt} />
      </div>
    </article>
  );
}
