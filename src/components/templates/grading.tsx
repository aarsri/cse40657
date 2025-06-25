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
              <li>Participation: 10</li>
              <ul>
                <li>This is a test</li>
              </ul>
              <li>Homework: 150 (5x30)</li>
              <li>Project: 140 (20+25+30+40+25)</li>
              <li><b>Total:</b> 300</li>
            </ul>
          </article>

          <article>
            <h2 className="heading">
              Links
            </h2>
            <ul>
              <li><a href="" target="_blank">Canvas</a> (project milestone submissions, grades)</li>
              <li><a href="" target="_blank">GitHub</a> (coding homework submissions)</li>
              <li><a href="" target="_blank">Ed</a> (questions and discussion)</li>
              <li><a href="" target="_blank">Submission Tracker</a> (declaring late submissions)</li>
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
