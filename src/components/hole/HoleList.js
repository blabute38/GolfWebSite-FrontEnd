import React, {PropTypes} from 'react';
import HoleListRow from './HoleListRow';

const HoleList = ({holes, onChange}) => {
  // TODO: fix this so that it is not repeated code
  let frontNine = holes.slice(0, 9);
  let backNine = holes.slice(9, 18);
  let frontNineTable;
  let backNineTable;

  if (frontNine)
    frontNineTable = (
      <div>
        <h4>Front 9</h4>
        <table className="table">
          <tbody>
            <tr>
              <th>Hole</th>
              {frontNine.map(hole => <td key={hole.id}>{hole.number}</td>)}
            </tr>
            <tr>
              <th>Par</th>
              {frontNine.map((hole, index) => <HoleListRow key={hole.id} value={hole.par} onChange={onChange} name={"par-" + index.toString()}/>)}
            </tr>
            <tr>
              <th>Handicap Strokes</th>
              {frontNine.map((hole, index) => <HoleListRow
                key={hole.id}
                value={hole.handicapMen}
                onChange={onChange}
                name={"handicapMen-" + index.toString()}/>)}
            </tr>
          </tbody>
        </table>
      </div>
    );

  if (backNine)
    backNineTable = (
      <div>
        <h4>Back 9</h4>
        <table className="table">
          <tbody>
            <tr>
              <th>Hole</th>
              {backNine.map(hole => <td key={hole.id}>{hole.number}</td>)}
            </tr>
            <tr>
              <th>Par</th>
              {backNine.map((hole, index) => <HoleListRow onChange={onChange} key={hole.id} value={hole.par} name={"par-" + index.toString()}/>)}
            </tr>
            <tr>
              <th>Handicap Strokes</th>
              {backNine.map((hole, index) => <HoleListRow
                key={hole.id}
                value={hole.handicapMen}
                onChange={onChange}
                name={"handicapMen-" + index.toString()}/>)}
            </tr>
          </tbody>
        </table>
      </div>
    );

  return (
    <div>
      {frontNineTable}
      {backNineTable}
    </div>
  )
}

HoleList.propTypes = {
  holes: PropTypes.array.isRequired,
  onChange: PropTypes.func
}

export default HoleList;
