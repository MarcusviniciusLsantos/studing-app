import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group row">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm" />
          </div>
        </div>
        <div classNameName="form-group row">
          <label for="colFormLabel" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="colFormLabel" placeholder="col-form-label" />
          </div>
        </div>
        <div className="form-group row">
          <label for="colFormLabelLg" className="col-sm-2 col-form-label col-form-label-lg">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control form-control-lg" id="colFormLabelLg" placeholder="col-form-label-lg" />
          </div>
        </div>
      </form>
    )
  }
}