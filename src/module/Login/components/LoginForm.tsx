import { Form, Input, Button, Alert } from "antd";
import type { LoginRequest } from "@/service/auth/model";

const { Item } = Form;

interface LoginFormProps {
  onSubmit: (values: LoginRequest) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

/**
 * Reusable login form component
 * Terpisah dari page untuk memudahkan testing dan reuse
 */
export function LoginForm({ onSubmit, isLoading, error }: LoginFormProps) {
  return (
    <Form
      name="login"
      layout="vertical"
      onFinish={onSubmit}
      autoComplete="off"
      requiredMark={false}
      size="large"
      className="w-full max-w-sm"
    >
      {error && (
        <Item>
          <Alert
            message={error}
            type="error"
            showIcon
            closable
            className="mb-2"
          />
        </Item>
      )}

      <Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: "Email wajib diisi" },
          { type: "email", message: "Format email tidak valid" },
        ]}
      >
        <Input placeholder="nama@email.com" type="email" disabled={isLoading} />
      </Item>

      <Item
        name="password"
        label="Password"
        rules={[
          { required: true, message: "Password wajib diisi" },
          { min: 8, message: "Password minimal 8 karakter" },
        ]}
      >
        <Input.Password placeholder="••••••••" disabled={isLoading} />
      </Item>

      <Item className="mb-0">
        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
          disabled={isLoading}
          block
          className="h-12 font-medium"
        >
          Masuk
        </Button>
      </Item>
    </Form>
  );
}
