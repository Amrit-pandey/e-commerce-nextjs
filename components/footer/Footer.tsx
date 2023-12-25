import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-black text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <FooterList>
            <h3 className="text-xl font-semibold">Shop Category</h3>
            <Link href="#">Phones</Link>
            <Link href="#">Laptops</Link>
            <Link href="#">Desktops</Link>
            <Link href="#">Watches</Link>
            <Link href="#">Tv</Link>
            <Link href="#">Accessories</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-xl font-semibold">Customer Service</h3>
            <Link href="#">Contact Us</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">Returns & Exchanges</Link>
            <Link href="#">Watches</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-xl font-semibold">About Us</h3>
            <p>At our electronics store, we are dedicated to providing the latest and greatest devices and accessories to our customers. with a wide selection of phones, TVs, laptops, watches, and accessories.</p>
            copy-right 2023 Shopify. All rights reserved
          </FooterList>
          <FooterList>
            <h3 className="text-xl font-semibold">Follow Us</h3>
            <div className="flex flex-row gap-3">
            <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <FaYoutube />
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
