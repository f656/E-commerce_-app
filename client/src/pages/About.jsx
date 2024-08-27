import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Ecommer app"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to [E-commerce Website], your one-stop destination for [ product categories, e.g., fashion, electronics, home goods, etc.]. We strive to offer a wide range of high-quality products at competitive prices. Our user-friendly platform ensures a seamless shopping experience, backed by secure payment options and fast shipping. We’re dedicated to providing excellent customer service, ensuring that your needs are met from browsing to checkout. Whether you’re looking for the latest trends or daily essentials, E-commerce website has something for everyone. Start shopping today and discover the convenience of online retail!


          </p>
        </div>
      </div>
    </Layout>
  )
}

export default About

