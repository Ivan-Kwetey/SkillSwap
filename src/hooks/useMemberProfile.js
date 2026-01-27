export const useMemberProfile = (user) => {
  return {
    ...user,
    offers: user?.offers || [],
    wants: user?.wants || [],
  };
};
