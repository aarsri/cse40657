
import Grading from "../templates/grading";
import Overview from "../templates/overview";
import Policies from "../templates/policies";
import Schedule from "../templates/schedule";

const Content = () => {
  return (
    <>
      <Overview />
      <Schedule />
      <Grading />
      <Policies />
    </>
  )
}

export default Content;