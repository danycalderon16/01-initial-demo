import { CSSProperties, FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const style:CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

interface Props {
  path: string;
  text: string;
}

const ActiveLink:FC<Props> = ({ path, text }) => {
  const { asPath } = useRouter();
  return (
    <Link style={ asPath === path ? style: undefined} href={path}>
      {text}
    </Link>
  );
};

export default ActiveLink;
