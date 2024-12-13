import { ReactNode } from "react";
type ContainerProps={
  children:ReactNode,
  className?:string,
}
const Container = ({ children, className }:ContainerProps) => {
  return <div className={`px-[3%] md:px-[5%] py-[3%] ${className}`}>{children}</div>;
};

export default Container;
