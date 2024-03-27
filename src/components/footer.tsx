import { Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <div className="bg-gray-600 grid grid-cols-4 gap-4 px-8 py-4 text-white">
            <div classname = "flex gap-2 flex-col">
               <p className="text-lg font-semibold underline cursor-pointer"> Company </p>
               <ul> 
                <li> About us </li> 
                <li> Our services </li> 
                <li> Privacy Polices </li> 
               </ul> 
            </div>
            <div classname = "flex gap-2 flex-col">
               <p className="text-lg font-semibold underline cursor-pointer"> Get Help</p>
               <ul> 
                <li> FAQ </li> 
                <li> Shipping </li> 
                <li> Returns </li> 
                <li> Order Status </li>
               </ul> 
            </div>
            <div classname = "flex gap-2 flex-col">
               <p className="text-lg font-semibold underline cursor-pointer"> Contact us </p>
               <ul> 
                <li> Number : </li> 
                <li> Email : </li> 
                <li> Address : </li>
               </ul> 
            </div>
            <div classname = "flex gap-4 flex-row ">
               <p className="text-lg font-semibold underline cursor-pointer"> Follow us on </p>
               <ul className="flex flex-row gap-4"> 
                <li> <Instagram/> </li> 
                <li> <Twitter/> </li> 
               </ul> 
            </div>
              {/* Add Google Maps iframe */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15229.580086843767!2d78.34918338715819!3d17.39282040000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb95a3a46e6a09%3A0x416d4841b787558!2sRD%20Designer%20Studio!5e0!3m2!1sen!2sin!4v1711207678417!5m2!1sen!2sin"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

