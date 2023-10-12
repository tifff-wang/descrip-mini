import { useState, FormEvent, ChangeEvent, MouseEventHandler } from 'react'
import { getDescription } from '../apis/descripAPI'
import CopyButton from './CopyButton'

const initialFormData = {
  itemName: '',
  brand: '',
  category: '',
  condition: '',
  location: '',
}

function DescripForm() {
  const [description, setDescription] = useState('')
  const [form, setForm] = useState(initialFormData)
  const [isLoading, setIsLoading] = useState(false)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    const newForm = { ...form, [name]: value }
    setForm(newForm)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      setIsLoading(true)
      const newDescrip = await getDescription(form)
      setDescription(newDescrip.content)
    } catch (err) {
      console.error(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  function reset(event: MouseEventHandler<HTMLButtonElement>) {
    event.preventDefault()
    setDescription('')
    setForm(initialFormData)
  }

  const loadingView = isLoading ? <p>Generating description...</p> : null

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-wrapper">
          <label htmlFor="itemName">Item Name:</label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            value={form.itemName}
            onChange={handleChange}
          />

          <label htmlFor="brand">Brand:</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={form.brand}
            onChange={handleChange}
          />
        </div>

        <div className="form-wrapper">
          <label htmlFor="category">Category:</label>
          <select
            name="category"
            id="category"
            value={form.category}
            onChange={handleChange}
          >
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
          <select
            name="condition"
            id="condition"
            value={form.condition}
            onChange={handleChange}
          >
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
            value={form.location}
            onChange={handleChange}
            placeholder="Suburb, City"
          />
        </div>

        <button>Generate Description</button>
        <button onClick={reset}>Reset</button>
      </form>
      <div>{loadingView}</div>

      <textarea
        id="text"
        name="text"
        className="descrip-container"
        defaultValue={description}
      ></textarea>
      <CopyButton text={description} />
    </>
  )
}

export default DescripForm
