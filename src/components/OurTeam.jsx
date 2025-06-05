import React from "react";

const cards = [
  {
    bgImage: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", // Replace with your background or use local asset
    overlay: "rgba(38, 29, 22, 0.65)",
    square: "rgba(255,255,255,0.16)",
    title: (
      <>
        <span style={{ color: "#FFD600" }}>ISENÇÃO DE IR</span>
        <br />
        <span style={{ color: "#FFF" }}>Quem não precisa declarar Imposto de Renda?</span>
      </>
    ),
    userImg: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=facearea&w=400&h=400&facepad=2", // Replace with your image
    alt: "Homem lendo documento",
    socials: "@adv.adrianoqueiroz",
    mark: "Queiroz Bisconsin"
  },
  {
    bgImage: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80", // Replace with your background or use local asset
    overlay: "rgba(25, 25, 25, 0.58)",
    square: "rgba(255,255,255,0.18)",
    title: (
      <>
        <span style={{ color: "#FFF" }}>CESSÃO DE DIREITOS HEREDITÁRIOS E TRANSFERÊNCIA DE IMÓVEL</span>
      </>
    ),
    userImg: "https://images.unsplash.com/photo-1519340333755-c6e2a6a7b8ef?auto=format&fit=facearea&w=400&h=400&facepad=2", // Replace with your image
    alt: "Homem de terno com livro",
    socials: "@adv.adrianoqueiroz",
    mark: "Queiroz Bisconsin"
  },
  {
    bgImage: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", // Replace with your background or use local asset
    overlay: "rgba(30, 24, 41, 0.70)",
    square: "rgba(255,255,255,0.12)",
    title: (
      <>
        <span style={{ color: "#FFD600" }}>VAZAMENTO DE DADOS</span>
        <br />
        <span style={{ color: "#FFF" }}>E O DIREITO DO CONSUMIDOR</span>
      </>
    ),
    userImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&w=400&h=400&facepad=2", // Replace with your image
    alt: "Homem de terno",
    socials: "@adv.adrianoqueiroz",
    mark: "Queiroz Bisconsin"
  }
];

export default function OurTeam() {
  return (
    <div className="card-flex-wrap">
      {cards.map((c, i) => (
        <div
          className="legal-card"
          style={{ backgroundImage: `linear-gradient(${c.overlay}, ${c.overlay}), url(${c.bgImage})` }}
          key={i}
        >
          <div className="card-square" style={{ background: c.square }}>
            <div className="card-person">
              <img src={c.userImg} alt={c.alt} />
            </div>
            <div className="card-title">{c.title}</div>
            <div className="card-bottom">
              <span className="card-social">{c.socials}</span>
              <span className="card-mark">{c.mark}</span>
            </div>
          </div>
        </div>
      ))}
      <style>{`
        .card-flex-wrap {
          display: flex;
          gap: 24px;
          justify-content: center;
          align-items: flex-start;
          padding: 40px 16px;
          background: #171414;
          flex-wrap: wrap;
          min-height: 100vh;
        }
        .legal-card {
          width: 320px;
          min-width: 270px;
          aspect-ratio: 1/1.2;
          background-size: cover;
          background-position: center;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px 0 rgba(30,20,50,0.20);
          position: relative;
          overflow: hidden;
        }
        .card-square {
          width: 88%;
          height: 90%;
          border-radius: 18px;
          border: 2px solid #FFD600;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: start;
          box-sizing: border-box;
          padding: 18px 16px 12px 16px;
        }
        .card-person {
          width: 78px;
          height: 78px;
          border-radius: 50%;
          overflow: hidden;
          border: 3px solid #FFD600;
          margin-bottom: 18px;
          background: #fff;
        }
        .card-person img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .card-title {
          font-size: 1.18rem;
          font-weight: 700;
          text-align: left;
          margin-bottom: 42px;
          line-height: 1.23;
          color: #FFF;
        }
        .card-bottom {
          margin-top: auto;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: end;
          font-size: 0.98rem;
          color: #fff;
          opacity: 0.83;
        }
        .card-social {
          font-size: 0.89rem;
          letter-spacing: 0.6px;
        }
        .card-mark {
          font-size: 0.89rem;
          font-family: 'serif';
          color: #FFD600;
        }
        @media (max-width: 990px) {
          .card-flex-wrap {
            flex-direction: column;
            align-items: center;
          }
        }
        @media (max-width: 600px) {
          .legal-card {
            width: 98vw;
            min-width: unset;
            aspect-ratio: unset;
            min-height: 320px;
          }
          .card-square {
            width: 96%;
            padding: 10px 7px 10px 7px;
          }
          .card-title {
            font-size: 1rem;
            margin-bottom: 32px;
          }
        }
      `}</style>
    </div>
  );
}