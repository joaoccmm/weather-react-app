import clearBg from '../Assets/clear-sky-bg.jpeg';
import drizzleBg from '../Assets/drizzle-bg.jpg';
import drizzleIcon from '../Assets/drizzle.png';
import cloudBg from '../Assets/cloud-bg.jpg';
import clearicon from '../Assets/clear.png';
import cloudIcon from '../Assets/cloud.png';
import snowBg from '../Assets/snow-bg.jpg';
import rainIcon from '../Assets/rain.png';
import rainBg from '../Assets/rain-bg.jpg';
import snowIcon from '../Assets/snow.png';

export const weatherIconMapping = {
  '01d': clearicon,
  '02d': cloudIcon,
  '03d': drizzleIcon,
  '04d': drizzleIcon,
  '09d': rainIcon,
  '10d': rainIcon,
  '04n': snowIcon,
  '11d': snowIcon,
  '13d': snowIcon
};

export const weatherBackgroundMapping = {
  '01d': clearBg,
  '02d': cloudBg,
  '03d': drizzleBg,
  '04d': drizzleBg,
  '09d': rainBg,
  '10d': rainBg,
  '04n': snowBg,
  '11d': snowBg,
  '13d': snowBg
};

export const weatherBackgroundMappingColor = {
  '01d': "clearBg",
  '02d': "cloudBg",
  '03d': "drizzleBg",
  '04d': "drizzleBg",
  '09d': "rainBg",
  '10d': "rainBg",
  '04n': "snowBg",
  '11d': "snowBg",
  '13d': "snowBg"
};
