import React from 'react'
import './index.css'

export default class Form extends React.Component {

  state = {
    name: "",
    dynamicInputTopic: [{ name: "" }]
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
      <form onSubmit={this.props.showButtonForm}>
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
        <div className="form-row">
        <label htmlFor="FormControlResumo">&nbsp; Selecione a cor do seu cartão: &nbsp;</label>
        <button type="button" class="btn btn-primary Test" ></button>
        &nbsp;
        <button type="button" class="btn btn-secondary Test"></button>
        &nbsp;
        <button type="button" class="btn btn-success Test"></button>
        &nbsp;
        <button type="button" class="btn btn-danger Test"></button>
        &nbsp;
        <button type="button" class="btn btn-warning Test"></button>
        &nbsp;
        <button type="button" class="btn btn-info Test"></button>
        &nbsp;
        <button type="button" class="btn btn-light Test"></button>
        &nbsp;
        <button type="button" class="btn btn-dark Test"></button>
        {/* <div className="btn btn-warning Test"></div> */}

        </div>
        <br/>
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
                className="btn btn-primary"
              >
                &nbsp;+&nbsp;
             </button>
              &nbsp;
              <button
                type="button"
                onClick={id === 0 ? this.handleRemoveDynamicInputTopic(id + 1) : this.handleRemoveDynamicInputTopic(id)}
                className="btn btn-danger"
              >
                &nbsp;-&nbsp;
            </button>
            </div>
          </div>
        ))}
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    )
  }
}