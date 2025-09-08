import { CardView } from '@haloui/ui';

const items = [
  { title: 'Ring' },
  { title: 'Necklace' },
  { title: 'Bracelet' },
];

export default function CardViewPage() {
  return (
	<CardView
	  items={items}
	  renderItem={(p) => <strong>{p.title}</strong>}
	/>
  );
}