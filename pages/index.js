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
      </>
  )
}
