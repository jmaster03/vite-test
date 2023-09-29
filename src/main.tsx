import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import './assets/js/jquery.min.js'
import './assets/js/bootstrap.bundle.min.js'
import './assets/js/jquery.hoverIntent.min.js'
import './assets/js/jquery.waypoints.min.js'
import './assets/js/superfish.min.js'
import './assets/js/owl.carousel.min.js'
import './assets/js/bootstrap-input-spinner.js'
import './assets/js/jquery.magnific-popup.min.js'
import './assets/js/jquery.plugin.min.js'
import './assets/js/jquery.countdown.min.js'

import './assets/js/main.js'
import './assets/js/demos/demo-13.js'


import routes from './config/Routes'

import {RouterProvider } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
