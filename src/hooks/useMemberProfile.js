import { useMemo } from "react";

export const useMemberProfile = (user) => {
  return useMemo(() => {
    if (!user) return null;

    return {
      ...user,
      offers: Array.isArray(user.skills)
        ? user.skills.map((s) => (s.name ? s.name : String(s)))
        : [],
      wants: Array.isArray(user.wants)
        ? user.wants.map((w) => (typeof w === "string" ? w : w.name))
        : [],
    };
  }, [user]);
};
