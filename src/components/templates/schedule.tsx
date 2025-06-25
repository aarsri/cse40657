import scheduleInfo from '../../env/json/schedule.json';
import type { JSX } from 'react/jsx-runtime';

const getFlexDirection = (content: {link: string; description: string; badgeColor: string;}[]) => {
  if (typeof content !== 'object') return '';
  if (content.length < 1) return '';
  return typeof content[0].link !== 'undefined' ? 'full' : '';
}

const generateContent = (content: {link: string; description: string; badgeColor: string;}[]) => {
  if (typeof content !== 'object') return [
    <div className='empty'>
      {content}
    </div>
  ];

  let jsxObjects: JSX.Element[] = [];

  content.forEach((info: { link: string; description: string; badgeColor: string;}) => {
    if (typeof info.link === 'undefined') {
      jsxObjects.push(
        <div className='empty'>
          {info.description}
        </div>
      );
    } else {
      jsxObjects.push(
        <a className='pill-link' style={{'backgroundColor': info.badgeColor || '#fff', "borderColor": info.badgeColor || '#fff'}} target="_blank" href={info.link}>{info.description}</a>
      );
    }
  });

  return jsxObjects;
}

const Schedule = () => {

  let display: JSX.Element[] = [];
  for (let row in scheduleInfo) {
    let cells: JSX.Element[] = [];

    for (let col in scheduleInfo[row as keyof typeof scheduleInfo]) {
      const rowInfo = scheduleInfo[row as keyof typeof scheduleInfo]
      const flexDirection = getFlexDirection(rowInfo[col as keyof typeof rowInfo]);
      const cellData = generateContent(rowInfo[col as keyof typeof rowInfo]);

      if (col === 'resources' || col === 'assignments') {
        cells.push(
          <div id={row + "-" + col + 'heading'} className={`show-small`}>
            <div className='empty heading'>
              {col === 'resources' ? 'Resources:' : 'Assignment Due:'}
            </div>
          </div>
        );
      }

      cells.push(
        <div id={row + "-" + col} className={`${flexDirection}${col === 'holiday' ? ' attention' : ''}`}>
          {...cellData}
        </div>
      );
    }

    display.push(
      <div className='row-area'>
        {...cells}
      </div>
    );
  }

  return (
    <section>
      <div className="section-heading">
        Tentative Schedule
      </div>

      <div className="schedule-container">
        <div className="row-area show-big">
          <div className="attention">
            <div className='empty heading'>
              Week
            </div>
          </div>
          <div className="attention">
            <div className='empty heading'>
              Topic
            </div>
          </div>
          <div className="attention">
            <div className='empty heading'>
              Resources
            </div>
          </div>
          <div className="attention">
            <div className='empty heading'>
              Assignments Due
            </div>
          </div>
        </div>
        {...display}
      </div>
    </section>
  );
}

export default Schedule;