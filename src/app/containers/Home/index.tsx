import * as React from 'react';
const s = require('./style.css');

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={s.home}>
        <img src={require('./bears_dot_js_logo.jpg')} />
        <p>Hello!</p>
      </div>
    );
  }
}

export { Home }
