import "./loader.css";

const Loader = () => {

  return (
    <div id='preloader'>
        <div className='loader'>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
            <span className="circle"></span>
        </div>
        <h2 className="loading-text">Loading Portfolio...</h2>
    </div>
  )
}

export default Loader