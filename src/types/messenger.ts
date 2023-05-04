export interface IOpenMessenger {
  (data: Omit<MessengerOption, 'opening'>): void
}

export interface MessengerOption {
  status: boolean
  info: string
  opening: boolean
}
