import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

function parameterize(string) {
  return string.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-")
}

const DefaultInput = ({
  type,
  name,
  required,
  ...options
}) => (
  <Input
    id={parameterize(name)}
    type={type}
    name={name}
    placeholder={name}
    required={required}
    aria-label={name}
    {...options}
  />
)

const HorizontalField = ({
  label,
  type = 'text',
  name = 'Default Name',
  required = true,
  children,
  className,
  ...options
}) => {
  const default_input = (
    <DefaultInput name={name} required={required} type={type} {...options}/>
  )
  return (
    <FormGroup row className={className}>
      <Label for={parameterize(name)} sm={4}>{label ? label : name}{required ? '*' : ''}</Label>
      <Col sm={8}>
        {children ?  children : default_input}
      </Col>
    </FormGroup>
  )
}

const Checkbox = ({name, text, ...options}) => (
  <FormGroup check className="mb-2">
    <Label for={parameterize(name)} check>
      <Input id={parameterize(name)} type="checkbox" name={name} {...options}/>{' '}
      {text}
    </Label>
  </FormGroup>
)

const NormalField = ({
  label,
  name = 'Default Name',
  type = 'text',
  required = true,
  children,
  className,
  ...options
}) => {
  const label_text = typeof label !== 'undefined' ? label : name;
  const default_input = <DefaultInput type={type} name={name} required={required} {...options}/>
  const input = children == null ? default_input : children
  const asterix = required && (label != false)
  const labelIfPresent = label !== false ? (
    <Label for={parameterize(name)}>{label_text}{asterix ? '*' : ''}</Label>
  ) : ''
  return (
    <FormGroup className={className}>
      {labelIfPresent}
      {input}
    </FormGroup>
  )
}

const components = {
  horizontal: HorizontalField,
  normal: NormalField
}

const SelectOptions = ({options, name, defaultValue, required, ...opts}) => (
  <Input type="select" id={parameterize(name)} name={name} defaultValue={defaultValue} {...opts} required={required}>
    {options.map((option, i) => (
      <option key={i} value={option.value} disabled={option.disabled ? option.disabled : false}>
        {option.name ? option.name : option.value}
      </option>
    ))}
  </Input>
)

const Select = ({
  label,
  fieldType = 'horizontal',
  name = 'Default Name',
  required = true,
  options,
  defaultValue,
  ...opts
}) => {
  const Field = components[fieldType]
  let selectHash = options
  // can pass either simple array eg. [1, 2, 3]
  // or can pass array with objects [{name: 1, value: 1, disabled: true}, {name: 2, value: 2}]
  // if simple array, must be converted into objects
  if (Array.isArray(options) && options[0].constructor !== Object) {
    selectHash = options.map(option => {
      return {value: option}
    })
  }
  return (
    <Field label={label} name={name} required={required} {...opts}>
      {options ? <SelectOptions
        name={name}
        options={selectHash}
        defaultValue={defaultValue}
        required={required}
      /> : null}
    </Field>
  )
}

export {HorizontalField, NormalField, Checkbox, Select};
