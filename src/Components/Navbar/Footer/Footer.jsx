import React from 'react';
import { CgMail } from 'react-icons/cg';
import { FaFacebook, FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
      
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
  <aside>
   CS-Support Care
    <p>
     CS-Support (Customer Support) prioritizes resolving technical,<br /> roduct, or service issues efficiently to ensure user success. <br /> Key focus areas include technical troubleshooting, reducing ticket resolution time,<br />   handling product inquiries,and improving customer satisfaction.
      
      
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About Us</a>
    <a className="link link-hover">Our Mission</a>
    <a className="link link-hover">Contact</a>
  
  </nav>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Product & Services</a>
    <a className="link link-hover">Customer Staties</a>
    <a className="link link-hover">Download Apps</a>
  
  </nav>
  <nav>
    <h6 className="footer-title">Information</h6>
   
    <a className="link link-hover">Privacy policy</a>
     <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Join Us</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
    <a className="link link-hover flex items-center gap-3"><FaXTwitter />@CS-Support System</a>
    <a className="link link-hover flex items-center gap-3"><FaLinkedinIn />@CS-Support System</a>
    <a className="link link-hover flex items-center gap-3"><FaFacebook/>@CS-Support System</a>
    
    <a className="link link-hover flex items-center gap-3"><CgMail />support@cst.com</a>
  </nav>
  
</footer> 

 <aside className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 ">
    <p className='text-center  md:ml-[700px]'>Copyright © {new Date().getFullYear()}CS - Support System All right reserved.</p>
  </aside>







            
        </div>
    );
};

export default Footer;