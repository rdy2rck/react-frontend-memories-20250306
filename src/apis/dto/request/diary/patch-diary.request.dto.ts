import { Feeling, Weather } from "../../../../types/aliases";

export default interface PatchDiaryRequestDto {
  weather: Weather;
  feeling: Feeling;
  title: string;
  content: string;
}