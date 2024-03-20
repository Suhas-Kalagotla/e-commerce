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
        </div>
    )
}

