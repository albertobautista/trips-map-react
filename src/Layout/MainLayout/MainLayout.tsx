import { FC } from "react";
import { Navbar } from "../../components/Navbar";

interface Props {
  children: React.ReactNode;
}
export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <div className="font-questrial">
      <Navbar />
      {children}
    </div>
  );
};
