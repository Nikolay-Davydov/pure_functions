export function liveIndicator(data) {
  if (data.health >= 50) {
    return 'healthy';
  }
  if (data.health < 50 && data.health > 15) {
    return 'wounded';
  }
  if (data.health <= 15) {
    return 'critical';
  }
  return 'invalid data';
}
