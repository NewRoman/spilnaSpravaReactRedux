import React from 'react';
import { Field } from 'redux-form';

import Text from './text';

export const FormComponent = ({ handleSubmit, onSubmit, columnsOfTable,  }) => {

  return (
      <form
        className=""
        onSubmit={handleSubmit(onSubmit)}
      >
        {
          Object.keys(columnsOfTable).map((elem, i) => {
       
            return (
              <Field
                key={ i }
                name={ elem }
                label={ columnsOfTable[elem].alias }
                component={Text}
                // meta={ meta }
              />
            )
          })
        }
        
        <button
          type="submit"
          className="btn form-submit"
        >
          Add user
        </button>
      </form>
  );
}

export default FormComponent;