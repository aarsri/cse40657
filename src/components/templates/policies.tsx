const Policies = () => {
  return (
    <section className="policy-container">
      <h1 className="section-heading">
        Policies
      </h1>

      <div className="row-area-big">
        <article>
          <h2 className="heading">
            Honor Code
          </h2>

          <p>
            Students in this course are expected to abide by the Academic Code of Honor Pledge:
            “As a member of the Notre Dame community, I will not participate in or tolerate academic dishonesty.”
          </p>

          <p>
            The following table summarizes how you may work with other students and use print/online sources:
          </p>

          <div>
            <div>
              <div></div>
              <div>Resources</div>
              <div>Solutions</div>
            </div>

            <div>
              <div>Consulting</div>
              <div style={{ 'backgroundColor': "#ACE1AF" }}>Allowed</div>
              <div style={{ 'backgroundColor': "#CD5C5C" }}>Not Allowed</div>
            </div>

            <div>
              <div>Copying</div>
              <div style={{ 'backgroundColor': "#FFD700" }}>Cite</div>
              <div style={{ 'backgroundColor': "#CD5C5C" }}>Not Allowed</div>
            </div>
          </div>

          <p>
            See the <a href="https://cse.nd.edu/undergraduate/cse-guide-to-the-honor-code/" target="_blank">CSE Guide to the Honor Code</a> for definitions of the above terms.
          </p>

          <p>
            If an instructor sees behavior that is, in his judgement, academically dishonest, he is required to file
            either an Honor Code Violation Report or a formal report to the College of Engineering Honesty Committee.
          </p>
        </article>

        <div>
          <div className="row-area-small">
            <article>
              <h2 className="heading">
                Participation
              </h2>

              <p>
                Students are expected to attend and contribute regularly in class. This means answering questions in class,
                participating in discussions, and helping other students.
              </p>

              <p>
                Foreseeable absences should be discussed with the instructor ahead of time.
              </p>
            </article>

            <article>
              <h2 className="heading">
                Late Submission
              </h2>

              <p>
                For university-excused absences (e.g., documented illness, travel for athletics or a job interview),
                coursework submissions will be accepted late by the same number of days as the excused absence. Otherwise,
                you may submit part of an assignment on time for full credit and part of the assignment late for a penalty.
                No part of the assigment may be submitted more than once. The late penalty increases by 5% per day and stops
                increasing when it reaches 50%; thereafter, it remains at 50% until the final project due date, after which
                no work may be submitted.
              </p>
            </article>
          </div>

          <div className="row-area-small">
            <article>
              <h2 className="heading">
                Copyright
              </h2>

              <p>
                All course materials written by the instructor and published on this website are licensed under
                a <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank">Creative Commons
                  Attribution 4.0 International License</a>.
              </p>

              <p>
                All other course materials, including lecture recordings and materials written by the instructor and
                distributed privately (including through Sakai) should not be redistributed in any way; doing so is a
                violation of both US copyright law and the University of Notre Dame Honor Code.
              </p>
            </article>

            <article>
              <h2 className="heading">
                Students with Disabilities
              </h2>

              <p>
                Any student who has a documented disability and is registered with Disability Services should speak with the
                professor as soon as possible regarding accommodations. Students who are not registered should contact the
                Office of Disability Services.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Policies;