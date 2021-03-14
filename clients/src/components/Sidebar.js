import '../assets/styles/sidebar/sidebar.css'
import { AiOutlineHome, AiOutlineCodeSandbox } from "react-icons/ai"
import { CgNotes } from "react-icons/cg"
import { MdComputer, MdPersonOutline } from "react-icons/md"
import { FiSettings, FiStopCircle } from "react-icons/fi"
import { BiShapeSquare } from "react-icons/bi"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { changeDashboard, closeDashboard } from '../store/actions/dashboard/dashboard'
import { changeAgent, closeAgent } from '../store/actions/agent/agent'
import { changeOrder, closeOrder } from '../store/actions/orders/orders'
import { changeProduct, closeProduct } from '../store/actions/products/products'
import { changeHq, closeHq } from '../store/actions/hq/hq'
import { changeWebstore, closeWebstore } from '../store/actions/webstores/webstores'
import { changeSetting, closeSetting } from '../store/actions/settings/settings'
import { changeModules, closeModules } from '../store/actions/modules/modules'
import avana from '../assets/img/avana-logo.png'
import avatar from '../assets/img/avatar.png'

function Sidebar(){
  const dispatch = useDispatch()
  const { isShowedDashboard, isAllowedDashboard } = useSelector(state => state.dashboard)
  const { isShowedAgent, isAllowedAgent } = useSelector(state => state.agent)
  const { isShowedOrder, isAllowedOrder } = useSelector(state => state.orders)
  const { isShowedProduct, isAllowedProduct } = useSelector(state => state.products)
  const { isShowedHq, isAllowedHq } = useSelector(state => state.hq)
  const { isShowedWebstore, isAllowedWebstore } = useSelector(state => state.webstores) 
  const { isShowedSetting, isAllowedSetting } = useSelector(state => state.settings) 
  const { isShowedModules, isAllowedModules } = useSelector(state => state.modules) 
  const dashboard = () => {
    dispatch(closeAgent())
    dispatch(closeOrder())
    dispatch(closeProduct())
    dispatch(closeSetting())
    dispatch(closeModules())
    dispatch(closeHq())
    dispatch(closeWebstore())
    dispatch(changeDashboard())
  }
  const agent = () => {
    dispatch(closeDashboard())
    dispatch(closeAgent())
    dispatch(closeProduct())
    dispatch(closeSetting())
    dispatch(closeModules())
    dispatch(closeHq())
    dispatch(closeWebstore())
    dispatch(changeAgent())
  }
  const order = () => {
    dispatch(closeDashboard())
    dispatch(closeOrder())
    dispatch(closeProduct())
    dispatch(closeSetting())
    dispatch(closeModules())
    dispatch(closeHq())
    dispatch(closeWebstore())
    dispatch(changeOrder())
  }
  const webstore = () => {
    dispatch(closeAgent())
    dispatch(closeOrder())
    dispatch(closeDashboard())
    dispatch(closeProduct())
    dispatch(closeSetting())
    dispatch(closeModules())
    dispatch(closeHq())
    dispatch(changeWebstore())
  }
  const hq = () => {
    dispatch(closeAgent())
    dispatch(closeOrder())
    dispatch(closeDashboard())
    dispatch(closeProduct())
    dispatch(closeSetting())
    dispatch(closeModules())
    dispatch(closeWebstore())
    dispatch(changeHq())
  }
  const product = () => {
    dispatch(closeAgent())
    dispatch(closeOrder())
    dispatch(closeDashboard())
    dispatch(closeWebstore())
    dispatch(closeSetting())
    dispatch(closeModules())
    dispatch(closeHq())
    dispatch(changeProduct())
  }
  const setting = () => {
    dispatch(closeAgent())
    dispatch(closeOrder())
    dispatch(closeDashboard())
    dispatch(closeProduct())
    dispatch(closeWebstore())
    dispatch(closeModules())
    dispatch(closeHq())
    dispatch(changeSetting())
  }
  const modules = () => {
    dispatch(closeAgent())
    dispatch(closeOrder())
    dispatch(closeDashboard())
    dispatch(closeProduct())
    dispatch(closeSetting())
    dispatch(closeWebstore())
    dispatch(closeHq())
    dispatch(changeModules())
  }

  return(
    <nav className="sidebar">
      <ul>
        <li className="avana-logo"><img src={avana} alt="avana"></img></li>
        <li className="avatar">
          <img src={avatar} alt="avatar"></img>
          <p>Gian Mohammad Arvin</p>
        </li>
        <hr></hr>
        <Link to="/">
          {isAllowedDashboard && <li onClick={() => dashboard()} className={isShowedDashboard ? "main-menu-active" : "main-menu"}>
            <span>
                <AiOutlineHome/> Dashboard
            </span>
          </li>}
        </Link>
        <Link to="/hq">
          {isAllowedHq && <li onClick={() => hq()} className={isShowedHq ? "main-menu-active" : "main-menu"}>
            <span>
              <FiStopCircle/> HQ
            </span>
            {isShowedHq ? <IoIosArrowDown/> : <IoIosArrowUp/>}
          </li>}
        </Link>
        {isShowedHq && <Link to="/hq/stockists"><li className="sub-menu">Stockists</li></Link>}
        {isShowedHq && <Link to="/hq/dropships"><li className="sub-menu">Dropships</li></Link>}
        <Link to="/agents">
          {isAllowedAgent && <li onClick={() => agent()} className={isShowedAgent ? "main-menu-active" : "main-menu"}>
            <span>
                <MdPersonOutline/> Agent
            </span>
          </li>}
        </Link>
        <Link to="/orders">
          {isAllowedOrder && <li onClick={() => order()} className={isShowedOrder ? "main-menu-active" : "main-menu"}>
            <span>
                <CgNotes/> My Orders
            </span>
          </li>}
        </Link>
        {isAllowedProduct && <li onClick={() => product()} className={isShowedProduct ? "main-menu-active" : "main-menu"}>
          <span>
            <AiOutlineCodeSandbox/> My Products
          </span>
          {isShowedProduct ? <IoIosArrowDown/> : <IoIosArrowUp/>}
        </li>}
        {isShowedProduct && <Link to="/products/all-products"><li className="sub-menu">All Products</li></Link>}
        {isShowedProduct && <Link to="/products/categories"><li className="sub-menu">Categories</li></Link>}
        {isShowedProduct && <Link to="/products/variations"><li className="sub-menu">Variations</li></Link>}
        {isShowedProduct && <Link to="/products/collections"><li className="sub-menu">Collections</li></Link>}
        {isAllowedWebstore && <li onClick={() => webstore()} className={isShowedWebstore ? "main-menu-active" : "main-menu"}>
          <span>
            <MdComputer/> Webstore
          </span>
          {isShowedWebstore ? <IoIosArrowDown/> : <IoIosArrowUp/>}
        </li>}
        {isShowedWebstore && <Link to="/webstores/settings"><li className="sub-menu">Settings</li></Link>}
        {isShowedWebstore && <Link to="/webstores/google-analytics"><li className="sub-menu">Google Analytics</li></Link>}
        {isShowedWebstore && <Link to="/webstores/themes"><li className="sub-menu">Themes</li></Link>}
        {isShowedWebstore && <Link to="/webstores/pages"><li className="sub-menu">Pages</li></Link>}
        {isShowedWebstore && <Link to="/webstores/seo"><li className="sub-menu">SEO</li></Link>}
        {isShowedWebstore && <Link to="/webstores/checkout-instructions"><li className="sub-menu">Checkout Instructions</li></Link>}
        {isShowedWebstore && <Link to="/webstores/shop-newsletters"><li className="sub-menu">Shop Newsletters</li></Link>}
        {isAllowedSetting && <li onClick={() => setting()} className={isShowedSetting ? "main-menu-active" : "main-menu"}>       
          <span>
            <FiSettings/> Settings
          </span>
          {isShowedSetting ? <IoIosArrowDown/> : <IoIosArrowUp/>}
        </li>}
        {isShowedSetting && <Link to="/settings/shop-manager"><li className="sub-menu">Shop Manager</li></Link>}
        {isShowedSetting && <Link to="/settings/store-information"><li className="sub-menu">Store Information</li></Link>}
        {isShowedSetting && <Link to="/settings/shipping"><li className="sub-menu">Shipping</li></Link>}
        {isShowedSetting && <Link to="/settings/payments"><li className="sub-menu">Payments</li></Link>}
        {isShowedSetting && <Link to="/settings/invoices"><li className="sub-menu">Invoices</li></Link>}
        {isShowedSetting && <Link to="/settings/developer"><li className="sub-menu">Developer</li></Link>}
        {isShowedSetting && <Link to="/settings/tax-information"><li className="sub-menu">Tax Information</li></Link>}
        {isAllowedModules && <li onClick={() => modules()} className={isShowedModules ? "main-menu-active" : "main-menu"}>      
          <span>
            <BiShapeSquare/> Modules
          </span>
          {isShowedModules ? <IoIosArrowDown/> : <IoIosArrowUp/>}
        </li>}
        {isShowedModules && <Link to="/modules/all-modules"><li className="sub-menu">All Modules</li></Link>}
        {isShowedModules && <Link to="/modules/google-shopping"><li className="sub-menu">Google Shopping</li></Link>}
        {isShowedModules && <Link to="/modules/coupon-code"><li className="sub-menu">Coupon Code</li></Link>}
        {isShowedModules && <Link to="/modules/facebook"><li className="sub-menu">Facebook</li></Link>}
        {isShowedModules && <Link to="/modules/instagram"><li className="sub-menu">Instagram</li></Link>}
        {isShowedModules && <Link to="/modules/messanger"><li className="sub-menu">Messanger</li></Link>}
        {isShowedModules && <Link to="/modules/blogspot"><li className="sub-menu">Blogspot</li></Link>}
        {isShowedModules && <Link to="/modules/twitter"><li className="sub-menu">Twitter</li></Link>}
        {isShowedModules && <Link to="/modules/whatsapp"><li className="sub-menu">Whatsapp</li></Link>}
        {isShowedModules && <Link to="/modules/avacredit"><li className="sub-menu">Avacredit</li></Link>}
        {isShowedModules && <Link to="/modules/avachat"><li className="sub-menu">Avachat</li></Link>}
      </ul>
    </nav>
  )
}

export default Sidebar