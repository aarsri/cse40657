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
              Graded Components
            </h2>

            <p>
              Unless otherwise indicated, all assignments are due at 5pm Eastern time.
            </p>
            
            <ul>
              <li>Participation: 15</li>
              <li>Homework: 150 (5x30)</li>
              <li>Project: 135 (15+30+15+45+30)</li>
              <li><b>Total:</b> 300</li>
            </ul>
          </article>

          <article>
            <h2 className="heading">
              Participation
            </h2>

            <p>
              Regular attendance and active participation are expected. This includes contributing to class discussions, responding to questions, and engaging with others respectfully. If you anticipate an absence, please notify the instructor in advance.
            </p>
          </article>

          <article>
            <h2 className="heading">
              Links
            </h2>
            <ul>
              <li><a href="https://edstem.org/us/join/r4Jt2w" target="_blank">Ed</a> (questions and discussion)</li>
              <li><a href="https://forms.gle/oPdEhmcgSmGMqUK29" target="_blank">Submission Tracker</a> (declaring late submissions)</li>
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
