'use client';

import SpinnerMini from '@/app/_components/SpinnerMini';
import axios from 'axios';
import { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

function UpgradeMain({ email }) {
  const [isLoading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const res = await axios.post('/api/checkout', {
        userEmail: email,
      });

      if (res.data.url) {
        window.location.href = res.data.url;
      } else {
        console.error('Error:', res.data.error);
      }
    } catch (error) {
      console.error('Checkout error:', error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center w-full px-2 mt-10">
      <div className="w-full flex justify-center mb-5">
        <h1 className="text-2xl md:text-3xl text-center max-w-2xl">
          Upgrade to add unlimited notes
        </h1>
      </div>

      <div className="w-full flex justify-center">
        <div className="border-2 border-gray-900 max-w-[80rem] w-full rounded-md">
          <h1 className="text-center text-xl p-2 bg-accent-50 m-2 rounded-md">
            Premium
          </h1>

          <table className="w-full border-collapse border-t-2 border-gray-900">
            <tbody>
              <tr className="border-b-2 border-gray-900">
                <td className="py-2 px-2 md:px-10 font-semibold border-r-2 border-gray-900">
                  Price
                </td>
                <td className="py-2 px-2 md:px-10">$10.00</td>
              </tr>
              <tr className="border-b-2 border-gray-900">
                <td className="py-2 px-2 md:px-10 font-semibold border-r-2 border-gray-900">
                  No. of Notes
                </td>
                <td className="py-2 px-2 md:px-10">Unlimited</td>
              </tr>
              <tr className="border-b-2 border-gray-900">
                <td className="py-2 px-2 md:px-10 font-semibold border-r-2 border-gray-900">
                  No. of Users
                </td>
                <td className="py-2 px-2 md:px-10">Unlimited</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button
        onClick={handleCheckout}
        disabled={isLoading}
        className="flex justify-center items-center bg-red-700 mt-5 rounded-md p-2 cursor-pointer w-[7rem] h-[3rem]"
      >
        {isLoading ? (
          <SpinnerMini size={25} />
        ) : (
          <div className="flex items-center gap-2">
            <span>Continue</span>
            <IoIosArrowForward size={25} />
          </div>
        )}
      </button>
    </div>
  );
}

export default UpgradeMain;
