import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import HoleList from '../hole/HoleList';
import {holesArraySelectorById} from '../../selectors/holeSelector';

export class HoleForm extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      holesVisible: false
    };

    this.toggleHoles = this.toggleHoles.bind(this);
    this.renderSubmitButton = this.renderSubmitButton.bind(this);
  }

  toggleHoles(event) {
    event.preventDefault();

    this.setState({
      holesVisible: !this.state.holesVisible
    });
  }

  renderSubmitButton(value) {
    return (<input
      type="submit"
      disabled={false}
      value={value}
      className="btn btn-primary"
      onClick={this.toggleHoles}/>)
  }

  render() {
    const {holes, onSave, onChange, saving, errors} = this.props;

    if (!this.state.holesVisible) {
      return (
        <div>{this.renderSubmitButton(holes.length)}</div>
      );
    } else {
      return (
        <div>
          {this.renderSubmitButton("Hide")}
          <HoleList holes={holes} onChange={onChange}/>
        </div>
      );
    }
  }
}

HoleForm.propTypes = {
  holes: PropTypes.array.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default HoleForm;
