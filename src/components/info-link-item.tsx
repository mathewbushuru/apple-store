import { type ReactNode } from "react";
import { Link } from "react-router-dom";

export default function InfoLinkItem({
  icon,
  description,
  linkTextNode,
  linkUrl,
}: {
  icon: ReactNode;
  description: string;
  linkTextNode: ReactNode;
  linkUrl: string;
}) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <div className="w-8">{icon}</div>

      <div>
        <p className="font-semibold">{description}</p>
        <Link
          to={linkUrl}
          className="flex items-center font-light text-blue-500 hover:cursor-pointer hover:underline"
        >
          {linkTextNode}
        </Link>
      </div>
    </div>
  );
}
