const Blogs = () => {
  const works = [
    {
      id: 1,
      number: '7.1',
      type: 'Website',
      title: 'Halo Digital Agenzy website',
    },
    {
      id: 2,
      number: '7.2',
      type: 'Website',
      title: 'Halo Digital Agency website',
    },
    {
      id: 3,
      number: '7.2',
      type: 'Website',
      title: 'Halo Digital Agency website',
    }
  ];

  return (
    <section className="latest-works">
      <h2 className="section-title">Latest Works</h2>
      
      <div className="works-grid">
        {works.map(work => (
          <a 
            href="#" 
            className="work-card"
            key={work.id}
          >
            <span className="work-number">{work.number}</span>
            <span className="work-type">{work.type}</span>
            <h3 className="work-title">{work.title}</h3>
          </a>
        ))}
      </div>

      <div className="view-more">
        <a href="#">
          Check out More → <span>View More</span>
        </a>
      </div>
    </section>
  );
};

export default Blogs;