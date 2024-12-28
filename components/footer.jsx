import Link from 'next/link';
import React from 'react'

const Footer = () => {
    return (
      <footer className="bg-[#2f3239] text-white py-10 lg:px-16">
        <div className="container-fluid mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ff7361]">Where We Are?</h3>
            <p className="mb-4 text-[#c2c8d4]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi adipiscing gravida odio, sit amet suscipit risus ultrices eu.
            </p>
            <p className="mt-4 font-bold text-[#ff7361]">Address:</p>
            <p className='text-[#c2c8d4]'>Ask Me Network, 33 Street, syada Zeinab, Cairo, Egypt.</p>

            <p className="mt-4 font-bold text-[#ff7361]">Support:</p>
            <p className='mb-3 text-[#c2c8d4]'>Support Telephone No : (+2)01111011110</p>
            <p className='text-[#c2c8d4]'>Support Email Account : info@example.com</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ff7361]">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-[#c2c8d4]">Home</Link></li>
             
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ff7361]">Popular Questions</h3>
            <div>
              <p className="mb-2 text-[#c2c8d4]">This is my first Question</p>
              <p className="text-[#ff7361] text-sm">Feb 22, 2014</p>
            </div>
            <div className="mt-4">
              <p className="mb-2 text-[#c2c8d4]">This Is My Second Poll Question</p>
              <p className="text-[#ff7361] text-sm">Feb 22, 2014</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-[#ff7361]">Latest Tweets</h3>
            <p className='text-[#c2c8d4]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lorem quam.</p>
            <p className="text-[#ff7361]  text-sm mt-2">Feb 22, 2014</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-[#ff7361]">
          <p>Copyright 2014 ASK me Bro!</p>
        </div>
      </footer>
    );
 
}
export default Footer;
