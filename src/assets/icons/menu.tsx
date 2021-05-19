import { IconProps } from "./icons";

export default function MenuIcon({ style, fill }: IconProps) {
  return (
    <svg
      fill={fill}
      style={style}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
    >
      <path d="M8.667,15h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,15,8.667,15z" />
      <path d="M8.667,37h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,37,8.667,37z" />
      <path d="M8.667,26h30c0.552,0,1-0.447,1-1s-0.448-1-1-1h-30c-0.552,0-1,0.447-1,1S8.114,26,8.667,26z" />
    </svg>
  );
}
