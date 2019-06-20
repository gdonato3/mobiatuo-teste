import * as React from "react";

class SelectComponent extends React.Component {
  constructor() {
      super();
      this.state = {
          brandData: [],
          modelsData: [],
          yearsData: [],
          selectedBrand: '',
          selectedModel: '',
          selectedYear: '',
          vehicleData: {}
      };
  }
  getBrand() {
    var self = this;

    self.props.data.checkLoading(true);

    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas")
    .then((response) => response.json())
    .then((responseJson) => {
      self.props.data.checkLoading(false);
      
      self.setState({
        brandData: responseJson
      })
    })
    .catch((error) => {
        console.error(error);
    });
  }

  getModels(e) {
    var self = this;
    
    self.props.data.checkLoading(true);

    self.setState({
      selectedBrand: e.target.value
    })
    
    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/"+e.target.value+"/modelos")
    .then((response) => response.json())
    .then((responseJson) => {

      self.props.data.checkLoading(false);

      self.setState({
        modelsData: responseJson.modelos
      })
    })
    .catch((error) => {
        console.error(error);
    });
  }

  getYears(e){
    var self = this;
    
    self.props.data.checkLoading(true);

    self.setState({
      selectedModel: e.target.value
    })
    // console.log('Marca ' + self.state.selectedBrand, 'Modelo ' + self.state.selectedModel)

    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/"+self.state.selectedBrand+"/modelos/" + e.target.value +"/anos")
    .then((response) => response.json())
    .then((responseJson) => {
      
      self.props.data.checkLoading(false);

      self.setState({
        yearsData: responseJson
      })
    })
    .catch((error) => {
        console.error(error);
    });

    // self.props.data.setData({title: "ROGERIO RULEZ"})
  }
  
  getVehicleData(e){
    var self = this;

    self.props.data.checkLoading(true);
    // console.log('Marca ' + self.state.selectedBrand, 'Modelo ' + self.state.selectedModel)

    fetch("https://parallelum.com.br/fipe/api/v1/carros/marcas/"+self.state.selectedBrand+"/modelos/" + self.state.selectedModel +"/anos/" + e.target.value)
    .then((response) => response.json())
    .then((responseJson) => {      
      self.props.data.checkLoading(false);
      
      self.props.data.setData(responseJson)
    })
    .catch((error) => {
        console.error(error);
    });
    
  }
  componentDidMount() {
    this.getBrand();
  }

  render() {
    var self = this;

    let brandData = self.state.brandData;
    let brandOptions = brandData.map((d) =>    
      <option key={d.codigo} value={d.codigo}>{d.nome}</option>
    )

    let modelsData = self.state.modelsData;
    let modelsOptions = modelsData.map((d) =>    
      <option key={d.codigo} value={d.codigo}>{d.nome}</option>
    )

    let yearsData = self.state.yearsData;
    let yearsOptions = yearsData.map((d) =>    
      <option key={d.codigo} value={d.codigo}>{d.nome}</option>
    )

    return (
      <React.Fragment>
        <div className="col">
          <label><b>Escolha a Marca</b></label>
          <select value={this.state.selectedBrand} onChange={self.getModels.bind(self)} className="form-control">
            <option value="" disabled>Selecione...</option>
            {brandOptions}
          </select>
        </div>
        <div className="col">
          <label><b>Escolha o Modelo</b></label>
          <select value={this.state.selectedModel} onChange={self.getYears.bind(self)} className="form-control">
            <option value="" disabled>{modelsOptions.length > 0 ? 'Selecione...' : 'Escolha uma marca'}</option>
            {modelsOptions}
          </select>
        </div>
        <div className="col">
          <label><b>Escolha o Ano</b></label>
          <select value={this.state.selectedYear} onChange={self.getVehicleData.bind(self)} className="form-control">
            <option value="" disabled>{yearsOptions.length > 0 ? 'Selecione...' : 'Escolha um modelo'}</option>
            {yearsOptions}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default SelectComponent;
