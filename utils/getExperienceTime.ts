const getExperienceTime = (startDate: Date) => {
  const currDate = new Date();

  var months;
  months = (currDate.getFullYear() - startDate.getFullYear()) * 12;
  months -= startDate.getMonth();
  months += currDate.getMonth();

  if (months < 12) {
    return `${months}+ month${months > 1 ? 's' : ''} experience`
  }
  else {
    const restMonths = months % 12
    const years = Math.round(months / 12)

    return `${years}+ year${years > 1 ? 's' : ''} experience`
  }
}

export default getExperienceTime
