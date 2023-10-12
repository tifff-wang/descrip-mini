import DescripForm from './DescripForm'

function App() {
  return (
    <div>
      <div
        id="form-wrapper"
        className="inline-block bg-white pt-36 w-100 h-screen"
      >
        <h1 className="font-80px text-[#8DA1E1] ">
          Descrip
          <span className="italic font-brevia font-extrabold text-[#707070]">
            Mini
          </span>
        </h1>

        <DescripForm />
      </div>
    </div>
  )
}

export default App
