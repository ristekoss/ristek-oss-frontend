import { Contributor } from "@/app/type";

export const joinBackendAndFrontend = (
  frontendContributors: Contributor[],
  backendContributors: Contributor[]
): Contributor[] => {
  const contributors = frontendContributors;
  backendContributors.forEach((backendContributor) => {
    const isAlreadyInFrontend = frontendContributors.filter(
      (frontendContributor) =>
        backendContributor.login == frontendContributor.login
    );

    if (isAlreadyInFrontend.length == 0) {
      contributors.push(backendContributor);
    } else {
      for (let i = 0; i < frontendContributors.length; i++) {
        if (contributors[i].login == backendContributor.login) {
          contributors[i].role = "Front-End & Back-End Developer";
        }
      }
    }
  });

  return contributors;
};
