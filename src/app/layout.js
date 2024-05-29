import { Roboto } from 'next/font/google'
import "bootstrap/dist/css/bootstrap.min.css"
import "./globals.css";
import Navbar from "./components/Nabar";
import Footer from "./components/Footer";


const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
 

export const metadata = {
  title: "Kashish Gadhiya's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Navbar />
      <main className=" max-w-7xl p-2 mx-auto maindiv ">
       
    
        {children}
    </main>
    <Footer className="max-w-7xl p-2 mx-auto"/>
        </body>
    </html>
  );
}