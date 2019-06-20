import * as React from "react";
import {observer} from 'mobx-react'

const card = observer(class CardComponent extends React.Component {
  constructor() {
      super();
      this.state = {
      };
  }

  render() {
    var self = this;
    
    if(!self.props.data.mainData)
        return <h5 className="mt-4">Sem dados para exibir</h5>
    debugger
    return (
        <React.Fragment>
            <div className="card shadow text-left">
                <div className="card-body">
                    <h5 className="card-title float-right">{self.props.data.mainData.Valor}</h5>
                    <h5 className="card-text">{self.props.data.mainData.Modelo}</h5>
                    <h6 className="card-subtitle mb-2 text-muted float-left">{self.props.data.mainData.Marca}</h6>
                    <br/>
                    <div className="row mt-3">
                        <div className="col">
                            <p><b>Ano Modelo: </b> {self.props.data.mainData.AnoModelo}</p>
                            <p><b>Combustivel: </b> {self.props.data.mainData.Combustivel}</p>
                            <p><b>Codigo Fipe: </b> {self.props.data.mainData.CodigoFipe}</p>
                            <p><b>Mês Referencia: </b> {self.props.data.mainData.MesReferencia}</p>
                            <p><b>Tipo do Veiculo: </b> {self.props.data.mainData.TipoVeiculo}</p>
                            <p><b>Sigla do Combustível: {self.props.data.mainData.SiglaCombustivel}</b> </p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
      );
  }
})

export default card;