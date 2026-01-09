import skillsDataUsers from "../data/skills";

export const normalizeUsers = (apiUsers) =>
  apiUsers.map((apiUser, index) => {
    const skillData = skillsDataUsers[index % skillsDataUsers.length];

    return {
      id: apiUser.login.uuid,
      name: `${apiUser.name.first} ${apiUser.name.last}`,
      avatar: apiUser.picture.large,
      location: `${apiUser.location.city}, ${apiUser.location.country}`,
      rating: skillData.rating,
      bio: skillData.bio,
      about: skillData.about,
      skills: skillData.skills,
      wants: skillData.wants,
      completedSwaps: skillData.completedSwaps,
      dateJoined: skillData.dateJoined
    };
  });
