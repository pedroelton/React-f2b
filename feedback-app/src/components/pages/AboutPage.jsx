import Card from "../shared/Card"
import { Link } from 'react-router-dom'

function AboutPage() {
  return <Card>
    <div className="about">
      <h1>About this project</h1>
      <p>This is a React app to leave feedback for a product or service.</p>
      <p>Made by <a href="https://pedroelton.com">pedroelton.com</a> as part of a React course project.</p>
      <p>Version: 1.0.0</p>
      <Link to="/">Back To Home</Link>
  </div>
  </Card>
  
}

export default AboutPage
