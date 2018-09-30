import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './all.sass'
import favicon from '../img/favicon.ico';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Centro de ayuda a Adolescentes"
      meta={[
        { name: 'description', content: 'Centro de psicología cuyo objetivo es ayudar a adolescentes y sus familias.' },
        { name: 'keywords', content: 'Centro,Psicología,Ayuda,Adolescentes,Musicoterapia' },
      ]}
      link={[
        { rel: 'shortcut icon', type: 'image/ico', href: `${favicon}` }
      ]}
    />
    <Navbar />
    <div>{children}</div>
    <Footer />
  </div>
)

export default TemplateWrapper
