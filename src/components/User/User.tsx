import { useCurrentUserQuery } from '@/generated/graphql';

export const useUser = () => {
  const { data } = useCurrentUserQuery();
  return data?.authenticatedItem;
};
