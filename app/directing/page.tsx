//"use client";
import { POST } from "../api/send/route";
import Link from "next/link";


const directing = () => {

   POST();


  return (
    <div className="directingContainer">
      <p className="text">
        {}
        Thank you for shopping
        <br />
        You will recieve an email. Besure to check it
      </p>
      <Link className="nextLink" href="/">
        Go Back
      </Link>
    </div>
  );
};

export default directing;
