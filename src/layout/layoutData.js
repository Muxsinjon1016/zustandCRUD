import { PlusCircleOutlined, EyeOutlined } from "@ant-design/icons";
import { nanoid } from "nanoid";
export const layoutData = [
  {
    key: nanoid(),
    label: "Show all",
    icon: EyeOutlined,
    path: "/",
  },
  {
    key: nanoid(),
    label: "Create",
    icon: PlusCircleOutlined,
    path: "/create",
  },
];
