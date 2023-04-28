import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from "next/head";
import NavBar from '../components/NavBar'
import CatalogSearch from "@/components/CatalogSearch";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
        <Head>
          <title>Library System</title>
          <meta name="description" content="Library" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
          <h2>Welcome to the Library Management System</h2>
          <p style={{ textTransform: 'none',
              marginLeft: '40px',
              marginTop: '30px',
              width: 'fit-content',
              padding: '20px',
              borderRadius: '10px',
                backgroundColor: 'white'}}>Select Catalog in the navigation to see the collection of books <br/>
          Members shows all members registered within the library <br/>
          Manage Library adds members or titles to the library</p>
      </>
  )
}
