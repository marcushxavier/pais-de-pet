import { X } from "lucide-react";
import { iBookmark } from "./Header";
import Wrapper from "./utils/Wrapper";

export default function SideBar({
  isOpen,
  toggle,
  bookmarks,
}: {
  isOpen: boolean;
  toggle: () => void;
  bookmarks: iBookmark[];
}) {
  return (
    <Wrapper isOpen={isOpen} toggle={toggle} className="flex justify-end">
      <div
        className={`${
          isOpen ? "w-60" : "w-0"
        } h-full p-2 text-lg font-semibold capitalize flex flex-col overflow-hidden transition-all bg-background rounded-l-lg`}
      >
        <div className="flex justify-end h-10 w-full">
          <X className="w-10 h-full" />
        </div>
        {bookmarks.map(({ anchor, name }) => (
          <HeaderLink key={name} anchor={anchor} name={name} />
        ))}
      </div>
    </Wrapper>
  );
}

function HeaderLink({ anchor, name }: { name: string; anchor: string }) {
  return (
    <a
      className="w-full py-2 border-b border-zinc-400 text-center hover:bg-neutral-200"
      href={`#${anchor}`}
    >
      {name}
    </a>
  );
}
