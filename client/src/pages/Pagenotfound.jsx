import React from 'react'
import Layout from '../components/Layout/Layout'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const Pagenotfound = () => {

  const navigate = useNavigate();

  return (
    <Layout title={'go-back Page Not found'}>
       <section className="page_404">
	<div className="container">
		<div className="row">	
		<div>
		<div>
		<div className="four_zero_four_bg">
			<h1 className="text-center">404</h1>
		</div>
		
		<div className="contant_box_404">
		<h3 className="h2 text-center">
		Look like you're lost
		</h3>
		
		<p className="text-center">the page you are looking for not avaible!</p>
		
        <div className="text-center">
            <Button variant='warning' onClick={()=>{
                navigate("/home")
            }}>Go to Home</Button>
        </div>
	</div>
		</div>
		</div>
		</div>
	</div>
    </section>
    </Layout>
  )
}

export default Pagenotfound
