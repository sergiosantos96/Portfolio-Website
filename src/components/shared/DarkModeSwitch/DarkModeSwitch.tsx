import React from "react";
import Switch from "react-switch";

import "./DarkModeSwitch.scss";

interface SwitchState {
  checked: boolean;
}

export class DarkModeSwitch extends React.Component<object, SwitchState> {
  constructor(props: SwitchState) {
    super(props);
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked: boolean) {
    this.setState({ checked });
  }

  render() {
    return (
      <label className="darkmode">
        <Switch onChange={this.handleChange} checked={this.state.checked} />
      </label>
    );
  }
}
