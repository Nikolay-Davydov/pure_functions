import { liveIndicator } from '../liveIndicator';

test('liveHero healthy', () => {
  const data = { name: 'Маг', health: 90 };

  const result = liveIndicator(data);
  expect(result).toEqual('healthy');
});

test('liveHero wounded', () => {
  const data = { name: 'Маг', health: 40 };

  const result = liveIndicator(data);
  expect(result).toEqual('wounded');
});

test('liveHero critical', () => {
  const data = { name: 'Маг', health: 5 };

  const result = liveIndicator(data);
  expect(result).toEqual('critical');
});

test('liveHero invalid data', () => {
  const data = { name: 'Маг', health: 'a' };

  const result = liveIndicator(data);
  expect(result).toEqual('invalid data');
});
