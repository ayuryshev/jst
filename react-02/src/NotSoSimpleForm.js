import React from 'react'
import {Field, reduxForm} from 'redux-form'
import TextField from 'material-ui/TextField'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
)

const NotSoSimpleForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name</label>
          <div>
            <TextField
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
        </div>
        <div>
          <label>Last Name</label>
          <div>
            <TextField
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div>
          <label>Email</label>
          <div>
            <TextField
              name="email"
              component="input"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>

        <div>
          <label>Favorite Color</label>
          <div>
            <Field name="favoriteColor" component="select">
              <option />
              <option value="ff0000">Red</option>
              <option value="00ff00">Green</option>
              <option value="0000ff">Blue</option>
            </Field>
          </div>
        </div>
        <div>
          <label htmlFor="employed">Employed</label>
          <div>
            <Field
              name="employed"
              id="employed"
              component="input"
              type="checkbox"
            />
          </div>
        </div>
        <div>
          <label>Notes</label>
          <div>
            <Field name="notes" component="textarea" />
          </div>
        </div>
        <div>
          <label>Created</label>
          <div>
            <Field name="created" component="datepicker" />
          </div>
        </div>
        <div>
          <button type="submit" disabled={pristine || submitting}>
            Submit
          </button>
          <button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    )
  }
  
  export default reduxForm({
    form: 'simple' // a unique identifier for this form
  })(NotSoSimpleForm)
  