export const dust10 = (pm) => {
  if (pm <= 20) {
    return '아주 좋음';
  } else if (pm <= 50) {
    return '좋음';
  } else if (pm <= 100) {
    return '보통';
  } else if (pm <= 200) {
    return '나쁨';
  }
  return '매우 나쁨';
};

export const dust25 = (pm) => {
  if (pm <= 10) {
    return '아주 좋음';
  } else if (pm <= 25) {
    return '좋음';
  } else if (pm <= 50) {
    return '보통';
  } else if (pm <= 75) {
    return '나쁨';
  }
  return '매우 나쁨';
};
