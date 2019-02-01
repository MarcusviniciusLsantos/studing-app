import React from 'react'
import './form.css'

export default class Form extends React.Component {

  state = {
    name: "",
    dynamicInputTopic: [{ name: "" }],
    colorForm: "light",
    colorText: "black",
    colorSecondary: "primary",
    colorTertiary: "danger"
  };


  handleNameChange = evt => {
    this.setState({ name: evt.target.value });
  };

  handleDynamicInputTopicNameChange = (id, evt) => {
    const newdynamicInputTopic = this.state.dynamicInputTopic.map((objeto, key) => {
      if (id !== key) return objeto;
      return { ...objeto, name: evt.target.value };
    });

    this.setState({ dynamicInputTopic: newdynamicInputTopic });
  };

  handleSubmit = evt => {
    const { name, dynamicInputTopic } = this.state;
    alert(`Incorporated: ${name} with ${dynamicInputTopic.length} dynamicInputTopic`);
  };

  handleAddDynamicInputTopic = () => {
    this.setState({
      dynamicInputTopic: this.state.dynamicInputTopic.concat([{ name: "" }])
    });
  };

  handleRemoveDynamicInputTopic = id => () => {
    this.setState({
      dynamicInputTopic: this.state.dynamicInputTopic.filter((s, sid) => id !== sid)
    });
  };

  render() {
    return (
      <div className={`card form text-${this.state.colorText} bg-${this.state.colorForm} mb-4 mx-3`}>
        <form onSubmit={this.props.showButtonForm} >
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault01">Tema</label>
              <input type="text" className="form-control" id="validationDefault01" placeholder="Tema" required />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault02">Assunto</label>
              <input type="text" className="form-control" id="validationDefault02" placeholder="Assunto" required />
            </div>
            <div className="col-md-12 mb-3">
              <label htmlFor="FormControlResumo">Resumo</label>
              <textarea className="form-control" id="FormControlResumo" rows="3" placeholder="Sobre o assunto"></textarea>
            </div>
          </div>
          <div className="form-row select-color">
            <input type="button" className="btn btn-light color-card"
              onClick={() => this.setState({
                colorForm: 'light', colorText: 'black',
                colorSecondary: 'primary', colorTertiary: 'danger'
              })} ></input>
            <input type="button" className="btn btn-secondary color-card"
              onClick={() => this.setState({
                colorForm: 'secondary', colorText: 'white',
                colorSecondary: 'primary', colorTertiary: 'danger'
              })}></input>
            <input type="button" className="btn btn-success color-card"
              onClick={() => this.setState({
                colorForm: 'success', colorText: 'white',
                colorSecondary: 'primary', colorTertiary: 'danger'
              })}></input>
            <input type="button" className="btn btn-warning color-card"
              onClick={() => this.setState({
                colorForm: 'warning', colorText: 'white',
                colorSecondary: 'primary', colorTertiary: 'danger'
              })}></input>
            <input type="button" className="btn btn-info color-card"
              onClick={() => this.setState({
                colorForm: 'info', colorText: 'white',
                colorSecondary: 'primary', colorTertiary: 'danger'
              })}></input>
            <input type="button" className="btn btn-dark color-card"
              onClick={() => this.setState({
                colorForm: 'dark', colorText: 'white',
                colorSecondary: 'primary', colorTertiary: 'danger'
              })}></input>
            <input type="button" className="btn btn-danger color-card"
              onClick={() => this.setState({
                colorForm: 'danger', colorText: 'white',
                colorSecondary: 'primary', colorTertiary: 'warning'
              })}></input>
            <input type="button" className="btn btn-primary color-card"
              onClick={() =>
                this.setState({
                  colorForm: 'primary', colorText: 'white',
                  colorSecondary: 'info', colorTertiary: 'danger'
                })}></input>
          </div>
          <br />
          {this.state.dynamicInputTopic.map((DynamicInputTopic, id) => (
            <div className="form-row" key={id}>
              <div className="col-md-10 mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder={`Topico ${id + 1}`}
                  value={DynamicInputTopic.name}
                  onChange={(event) => this.handleDynamicInputTopicNameChange(id, event)}
                />
              </div>
              <div className="col-md-2 mb-3">
                <button
                  type="button"
                  onClick={this.handleAddDynamicInputTopic}
                  className={`btn btn-${this.state.colorSecondary}`}
                >
                  &nbsp;+&nbsp;
             </button>
                &nbsp;
              <button
                  type="button"
                  onClick={id === 0 ? this.handleRemoveDynamicInputTopic(id + 1) : this.handleRemoveDynamicInputTopic(id)}
                  className={`btn btn-${this.state.colorTertiary}`}
                >
                  &nbsp;-&nbsp;
            </button>
              </div>
            </div>
          ))}
          <input className={`btn btn-${this.state.colorSecondary}`} type="submit" value="Submit" />
          &nbsp;
          <button className={`btn btn-${this.state.colorTertiary}`}
            onClick={this.props.showButtonForm}> Cancelar</button>
        </form>
      </div>
    )
  }
}