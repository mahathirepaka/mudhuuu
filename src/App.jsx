import React, { useState, useRef, useEffect } from 'react';
import { Heart, Music2, Volume2, VolumeX, Sparkles, ArrowDown, MailOpen, Flower2, Camera, Stars, ChevronRight } from 'lucide-react';
import './styles.css';

const memories = [
  { image: '/photos/mudhuuu-memory-01.jpg', title: 'Our mirror moments', note: 'The random selfies, getting ready together and turning an ordinary room into our own little world.' },
  { image: '/photos/mudhuuu-memory-02.jpg', title: 'Look at you, Mudhuuu', note: 'A little appreciation for the beautiful person who makes my days brighter.' },
  { image: '/photos/mudhuuu-memory-03.jpg', title: 'The comfort of us', note: 'Being close, being silly and feeling at home just because you are there.' },
  { image: '/photos/mudhuuu-memory-04.jpg', title: 'All dressed up, still us', note: 'No matter what we wear or where we go, my favourite part is sharing the moment with you.' },
  { image: '/photos/mudhuuu-memory-05.jpg', title: 'A hug that says everything', note: 'Some days need no advice. Just a hug, a little patience and someone who understands.' },
  { image: '/photos/mudhuuu-memory-06.jpg', title: 'Our silly side', note: 'The filters, the teasing, the nonsense and the laughter that makes absolutely no sense to anyone else.' },
  { image: '/photos/mudhuuu-memory-07.jpg', title: 'Making memories everywhere', note: 'From hostel days to little outings, every shared moment becomes a story I want to keep.' },
  { image: '/photos/mudhuuu-memory-08.jpg', title: 'Certified troublemakers', note: 'The goofy pictures are proof that we never needed a reason to laugh together.' },
  { image: '/photos/mudhuuu-memory-09.jpg', title: 'Never a boring moment', note: 'Our faces, our jokes, our weirdness. I would not trade these memories for anything.' },
];

function App() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [answer, setAnswer] = useState('');
  const [musicUrl, setMusicUrl] = useState('');
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const musicInput = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;
    if (playing && musicUrl) audioRef.current.play().catch(() => setPlaying(false));
    else audioRef.current.pause();
  }, [playing, musicUrl]);

  const chooseMusic = e => {
    const file = e.target.files?.[0];
    if (!file) return;
    setMusicUrl(URL.createObjectURL(file));
    setPlaying(true);
  };
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return <main>
    <audio ref={audioRef} src={musicUrl || undefined} loop />
    <div className="petals" aria-hidden="true">{Array.from({length:18},(_,i)=><span key={i} style={{'--n':i}}>✿</span>)}</div>
    <header className="nav">
      <a href="#top" className="logo"><span>♥</span> our little world</a>
      <button className="music" onClick={() => musicUrl ? setPlaying(!playing) : musicInput.current?.click()}>
        {playing ? <Volume2 size={16}/> : <Music2 size={16}/>} {musicUrl ? (playing ? 'Music on' : 'Music off') : 'Add our song'}
      </button>
      <input ref={musicInput} type="file" accept="audio/*" hidden onChange={chooseMusic}/>
    </header>

    <section className="hero" id="top">
      <div className="hero-text">
        <div className="tiny-tag"><Sparkles size={14}/> a little website, a lot of love</div>
        <p className="hand">To my favourite roommate...</p>
        <h1>Hey,<br/><em>Mudhuuu!</em><span> ♡</span></h1>
        <p className="intro">I made this little place for us — for the hostel memories, the silly things, the care, the laughter and all the moments that quietly became my favourites.</p>
        <button className="cta" onClick={() => go('story')}>Come relive our memories <ChevronRight size={17}/></button>
        <p className="small-note">made especially for you, from my heart</p>
      </div>
      <div className="hero-photo-wrap">
        <div className="hero-scribble">roomies<br/>♡ forever</div>
        <figure className="hero-photo"><img src="/photos/mudhuuu-memory-03.jpg" alt="A real photo of the two best friends"/><figcaption>my favourite kind of together</figcaption></figure>
        <span className="doodle d1">✿</span><span className="doodle d2">♡</span>
      </div>
      <button className="down" onClick={() => go('story')}><span>our story starts here</span><ArrowDown size={16}/></button>
    </section>

    <section className="story section" id="story">
      <div className="eyebrow">01 / OUR LITTLE WORLD</div>
      <p className="hand">It started with a room...</p>
      <h2>Two girls. One hostel room.<br/><em>A thousand little memories.</em></h2>
      <div className="story-copy">
        <p>We may have started as roommates, just sharing a space, but somewhere along the way we started sharing so much more — our food, our clothes, our secrets, our worries, our happiest news and even our most random thoughts.</p>
        <p>Our room became more than a room. It became a place for late talks, unexpected laughs, tiny arguments, cooking experiments, getting ready together and being completely ourselves.</p>
      </div>
      <div className="photo-feature">
        <img src="/photos/mudhuuu-memory-01.jpg" alt="Roommate mirror selfie"/>
        <div><span className="hand">The everyday things...</span><h3>...became the memories I treasure.</h3><p>Even the ordinary days feel special when I get to share them with you.</p></div>
      </div>
    </section>

    <section className="memory-section section" id="memories">
      <div className="eyebrow">02 / THE PHOTO ALBUM</div>
      <p className="hand">Little snapshots, big feelings</p>
      <h2>Our memories, <em>our kind of magic.</em></h2>
      <p className="section-sub">Every picture has a story. These are a few pieces of our little world.</p>
      <div className="memory-grid">
        {memories.map((m,i)=><article className="memory-card" key={m.image}>
          <div className="memory-image"><img src={m.image} alt={m.title}/><span>0{i+1}</span></div>
          <div className="memory-caption"><h3>{m.title}</h3><p>{m.note}</p></div>
        </article>)}
      </div>
    </section>

    <section className="diaries section">
      <div className="eyebrow">03 / HOSTEL DIARIES</div>
      <p className="hand">The things that make us, us</p>
      <h2>Not just roommates.<br/><em>Each other's people.</em></h2>
      <div className="diary-grid">
        <article><span>🍲</span><h3>Kitchen adventures</h3><p>Cooking together, sharing bites, tasting each other's food and somehow making even a simple meal feel like an event.</p></article>
        <article><span>👚</span><h3>What's yours is mine</h3><p>Sharing clothes, little things, snacks and all the things that somehow became ours without keeping count.</p></article>
        <article><span>🌙</span><h3>One more conversation</h3><p>Late-night talks, secrets, gossip, random stories and saying “last one” before talking for another hour.</p></article>
        <article><span>🫶</span><h3>Taking care, always</h3><p>Noticing when the other is quiet, checking in, helping out and making sure neither of us feels alone.</p></article>
        <article><span>😂</span><h3>Our silly fights</h3><p>Teasing each other, dramatic arguments over tiny things, laughing five minutes later and collecting inside jokes.</p></article>
        <article><span>🏡</span><h3>A home away from home</h3><p>In a place away from home, we found comfort in each other's presence. That means more than I can explain.</p></article>
      </div>
    </section>

    <section className="letter-section section">
      <div className="eyebrow">04 / A LETTER FOR MUDHUUU</div>
      <div className="letter-card">
        <div className="letter-flower">✿</div>
        <p className="hand">Something I want you to know...</p>
        <h2>Dear <em>Mudhuuu,</em></h2>
        {!letterOpen ? <>
          <p className="letter-tease">There are a few feelings tucked inside this letter. Open it when you're ready. ♡</p>
          <button className="cta" onClick={() => setLetterOpen(true)}><MailOpen size={17}/> Open my letter</button>
        </> : <div className="letter-body">
          <p>I don't know if I tell you this enough, but having you as my roommate and best friend has made my hostel life so much more beautiful.</p>
          <p>Thank you for sharing your food, your clothes, your time, your secrets and your space with me. Thank you for every meal we made, every silly fight we had, every laugh that made our stomachs hurt, every little act of care and every moment you made me feel understood.</p>
          <p>Thank you for being my comfort person — the one I can be weird with, quiet with, honest with and completely myself around. You have turned so many ordinary days into memories I know I'll carry for a long time.</p>
          <p>I may tease you, annoy you, steal your things and argue with you over nonsense, but please know that you are genuinely precious to me. I am grateful that out of all the people I could have shared a room with, I got to share this chapter with you.</p>
          <p className="letter-highlight">If life takes us to different rooms, cities or paths someday, I hope it never takes away our bond.</p>
          <p>With all my love and the biggest hug,</p><p className="signature">Your forever roommate-in-crime ♡</p>
        </div>}
      </div>
    </section>

    <section className="proposal section" id="forever">
      <div className="eyebrow">05 / ONE LITTLE QUESTION</div>
      <div className="big-heart"><Heart fill="currentColor" size={42}/><span>✧</span></div>
      {!answer ? <>
        <p className="hand">So, my Mudhuuu...</p>
        <h2>Will you be my<br/><em>best friend forever?</em></h2>
        <p className="proposal-copy">Not just for hostel days. Not just for the same room or the same routine. For all the chapters still waiting for us — through distance, changes, new beginnings and everything in between.</p>
        <div className="answers">
          <button className="yes" onClick={() => setAnswer('yes')}>Of course, forever! <Heart size={17} fill="currentColor"/></button>
          <button className="soft" onClick={() => setAnswer('hug')}>First, give me a hug 🥹</button>
        </div>
        <p className="no-pressure">P.S. You are allowed to cry, laugh, tease me or do all three. I love our bond just as it is. ♡</p>
      </> : <div className="final-surprise">
        <div className="confetti-hearts">♡ ✿ ♥ ✧ ♡</div>
        <p className="hand">{answer === 'yes' ? 'I knew our story was special...' : 'Come here, you!'}</p>
        <h2>{answer === 'yes' ? <>BEST FRIENDS<br/><em>FOREVER & ALWAYS.</em></> : <>A BIG HUG<br/><em>FOR MY PERSON.</em></>}</h2>
        <p>Whatever changes, I hope we never stop choosing this friendship. More food to share, more clothes to borrow, more silly fights to laugh about, more secrets to keep and a lifetime of memories still to make.</p>
        <p className="final-line">You are my favourite part of this hostel chapter, Mudhuuu. Thank you for being you. ❤️</p>
        <button className="text-link" onClick={() => {setAnswer('');setLetterOpen(false);go('top')}}>Read our little story again ↗</button>
      </div>}
    </section>

    <footer><span>♥</span><p>our little world · made with love for Mudhuuu</p><span>✿</span></footer>
  </main>;
}

export default App;
