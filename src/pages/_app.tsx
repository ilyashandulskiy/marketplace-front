import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {NavBar} from "@/components/NavBar/NavBar";
import {Toaster} from "react-hot-toast";
import NextNProgress from 'nextjs-progressbar';

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <NavBar />
    <Toaster position="top-right" />
    <NextNProgress color="#60A5FA" />
    <Component {...pageProps} />
  </div>
}
