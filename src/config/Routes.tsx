import {createBrowserRouter} from 'react-router-dom'

import { Home } from '../components/pages/Home'
import { About } from '../components/pages/About'
import { Contact } from '../components/pages/Contact'
import { ErrorPage } from '../components/pages/ErrorPage'
import { Cart } from '../components/pages/shop/Cart'
import { CheckOut } from '../components/pages/shop/CheckOut'
import { Wishlist } from '../components/pages/shop/Whishlist'
import { Products } from '../components/pages/shop/Products'
import { Product } from '../components/pages/shop/Product'
import { FAQs } from '../components/pages/FAQs'
import { Purchases } from '../components/pages/user/Purchases'
import { Settings } from '../components/pages/user/Settings'
import { Addreses } from '../components/pages/user/Addreses'
import { Support } from '../components/pages/user/Support'
import { PrivacyP } from '../components/pages/PrivacyP'
import { Terms } from '../components/pages/Terms'
 
const routes = createBrowserRouter([
  {
    path: '/', 
    element: <Home />,
    errorElement: <ErrorPage/>
  },

  {
    path: '/about', 
    element: <About/>
  },
  {
    path: '/contact', 
    element: <Contact/>
  },

  {
    path: '/faqs', 
    element: <FAQs/>
  },

  {
    path: '/privacy_policy', 
    element: <PrivacyP/>
  },

  {
    path: '/terms_n_conditions', 
    element: <Terms/>
  },

  //user routes

  {
    path: '/user-orders',
    element: <Purchases/>
  },

  {
    path: '/user-adresses',
    element: <Addreses/>
  },
  {
    path: '/user-settings',
    element: <Settings/>
  },

  {
    path: '/user-support',
    element: <Support/>
  },

  // Shop Routes
  {
    path: '/cart', 
    element: <Cart />
  },
  {
    path: '/wishlist', 
    element: <Wishlist />
  },
  {
    path: '/checkout', 
    element: <CheckOut />
  },

  {
    path: '/products', 
    element: <Products />
  },

  {
    path: '/product/:id', 
    element: <Product />
  },


  



])

export default routes