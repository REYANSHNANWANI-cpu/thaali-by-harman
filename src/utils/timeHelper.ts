export interface RestaurantStatus {
  isOpen: boolean;
  currentSession: 'lunch' | 'dinner' | 'between_sessions' | 'before_opening' | 'after_closing';
  statusMessage: string;
  subMessage: string;
  badgeColor: 'green' | 'amber' | 'red';
  currentTimeFormatted: string;
}

/**
 * Calculates real-time restaurant status based on Indian Standard Time (Sangli UTC+5:30)
 * Lunch: 11:00 AM - 3:00 PM (11:00 - 15:00)
 * Dinner: 7:00 PM - 10:30 PM (19:00 - 22:30)
 */
export function getSangliRestaurantStatus(): RestaurantStatus {
  // Compute current time in Asia/Kolkata timezone
  const now = new Date();
  const istString = now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });
  const istDate = new Date(istString);
  
  const hours = istDate.getHours();
  const minutes = istDate.getMinutes();
  const totalMinutes = hours * 60 + minutes;

  const lunchStart = 11 * 60;        // 11:00 AM (660 mins)
  const lunchEnd = 15 * 60;          // 3:00 PM (900 mins)
  const dinnerStart = 19 * 60;       // 7:00 PM (1140 mins)
  const dinnerEnd = 22 * 60 + 30;    // 10:30 PM (1350 mins)

  const timeFormatter = new Intl.DateTimeFormat('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });
  const currentTimeFormatted = timeFormatter.format(now);

  // Check Lunch Session
  if (totalMinutes >= lunchStart && totalMinutes < lunchEnd) {
    const minsLeft = lunchEnd - totalMinutes;
    return {
      isOpen: true,
      currentSession: 'lunch',
      statusMessage: 'Open Now — Serving Lunch',
      subMessage: minsLeft <= 30 ? `Lunch service ends in ${minsLeft} mins (at 3:00 PM)` : 'Lunch Session: 11:00 AM – 3:00 PM',
      badgeColor: 'green',
      currentTimeFormatted
    };
  }

  // Check Dinner Session
  if (totalMinutes >= dinnerStart && totalMinutes < dinnerEnd) {
    const minsLeft = dinnerEnd - totalMinutes;
    return {
      isOpen: true,
      currentSession: 'dinner',
      statusMessage: 'Open Now — Serving Dinner',
      subMessage: minsLeft <= 30 ? `Dinner service closes in ${minsLeft} mins (at 10:30 PM)` : 'Dinner Session: 7:00 PM – 10:30 PM',
      badgeColor: 'green',
      currentTimeFormatted
    };
  }

  // Between Lunch and Dinner (3:00 PM to 7:00 PM)
  if (totalMinutes >= lunchEnd && totalMinutes < dinnerStart) {
    const minsUntilDinner = dinnerStart - totalMinutes;
    const hoursUntil = Math.floor(minsUntilDinner / 60);
    const remainingMins = minsUntilDinner % 60;
    const timeText = hoursUntil > 0 ? `${hoursUntil}h ${remainingMins}m` : `${remainingMins} mins`;
    return {
      isOpen: false,
      currentSession: 'between_sessions',
      statusMessage: 'Currently Closed (Between Sessions)',
      subMessage: `Dinner opens at 7:00 PM (in ${timeText})`,
      badgeColor: 'amber',
      currentTimeFormatted
    };
  }

  // Morning before 11:00 AM
  if (totalMinutes < lunchStart) {
    return {
      isOpen: false,
      currentSession: 'before_opening',
      statusMessage: 'Opening Today at 11:00 AM',
      subMessage: 'Lunch Session: 11:00 AM – 3:00 PM',
      badgeColor: 'amber',
      currentTimeFormatted
    };
  }

  // Night after 10:30 PM
  return {
    isOpen: false,
    currentSession: 'after_closing',
    statusMessage: 'Closed for the Night',
    subMessage: 'Opens tomorrow at 11:00 AM for Lunch',
    badgeColor: 'red',
    currentTimeFormatted
  };
}
