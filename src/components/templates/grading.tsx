const Grading = () => {
  return (
    <section className="grading-container">
      <h1 className="section-heading">
        Grading Information
      </h1>

      <div className="row-area-big">
        <div className="row-area-small">
          <article>
            <h2 className="heading">
              Points Available
            </h2>

            <p>
              Unless otherwise indicated, assignments are due at 5pm Eastern time.
            </p>

            <p>
              Your work in this course consists of five homework assignments and a <a href="https://www3.nd.edu/~dchiang/teaching/nlp/2023/project.html" target="_blank">research project</a>.
            </p>
            <ul>
              <li>Participation - 47 x 10</li>
              <li>homework - 5 x 30</li>
              <li>project - 3 x 30 + 60</li>
              <li><b>Total:</b> 770</li>
            </ul>
          </article>

          <article>
            <h2 className="heading">
              Links Needed
            </h2>
            <ul>
              <li><a href="" target="_blank">Canvas</a> (for submitting project milestones and for receiving grades and solution sets)</li>
              <li><a href="" target="_blank">GitHub</a> (for submitting code)</li>
              <li><a href="" target="_blank">Campuswire</a> (for asking questions and discussion)</li>
            </ul>
          </article>
        </div>

        <div className="table">
          <div>
            <div>
              Letter Grade
            </div>
            <div>
              Points
            </div>
          </div>
          <div>
            <div>
              A
            </div>
            <div>
              280-300
            </div>
          </div>
          <div>
            <div>
              A-
            </div>
            <div>
              270-279
            </div>
          </div>
          <div>
            <div>
              B+
            </div>
            <div>
              260-269
            </div>
          </div>
          <div>
            <div>
              B
            </div>
            <div>
              250-259
            </div>
          </div>
          <div>
            <div>
              B-
            </div>
            <div>
              240-249
            </div>
          </div>
          <div>
            <div>
              C+
            </div>
            <div>
              230-239
            </div>
          </div>
          <div>
            <div>
              C
            </div>
            <div>
              220-229
            </div>
          </div>
          <div>
            <div>
              C-
            </div>
            <div>
              210-219
            </div>
          </div>
          <div>
            <div>
              D
            </div>
            <div>
              180-209
            </div>
          </div>
          <div>
            <div>
              F
            </div>
            <div>
              0-179
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Grading;