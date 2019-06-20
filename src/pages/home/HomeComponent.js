import * as React from "react";
import SelectComponent from "./components/SelectComponent";
import store from "../../store/DataStore";
import CardComponent from "./components/CardComponent";
import LoadingComponent from "./components/LoadingComponent";
import {observer} from 'mobx-react'

const home = observer(class HomeComponent extends React.Component {
  render() {
    const { welcome } = this.props;
    var isLoading = store.isLoading ? <LoadingComponent></LoadingComponent> : <br/>

    return (
      <React.Fragment>
        {/* <h2 className="text-danger">{welcome}</h2> */}
        <div className="container text-center pt-5">
          <div className="row">
            <SelectComponent data={store}></SelectComponent>
          </div>
          <span className="text-muted"><i>Selecione as opções acima para filtrar</i></span>
          <br/>
          {isLoading}
          <CardComponent data={store}></CardComponent>
        </div>
      </React.Fragment>
    );
  }
})

export default home;
