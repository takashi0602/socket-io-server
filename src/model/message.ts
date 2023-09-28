export type Message = {
  id: number;
  userId: number;
  body: string;
};

export type SendMessage = {
  roomId: number;
  userId: number;
  body: string;
};
