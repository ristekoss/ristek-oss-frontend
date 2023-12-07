import Image from "next/image";
import { Contributors } from "../type";

interface Props {
  contributor: Contributors;
}

export default function ContributorsCard({ contributor }: Props): JSX.Element {
  return (
    <div
      className="flex w-[376px] items-start gap-2.5 
                        shadow-[0px_4px_8px_0px_rgba(0,0,0,0.20)] sm:px-5 px-3 sm:py-4 py-2.5 rounded-[20px] 
                        sm:max-w-[376px] max-w-[304px] sm:max-h-[138px] max-h-[100px]"
    >
      {/* <div
        className="sm:w-[160px] w-[120px] sm:h-[106px] h-[80px]"
        style={{ background: `url(${contributors.avatar_url})` }}
      ></div> */}
      {/* <Image
        src={contributors.avatar_url}
        alt={`${contributors.login}'s profile picture`}
        width={460}
        height={460}
      /> */}

      <img
        src={contributor.avatar_url}
        alt={`${contributor.login}'s profile picture`}
        className="sm:w-[105px] w-[80px]"
      ></img>

      <div className="flex flex-col max-w-[166px]">
        <p className="font-bold text-base text-[#45349F]">
          {contributor.login}
        </p>
        {/* <p className="font-normal text-base text-[#45349F]">{role}</p> */}
      </div>
    </div>
  );
}
