import Image from 'next/image'
import Link from "next/link";
import "./css/NavBarCss.css";
export const NavBar = () => {
  return (



    <nav className="bg-gray-800 px-4 py-6">
      <div className="container mx-auto flex justify-between items-center">


        <ul className="flex">
          <Link href=""
            className=""><Image src='/HTlogo.png' alt="me" width="64" height="64" />



          </Link>
          <Link href="about" className="text-gray-300 hover:text-gray-100 p-2">Trang chủ</Link>
          <Link href="contact" className="text-gray-300 hover:text-gray-100 p-2">Tint tức</Link>
          <Link href="login" className="text-gray-300 hover:text-gray-100 p-2">Diễn đàn</Link>
          <Link href="signup" className="text-gray-300 hover:text-gray-100 p-2">Sự kiện</Link>
          <Link href="signup" className="text-gray-300 hover:text-gray-100 p-2">Thư viện</Link>
        </ul>

        <ul className="flex">
          <Link href="login" className="text-gray-300 hover:text-gray-100 p-2">Đăng nhập</Link>
          <Link href="signup" className="text-gray-300 hover:text-gray-100 p-2">Đăng kí</Link>
        </ul>

      </div>
    </nav>


  )
};

