# reactstrap-form-fields
Shorten your (https://github.com/reactstrap/reactstrap)[reactstrap] form fields! 

#### Horizontal Field Example
```js
import React from 'react'
import {HorizontalField} from 'reactstrap-form-fields'

const Form = () => (
  <HorizontalField label="Full Name" name="Full Name" required={true} type="text"/>
)

export default Form
```

Instead of this: 

```js
import React from 'react'
import {Container, FormGroup, Label, Col, Input} from 'reactstrap'

const Form = () => (
  <FormGroup row>
    <Label for="Full Name" sm={4}>Full Name</Label>
    <Col sm={8}>
    <Input id="full-name" type="text" name="Full Name" placeholder="Full Name" required={true}/>
    </Col>
  </FormGroup>
)

export default Form
```

#### Options and defaults

##### NormalField Default Properties
```js
label,
name: "Default Name', // used to generate id on <input/> and for on <label/>
type: 'text',
required: true, 
children,  // replaces <input/>
className, // on <FormGroup/>
...options // passed to <input/>
```
