import * as React from "react";
import {observer} from 'mobx-react'

class LoadingComponent extends React.Component {
  constructor() {
      super();
  }

  render() {
    return (
        <React.Fragment>         
            <div className="spinner-border text-info mt-3" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </React.Fragment>
      );
  }
}

export default LoadingComponent;