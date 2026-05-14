
import fascoLogo from '../assets/images/fasco-logo.svg'

export default function Footer() {
  return (
    <>
      <hr className="border-t-2 border-gray-300 mb-8"/>
      <footer className="container mx-auto max-w-7xl font-poppins text-dark">
        <div className="flex justify-between flex-wrap">
          <img
            className="h-8 mb-8 mr-8"
            src={fascoLogo}
            alt="fasco-logo"/>
          <nav>
            <ul className="flex gap-[70px]">
              <li>Home</li>
              <li>Shop</li>
              <li>Shop</li>
              <li>Contacts</li>
            </ul>
          </nav>
        </div>
        <p className="mb-5 mt-12 text-xs flex justify-center">
          Copyright © 2022 FASCO . All Rights Reseved.
        </p>
      </footer>
    </>
  )
}