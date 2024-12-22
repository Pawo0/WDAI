export interface User {
  id: number;
  username: string;
  fullName: string;
}

export interface KomentarzProps {
  id: number;
  body: string;
  postId: number;
  likes: number;
  user: User;
}
