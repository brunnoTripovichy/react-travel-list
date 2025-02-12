export interface Item {
  id: string;
  name: string;
  packed: boolean;
  description?: string;
  quantity?: number;
}

export const data: Item[] = [
  {
    id: '23423b423vbnvcvbcb23v4',
    name: 'Passport',
    description: 'This is important',
    quantity: 2,
    packed: false,
  },
  {
    id: 'jnhjfgjh234hgjh2g34hg23',
    name: 'Socks',
    description: 'Should be enough',
    quantity: 5,
    packed: true,
  },
  {
    id: '32gjghjg43jhjg232444jhgvg',
    name: 'Charger',
    description: 'Need for gps',
    quantity: 2,
    packed: false,
  },
];
