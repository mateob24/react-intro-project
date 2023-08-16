
import "../Portfolio/Portfolio.css"


const image = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7f7db587-eb27-499a-9d38-7a11f50d5a79/d66g887-351f315c-275e-4650-8567-e7da153fc967.png/v1/fill/w_752,h_1062/goku_ssj_chibi_by_trunksfuturesaiyan_d66g887-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI3MSIsInBhdGgiOiJcL2ZcLzdmN2RiNTg3LWViMjctNDk5YS05ZDM4LTdhMTFmNTBkNWE3OVwvZDY2Zzg4Ny0zNTFmMzE1Yy0yNzVlLTQ2NTAtODU2Ny1lN2RhMTUzZmM5NjcucG5nIiwid2lkdGgiOiI8PTkwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.OgQMqlXznjfoV9ePS6dc9sGSufwK9FAooC9b5MmS5O0'

export const Portfolio = () => {
  return (
    <section className="info">
      <article className="txt">
        <h2>Mateo Bernal Arenas</h2>
        <p>Actualmente aprendiz SENA del tecnólogo Análisis y Desarrollo de Software.</p>
        
      </article>
      <article className="img">
        <img src={image} alt="" />
      </article>
    </section>

  )
}
