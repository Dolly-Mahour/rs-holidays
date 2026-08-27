import "../../src/styles/why-chpose-us.css";

function WhyChooseUs() {
  const reasonsForChoosingUs = [
    {
      id: 1,
      heading: "Expert Planning",
      description:
        "Carefully designed itineraries created by experienced travel professionals for smooth and memorable journeys.",
      bgImg: "/images/sauceBg1.png",
      icon: "bi-map",
      theme: "red",
    },
    {
      id: 2,
      heading: "Trusted Service",
      description:
        "Reliable guidance and dedicated support before, during and after your journey.",
      bgImg: "/images/sauceBg2.png",
      icon: "bi-shield-check",
      theme: "blue",
    },
    {
      id: 3,
      heading: "Great Experiences",
      description:
        "Handpicked destinations and meaningful experiences designed to make every trip special.",
      bgImg: "/images/sauceBg3.png",
      icon: "bi-suitcase-lg",
      theme: "red",
    },
    {
      id: 4,
      heading: "Memorable Journeys",
      description:
        "Travel with people, stories and experiences that become memories you will always cherish.",
      bgImg: "/images/sauceBg4.png",
      icon: "bi-heart",
      theme: "blue",
    },
  ];

  return (
    <section className="why-choose-section">
      <div className="container-fluid px-lg-5 px-3">
        {/* Heading */}
        <div className="why-choose-heading text-center">
          <span className="why-small-title">WHY RS HOLIDAYS</span>

          <h2>
            Travel With <span>Confidence</span>
          </h2>

          <p>
            From planning to your return journey, we&apos;re with you every step
            of the way.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4 justify-content-center">
          {reasonsForChoosingUs.map((reason) => (
            <div
              className="col-xl-3 col-lg-6 col-md-6 col-sm-12"
              key={reason.id}
            >
              <div
                className="source-card-inner"
                // style={{
                //   backgroundImage: `url("${reason.bgImg}")`,
                // }}
              >
                {/* icon */}
                <div
                  className={`why-card-icon ${
                    reason.theme === "red"
                      ? "why-icon-red"
                      : "why-icon-blue"
                  }`}
                >
                  <i className={`bi ${reason.icon}`}></i>
                </div>

                {/* content */}
                <div className="why-card-content">
                  <h3>{reason.heading}</h3>

                  <p>{reason.description}</p>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;