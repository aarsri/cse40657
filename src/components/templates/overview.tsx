const Overview = () => {
  return (
    <section className="overview-container">
      <h1 className="section-heading">
        Course Information
      </h1>

      <div className="row-area-big">
        <article>
          <h2 className="heading">
            Natural Language Processing
          </h2>
          <div className="row-area-small">
            <p>
              <b>Term:</b> Fall 2025
            </p>
            <p>
              <b>Time:</b> MWF 11:30-12:20
            </p>
          </div>
          <div className="row-area-small">
            <p>
              <b>Location:</b> DeBartolo 310
            </p>
            <p>
              <b>Instructor:</b> Aarohi Srivastava
            </p>
          </div>
        </article>

        <article>
          <h2 className="heading">
            Professor: Aarohi Srivastava
          </h2>

          <div className="row-area-small">
            <p>
              <b>Email:</b> asrivas2@nd.edu
            </p>
            <p>
              <b>Office Hours:</b> Wednesdays 2:30-4:30 pm
            </p>
          </div>
          <div className="row-area-small">
            <p>
              <b>Office Location:</b> Cushing 121A
            </p>
            <p>
              <b>Pronunciation:</b> ah-ROH-hee shree-VAHS-tuhv
            </p>
          </div>
        </article>
      </div>

      <div className="row-area-big">
        <article>
          <h2 className="heading">
            First Half TA: Ken Sible
          </h2>

          <div className="row-area-small">
            <p>
              <b>Email:</b> ksible@nd.edu
            </p>
            <p>
              <b>Office Hours:</b> Thursdays 2-4 pm
            </p>
          </div>
          <div className="row-area-small">
            <p>
              <b>Office Location:</b> Fitzpatrick 150M
            </p>
            <p>
              <b>Pronunciation:</b> KEN SIGH-buhl
            </p>
          </div>
        </article>

        <article>
          <h2 className="heading">
            Second Half TA: TBA
          </h2>

          <div className="row-area-small">
            <p>
              <b>Email:</b> TBA
            </p>
            <p>
              <b>Office Hours:</b> Thursdays 2-4 pm
            </p>
          </div>
          <div className="row-area-small">
            <p>
              <b>Office Location:</b> Fitzpatrick 150M
            </p>
            <p>
              <b>Pronunciation:</b> TBA
            </p>
          </div>
        </article>
      </div>

      <article>
        <h2 className="heading">
          Course Description
        </h2>
        <p>
          In this class, students will learn about traditional and contemporary approaches to natural language processing (NLP), grounded in concepts from machine learning and linguistics. They will explore language modeling, parsing, machine translation, and text generation through hands-on coding assignments using Python and PyTorch. Over the course of the semester, students will work on a creative and substantive NLP project with intermediate milestones and presentations.
        </p>
      </article>
    </section>
  );
}

export default Overview;
