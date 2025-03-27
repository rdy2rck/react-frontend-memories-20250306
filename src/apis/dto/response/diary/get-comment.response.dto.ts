import ResponseDto from "../response.dto";
import { Comment } from "src/types/interfaces";

// interface: get comment response body DTO //
export default interface GetCommentResponseDto extends ResponseDto {
  comments: Comment[];
}