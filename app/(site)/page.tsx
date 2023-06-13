import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="min-h-full flex flex-row justify-between bg-gray-100">
      <div className="w-full bg-[url('/images/3.jpg')] bg-cover bg-center"></div>
      <div className="w-full flex flex-col justify-center items-center">
        <Image
          className="mb-4"
          src="/images/logo.PNG"
          alt="Logo"
          width={210}
          height={50}
        />
        <h2
          className="
            mt-6 
            text-center 
            text-3xl 
            font-bold 
            tracking-tight 
            text-gray-900
          "
        >
          Hello Again!
        </h2>
        <h2
          className=" 
            text-center 
            tracking-tight 
            text-gray-700
          "
        >
          Welcome back!
        </h2>
        <AuthForm />
      </div>
    </div>
  );
}
