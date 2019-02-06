import React from 'react'
import fire from '../../../config/firebase';
import './form.css'

export default class Form extends React.Component {

  state = {
    topic: "",
    dynamicInputTopic: [{ topic: "" }],
    colorForm: "light",
    colorText: "black",
    colorSecondary: "primary",
    colorTertiary: "danger",
    theme: "",
    subjectMatter: "",
    summary: "",
    arrayColor: ['light', 'secondary', 'success', 'warning', 'info', 'dark', 'danger', 'primary'],
    user_name: "vini",
    user_uid: "vini",
    id: ''
  };

  // static getDerivedStateFromProps(props, state) {
  //   console.log('GET DERIVED STATE FROM PROPS ->', props, ' state ->', state)
  //   console.log(' props ->>>>>>>>', props.cardForm)
  //   Object.entries(props.cardForm).map(item => {
  //     console.log('items [0]', item[0])
  //     // if (item[0] === 'topic') {
  //     //   this.setState({ dynamicInputTopic: [item[1]] })
  //     // }


  //   })
  // }

  async componentDidMount() {
    console.log('DID MOUNT')
    const obj = this.props.cardForm || {}

    await Object.entries(obj).map(item => {
      if (item[0] === 'topic') {
        const array = []
        item[1].map((input, index) => {
          array.push(input)
        })
        console.log('array ->', array)
        this.setState({ dynamicInputTopic: array })
      } else {
        this.setState({ [item[0]]: item[1] })
      }

    })
    await console.log('this state', this.state)

  }//falta terminar

  handleDynamicInputTopicNameChange = (id, evt) => {
    const newdynamicInputTopic = this.state.dynamicInputTopic.map((objeto, key) => {
      if (id !== key) return objeto;
      return { ...objeto, topic: evt.target.value };
    });

    this.setState({ dynamicInputTopic: newdynamicInputTopic });
  };

  handleAddDynamicInputTopic = () => {
    this.setState({
      dynamicInputTopic: this.state.dynamicInputTopic.concat([{ topic: "" }])
    });
  };

  handleRemoveDynamicInputTopic = id => () => {
    this.setState({
      dynamicInputTopic: this.state.dynamicInputTopic.filter((s, sid) => id !== sid)
    });
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value })
    console.log('onChange =>', name, '--- >', value)
  };

  handleChangeColorCard = (color) => {
    if (color === "light") {
      this.setState({
        colorForm: 'light', colorText: 'black',
        colorSecondary: 'primary', colorTertiary: 'danger'
      })
    } else if (color === "secondary") {
      this.setState({
        colorForm: 'secondary', colorText: 'white',
        colorSecondary: 'primary', colorTertiary: 'danger'
      })
    } else if (color === "success") {
      this.setState({
        colorForm: 'success', colorText: 'white',
        colorSecondary: 'primary', colorTertiary: 'danger'
      })
    } else if (color === "warning") {
      this.setState({
        colorForm: 'warning', colorText: 'black',
        colorSecondary: 'primary', colorTertiary: 'danger'
      })
    } else if (color === "info") {
      this.setState({
        colorForm: 'info', colorText: 'white',
        colorSecondary: 'primary', colorTertiary: 'danger'
      })
    } else if (color === "dark") {
      this.setState({
        colorForm: 'dark', colorText: 'white',
        colorSecondary: 'primary', colorTertiary: 'danger'
      })
    } else if (color === "danger") {
      this.setState({
        colorForm: 'danger', colorText: 'white',
        colorSecondary: 'primary', colorTertiary: 'warning'
      })
    } else if (color === "primary") {
      this.setState({
        colorForm: 'primary', colorText: 'white',
        colorSecondary: 'info', colorTertiary: 'danger'
      })
    }
  }

  handleSubmit = (event) => {
    const {
      theme,
      subjectMatter,
      summary,
      dynamicInputTopic,
      colorForm,
      colorText,
      colorSecondary,
      colorTertiary,
      user_name,
      user_uid
    } = this.state

    event.preventDefault();
    const topic = dynamicInputTopic

    const card = {
      user_name,
      user_uid,
      theme,
      subjectMatter,
      summary,
      topic,
      colorForm,
      colorText,
      colorSecondary,
      colorTertiary
    }
    fire.db.collection("cards").add(card).then((res) => {
      console.log('inserting data card', res)
    }).catch((err) => {
      console.log('error inserting data card', err)
    })
  }

  handleUpdate = () => {
    const {
      theme,
      subjectMatter,
      summary,
      dynamicInputTopic,
      colorForm,
      colorText,
      colorSecondary,
      colorTertiary,
      user_name,
      user_uid,
      id
    } = this.state

    const topic = dynamicInputTopic

    const newCard = {
      user_name,
      user_uid,
      theme,
      subjectMatter,
      summary,
      topic,
      colorForm,
      colorText,
      colorSecondary,
      colorTertiary
    }

    fire.db.collection("cards").doc(id).update(newCard)
      .then(() => {
        console.log("Document successfully updated!");
      }).catch((err) => console.log('error updated', err))

  }

  render() {
    return (
      <div className={`card form text-${this.state.colorText} bg-${this.state.colorForm} mb-4 mx-3`}>
        <form onSubmit={this.handleSubmit} >
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault01">Theme</label>
              <input type="text" className="form-control" id="validationDefault01" placeholder="Theme" required value={this.state.theme} onChange={this.handleInputChange} name="theme" />
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="validationDefault02">Subject matter</label>
              <input type="text" className="form-control" id="validationDefault02" placeholder="Subject matter" required value={this.state.subjectMatter} onChange={this.handleInputChange} name="subjectMatter" />
            </div>
            <div className="col-md-12 mb-3">
              <label htmlFor="FormControlsummary">Summary</label>
              <textarea className="form-control" id="FormControlsummary" rows="3" placeholder="About the summary" value={this.state.summary} onChange={this.handleInputChange} name="summary"></textarea>
            </div>
          </div>
          <div className="form-row select-color">
            {this.state.arrayColor.map((item, index) => {
              return <input key={index} type="button" className={`btn btn-${item} color-card`}
                onClick={() => this.handleChangeColorCard(item)} />
            })}
          </div>
          <br />
          {this.state.dynamicInputTopic.map((DynamicInputTopic, id) => (
            <div className="form-row" key={id}>
              <div className="col-md-10 mb-3">
                <input
                  className="form-control"
                  type="text"
                  placeholder={`Topic ${id + 1}`}
                  value={DynamicInputTopic.topic}
                  onChange={(event) => this.handleDynamicInputTopicNameChange(id, event)}
                />
                {console.log('simbora', DynamicInputTopic, id)}
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
          {!this.props.buttonUpdate ?
            <input className={`btn btn-${this.state.colorSecondary}`} type="submit" value="Submit" />
            :
            <input className={`btn btn-${this.state.colorSecondary}`} type="button" value="Update"
              onClick={this.handleUpdate} />
          }
          &nbsp;
          <button className={`btn btn-${this.state.colorTertiary}`}
            onClick={this.props.showButtonForm}> Cancel </button>
        </form>
      </div>
    )
  }
}