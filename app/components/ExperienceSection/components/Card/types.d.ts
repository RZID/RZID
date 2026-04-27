// External Types
import type { Experience } from "~/types";

export default interface ExperienceCardProps {
  exp: Experience;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}
