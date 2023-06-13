import { icons } from "@/types";
import {
  CakeIcon,
  CheckIcon,
  TagIcon,
  UserPlusIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React from "react";

type Props = {
  icon: icons;
};
function Icon({ icon }: Props) {
  if (icon === icons.CAKE) return <CakeIcon />;
  if (icon === icons.CHECK) return <CheckIcon />;
  if (icon === icons.CROSS) return <XMarkIcon />;
  if (icon === icons.NEW_USER) return <UserPlusIcon />;
  if (icon === icons.TAG) return <TagIcon />;
  if (icon === icons.USERS) return <UsersIcon />;

  return <p>Invalid Icon</p>;
}

export default Icon;
