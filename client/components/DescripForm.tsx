import { useState, FormEvent, ChangeEvent } from 'react'
import { getDescription } from '../apis/descripAPI'

const initialFormData = {
  itemName: '',
  brand: '',
  category: '',
  condition: '',
  location: '',
}

function DescripForm() {
  const [form, setForm] = useState(initialFormData)

  const [description, setDescription] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const newDescrip = await getDescription(form)
    console.log(newDescrip)
    setDescription(newDescrip.content)
    setForm(initialFormData)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            onChange={handleChange}
          />

          <label htmlFor="brand">Brand:</label>
          <input type="text" id="brand" name="brand" onChange={handleChange} />
        </div>

        <div className="form-wrapper">
          <label htmlFor="category">Category:</label>
          <select name="category" id="category" onChange={handleChange}>
            <option key="" value="">
              --Select a category--
            </option>
            <option key="Baby Gear" value="Baby Gear">
              Baby Gear
            </option>
            <option key="Home&Living" value="Home&Living">
              Home&Living
            </option>
            <option key="Computers" value="Computers">
              Computers
            </option>
            <option key="Clothes&Fashion" value="Clothes&Fashion">
              Clothes&Fashion
            </option>
          </select>

          <label htmlFor="condition">Condition:</label>
          <select name="condition" id="condition" onChange={handleChange}>
            <option key="new" value="new">
              New
            </option>
            <option key="likeNew" value="like new">
              Like new
            </option>
            <option key="good" value="good">
              Good
            </option>
            <option key="fair" value="fair">
              Fair
            </option>
          </select>
        </div>

        <div className="form-wrapper">
          <label htmlFor="location">Pick up from:</label>
          <input
            type="text"
            id="location"
            name="location"
            onChange={handleChange}
          />
        </div>

        <button>Generate Description</button>
      </form>

      <div className="descrip-container">{description}</div>
    </>
  )
}

export default DescripForm
