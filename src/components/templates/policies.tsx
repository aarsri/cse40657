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
            If an instructor sees behavior that is, in their judgement, academically dishonest, they are required to file
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
                Regular attendance and active participation are expected. This includes contributing to class discussions, responding to questions, and engaging with others respectfully. If you anticipate an absence, please notify the instructor in advance.
              </p>
            </article>

            <article>
              <h2 className="heading">
                Late Submission Policy
              </h2>

              <ul>
                <li><b>Excused Absences</b>: If you have a university-approved reason for missing a deadline (e.g., illnesses, conferences, athletics, interviews), you will receive an extension equal to the number of days missed, without penalty. You must notify the instructor via email and provide appropriate documentation.</li>
                <li><b>Late Days</b>: You have 3 late days to use throughout the semester for homework assignments only. Each late day extends the deadline by 24 hours without penalty. You must declare use of late days via the <a href="https://forms.gle/oPdEhmcgSmGMqUK29" target="_blank">submission tracker</a> by the original deadline, or the late day will not be counted. Late days may only be applied to homework assignments, not project milestones or presentations.</li>
                <li><b>Late Penalty</b>: Beyond any declared late days, a late penalty of 1.5 points (5%) per day will be applied.</li>
                <ul>
                  <li>You may submit work up to 10 days late before hitting the maximum deduction of 15 points (50%).</li>
                  <li>Submissions more than 10 days late will receive no more than 50% credit.</li>
                  <li>No work will be accepted after the final project deadline.</li>
                </ul>
                <li><b>Partial Submissions</b>: Each homework is divided into 3 parts. You may submit part of a homework on time and others later. This way, only the late parts will be penalized. However, each part may only be submitted once; resubmissions will not be accepted.</li>
                <ul>
                  <li>To make a partial submission, you must indicate this via the <a href="https://forms.gle/oPdEhmcgSmGMqUK29" target="_blank">submission tracker</a> form by the original deadline, or any unsubmitted parts will be marked as missing.</li>
                </ul>
                <li><b>Submission Tracker</b>: All activity related to late submissions (e.g., use of late days, partial submissions, or full late submissions) must be recorded via the <a href="https://forms.gle/oPdEhmcgSmGMqUK29" target="_blank">submission tracker</a> form. This ensures the instructor knows your intentions and can grade your work accordingly and in a timely manner.</li>
              </ul>
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
                distributed privately should not be redistributed in any way; doing so is a
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
