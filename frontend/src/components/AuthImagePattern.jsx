import { Shield } from "lucide-react";

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center mt-16">

        <div className="flex justify-center mb-8">
          <div className="w-40 h-40 rounded-3xl bg-primary/10 flex items-center justify-center">
            {/* <MessageSquare className="w-5 h-5 text-primary" /> */}
            <Shield className="w-32 h-32 text-primary" />
          </div>
        </div>

        {/* <h1 className="text-4xl font-bold mb-4">Iron Shield</h1> */}
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60 mb-28">{subtitle}</p>
        <p className="text-base-content/60"><span className="italic border-b-2 border-base-content/60 hover:text-base-content hover:border-base-content"><a href="https://yashmavani.framer.website/" target="_blank">Yash Mavani</a></span> Production</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
