# reactstrap-form-fields
Shorten (and improve) your [reactstrap](https://github.com/reactstrap/reactstrap) form fields!

#### HorizontalField Example
```js
import React from 'react'
import {HorizontalField} from 'reactstrap-form-fields'

export default () => (
  <HorizontalField name="Full Name"/>
)
```

Instead of this:

```js
import React from 'react'
import {Container, FormGroup, Label, Col, Input} from 'reactstrap'

export default () => (
  <FormGroup row>
    <Label for="full-name" sm={4}>Full Name</Label>
    <Col sm={8}>
      <Input id="full-name" type="text" name="Full Name" placeholder="Full Name" aria-label="Full Name" required={true}/>
    </Col>
  </FormGroup>
)
```

## Installation

```bash
npm i reactstrap-form-fields
```

### Options and defaults

##### NormalField Default Props
```js
label,
name: 'Default Name', // used to generate id on <input/> and for on <label/>
type: 'text',
required: true,
children,  // replaces <input/>
className, // on <FormGroup/>
...options // passed to <input/>
```


##### HorizontalField Default Props
```js
label,
type: 'text',
name: 'Default Name', // used to generate id on <input/> and for on <label/>
required: true,
children,  // replaces <input/>
className, // on <FormGroup/>
...options // passed to <input/>
```

##### Checkbox Default Props
```js
name: 'Default Name', // used to generate id on <input/> and for on <label/>
text,
...options // passed to <input/>
```

##### Select Default Props
```js
label,
fieldType = 'horizontal',
name = 'Default Name',
required= true,
options, // passed as JSON array or hash eg. [{value: 1, name: 'One'}] or [1, 2, 3]
defaultValue,
...options
```

#### Contribute to this repository
* After making change run `npm run build` to rebuild
