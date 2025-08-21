import { useState } from "react";
import { useExample } from "@/react-query/useExample";
import { Button, Card, Tag } from "antd";

function Example() {
  const [id, setId] = useState(1);
  const { data, error, isLoading } = useExample({ id });

  if (id < 1) {
    setId(1);
  }
  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen w-full p-5">
      <div className="flex flex-col md:flex-row gap-2 items-center justify-center w-full">
        <Button
          type="primary"
          disabled={isLoading}
          loading={isLoading}
          onClick={() => setId(id - 1)}
          className="w-full"
        >
          Previous Data
        </Button>
        <Button
          type="primary"
          disabled={isLoading}
          loading={isLoading}
          onClick={() => setId(id + 1)}
          className="w-full"
        >
          Next Data
        </Button>
      </div>
      <Card title={data?.title} className="w-full" loading={isLoading}>
        <p>{data?.userId}</p>
        <p>{data?.id}</p>
        <p>
          {data?.completed ? (
            <Tag color="green">Completed</Tag>
          ) : (
            <Tag color="red">Not Completed</Tag>
          )}
        </p>
      </Card>
    </div>
  );
}

export default Example;
