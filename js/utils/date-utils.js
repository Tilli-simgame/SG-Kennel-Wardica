// Date utility functions

/**
 * Calculate age from a date of birth string in format DD.MM.YYYY
 * @param {string} dobString - Date of birth in format DD.MM.YYYY
 * @returns {object} Object containing years, months, and isInMonths flag
 */
export function calculateAge(dobString) {
  // Parse the date string (DD.MM.YYYY)
  const parts = dobString.split('.');
  if (parts.length !== 3) {
    console.error('Invalid date format. Expected DD.MM.YYYY');
    return { years: 0, months: 0, isInMonths: false };
  }
  
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Months are 0-indexed in JS
  const year = parseInt(parts[2], 10);
  
  const dob = new Date(year, month, day);
  const today = new Date();
  
  // Calculate the difference in years
  let years = today.getFullYear() - dob.getFullYear();
  
  // Adjust age if birthday hasn't occurred yet this year
  const monthDiff = today.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    years--;
  }
  
  // Calculate months for puppies
  let months = (today.getMonth() + 12 - dob.getMonth()) % 12;
  
  // Adjust months if day of month hasn't been reached
  if (today.getDate() < dob.getDate()) {
    months--;
    // Handle case where months becomes negative
    if (months < 0) months = 11;
  }
  
  // Calculate total months for puppies under 1 year
  const totalMonths = years * 12 + months;
  
  return {
    years,
    months: totalMonths,
    isInMonths: years < 1
  };
}

/**
 * Get formatted age string based on dog's age
 * @param {string} dobString - Date of birth in format DD.MM.YYYY
 * @returns {string} Formatted age string (e.g., "2 vuotta" or "5 kuukautta")
 */
export function getFormattedAge(dobString) {
  const age = calculateAge(dobString);
  
  if (age.isInMonths) {
    return `${age.months} kuukautta`;
  } else {
    return `${age.years} vuotta`;
  }
}

/**
 * Format a date string from DD.MM.YYYY to a more readable format
 * @param {string} dateString - Date in format DD.MM.YYYY
 * @returns {string} Formatted date
 */
export function formatDate(dateString) {
  const parts = dateString.split('.');
  if (parts.length !== 3) {
    return dateString;
  }
  
  const day = parts[0];
  const month = parts[1];
  const year = parts[2];
  
  // Finnish date format
  return `${day}.${month}.${year}`;
}
