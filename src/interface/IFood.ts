export default interface IFood {
  id: number;
  image: string;
  title: string;
  description: string;
  meal: 'breakfast' | 'dinner' | 'lunch';
}
