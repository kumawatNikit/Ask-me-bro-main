import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-[#1c3a40] text-white py-10 lg:px-16">
        <div className="container-fluid mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#9c9695]">Where We Are?</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi adipiscing gravida odio, sit amet suscipit risus ultrices eu.
            </p>
            <p className="mt-4 font-bold text-[#9c9695]">Address:</p>
            <p>Ask Me Network, 33 Street, syada Zeinab, Cairo, Egypt.</p>

            <p className="mt-4 font-bold text-[#9c9695]">Support:</p>
            <p className='mb-3'>Support Telephone No : (+2)01111011110</p>
            <p>Support Email Account : info@example.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#9c9695]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-orange-500">Home</Link></li>
             
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#9c9695]">Popular Questions</h3>
            <div>
              <p className="mb-2">This is my first Question</p>
              <p className="text-[#9c9695] text-sm">Feb 22, 2014</p>
            </div>
            <div className="mt-4">
              <p className="mb-2">This Is My Second Poll Question</p>
              <p className="text-[#9c9695] text-sm">Feb 22, 2014</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#9c9695]">Latest Tweets</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam.</p>
            <p className="text-[#9c9695]  text-sm mt-2">Feb 22, 2014</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-[#9c9695]">
          <p>Copyright 2014 ASK me Bro!</p>
        </div>
      </footer>
    );
 
}
export default Footer;
