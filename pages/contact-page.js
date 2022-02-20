import Layout from "../components/Layout";
import Image from "next/image";

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <div className="font-bold">Contact info</div>
          <div className="flex justify-center mt-4">
            <Image
              className="rounded-full"
              src="/avatar.jpg"
              width={60}
              height={60}
              alt="Avatar"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
