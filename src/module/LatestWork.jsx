import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';
import { Link } from 'react-router-dom';
const LatestWork = () => {
  const works = [
    {
      id: 1,
      image: 'https://plus.unsplash.com/premium_photo-1750654274186-362b187b9fde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      type: 'Pace',
      title: 'Halo Digital Agenzy website',
    },
    {
      id: 2,
      image: 'https://plus.unsplash.com/premium_photo-1750654274186-362b187b9fde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      type: 'Atlas',
      title: 'Halo Digital Agency website',
    },
    {
      id: 3,
      image: 'https://plus.unsplash.com/premium_photo-1750654274186-362b187b9fde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      type: 'Mystic',
      title: 'Halo Digital Agency website',
    }
  ];

  return (
    <section className="container auto-center">
      <p className="text-center">● Portfolio</p>
      <h2 className="section-title text-center">My Works</h2>
      <div className="works-grid">
        {works.map(work => (
          <a
            href="#"
            className="work-card group"
            key={work.id}
          >
            <div className="work-number relative rounded-[25px]">
              <img src={work.image} alt="" className="portfolio-img rounded-[15px]" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-[#222] h-[50px] w-[50px] flex items-center justify-center rounded-full">
                  <button>
                    <FontAwesomeIcon className="text-white text-[20px]" icon={faArrowUpRightFromSquare} />
                  </button>
                </div>
              </div>
            </div>
            <div className="px-3 pt-3 pb-5">
              <span className="work-type leading-none italic">For {work.type}</span>
              <h3 className="work-title leading-none">{work.title}</h3>
            </div>
          </a>
        ))}
      </div>

      <div className="view-more">
        <Link to="/portfolios">
          Check out More → <span>View More</span>
        </Link>
      </div>
    </section>
  );
};

export default LatestWork;