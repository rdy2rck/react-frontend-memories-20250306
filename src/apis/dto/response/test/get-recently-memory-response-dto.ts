import { MemoryTest } from "../../../../types/interfaces";
import ResponseDto from "../response.dto";

// interface: get recently memory response body DTO //
export default interface GetRecentlyMemoryResponseDto extends ResponseDto {
  memoryTests: MemoryTest[];
}