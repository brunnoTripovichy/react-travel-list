export interface Item {
  id: number;
  name: string;
  description?: string;
  quantity?: number;
  packed?: boolean;
}

export const data: Item[] = [
  {
    id: 1,
    name: 'Passport',
    description: 'This is important',
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    name: 'Socks',
    description: 'Should be enough',
    quantity: 5,
    packed: true,
  },
  {
    id: 3,
    name: 'Charger',
    description: 'Need for gps',
    quantity: 2,
    packed: false,
  },
];
