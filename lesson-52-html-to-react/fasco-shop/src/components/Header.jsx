import iconBurger from '../assets/images/icon-burg.svg'
import fascoLogo from '../assets/images/fasco-logo.svg'
import iconSearch from '../assets/images/icon-search.svg'
import iconUser from '../assets/images/icon-user.svg'
import iconFavorites from '../assets/images/icon-favorites.svg'
import iconShopBag from '../assets/images/icon-shop-bag.svg'

export default function Header() {
  return (
    <header className="font-poppins container mx-auto max-w-7xl">
      <nav className="flex justify-between items-center py-16 text-base text-dark">
        <button className="md:hidden cursor-pointer" aria-label="menu">
          <img className="w-8" src={iconBurger} alt="menu"/>
        </button>
        <a href="pages/homepage.html"
        ><img className="h-10" src={fascoLogo} alt="fasco-logo"
        /></a>
        <ul className="hidden md:flex justify-between w-[430px] px-8">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
        <div className="flex justify-between gap-5">
          <button aria-label="search">
            <img src={iconSearch} alt="search"/>
          </button>
          <button aria-label="user">
            <img src={iconUser} alt="user"/>
          </button>
          <button aria-label="Search">
            <img src={iconFavorites} alt="favorites"/>
          </button>
          <button aria-label="shop-bag">
            <img src={iconShopBag} alt="shop-bag"/>
          </button>
        </div>
      </nav>

      <nav>
        <ul className="hidden flex justify-between w-[430px] px-8 text-dark">
          <li><a href="#">Home</a></li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>
      </nav>
    </header>
  )
}