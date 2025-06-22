const Overview = () => {
  return (
    <section className="overview-container">
      <h1 className="section-heading">
        Course Information
      </h1>

      <article className="hide-big">
        <h2 className="heading">
          Natural Language Processing
        </h2>
        <div className="row-area-small">
          <p>
            <b>Term:</b> Fall 2025
          </p>
          <p>
            <b>Time:</b> Mon, Wed, & Fri @ 11:30-12:20
          </p>
        </div>
        <div className="row-area-small">
          <p>
            <b>Location:</b> DeBartolo XXX
          </p>
          <p>
            <b>Instructor:</b> Aarohi Srivastava
          </p>
        </div>
      </article>

      <div className="row-area-big">
        <article className="show-big">
          <h2 className="heading">
            Natural Language Processing
          </h2>
          <p>
            <b>Term:</b> Fall 2025
          </p>
          <p>
            <b>Time:</b> Mon, Wed, & Fri @ 11:30-12:20
          </p>
          <p>
            <b>Location:</b> DeBartolo XXX
          </p>
          <p>
            <b>Instructor:</b> Aarohi Srivastava
          </p>
        </article>

        <article>
          <h2 className="heading">
            Professor - Contact Info
          </h2>

          <div className="row-area-small">
            <p>
              <b>Email:</b> asrivas2@nd.edu
            </p>
            <p>
              <b>Office Hours:</b> TBA
            </p>
          </div>
          <div className="row-area-small">
            <p>
              <b>Office Location:</b> TBA
            </p>
            <p>
              <b>Pronunciation:</b> Aarohi Srivastava
            </p>
          </div>
        </article>
        
        <article>
          <h2 className="heading">
            TA - Contact Info
          </h2>

          <div className="row-area-small">
            <p>
              <b>Email:</b> asrivas2@nd.edu
            </p>
            <p>
              <b>Office Hours:</b> TBA
            </p>
          </div>
          <div className="row-area-small">
            <p>
              <b>Office Location:</b> TBA
            </p>
            <p>
              <b>Pronunciation:</b> Aarohi Srivastava
            </p>
          </div>
        </article>
      </div>

      <article>
        <h2 className="heading">
          What is Natural Language Processing?
        </h2>
        <p>
          Computers process massive amounts of information every day in the form of human
          language. Although they do not understand it, they can learn how to do things like
          answer questions about it, or translate it into other languages. This course is a
          systematic introduction to the ideas that form the foundation of current language
          technologies and research into future language technologies.
        </p>

        <p>
          The official prerequisite is CSE 20312. Students should be experienced with writing
          substantial programs in Python. The course also makes use of finite automata, context-free
          grammars, basic linear algebra, multivariable differential calculus, and probability theory.
          Ideally, students should have taken CSE 30151, Math 10560, and ACMS 30440, but please contact
          the instructor if you have questions about the necessary background.
        </p>
      </article>
    </section>
  );
}

export default Overview;