export const formatINR = (value: number, compact: boolean = false): string => {
  const numValue = Number(value) || 0;
  if (compact) {
    if (numValue >= 10000000) {
      return `₹${(numValue / 10000000).toFixed(2)} Cr`;
    } else if (numValue >= 100000) {
      return `₹${(numValue / 100000).toFixed(2)} L`;
    } else if (numValue >= 1000) {
      return `₹${(numValue / 1000).toFixed(1)} K`;
    }
  }
  return `₹${numValue.toLocaleString('en-IN', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })}`;
};

export const formatINRCutDecimal = (value: number, compact: boolean = false): string => {
  const numValue = Number(value) || 0;
  if (compact) {
    if (numValue >= 10000000) {
      return `₹${(numValue / 10000000).toFixed(2)} Cr`;
    } else if (numValue >= 100000) {
      return `₹${(numValue / 100000).toFixed(2)} L`;
    } else if (numValue >= 1000) {
      return `₹${(numValue / 1000).toFixed(1)} K`;
    }
  }
  return `₹${numValue.toLocaleString('en-IN', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  })}`;
};
