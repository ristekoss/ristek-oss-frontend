import { useEffect, useState } from "react";
import ContributorsCard from "../components/ContributorsCard";
import { Contributor } from "../type";

export default function ContributorsPage() {
  const [contributors, setContributors] = useState<Contributor[] | null>(null);

  useEffect(() => {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
      },
    };

    fetch(
      `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/repos/ristekoss/ristek-oss-frontend/contributors`,
      options
    )
      .then((res) => res.json())
      .then((resJson) => {
        const contributors = resJson.map((contributor: Contributor) => {
          return { ...contributor, role: "Front-End Developer" };
        });
        setContributors(contributors);
      });
  }, []);

  return (
    <div className="relative bg-[#F1F5F9] flex items-center">
      <div className="absolute flex flex-col justify-between w-[100%] h-[100%]">
        <div className="flex flex-row w-[100%] justify-center items-center pt-[40px]">
          <img
            src={"/assets/decor-s-1.svg"}
            className="left-0 max-w-[15%]"
          ></img>
          <p className="text-[color:var(--primary-colors-purple-heart,#5038BC)] sm:text-7xl text-2xl text-center font-bold">
            The Developers!
          </p>
          <img
            src={"/assets/decor-s-2.svg"}
            className="right-0 max-w-[15%]"
          ></img>
        </div>

        <div className="flex flex-row sm:justify-between w-[100%] justify-center items-center bottom-0">
          <img
            src={"/assets/decor-m-1.svg"}
            className="sm:block hidden left-0 "
          ></img>
          <img
            src={"/assets/decor-m-2.svg"}
            className="sm:right-0"
          ></img>
        </div>
      </div>

      <div className="relative flex flex-wrap align-center justify-center gap-[30px] sm:mt-[256px] mt-[156px] mb-[300px] pl-[42px] pr-[42px]">
        {contributors
          ? contributors.map((contributors, index) => {
              return (
                <ContributorsCard
                  contributor={contributors}
                  key={index}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
