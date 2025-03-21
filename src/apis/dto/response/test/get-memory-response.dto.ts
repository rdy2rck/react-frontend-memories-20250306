import { MemoryTest } from "../../../../types/interfaces";
import ResponseDto from "../response.dto";

// interface: get memory response body DTO //
export default interface GetMemoryResponseDto extends ResponseDto {
  memoryTests: MemoryTest[];
}