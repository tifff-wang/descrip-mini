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
      <form onSubmit={handleSubmit} className="text-start mt-11 mx-8">
        <div className="flex grid-cols-2 gap-6">
          <div>
            <label htmlFor="itemName" className="block text-sm">
              Item Name:
            </label>
            <input
              type="text"
              id="itemName"
              name="itemName"
              value={form.itemName}
              onChange={handleChange}
              className="border-2 rounded-full border-[#9CA7B2] h-8 w-48 shadow-sm pl-3 text-[#4B4B4B] text-sm"
            />
          </div>

          <div>
            <label htmlFor="brand" className="block text-sm">
              Brand:
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              className="border-2 rounded-full border-[#9CA7B2] h-8 w-48 shadow-sm pl-3 text-[#4B4B4B] text-sm"
            />
          </div>
        </div>

        <div className="flex grid-cols-2 gap-6 mt-3">
          <div>
            <label htmlFor="category" className="block text-sm">
              Category:
            </label>
            <select
              name="category"
              id="category"
              value={form.category}
              onChange={handleChange}
              className="border-2 rounded-full border-[#EAEAEA] h-8 w-48 shadow-sm pl-3 text-[#4B4B4B] text-sm"
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
          </div>

          <div>
            <label htmlFor="condition" className="block text-sm">
              Condition:
            </label>
            <select
              name="condition"
              id="condition"
              value={form.condition}
              onChange={handleChange}
              className="border-2 rounded-full border-[#EAEAEA] h-8 w-48 shadow-sm pl-3 text-[#4B4B4B] text-sm"
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
        </div>

        <div className="mt-3">
          <label htmlFor="location" className="block text-sm">
            Pick up from:
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Suburb, City"
            className="border-2 rounded-full border-[#EAEAEA] h-8 w-48 shadow-sm pl-3 text-[#4B4B4B] text-sm"
          />
        </div>

        <div id="button-wrapper" className="flex justify-center mt-6">
          <button className="rounded-full bg-[#8DA1E1] px-4 py-2 text-white text-md">
            Generate Description
          </button>
          <button onClick={reset} className="ml-6 underline">
            Reset
          </button>
        </div>
      </form>
      <div>{loadingView}</div>

      <div className="relative">
        <textarea
          id="text"
          name="text"
          className="border-2 rounded-md shadow-md border-[#9CA7B2] px-5 py-5 mt-6 w-5/6 h-48 text-sm leading-4"
          defaultValue={description}
        ></textarea>
        <CopyButton text={description} />
      </div>
    </>
  )
}

export default DescripForm
