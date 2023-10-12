import { useState } from 'react'

interface Props {
  text: string
}

function CopyButton(props: Props) {
  const [buttonText, setButtonText] = useState('copy to clipboard')
  function copyText() {
    navigator.clipboard
      .writeText(props.text)
      .then(() => {
        setButtonText('copied')
        setTimeout(function () {
          setButtonText('copy to clipboard')
        }, 1000)
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  return (
    <button className="copy-button" onClick={copyText}>
      {buttonText}
    </button>
  )
}

export default CopyButton
