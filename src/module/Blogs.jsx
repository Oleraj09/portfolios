import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare';
import { Link } from 'react-router-dom';
const Blogs = () => {
  const works = [
    {
      id: 1,
      image: 'https://plus.unsplash.com/premium_photo-1750654274186-362b187b9fde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      type: 'DIY',
      title: 'Halo Digital Agenzy website',
    },
    {
      id: 2,
      image: 'https://plus.unsplash.com/premium_photo-1750654274186-362b187b9fde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      type: 'React',
      title: 'Halo Digital Agency website',
    },
    {
      id: 3,
      image: 'https://plus.unsplash.com/premium_photo-1750654274186-362b187b9fde?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      type: 'Laravel',
      title: 'Halo Digital Agency website',
    }
  ];

  return (
    <section className="latest-works">
      <p className="text-center">● Blogs</p>
      <h2 className="section-title text-center">Latest News</h2>
      <div className="blogs-grid">
        {works.map(work => (
          <a
            href="#"
            className="blog-card"
            key={work.id}
          >
            <div className="work-number rounded-[25px]">
              <img src={work.image} alt="" className="portfolio-img rounded-[10px]" />
            </div>
            <div className="px-3 pt-3 pb-5">
              <div className="text-[#fff] bg-[#222] rounded-[25px] px-3 inline-block text-[12px] md:text-[16px]">{work.type}</div>
              <h3 className="work-title">{work.title}</h3>
            </div>
          </a>
        ))}
      </div>

      <div className="view-more">
        <Link to="/blogs">
          Check out More → <span>View More</span>
        </Link>
      </div>
    </section>
  );
};

export default Blogs;