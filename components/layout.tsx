import Image from "next/image";
import background from "../assets/images/5549709.jpg";
interface Props {
  children: React.ReactNode;
}
function Layout({ children }: Props) {
  return (
    <div className="w-auto bg-[#00000080]">
      {children}
      <div className="hidden lg:block fixed top-0 left-0 right-0 bottom-0 z-[-1]">
        <Image
          src={background}
          alt="background"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
export default Layout;
