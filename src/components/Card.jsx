import { Bookmark } from 'lucide-react'

const Card = (props) => {
  return (
    <div className="card">
        <div className="top">
          <img src={props.brand_logo} alt="" />
          <button>Save <Bookmark size={10}  strokeWidth={2.5} /></button>
        </div>
        <div className="center">
          <div className='line1'>
          <h3>{props.company_name}</h3>
          <span>{props.date_posted}</span>
          </div>
          <div>
            <h2>{props.job_type}</h2>
          </div>
          <div className='line2'>
            <p>{props.tag1}</p>
            <p>{props.tag2}</p>
          </div>

        </div>
        <div className="bottom">
          <div>
          <h3>{props.paid}</h3>
          <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
