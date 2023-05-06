import style from './creative-sections.module.css';

export default function CreativeSections() {
  return (
    <>
      <header>
        <h1 className={style.siteTitle}>Creative Section Shapes</h1>
      </header>

      <section>
        <div className={style.wrapper}>
          <h2 className={style.sectionTitle}>Filler</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            eveniet nihil quidem temporibus illum facere tempore dolor possimus,
            sed iste. Accusantium minima libero hic, deserunt officiis amet odio
            dolor laborum!
          </p>
        </div>
      </section>


      <section className={style.diagonal}>
        <div className={style.wrapper}>
          <h2 className={style.sectionTitle}>Diagonal</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            eveniet nihil quidem temporibus illum facere tempore dolor possimus,
            sed iste. Accusantium minima libero hic, deserunt officiis amet odio
            dolor laborum!
          </p>
        </div>
      </section>

      <section>
        <div className={style.wrapper}>
          <h2 className={style.sectionTitle}>Some other section</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            eveniet nihil quidem temporibus illum facere tempore dolor possimus,
            sed iste. Accusantium minima libero hic, deserunt officiis amet odio
            dolor laborum!
          </p>
        </div>
      </section>

      <section className={style.spikes}>
        <div className={style.wrapper}>
          <h2 className={style.sectionTitle}>Spikes</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            eveniet nihil quidem temporibus illum facere tempore dolor possimus,
            sed iste. Accusantium minima libero hic, deserunt officiis amet odio
            dolor laborum!
          </p>
        </div>
      </section>

      <section>
        <div className={style.wrapper}>
          <h2 className={style.sectionTitle}>Filler</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            eveniet nihil quidem temporibus illum facere tempore dolor possimus,
            sed iste. Accusantium minima libero hic, deserunt officiis amet odio
            dolor laborum!
          </p>
        </div>
      </section>

      <section className={style.wavy}>
        <div className={style.wrapper}>
          <h2 className={style.sectionTitle}>Wavy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            eveniet nihil quidem temporibus illum facere tempore dolor possimus,
            sed iste. Accusantium minima libero hic, deserunt officiis amet odio
            dolor laborum!
          </p>
        </div>
      </section>

      <section>
        <div className={style.wrapper}>
          <h2 className={style.sectionTitle}>Filler</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            eveniet nihil quidem temporibus illum facere tempore dolor possimus,
            sed iste. Accusantium minima libero hic, deserunt officiis amet odio
            dolor laborum!
          </p>
        </div>
      </section>
    </>
  );
}
