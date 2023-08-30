import { useState, FormEvent, ChangeEvent } from 'react'

function DescripForm() {
  return (
    <>
      <form>
        <div className="form-wrapper">
          <label htmlFor="itemName">Item Name:</label>
          <input type="text" id="itemName" name="itemName" />

          <label htmlFor="brand">Brand:</label>
          <input type="text" id="brand" name="brand" />
        </div>

        <div className="form-wrapper">
          <label htmlFor="category">Category:</label>
          <select name="category" id="category">
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
          <select name="condition" id="condition">
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
          <input type="text" id="location" name="location" />
        </div>

        <button>Generate Description</button>
      </form>

      <div className="descrip-container"></div>
    </>
  )
}

export default DescripForm
