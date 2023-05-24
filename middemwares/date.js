exports.testDate = (req, res, next) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();

  if (
    currentDay >= 1 &&
    currentDay < 5 &&
    currentHour >= 9 &&
    currentHour < 17
  ) {
    next();
  } else {
    res.send(
      "Sorry, the web application is only available during working hours (Monday to Friday, from 9 to 17)."
    );
  }
};
