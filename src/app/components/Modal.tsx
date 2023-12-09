import { useEffect, useState } from "react";
import ContributorsCard from "./ContributorsCard";
import { Contributor } from "../type";
import { joinBackendAndFrontend } from "@/utils/utils";

export default function Modal(props: any): JSX.Element {
  const [contributors, setContributors] = useState<Contributor[] | null>(null);

  useEffect(() => {
    const options: RequestInit = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
      },
    };

    if (props.modalApp === "Susun Jadwal") {
      fetch(
        `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/repos/ristekoss/susunjadwal-frontend/contributors`,
        options
      )
        .then((res) => res.json())
        .then(async (frontendContributors: Contributor[]) => {
          const backendResponse = await fetch(
            `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/repos/ristekoss/susunjadwal-backend/contributors`,
            options
          );
          let backendContributors: Contributor[] = await backendResponse.json();

          backendContributors = backendContributors.map(
            (contributor: Contributor) => {
              return { ...contributor, role: "Back-End Developer" };
            }
          );
          frontendContributors = frontendContributors.map(
            (contributor: Contributor) => {
              return { ...contributor, role: "Front-End Developer" };
            }
          );

          const contributors = joinBackendAndFrontend(
            frontendContributors,
            backendContributors
          );

          setContributors(contributors);
        });
    } else if (props.modalApp === "Ristek Link") {
      fetch(
        `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/repos/ristekoss/ristek-link/contributors`,
        options
      )
        .then((res) => res.json())
        .then((frontendContributors) => {
          frontendContributors = frontendContributors.map(
            (contributor: Contributor) => {
              return { ...contributor, role: "Front-End Developer" };
            }
          );
          setContributors(frontendContributors);
        });
    } else if (props.modalApp === "Ulas Kelas") {
      fetch(
        `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/repos/ristekoss/ulaskelas-frontend/contributors`,
        options
      )
        .then((res) => res.json())
        .then(async (frontendContributors) => {
          const backendResponse = await fetch(
            `${process.env.NEXT_PUBLIC_GITHUB_API_URL}/repos/ristekoss/ulaskelas-backend/contributors`,
            options
          );
          let backendContributors: Contributor[] = await backendResponse.json();

          backendContributors = backendContributors.map(
            (contributor: Contributor) => {
              return { ...contributor, role: "Back-End Developer" };
            }
          );
          frontendContributors = frontendContributors.map(
            (contributor: Contributor) => {
              return { ...contributor, role: "Front-End Developer" };
            }
          );

          const contributors = joinBackendAndFrontend(
            frontendContributors,
            backendContributors
          );

          setContributors(contributors);
        });
    }
  }, [props.modalApp]);

  return (
    <div className="fade fixed mt-[64px] flex flex-col items-center sm:gap-[20px] md:gap-[40px] gap-[12px] sm:p-[40px] md:p-[60px] p-[20px] w-[90%] sm:max-h-[564px] max-h-[80%] rounded-[20px] bg-white">
      <div className="flex flex-row w-full justify-between">
        <img
          src={"/icons/cross_box.svg"}
          className="invisible lg:block hidden"
        ></img>
        <p className="font-bold lg:text-[60px] sm:text-[36px] text-[24px]">
          People Behind This Product!
        </p>
        <img
          src={"/icons/cross_box.svg"}
          onClick={() => props.modal()}
          className="cursor-pointer w-[48px]"
        ></img>
      </div>
      <div
        className="flex flex-wrap gap-[20px] w-full justify-center overflow-auto 
                            pt-[8px] pb-[8px]
                            sm:pl-0 pl-[8px]
                            sm:pr-0 pr-[8px]"
      >
        {contributors
          ? contributors.map((contributor, index) => {
              return (
                <ContributorsCard
                  contributor={contributor}
                  key={index}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}
