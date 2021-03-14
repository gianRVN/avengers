import './App.css';
import React from 'react'
import Dashboard from './views/Dashboard'
import Orders from './views/Orders'
import AllProducts from './views/products/AllProducts'
import ProductCategories from './views/products/ProductCategories'
import ProductCollections from './views/products/ProductCollections'
import ProductVariations from './views/products/ProductVariations'
import WebstoresSettings from './views/webstores/WebstoresSettings'
import GoogleAnalytics from './views/webstores/GoogleAnalytics';
import Pages from './views/webstores/Pages';
import Seo from './views/webstores/Seo';
import Themes from './views/webstores/Themes';
import CheckoutInformation from './views/webstores/CheckoutInformation';
import StoreNewsletter from './views/webstores/StoreNewsletter';
import Developer from './views/settings/Developer'
import Invoicing from './views/settings/Invoicing'
import ShopManager from './views/settings/ShopManager'
import StoreInformation from './views/settings/StoreInformation'
import TaxInformation from './views/settings/TaxInformation'
import AllModules from './views/modules/AllModules'
import GoogleShopping from './views/modules/GoogleShopping'
import CouponCode from './views/modules/CouponCode'
import Facebook from './views/modules/Facebook'
import Instagram from './views/modules/Instagram'
import Messanger from './views/modules/Messanger'
import Blogspot from './views/modules/Blogspot'
import Twitter from './views/modules/Twitter'
import Whatsapp from './views/modules/Whatsapp'
import Avacredit from './views/modules/Avacredit'
import Avachat from './views/modules/Avachat'
import Hq from './views/Hq'
import Agents from './views/Modules'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './components/Sidebar'
import Shipping from './views/settings/Shipping';
import Payments from './views/settings/Payments';


function App() {
  return (
    <Router>
      <div className="main-template">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route exact path="/orders">
            <Orders />
          </Route>
          <Route path="/products/all-products">
            <AllProducts />
          </Route>
          <Route path="/products/categories">
            <ProductCategories />
          </Route>
          <Route path="/products/collections">
            <ProductCollections />
          </Route>
          <Route path="/products/variations">
            <ProductVariations />
          </Route>
          <Route exact path="/webstores/settings">
            <WebstoresSettings />
          </Route>
          <Route exact path="/webstores/google-analytics">
            <GoogleAnalytics />
          </Route>
          <Route exact path="/webstores/themes">
            <Themes />
          </Route>
          <Route exact path="/webstores/pages">
            <Pages />
          </Route>
          <Route exact path="/webstores/seo">
            <Seo />
          </Route>
          <Route exact path="/webstores/checkout-instructions">
            <CheckoutInformation />
          </Route>
          <Route exact path="/webstores/shop-newsletters">
            <StoreNewsletter />
          </Route>
          <Route exact path="/settings/developer">
            <Developer />
          </Route>
          <Route exact path="/settings/invoices">
            <Invoicing />
          </Route>
          <Route exact path="/settings/shop-manager">
            <ShopManager />
          </Route>
          <Route exact path="/settings/store-information">
            <StoreInformation />
          </Route>
          <Route exact path="/settings/tax-information">
            <TaxInformation />
          </Route>
          <Route exact path="/settings/shipping">
            <Shipping />
          </Route>
          <Route exact path="/settings/payments">
            <Payments />
          </Route>
          <Route exact path="/modules/all-modules">
            <AllModules />
          </Route>
          <Route exact path="/modules/google-shopping">
            <GoogleShopping />
          </Route>
          <Route exact path="/modules/coupon-code">
            <CouponCode />
          </Route>
          <Route exact path="/modules/facebook">
            <Facebook />
          </Route>
          <Route exact path="/modules/twitter">
            <Twitter />
          </Route>
          <Route exact path="/modules/instagram">
            <Instagram />
          </Route>
          <Route exact path="/modules/messanger">
            <Messanger />
          </Route>
          <Route exact path="/modules/blogspot">
            <Blogspot />
          </Route>
          <Route exact path="/modules/whatsapp">
            <Whatsapp />
          </Route>
          <Route exact path="/modules/avachat">
            <Avachat />
          </Route>
          <Route exact path="/modules/avacredit">
            <Avacredit />
          </Route>
          <Route exact path="/hq">
            <Hq/>
          </Route>
          <Route exact path="/agents">
            <Agents />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
