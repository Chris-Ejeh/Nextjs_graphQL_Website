import { useEffect, useState } from 'react';

export default function useForm(initial = {}) {
  // create a state object for inputs
  const [inputs, setInput] = useState(initial);
  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    // This function runs when the things we are watching change
    setInput(initial);
  }, [initialValues]);

  // state isd an object
  // {
  //   name: 'Chris',
  //   description: ' Nice House',
  //   price: 1000
  // }

  function handleChange(e) {
    let { value, name, type } = e.target;

    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }

    setInput({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInput(initial);
  }

  function clearForm() {
    const blackState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInput(blackState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
