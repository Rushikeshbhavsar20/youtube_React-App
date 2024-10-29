export const GOOGLE_API_KEY = "AIzaSyBMacpSv6bUeQoPe7hBEmjYFfqLiSbP32Y";

// utils.js
export const formatTimeAgo = (publishedAt) => {
    const publishedDate = new Date(publishedAt);
    const currentDate = new Date();
    const diffInMs = currentDate - publishedDate;
    
    const seconds = Math.floor(diffInMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
  
    if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
    if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
    if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
    if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
  };
  

  export const CountFormat = (count) => {
    if (count < 1000) {
      return count.toString(); // Direct number for counts less than 1000
    } else if (count < 1000000) {
      return (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K'; // Show in 'K' for thousands
    } else if (count < 1000000000) {
      return (count / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'; // Show in 'M' for millions
    } else {
      return (count / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B'; // Show in 'B' for billions
    }
  };
  