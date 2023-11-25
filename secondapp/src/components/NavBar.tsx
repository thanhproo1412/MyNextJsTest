import Image from 'next/image'
import Link from "next/link";
import styles from "./css/NavBarCss.module.css";
import Pagination from '@/app/ui/invoices/pagination';
import Search from '@/app/ui/search';
import Table from '@/app/ui/invoices/table';
import { CreateInvoice } from '@/app/ui/invoices/buttons';
import { lusitana } from '@/app/ui/fonts';
import { InvoicesTableSkeleton } from '@/app/ui/skeletons';
import { Suspense } from 'react';

export const NavBar = () => {

  return (

    <nav className={`${styles['navbar']} `}>
      <div className="container mx-auto flex justify-between items-center">

        <ul className="flex">
          <Link href=""
            className={styles['logo']}><Image src='/HTlogo.png' alt="me" width="150" height="40" />
          </Link>
          <Link href="about" className={` ${styles['active']} `}><span>Trang chủ</span></Link>
          <Link href="contact" className=""><span>Tin tức</span></Link>
          <Link href="login" className=""><span>Diễn đàn</span></Link>
          <Link href="signup" className=""><span>Sự kiện</span></Link>
          <Link href="signup" className=""><span>Thư viện</span></Link>
        </ul>

        <ul className="flex">
          <div className="w-full">
            <div className="flex w-full items-center justify-between">
              <h1 className={`${lusitana.className} text-2xl`}>Invoices</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
              <Search placeholder="Search invoices..." />
              <CreateInvoice />
            </div>
            {/*  <Suspense key={query + currentPage} fallback={<InvoicesTableSkeleton />}>
        <Table query={query} currentPage={currentPage} />
      </Suspense> */}
            <div className="mt-5 flex w-full justify-center">
              {/* <Pagination totalPages={totalPages} /> */}
            </div>
          </div>
          <Link href="login" className={`p-2 ${styles['login-button']} `}><span>Đăng nhập</span></Link>
          <Link href="signup" className={`p-2 ${styles['register-button']} `}><span>Đăng kí</span></Link>
        </ul>

      </div>
    </nav >

  )
};

