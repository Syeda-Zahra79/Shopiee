
import { useRouter } from "next/navigation";
import { POST } from "../api/send/route";
import Link from "next/link";

const directing = () => {
  const router = useRouter()
  POST();

  setTimeout(() => {
    router.push("/");
  }, 10000);


  return (
    <div className="directingContainer">
      <p className="text">
        Thank you for shopping
        <br />
        You will recieve an email. Besure to check it
      </p>
      <Link className="nextLink" href="/">Go Back</Link>
    </div>
  );
};

export default directing;
