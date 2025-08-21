import { httpRequest } from "@/lib/request";
import type { ZExampleModel } from "./model";

const handleError = (error: any) => {
  console.error("Widget API error:", error);
  throw error.response?.data || error.message || "An unexpected error occurred";
};

export const ExampleAPI = {
  async getExample({ id }: { id: number }): Promise<ZExampleModel> {
    try {
      const response = await httpRequest.get(`/todos/${id}`);
      return response.data;
    } catch (error) {
      handleError(error);
      throw error;
    }
  },
};
