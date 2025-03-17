import { JoinType } from "../../../../types/aliases";

// interface: sign up request body DTO //
export default interface SignUpRequestDTO {
  userId: string;
  userPassword: string;
  name: string;
  address: string;
  detailAddress: string | null;
  joinType: JoinType;
  snsId?: string;
}