import { ExampleAPI } from "@/service/example";
import { useQuery } from "@tanstack/react-query";

export const QUERY_KEY = ["EXAMPLE_MANAGEMENT"];

const fetchExample = async ({ id }: { id: number }) => {
  const response = await ExampleAPI.getExample({ id });
  return response;
};

export const useExample = ({ id }: { id: number }) => {
  return useQuery({
    queryKey: [QUERY_KEY, id],
    queryFn: () => fetchExample({ id }),
  });
};
