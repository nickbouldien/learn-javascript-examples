import React, { Component } from 'react';

class ValidatedInput extends Component {
  constructor(props){
    super(props)
    this.state={
      type: props.type || 'text'
    }
  }
  render() {
    return (
      <div className={`form-group ${this.props.errors && 'has-error'}`}>
        <label 
          htmlFor={this.props.name}
          className='control-label'
        >
          {this.props.label}
        </label>
        <input
          type={this.state.type}
          name={this.props.name}
          value={this.props.value}
          onChange={this.props.onChange}
          className='form-control'
        />
      </div>
    );
  }
}

export default ValidatedInput;
