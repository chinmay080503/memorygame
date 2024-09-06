import "./Logo.css"

function Logo(props) {

  return (
    <div style = {{'color': props.color}} className='logo'>Memory game</div>
  )

}

export default Logo