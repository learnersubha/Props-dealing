import Card from './components/Card'

const App = () => {

  const job = [
  {
    "brand_logo": "https://logo.clearbit.com/google.com",
    "company_name": "Google",
    "date_posted": "5 days ago",
    "job_type": "Backend Developer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "paid": "$120/hr",
    "location": "Bangalore, India"
  },
  {
    "brand_logo": "https://logo.clearbit.com/microsoft.com",
    "company_name": "Microsoft",
    "date_posted": "1 week ago",
    "job_type": "UI/UX Designer",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "paid": "$90/hr",
    "location": "Hyderabad, India"
  },
  {
    "brand_logo": "https://logo.clearbit.com/amazon.com",
    "company_name": "Amazon",
    "date_posted": "3 days ago",
    "job_type": "Frontend Developer",
    "tag1": "Full-time",
    "tag2": "Junior Level",
    "paid": "$75/hr",
    "location": "Chennai, India"
  },
  {
    "brand_logo": "https://logo.clearbit.com/meta.com",
    "company_name": "Meta",
    "date_posted": "2 weeks ago",
    "job_type": "Product Designer",
    "tag1": "Part-time",
    "tag2": "Senior Level",
    "paid": "$110/hr",
    "location": "San Francisco, USA"
  },
  {
    "brand_logo": "https://logo.clearbit.com/apple.com",
    "company_name": "Apple",
    "date_posted": "4 days ago",
    "job_type": "iOS Developer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "paid": "$130/hr",
    "location": "Cupertino, USA"
  },
  {
    "brand_logo": "https://logo.clearbit.com/netflix.com",
    "company_name": "Netflix",
    "date_posted": "1 week ago",
    "job_type": "Frontend Engineer",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "paid": "$100/hr",
    "location": "Los Angeles, USA"
  },
  {
    "brand_logo": "https://logo.clearbit.com/tesla.com",
    "company_name": "Tesla",
    "date_posted": "2 days ago",
    "job_type": "DevOps Engineer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "paid": "$125/hr",
    "location": "Berlin, Germany"
  },
  {
    "brand_logo": "data:image/png;base64,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",
    "company_name": "Adobe",
    "date_posted": "6 days ago",
    "job_type": "UI Designer",
    "tag1": "Part-time",
    "tag2": "Junior Level",
    "paid": "$80/hr",
    "location": "Noida, India"
  },
  {
    "brand_logo": "https://logo.clearbit.com/intel.com",
    "company_name": "Intel",
    "date_posted": "3 weeks ago",
    "job_type": "Machine Learning Engineer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "paid": "$140/hr",
    "location": "Bangalore, India"
  },
  {
    "brand_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAeFBMVEX///8fcMHT3/AAZr0Aab4AY7wAYbxynNISbL/c5fOowOJgkc2gut8AZ75ql9C1yeYAXLq+z+iQsNqwxuTQ3e8AWLna4/Lt8vng6PQAXrspdcNXi8sAWroAVbjE1OpZjcz2+PxHg8iMrdl+o9Xn7vdBf8czecSHqdhxDhECAAAE10lEQVR4nO3caXeqMBAGYC0EoVbFDct1Q7v9/394FanADFk4AQue9/loJySOpzCQkMEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKA73sdTM6M0/HM6quO8DCp7HWvaTVfyEeuHYJuTyPPNDOuF37iucD9eeK+xrt1YPuKFo2tsm5PAGZr5Vy8854uvA+1V6Bp5iXTE/7Qddj8nF2K7qZkTdykbcKRt24+cDH3vtV5Ohl+yAf/42s5sc/KyFka8239pZBjO7LfFXvf6+HfJgEP9UG1zAgAA7dm8vRqqGV4tq1OMjlJx5UmMGtrmJApdIxO/VriEk12RdwaxYspHu/RMOrHNyWNqtjvv9uPra7YLwUd70hZsw97UsXfuwjwnkxkd7MYzade3nAxP5jnxt3Swb65RO9ucRDvHiPBrhUvt08OszWLJneNgKEyaVfzP1ZOsXgzVDJdYJdfDmB1lRXNi2Mw2JwAAbdhEQVmUWIYnNCQIaMVeESI5ojKQno6bsgzJVS1kVVPRTB/OL90erdgD1dXd+8gDD7S7UtfS57eWZrQkmswtw3mJlxWyuXdlFTjJA0equt5V/noWHpETFqPOiZNPgyhr317nRHySEHVO/Pu/2mzyJzlhd+KeOicsnA0siOmN/FAfUhImWdzWUYV5bZ1Pojeqerb399vowzcshE0J8pDqYy7UYVFDOQAAgMdZrr2ytfKqz8J14qrVMsFe0yr8MQhad7W214mrLu3qmi2t2waDs66rztaxGqJyMornhC5EclYDeqvD1ir1NCfiXHkUlhP/TDLgf0Qkxl3QJLWXE0FWywl1Tmi4kqA3xJmArhqcvH245KMR+eD7wEbaVk4O23HZllXiynCVo+wk+EmPclxG7CMasao3UgAA6CR+3VFOvbZ13bmUdslJfqTrJeZx152O1CfX2u5ES5TcdUnw/GH1STfq2HS2Q/5E2r++ijKnf+5pbW96v3ObAZLOXKSzG0+TE8P74ltOpDNc6fOGx+WkG89Prs9LLidwycHDdLZ0xkba1vMTAABoT0fmi39DqmaII1nXbc0Xd2Ndwb3ePfGVBLtsidacdd3VuYxm1p/cVzLxmtA/Zn/qTx3bzDqlfHUXq+/vbyU8V07069nyCFbf31fSP7C278S6x/h+/0xXOuZt56zrts4nG7bsNFGFJ/pwHhLQ8wkPySPoithE3qit9bEAAFbqvaDV0HtegSqkeBYudLcqfL5RDePWhQ2jV+wudunNTEPvAx4VvcY/hdF95YHrwhsd7FpcGmnFZkX1mLyxe+WkQ2rovdGxotdSVVeoC4u7xLCarTRS6/vBx+Yk+8LGOcnre7f41P+pcpK9h26ek+lvZGnXqZZzolzaXxCn36ah/QrGil7Lc2OHuNwyy4nqxYXQ+nxSb0uKjXG44iCX76SKKU9S/+5kUfrx3006AQCALvJMN+K71fbN7OO3jeWR4Q8Z4bcn9mTB1Gyn6Grdj9qe7vdoXrNdLC/1PfnoCepYti9orZwkgn3U95xU7R9bKyeDaUw3OWg5J/LFdGRp3a22b2af4bGiV4etezuwyUO2xq80UuucmG4tPU0f6TS0H/VC1RGflmBzJCvVMKaybVYBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7Cf7RhoPmaliJ1AAAAAElFTkSuQmCC",
    "company_name": "IBM",
    "date_posted": "1 day ago",
    "job_type": "Cloud Architect",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "paid": "$135/hr",
    "location": "Pune, India"
  },
  {
    "brand_logo": "https://logo.clearbit.com/oracle.com",
    "company_name": "Oracle",
    "date_posted": "4 days ago",
    "job_type": "Database Administrator",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "paid": "$100/hr",
    "location": "Austin, USA"
  },
  {
    "brand_logo": "https://logo.clearbit.com/spotify.com",
    "company_name": "Spotify",
    "date_posted": "5 days ago",
    "job_type": "Full Stack Developer",
    "tag1": "Part-time",
    "tag2": "Junior Level",
    "paid": "$85/hr",
    "location": "Stockholm, Sweden"
  },
  {
    "brand_logo": "https://logo.clearbit.com/salesforce.com",
    "company_name": "Salesforce",
    "date_posted": "2 weeks ago",
    "job_type": "Backend Engineer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "paid": "$120/hr",
    "location": "New York, USA"
  },
  {
    "brand_logo": "https://logo.clearbit.com/airbnb.com",
    "company_name": "Airbnb",
    "date_posted": "6 days ago",
    "job_type": "UI/UX Researcher",
    "tag1": "Internship",
    "tag2": "Entry Level",
    "paid": "$60/hr",
    "location": "San Francisco, USA"
  },
  {
    "brand_logo": "https://logo.clearbit.com/zoom.us",
    "company_name": "Zoom",
    "date_posted": "1 week ago",
    "job_type": "React Developer",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "paid": "$95/hr",
    "location": "Singapore"
  },
  {
    "brand_logo": "https://logo.clearbit.com/paypal.com",
    "company_name": "PayPal",
    "date_posted": "5 days ago",
    "job_type": "Backend Developer",
    "tag1": "Full-time",
    "tag2": "Senior Level",
    "paid": "$115/hr",
    "location": "Chennai, India"
  },
  {
    "brand_logo": "https://logo.clearbit.com/atlassian.com",
    "company_name": "Atlassian",
    "date_posted": "3 days ago",
    "job_type": "UI Engineer",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "paid": "$90/hr",
    "location": "Sydney, Australia"
  },
  {
    "brand_logo": "https://logo.clearbit.com/tiktok.com",
    "company_name": "TikTok",
    "date_posted": "2 weeks ago",
    "job_type": "Frontend Developer",
    "tag1": "Internship",
    "tag2": "Entry Level",
    "paid": "$70/hr",
    "location": "Singapore"
  },
  {
    "brand_logo": "https://logo.clearbit.com/shopify.com",
    "company_name": "Shopify",
    "date_posted": "1 week ago",
    "job_type": "React Native Developer",
    "tag1": "Full-time",
    "tag2": "Mid Level",
    "paid": "$100/hr",
    "location": "Toronto, Canada"
  },
  {
    "brand_logo": "https://logo.clearbit.com/reddit.com",
    "company_name": "Reddit",
    "date_posted": "4 days ago",
    "job_type": "Backend Developer",
    "tag1": "Part-time",
    "tag2": "Senior Level",
    "paid": "$110/hr",
    "location": "Remote"
  }
]

return (
    <div className='parent'>
      {job.map(function (elem, idx) {
        return <div key={idx}>
        <Card 
        brand_logo={elem.brand_logo}
        company_name={elem.company_name}
        date_posted={elem.date_posted}
        job_type={elem.job_type}
        tag1={elem.tag1}
        tag2={elem.tag2}
        paid={elem.paid}
        location={elem.location}
      />
        </div>
  })}
    </div>
  )
}

export default App
